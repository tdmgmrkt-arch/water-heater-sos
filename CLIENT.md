# CLIENT: SOS Plumbing and Air

---

## Business Overview
- **Legal / business name:** SOS Plumbing and Air
- **DBA (if different):** —
- **Slug (folder name):** `water-heater-sos`
- **Industry / vertical:** Water heaters + plumbing → **expanding into HVAC (2026-06-11)**
- **Location (city, state):** **571 Crane St, Unit H, Lake Elsinore, CA 92530** (verified from live site footer 2026-06-11 via Playwright snapshot of `/ac-repair`)
  - **Geocoordinates (Nominatim, verified 2026-06-11):** `latitude: 33.6880800, longitude: -117.3391983` — now populated in all 17 HVAC page schemas
- **Service area:** Riverside County + San Bernardino County (Inland Empire). City pages live for: Riverside, Moreno Valley, Corona, San Bernardino, Murrieta, Temecula, Redlands, Rancho Cucamonga, Fontana, Ontario, Hemet, Lake Elsinore, Perris, Menifee, Yucaipa, Highland, Loma Linda, Beaumont, Banning, Calimesa, Mentone, Grand Terrace, Colton, Rialto, San Jacinto, Norco, Eastvale, Chino, Chino Hills, Claremont, Upland, Yorba Linda, Anaheim Hills
- **Services offered:**
  - **Water Heaters:** Gas, Electric, Tankless, Heat Pump, Water Heater Flush, Water Filtration
  - **Plumbing:** Drain Cleaning, Hydro-Jetting, Leak Detection, Sewer Camera, Whole-House Repipe, Gas Leak Repair, Water Service, Pressure Regulator, Shower/Toilet/Faucet/Disposal R&R, Moen Flo, Sump Pumps
  - **HVAC (in build, 2026-06-11):** AC Repair, AC Installation, AC Maintenance, Mini-Split, Thermostats, Furnace Repair/Install/Maint, Heat Pump Systems, Heating Maintenance Plans, Air Duct Cleaning (exists), Air Filtration, UV Air Purifiers, Whole-Home Humidifiers, Dehumidifiers
- **Target customer:** Inland Empire homeowners with water heater / plumbing / HVAC service needs (emergency + scheduled)
- **Unique selling points:** 24/7 emergency response, licensed + insured, 5-star rated
- **Years in business:** TBD
- **CA License #:** `1140776` (cited in existing FAQ data — use for E-E-A-T on new pages too)

## Primary Contact
- **Name:** TBD
- **Role:** TBD
- **Email:** TBD
- **Phone:** TBD
- **Preferred communication:** TBD
- **Time zone:** Pacific (PST/PDT)

## Brand
- **Voice notes:** Premium, confident, problem-solver tone. Emergency-ready ("Available 24/7"). Lean on local trust + 5-star service. Use proper service names with ampersand styling per existing site convention (e.g., "Faucet Repair & Replacement").
- **Logo/assets location:** `/public/wh-sos-logo.webp`, `/public/wh-sos-service-rep.webp`, `/public/sos-plumbing-and-air-service-van.webp`
- **Primary color(s):** Orange `#EA5D19` (CTA/highlight), Black `#11110E` (header/footer), Cream `#fffdf9`
- **Fonts:** Default Next.js / Tailwind stack (no custom font detected)
- **Photography preferences:** Real photos preferred (existing site uses real service-rep and service-van photos). AI-generated hero images acceptable for new HVAC pages if they match the existing visual style.

## Website
- **Domain:** waterheatersos.com
- **Local repo path:** `c:\Users\Owner\water-heater-sos - Copy\` *(temporary — moving to `c:\Users\Owner\agency\clients\water-heater-sos\` pending Claude Code restart, 2026-06-11)*
- **GitHub URL:** https://github.com/tdmgmrkt-arch/water-heater-sos
- **Vercel project URL:** TBD
- **Production URL:** https://waterheatersos.com
- **Staging URL:** TBD
- **CMS used:** None — Next.js 16 static
- **Current status:** Live, in active expansion (adding HVAC vertical 2026-06-11)

### Tech Stack
- **Framework:** Next.js 16.0.10 (App Router) + React 19.2 + TypeScript 5
- **Styling:** Tailwind CSS v4 (with `@tailwindcss/postcss`)
- **UI primitives:** Radix UI (Dialog, Accordion, Navigation Menu) — NOT @base-ui (older shadcn pattern, predates 2026-06 shadcn v4 changes)
- **Components:** shadcn-style in `/components` + `/components/ui`
- **Animation:** Framer Motion 12
- **Icons:** lucide-react
- **Sitemap:** next-sitemap (config at `/next-sitemap.config.js`)
- **Tracking:** Google Tag Manager (added 2026-06 per recent commits), Google Search Console verified
- **Forms:** Custom Next.js, POST to GHL webhook (verify endpoint in `/quote` and `/contact` routes)

## Go High Level
- **Sub-account name:** TBD
- **Sub-account URL:** TBD
- **Pipelines (names):** TBD
- **Tag conventions:** TBD
- **Webhook endpoint:** TBD — check `/quote` and `/contact` page implementations
- **Standard automations active:** TBD
- **Client-specific automations:** TBD

## Google Business Profile
- **GBP URL:** TBD
- **Verification status:** TBD
- **Primary category:** Currently "Water Heater Supplier" or similar (TBD verify). **Action item:** post-HVAC-launch, evaluate adding HVAC-related secondary categories (e.g., "HVAC Contractor", "Heating Contractor", "Air Conditioning Contractor") for category coherence with new site content.
- **Secondary categories:** TBD
- **Post automation cadence:** TBD — is the GBP auto-poster enabled? Confirm.
- **Review request flow:** TBD

## Paid Ads
- **Google Ads account ID:** TBD (Google Tag Manager added 2026-06 — suggests prep)
- **LSA enrolled:** TBD
- **Meta Ads account ID:** TBD
- **Monthly ad budget:** TBD
- **Who manages ad creative / optimization:** TBD

## Analytics
- **GA4 property ID:** TBD (GTM is live — pull from GTM container)
- **Search Console property:** Verified — verification meta tag `UcJ9BTMatAVBrk12EfnYd315YJcloEa9CX-kZHsbzsU` in `app/layout.tsx`
- **Meta Pixel ID:** TBD
- **Other tracking:** Google Tag Manager (added 2026-06)

## Current Engagement
- **Phase:** Live + actively expanding (adding HVAC vertical)
- **Start date:** TBD (pre-dates current consolidation)
- **Go-live date:** Already live
- **Retainer / billing cadence:** TBD
- **Monthly scope summary:** Expansion build — adding HVAC service vertical with full 14-page main service buildout + future city × service combo pages.

## Notes / Quirks
- **Existing `/air-duct-cleaning` page** lives inside the "Plumbing Services" mega menu category. As part of the HVAC expansion (2026-06-11), this page is being re-linked under the new "HVAC Services → Indoor Air Quality" category. The route itself does not change — only mega menu placement updates.
- **Mega menu** lives at `/components/Header.tsx`. Current structure: 3 categories (Water Heaters, Plumbing Services, Contact). HVAC Services to be inserted as a 4th category between Plumbing Services and Contact, with 3 sub-category columns (AC / Heating / Indoor Air Quality).
- **Older shadcn pattern (Radix-based):** This repo predates the 2026-06 shadcn v4 / @base-ui migration. `Button` supports `asChild`, `Sheet` uses `asChild`, etc. Do NOT apply the @base-ui breaking-change patterns from MEMORY.md > Tools — they do not apply here.
- **Sitemap config:** Uses `next-sitemap` with per-route priority overrides. When adding new HVAC routes, update `next-sitemap.config.js` priorities for HVAC parent pages (suggest 0.9 for top transactional pages like `/ac-repair`, `/furnace-repair`).
- **Domain `waterheatersos.com`** — name implies water heaters only. The HVAC expansion creates a content/brand tension worth flagging to the client at some point: brand-name dissonance for an HVAC searcher. Not blocking, but worth knowing.
