# Thema 19.25 – Acceso anticipado Black Friday

Kopie van 19.24 (live). Niet gepubliceerd: de eigenaar zet het zelf live.

## Onderdelen
- **Pagina** `/pages/acceso-anticipado`
  - Paginasjabloon `acceso-anticipado` met sectie `sections/ap-early-access.liquid`.
  - Bevat: aanmelden, aftellen naar 19/11 00:00 (Spaanse tijd), bevestiging.
  - Vanaf 19/11 staat na het aanmelden de code direct in beeld.
  - Na 26/11 verschijnt een eindmelding.
- **Klantlabels:** `newsletter,acceso-anticipado`.
- **Segment:** "Acceso anticipado Black Friday" (`customer_tags CONTAINS 'acceso-anticipado'`).
- **Kortingscode ACCESO20**
  - 20 % vanaf 2 producten.
  - Alleen voor het segment.
  - Geldig 18-11-2026 23:00Z t/m 26-11-2026 22:59:59Z.
  - Zelfde producten en combinaties als RASCA20; eenmaal per klant.
- **Shopify Email-campagne:** maakt de eigenaar zelf aan in de admin.
  - Ontvangers: het segment.
  - Verzenden: 19/11 00:00 Madrid.
  - De tekst staat in `email-acceso.md`.

## Let op
- Zolang 19.24 live staat, toont de pagina een eenvoudige terugvalversie: de paginatekst met een gewoon aanmeldformulier.
- Shopify zet hCaptcha op klantformulieren. Vanuit de testomgeving kan daarom niet echt worden aangemeld (hcaptcha.com is geblokkeerd).
