# Popflex-look (thema 19.7, kopie van 19.6)

- `ap-split-hero.liquid` (nieuw): twee staande campagnefoto's naast elkaar over de volle breedte, één foto op mobiel,
  altijd vanaf de bovenkant getoond (geen afgesneden hoofden). Kop, 2 knoppen.
- `ap-popflex.liquid` (nieuw, header-group): menu in hoofdletters; op de homepage ligt het menu transparant (wit logo
  en iconen) over de hero tot je scrolt; productkaarten 3:4 met beeld vanaf boven en zonder snelle-toevoegknop;
  vast zijlabel "-10% en tu primer pedido" dat de welkomst-popup opent (verdwijnt na aanmelden).
- `ap-welcome-popup.liquid`: elk element met `data-ap-pop-open` opent de popup.
- `header-group.json`: nieuw menu `menu-popflex` (Nuevo, Comprar todo, Pádel, Conjuntos, Para salir, Leggings,
  Espalda abierta), logo links, padding 12 (stappen van 4, anders weigert Shopify het bestand stil).
- `index.json`: split-hero bovenaan (chocolate over de schouder + vanilla met bal; mobiel: chocolate op de baan),
  oude slideshow uitgezet, daarna "Lo más nuevo" (8 producten, slider, collectie nuevo).
- `collection.json`: geen snelle-toevoegknop.

Getest op preview (desktop 1440 en mobiel 390): menu transparant boven de hero, knoppen in beeld, juiste mobiele foto,
zijlabel opent de popup, geen JS-fouten van het thema.
