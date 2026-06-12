# AC Repair Hero Image — Generation Prompt

**Target file:** `c:\Users\Owner\water-heater-sos - Copy\public\ac-repair-hero.webp`
**Page:** `/ac-repair` on waterheatersos.com
**Use:** Hero section, paired with H1 "AC Repair in the Inland Empire" + orange (#EA5D19) CTA
**Dimensions:** 1600x1067 (3:2). Min acceptable 1200x800.
**Format:** WebP preferred. PNG/JPG acceptable — web-developer will convert in Phase 4.

---

## Primary prompt (Option A — preferred, mid-shot technician)

> Photorealistic editorial photograph, 3:2 aspect ratio, of a professional HVAC technician kneeling beside a beige residential outdoor air-conditioning condenser unit at a Southern California home. He wears a clean plain navy-blue work uniform with no visible logos or branding, holding a yellow digital multimeter and concentrating on the unit's electrical access panel. The condenser sits on a concrete pad next to a cream stucco wall. Drought-tolerant landscaping — agave, decomposed granite, a small palm at the edge of frame — and a sliver of terracotta tile roof above. Bright Inland Empire midday sun, natural shadows, slight haze. Shot on a 50mm lens, shallow depth of field, photojournalistic feel, authentic working posture (not posed). Neutral earth-tone color palette: beige, sand, sage green, clear blue sky. No orange tones, no text, no logos, no watermarks, no signage. Natural skin texture, no stock-photo polish. High detail, sharp focus on the technician's hands and the multimeter.

**Negative prompt:** illustration, cartoon, 3D render, CGI, AI-look, stock photo, perfect teeth, plastic skin, model pose, logos, text, watermarks, signs, orange uniform, snow, winter, indoor, commercial HVAC rooftop unit, plasma glow, oversaturated, HDR halos, fisheye, tilt-shift.

---

## Option B (close-up hands variant)

> Photorealistic close-up, 3:2, of an HVAC technician's gloved hands using a screwdriver on the open electrical access panel of a residential AC condenser unit. Visible copper refrigerant lines, capacitor, contactor. Beige condenser housing. Bright Southern California sunlight raking across the metal. Shallow depth of field, 85mm lens feel, journalistic. Background blurred stucco wall and a hint of green landscaping. No text, no logos, no watermarks. Authentic, gritty working detail — slight dust on the gloves.

## Option C (wide environmental, no people)

> Photorealistic wide shot, 3:2, of a residential AC condenser unit beside a cream-stucco Southern California home with terracotta tile roof. A canvas tool bag and a coiled refrigerant gauge set sit on the concrete pad beside it. Palm tree fronds at upper left edge of frame. Drought-tolerant landscaping. Bright midday sun, deep blue sky, natural shadows. Editorial real-estate-photography feel. No people, no text, no logos.

---

## Style anchors (existing site photos)
- `public/wh-sos-service-van.webp` — clean isolated subject, real photography, not illustrated
- `public/gas-water-heater-controls.webp` — tight realistic detail, authentic working context, natural light

## Brand-fit rules
- Image sits beside an orange #EA5D19 CTA button — keep the IMAGE color palette neutral / earth-tone / blue sky so it doesn't fight the button.
- Image will be rendered with rounded corners and a soft drop shadow on the page.
- No snow, no cold-weather signaling. This is Inland Empire CA — hot, dry, sunny.

## Recommended tools
- Gemini 2.5 Flash Image (Nano Banana) — best photoreal at 3:2
- Midjourney v6.1 with `--ar 3:2 --style raw --s 50`
- Flux 1.1 Pro — strong photoreal default

## After generation
1. Confirm no text/logos slipped in (Gemini sometimes hallucinates brand badges on condenser units — inspect closely)
2. Convert to WebP at ~80 quality, target under 200KB for hero
3. Save as `public/ac-repair-hero.webp`
4. Wire into `/ac-repair` hero with descriptive alt text: `"HVAC technician servicing a residential air conditioning condenser at an Inland Empire home"`
