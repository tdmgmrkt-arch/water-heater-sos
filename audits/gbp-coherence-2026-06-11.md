# GBP Coherence Audit — Water Heater SOS
**Date:** 2026-06-11
**Auditor:** seo-maps specialist
**Capability tier:** Tier 0 (free APIs only — no DataForSEO MCP detected)
**Client:** Water Heater SOS — waterheatersos.com
**Context:** HVAC vertical (17 pages) in build, not yet deployed to production. Audit is forward-looking: what GBP must look like *at or before* HVAC pages deploy.

---

## Maps Health Score — Tier 0 (Weight-Redistributed)

| Dimension | Weight (Tier 0) | Score | Weighted |
|-----------|----------------|-------|---------|
| Geo-Grid Visibility / SoLV | N/A — redistributed | — | — |
| GBP Profile Completeness | 30% (base 20% + 10% redistribution) | 38/100 | 11.4 |
| Review Health | 30% (base 20% + 10% redistribution) | 60/100 | 18.0 |
| Cross-Platform Presence | 20% (base 15% + 5% redistribution) | 42/100 | 8.4 |
| Competitor Position | 10% | 45/100 | 4.5 |
| Schema & AI Readiness | 10% | 52/100 | 5.2 |
| **TOTAL** | **100%** | | **47.5 / 100** |

**Overall Maps Health Score: 48 / 100** (rounded)

Score will climb significantly once the four critical action items below are completed. Estimated post-fix ceiling: 72–78 / 100 at Tier 0 (Tier 1 geo-grid audit required for a full score).

---

## 1. GBP Category Recommendations

### Current State (inferred — client must verify in GBP dashboard)
CLIENT.md and the ac-repair GBP Coherence Notes both flag the current primary as likely "Water Heater Supplier" or "Water Heater Store." The production sitemap (crawled 2026-06-11) shows zero HVAC pages live, so the current category is coherent with the current live site. The risk becomes critical the moment HVAC pages deploy.

### Category Risk Severity
**CRITICAL.** Whitespark 2026 identifies primary category mismatch as the #1 negative local ranking factor. A business with "Water Heater Supplier" as primary category attempting to rank for "AC repair near me" or "furnace repair Riverside CA" faces a direct category incoherence signal. Google associates map pack placement with primary category first.

### Recommended Category Lineup (post-HVAC launch)

The client must change the primary category and add up to 9 secondary categories. GBP allows a maximum of 10 total (1 primary + 9 secondary). The business now covers water heaters, plumbing, and HVAC — the primary must reflect the broadest, highest-revenue category.

| Position | Category | Rationale |
|----------|----------|-----------|
| **PRIMARY** | **HVAC Contractor** | Broadest category covering AC + heating + ventilation. Used by highest-ranking IE competitors (IE Comfort, NEXGEN, A-Avis). Maps to C-20 license classification. Replaces "Water Heater Supplier." |
| Secondary 1 | Plumber | Preserves existing plumbing rankings — removing it would hurt drain cleaning, repipe, leak detection pack signals |
| Secondary 2 | Water Heater Installation Service | Preserves water heater rankings. More specific and service-aligned than "Water Heater Supplier" (which implies retail, not service) |
| Secondary 3 | Air Conditioning Contractor | Required for "AC repair" and "AC installation" 3-pack signals per SXO data — competitors use this exact category |
| Secondary 4 | Air Conditioning Repair Service | Targets repair-intent queries explicitly. IE Comfort and A-Avis both carry this alongside the broader AC Contractor category |
| Secondary 5 | Heating Contractor | Required for furnace repair/install 3-pack signals |
| Secondary 6 | Furnace Repair Service | Targets "furnace repair near me" directly. Mirrors how the category works for AC Repair |
| Secondary 7 | Air Duct Cleaning Service | Existing service page already live at `/air-duct-cleaning`; the GBP category has been unclaimed |
| Secondary 8 | Water Softening Equipment Supplier | Optional — covers water filtration angle. Lower priority; use only if slot is needed after verifying the above 7 are active |

**Total proposed: 1 primary + 7–8 secondary = 8–9 categories total.** This leaves 1–2 slots in reserve.

### What to Remove
- "Water Heater Supplier" (current assumed primary) — the "Supplier" designation implies a retail/supply house, not a service contractor. It undermines service intent signals across all verticals.

---

## 2. Services List (GBP > Services Tab)

GBP "Services" fields are a confirmed local pack ranking signal for service-category keywords. The client must add all new HVAC services to the Services tab once HVAC pages deploy. Services should match exact page names/slugs for coherence.

### HVAC Services to Add

**AC / Cooling**
- AC Repair
- AC Installation
- AC Maintenance / AC Tune-Up
- Ductless Mini-Split Installation
- Smart Thermostat Installation

**Heating**
- Furnace Repair
- Furnace Installation
- Furnace Maintenance / Furnace Tune-Up
- Heat Pump Installation
- Heat Pump Repair

**HVAC Plans & IAQ**
- HVAC Maintenance Plan
- Air Filtration System Installation
- UV Air Purifier Installation
- Whole-Home Humidifier Installation
- Whole-Home Dehumidifier Installation
- Indoor Air Quality Assessment

**Existing services to verify are already listed (should be there but confirm)**
- Water Heater Installation
- Water Heater Repair
- Tankless Water Heater Installation
- Drain Cleaning
- Leak Detection
- Whole-House Repipe
- Air Duct Cleaning

### Note on Services Tab and Category Alignment
GBP organizes Services by category. Once "HVAC Contractor" is set as primary and AC/Heating contractors added as secondary, the Services tab will offer category-specific buckets. Add HVAC services into their matching category buckets — not as a flat uncategorized list.

---

## 3. Hours — Critical Alignment Issue

### Site Copy Promise
Every HVAC page draft (ac-repair-v4-final.md, SXO brief) confirms the site uses "24/7 emergency service" and "seven days a week" language. The homepage footer confirms "24/7 Emergency Service."

### GBP Hours Must Match
If GBP hours show Monday–Friday 8am–6pm (or any non-24/7 configuration), there is a direct contradiction between the on-page trust signal and the GBP listing. Google can surface this inconsistency to users and it erodes trust.

### Recommended Configuration
Option A (preferred for emergency service businesses): Set all 7 days to "Open 24 Hours" in GBP.
Option B: Set regular hours (e.g., 7am–8pm M–F, 8am–5pm Sat–Sun) with a "More hours" secondary entry labeled "Emergency Hours: Open 24 hours." GBP allows "More hours" types including "Emergency."

Option A is cleaner for a business whose primary differentiator is 24/7 availability. If the client cannot genuinely staff 24/7 dispatch, Option B is more honest and still captures the emergency signal.

**Action:** Client must verify current GBP hours setting and confirm it matches what the website promises. This is a Search Console trust signal issue — schema `openingHours` on every page currently reads 24/7 (per schema notes in ac-repair-v4-final.md). GBP must match.

---

## 4. Service Area Configuration

### All 33 Cities Must Be Listed
CLIENT.md confirms 33 cities are covered. All should appear in the GBP "Service area" configuration. GBP allows up to 20 city/zip entries in the service area widget; if more are needed, use county-level entries to cover remainders.

### Recommended Service Area Entry Strategy
GBP currently allows service area businesses to list cities, counties, or zip codes. For a 33-city footprint spanning two counties, use a hybrid approach:

**Priority city entries (fill first — highest search volume for HVAC):**
1. Riverside
2. San Bernardino
3. Moreno Valley
4. Corona
5. Rancho Cucamonga
6. Fontana
7. Ontario
8. Murrieta
9. Temecula
10. Redlands

**Secondary city entries (fill remaining slots):**
11. Hemet, 12. Lake Elsinore, 13. Perris, 14. Menifee, 15. Chino, 16. Chino Hills, 17. Upland, 18. Rialto, 19. Colton, 20. Eastvale

**If slot cap hit, add county-level fallback entries:**
- Riverside County, CA
- San Bernardino County, CA

These two county entries will catch the remaining 13 cities (Yucaipa, Beaumont, Banning, Calimesa, Loma Linda, Highland, Mentone, Grand Terrace, San Jacinto, Norco, Claremont, Yorba Linda, Anaheim Hills).

**Note:** Anaheim Hills and Yorba Linda are technically Orange County, not Riverside/San Bernardino. Confirm the client genuinely services these locations before including them in a Riverside/San Bernardino county-level entry.

---

## 5. Reviews + GBP Posts

### Review Health Assessment (Tier 0 — inferred from visible signals)
The homepage states "5-star rated" with "hundreds of 5-star reviews across Google, Yelp, and Facebook." The SXO analysis confirms competitors like IE Comfort lead with "500+ 5-star reviews" in title tags — review count is a visible differentiation signal.

**Score rationale (60/100):** High rating is a strong positive. Deductions are for (a) unknown velocity — no data on how many new reviews per month; (b) unknown response rate — no evidence the owner is responding; (c) topical gap — if all reviews mention water heaters/plumbing and none mention AC, HVAC pack signals are weak even if overall rating is high.

### HVAC Review Topical Gap
If the client begins taking HVAC service calls and routes those customers to the existing generic "leave us a review" flow, the reviews will likely say "fixed my AC" but the system won't specifically mention the service type. This is an opportunity:

**Recommended review request flow (post-HVAC launch):**
- For HVAC service calls, the GHL post-service automation (when configured) should send a review request that contextualizes the ask: "If you were satisfied with your [AC Repair / Furnace Repair / HVAC service] today, we'd appreciate a Google review mentioning the service you received."
- The goal is reviews that contain "AC repair," "furnace repair," "HVAC," or "air conditioning" — these create a topical authority signal in the GBP listing that reinforces the new category choices.

### GBP Post Cadence — HVAC Launch
The GBP auto-poster (status TBD per CLIENT.md) should be configured with the following HVAC post cadence once live:

**Peak season schedule:**
- Summer (June–September): 2 posts/week minimum — 1 AC-focused post (repair, maintenance, emergency) + 1 IAQ or mini-split post
- Winter (November–February): 2 posts/week minimum — 1 furnace/heating-focused + 1 HVAC maintenance plan post
- Shoulder (March–May, October): 1 post/week — alternating AC and heating seasonal prep messaging

**Post types to rotate:**
- What's New: seasonal promotions (e.g., "Summer AC Tune-Up Special")
- Service update: linking to new HVAC service pages as they launch
- Offer: HVAC Maintenance Plan enrollment (drives recurring revenue)
- Photo posts: technician-on-job photos for HVAC calls once real photos are available

**Minimum at HVAC launch:** Publish at least 5 HVAC-focused GBP posts within the first 30 days of deployment. This signals to Google that the business is actively operating in the HVAC category, reinforcing the category change.

---

## 6. NAP Consistency Audit

### Verified NAP (from site footer + CLIENT.md)
- Name: Water Heater SOS
- Address: 571 Crane St, Unit H, Lake Elsinore, CA 92530
- Phone: (800) 697-4014

### Cross-Platform Findings

#### BBB (Better Business Bureau) — NAP INCONSISTENCY FOUND
**Status:** Two separate BBB profiles exist for this business — one accredited (A rating), one not.
**Critical issue — address misspelling:** BBB shows address as **"571 Crain St Bldg H"** on both profiles.
- "Crain" vs "Crane" — this is a NAP inconsistency. Search engines that crawl directory data will see a different street name than what appears on the website and (presumably) the GBP listing.
- "Bldg H" vs "Unit H" — minor variation but still technically inconsistent.
**Category inconsistency:** Profile 1 lists "Plumber." Profile 2 lists "Water Heater Repair." Neither lists HVAC. Both will need updating post-launch.
**Duplicate profile risk:** Two BBB profiles at the same address create potential citation conflict. Client should contact BBB to merge or remove the unaccredited profile.

**Action required:** Contact BBB to (a) correct "Crain" to "Crane," (b) standardize "Unit H" vs "Bldg H," (c) merge the two profiles, (d) update categories to include HVAC Contractor after launch.

#### Yelp — Limited data (403 on direct scrape)
**Status:** Yelp listing confirmed to exist at https://www.yelp.com/biz/water-heater-sos-lake-elsinore.
The site homepage references "5-star reviews across Google, Yelp, and Facebook," confirming the listing is active.
**Likely category gap:** Yelp categories were not accessible for direct audit. Given the business only recently expanded into HVAC, the Yelp categories almost certainly still reflect "Water Heaters" and "Plumbing" only. HVAC categories (Heating & Air Conditioning/HVAC) need to be added in the Yelp business portal.
**Action required:** Log into Yelp business portal, verify NAP matches exactly, add "Heating & Air Conditioning/HVAC" category.

#### Google Business Profile — Cannot access live data (Tier 0)
**Status:** GBP URL not confirmed in CLIENT.md (TBD). Client must verify:
- Primary category is as recommended above
- Address reads "571 Crane St, Unit H" (not "Crain," not "Bldg H")
- Phone is (800) 697-4014
- Hours match 24/7 commitment

#### Bing Places — Verification required
Bing Places portal redirects to a logged-in business portal — live data inaccessible without account access. Client should log in to Bing Places and verify the listing exists with correct NAP and categories. If no listing exists, it should be claimed/created. Bing pulls data from various sources including BBB — if BBB has the "Crain St" misspelling, that error may propagate to Bing.

#### Apple Maps — Not accessible via free API
Apple Maps business data is not publicly scrapable. Client should claim/verify the listing at business.apple.com. Check that:
- Address reads "Crane St" (not "Crain St")
- HVAC categories are added post-launch

#### HomeAdvisor / Angi — 403 on direct scrape
Could not access listing data. Client should verify the listing exists, confirm NAP is correct, and update service categories to include HVAC post-launch.

#### OpenStreetMap — Not listed
Nominatim search returned no POI match for "Water Heater SOS" — the business does not appear to have an OSM node. While OSM is not a primary consumer citation source, it feeds several aggregators and AI knowledge bases. Consider adding an OSM business node at the confirmed address coordinates (lat: 33.6880800, lon: -117.3391983).

### NAP Consistency Summary

| Platform | Name | Street | Unit | Phone | HVAC Category | Action |
|----------|------|--------|------|-------|--------------|--------|
| Website | Water Heater SOS | Crane St | Unit H | (800) 697-4014 | No (not yet launched) | Baseline |
| BBB | Water Heater SOS | **Crain St** | Bldg H | (800) 697-4014 | No | FIX STREET NAME |
| Yelp | Water Heater SOS | TBD | TBD | TBD | Likely no | Verify + add HVAC |
| GBP | TBD — verify | TBD | TBD | TBD | No | Audit dashboard |
| Bing Places | TBD — verify | TBD | TBD | TBD | No | Claim/verify |
| Apple Maps | TBD — verify | TBD | TBD | TBD | No | Claim/verify |
| OSM | Not listed | — | — | — | — | Create node |

**Most urgent:** BBB "Crain St" misspelling. This is a confirmed, crawlable NAP discrepancy that can propagate to data aggregators.

---

## 7. Schema–GBP Alignment

### Schema NAP from codebase (ac-repair-v4-final.md schema notes)
- streetAddress: 571 Crane St, Unit H, Lake Elsinore, CA 92530
- telephone: +18006974014
- openingHours: 24/7 (per page copy; exact schema string TBD)
- geo: lat 33.6880800 / lon -117.3391983 (geocoded via Nominatim 2026-06-11)

### Required GBP Match Points
All three of the following must match exactly between schema and GBP:

1. **Street address:** "571 Crane St, Unit H, Lake Elsinore, CA 92530" — confirm GBP shows "Crane" not "Crain," "Unit H" not "Bldg H"
2. **Phone:** (800) 697-4014 / +18006974014 — confirm GBP primary phone matches this number. If GBP has a local 951- or 909- tracking number as the primary, it will conflict with the 800 number in schema and on-site. Either make both consistent or ensure the 800 number is the primary listed number everywhere.
3. **Hours:** 24/7 in schema must match 24/7 in GBP. Any mismatch is a trust signal inconsistency that can suppress rich results.

### Coordinate Note
The Nominatim-geocoded coordinates (33.6880800, -117.3391983) should be used in schema `geo` properties going forward. The schema notes in ac-repair-v4-final.md flagged this as TBD — it is now resolved. Pass these coordinates to the seo-schema agent for all HVAC page schemas.

### Schema Completeness for HVAC Pages
The schema notes confirm that `/ac-repair` requires LocalBusiness + Service + FAQPage + BreadcrumbList. This pattern must scale to all 17 HVAC pages. Additional schema per SXO:
- Heat pump pages: add HowTo for installation process
- HVAC Maintenance Plan: add Offer/Product schema for plan tiers
- UV Air Purifier: FAQPage schema is especially critical (informational-dominant SERP)

---

## 8. Local Pack Opportunities — Post-Launch

### For AC Repair, Furnace Repair, HVAC Maintenance Plan (High-Priority Pack Keywords per SXO)

The SXO analysis confirms all three fire strong 3-packs in the Inland Empire. The following GBP tactics are most impactful for pack inclusion:

**Proximity signals**
The business address at 571 Crane St, Lake Elsinore is approximately 30 miles southwest of Riverside — the core Inland Empire population center. GBP gives proximity weight to the registered address. This means Water Heater SOS may have weaker proximity signals for searches centered in Riverside, San Bernardino, or Rancho Cucamonga compared to competitors headquartered in those cities.

Mitigation tactics:
- Ensure all high-population-center cities are in the GBP service area (Riverside, San Bernardino, Moreno Valley, Rancho Cucamonga — highest priority)
- Build city × service pages (e.g., `/ac-repair-riverside`, `/furnace-repair-san-bernardino`) — each page with its own schema, geo coordinates for that city, and GBP service area match. This is a post-launch Phase 2 build item.
- Accumulate reviews from customers in the northern Inland Empire cities — review geographic distribution is a pack signal

**GBP Completeness — highest-leverage items for pack**
1. Primary category change to HVAC Contractor (covered above — this is the #1 lever)
2. All HVAC services added to Services tab
3. Photo set: upload at minimum 10 HVAC-specific photos — technician on a condenser unit, furnace work, inside a home (if consented). Businesses with 10+ photos see measurably better pack engagement.
4. Business description: rewrite to include "HVAC contractor," "AC repair," "furnace repair," and "Inland Empire" within the first 100 characters. Current description almost certainly leads with water heaters.
5. Q&A pre-populate: Add 5–10 GBP Q&A entries for HVAC questions ("Do you repair all AC brands?", "Do you offer emergency HVAC repair?", "What areas do you serve?"). These seed the Q&A section before customers ask off-topic questions.

**Review velocity targets**
SXO data shows top pack competitors with 500+ reviews dominating the IE. Current baseline is unknown but described as "hundreds." Suggested review velocity target post-HVAC launch:
- Aim for 10+ new Google reviews per month that mention HVAC services by name
- Review request cadence: send immediately post-service (within 1 hour of job close via GHL automation)
- Platform split: prioritize Google (pack signal), then Yelp, then Facebook

**Photo cadence**
- Upload 2–3 new HVAC photos per month minimum
- Tag photos with category label ("Interior," "Work," "Team") in GBP
- Geo-tagged photos (EXIF data with Inland Empire coordinates) provide an additional location signal — ensure technician phone photos have location services enabled when shooting job-site photos

---

## 9. Competitor Landscape (Overpass API — 50km radius)

Overpass query returned 22 HVAC businesses and 21 plumbing businesses within 50km of the Lake Elsinore address (33.6880, -117.3392). This represents the competitive density in the service area.

**Notable named HVAC competitors in the radius:**
- Inland Empire Comfort (+1-951-789-3238) — appears in SXO data as the review-count leader ("500+ 5-star reviews" in title)
- Ace Home Heating & Air Conditioning (+1 951-772-3741)
- Goettl Air Conditioning and Plumbing (+1 951-875-6727) — large national/regional franchise
- We Care Plumbing, Heating and Air (+1-951-277-6848)
- Chill Factor Cooling & Heating (+1 951-268-6520)
- AQS Heating and Air Conditioning (+1-951-487-6700)
- Total Comfort, Inc. (+1-951-735-2574)

**Competitor position score rationale (45/100):** 22 HVAC competitors in a 50km radius is a moderately competitive market. Water Heater SOS enters with a trusted water heater brand and existing review base, but without HVAC-specific reviews or GBP category signals. Positioning as a full-service HVAC + plumbing + water heater contractor (like Goettl, We Care, and Ace) is the right competitive strategy — the multi-vertical approach allows cross-selling and matches the "one call" convenience that ranks well in local search.

---

## 10. GBP Completeness Score (Estimated)

This is a field-by-field estimate based on visible data. Client must verify actuals in GBP dashboard.

| GBP Field | Status | Score |
|-----------|--------|-------|
| Business name | Confirmed | 5/5 |
| Primary category | Wrong (Water Heater Supplier — needs HVAC Contractor) | 0/10 |
| Secondary categories | Unknown — likely 0–2 relevant ones | 3/10 |
| Address | Confirmed (verify "Crane" spelling in GBP) | 4/5 |
| Phone | Confirmed | 5/5 |
| Website | Confirmed | 5/5 |
| Hours | Unknown — likely not 24/7 configured | 2/5 |
| Services list | Unknown — likely water heater only | 2/10 |
| Business description | Unknown — likely water heater focused | 2/5 |
| Photos (count) | Unknown — no HVAC photos exist yet | 3/10 |
| Q&A | Unknown | 1/5 |
| Attributes (24/7, emergency, licensed) | Partial — some may be set | 2/5 |
| Posts activity | Unknown | 2/5 |
| Review count / rating | High — "hundreds of 5-star reviews" | 8/10 |
| Review responses | Unknown | 2/5 |
| Service area | Likely incomplete (33 cities needed) | 3/5 |
| **TOTAL** | | **~49/100** |

The profile scores well on identity fields (name, phone, website) and reviews but critically weak on category coherence, HVAC services list, photos, and the 24/7 hours configuration.

---

## 11. Generated LocalBusiness JSON-LD (Recommended Base Schema)

This schema should be placed in `app/layout.tsx` or a dedicated `SchemaOrg` component to apply site-wide. It replaces or supplements any existing LocalBusiness schema. Pass to seo-schema agent for integration.

```json
{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Water Heater SOS",
  "url": "https://waterheatersos.com",
  "telephone": "+18006974014",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "571 Crane St, Unit H",
    "addressLocality": "Lake Elsinore",
    "addressRegion": "CA",
    "postalCode": "92530",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.6880800,
    "longitude": -117.3391983
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "areaServed": [
    "Riverside, CA", "Moreno Valley, CA", "Corona, CA", "San Bernardino, CA",
    "Murrieta, CA", "Temecula, CA", "Redlands, CA", "Rancho Cucamonga, CA",
    "Fontana, CA", "Ontario, CA", "Hemet, CA", "Lake Elsinore, CA",
    "Perris, CA", "Menifee, CA", "Yucaipa, CA", "Highland, CA",
    "Loma Linda, CA", "Beaumont, CA", "Banning, CA", "Calimesa, CA",
    "Mentone, CA", "Grand Terrace, CA", "Colton, CA", "Rialto, CA",
    "San Jacinto, CA", "Norco, CA", "Eastvale, CA", "Chino, CA",
    "Chino Hills, CA", "Claremont, CA", "Upland, CA", "Yorba Linda, CA",
    "Anaheim Hills, CA"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "License",
    "name": "California Contractor License C-20",
    "recognizedBy": {
      "@type": "Organization",
      "name": "California State License Board (CSLB)"
    },
    "identifier": "1140776"
  },
  "knowsAbout": [
    "AC Repair", "AC Installation", "AC Maintenance",
    "Furnace Repair", "Furnace Installation", "Furnace Maintenance",
    "Heat Pump Systems", "Ductless Mini-Split Installation",
    "HVAC Maintenance Plan", "Air Filtration Systems",
    "Water Heater Installation", "Water Heater Repair",
    "Tankless Water Heater", "Drain Cleaning", "Plumbing"
  ],
  "sameAs": [
    "https://www.yelp.com/biz/water-heater-sos-lake-elsinore"
  ]
}
```

Note: `HVACBusiness` is a Schema.org subtype of `LocalBusiness` that directly signals HVAC relevance to AI crawlers. It should replace a generic `LocalBusiness` type on the root layout. Individual service pages should use `Service` type entities linked to this parent.

---

## 12. Prioritized Action List

### CRITICAL — Do Before HVAC Pages Deploy to Production

1. **Change GBP primary category to "HVAC Contractor"**
   Estimated impact: Highest of any single action. Without this, HVAC pages cannot compete for 3-pack. Do this the same day HVAC pages go live, or ideally 1–2 weeks before to allow Google indexing of the category signal.

2. **Add HVAC secondary categories (AC Contractor, AC Repair Service, Heating Contractor, Furnace Repair Service)**
   Add all four simultaneously with the primary category change. Categories take 1–3 days to propagate; doing them ahead of page launch gives the best timing alignment.

3. **Set GBP hours to 24/7 / "Open 24 Hours"**
   The moment HVAC pages go live with "24/7 emergency service" copy, the schema will signal 24/7 hours. GBP must match. A mismatched hours signal suppresses trust for emergency-intent queries — exactly the highest-volume HVAC traffic (AC repair in heat wave, furnace failure in winter).

### HIGH PRIORITY — Complete Within 30 Days of Launch

4. **Add all HVAC services to GBP Services tab**
   Minimum: AC Repair, AC Installation, Furnace Repair, Furnace Installation, HVAC Maintenance Plan. Full list in Section 2 above.

5. **Fix BBB NAP — correct "Crain St" to "Crane St" and merge duplicate profiles**
   This misspelling is the only confirmed NAP inconsistency found. It will propagate to aggregators that pull from BBB. Contact BBB support to correct the street name and request consolidation of the two profiles.

6. **Rewrite GBP business description to lead with HVAC**
   New description should open with: "Water Heater SOS is a licensed HVAC contractor (CA LIC# 1140776) serving the Inland Empire with 24/7 emergency AC repair, furnace repair, water heater installation, and plumbing services throughout Riverside County and San Bernardino County." Maximum 750 characters. Lead with HVAC since that's the new primary category.

7. **Publish 5 HVAC-specific GBP posts within 30 days of launch**
   Triggers category activity signal. Use the auto-poster once it's confirmed active for this client.

8. **Upload 10+ HVAC-specific photos to GBP**
   Technician on condenser, inside an air handler, furnace installation shot. These should come from actual job photos once HVAC service begins. AI-generated images are not appropriate for GBP photos.

### MEDIUM PRIORITY — Post-Launch, 30–90 Days

9. **Verify and update Yelp categories to include HVAC**
   Add "Heating & Air Conditioning/HVAC" in Yelp business portal. Confirm NAP matches exactly.

10. **Configure HVAC-specific review request flow in GHL**
    Route HVAC customers to review requests that mention the specific HVAC service. Target: 10+ HVAC-specific Google reviews within first 60 days of HVAC service operations.

11. **Claim/verify Bing Places and Apple Maps listings**
    Check NAP accuracy on both. Add HVAC categories. Both platforms feed AI assistant responses (Copilot, Siri) — increasingly important for GEO/AI citation.

12. **Pre-populate GBP Q&A with 8–10 HVAC questions**
    "Do you repair all AC brands?", "Do you offer 24/7 emergency HVAC service?", "What HVAC services do you offer?", "Are you licensed for HVAC work in California?", etc.

### LOW PRIORITY — Phase 2 Build

13. **Add Water Heater SOS to OpenStreetMap**
    Create a POI node at lat 33.6880800, lon -117.3391983 with appropriate tags (shop=hvac, plumber=yes, phone, website, opening_hours). OSM feeds aggregators and AI knowledge graphs.

14. **Build city × service pages for top Inland Empire cities**
    Particularly for AC Repair and Furnace Repair (strongest 3-pack keywords): `/ac-repair-riverside`, `/ac-repair-san-bernardino`, `/furnace-repair-riverside`. Each with its own geo schema and GBP service area match. This mitigates the proximity gap from Lake Elsinore vs. Riverside-centered searches.

---

## Limitations Disclaimer (Tier 0)

The following could not be assessed without Tier 1 (DataForSEO) access:

- **Geo-grid / SoLV:** Cannot measure actual current 3-pack rank position across a grid of Inland Empire coordinates. This would show exactly where the business appears or does not appear in local pack results for AC Repair, Furnace Repair, etc. Recommend running a geo-grid audit via DataForSEO Maps SERP API after HVAC launch and category changes.
- **Live GBP profile data:** Current actual categories, services, hours, photos, and post history could not be read directly. All current-state assessments are inferred from CLIENT.md, SXO notes, and the site itself.
- **Review velocity and response rate:** Cannot access the actual Google review feed to measure reviews-per-month or owner response rate.
- **Yelp and Angi live listings:** Both returned 403/access-denied. NAP and categories on these platforms require manual client verification.
- **DataForSEO competitor gap analysis:** A full competitor profile comparison (IE Comfort, NEXGEN, A-Avis, Goettl vs. Water Heater SOS) on review count, rating, category set, and geo-grid SoLV is the most valuable Tier 1 upgrade for this client post-launch.

---

## Data Sources Used

- Nominatim (OpenStreetMap geocoding) — address confirmed, lat/lon resolved
- Overpass API — competitor density within 50km radius
- WebFetch: waterheatersos.com homepage + sitemap.xml
- WebFetch: BBB search results (two profiles found)
- WebFetch: Apple Maps (no accessible data)
- WebFetch: Yelp (403 — listing confirmed to exist, data inaccessible)
- CLIENT.md, ACTIVE_WORK.md, sxo-analysis.md, ac-repair-v4-final.md (GBP Coherence Notes)
- Local repo codebase scan: 17 HVAC routes confirmed in `/app` (not yet deployed — 404 on production)
