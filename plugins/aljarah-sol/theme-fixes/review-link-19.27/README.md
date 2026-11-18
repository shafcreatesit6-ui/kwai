# Thema 19.27 – Review-link

Kopie van 19.26 (live). Niet gepubliceerd.

Het Judge.me-reviewblok wordt verborgen zolang een product nog geen reviews heeft (script in `sections/ap-popflex.liquid`). Daardoor kon niemand de eerste review schrijven.

Wat er nieuw is:
- In `snippets/ap-fabric.liquid` (staat op elke productpagina) zit nu een script.
- Met `?resena=1` achter een product-URL blijft het reviewblok zichtbaar en opent "Escribir una reseña" vanzelf.
- Zonder die parameter verandert er niets.
- Voorbeeld: `https://aljarahsol.com/products/vestido-arcilla-tenis-cremallera-mangas-desmontables?resena=1`
