/* AP winkelwagen-extra's — Aljarah
   1. Balk "Nog €X tot gratis verzending" in winkelwagen en cart drawer
   2. Voorwaarden-regel onder de afrekenknop
   3. iPhone: lade altijd schermvullend, pagina eronder scrollt niet mee
   Werkt ook nadat de cart drawer zichzelf opnieuw opbouwt.
   18.3: drempel gelijk aan Shopify-verzending (35,00 €) en geen flikkering meer:
   na het herbouwen van de lade worden balk en voorwaarden meteen (vóór het tekenen)
   teruggezet met het laatst bekende totaal, daarna pas ververst. */
(function () {
  var cfg = window.apCart || {};
  var THRESHOLD = cfg.threshold || 3500; // in centen — gelijk aan 'Envío gratis' (>= 35,00 €) in Shopify
  var TERMS_URL = cfg.termsUrl || '/policies/terms-of-service';
  var REFUND_URL = cfg.refundUrl || '/policies/refund-policy';
  var total = null;
  var busy = false;
  var again = false;

  function money(cents) {
    return (cents / 100).toFixed(2).replace('.', ',') + ' €';
  }

  function barHtml() {
    if (total === null) return '';
    var left = THRESHOLD - total;
    var pct = Math.max(0, Math.min(100, Math.round((total / THRESHOLD) * 100)));
    var text = left > 0
      ? 'Te faltan <strong>' + money(left) + '</strong> para el envío gratis a la península'
      : '<strong>Envío gratis</strong> a la península: tu pedido se envía sin coste';
    return '<p class="ap-ship__text">' + text + '</p>' +
      '<div class="ap-ship__track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '" aria-label="Progreso hacia el envío gratis">' +
      '<span class="ap-ship__fill" style="width:' + pct + '%"></span></div>';
  }

  function inject() {
    // voorwaarden onder elke afrekenknop
    document.querySelectorAll('.cart__ctas').forEach(function (ctas) {
      var next = ctas.nextElementSibling;
      if (next && next.classList.contains('ap-terms')) return;
      var p = document.createElement('p');
      p.className = 'ap-terms';
      p.innerHTML = 'Al finalizar la compra aceptas nuestros <a href="' + TERMS_URL + '">términos y condiciones</a>. ' +
        'Tienes 14 días para desistir (<a href="' + REFUND_URL + '">política de devoluciones</a>).';
      ctas.parentNode.insertBefore(p, ctas.nextSibling);
    });

    // gratis-verzendingbalk boven het totaal
    var html = barHtml();
    document.querySelectorAll('.cart-drawer__footer, #main-cart-footer .js-contents').forEach(function (block) {
      var bar = block.querySelector(':scope > .ap-ship');
      if (!bar) {
        bar = document.createElement('div');
        bar.className = 'ap-ship';
        block.insertBefore(bar, block.firstChild);
      }
      if (bar.dataset.h !== html) { bar.dataset.h = html; bar.innerHTML = html; }
    });
  }

  function refresh() {
    if (busy) { again = true; return; }
    busy = true;
    fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart.js', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (cart) { total = cart.total_price; })
      .catch(function () {})
      .then(function () {
        busy = false;
        inject();
        if (again) { again = false; refresh(); }
      });
  }

  var style = document.createElement('style');
  style.textContent =
    '.ap-terms{margin:1.2rem 0 0;font-size:1.2rem;line-height:1.5;opacity:.75;text-align:center}' +
    '.ap-terms a{color:inherit;text-decoration:underline;text-underline-offset:.3rem}' +
    '.ap-ship{margin:0 0 1.6rem;text-align:left}' +
    '.ap-ship:empty{display:none}' +
    '.ap-ship__text{margin:0 0 .8rem;font-size:1.3rem;letter-spacing:.02em}' +
    '.ap-ship__track{height:3px;background:rgba(var(--color-foreground),.12);overflow:hidden}' +
    '.ap-ship__fill{display:block;height:100%;background:rgb(184,154,94);transition:width .6s ease}' +
    /* iPhone: height:100% volgt de kleine viewport, dus bij inklappende Safari-balk kwam de pagina onder de lade tevoorschijn */
    'cart-drawer.drawer{top:0;bottom:0;height:auto}' +
    'cart-drawer .drawer__inner,cart-drawer-items{overscroll-behavior:contain;-webkit-overflow-scrolling:touch}' +
    'html:has(cart-drawer.active){overflow:hidden}';
  document.head.appendChild(style);

  function isOwn(node) {
    return node.nodeType === 1 && (node.classList.contains('ap-ship') || node.classList.contains('ap-terms'));
  }

  var timer = null;
  var obs = new MutationObserver(function (list) {
    var relevant = list.some(function (m) {
      var t = m.target;
      if (!t || !t.closest) return false;
      if (t.closest('.ap-ship, .ap-terms')) return false;
      // eigen invoegingen tellen niet mee (voorkomt extra rondes)
      var nodes = [].slice.call(m.addedNodes).concat([].slice.call(m.removedNodes));
      if (nodes.length && nodes.every(isOwn)) return false;
      return !!t.closest('cart-drawer, #main-cart-footer, cart-items, #cart-icon-bubble');
    });
    if (!relevant) return;
    // meteen terugzetten (MutationObserver loopt vóór het tekenen) => geen verspringende lade
    inject();
    clearTimeout(timer);
    timer = setTimeout(refresh, 150);
  });
  function start() {
    refresh();
    obs.observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

/* 18.3: welkomst-popup (10%) nooit midden in het afrekenen.
   - Niet op de winkelwagenpagina.
   - Niet over een open winkelwagenlade: dan wacht hij tot de lade dicht is.
   Het bedankt-scherm na aanmelden (met de code) wordt nooit tegengehouden. */
(function () {
  function onCartPage() {
    var m = document.querySelector('main[data-template]');
    return (m && m.dataset.template === 'cart') || /^\/(?:[a-z]{2}(?:-[a-z]{2})?\/)?cart\/?$/i.test(location.pathname);
  }
  function drawerOpen() { return !!document.querySelector('cart-drawer.active'); }

  function setup() {
    var pop = document.querySelector('.ap-pop');
    if (!pop) return;
    var done = pop.querySelector('[data-ap-step="done"]');
    var waiting = false;

    function isThanks() { return done && !done.hidden; }
    function park() {
      pop.hidden = true;
      document.body.style.overflow = '';
    }

    new MutationObserver(function () {
      if (pop.hidden || isThanks()) return;
      if (onCartPage()) { park(); return; }
      if (drawerOpen()) { park(); waiting = true; }
    }).observe(pop, { attributes: true, attributeFilter: ['hidden'] });

    var drawer = document.querySelector('cart-drawer');
    if (drawer) {
      new MutationObserver(function () {
        if (!waiting || drawerOpen()) return;
        waiting = false;
        setTimeout(function () {
          if (drawerOpen() || onCartPage()) { waiting = true; return; }
          pop.hidden = false;
          document.body.style.overflow = 'hidden';
        }, 1200);
      }).observe(drawer, { attributes: true, attributeFilter: ['class'] });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup); else setup();
})();
