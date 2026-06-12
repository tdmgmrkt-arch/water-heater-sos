import { WholeHomeHumidifierContent } from "@/components/whole-home-humidifier/WholeHomeHumidifierContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole-Home Humidifier Installation in the Inland Empire",
  description:
    "Whole-home humidifier installation in the Inland Empire — combat dry desert air during heating season. Licensed (CA LIC# 1140776). Riverside & San Bernardino County. Call (800) 697-4014.",
  keywords: [
    "whole home humidifier inland empire",
    "humidifier installation inland empire",
    "whole house humidifier inland empire",
    "hvac humidifier inland empire",
    "dry air inland empire",
    "humidifier installation riverside ca",
    "whole home humidifier installation",
  ],
  alternates: { canonical: "https://waterheatersos.com/whole-home-humidifier" },
  openGraph: {
    title: "Whole-Home Humidifier Installation in the Inland Empire",
    description:
      "Whole-home humidifier installation in the Inland Empire — combat dry desert air during heating season. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/whole-home-humidifier",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whole-Home Humidifier Installation in the Inland Empire",
    description:
      "Whole-home humidifier installation in the Inland Empire — combat dry desert air during heating season. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const humidifierSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$600\u2013$1,800",
      description:
        "Licensed HVAC contractor serving the Inland Empire with whole-home humidifier installation. Combat the IE's dry desert air and protect your home and family during heating season. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/whole-home-humidifier#service",
      name: "Whole-Home Humidifier Installation",
      serviceType: "Whole-Home Humidifier Installation",
      url: "https://waterheatersos.com/whole-home-humidifier",
      description:
        "Whole-home humidifier installation in the Inland Empire. Bypass and steam humidifiers installed into existing HVAC ductwork for whole-house humidity control. Licensed HVAC contractor (CA LIC# 1140776).",
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
          minPrice: "600",
          maxPrice: "1800",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/whole-home-humidifier#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does whole-home humidifier installation cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A whole-home humidifier installation in the Inland Empire typically costs $600 to $1,800, depending on the type (bypass vs. steam) and whether any duct modifications are needed. Bypass humidifiers (the most common type) run $600\u2013$1,100 installed. Steam humidifiers, which work with any HVAC system including heat pumps and are more precise, run $1,200\u2013$1,800. We provide a written quote after assessing your system and home size.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Inland Empire need whole-home humidifiers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes \u2014 the IE's desert climate combined with forced-air heating produces some of the driest indoor air in California. During heating season (November through March), indoor relative humidity in unmanaged homes regularly drops below 25%, sometimes into the teens. At those levels, you experience cracked skin and lips, dry nasal passages (which reduce your natural defense against viruses), increased static electricity, and hardwood flooring and cabinetry that can warp and crack. A whole-home humidifier maintains 35\u201345% RH automatically.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a bypass humidifier and a steam humidifier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A bypass humidifier uses your furnace fan to push air across a water panel, adding moisture as the air passes through. It works only when the furnace is heating, which is fine for most gas furnace homes. A steam humidifier heats water independently to create steam, which can be injected into the airstream regardless of whether the furnace is running. Steam humidifiers are more precise, work with any HVAC system (including heat pumps), and are the right choice for homes that need consistent humidity year-round.",
          },
        },
        {
          "@type": "Question",
          name: "How does a whole-home humidifier connect to my HVAC system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A bypass humidifier taps into the supply plenum and return duct, with a water line connected to your home's plumbing. It uses a humidistat (either standalone or integrated with your thermostat) to control output. Installation requires access to the duct system and a nearby water supply line \u2014 most Inland Empire homes can be set up in 3 to 4 hours.",
          },
        },
        {
          "@type": "Question",
          name: "What humidity level should I maintain in my Inland Empire home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ASHRAE recommended range for occupied homes is 30\u201360% relative humidity. In the Inland Empire during heating season, targeting 35\u201345% RH balances comfort, health benefits, and protection of wood furnishings. We'll set your humidistat at a recommended starting point and explain how to adjust it seasonally.",
          },
        },
        {
          "@type": "Question",
          name: "Does a whole-home humidifier require maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bypass humidifiers use a water panel (evaporator pad) that should be replaced annually at the start of each heating season. The water distribution tray and scale screen should be inspected and cleaned during the same visit. We include humidifier checks in our annual HVAC maintenance plan.",
          },
        },
        {
          "@type": "Question",
          name: "Can a humidifier cause mold problems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A properly sized and controlled whole-home humidifier does not cause mold. Mold problems occur when relative humidity exceeds 60% consistently. We size the humidifier to your home's specific volume and set the humidistat conservatively. The risk of over-humidification from a correctly installed system is very low \u2014 especially in the IE's naturally dry climate.",
          },
        },
        {
          "@type": "Question",
          name: "How long does whole-home humidifier installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most whole-home humidifier installations take 3 to 4 hours. This includes tapping the duct system, running the water line, connecting the humidistat, and testing the system through a full heating cycle. Steam humidifier installations may take slightly longer due to the electrical connection required.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/whole-home-humidifier#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Indoor Air Quality", item: "https://waterheatersos.com/indoor-air-quality" },
        { "@type": "ListItem", position: 4, name: "Whole-Home Humidifier", item: "https://waterheatersos.com/whole-home-humidifier" },
      ],
    },
  ],
};

export default function WholeHomeHumidifierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(humidifierSchema) }}
      />
      <WholeHomeHumidifierContent />
    </>
  );
}
