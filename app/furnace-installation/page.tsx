import { FurnaceInstallationContent } from "@/components/furnace-installation/FurnaceInstallationContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Installation & Replacement in the Inland Empire",
  description:
    "Furnace installation & replacement in the Inland Empire — gas furnaces & heat pumps. Licensed (CA LIC# 1140776). Riverside & San Bernardino County. Call (800) 697-4014.",
  keywords: [
    "furnace installation inland empire",
    "new furnace inland empire",
    "furnace replacement inland empire",
    "furnace installation riverside ca",
    "gas furnace installation inland empire",
    "furnace installation cost inland empire",
    "new heating system inland empire",
  ],
  alternates: { canonical: "https://waterheatersos.com/furnace-installation" },
  openGraph: {
    title: "Furnace Installation & Replacement in the Inland Empire",
    description:
      "Furnace installation & replacement in the Inland Empire — gas furnaces & heat pumps. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/furnace-installation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furnace Installation & Replacement in the Inland Empire",
    description:
      "Furnace installation & replacement in the Inland Empire — gas furnaces & heat pumps. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const furnaceInstallationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$3,500\u2013$10,000",
      description:
        "Licensed HVAC contractor serving the Inland Empire with furnace installation and replacement — gas furnaces, high-efficiency units, and heat pump systems. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/furnace-installation#service",
      name: "Furnace Installation",
      serviceType: "Furnace Installation",
      url: "https://waterheatersos.com/furnace-installation",
      description:
        "Furnace installation and replacement in the Inland Empire. Gas furnaces (80\u201396 AFUE) and heat pump systems. Licensed HVAC contractor (CA LIC# 1140776), Riverside County and San Bernardino County.",
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
          minPrice: "3500",
          maxPrice: "10000",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/furnace-installation#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does furnace installation cost in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A new gas furnace installation in the Inland Empire typically runs $3,500 to $7,000 installed, depending on furnace size (BTU), efficiency rating (AFUE), and whether any ductwork modifications are needed. High-efficiency 96 AFUE systems are in the upper range; 80 AFUE systems run lower. Heat pump systems as a furnace replacement run $5,000 to $10,000 depending on system size. We provide a written, itemized quote after a load calculation.",
          },
        },
        {
          "@type": "Question",
          name: "Should I replace my furnace with a heat pump?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most Inland Empire homes, a heat pump is worth serious consideration when replacing aging heating equipment \u2014 especially with the federal IRA tax credit of up to $2,000 for qualifying heat pump installations. Heat pumps provide both heating and cooling in a single system, are highly efficient in the IE's mild winters, and pair well with existing ductwork. We'll give you a side-by-side cost comparison with realistic energy savings estimates based on your home's actual usage.",
          },
        },
        {
          "@type": "Question",
          name: "What AFUE rating should I get for an Inland Empire furnace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The California minimum for new gas furnaces is 80 AFUE. We recommend 96 AFUE for most replacements \u2014 the higher efficiency unit uses 16% less gas to produce the same heat output. In the Inland Empire's short heating season (roughly November through March), the energy payback on a 96 AFUE unit is longer than in colder climates. That said, gas prices in SoCal are among the highest in the nation, which narrows the payback gap.",
          },
        },
        {
          "@type": "Question",
          name: "How long does furnace installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A furnace replacement (removing the old unit and installing the new one) typically takes 4 to 8 hours for a two-person crew. New furnace installations in homes without existing ductwork take longer. We handle the city permit (required by California) and inspection.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a permit for furnace installation in California?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. California requires a building permit for HVAC equipment replacement and installation. We handle the permit application and schedule the inspection as part of our installation process. Don't accept a quote that skips the permit \u2014 an unpermitted furnace installation can create problems at resale and voids most manufacturer warranties.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a new furnace last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A well-maintained gas furnace in the Inland Empire can last 20 to 25 years. IE furnaces run fewer hours annually than in colder climates, which can extend equipment life. Annual maintenance \u2014 particularly heat exchanger inspection and burner cleaning \u2014 is the most important factor in longevity.",
          },
        },
        {
          "@type": "Question",
          name: "Are there tax credits for furnace installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The federal IRA provides a tax credit of up to $600 for qualifying high-efficiency gas furnaces (96 AFUE or higher), and up to $2,000 for qualifying heat pump systems. California utility rebates may also apply. Rebate amounts change annually \u2014 ask about current qualifying systems when you schedule your estimate.",
          },
        },
        {
          "@type": "Question",
          name: "What furnace brands do you install?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We install Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, and Bryant gas furnaces. We'll recommend a brand and model based on your home size, existing ductwork, budget, and efficiency goals \u2014 not based on what's in the warehouse.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/furnace-installation#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Heating Services", item: "https://waterheatersos.com/heating-services" },
        { "@type": "ListItem", position: 4, name: "Furnace Installation", item: "https://waterheatersos.com/furnace-installation" },
      ],
    },
  ],
};

export default function FurnaceInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(furnaceInstallationSchema) }}
      />
      <FurnaceInstallationContent />
    </>
  );
}
