# Cart: 1 regel per set (thema 18.6)

Probleem: de korting "2ª unidad al -25%" geldt maar voor een deel van de stuks. Shopify splitst
dan dezelfde variant in meerdere cart-regels (met en zonder korting). Op + klikken verhoogde
alleen 1 deelregel, waardoor er steeds nieuwe regels bij leken te komen.

Oplossing:
- `cart-drawer.liquid` en `main-cart-items.liquid`: regels met dezelfde variant (+ eigenschappen en
  verkoopplan) worden samen getoond als 1 regel: totaal aantal, totaalprijs, unieke kortingsnamen.
  Het hoeveelheidsveld krijgt `data-asol-group` = aantal deelregels.
- `cart.js`: bij een groep haalt `asolGroupRequest` de cart vers op (de sleutels van deelregels
  veranderen na elke wijziging) en stuurt 1 `/cart/update.js` met de nieuwe totale hoeveelheid:
  erbij op de eerste deelregel, eraf van de laatste. De 'max aantal'-foutcheck wordt voor groepen
  overgeslagen.

Getest (mobiel, preview 18.6): 1→2→3→4→5→4→3 in de drawer, + op de cartpagina en verwijderen:
steeds 1 regel, aantal en totaal gelijk aan Shopify (bv. 3 sets = 137,48 €), geen JS-fouten.
