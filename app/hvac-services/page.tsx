import { HvacServicesContent } from "@/components/hvac-services/HvacServicesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Services in the Inland Empire | Licensed Contractor",
  description:
    "HVAC services in the Inland Empire — AC, heating & indoor air quality. Licensed contractor (CA LIC# 1140776), 24/7 service, Riverside & San Bernardino County. Call (800) 697-4014.",
  keywords: [
    "hvac services inland empire",
    "hvac company inland empire",
    "hvac contractor riverside",
    "hvac services riverside ca",
    "hvac services near me",
    "air conditioning and heating inland empire",
    "hvac company san bernardino county",
  ],
  alternates: {
    canonical: "https://waterheatersos.com/hvac-services",
  },
  openGraph: {
    title: "HVAC Services in the Inland Empire | Licensed Contractor",
    description:
      "HVAC services in the Inland Empire — AC, heating & indoor air quality. Licensed contractor (CA LIC# 1140776), 24/7 service. Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/hvac-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Services in the Inland Empire | Licensed Contractor",
    description:
      "HVAC services in the Inland Empire — AC, heating & indoor air quality. Licensed contractor (CA LIC# 1140776), 24/7 service. Call (800) 697-4014.",
  },
};

const hvacServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$89\u2013$18,000",
      description:
        "Licensed HVAC and plumbing contractor serving the Inland Empire. 24/7 emergency service, AC repair, furnace repair, heat pump installation, and indoor air quality services throughout Riverside County and San Bernardino County. CA LIC# 1140776.",
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
    },
    {
      "@type": "CollectionPage",
      "@id": "https://waterheatersos.com/hvac-services#page",
      name: "HVAC Services in the Inland Empire",
      url: "https://waterheatersos.com/hvac-services",
      description:
        "Complete HVAC services in the Inland Empire — AC repair, installation, maintenance, furnace services, heat pump systems, and indoor air quality solutions. Licensed HVAC contractor (CA LIC# 1140776).",
      provider: {
        "@id": "https://waterheatersos.com/#business",
      },
      hasPart: [
        { "@type": "WebPage", url: "https://waterheatersos.com/ac-services" },
        { "@type": "WebPage", url: "https://waterheatersos.com/heating-services" },
        { "@type": "WebPage", url: "https://waterheatersos.com/indoor-air-quality" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/hvac-services#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What HVAC services do you offer in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer a full range of residential HVAC services including AC repair, AC installation, AC maintenance, ductless mini-split installation, smart thermostat installation, furnace repair, furnace installation, furnace maintenance, heat pump system installation, HVAC maintenance plans, air duct cleaning, whole-home air filtration, UV air purifiers, whole-home humidifiers, and dehumidifiers. We serve Riverside County and San Bernardino County seven days a week with 24/7 emergency availability.",
          },
        },
        {
          "@type": "Question",
          name: "Are you a licensed HVAC contractor in California?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We hold California Contractor License #1140776 under the C-20 (Warm-Air Heating, Ventilating and Air-Conditioning) classification required by the California State License Board (CSLB). Our technicians are also EPA 608 certified for refrigerant handling, as required by federal law for anyone servicing systems containing R-410A, R-454B, or legacy R-22 refrigerants.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer 24/7 emergency HVAC service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide 24/7 emergency service for both heating and cooling failures across the Inland Empire. Call (800) 697-4014 any time \u2014 day or night, weekday or weekend. For true emergencies involving elderly household members, young children, or indoor temperatures above 105\u00b0F, tell us when you call and we prioritize your dispatch accordingly.",
          },
        },
        {
          "@type": "Question",
          name: "What areas in the Inland Empire do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve all of Riverside County and San Bernardino County \u2014 including Riverside, Moreno Valley, Corona, San Bernardino, Murrieta, Temecula, Rancho Cucamonga, Fontana, Ontario, Redlands, and dozens of surrounding cities. If you\u2019re unsure whether your city is in our service area, call us and we\u2019ll confirm immediately.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle both AC and heating systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We service, repair, and install both cooling and heating systems. This includes central air conditioners, ductless mini-splits, gas furnaces, heat pump systems, and thermostats. Having one licensed contractor handle both sides of your HVAC system simplifies scheduling, warranty tracking, and annual maintenance.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work on heat pump systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We install and service heat pump HVAC systems \u2014 air-source heat pumps, ductless heat pump mini-splits, and whole-home heat pump systems. Heat pumps are increasingly popular in the Inland Empire because they provide both heating and cooling efficiently, and California\u2019s utility rebates and the federal IRA tax credit (up to $2,000) make them financially attractive.",
          },
        },
      ],
    },
  ],
};

export default function HvacServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacServicesSchema) }}
      />
      <HvacServicesContent />
    </>
  );
}
