# Top nadador set: 2º conjunto -25% (thema 18.5)

Kortingen in Shopify (automatisch):
- **2ª unidad al -25%** (BXGY): koop 1 top nadador set, 2e set -25%. Beide kleuren, herhaalt per 2 sets.
- **2 o más: -10%**: geldt nu voor collectie `dto-2-o-mas` (tag `conjunto`, titel zonder "top nadador")
  + `espalda-abierta`. De top nadador telt dus niet mee voor de 10%.
- Beide kortingen combineren met elkaar (product + product), niet met de ORDER-codes (BIENVENIDA10 enz.).

Getest met draftOrderCalculate:
- 2x top nadador (zelfde of gemengde kleur): -12,49 (25% op 1 set)
- 4x top nadador: -24,98
- 2x top nadador + 2x leggings: -12,49 + -4,98
- 1x top nadador + 1 ander conjunto: geen korting
- 2x leggings: -10%

Thema: `templates/product.json`, blok `bundle_offer` toont op `conjunto-padel-top-nadador-falda`
de 25%-tekst, op andere producten de 10%-tekst.
