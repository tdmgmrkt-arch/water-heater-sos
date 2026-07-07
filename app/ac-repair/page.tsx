import { AcRepairContent } from "@/components/ac-repair/AcRepairContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Repair in the Inland Empire | 24/7 Same-Day Service",
  description:
    "AC repair in the Inland Empire from $150. Licensed techs (CA LIC# 1140776), same-day service, 5-star rated. Riverside, Corona, Moreno Valley & more. Call (800) 697-4014.",
  keywords: [
    "ac repair",
    "ac repair inland empire",
    "ac repair riverside ca",
    "emergency ac repair",
    "same day ac repair",
    "ac repair near me",
    "air conditioner repair inland empire",
    "24 hour ac repair",
    "ac not cooling repair",
    "ac repair corona ca",
    "ac repair moreno valley",
  ],
  alternates: {
    canonical: "https://waterheatersos.com/ac-repair",
  },
  openGraph: {
    title: "AC Repair in the Inland Empire | 24/7 Same-Day Service",
    description:
      "AC repair in the Inland Empire from $150. Licensed techs (CA LIC# 1140776), same-day service, 5-star rated. Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/ac-repair",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Repair in the Inland Empire | 24/7 Same-Day Service",
    description:
      "AC repair in the Inland Empire from $150. Licensed techs (CA LIC# 1140776), same-day service, 5-star rated. Call (800) 697-4014.",
  },
};

// Combined @graph JSON-LD schema — LocalBusiness + Service + FAQPage + BreadcrumbList
// Source: ac-repair-v5-schema.md
// NOTES:
//   - streetAddress and geo (lat/long) intentionally omitted — awaiting confirmed NAP from client
//   - /hvac-services BreadcrumbList URL (position 2) omitted — page not yet live;
//     full 3-level breadcrumb (Home > HVAC Services > AC Repair) will be restored in Phase: scale-batch
//     when /hvac-services is built. Schema currently shows Home > AC Repair only.
//   - openingHoursSpecification uses 24/7 pattern matching on-page copy promise;
//     must be verified against GBP hours before publish to avoid schema/GBP mismatch
const acRepairSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "SOS Plumbing and Air",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$150\u2013$1,800",
      description:
        "Licensed HVAC and plumbing contractor serving the Inland Empire. 24/7 emergency AC repair, water heater installation and repair, and home services throughout Riverside County and San Bernardino County. CA LIC# 1140776.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "571 Crane St, Unit H",
        addressLocality: "Lake Elsinore",
        addressRegion: "CA",
        postalCode: "92530",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.6880800,
        longitude: -117.3391983,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Riverside" },
        { "@type": "City", name: "Moreno Valley" },
        { "@type": "City", name: "Corona" },
        { "@type": "City", name: "San Bernardino" },
        { "@type": "City", name: "Murrieta" },
        { "@type": "City", name: "Temecula" },
        { "@type": "City", name: "Redlands" },
        { "@type": "City", name: "Rancho Cucamonga" },
        { "@type": "City", name: "Fontana" },
        { "@type": "City", name: "Ontario" },
        { "@type": "City", name: "Hemet" },
        { "@type": "City", name: "Lake Elsinore" },
        { "@type": "City", name: "Perris" },
        { "@type": "City", name: "Menifee" },
        { "@type": "City", name: "Yucaipa" },
        { "@type": "City", name: "Highland" },
        { "@type": "City", name: "Loma Linda" },
        { "@type": "City", name: "Beaumont" },
        { "@type": "City", name: "Banning" },
        { "@type": "City", name: "Calimesa" },
        { "@type": "City", name: "Mentone" },
        { "@type": "City", name: "Grand Terrace" },
        { "@type": "City", name: "Colton" },
        { "@type": "City", name: "Rialto" },
        { "@type": "City", name: "San Jacinto" },
        { "@type": "City", name: "Norco" },
        { "@type": "City", name: "Eastvale" },
        { "@type": "City", name: "Chino" },
        { "@type": "City", name: "Chino Hills" },
        { "@type": "City", name: "Claremont" },
        { "@type": "City", name: "Upland" },
        { "@type": "City", name: "Yorba Linda" },
        { "@type": "City", name: "Anaheim Hills" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HVAC and Plumbing Services",
      },
    },
    {
      "@type": "Service",
      "@id": "https://waterheatersos.com/ac-repair#service",
      name: "AC Repair",
      serviceType: "AC Repair",
      url: "https://waterheatersos.com/ac-repair",
      description:
        "24/7 emergency AC repair in the Inland Empire. Licensed technicians (CA LIC# 1140776), same-day service, upfront pricing. Serving Riverside County and San Bernardino County.",
      provider: {
        "@id": "https://waterheatersos.com/#business",
      },
      areaServed: [
        { "@type": "City", name: "Riverside" },
        { "@type": "City", name: "Moreno Valley" },
        { "@type": "City", name: "Corona" },
        { "@type": "City", name: "San Bernardino" },
        { "@type": "City", name: "Murrieta" },
        { "@type": "City", name: "Temecula" },
        { "@type": "City", name: "Redlands" },
        { "@type": "City", name: "Rancho Cucamonga" },
        { "@type": "City", name: "Fontana" },
        { "@type": "City", name: "Ontario" },
        { "@type": "City", name: "Hemet" },
        { "@type": "City", name: "Lake Elsinore" },
        { "@type": "City", name: "Perris" },
        { "@type": "City", name: "Menifee" },
        { "@type": "City", name: "Yucaipa" },
        { "@type": "City", name: "Highland" },
        { "@type": "City", name: "Loma Linda" },
        { "@type": "City", name: "Beaumont" },
        { "@type": "City", name: "Banning" },
        { "@type": "City", name: "Calimesa" },
        { "@type": "City", name: "Mentone" },
        { "@type": "City", name: "Grand Terrace" },
        { "@type": "City", name: "Colton" },
        { "@type": "City", name: "Rialto" },
        { "@type": "City", name: "San Jacinto" },
        { "@type": "City", name: "Norco" },
        { "@type": "City", name: "Eastvale" },
        { "@type": "City", name: "Chino" },
        { "@type": "City", name: "Chino Hills" },
        { "@type": "City", name: "Claremont" },
        { "@type": "City", name: "Upland" },
        { "@type": "City", name: "Yorba Linda" },
        { "@type": "City", name: "Anaheim Hills" },
      ],
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "150",
          maxPrice: "1800",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/ac-repair#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does AC repair cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AC repairs in the Inland Empire range from $150 to $800, depending on the problem. Simple fixes like a capacitor replacement run $150\u2013$350. Refrigerant leaks and recharges typically cost $200\u2013$600. Compressor replacement is the most expensive repair, usually $800\u2013$1,800. We provide a firm, upfront quote before starting any work so you know exactly what you\u2019re paying.",
          },
        },
        {
          "@type": "Question",
          name: "Should I repair or replace my AC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Repair your AC when the repair cost is less than 50% of a new system and your unit is under 10 years old; replace it when the repair exceeds that threshold or the system is over 10 years old. Older units also use R-22 refrigerant, which is expensive and being phased out. If your system is newer or the repair is minor, fixing it usually makes sense. We\u2019ll give you an honest assessment \u2014 we don\u2019t push replacement to drive a larger sale.",
          },
        },
        {
          "@type": "Question",
          name: "How long does AC repair take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AC repairs are completed in one visit, typically one to three hours. Capacitor replacements, drain line cleanings, and minor electrical repairs can take under an hour. Refrigerant leak repairs take two to three hours depending on where the leak is located. Compressor replacements may require a return visit if the part needs to be ordered, but we carry common components on the truck to minimize wait time.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my AC blowing warm air?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AC blows warm air for one of four main reasons: low refrigerant due to a leak, a frozen evaporator coil, a dirty condenser coil, or a failed compressor. A quick check: make sure the thermostat is set to \u201cCool\u201d and the air filter isn\u2019t completely blocked. If those are fine and the system still blows warm, call us \u2014 this is one of the most common AC problems we fix across the Inland Empire and we diagnose it on the first visit.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer emergency AC repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes \u2014 SOS Plumbing and Air provides 24/7 emergency AC repair throughout the Inland Empire. When temperatures hit triple digits in Riverside, Moreno Valley, or Fontana, a broken AC is a health emergency for families with young children, elderly residents, or pets. Call (800) 697-4014 any time \u2014 day or night, weekday or weekend \u2014 and we\u2019ll dispatch a technician.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you arrive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most of the Inland Empire, we aim to arrive the same day you call \u2014 often within a few hours. Response times can vary across Riverside County and San Bernardino County depending on call volume and how far you are from our service hub, but we\u2019ll give you an honest window when you call. For true emergencies \u2014 elderly or medically vulnerable household members, indoor temperatures above 105\u00b0F \u2014 tell us upfront and we prioritize your call accordingly.",
          },
        },
        {
          "@type": "Question",
          name: "Are you licensed to do AC repair in California?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SOS Plumbing and Air holds California Contractor License #1140776 under the C-20 (Warm-Air Heating, Ventilating and Air-Conditioning) classification required by the California State License Board (CSLB) for HVAC work. Our technicians are EPA 608 certified for refrigerant handling, as federally required for anyone servicing systems containing R-22, R-410A, or R-454B refrigerants. You can verify our license at the CSLB website.",
          },
        },
        {
          "@type": "Question",
          name: "Do you service all AC brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We service all major AC brands, including Carrier, Trane, Lennox, Rheem, York, Goodman, American Standard, Bryant, and Daikin. We also service older and less common brands. If you\u2019re unsure whether we work on your system, call us \u2014 we\u2019ll confirm before scheduling.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/ac-repair#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://waterheatersos.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "HVAC Services",
          item: "https://waterheatersos.com/hvac-services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AC Repair",
          item: "https://waterheatersos.com/ac-repair",
        },
      ],
    },
  ],
};

export default function AcRepairPage() {
  return (
    <>
      {/* Schema JSON-LD — server-rendered so Google and AI crawlers see it on first paint */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acRepairSchema) }}
      />
      <AcRepairContent />
    </>
  );
}
