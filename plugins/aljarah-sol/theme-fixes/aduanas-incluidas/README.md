# Aduanas incluidas (thema 18.9)

Thema 18.7 (extern bewerkt) verving op /policies/shipping-policy de zin "no tendrás que pagar aduanas ni
gastos adicionales" door een waarschuwing (`aljarah_corrections.import_notice`: mogelijk extra douanekosten,
"escríbenos antes de comprar"). Dat sprak de productpagina ("Impuestos y aduanas incluidos") tegen.

CJ heeft per ticket bevestigd dat btw en douane inbegrepen zijn (DDP). Daarom is in `layout/theme.liquid` de
vervanging weggehaald: de pagina toont weer gewoon het verzendbeleid uit Shopify.
De locale-sleutel `import_notice` staat nog in locales/es.json maar wordt nergens meer gebruikt.

## Beleid gelijkgetrokken (zelfde 18.9)
- `templates/product.json` (tab Envío): "y la información sobre importación" vervangen door
  "IVA y aranceles incluidos: no pagas nada al recibir tu pedido."
- `templates/index.json` (FAQ ¿Puedo devolverlo?): "sin usar y con sus etiquetas" -> "sin usar y sin daños" +
  retourkosten voor de klant behalve bij beschadigd/verkeerd (zoals in het retourbeleid).
- Verzendmethodes hernoemd: "Envío estándar (7–15 días laborables)" en "Envío gratis (7–15 días laborables)".
- Beleidsteksten (verzend/retour) moeten in de admin worden aangepast: de app mist `write_legal_policies`.
