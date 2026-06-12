# AC Repair — Schema Markup (v5)
> Generator: seo-schema | Source spec: ac-repair-v4-final.md | Page: /ac-repair

---

## Implementation guidance for web-developer

Place this schema in the `<head>` of the `/ac-repair` page. In Next.js 15, use the `<Script>` component with `strategy="beforeInteractive"` inside your page's `<Head>` block, or — preferred for App Router — return a `<script type="application/ld+json">` tag directly inside the page's exported `generateMetadata` function by including it as a raw `<script>` in the layout, or use the `next/head` approach for Pages Router. The key constraint is that the script must be server-rendered in the initial HTML payload so Google and AI crawlers (GPTBot, PerplexityBot, ClaudeBot) can parse it without executing JavaScript. Do not inject schema client-side via `useEffect` or dynamically after hydration.

All four schema types (LocalBusiness, Service, FAQPage, BreadcrumbList) are combined into a single `@graph` array below. This is the recommended approach: one `<script type="application/ld+json">` block is cleaner than four separate scripts, avoids any risk of conflicting `@context` declarations, and makes future edits easier to manage in a single place. Google's structured data documentation explicitly supports `@graph` as a valid pattern. Drop the entire JSON block as-is into the script tag.

Before deploying to production, action the open items listed at the bottom of this file. Specifically: the `streetAddress` field is intentionally omitted pending client NAP confirmation, the `geo` property is omitted pending GBP coordinate verification, and the `/hvac-services` breadcrumb URL should be verified as a live page before this page goes live. Deploying with an incomplete address is acceptable and will not invalidate the schema — Google handles partial `PostalAddress` objects gracefully. However, the breadcrumb pointing to a 404 page will surface as an error in Search Console.

---

## Combined JSON-LD (@graph format — recommended)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://waterheatersos.com/#business",
      "name": "Water Heater SOS",
      "url": "https://waterheatersos.com",
      "telephone": "+18006974014",
      "priceRange": "$150–$1,800",
      "description": "Licensed HVAC and plumbing contractor serving the Inland Empire. 24/7 emergency AC repair, water heater installation and repair, and home services throughout Riverside County and San Bernardino County. CA LIC# 1140776.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Inland Empire",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Riverside" },
        { "@type": "City", "name": "Moreno Valley" },
        { "@type": "City", "name": "Corona" },
        { "@type": "City", "name": "San Bernardino" },
        { "@type": "City", "name": "Murrieta" },
        { "@type": "City", "name": "Temecula" },
        { "@type": "City", "name": "Redlands" },
        { "@type": "City", "name": "Rancho Cucamonga" },
        { "@type": "City", "name": "Fontana" },
        { "@type": "City", "name": "Ontario" },
        { "@type": "City", "name": "Hemet" },
        { "@type": "City", "name": "Lake Elsinore" },
        { "@type": "City", "name": "Perris" },
        { "@type": "City", "name": "Menifee" },
        { "@type": "City", "name": "Yucaipa" },
        { "@type": "City", "name": "Highland" },
        { "@type": "City", "name": "Loma Linda" },
        { "@type": "City", "name": "Beaumont" },
        { "@type": "City", "name": "Banning" },
        { "@type": "City", "name": "Calimesa" },
        { "@type": "City", "name": "Mentone" },
        { "@type": "City", "name": "Grand Terrace" },
        { "@type": "City", "name": "Colton" },
        { "@type": "City", "name": "Rialto" },
        { "@type": "City", "name": "San Jacinto" },
        { "@type": "City", "name": "Norco" },
        { "@type": "City", "name": "Eastvale" },
        { "@type": "City", "name": "Chino" },
        { "@type": "City", "name": "Chino Hills" },
        { "@type": "City", "name": "Claremont" },
        { "@type": "City", "name": "Upland" },
        { "@type": "City", "name": "Yorba Linda" },
        { "@type": "City", "name": "Anaheim Hills" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HVAC and Plumbing Services"
      }
    },
    {
      "@type": "Service",
      "@id": "https://waterheatersos.com/ac-repair#service",
      "name": "AC Repair",
      "serviceType": "AC Repair",
      "url": "https://waterheatersos.com/ac-repair",
      "description": "24/7 emergency AC repair in the Inland Empire. Licensed technicians (CA LIC# 1140776), same-day service, upfront pricing. Serving Riverside County and San Bernardino County.",
      "provider": {
        "@id": "https://waterheatersos.com/#business"
      },
      "areaServed": [
        { "@type": "City", "name": "Riverside" },
        { "@type": "City", "name": "Moreno Valley" },
        { "@type": "City", "name": "Corona" },
        { "@type": "City", "name": "San Bernardino" },
        { "@type": "City", "name": "Murrieta" },
        { "@type": "City", "name": "Temecula" },
        { "@type": "City", "name": "Redlands" },
        { "@type": "City", "name": "Rancho Cucamonga" },
        { "@type": "City", "name": "Fontana" },
        { "@type": "City", "name": "Ontario" },
        { "@type": "City", "name": "Hemet" },
        { "@type": "City", "name": "Lake Elsinore" },
        { "@type": "City", "name": "Perris" },
        { "@type": "City", "name": "Menifee" },
        { "@type": "City", "name": "Yucaipa" },
        { "@type": "City", "name": "Highland" },
        { "@type": "City", "name": "Loma Linda" },
        { "@type": "City", "name": "Beaumont" },
        { "@type": "City", "name": "Banning" },
        { "@type": "City", "name": "Calimesa" },
        { "@type": "City", "name": "Mentone" },
        { "@type": "City", "name": "Grand Terrace" },
        { "@type": "City", "name": "Colton" },
        { "@type": "City", "name": "Rialto" },
        { "@type": "City", "name": "San Jacinto" },
        { "@type": "City", "name": "Norco" },
        { "@type": "City", "name": "Eastvale" },
        { "@type": "City", "name": "Chino" },
        { "@type": "City", "name": "Chino Hills" },
        { "@type": "City", "name": "Claremont" },
        { "@type": "City", "name": "Upland" },
        { "@type": "City", "name": "Yorba Linda" },
        { "@type": "City", "name": "Anaheim Hills" }
      ],
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "150",
          "maxPrice": "1800",
          "priceCurrency": "USD"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/ac-repair#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does AC repair cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most AC repairs in the Inland Empire range from $150 to $800, depending on the problem. Simple fixes like a capacitor replacement run $150–$350. Refrigerant leaks and recharges typically cost $200–$600. Compressor replacement is the most expensive repair, usually $800–$1,800. We provide a firm, upfront quote before starting any work so you know exactly what you're paying."
          }
        },
        {
          "@type": "Question",
          "name": "Should I repair or replace my AC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Repair your AC when the repair cost is less than 50% of a new system and your unit is under 10 years old; replace it when the repair exceeds that threshold or the system is over 10 years old. Older units also use R-22 refrigerant, which is expensive and being phased out. If your system is newer or the repair is minor, fixing it usually makes sense. We'll give you an honest assessment — we don't push replacement to drive a larger sale."
          }
        },
        {
          "@type": "Question",
          "name": "How long does AC repair take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most AC repairs are completed in one visit, typically one to three hours. Capacitor replacements, drain line cleanings, and minor electrical repairs can take under an hour. Refrigerant leak repairs take two to three hours depending on where the leak is located. Compressor replacements may require a return visit if the part needs to be ordered, but we carry common components on the truck to minimize wait time."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my AC blowing warm air?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AC blows warm air for one of four main reasons: low refrigerant due to a leak, a frozen evaporator coil, a dirty condenser coil, or a failed compressor. A quick check: make sure the thermostat is set to \"Cool\" and the air filter isn't completely blocked. If those are fine and the system still blows warm, call us — this is one of the most common AC problems we fix across the Inland Empire and we diagnose it on the first visit."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer emergency AC repair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Water Heater SOS provides 24/7 emergency AC repair throughout the Inland Empire. When temperatures hit triple digits in Riverside, Moreno Valley, or Fontana, a broken AC is a health emergency for families with young children, elderly residents, or pets. Call (800) 697-4014 any time — day or night, weekday or weekend — and we'll dispatch a technician."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you arrive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most of the Inland Empire, we aim to arrive the same day you call — often within a few hours. Response times can vary across Riverside County and San Bernardino County depending on call volume and how far you are from our service hub, but we'll give you an honest window when you call. For true emergencies — elderly or medically vulnerable household members, indoor temperatures above 105°F — tell us upfront and we prioritize your call accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed to do AC repair in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Water Heater SOS holds California Contractor License #1140776 under the C-20 (Warm-Air Heating, Ventilating and Air-Conditioning) classification required by the California State License Board (CSLB) for HVAC work. Our technicians are EPA 608 certified for refrigerant handling, as federally required for anyone servicing systems containing R-22, R-410A, or R-454B refrigerants. You can verify our license at the CSLB website."
          }
        },
        {
          "@type": "Question",
          "name": "Do you service all AC brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We service all major AC brands, including Carrier, Trane, Lennox, Rheem, York, Goodman, American Standard, Bryant, and Daikin. We also service older and less common brands. If you're unsure whether we work on your system, call us — we'll confirm before scheduling."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/ac-repair#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://waterheatersos.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "HVAC Services",
          "item": "https://waterheatersos.com/hvac-services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AC Repair",
          "item": "https://waterheatersos.com/ac-repair"
        }
      ]
    }
  ]
}
```

---

## Open items requiring client / web-developer action

**Client action required — before publish:**

1. **`streetAddress` omitted (UNCONFIRMED NAP):** The `address` block intentionally omits `streetAddress` and `postalCode`. Client must provide confirmed business address before these fields can be added. Once confirmed, add `"streetAddress": "<street>"` and `"postalCode": "<zip>"` to the `PostalAddress` object inside the LocalBusiness entity. Wrong address in schema creates a NAP mismatch with GBP and citations — do not guess.

2. **`geo` omitted (UNCONFIRMED coordinates):** The `geo` property (`GeoCoordinates` with `latitude` and `longitude`) is intentionally absent. Pull exact coordinates from the confirmed GBP listing — do not use a geocoder guess or map-click approximation. Once confirmed, add to LocalBusiness:
   ```json
   "geo": {
     "@type": "GeoCoordinates",
     "latitude": "<confirmed-lat>",
     "longitude": "<confirmed-long>"
   }
   ```

3. **`openingHoursSpecification` — must match GBP exactly before publish:** The 24/7 pattern (`opens: "00:00"`, `closes: "23:59"`, all 7 days) reflects the page copy promise of 24/7 service. If GBP hours are set to anything other than 24/7, this schema will contradict the GBP listing and may trigger a structured data warning in Search Console. Verify GBP hours match before deploying. If GBP hours are M–F only, update both GBP and schema to align — do not let them diverge.

**Web-developer action required — before publish:**

4. **`/hvac-services` breadcrumb URL (FUTURE PAGE):** BreadcrumbList Position 2 points to `https://waterheatersos.com/hvac-services`. This page does not exist yet — it is part of the HVAC batch build. Do not deploy the AC Repair page with a breadcrumb pointing to a 404. Either (a) deploy `/hvac-services` first or simultaneously, or (b) temporarily flatten the breadcrumb to `Home → AC Repair` (remove Position 2) and restore the full 3-level breadcrumb once `/hvac-services` is live. Option (a) is strongly preferred for schema coherence.

**Notes (no action blocking publish):**

- FAQPage schema is included per spec. As of August 2023, Google restricts FAQPage rich results to government and healthcare sites on commercial pages. This schema will NOT generate FAQ rich results in Google Search for this site. It is included because AI engines (ChatGPT, Perplexity, Claude) parse FAQPage schema for citation and Q&A surfacing — the GEO benefit justifies its presence. No action needed; just be aware rich results will not appear.
- `Service.provider` uses `@id` reference to the LocalBusiness entity rather than duplicating the full entity inline. This is the correct pattern per Schema.org.
- All URLs are absolute (`https://waterheatersos.com/...`). No relative URLs.
- No dates in this schema block, so ISO 8601 formatting is not applicable.
