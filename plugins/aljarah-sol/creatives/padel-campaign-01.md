# Campaign 01: Pádel (Spain, women 22–40)

**Goal:** test 5 hooks for the lace pádel set and find a winner.
**Budget suggestion:** €10–15/day per ad set, 5–7 days, then keep the best 1–2.
**Landing pages:** `/products/conjunto-padel-encaje` (main), `/products/conjunto-padel-falda-plisada`, `/products/conjunto-padel-manga-larga`.
**Audience:** Spain peninsular + Baleares, women 22–40, interests: pádel, tenis, World Padel Tour / Premier Padel, fitness.

Base photo URL prefix: `https://cdn.shopify.com/s/files/1/1080/8141/4485/files/`

---

## C1. "La falda más bonita de la pista" (lace set, azul cielo)
- **Source image:** `asol-encaje-top-azul-set.jpg`
- **Runway prompt:** `Slow cinematic push-in on the woman in the light blue lace tennis outfit, soft natural sunlight on an outdoor padel court, subtle breeze moving the lace skirt ruffles, shallow depth of field. Keep the outfit exactly as in the image.`
- **On-screen text:** "POV: llegas a la pista y todas preguntan dónde lo compraste" → "Encaje de rosas · short interior" → "Conjunto 52,95 € · aljarahsol.com"
- **Caption:** El conjunto de pádel más bonito de la pista 🎾🌹 Top + falda-short de encaje, en negro, crema y azul cielo. Envío gratis desde 35 €.

## C2. "Sin miedo a transparencias" (short interior)
- **Source image:** `asol-encaje-falda-short.jpg`
- **Runway prompt:** `Gentle handheld camera move revealing the built-in shorts under the lace skirt, bright clean studio light, smooth natural motion. Do not change the garment.`
- **On-screen text:** "¿Falda de pádel que se sube en cada golpe?" → "Esta lleva short interior integrado" → "Muévete sin pensar"
- **Caption:** Volantes de encaje por fuera, short integrado por dentro. Para jugar tranquila 🎾

## C3. "3 colores, ¿cuál eres?" (colour carousel)
- **Source images:** `asol-encaje-top-negro-set.jpg`, `asol-encaje-top-crema-set.jpg`, `asol-encaje-top-azul-set.jpg` (one 5 s clip each, cut together)
- **Runway prompt (each):** `Subtle slow orbit around the model, warm golden-hour light, soft background blur, gentle fabric movement. Keep outfit, colour and lace pattern unchanged.`
- **On-screen text:** "Negro, crema o azul cielo" → "¿Cuál te llevas?" → "52,95 € el conjunto"
- **Caption:** Dinos en comentarios: ¿negro, crema o azul cielo? 🖤🤍💙

## C4. "Pádel en otoño" (long sleeve set)
- **Source image:** `asol-manga-chocolate-2.jpg`
- **Runway prompt:** `Slow tracking shot on the woman on the padel court in the chocolate long-sleeve set, cool autumn morning light, a few leaves drifting in the background. Keep the outfit exactly as shown.`
- **On-screen text:** "Que el frío no te quite el partido" → "Manga larga · secado rápido" → "39,95 €"
- **Caption:** Tu conjunto de pádel para otoño e invierno 🍂🎾 Blanco, chocolate o vainilla.

## C5. "El clásico, con un toque Aljarah" (pleated set)
- **Source image:** `asol-plisado-negro-raqueta.jpg`
- **Runway prompt:** `Slow cinematic dolly-in, the woman holds the padel racket, bright midday sun, pleated skirt sways naturally with a light breeze. Keep the outfit unchanged.`
- **On-screen text:** "Falda plisada + short integrado" → "Negro, café o gris perla" → "44,95 €"
- **Caption:** El clásico de la pista, con un toque Aljarah ✨

---

## Run it (once `RUNWAYML_API_SECRET` is set)
From the Runway plugin folder, for each clip:
```bash
uv run scripts/generate_video.py --model gen4_turbo --ratio 720:1280 --duration 5 \
  --image-url "https://cdn.shopify.com/s/files/1/1080/8141/4485/files/asol-encaje-top-azul-set.jpg" \
  --prompt "<Runway prompt above>" --filename c1-encaje-azul.mp4
```
Cost estimate: 7 clips × ~25 credits = ~175 credits with `gen4_turbo`.

## Also worth doing (no AI needed)
- Film 2–3 real clips on a phone of someone playing in the set. Real footage usually beats AI in this niche.
- Check every Runway output frame by frame: lace pattern, skirt length and colour must match the photo.
