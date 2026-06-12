import { IndoorAirQualityContent } from "@/components/indoor-air-quality/IndoorAirQualityContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indoor Air Quality Services in the Inland Empire | IAQ Contractor",
  description:
    "Indoor air quality services in the Inland Empire — air duct cleaning, filtration, UV purifiers, humidifiers & dehumidifiers. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  keywords: [
    "indoor air quality inland empire",
    "air quality services inland empire",
    "indoor air quality riverside ca",
    "iaq services inland empire",
    "air quality services riverside",
    "wildfire smoke air filter inland empire",
    "whole house air filtration inland empire",
  ],
  alternates: { canonical: "https://waterheatersos.com/indoor-air-quality" },
  openGraph: {
    title: "Indoor Air Quality Services in the Inland Empire | IAQ Contractor",
    description:
      "Indoor air quality services in the Inland Empire — air duct cleaning, filtration, UV purifiers, humidifiers & dehumidifiers. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/indoor-air-quality",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indoor Air Quality Services in the Inland Empire | IAQ Contractor",
    description:
      "Indoor air quality services in the Inland Empire — air duct cleaning, filtration, UV purifiers, humidifiers & dehumidifiers. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const indoorAirQualitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$200\u2013$3,500",
      description:
        "Licensed HVAC contractor serving the Inland Empire with air duct cleaning, whole-home air filtration, UV purifiers, humidifiers, and dehumidifiers. Riverside County and San Bernardino County. CA LIC# 1140776.",
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
      "@type": "CollectionPage",
      "@id": "https://waterheatersos.com/indoor-air-quality#page",
      name: "Indoor Air Quality Services in the Inland Empire",
      url: "https://waterheatersos.com/indoor-air-quality",
      description:
        "Indoor air quality services in the Inland Empire — air duct cleaning, whole-home air filtration, UV purifiers, humidifiers, and dehumidifiers. Licensed IAQ contractor (CA LIC# 1140776).",
      provider: { "@id": "https://waterheatersos.com/#business" },
      hasPart: [
        { "@type": "WebPage", url: "https://waterheatersos.com/air-duct-cleaning" },
        { "@type": "WebPage", url: "https://waterheatersos.com/air-filtration" },
        { "@type": "WebPage", url: "https://waterheatersos.com/whole-home-humidifier" },
        { "@type": "WebPage", url: "https://waterheatersos.com/whole-home-dehumidifier" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/indoor-air-quality#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What indoor air quality services do you offer in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer air duct cleaning, whole-home air filtration system installation, UV air purifier installation, whole-home humidifier installation, and whole-home dehumidifier installation throughout Riverside County and San Bernardino County. We also provide IAQ assessments to help homeowners identify which combination of services addresses their specific needs.",
          },
        },
        {
          "@type": "Question",
          name: "How does wildfire smoke affect indoor air quality in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "During active wildfire events, outdoor PM2.5 particulate concentrations can spike to hazardous levels across the Inland Empire \u2014 even when fires are dozens of miles away. Standard HVAC filters (MERV 8 or below) do not effectively capture PM2.5 particles. A whole-home air filtration system rated MERV 13 or higher, or a HEPA media filter installation, significantly reduces indoor particle concentrations during smoke events. Running your HVAC on \u201cfan\u201d mode with a high-efficiency filter circulates air through the filter more frequently, which helps clear smoke faster than sealed windows alone.",
          },
        },
        {
          "@type": "Question",
          name: "How often should air ducts be cleaned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The National Air Duct Cleaners Association (NADCA) recommends air duct cleaning every 3 to 5 years under normal conditions. In the Inland Empire, more frequent cleaning may be warranted if your home experienced a major wildfire smoke intrusion, a renovation or construction project, evidence of rodent activity in the ducts, or visible mold growth. If you haven't had your ducts cleaned in 5+ years, an inspection is a reasonable starting point.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a humidifier or dehumidifier in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many IE homes need both at different times of year. During heating season (roughly November through March), the dry desert climate combined with forced-air heating drives indoor relative humidity below 30% \u2014 the threshold where dry skin, cracking wood, and increased airborne virus transmission become problems. A whole-home humidifier addresses this. During the summer monsoon season (July through September), Pacific moisture can push indoor humidity above 60% in poorly ventilated homes, creating conditions for mold growth and musty odors. A whole-home dehumidifier handles that.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between an air filtration system and a UV air purifier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Air filtration systems physically capture particles \u2014 dust, pollen, smoke particulates, and allergens \u2014 in a filter media as air passes through. UV air purifiers use ultraviolet light to kill biological contaminants like mold, bacteria, and viruses on the evaporator coil and in circulating air. They do not remove particles. The two systems address different threats and work well together: filtration handles particles, UV handles biological growth. For wildfire smoke and allergy concerns, filtration is the more impactful investment.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/indoor-air-quality#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Indoor Air Quality", item: "https://waterheatersos.com/indoor-air-quality" },
      ],
    },
  ],
};

export default function IndoorAirQualityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indoorAirQualitySchema) }}
      />
      <IndoorAirQualityContent />
    </>
  );
}
