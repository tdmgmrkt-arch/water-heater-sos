import { HeatingServicesContent } from "@/components/heating-services/HeatingServicesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heating Services in the Inland Empire | Furnace & Heat Pump Contractor",
  description:
    "Heating services in the Inland Empire — furnace repair, installation, maintenance & heat pump systems. Licensed (CA LIC# 1140776). Riverside & San Bernardino County. Call (800) 697-4014.",
  keywords: [
    "heating services inland empire",
    "furnace contractor inland empire",
    "heating services riverside ca",
    "furnace repair inland empire",
    "heating company inland empire",
    "furnace services inland empire",
    "heat pump inland empire",
  ],
  alternates: { canonical: "https://waterheatersos.com/heating-services" },
  openGraph: {
    title: "Heating Services in the Inland Empire | Furnace & Heat Pump Contractor",
    description:
      "Heating services in the Inland Empire — furnace repair, installation, maintenance & heat pump systems. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/heating-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heating Services in the Inland Empire | Furnace & Heat Pump Contractor",
    description:
      "Heating services in the Inland Empire — furnace repair, installation, maintenance & heat pump systems. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const heatingServicesSchema = {
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
        "Licensed HVAC contractor serving the Inland Empire with furnace repair, furnace installation, heat pump systems, and HVAC maintenance plans. Riverside County and San Bernardino County. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/heating-services#page",
      name: "Heating Services in the Inland Empire",
      url: "https://waterheatersos.com/heating-services",
      description:
        "Complete heating services in the Inland Empire — furnace repair, furnace installation, furnace maintenance, heat pump systems, and HVAC maintenance plans. Licensed HVAC contractor (CA LIC# 1140776).",
      provider: { "@id": "https://waterheatersos.com/#business" },
      hasPart: [
        { "@type": "WebPage", url: "https://waterheatersos.com/furnace-repair" },
        { "@type": "WebPage", url: "https://waterheatersos.com/furnace-installation" },
        { "@type": "WebPage", url: "https://waterheatersos.com/furnace-maintenance" },
        { "@type": "WebPage", url: "https://waterheatersos.com/heat-pump-systems" },
        { "@type": "WebPage", url: "https://waterheatersos.com/hvac-maintenance-plan" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/heating-services#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What heating services do you offer in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer furnace repair, furnace installation, annual furnace maintenance, heat pump system installation and service, and HVAC maintenance plans covering both heating and cooling. We service all gas and electric heating systems throughout Riverside County and San Bernardino County, with 24/7 emergency availability for heating failures.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a furnace tune-up every year in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes \u2014 annual furnace maintenance is recommended even in the Inland Empire's short heating season. A furnace that runs for only 10\u201314 weeks per year is still subject to component wear, igniter degradation, and heat exchanger stress from repeated heating cycles. The risk of failure is higher after a long summer idle. A fall tune-up also includes a carbon monoxide safety check, which is not something to skip on a gas appliance.",
          },
        },
        {
          "@type": "Question",
          name: "Is a heat pump better than a furnace for the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most Inland Empire homes, a heat pump makes strong financial sense when replacing aging equipment \u2014 especially when combined with California utility rebates and the federal IRA tax credit of up to $2,000 for qualifying installations. Heat pumps are highly efficient in the IE's mild winters and deliver significant cooling efficiency gains in summer. For homeowners with existing gas infrastructure and good ductwork, a high-efficiency gas furnace is also a solid choice. We'll walk you through both options with actual cost estimates for your specific home.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer emergency furnace repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide 24/7 emergency furnace repair throughout the Inland Empire. Call (800) 697-4014 any time. Heating failures are less frequent here than in colder climates, but they're still emergencies \u2014 especially for elderly household members or homes in the high-desert areas of Yucaipa, Banning, or Beaumont where overnight temperatures can drop below 30\u00b0F.",
          },
        },
        {
          "@type": "Question",
          name: "What brands of furnaces and heating systems do you service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We service all major furnace and heat pump brands including Carrier, Trane, Lennox, Rheem, York, Goodman, American Standard, Bryant, and Daikin. We also work on older and less common brands. Call us if you're unsure whether we service your specific system.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/heating-services#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Heating Services", item: "https://waterheatersos.com/heating-services" },
      ],
    },
  ],
};

export default function HeatingServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heatingServicesSchema) }}
      />
      <HeatingServicesContent />
    </>
  );
}
