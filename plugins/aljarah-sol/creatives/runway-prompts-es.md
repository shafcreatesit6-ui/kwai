# Runway prompt library: Spanish market (Oct 2026)

## What's trending (and how it fits Aljarah Sol)
- **2-in-1 skirt-short (skort)** is a padel staple → all our pádel skirts have a built-in short. Lead with it.
- **Earthy tones over neon** → push café, chocolate, moka and crema colourways, not only black.
- **Court-to-street / court-to-brunch** → show the set off court too (terraza, caña after the match).
- **"Outfit pádel mujer" content on TikTok** (e.g. outfit checks at Sevilla clubs) → POV and outfit-check formats.
- Sources: TikTok "outfit padel mujer", Cuera 2026 style guide, Padelnuestro blog, tiendapadelpoint 2026 trends.

## Lessons from our first tests (follow these)
1. **Two-step workflow:** product photo → `gen4_image` / GPT Image 2 with the photo as reference (tag `@outfit`) to place her in a Spanish setting → then image-to-video.
2. **Keep motion small** and clips **≤ 2 s**. Big moves (walking fast, spinning) make the skirt change shape.
3. **No racket in frame.** Models draw a tennis racket instead of a padel paddle; Spanish players notice.
4. **One person per shot.** With two people the model reinvents the outfit.
5. Always say "wearing exactly the @outfit" and "Keep the outfit exactly the same". Reject any clip where colour, lace or length changes.
6. Prompts in English (models follow them better); on-screen text in Spanish.

## Scene prompts (image step, use with product photo as @outfit reference)
Base: `Photorealistic, natural skin, shot on iPhone, vertical 9:16.`

| # | Scene | Prompt (add Base at start) | Best colourway |
|---|---|---|---|
| 1 | Llegada al club | `A young Spanish woman walks onto an outdoor padel court with glass walls and blue turf, golden hour, wearing exactly the @outfit, smiling, padel ball in hand, no racket.` | azul cielo, crema |
| 2 | Outfit check | `Mirror selfie in a padel club changing room, woman in exactly the @outfit, phone covering face, soft daylight, clean modern lockers.` | any |
| 3 | Detalle | `Close-up from waist to mid-thigh, woman on a blue padel court wearing exactly the @outfit, hand on waistband, lace in sharp focus.` | all lace sets |
| 4 | Post-partido terraza | `Woman in exactly the @outfit sitting at a sunny terrace bar next to a padel club in Spain, a glass of beer and olives on the table, laughing, relaxed.` | café, chocolate |
| 5 | Otoño en la pista | `Woman in exactly the @outfit standing on an outdoor padel court on a cool autumn morning, light jacket over shoulders, warm coffee cup in hand.` | manga larga (chocolate, vainilla) |
| 6 | Costa | `Woman in exactly the @outfit on a rooftop padel court overlooking the Mediterranean sea in Marbella, late afternoon sun.` | crema, azul cielo |

## Motion prompts (video step, gen4.5 or Seedance)
- `Very subtle motion: gentle breeze moves the skirt, she shifts her weight slightly. Static camera. Keep the outfit exactly the same.`
- `She smiles and tilts her head, tiny natural movement. Slow gentle push-in. Keep the outfit exactly the same.`
- `She takes two slow steps toward the camera. Handheld, natural. Keep the outfit exactly the same.`

## Spanish hooks (on-screen text, first 1–2 s)
- POV: llegas a la pista y todas te miran
- Outfit de pádel que no sabías que necesitabas
- ¿Falda de pádel que se sube en cada golpe? Esta lleva short
- Del partido a la caña sin cambiarte
- Pádel en otoño, pero con estilo 🍂
- Negro, crema o azul cielo: ¿cuál eres?

## Using the Runway app (your 2,550 app credits)
1. **Image:** pick GPT Image 2 or Gen-4 Image → upload the product photo as **Reference** → paste a scene prompt (replace `@outfit` with "the outfit in the reference image").
2. **Video:** open the result → Seedance 2.5 or Gen-4.5 → paste a motion prompt → 5 s, 9:16.
3. Download, check the outfit, cut the best 1–2 s, add text + a trending TikTok sound.
