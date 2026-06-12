import { AcServicesContent } from "@/components/ac-services/AcServicesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Services in the Inland Empire | Air Conditioning Contractor",
  description:
    "AC services in the Inland Empire — repair, installation, maintenance & mini-splits. Licensed (CA LIC# 1140776), same-day service, Riverside & San Bernardino County. Call (800) 697-4014.",
  keywords: [
    "ac services inland empire",
    "air conditioning services inland empire",
    "ac services riverside ca",
    "air conditioning company inland empire",
    "ac contractor inland empire",
    "air conditioning services riverside",
    "ac company inland empire",
  ],
  alternates: {
    canonical: "https://waterheatersos.com/ac-services",
  },
  openGraph: {
    title: "AC Services in the Inland Empire | Air Conditioning Contractor",
    description:
      "AC services in the Inland Empire — repair, installation, maintenance & mini-splits. Licensed (CA LIC# 1140776), same-day service. Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/ac-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Services in the Inland Empire | Air Conditioning Contractor",
    description:
      "AC services in the Inland Empire — repair, installation, maintenance & mini-splits. Licensed (CA LIC# 1140776), same-day service. Call (800) 697-4014.",
  },
};

const acServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$89\u2013$12,000",
      description:
        "Licensed HVAC and plumbing contractor serving the Inland Empire. AC repair, installation, maintenance, mini-split installation, and smart thermostat installation throughout Riverside County and San Bernardino County. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/ac-services#page",
      name: "Air Conditioning Services in the Inland Empire",
      url: "https://waterheatersos.com/ac-services",
      description:
        "Complete air conditioning services in the Inland Empire — AC repair, installation, maintenance, ductless mini-split installation, and smart thermostat installation. Licensed HVAC contractor (CA LIC# 1140776).",
      provider: { "@id": "https://waterheatersos.com/#business" },
      hasPart: [
        { "@type": "WebPage", url: "https://waterheatersos.com/ac-repair" },
        { "@type": "WebPage", url: "https://waterheatersos.com/ac-installation" },
        { "@type": "WebPage", url: "https://waterheatersos.com/ac-maintenance" },
        { "@type": "WebPage", url: "https://waterheatersos.com/mini-split-installation" },
        { "@type": "WebPage", url: "https://waterheatersos.com/thermostat-installation" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/ac-services#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What AC services do you offer in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer AC repair, AC installation, AC maintenance and tune-up plans, ductless mini-split installation, and smart thermostat installation throughout Riverside County and San Bernardino County. Emergency same-day service is available 24/7 for cooling failures. Scheduled appointments are available seven days a week for maintenance and installations.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if I need AC repair or a full replacement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Repair your AC when the repair cost is less than 50% of a new system's price and your unit is under 10 years old. Replace it when the repair crosses that threshold or the system is more than 10\u201315 years old, uses R-22 refrigerant (now phased out), or has a failing compressor. We'll give you an honest assessment and show you the math before recommending either option.",
          },
        },
        {
          "@type": "Question",
          name: "Do you service all AC brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We service all major residential AC brands including Carrier, Trane, Lennox, Rheem, York, Goodman, American Standard, Bryant, Mitsubishi, Daikin, and others. We also service older and less common brands. If you're unsure, call us and we'll confirm before scheduling.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I have my AC serviced in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Annual AC maintenance is the minimum recommendation \u2014 ideally in spring before the cooling season starts (March through May). Given the Inland Empire's long, extreme cooling season, bi-annual service (spring and fall) provides the best protection against mid-summer breakdowns. Skipping annual service can void your manufacturer warranty on some systems.",
          },
        },
        {
          "@type": "Question",
          name: "Do you install ductless mini-splits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Ductless mini-split installation is one of our most requested services in the Inland Empire, especially for room additions, detached garages, ADUs, and older homes without existing ductwork. Single-zone and multi-zone systems are available. Mini-splits are heat pump systems, so they also provide heating in winter \u2014 no separate heating equipment required.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/ac-services#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "AC Services", item: "https://waterheatersos.com/ac-services" },
      ],
    },
  ],
};

export default function AcServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acServicesSchema) }}
      />
      <AcServicesContent />
    </>
  );
}
