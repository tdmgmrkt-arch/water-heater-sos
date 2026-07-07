import { AcMaintenanceContent } from "@/components/ac-maintenance/AcMaintenanceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Maintenance & Tune-Up in the Inland Empire | Annual Service",
  description:
    "AC maintenance & tune-ups in the Inland Empire. Annual service keeps your AC running through triple-digit summers. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  keywords: [
    "ac maintenance inland empire",
    "ac tune up inland empire",
    "air conditioner maintenance inland empire",
    "ac service inland empire",
    "annual ac maintenance inland empire",
    "hvac maintenance inland empire",
    "ac tune up riverside ca",
  ],
  alternates: { canonical: "https://waterheatersos.com/ac-maintenance" },
  openGraph: {
    title: "AC Maintenance & Tune-Up in the Inland Empire | Annual Service",
    description:
      "AC maintenance & tune-ups in the Inland Empire. Annual service keeps your AC running through triple-digit summers. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/ac-maintenance",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Maintenance & Tune-Up in the Inland Empire | Annual Service",
    description:
      "AC maintenance & tune-ups in the Inland Empire. Annual service keeps your AC running through triple-digit summers. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const acMaintenanceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "SOS Plumbing and Air",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$89\u2013$199",
      description:
        "Licensed HVAC contractor serving the Inland Empire with AC maintenance, tune-ups, and HVAC maintenance plans. Riverside County and San Bernardino County. CA LIC# 1140776.",
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
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Riverside" }, { "@type": "City", name: "Moreno Valley" },
        { "@type": "City", name: "Corona" }, { "@type": "City", name: "San Bernardino" },
        { "@type": "City", name: "Murrieta" }, { "@type": "City", name: "Temecula" },
        { "@type": "City", name: "Redlands" }, { "@type": "City", name: "Rancho Cucamonga" },
        { "@type": "City", name: "Fontana" }, { "@type": "City", name: "Ontario" },
        { "@type": "City", name: "Hemet" }, { "@type": "City", name: "Lake Elsinore" },
        { "@type": "City", name: "Perris" }, { "@type": "City", name: "Menifee" },
        { "@type": "City", name: "Yucaipa" }, { "@type": "City", name: "Highland" },
        { "@type": "City", name: "Loma Linda" }, { "@type": "City", name: "Beaumont" },
        { "@type": "City", name: "Banning" }, { "@type": "City", name: "Calimesa" },
        { "@type": "City", name: "Mentone" }, { "@type": "City", name: "Grand Terrace" },
        { "@type": "City", name: "Colton" }, { "@type": "City", name: "Rialto" },
        { "@type": "City", name: "San Jacinto" }, { "@type": "City", name: "Norco" },
        { "@type": "City", name: "Eastvale" }, { "@type": "City", name: "Chino" },
        { "@type": "City", name: "Chino Hills" }, { "@type": "City", name: "Claremont" },
        { "@type": "City", name: "Upland" }, { "@type": "City", name: "Yorba Linda" },
        { "@type": "City", name: "Anaheim Hills" },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://waterheatersos.com/ac-maintenance#service",
      name: "AC Maintenance",
      serviceType: "AC Maintenance",
      url: "https://waterheatersos.com/ac-maintenance",
      description:
        "Annual AC maintenance and tune-up service in the Inland Empire. Keeps your AC running at peak efficiency through triple-digit Inland Empire summers. Licensed HVAC contractor (CA LIC# 1140776).",
      provider: { "@id": "https://waterheatersos.com/#business" },
      areaServed: [
        { "@type": "City", name: "Riverside" }, { "@type": "City", name: "Moreno Valley" },
        { "@type": "City", name: "Corona" }, { "@type": "City", name: "San Bernardino" },
        { "@type": "City", name: "Murrieta" }, { "@type": "City", name: "Temecula" },
        { "@type": "City", name: "Lake Elsinore" }, { "@type": "City", name: "Menifee" },
        { "@type": "City", name: "Hemet" }, { "@type": "City", name: "Fontana" },
        { "@type": "City", name: "Rancho Cucamonga" }, { "@type": "City", name: "Ontario" },
      ],
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "89",
          maxPrice: "199",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/ac-maintenance#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does an AC tune-up cost in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard AC tune-up in the Inland Empire runs $89 to $199 for a single system. The price varies based on whether the visit includes just the inspection and cleaning checklist or also covers refrigerant top-off (which adds cost if your system is low). Our HVAC maintenance plan covers both heating and cooling tune-ups annually at a reduced per-visit rate.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I get my AC serviced?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once a year, typically in early spring before the Inland Empire cooling season begins (March through May is ideal). The IE's extreme summer heat — sustained temperatures above 100\u00b0F for weeks — puts more stress on AC equipment than in most other California climates. An annual tune-up catches worn capacitors, dirty coils, and refrigerant issues before they become mid-summer failures.",
          },
        },
        {
          "@type": "Question",
          name: "What does an AC tune-up include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our AC tune-up covers: inspect and clean condenser coil, inspect evaporator coil for buildup, check and record refrigerant charge, test capacitor and contactor, clean or flush condensate drain, check blower motor and belt condition, inspect electrical connections and wiring, measure supply and return air temperature split, and review thermostat operation. We also note any items that are worn but not yet failed so you can plan ahead rather than face an emergency call.",
          },
        },
        {
          "@type": "Question",
          name: "Can a dirty AC filter cause the system to fail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A severely clogged filter restricts airflow to the point where the evaporator coil freezes, the blower motor overheats, and in extreme cases the compressor fails from lack of heat exchange. We recommend checking filters every 30 days during peak cooling season and replacing them every 1\u20133 months depending on filter type. This is the single cheapest maintenance item that has the highest impact on system life.",
          },
        },
        {
          "@type": "Question",
          name: "Is the HVAC maintenance plan worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most Inland Empire homeowners with central AC, yes \u2014 especially if the system is more than 5 years old. The plan covers both heating and cooling tune-ups each year, includes priority scheduling, and typically comes with a discount on any repairs needed after the visit. The annualized cost is usually less than a single emergency service call.",
          },
        },
        {
          "@type": "Question",
          name: "Do you check refrigerant during a tune-up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We check refrigerant pressure and record the charge during every AC tune-up. If the system is low, we'll tell you \u2014 and we'll also tell you why. A system that's low on refrigerant has a leak; simply topping it off without finding the leak is a temporary fix. We'll quote the leak repair separately so you can decide how to proceed.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to schedule AC maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "March and April are ideal for Inland Empire homeowners \u2014 before the summer heat ramps up and before our schedule fills with emergency repair calls. If you miss the spring window, early fall (September\u2013October) is the next best time, catching the system after the hardest season before it sits idle over winter. Avoid trying to schedule a tune-up in June or July \u2014 availability is tight and pricing may reflect peak demand.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an AC tune-up take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AC tune-ups take 45 minutes to 90 minutes for a single system. Multi-system homes or systems with significant buildup on the condenser coil may take longer. We'll give you an accurate time estimate when you schedule.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/ac-maintenance#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "AC Services", item: "https://waterheatersos.com/ac-services" },
        { "@type": "ListItem", position: 4, name: "AC Maintenance", item: "https://waterheatersos.com/ac-maintenance" },
      ],
    },
  ],
};

export default function AcMaintenancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acMaintenanceSchema) }}
      />
      <AcMaintenanceContent />
    </>
  );
}
