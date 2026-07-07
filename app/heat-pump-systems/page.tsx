import { HeatPumpSystemsContent } from "@/components/heat-pump-systems/HeatPumpSystemsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Pump Systems in the Inland Empire | Installation & Service",
  description:
    "Heat pump installation & service in the Inland Empire — whole-home heat pumps for year-round heating & cooling. IRA tax credits available. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  keywords: [
    "heat pump inland empire",
    "heat pump installation inland empire",
    "heat pump system inland empire",
    "heat pump heating cooling inland empire",
    "heat pump replacement inland empire",
    "heat pump riverside ca",
    "whole home heat pump inland empire",
  ],
  alternates: { canonical: "https://waterheatersos.com/heat-pump-systems" },
  openGraph: {
    title: "Heat Pump Systems in the Inland Empire | Installation & Service",
    description:
      "Heat pump installation & service in the Inland Empire — whole-home heat pumps for year-round heating & cooling. IRA tax credits available. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/heat-pump-systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heat Pump Systems in the Inland Empire | Installation & Service",
    description:
      "Heat pump installation & service in the Inland Empire — whole-home heat pumps for year-round heating & cooling. IRA tax credits available. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const heatPumpSystemsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "SOS Plumbing and Air",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$5,000\u2013$18,000",
      description:
        "Licensed HVAC contractor serving the Inland Empire with whole-home heat pump installation and service. Heating and cooling in a single efficient system. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/heat-pump-systems#service",
      name: "Heat Pump Systems",
      serviceType: "Heat Pump Installation",
      url: "https://waterheatersos.com/heat-pump-systems",
      description:
        "Whole-home heat pump installation and service in the Inland Empire. Provides both heating and cooling in a single efficient system. Federal IRA tax credits up to $2,000 available. Licensed HVAC contractor (CA LIC# 1140776).",
      provider: { "@id": "https://waterheatersos.com/#business" },
      areaServed: [
        { "@type": "City", name: "Riverside" }, { "@type": "City", name: "Moreno Valley" },
        { "@type": "City", name: "Corona" }, { "@type": "City", name: "San Bernardino" },
        { "@type": "City", name: "Murrieta" }, { "@type": "City", name: "Temecula" },
        { "@type": "City", name: "Lake Elsinore" }, { "@type": "City", name: "Menifee" },
      ],
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "5000",
          maxPrice: "18000",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/heat-pump-systems#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a heat pump cost in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A whole-home heat pump in the Inland Empire typically costs $5,000 to $12,000 installed for a standard split system replacing existing central HVAC. Larger homes or systems requiring ductwork modifications run higher. After the federal IRA tax credit of up to $2,000 and any applicable SCE rebates, the net cost is typically $3,500\u2013$10,000. We provide a written quote after a load calculation and site assessment.",
          },
        },
        {
          "@type": "Question",
          name: "Is a heat pump efficient in the Inland Empire heat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes \u2014 heat pumps are highly efficient for cooling, often exceeding 20 SEER2. In the Inland Empire's mild winters (most winter days are above 40\u00b0F), heat pumps operate at 2\u20133x the efficiency of electric resistance heat. Cold-climate heat pumps (rated to 5\u00b0F or below) handle the higher-elevation IE areas like Yucaipa, Banning, and Beaumont. At extreme summer peaks above 110\u00b0F, output can dip slightly, but modern heat pumps maintain rated output up to 115\u00b0F.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a heat pump and a traditional AC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A traditional central AC only cools. A heat pump cools in summer and heats in winter using the same refrigerant cycle running in reverse \u2014 it moves heat rather than generating it. A traditional HVAC system requires both an AC and a separate furnace; a heat pump replaces both. Heat pumps are typically more efficient for heating than gas furnaces on a per-BTU basis at moderate winter temperatures.",
          },
        },
        {
          "@type": "Question",
          name: "What is a dual-fuel heat pump system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A dual-fuel or hybrid heat pump system pairs a heat pump with a gas furnace as a backup heat source. In mild weather, the heat pump handles heating at high efficiency. When outdoor temperatures drop below the heat pump's efficient operating range (typically below 35\u201340\u00b0F), the gas furnace takes over. This configuration makes sense for higher-elevation IE homes that see harder winters while still wanting the cooling efficiency of a heat pump in summer.",
          },
        },
        {
          "@type": "Question",
          name: "What is the IRA tax credit for heat pumps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Inflation Reduction Act (IRA) provides a federal tax credit of up to $2,000 per year for qualifying heat pump installations. The credit applies to heat pumps meeting Energy Star efficiency standards. This is a direct tax credit (not a deduction), meaning it reduces your tax bill dollar-for-dollar. Southern California Edison also offers rebates for high-efficiency heat pump systems. Ask about current qualifying models when you schedule your estimate.",
          },
        },
        {
          "@type": "Question",
          name: "Do heat pump water heaters count as HVAC heat pumps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No \u2014 heat pump water heaters are a separate product category. They use the same heat-pump technology but are designed to heat domestic water, not to condition indoor air. Both qualify for IRA tax credits, but under different categories. We install both types \u2014 see our heat pump water heater page for that service.",
          },
        },
        {
          "@type": "Question",
          name: "How long does heat pump installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A heat pump installation replacing an existing split-system HVAC typically takes one full day for a two-person crew. Systems requiring ductwork modifications or electrical panel upgrades (to support the heat pump's electrical load) may take two days. We handle the city permit and inspection.",
          },
        },
        {
          "@type": "Question",
          name: "What heat pump brands do you install?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We install Carrier, Trane, Lennox, Rheem, Daikin, and Goodman heat pump systems. Carrier and Trane are our preferred brands for their reliability and parts availability in the Inland Empire service area. We'll recommend the right system for your home size, duct condition, and efficiency goals.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/heat-pump-systems#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Heating Services", item: "https://waterheatersos.com/heating-services" },
        { "@type": "ListItem", position: 4, name: "Heat Pump Systems", item: "https://waterheatersos.com/heat-pump-systems" },
      ],
    },
  ],
};

export default function HeatPumpSystemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heatPumpSystemsSchema) }}
      />
      <HeatPumpSystemsContent />
    </>
  );
}
