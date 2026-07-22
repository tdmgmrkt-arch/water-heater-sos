# Active Work — SOS Plumbing and Air

_Last updated: 2026-06-11 (repo move completed)_

---

## In Progress

- **HVAC vertical expansion (2026-06-11 →)** — Adding "HVAC Services" mega menu category with 3 sub-categories (AC / Heating / Indoor Air Quality) and building 14 main HVAC service pages. Multi-agent collaboration: 13 SEO agents + web-developer across 7 phases (research → content → visuals → build → schema → QA → drift baseline). Starting with **AC Repair** as template page; remaining 13 pages built in batch after template review.
  - Phase 1 (Research) running: `seo-dataforseo` (keyword volume + SERPs), `seo-sxo` (intent / page-type mismatch detection), `seo-cluster` (topic architecture + internal link matrix). Output to `/research/` folder.
  - Phase 2 (per-page content) → Phase 3 (image) → Phase 4 (scaffold + mega menu) → Phase 5 (schema) → Phase 6 (technical/perf/sitemap/maps QA) → Phase 7 (drift baseline) for AC Repair, then scale.

## Up Next

- **CLIENT.md TBD fields** — fill in client primary contact, GHL sub-account, GBP details (URL, current categories, hours), Vercel project URL, GA4 property, ad accounts.
- **Verify `/quote` and `/contact` form GHL webhook endpoints** — confirm they're posting to the right sub-account.
- **GBP CRITICAL — before HVAC deploy:** Change primary category to "HVAC Contractor." Add secondary categories: Air Conditioning Contractor, Air Conditioning Repair Service, Heating Contractor, Furnace Repair Service, Plumber, Water Heater Installation Service, Air Duct Cleaning Service. Set hours to 24/7. See full audit at `/audits/gbp-coherence-2026-06-11.md`.
- **BBB NAP fix:** "Crain St" on both BBB profiles must be corrected to "Crane St." Two duplicate BBB profiles need merging.
- **Schema update:** Pass confirmed coordinates (lat: 33.6880800, lon: -117.3391983) and 24/7 hours to seo-schema agent for all HVAC page schemas. Switch base schema type from `LocalBusiness` to `HVACBusiness`.

## Blocked

_None._

## Recently Completed

- 2026-07-21 — **Blog system launched.** Built `/blog` index + dynamic `/blog/[slug]` route with 10 seeded, monthly-dated (2025-10 through 2026-07) local-SEO posts covering water heater, plumbing, HVAC, and IAQ topics. Each post includes 4+ internal links to service pages and at least one authoritative external citation (energy.gov, epa.gov, cdc.gov, arb.ca.gov, energystar.gov, usgs.gov, cpsc.gov, waterboards.ca.gov, switchison.org, airnow.gov). Blog nav link added to Header (Contact dropdown) + Footer (quickLinks + resources). Sitemap config updated with `/blog` priority 0.8 and `/blog/*` priority 0.7. Unsplash stock images used for covers (added `images.unsplash.com` to next.config remotePatterns). Full JSON-LD `Blog` + `BlogPosting` schema. Build verified — all 11 blog routes prerender successfully.
- 2026-06-11 — Repo move to `~/agency/clients/water-heater-sos/` completed. Old `C:\Users\Owner\water-heater-sos*` folders removed. Git remote + Vercel unaffected.
- 2026-06-11 — GBP Coherence Audit completed. Maps Health Score: 48/100. Full audit saved to `/audits/gbp-coherence-2026-06-11.md`.
- 2026-06-11 — AC Repair page content finalized (v4, approved). 17 HVAC routes confirmed in local codebase; none yet deployed to production (404s on waterheatersos.com).
- 2026-06-11 — Nominatim geocoding resolved: lat 33.6880800 / lon -117.3391983 for 571 Crane St, Unit H, Lake Elsinore, CA 92530.
- 2026-06-11 — `node_modules` + `.next` cleaned from source repo (prep for move).
- 2026-06-11 — Created `CLIENT.md` + `ACTIVE_WORK.md` for water-heater-sos at consolidated agency client path.
- (Pre-handoff to agency) — Site already live at waterheatersos.com. Recent commits: Google Tag Manager integration, footer social links, address updates, SEO audit fixes.

## Decisions Log

- **2026-06-11 — GBP primary category post-HVAC:** Change to "HVAC Contractor" (replaces "Water Heater Supplier"). Timing: same day as HVAC page deployment, or 1–2 weeks prior if possible.
- **2026-06-11 — GBP hours:** Recommend "Open 24 Hours" for all 7 days to match 24/7 on-page promise and schema.
- **2026-06-11 — Base schema type:** Upgrade from `LocalBusiness` to `HVACBusiness` (Schema.org subtype) on root layout once HVAC pages deploy.
- **2026-06-11 — HVAC mega menu structure:** Single "HVAC Services" dropdown with 3 sub-category columns (AC / Heating / Indoor Air Quality). Heat Pumps placed under Heating. Mini-Splits placed under AC. Air Duct Cleaning re-linked into IAQ column (no route change).
- **2026-06-11 — HVAC build sequence:** Template-first. Build AC Repair page through all 7 phases, get user approval, then batch-build remaining 13 pages in parallel using the approved template.
- **2026-06-11 — Agent utilization for HVAC build:** 13 SEO agents + web-developer across 7 phases. Skipped (with reason): `seo-backlinks` (off-page, post-launch concern), `seo-ecommerce` (no products), `seo-google` (requires post-launch traffic data), `seo-visual` (overlaps with web-developer + qa-launch visual checks).
- **2026-06-11 — Repo location:** Consolidating into `~/agency/clients/water-heater-sos/` per standing process (MEMORY.md > Process). Git remote and Vercel unaffected by local folder move.
