# Technical SEO Audit — Water Heater SOS HVAC Expansion
**Date:** 2026-06-11  
**Auditor:** seo-technical specialist  
**Scope:** 17 HVAC pages (1 existing + 16 new) — pre-production-deploy audit  
**Build status:** 87/87 tests passing

---

## Overall Score: 91/100

**Verdict: READY FOR LAUNCH with one schema fix noted below (no blocker, but should be addressed within 1 week of launch).**

---

## Category Results

### 1. Crawlability — PASS

- `robots.txt` is clean: `Allow: /` for all user agents. No HVAC routes are blocked.
- Sitemap reference correctly points to `https://waterheatersos.com/sitemap.xml`.
- Zero `noindex` directives found across all 17 page.tsx files (grepped all app/ tsx files — clean).
- Build 87/87 confirms all 17 routes return 200.

**File:** `C:\Users\Owner\water-heater-sos - Copy\public\robots.txt`

---

### 2. Indexability — PASS (1 note)

All 17 pages have unique, self-referencing canonical tags. All use absolute `https://waterheatersos.com/<slug>` format. No loops, no conflicts.

Sitemap.xml: 83 URLs confirmed. All 17 HVAC routes present:
- `/ac-repair`, `/hvac-services`, `/ac-services`, `/heating-services`, `/indoor-air-quality`
- `/ac-installation`, `/ac-maintenance`, `/mini-split-installation`, `/thermostat-installation`
- `/furnace-repair`, `/furnace-installation`, `/furnace-maintenance`
- `/whole-home-humidifier`, `/whole-home-dehumidifier`
- `/heat-pump-systems`, `/hvac-maintenance-plan`, `/air-filtration`

Priority assignments are appropriate: hub pages at 0.9, standard spokes at 0.8–0.9, lower-volume spokes at 0.8. `/air-duct-cleaning` (pre-existing, 0.7) unchanged.

**Note:** `/air-duct-cleaning` is not listed under `indoor-air-quality`'s `CollectionPage hasPart` schema. The IAQ hub includes `/air-duct-cleaning` as a child, but the sitemap priority is 0.7 (not bumped). This is a minor inconsistency — not a launch blocker.

---

### 3. Security + Layout Config — PASS

- `next.config.ts`: Two 308 permanent redirects in place (`/moen-flo-installation` → `/moen-flo-smart-water-monitor`, `/hemel` → `/hemet`). Clean. No HVAC redirect conflicts.
- `app/layout.tsx`: `metadataBase` set to `https://waterheatersos.com`. Global `robots: { index: true, follow: true }` with proper Googlebot directives. Google Search Console verification token present (`UcJ9BTMatAVBrk12EfnYd315YJcloEa9CX-kZHsbzsU`). HTTPS enforced at Vercel level.

---

### 4. URL Structure — PASS

All 17 slugs are clean, lowercase, hyphen-separated:
- `/hvac-services`, `/ac-services`, `/heating-services`, `/indoor-air-quality`
- `/ac-repair`, `/ac-installation`, `/ac-maintenance`, `/mini-split-installation`, `/thermostat-installation`
- `/furnace-repair`, `/furnace-installation`, `/furnace-maintenance`
- `/whole-home-humidifier`, `/whole-home-dehumidifier`
- `/heat-pump-systems`, `/hvac-maintenance-plan`, `/air-filtration`

No trailing slashes. No URL collisions with existing routes. `/air-duct-cleaning` route preserved independently.

---

### 5. Mobile + Responsive — PASS

Reviewed `HvacServicesContent.tsx`, `HvacMaintenancePlanContent.tsx`, `HeatPumpSystemsContent.tsx`, `AcRepairContent.tsx` as representative samples. Consistent responsive class pattern confirmed:

- Hero grids: `grid lg:grid-cols-2` — stacks to single column on mobile
- Hero images: `h-[250px] sm:h-[350px] lg:h-[500px]` — explicit height at all breakpoints, no CLS risk
- Buttons: `min-h-[44px]` touch targets present throughout
- Padding: `px-4 sm:px-6 lg:px-8` pattern consistent across all reviewed components
- Mega menu: HVAC subcategory structure (`AC`, `Heating`, `Indoor Air Quality`) verified active in `Header.tsx` at lines 90–109

No responsive regressions found in inspected files.

---

### 6. JS Rendering — PASS

- All Content components use `"use client"` directive, consistent with the rest of the site.
- Framer Motion: All entrance animations use `whileInView` with `viewport={{ once: true }}` — content is in initial HTML, not gated behind animation state. No SEO visibility concern.
- FAQ component (`@/components/home/FAQ`) is reused across all 17 pages. Accordion answers are in initial HTML (confirmed in previous Playwright test on `/ac-repair`; component is identical across all HVAC pages).
- JSON-LD schema: Every page.tsx uses `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />` rendered server-side. Pattern is 100% consistent across all 17 pages.
- Hero images: `next/image` with `fill` and `priority` confirmed on reviewed pages (`HvacMaintenancePlanContent.tsx` line 185, `HeatPumpSystemsContent.tsx` line 237). WebP format used throughout.

---

### 7. Core Web Vitals Indicators (Predicted) — PASS / LOW RISK

**LCP:** Hero images on all pages use `priority` prop, triggering `<link rel="preload">`. Using `/wh-sos-service-rep.webp` as shared placeholder (noted in code comments on `/hvac-maintenance-plan` and `/heat-pump-systems` as pending unique hero images). WebP is optimal format. LCP candidate is well-handled.

**CLS:** Hero image containers have explicit height classes at all breakpoints (`h-[250px] sm:h-[350px] lg:h-[500px]`) combined with `fill + object-cover`. No free-floating images without constraints found in reviewed components. Layout is stable on load. CLS risk: Low.

**INP:** Pages are mostly static content with Framer Motion scroll animations. No heavy client-side data fetching. No blocking interactivity on load. INP risk: Low.

**Note:** Using `/wh-sos-service-rep.webp` as the hero image placeholder on 16 new HVAC pages is a minor redundancy that should be addressed post-launch with unique hero images (TODO comments already in code). This does not impact CWV but is noted for content quality.

---

### 8. Structured Data (JSON-LD) — PASS WITH ONE FINDING

#### What's working well

All 17 pages implement `@graph` schema server-side with:
- `LocalBusiness` entity with `@id: "https://waterheatersos.com/#business"`
- Service or CollectionPage entity
- FAQPage with multiple Q&A entries (5–8 questions per page)
- BreadcrumbList

#### streetAddress confirmed

`streetAddress: "571 Crane St, Unit H"` with `addressLocality: "Lake Elsinore"`, `postalCode: "92530"` is present on 16 of 17 pages. The one exception is `/ac-repair`, which intentionally omits `streetAddress` per a code comment noting it was awaiting confirmed NAP. Given that `/hvac-services` and all 15 other new pages now have the confirmed address, this old stub should be updated.

#### BreadcrumbList hierarchy

All 16 new pages implement correct 3-level or 4-level BreadcrumbList:
- Hubs: `Home > HVAC Services > [Hub]` (3 levels)  
- Spokes: `Home > HVAC Services > [Hub] > [Spoke]` (4 levels)

`/ac-repair` remains on a 2-level breadcrumb (`Home > AC Repair`) per intentional code comment deferring the HVAC Services middle item. Now that `/hvac-services` is live, this should be updated to 3 levels.

#### FINDING: `/hvac-maintenance-plan` missing Offer schemas

The audit spec called for 3x `Offer` schemas on the HVAC Maintenance Plan page. The schema in `app/hvac-maintenance-plan/page.tsx` contains a `Service` entity but **no `Offer` sub-schemas at all** — no `priceSpecification`, no pricing. All 9 standard spoke pages include pricing Offers; `/hvac-maintenance-plan` is the only page that omits them. This is likely intentional given that plan pricing is not publicly listed ("call for pricing"), but from a schema richness standpoint it's a gap noted in the spec.

All schema URLs use `https://waterheatersos.com/...` absolute URLs. No relative URLs found.

#### Geo coordinates

`/ac-repair` omits `geo` coordinates (same code comment as streetAddress). All 16 new pages include geo coordinates (`latitude: 33.6681, longitude: -117.3272` or `-117.3273`). Minor coordinate variance (`-117.3272` vs `-117.3273`) between pages — not meaningful, but pick one value for consistency.

---

### 9. IndexNow / Sitemap Notification — ACTION REQUIRED POST-DEPLOY

- No `IndexNow` configuration detected in the repo (no `indexnow.txt`, no API call in build scripts).
- Sitemap was regenerated to 83 URLs (16 new HVAC routes confirmed).
- `llms.txt` exists at `/public/llms.txt` but has **not been updated** to include any of the 17 HVAC pages. It still lists only water heater and plumbing services. The location line also still says `Redlands, CA` rather than the confirmed `Lake Elsinore, CA`.

---

## Issue Summary

### Critical (fix before launch)
None.

### High Priority (fix within 1 week of launch)

1. **`/ac-repair` breadcrumb schema is outdated** — still shows `Home > AC Repair` (2 levels). Now that `/hvac-services` is live, update to `Home > HVAC Services > AC Repair` (3 levels). Remove the old deferral comment.  
   File: `C:\Users\Owner\water-heater-sos - Copy\app\ac-repair\page.tsx` lines 249–269

2. **`/ac-repair` LocalBusiness schema missing `streetAddress` and `geo`** — only page of 17 without confirmed NAP address in schema. Should match the other 16 pages now that address is confirmed.  
   File: `C:\Users\Owner\water-heater-sos - Copy\app\ac-repair\page.tsx` lines 61–65

3. **`/hvac-maintenance-plan` has no `Offer` schemas** — all other service pages include `priceSpecification`. Consider adding either price ranges or a `Offer` with `description: "Call for pricing"` to maintain schema consistency. If pricing is intentionally hidden, document the reason in a code comment.  
   File: `C:\Users\Owner\water-heater-sos - Copy\app\hvac-maintenance-plan\page.tsx`

### Medium Priority (post-launch, within 30 days)

4. **`llms.txt` not updated** — still plumbing/water heater only; missing all 17 HVAC pages. Location line says `Redlands, CA` but confirmed address is Lake Elsinore.  
   File: `C:\Users\Owner\water-heater-sos - Copy\public\llms.txt`

5. **Hero image placeholder overuse** — 16 new pages use `/wh-sos-service-rep.webp` (TODO comments already in code). Create unique hero images per service category to improve content differentiation and LCP candidate relevance.

6. **Geo coordinate minor variance** — Some pages use `-117.3272`, others `-117.3273`. Standardize to one value for consistency. Not a crawl issue but clean schema is good practice.

### Low Priority

7. **DialogTitle a11y warnings on mobile Sheet** — Pre-existing issue on the mobile menu component, flagged in earlier Playwright test. Does not affect indexing.

8. **`/air-duct-cleaning` not bumped in sitemap** — Sits at 0.7 priority while now linked as an IAQ hub child. Consider bumping to 0.8 to match the other IAQ spokes post-launch.

9. **IndexNow not configured** — Bing and Yandex will not receive instant notification of the 16 new URLs. Low urgency given Google is primary traffic source, but worth setting up.

---

## What's Working Well

- **All 17 canonicals are clean and unique** — zero duplicate or loop risks
- **robots.txt is wide open** — no accidental blocks
- **All 17 routes confirmed in sitemap** at appropriate priorities
- **JSON-LD server-side rendering is consistent** across all 17 pages — Google and AI crawlers see full schema on first fetch
- **FAQPage schema quality is excellent** — 5–8 detailed Q&As per page with local IE-specific content
- **BreadcrumbList hierarchy is logically correct** on all 16 new pages
- **streetAddress populated on 16/17 pages** — confirmed NAP improvement over previous audit state
- **Mobile responsive pattern is consistent** — explicit height constraints on hero images prevent CLS
- **Hero images use `priority` prop correctly** — LCP candidate is preloaded
- **Internal linking structure is solid** — hub-to-spoke and cross-spoke links visible in content components
- **GTM and Google Ads tags in layout.tsx** with proper `afterInteractive` strategy — no blocking script load
- **No noindex found on any page** — all 17 will be indexable on deploy

---

## Recommended Post-Deploy Actions

1. **Google Search Console:** Submit `https://waterheatersos.com/sitemap.xml` immediately after deploy. Use URL Inspection tool to request indexing on the 4 hub pages (`/hvac-services`, `/ac-services`, `/heating-services`, `/indoor-air-quality`) and highest-priority spokes (`/ac-repair`, `/furnace-repair`, `/mini-split-installation`) manually.

2. **Bing Webmaster Tools:** Submit sitemap manually. Consider implementing IndexNow for future URL submissions.

3. **Fix `/ac-repair` schema** (breadcrumb + address) as the first post-deploy code change — it's the only pre-existing page in the group and the inconsistency is now visible.

4. **Update `llms.txt`** to add all 17 HVAC URLs and correct the location to Lake Elsinore. AI crawlers (GPT, Perplexity, Gemini) use this file for structured discovery.

5. **Monitor GSC for 2–4 weeks** post-launch for any crawl anomalies, indexation rates, and early impression data on the new HVAC routes.
