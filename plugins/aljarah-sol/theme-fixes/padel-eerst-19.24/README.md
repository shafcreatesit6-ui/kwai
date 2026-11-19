# Thema 19.24 – Pádel eerst

Kopie van 19.23 (maatzoeker en productpagina). Niet gepubliceerd: de eigenaar zet het zelf live.

## 1. Homepage pádel-first (`templates/index.json`)
Nieuwe volgorde:
1. Estela-video
2. Looks-cirkels
3. **Pádel y tenis** (nieuw productraster, collectie `padel`)
4. Estela-foto's
5. Pádel-edit
6. Espalda abierta
7. Leggings
8. Quiz
9. Lookbook
10. Elige tu momento (Pádel, Espalda, Para salir)
11. Para salir
12. De rest

Wat eruit is:
- "Lo más nuevo" (`coll`) staat uit, omdat het vooral jurken liet zien.
- "Para salir" staat niet meer bovenaan.

Looks-cirkels (`sections/ap-stories.liquid`): Pádel eerst, Para salir achteraan.

## 2. Black Friday-week opgeschoond (`sections/header-group.json`)
- Van 20 t/m 26 nov 2026 (gelijk met de kraskaart RASCA20/RASCA15):
  - Het zijlabel "-10% en tu primer pedido" is verborgen.
  - De welkomst-pop-up was al dicht via de kraskaart.
- Lopende balk:
  - Nieuw blok "Black Friday: rasca y gana hasta un 20 % · hasta el 26/11", met een link naar pádel.
  - Het blok "10 % bij 2+" pauzeert die week (t6 tot 19/11, t7 weer vanaf 27/11).
- "-15 % vestidos de fiesta" (t0) stopt vanzelf op 19/11.
