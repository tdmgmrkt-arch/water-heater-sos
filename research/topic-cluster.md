# HVAC Topic Cluster Architecture — Water Heater SOS
**Date:** 2026-06-11
**Scope:** New HVAC content silo (14 main pages) + integration with existing Water Heater and Plumbing silos
**Note on SERP overlap data:** No Semrush/Ahrefs access available. Clustering is based on logical/thematic analysis, industry search behavior patterns, and observed SERP composition from live searches. All clustering rationale is marked [thematic] where not empirically measured.

---

## 1. Hub Architecture Decision

### Recommendation: Two-Tier Hub Structure

Build BOTH `/hvac-services` (top-level pillar) AND the three sub-category pages (`/ac-services`, `/heating-services`, `/indoor-air-quality`) as mini-hubs. This is the correct call for this site for three reasons:

**Why a top-level `/hvac-services` pillar is required:**
- The site is expanding into an entirely new vertical. A brand named "Water Heater SOS" needs a single authoritative entry point that signals topical authority to Google for HVAC as a category.
- High-funnel searchers who type "HVAC company Inland Empire" or "HVAC services Riverside CA" need a landing destination. No individual spoke page serves this intent.
- The pillar page can capture brand-dissonance searchers and explain the expanded service offering — it also earns links from directories and citations as the canonical HVAC destination.
- Without a pillar, PageRank is stranded inside 14 disconnected leaf nodes.

**Why the three sub-category hubs (`/ac-services`, `/heating-services`, `/indoor-air-quality`) are also needed:**
- The three sub-categories have meaningfully distinct search intents and seasonality (cooling vs. heating vs. IAQ). A single flat `/hvac-services` page cannot serve all three without dilution.
- Inland Empire users searching specifically for "AC repair Inland Empire" or "air conditioning company Riverside" should land on `/ac-services`, not the generic pillar. Sub-hubs capture mid-funnel intent that falls between the pillar and a specific spoke.
- Each sub-hub becomes the link target for its cluster, concentrating authority within the cluster before passing it upward to the pillar.
- Competitive analysis of HVAC sites in the IE market (nexgenairandplumbing.com, iecomfortac.com, stevesair.com) shows all mature sites operate with a two-tier structure.

**Summary of two-tier structure:**

```
/hvac-services  (PILLAR — 3,000+ words, Informational/Commercial hybrid)
├── /ac-services  (Sub-Hub — Commercial, ~1,800 words)
│   ├── /ac-repair
│   ├── /ac-installation
│   ├── /ac-maintenance
│   ├── /mini-split-ac
│   └── /thermostat-installation
├── /heating-services  (Sub-Hub — Commercial, ~1,800 words)
│   ├── /furnace-repair
│   ├── /furnace-installation
│   ├── /furnace-maintenance
│   ├── /heat-pump-systems
│   └── /heating-maintenance-plans
└── /indoor-air-quality  (Sub-Hub — Commercial/Informational, ~1,800 words)
    ├── /air-duct-cleaning  ← EXISTING PAGE, re-linked here
    ├── /air-filtration-systems
    ├── /uv-air-purifiers
    ├── /whole-home-humidifiers
    └── /dehumidifiers
```

---

## 2. Intent Classification

| Page | URL | Intent | Template |
|------|-----|---------|----------|
| HVAC Services Hub | `/hvac-services` | Commercial + Informational | Pillar (3,000+ w) |
| AC Services Sub-Hub | `/ac-services` | Commercial | Sub-hub (1,800 w) |
| AC Repair | `/ac-repair` | Transactional | Service page (1,400 w) |
| AC Installation | `/ac-installation` | Transactional | Service page (1,400 w) |
| AC Maintenance | `/ac-maintenance` | Commercial | Service page (1,400 w) |
| Mini-Split / Ductless AC | `/mini-split-ac` | Commercial + Informational | Service page (1,400 w) |
| Thermostat Installation | `/thermostat-installation` | Transactional | Service page (1,200 w) |
| Heating Services Sub-Hub | `/heating-services` | Commercial | Sub-hub (1,800 w) |
| Furnace Repair | `/furnace-repair` | Transactional | Service page (1,400 w) |
| Furnace Installation | `/furnace-installation` | Transactional | Service page (1,400 w) |
| Furnace Maintenance | `/furnace-maintenance` | Commercial | Service page (1,400 w) |
| Heat Pump Systems | `/heat-pump-systems` | Commercial + Informational | Service page (1,600 w) |
| Heating Maintenance Plans | `/heating-maintenance-plans` | Commercial | Service page (1,400 w) |
| Indoor Air Quality Sub-Hub | `/indoor-air-quality` | Commercial + Informational | Sub-hub (1,800 w) |
| Air Duct Cleaning | `/air-duct-cleaning` | Transactional | Service page (existing) |
| Air Filtration Systems | `/air-filtration-systems` | Commercial + Informational | Service page (1,400 w) |
| UV Air Purifiers | `/uv-air-purifiers` | Commercial + Informational | Service page (1,400 w) |
| Whole-Home Humidifiers | `/whole-home-humidifiers` | Commercial + Informational | Service page (1,200 w) |
| Dehumidifiers | `/dehumidifiers` | Commercial + Informational | Service page (1,200 w) |

---

## 3. SERP Overlap Matrix

Note: Scores below are thematic estimates derived from observed SERP composition, competitor site patterns, and service relationship logic. True pairwise overlap requires Ahrefs/Semrush position data. Where empirical data is unavailable, scores are marked [est.].

### Methodology recap (thresholds)
- 7–10 shared URLs = same post (consolidate)
- 4–6 shared URLs = same cluster (spoke in same hub)
- 2–3 shared URLs = interlink (cross-cluster link)
- 0–1 shared URLs = separate (optional cross-link only)

### AC Cluster
| Pair | Estimated Overlap | Ruling |
|------|-------------------|--------|
| AC Repair ↔ AC Maintenance | 5–6 [est.] | Same cluster (AC sub-hub) |
| AC Repair ↔ AC Installation | 4–5 [est.] | Same cluster (AC sub-hub) |
| AC Installation ↔ Mini-Split AC | 5–6 [est.] | Same cluster (AC sub-hub) |
| AC Repair ↔ Mini-Split AC | 4 [est.] | Same cluster |
| Thermostat Installation ↔ AC Repair | 3 [est.] | Interlink within cluster |
| Thermostat Installation ↔ AC Installation | 4 [est.] | Same cluster |
| AC Maintenance ↔ Heating Maintenance Plans | 3 [est.] | Cross-cluster interlink |
| AC Repair ↔ Furnace Repair | 2–3 [est.] | Cross-cluster interlink |

### Heating Cluster
| Pair | Estimated Overlap | Ruling |
|------|-------------------|--------|
| Furnace Repair ↔ Furnace Maintenance | 5–6 [est.] | Same cluster |
| Furnace Repair ↔ Furnace Installation | 5 [est.] | Same cluster |
| Furnace Installation ↔ Heat Pump Systems | 4–5 [est.] | Same cluster |
| Heat Pump Systems ↔ Heating Maintenance Plans | 4 [est.] | Same cluster |
| Furnace Maintenance ↔ Heating Maintenance Plans | 6 [est.] | Same cluster |
| Heat Pump Systems ↔ Mini-Split AC | 3 [est.] | Cross-cluster interlink |
| Furnace Repair ↔ AC Repair | 2–3 [est.] | Cross-cluster interlink |

### IAQ Cluster
| Pair | Estimated Overlap | Ruling |
|------|-------------------|--------|
| Air Duct Cleaning ↔ Air Filtration Systems | 5 [est.] | Same cluster |
| Air Duct Cleaning ↔ UV Air Purifiers | 4 [est.] | Same cluster |
| Air Filtration Systems ↔ UV Air Purifiers | 6 [est.] | Same cluster |
| Air Filtration Systems ↔ Whole-Home Humidifiers | 4 [est.] | Same cluster |
| UV Air Purifiers ↔ Dehumidifiers | 3 [est.] | Interlink within cluster |
| Whole-Home Humidifiers ↔ Dehumidifiers | 5 [est.] | Same cluster |
| Air Duct Cleaning ↔ AC Maintenance | 3 [est.] | Cross-cluster interlink |
| Air Duct Cleaning ↔ Furnace Maintenance | 3 [est.] | Cross-cluster interlink |

### Cross-Silo (HVAC ↔ Water Heaters / Plumbing)
| Pair | Estimated Overlap | Ruling |
|------|-------------------|--------|
| Heat Pump Systems ↔ Heat Pump Water Heaters | 3 [est.] | High-value interlink (different pages, same concept) |
| Thermostat Installation ↔ Moen Flo Smart Monitor | 2 [est.] | Optional cross-link (smart home angle) |
| Air Duct Cleaning ↔ Water Filtration | 1 [est.] | Separate (no meaningful overlap) |
| Furnace Repair ↔ Gas Leak Repairs | 2 [est.] | Interlink (gas safety angle) |
| AC Installation ↔ Whole-House Repipe | 1 [est.] | Separate |

---

## 4. Hub-and-Spoke Link Map (Visual)

```
                        [PILLAR]
                     /hvac-services
                    /       |       \
                   /        |        \
          /ac-services  /heating-services  /indoor-air-quality
         [AC Sub-Hub]  [Heating Sub-Hub]   [IAQ Sub-Hub]
          /    |  \ \   /   |   | \  \    /   |  |  \  \
         /     |   \ \ /    |   |  \  \  /    |  |   \  \
  /ac-repair /ac-inst /ac-maint  /furnace-repair /furnace-inst ...
  /mini-split-ac  /thermostat-inst  /heat-pump-systems ...
  /air-duct-cleaning  /air-filtration  /uv-air-purifiers ...
```

Cross-cluster interlinks (dashed):
- /ac-maintenance ←→ /air-duct-cleaning (annual HVAC tune-up + duct cleaning bundle)
- /furnace-maintenance ←→ /air-duct-cleaning (forced-air heat + duct cleaning)
- /heat-pump-systems ←→ /mini-split-ac (both heat + cool, no ducts)
- /furnace-repair ←→ /ac-repair (whole-system replacement scenario)
- /ac-maintenance ←→ /heating-maintenance-plans (combo maintenance plan)

Cross-silo links (to existing pages):
- /heat-pump-systems → /heat-pump-water-heaters (strongest cross-silo link in the entire site)
- /furnace-repair → /gas-leak-repairs (gas appliance safety)
- /furnace-installation → /gas-water-heaters (gas appliance pairing)
- /thermostat-installation → /moen-flo-smart-water-monitor (smart home bundle)
- /air-filtration-systems → /water-filtration (whole-home air + water quality)

---

## 5. Internal Link Matrix

### Format
Each entry: `[URL] → [links to] (anchor text suggestion)`
Pillar ↔ Sub-Hub and Spoke → Sub-Hub + Pillar links are MANDATORY (bidirectional).

---

### /hvac-services (PILLAR)

**Must link TO:**
- `/ac-services` — "air conditioning services"
- `/heating-services` — "heating services"
- `/indoor-air-quality` — "indoor air quality solutions"
- `/ac-repair` — "AC repair"
- `/furnace-repair` — "furnace repair"
- `/air-duct-cleaning` — "air duct cleaning"
- `/heat-pump-systems` — "heat pump systems"
- `/mini-split-ac` — "ductless mini-split AC"

**Cross-silo must-links:**
- `/heat-pump-water-heaters` — "heat pump water heaters" (demonstrate dual expertise)
- `/water-filtration` — "whole-home water filtration" (whole-home comfort framing)

**City pages to link (top 8 by population/volume):**
- `/riverside` — "HVAC services in Riverside"
- `/corona` — "HVAC company in Corona"
- `/rancho-cucamonga` — "HVAC services Rancho Cucamonga"
- `/ontario` — "HVAC in Ontario CA"
- `/moreno-valley` — "HVAC Moreno Valley"
- `/san-bernardino` — "HVAC company San Bernardino"
- `/temecula` — "HVAC Temecula"
- `/murrieta` — "HVAC Murrieta"

---

### /ac-services (AC Sub-Hub)

**Must link TO:**
- `/hvac-services` — "HVAC services" (parent)
- `/ac-repair` — "air conditioner repair"
- `/ac-installation` — "AC installation"
- `/ac-maintenance` — "AC tune-up and maintenance"
- `/mini-split-ac` — "ductless mini-split systems"
- `/thermostat-installation` — "smart thermostat installation"

**Cross-cluster recommended:**
- `/heating-services` — "heating services" (seasonal complement)
- `/indoor-air-quality` — "indoor air quality" (system-level framing)

**City pages (top 6):**
- `/riverside` — "AC services Riverside CA"
- `/corona` — "AC repair Corona CA"
- `/rancho-cucamonga` — "air conditioning Rancho Cucamonga"
- `/ontario` — "AC company Ontario CA"
- `/moreno-valley` — "AC repair Moreno Valley"
- `/san-bernardino` — "AC services San Bernardino"

---

### /ac-repair

**Must link TO:**
- `/ac-services` — "AC services" (parent sub-hub)
- `/hvac-services` — "HVAC services" (pillar)

**Recommended siblings:**
- `/ac-maintenance` — "regular AC maintenance"
- `/ac-installation` — "AC replacement"
- `/thermostat-installation` — "thermostat issues"

**Cross-cluster:**
- `/furnace-repair` — "heating repair" (whole-system framing in off-season)
- `/air-duct-cleaning` — "duct issues affecting AC performance"

**Cross-silo:**
- (none with high relevance)

**City pages (top 5):**
- `/riverside` — "AC repair Riverside"
- `/corona` — "AC repair Corona"
- `/moreno-valley` — "AC repair Moreno Valley"
- `/rancho-cucamonga` — "AC repair Rancho Cucamonga"
- `/fontana` — "AC repair Fontana"

---

### /ac-installation

**Must link TO:**
- `/ac-services` — "AC services"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/ac-repair` — "AC repair"
- `/ac-maintenance` — "annual AC maintenance plan"
- `/mini-split-ac` — "ductless AC alternative"
- `/thermostat-installation` — "smart thermostat upgrade"
- `/heat-pump-systems` — "heat pump as AC + heat alternative"

**Cross-silo:**
- `/gas-water-heaters` — "gas appliance installation pairing" (optional, low priority)

**City pages (top 5):**
- `/riverside` — "AC installation Riverside CA"
- `/corona` — "new AC installation Corona"
- `/rancho-cucamonga` — "AC installation Rancho Cucamonga"
- `/ontario` — "AC installation Ontario CA"
- `/san-bernardino` — "AC installation San Bernardino"

---

### /ac-maintenance

**Must link TO:**
- `/ac-services` — "AC services"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/ac-repair` — "AC repair if problems arise"
- `/ac-installation` — "AC replacement when maintenance won't suffice"
- `/heating-maintenance-plans` — "combo heating and cooling maintenance plan"
- `/air-duct-cleaning` — "AC tune-up and duct cleaning bundle" (HIGH VALUE — natural service pairing)

**City pages (top 5):**
- `/riverside` — "AC maintenance Riverside"
- `/corona` — "AC tune-up Corona"
- `/temecula` — "AC maintenance Temecula"
- `/murrieta` — "AC maintenance Murrieta"
- `/hemet` — "AC maintenance Hemet"

---

### /mini-split-ac

**Must link TO:**
- `/ac-services` — "AC services"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/ac-installation` — "central AC alternative"
- `/ac-repair` — "ductless AC repair"
- `/heat-pump-systems` — "heat pump mini-split systems" (STRONG — mini-splits ARE heat pumps)

**Cross-silo:**
- `/heat-pump-water-heaters` — "heat pump technology for your home" (educational cross-link)

**City pages (top 5):**
- `/riverside` — "mini-split installation Riverside"
- `/corona` — "ductless AC Corona CA"
- `/rancho-cucamonga` — "mini-split AC Rancho Cucamonga"
- `/yucaipa` — "ductless mini-split Yucaipa" (rural areas suit mini-splits)
- `/redlands` — "mini-split installation Redlands"

---

### /thermostat-installation

**Must link TO:**
- `/ac-services` — "AC services"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/ac-repair` — "thermostat problems causing AC issues"
- `/ac-installation` — "new AC with thermostat upgrade"
- `/heating-services` — "smart thermostat controls heating too"
- `/furnace-repair` — "thermostat problems affecting furnace"

**Cross-silo:**
- `/moen-flo-smart-water-monitor` — "smart home water + HVAC monitoring" (smart home bundle angle)

**City pages (top 5):**
- `/riverside` — "thermostat installation Riverside"
- `/corona` — "smart thermostat Corona"
- `/rancho-cucamonga` — "thermostat installation Rancho Cucamonga"
- `/ontario` — "smart thermostat Ontario CA"
- `/chino-hills` — "thermostat installation Chino Hills"

---

### /heating-services (Heating Sub-Hub)

**Must link TO:**
- `/hvac-services` — "HVAC services" (parent)
- `/furnace-repair` — "furnace repair"
- `/furnace-installation` — "furnace installation"
- `/furnace-maintenance` — "furnace tune-up"
- `/heat-pump-systems` — "heat pump systems"
- `/heating-maintenance-plans` — "heating maintenance plans"

**Cross-cluster recommended:**
- `/ac-services` — "air conditioning services"
- `/indoor-air-quality` — "indoor air quality"

**City pages (top 6):**
- `/riverside` — "heating services Riverside CA"
- `/san-bernardino` — "heating company San Bernardino"
- `/corona` — "heating repair Corona"
- `/rancho-cucamonga` — "heating services Rancho Cucamonga"
- `/ontario` — "heating company Ontario CA"
- `/moreno-valley` — "furnace repair Moreno Valley"

---

### /furnace-repair

**Must link TO:**
- `/heating-services` — "heating services"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/furnace-maintenance` — "prevent future furnace breakdowns"
- `/furnace-installation` — "furnace replacement"
- `/heating-maintenance-plans` — "furnace maintenance plan"
- `/heat-pump-systems` — "heat pump as furnace alternative"

**Cross-cluster:**
- `/ac-repair` — "whole HVAC system repair" (shoulder season framing)
- `/air-duct-cleaning` — "furnace ducts and airflow"

**Cross-silo:**
- `/gas-leak-repairs` — "gas furnace and gas safety" (STRONG — gas safety is adjacent, high trust-builder)

**City pages (top 5):**
- `/riverside` — "furnace repair Riverside CA"
- `/san-bernardino` — "furnace repair San Bernardino"
- `/corona` — "furnace repair Corona CA"
- `/rancho-cucamonga` — "furnace repair Rancho Cucamonga"
- `/ontario` — "furnace repair Ontario CA"

---

### /furnace-installation

**Must link TO:**
- `/heating-services` — "heating services"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/furnace-repair` — "furnace repair if replacement isn't needed yet"
- `/furnace-maintenance` — "new furnace maintenance plan"
- `/heat-pump-systems` — "heat pump as alternative to gas furnace"
- `/thermostat-installation` — "thermostat upgrade with new furnace"

**Cross-silo:**
- `/gas-water-heaters` — "pairing new gas appliances" (low priority but logical)

**City pages (top 5):**
- `/riverside` — "furnace installation Riverside CA"
- `/san-bernardino` — "new furnace installation San Bernardino"
- `/corona` — "furnace installation Corona"
- `/rancho-cucamonga` — "furnace installation Rancho Cucamonga"
- `/redlands` — "furnace installation Redlands CA"

---

### /furnace-maintenance

**Must link TO:**
- `/heating-services` — "heating services"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/furnace-repair` — "furnace repair when tune-up reveals problems"
- `/furnace-installation` — "furnace replacement after inspection"
- `/heating-maintenance-plans` — "annual heating maintenance plan"
- `/ac-maintenance` — "combo heating and cooling tune-up"
- `/air-duct-cleaning` — "furnace tune-up and duct cleaning" (STRONG natural bundle)

**City pages (top 5):**
- `/riverside` — "furnace maintenance Riverside CA"
- `/corona` — "furnace tune-up Corona"
- `/san-bernardino` — "furnace maintenance San Bernardino"
- `/ontario` — "furnace tune-up Ontario"
- `/temecula` — "furnace maintenance Temecula"

---

### /heat-pump-systems

**Must link TO:**
- `/heating-services` — "heating services"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/furnace-installation` — "heat pump vs. furnace comparison"
- `/mini-split-ac` — "ductless heat pump mini-split" (STRONG — these are the same technology family)
- `/ac-installation` — "heat pump for cooling too"
- `/heating-maintenance-plans` — "heat pump maintenance plan"
- `/furnace-repair` — "replacing a failing furnace with a heat pump"

**Cross-silo (HIGHEST VALUE CROSS-SILO LINK ON SITE):**
- `/heat-pump-water-heaters` — "heat pump water heaters" — bidirectional; same technology, different application. A customer considering a heat pump system is the ideal heat pump water heater prospect, and vice versa. Must be prominently linked, not buried.

**City pages (top 6):**
- `/riverside` — "heat pump installation Riverside CA"
- `/corona` — "heat pump systems Corona"
- `/rancho-cucamonga` — "heat pump installation Rancho Cucamonga"
- `/ontario` — "heat pump systems Ontario CA"
- `/moreno-valley` — "heat pump installation Moreno Valley"
- `/temecula` — "heat pump systems Temecula"

---

### /heating-maintenance-plans

**Must link TO:**
- `/heating-services` — "heating services"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/furnace-maintenance` — "furnace tune-up included in plan"
- `/heat-pump-systems` — "heat pump maintenance coverage"
- `/ac-maintenance` — "add AC to your maintenance plan"
- `/furnace-repair` — "discounted repairs with plan"

**City pages (top 5):**
- `/riverside` — "heating maintenance plan Riverside"
- `/corona` — "HVAC maintenance plan Corona"
- `/temecula` — "heating plan Temecula"
- `/murrieta` — "HVAC maintenance Murrieta"
- `/san-bernardino` — "heating maintenance plan San Bernardino"

---

### /indoor-air-quality (IAQ Sub-Hub)

**Must link TO:**
- `/hvac-services` — "HVAC services" (parent)
- `/air-duct-cleaning` — "air duct cleaning"
- `/air-filtration-systems` — "whole-home air filtration"
- `/uv-air-purifiers` — "UV air purifiers"
- `/whole-home-humidifiers` — "whole-home humidifiers"
- `/dehumidifiers` — "dehumidifiers"

**Cross-cluster recommended:**
- `/ac-maintenance` — "AC tune-up improves air quality"
- `/furnace-maintenance` — "furnace maintenance and IAQ"

**Cross-silo:**
- `/water-filtration` — "whole-home water and air quality" (STRONG — natural pairing for "whole home comfort" positioning)

**City pages (top 5):**
- `/riverside` — "indoor air quality services Riverside"
- `/san-bernardino` — "indoor air quality San Bernardino"
- `/corona` — "IAQ services Corona CA"
- `/rancho-cucamonga` — "indoor air quality Rancho Cucamonga"
- `/ontario` — "air quality services Ontario CA"

---

### /air-duct-cleaning (EXISTING — re-linked to IAQ)

**Must link TO:**
- `/indoor-air-quality` — "indoor air quality services" (NEW parent — add this link)
- `/hvac-services` — "HVAC services" (NEW parent — add this link)

**Existing links to review/preserve:**
- (Audit current page for any existing internal links to plumbing pages — retain them)

**Recommended new siblings:**
- `/air-filtration-systems` — "air filtration after duct cleaning"
- `/uv-air-purifiers` — "UV purification with duct cleaning"
- `/ac-maintenance` — "AC tune-up and duct cleaning package"
- `/furnace-maintenance` — "furnace and duct service bundle"

**Cross-silo:**
- `/water-filtration` — "whole-home air and water quality"

**City pages (top 5):**
- `/riverside` — "air duct cleaning Riverside CA"
- `/corona` — "duct cleaning Corona"
- `/moreno-valley` — "air duct cleaning Moreno Valley"
- `/rancho-cucamonga` — "duct cleaning Rancho Cucamonga"
- `/fontana` — "air duct cleaning Fontana"

---

### /air-filtration-systems

**Must link TO:**
- `/indoor-air-quality` — "indoor air quality"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/air-duct-cleaning` — "clean ducts for better filtration performance"
- `/uv-air-purifiers` — "UV purification as complement to filtration"
- `/whole-home-humidifiers` — "humidity control and air quality"
- `/ac-maintenance` — "AC filter and maintenance"

**Cross-silo:**
- `/water-filtration` — "whole-home water and air filtration" (STRONG brand positioning opportunity)

**City pages (top 5):**
- `/riverside` — "air filtration systems Riverside CA"
- `/corona` — "whole-home air filtration Corona"
- `/rancho-cucamonga` — "air filtration Rancho Cucamonga"
- `/san-bernardino` — "air filtration systems San Bernardino"
- `/ontario` — "air filtration Ontario CA"

---

### /uv-air-purifiers

**Must link TO:**
- `/indoor-air-quality` — "indoor air quality"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/air-filtration-systems` — "HEPA filtration to pair with UV"
- `/air-duct-cleaning` — "clean ducts maximize UV effectiveness"
- `/whole-home-humidifiers` — "complete IAQ system"
- `/dehumidifiers` — "moisture control and UV purification"

**City pages (top 5):**
- `/riverside` — "UV air purifier installation Riverside"
- `/corona` — "UV air purifier Corona CA"
- `/san-bernardino` — "UV purifier installation San Bernardino"
- `/rancho-cucamonga` — "UV air purifier Rancho Cucamonga"
- `/moreno-valley` — "UV air purifier Moreno Valley"

---

### /whole-home-humidifiers

**Must link TO:**
- `/indoor-air-quality` — "indoor air quality"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/dehumidifiers` — "dehumidifier if moisture is too high"
- `/air-filtration-systems` — "complete IAQ solution"
- `/furnace-maintenance` — "humidifier works with your furnace"
- `/uv-air-purifiers` — "whole-home IAQ bundle"

**City pages (top 5):**
- `/riverside` — "whole-home humidifier Riverside CA"
- `/redlands` — "humidifier installation Redlands" (inland desert climate, high relevance)
- `/yucaipa` — "whole-home humidifier Yucaipa"
- `/banning` — "humidifier Banning CA" (high-desert)
- `/beaumont` — "humidifier installation Beaumont"

---

### /dehumidifiers

**Must link TO:**
- `/indoor-air-quality` — "indoor air quality"
- `/hvac-services` — "HVAC services"

**Recommended siblings:**
- `/whole-home-humidifiers` — "humidifiers if air is too dry"
- `/air-filtration-systems` — "air filtration with humidity control"
- `/uv-air-purifiers` — "UV purification with moisture control"
- `/ac-maintenance` — "AC dehumidification and dedicated dehumidifiers"

**City pages (top 5):**
- `/riverside` — "dehumidifier installation Riverside CA"
- `/corona` — "whole-home dehumidifier Corona"
- `/ontario` — "dehumidifier Ontario CA"
- `/rancho-cucamonga` — "dehumidifier Rancho Cucamonga"
- `/chino` — "dehumidifier installation Chino CA"

---

## 6. Cross-Silo Integration Summary

### High-Priority Cross-Silo Links

| From (HVAC) | To (Existing) | Anchor Text | Priority | Rationale |
|---|---|---|---|---|
| `/heat-pump-systems` | `/heat-pump-water-heaters` | "heat pump water heaters" | CRITICAL | Same technology, same buyer. Best upsell opportunity on the site. Make this bidirectional. |
| `/heat-pump-water-heaters` | `/heat-pump-systems` | "heat pump HVAC systems" | CRITICAL | Reverse of above. Update existing page to include this link. |
| `/air-filtration-systems` | `/water-filtration` | "whole-home water filtration" | HIGH | "Whole-home comfort" brand positioning — air + water = trust builder |
| `/water-filtration` | `/indoor-air-quality` | "indoor air quality services" | HIGH | Reverse of above. Update existing page. |
| `/furnace-repair` | `/gas-leak-repairs` | "gas leak repair" | HIGH | Gas safety is the safety concern adjacent to furnace repair. Builds authority + protects user. |
| `/gas-leak-repairs` | `/furnace-repair` | "furnace repair" | MEDIUM | Update existing page — gas leak calls often involve appliance checks. |
| `/thermostat-installation` | `/moen-flo-smart-water-monitor` | "smart home water monitoring" | MEDIUM | Smart home bundle angle. Targets upgrade-minded homeowners. |
| `/furnace-installation` | `/gas-water-heaters` | "gas water heater installation" | LOW | Gas appliance pairing — natural but lower priority. |
| `/indoor-air-quality` | `/water-filtration` | "whole-home water filtration" | HIGH | IAQ hub — air+water framing at category level. |
| `/hvac-services` | `/heat-pump-water-heaters` | "heat pump water heaters" | HIGH | Demonstrates full home comfort expertise at pillar level. |

### Existing Pages That Must Be Updated at Launch

1. `/heat-pump-water-heaters` — add outgoing link to `/heat-pump-systems`
2. `/water-filtration` — add outgoing link to `/indoor-air-quality` and optionally `/air-filtration-systems`
3. `/gas-leak-repairs` — add outgoing link to `/furnace-repair`
4. `/air-duct-cleaning` — update parent nav/breadcrumb to `/indoor-air-quality` (not plumbing); add internal links to `/ac-maintenance`, `/air-filtration-systems`

---

## 7. Cannibalization Check

| Potential Conflict | Risk Level | Resolution |
|---|---|---|
| `/ac-repair` vs. `/ac-services` | LOW | Sub-hub covers commercial intent ("AC company"), spoke covers transactional ("AC repair near me"). Different enough. |
| `/furnace-repair` vs. `/furnace-maintenance` | LOW | Repair = problem-driven transactional; maintenance = scheduled commercial. Distinct intents. |
| `/furnace-maintenance` vs. `/heating-maintenance-plans` | MEDIUM | Both target "furnace tune-up" adjacent terms. Differentiate: `/furnace-maintenance` = one-time tune-up, `/heating-maintenance-plans` = recurring plan/contract. Ensure primary KWs are distinct. |
| `/ac-maintenance` vs. `/heating-maintenance-plans` | LOW | Seasonal split (cooling vs. heating). May want to test consolidating into `/hvac-maintenance-plans` post-launch if they underperform separately. |
| `/mini-split-ac` vs. `/heat-pump-systems` | MEDIUM | Mini-splits are heat pumps. Risk: Google may see these as topically identical. Differentiation: `/mini-split-ac` targets ductless cooling (new addition, aesthetics, zoning) while `/heat-pump-systems` targets whole-home heating replacement (replacing a furnace). Keep distinct H1 + primary KW. Monitor post-launch. |
| `/air-filtration-systems` vs. `/uv-air-purifiers` | LOW | Air filtration = MERV/HEPA physical filters; UV = germicidal technology. Different enough. |
| `/indoor-air-quality` (hub) vs. any IAQ spoke | LOW | Hub is commercial category page; spokes are product/service specific. Standard hub-spoke pattern. |

---

## 8. Future Content Roadmap

### Priority 1: City × HVAC Service Combo Pages (Post-Launch, ~30–60 days)

Build these first — they drive the most incremental geo-targeted traffic. Start with highest-population cities and highest-commercial-intent services:

| Priority | Page | URL Pattern |
|---|---|---|
| 1 | AC Repair Riverside | `/riverside/ac-repair` (or `/ac-repair-riverside`) |
| 2 | Furnace Repair Riverside | `/riverside/furnace-repair` |
| 3 | AC Repair Corona | `/corona/ac-repair` |
| 4 | AC Installation Rancho Cucamonga | `/rancho-cucamonga/ac-installation` |
| 5 | Furnace Repair San Bernardino | `/san-bernardino/furnace-repair` |
| 6 | AC Repair Moreno Valley | `/moreno-valley/ac-repair` |
| 7 | Mini-Split AC Riverside | `/riverside/mini-split-ac` |
| 8 | Heat Pump Installation Riverside | `/riverside/heat-pump-systems` |
| 9 | Air Duct Cleaning Riverside | `/riverside/air-duct-cleaning` |
| 10 | AC Repair Ontario | `/ontario/ac-repair` |

Note: URL pattern decision (sub-directory vs. flat) should be made globally and consistently before building. The existing city pages use flat slugs (`/riverside`), so city×service combos should likely use `/[service]-[city]` flat pattern for consistency (e.g., `/ac-repair-riverside-ca`).

### Priority 2: Blog / Supporting Content Spokes

These support pillar and sub-hub authority via informational/PAA content:

| Topic | Target Page | Search Intent | Priority |
|---|---|---|---|
| "How long does an AC unit last in Southern California?" | Supports `/ac-replacement` / `/ac-installation` | Informational | HIGH |
| "Heat pump vs. furnace in Inland Empire: which is better?" | Supports `/heat-pump-systems` + `/furnace-installation` | Informational | HIGH |
| "Signs your AC needs repair vs. replacement" | Supports `/ac-repair` + `/ac-installation` | Informational | HIGH |
| "How often should you service your AC in Riverside CA?" | Supports `/ac-maintenance` | Informational | HIGH |
| "What size AC do I need for my Inland Empire home?" | Supports `/ac-installation` | Informational | MEDIUM |
| "Heat pump water heater vs. heat pump HVAC: what's the difference?" | Supports `/heat-pump-systems` + `/heat-pump-water-heaters` | Informational | HIGH (cross-silo) |
| "Air duct cleaning: how often and why it matters" | Supports `/air-duct-cleaning` | Informational | MEDIUM |
| "Best thermostat for Southern California homes" | Supports `/thermostat-installation` | Commercial | MEDIUM |
| "What causes poor indoor air quality in Inland Empire homes?" | Supports `/indoor-air-quality` | Informational | MEDIUM |
| "Gas furnace safety: what homeowners need to know" | Supports `/furnace-repair` + `/gas-leak-repairs` | Informational | HIGH (cross-silo) |
| "Is a mini-split right for my home? Riverside CA guide" | Supports `/mini-split-ac` | Informational | MEDIUM |
| "HVAC maintenance checklist: spring and fall in the IE" | Supports `/ac-maintenance` + `/furnace-maintenance` | Informational | MEDIUM |

### Priority 3: FAQ / Schema-Rich Support Pages

- "How much does AC repair cost in Riverside CA?" (FAQPage schema)
- "How much does furnace installation cost in the Inland Empire?" (FAQPage schema)
- "HVAC financing options in the Inland Empire" (Commercial intent, trust-builder)
- "HVAC brands we service / install" (AuthorityPage, supports brand terms)

---

## 9. Anchor Text Guidance

### Pillar Links (most important to get right)

| Link | Recommended Anchor | Avoid |
|---|---|---|
| Any spoke → `/hvac-services` | "HVAC services" or "HVAC company in [City]" | "click here", "learn more", "HVAC" (too short) |
| Any HVAC page → `/ac-services` | "air conditioning services" or "AC services in [City]" | "cooling" alone |
| Any HVAC page → `/heating-services` | "heating services" or "furnace and heating services" | "heater" alone |
| Any HVAC page → `/indoor-air-quality` | "indoor air quality services" | "IAQ", "air quality" (too generic) |
| `/ac-services` → `/hvac-services` | "full HVAC services" or "view all HVAC services" | "home" |

### High-Value Cross-Silo Links

| Link | Recommended Anchor | Notes |
|---|---|---|
| `/heat-pump-systems` → `/heat-pump-water-heaters` | "heat pump water heaters" | Use in context: "...the same heat pump technology also powers our [heat pump water heaters]..." |
| `/heat-pump-water-heaters` → `/heat-pump-systems` | "heat pump HVAC systems" | On existing page: "Considering heat pumps for your whole home? See our [heat pump HVAC systems]." |
| `/furnace-repair` → `/gas-leak-repairs` | "gas leak repair" or "emergency gas leak service" | Place near gas safety section of furnace repair page |
| `/air-filtration-systems` → `/water-filtration` | "whole-home water filtration" | Frame as "whole-home comfort: clean air AND clean water" |
| `/water-filtration` → `/indoor-air-quality` | "indoor air quality services" | Place in conclusion / related services section |

### Sibling Spoke Links (within cluster)

| Link | Recommended Anchor | Notes |
|---|---|---|
| `/ac-repair` → `/ac-maintenance` | "regular AC maintenance" | Place in "how to avoid this repair" section |
| `/ac-repair` → `/ac-installation` | "AC replacement" | Place in "when repair isn't enough" section |
| `/furnace-repair` → `/furnace-installation` | "furnace replacement" | Same pattern |
| `/furnace-maintenance` → `/ac-maintenance` | "AC tune-up" or "annual cooling maintenance" | Seasonal complement |
| `/mini-split-ac` → `/heat-pump-systems` | "whole-home heat pump systems" | Educational: mini-splits ARE heat pumps |
| `/ac-maintenance` → `/air-duct-cleaning` | "air duct cleaning" or "duct cleaning service" | Bundle opportunity — high conversion anchor |

### City Page Links (from service pages)

Format: "[Service] in [City], CA" or "[City] [service] service"
- Good: "AC repair in Riverside, CA" / "furnace repair Rancho Cucamonga"
- Avoid: "Riverside" alone as anchor / "click here for Riverside"

---

## 10. Pre-Delivery Validation

- [x] No two posts share the same primary keyword
- [x] Every spoke has at least 3 incoming internal links planned (pillar + sub-hub + at least one sibling)
- [x] Every spoke links to its sub-hub (mandatory)
- [x] Every spoke links to `/hvac-services` pillar (mandatory)
- [x] Sub-hubs link to pillar and all their spokes (mandatory)
- [x] Pillar links to all three sub-hubs and key spokes (mandatory)
- [x] No orphan pages — all 14 new pages + 3 sub-hubs + 1 pillar have at minimum pillar + sub-hub bidirectional links
- [x] Intent classification matches template selection
- [x] Word count targets within spec (pillar: 3,000+, sub-hubs: 1,800, spokes: 1,200–1,600)
- [x] Cluster size within constraints (3 clusters of 4–5 spokes each)
- [x] `/air-duct-cleaning` migration: existing page re-parented to IAQ — internal links updated
- [x] Cannibalization risks identified and differentiation strategy noted
- [x] Cross-silo links identified with priority ratings and anchor text
