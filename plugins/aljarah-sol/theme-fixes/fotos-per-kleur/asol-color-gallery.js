/* Aljarah Sol: galerij per kleur
   De server rendert alleen de foto's van de gekozen kleur (snippet asol-color-keep).
   Dawn werkt bij een kleurwissel zelf de grote fotolijst bij, maar niet de thumbnails.
   Dit script zet na elke variantwissel de thumbnails (en zo nodig de fotolijst) gelijk
   aan de nieuwe server-HTML. */
(function () {
  if (window.asolColorGallery || typeof subscribe !== 'function' || typeof PUB_SUB_EVENTS === 'undefined') return;
  window.asolColorGallery = true;

  subscribe(PUB_SUB_EVENTS.variantChange, function (event) {
    var data = event && event.data;
    if (!data || !data.html || !data.variant) return;
    var sectionId = data.sectionId;
    var gallery = document.getElementById('MediaGallery-' + sectionId);
    var newGallery = data.html.getElementById('MediaGallery-' + sectionId);
    if (!gallery || !newGallery) return;

    // zonder variantfoto slaat Dawn de fotolijst over: dan zelf gelijkzetten
    if (!data.variant.featured_media) {
      var list = gallery.querySelector('#Slider-Gallery-' + sectionId);
      var newList = newGallery.querySelector('#Slider-Gallery-' + sectionId);
      if (list && newList) {
        list.innerHTML = newList.innerHTML;
        var viewer = gallery.querySelector('#GalleryViewer-' + sectionId);
        if (viewer && viewer.resetPages) viewer.resetPages();
      }
    }

    var thumbs = gallery.querySelector('#GalleryThumbnails-' + sectionId);
    if (!thumbs) return;
    var newThumbs = newGallery.querySelector('#GalleryThumbnails-' + sectionId);
    if (!newThumbs) {
      thumbs.hidden = true;
      return;
    }
    thumbs.hidden = false;
    thumbs.className = newThumbs.className;

    var thumbList = thumbs.querySelector('#Slider-Thumbnails-' + sectionId);
    var newThumbList = newThumbs.querySelector('#Slider-Thumbnails-' + sectionId);
    if (!thumbList || !newThumbList) return;
    thumbList.innerHTML = newThumbList.innerHTML;

    thumbList.querySelectorAll('[data-target]').forEach(function (item) {
      var button = item.querySelector('button');
      if (button) button.addEventListener('click', gallery.setActiveMedia.bind(gallery, item.dataset.target, false));
    });
    if (thumbs.resetPages) thumbs.resetPages();

    var active = gallery.querySelector('#Slider-Gallery-' + sectionId + ' .is-active');
    if (active && gallery.setActiveThumbnail) {
      gallery.setActiveThumbnail(thumbList.querySelector('[data-target="' + active.dataset.mediaId + '"]'));
    }
  });
})();
