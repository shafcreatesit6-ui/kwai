# Baleares-verzending en etiquetas (thema 19.2)

Gelijkgetrokken met het nieuwe verzend- en retourbeleid:
- España peninsular: 4,95 €, gratis vanaf 35 €, 1–3 + 6–12 werkdagen.
- Baleares: 14,95 €, of 10 € vanaf 35 €, 10–18 werkdagen.
- Canarias, Ceuta en Melilla: geen verzending.
- Retour: "sin usar y, si es posible, con sus etiquetas" (etiketten niet meer verplicht).

## Shopify-instellingen (niet in het thema)
- Verzendprofiel: zone "España peninsular" (47 provincies) en zone "Baleares" (PM) met de tarieven hierboven.
- Alle 18 productbeschrijvingen: blok "Envío y devoluciones" met de nieuwe Baleares- en etiquetas-tekst.
- SEO-omschrijvingen van 13 producten en 4 collecties, de homepage (shop-metafield global.description_tag) en de
  collectietekst van Conjuntos: "Envío gratis … a España peninsular" in plaats van "peninsular y Baleares" / "a España".
- Pagina seguir-mi-pedido: levertijd península 6–12, Baleares 10–18 werkdagen.

## Themabestanden
- `index.json` (templates): hero-tekst, USP en FAQ (verzendkosten en levertijd Baleares).
- `product.json` (templates): tab "Envío" met Baleares, USP "a la península".
- `es.json` (locales): `free_shipping_from` -> "Envío gratis península +35 €".
- `header-group.json` (sections): aankondiging en lopende balk -> "Envío gratis a la península desde 35 €".
- `ap-cart.js` (assets): voortgangsbalk in de winkelwagen "… para el envío gratis a la península".

Getest op de preview van 19.2: home, 5 collecties, 3 pagina's en alle 18 producten bevatten geen
"peninsular y Baleares", "y con sus etiquetas" of "a España desde 35" meer (ook niet in meta/og-tags).
