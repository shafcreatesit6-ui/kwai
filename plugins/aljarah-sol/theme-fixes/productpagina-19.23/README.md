# Thema 19.23 – Productpagina maten (Shein-stijl, Aljarah-look)

Gebouwd op een kopie van 19.22 (Early Black Friday). Niet gepubliceerd: de eigenaar zet het zelf live.

## Wat is er nieuw
1. **Encuentra tu talla** (`snippets/ap-size-guide.liquid`): in de Guía de tallas.
   - "Mi talla habitual": klant kiest haar Spaanse maat (32–50) en krijgt de maat van dit model.
   - "Mis medidas": pecho/cintura/cadera in cm, via een Spaanse standaardtabel (1 cm marge) en daarna via `custom.ap_talla_eu`.
   - Valt de klant tussen twee maten, dan toont hij beide maten met uitleg (ceñido of cómoda).
   - De knop "Elegir talla X" kiest de maat op de pagina.
   - Laatste keuze wordt in localStorage (`ap-sf`) onthouden.
2. **EU-maat op de maatknoppen** (`snippets/product-variant-options.liquid`): "S" met "34" eronder, uit metafield `custom.ap_talla_eu`.
3. **Detalles del tejido** (`snippets/ap-fabric.liquid`): samenstelling, rek, transparantie, binnenkant en wassen, afgeleid uit de beschrijving.
   - Onbekend betekent dat de rij wordt weggelaten.
   - Overschrijven kan met metafield `custom.ap_tejido` (json).
4. **EU-maten aangevuld** (metafields, staan direct live): 11 producten waar `ap_talla_eu` ontbrak, overgenomen uit hun eigen maattabel.

## Sjablonen
- Gewijzigd: `templates/product.json` en `templates/product.popflex.json`.
- `size_guide` rendert in beide de gedeelde snippet.
- Het nieuwe blok `fabric_details` staat na `fit_tip`.
