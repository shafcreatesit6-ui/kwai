---
name: ad-creatives
description: Plan and produce Aljarah Sol ad creatives (Meta/TikTok) with the Runway plugin (runway-api). Use when asked for ads, reels, video creatives or product visuals for Aljarah Sol.
---

Follow `brand-voice`. On-screen text and captions are in Spanish.

## Rules
1. **Start from real product photos** (Shopify CDN URLs). Use Runway image-to-video for motion,
   camera moves and backgrounds only. Never let the model redesign the garment (colour, lace pattern,
   cut, length). If an output changes the product, discard it: misleading ads cause returns.
2. Format: vertical **720:1280**, 5 s per clip, no text baked into the video. Add text in CapCut or the ad tool.
3. Model choice (Runway plugin `rw-generate-video`):
   - `gen4_turbo`: default for image-to-video tests (cheapest, ~25 credits per 5 s clip)
   - `gen4.5`: hero clips once a concept wins
   - `seedance2`: longer 10–15 s product ads (expensive, use only for winners)
4. Needs `RUNWAYML_API_SECRET` in the environment. Run `rw-check-org-details` first to see credits.
5. Each creative = hook (first 1–2 s) + 2–3 benefit beats + CTA + price. Make 3–5 variants per test.
6. Don't claim performance or health effects. Delivery promise must match the policy: 6–12 working days.

7. Follow the lessons and prompt library in `creatives/runway-prompts-es.md`: image-first with @outfit reference, small motion, clips ≤ 2 s, no racket in frame, one person per shot.

Campaign briefs live in `creatives/`. Add new campaigns as `creatives/<campaign>.md`.
