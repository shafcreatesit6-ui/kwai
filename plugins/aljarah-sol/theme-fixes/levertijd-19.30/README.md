# 19.30 – Levertijd op de productpagina

**Thema:** Aljarah Sol 19.30 - Levertijd productpagina (kopie van 19.29, niet gepubliceerd)

## Productpagina (templates/product.json + product.popflex.json)
- Bestaand blok `delivery_eta` sterker gemaakt: kader in goudtint,
  "Recíbelo entre el 1 dic y el 14 dic" (7–15 werkdagen, Spaanse feestdagen meegerekend)
  met daaronder "Envío gratis con seguimiento desde 35 € (península) · 14 días para devoluciones".
- Datum zonder weekdag (past op één regel).
- popflex-template: `delivery_eta` + `duties_line` staan nu direct boven de koopknop
  (stonden onder de beschrijving).

## Verzendopties (direct in Shopify aangepast, niet in het thema)
- Envío con seguimiento (7–15 días laborables)
- Envío gratis con seguimiento (7–15 días laborables)
- Envío con seguimiento a Baleares (10–18 días laborables) ×2

## Nog zelf doen
- Instellingen → Verzending en bezorging → Verwerkingstijd op 3–5 werkdagen
  (checkout toont nu "Se envía el siguiente día hábil", dat klopt niet met CJ).
