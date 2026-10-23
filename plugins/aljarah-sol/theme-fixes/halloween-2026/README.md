# Halloween -25% (thema 19.0)

Kortingscode **HALLOWEEN25**: 25% op de hele bestelling, 1x per klant, geldig tot zo 1 nov 2026 23:59 (Madrid).
Combineert niet met de automatische kortingen (de hoogste korting wint), wel met verzendkortingen.

Alles in het thema stopt vanzelf na 1793573999 (= 1 nov 2026 23:59 Madrid):
- `ap-ticker.liquid` (nieuw, header-group): lopende zwarte actiebalk bovenaan.
- `announcement-bar.liquid`: wordt tijdens de actie niet getoond (anders crasht de Dawn-slider op een verborgen balk), daarna weer wel.
- `ap-welcome-popup.liquid`: tijdens de actie Halloween-tekst, foto en code HALLOWEEN25 (tags newsletter,halloween,
  eigen localStorage-sleutels); daarna weer de gewone 10%-instellingen.

Blijvend:
- `index.json`: nieuwe eerste heroslide "Hecha para ganar" (manga larga blanco, desktop + mobiele uitsnede).
- `ap-hero-slideshow.liquid`: maximum slides 6 -> 8.
- `ap-landscape-banner.liquid` (nieuw) + `product.json`: brede sfeerfoto onder de productinfo, alleen op
  conjunto-padel-manga-larga.

Foto's: aljarah-padel-manga-larga-blanco-smash-desktop.jpg (2000x1250) en -mobile.jpg (1000x1250, 4:5), muiscursor
uit de screenshot weggewerkt.

## 19.1: code automatisch toepassen
- Klik op de lopende balk -> /discount/HALLOWEEN25?redirect=/collections/all: code staat direct in de winkelwagen.
- Popup: na aanmelden haalt het script /discount/HALLOWEEN25 op, zodat de code al in de winkelwagen staat.
- Productpagina (bundle_offer-blok): zwarte regel "Halloween: X € con el código HALLOWEEN25" met link
  "Aplicar código"; X = prijs - floor(prijs*25/100) (zelfde afronding als Shopify) en werkt mee bij variantwissel.
Getest: alle 18 actieve producten krijgen 25% (draftOrderCalculate); winkelwagen toont "HALLOWEEN25 (-x €)".
