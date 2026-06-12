import { WholeHomeDehumidifierContent } from "@/components/whole-home-dehumidifier/WholeHomeDehumidifierContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole-Home Dehumidifier Installation in the Inland Empire",
  description:
    "Whole-home dehumidifier installation in the Inland Empire — control summer monsoon humidity & prevent mold. Licensed (CA LIC# 1140776). Riverside & San Bernardino County. Call (800) 697-4014.",
  keywords: [
    "whole home dehumidifier inland empire",
    "dehumidifier installation inland empire",
    "whole house dehumidifier inland empire",
    "hvac dehumidifier inland empire",
    "high humidity inland empire",
    "dehumidifier installation riverside ca",
    "mold prevention inland empire",
  ],
  alternates: { canonical: "https://waterheatersos.com/whole-home-dehumidifier" },
  openGraph: {
    title: "Whole-Home Dehumidifier Installation in the Inland Empire",
    description:
      "Whole-home dehumidifier installation in the Inland Empire — control summer monsoon humidity & prevent mold. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/whole-home-dehumidifier",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whole-Home Dehumidifier Installation in the Inland Empire",
    description:
      "Whole-home dehumidifier installation in the Inland Empire — control summer monsoon humidity & prevent mold. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const dehumidifierSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$1,200\u2013$3,000",
      description:
        "Licensed HVAC contractor serving the Inland Empire with whole-home dehumidifier installation. Control summer monsoon humidity and prevent mold in poorly ventilated IE homes. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/whole-home-dehumidifier#service",
      name: "Whole-Home Dehumidifier Installation",
      serviceType: "Whole-Home Dehumidifier Installation",
      url: "https://waterheatersos.com/whole-home-dehumidifier",
      description:
        "Whole-home dehumidifier installation in the Inland Empire. Standalone whole-home units integrated with existing HVAC ductwork. Prevents mold, reduces musty odors, and improves comfort during summer monsoon season. Licensed HVAC contractor (CA LIC# 1140776).",
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
          minPrice: "1200",
          maxPrice: "3000",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/whole-home-dehumidifier#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does whole-home dehumidifier installation cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whole-home dehumidifier installation in the Inland Empire typically costs $1,200 to $3,000 installed, depending on the unit's capacity (pints per day), brand, and installation complexity. The unit itself is the primary cost driver \u2014 a properly sized whole-home unit for a 2,000 sq ft home runs $800\u2013$1,500 in equipment alone. We provide a written quote after assessing your home's size, layout, and humidity problem.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Inland Empire need whole-home dehumidifiers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many IE homes do, particularly during the summer monsoon season (July through September) when Pacific moisture pushes inland and outdoor humidity can reach 60\u201380%+ during storm events. Homes with poor ventilation, slab foundations with moisture intrusion, tightly sealed construction, or that are located near lower-elevation valleys can see indoor humidity exceed 60% \u2014 the threshold for accelerated mold growth. A whole-home dehumidifier solves this without running the AC 24/7.",
          },
        },
        {
          "@type": "Question",
          name: "Can't I just run my AC to dehumidify?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your AC does remove some humidity as a byproduct of cooling, but it's not designed for dehumidification. When outdoor temperatures drop in the evening but humidity remains high, the AC may not run enough to keep indoor RH in check. A standalone whole-home dehumidifier operates independently of the AC, targets humidity directly, and is far more energy-efficient for this specific task than running the AC to achieve the same humidity level.",
          },
        },
        {
          "@type": "Question",
          name: "How does a whole-home dehumidifier connect to existing HVAC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whole-home dehumidifiers are installed in line with your existing duct system \u2014 typically in the supply plenum or return air path. They draw air from the ducts, remove moisture, and return the drier air. Condensate drains either to a floor drain or through a condensate pump to the exterior. Installation requires duct access and electrical connection. Most installations take half a day to a full day.",
          },
        },
        {
          "@type": "Question",
          name: "What humidity level should my Inland Empire home be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ASHRAE recommends 30\u201360% relative humidity for occupied spaces. In the Inland Empire's summer monsoon season, keeping indoor RH below 50% prevents mold growth and musty odors. We set your dehumidifier's humidistat to 45\u201350% as a starting point \u2014 you can adjust down if you prefer drier air.",
          },
        },
        {
          "@type": "Question",
          name: "What are signs I need a whole-home dehumidifier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Signs that excess humidity is a problem in your IE home: condensation on windows in summer, musty or mildew odors (especially in bathrooms, closets, or the garage), visible mold spots on walls or ceilings, warping or buckling hardwood floors, or a consistently sticky, clammy feeling indoors despite the AC running. If your portable dehumidifier runs constantly and fills its tank daily, that's a strong signal a whole-home unit is warranted.",
          },
        },
        {
          "@type": "Question",
          name: "Does a whole-home dehumidifier require maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whole-home dehumidifiers have a washable or replaceable air filter that should be cleaned or replaced every 6\u201312 months. The condensate drain line should be checked annually. We include dehumidifier checks in our annual HVAC maintenance plan.",
          },
        },
        {
          "@type": "Question",
          name: "What brands of whole-home dehumidifiers do you install?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We install Aprilaire, Santa Fe, and Honeywell whole-home dehumidifiers. Aprilaire is our most frequently installed brand \u2014 good parts availability, reliable performance, and strong customer support. We'll recommend the right capacity for your home size and humidity load.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/whole-home-dehumidifier#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Indoor Air Quality", item: "https://waterheatersos.com/indoor-air-quality" },
        { "@type": "ListItem", position: 4, name: "Whole-Home Dehumidifier", item: "https://waterheatersos.com/whole-home-dehumidifier" },
      ],
    },
  ],
};

export default function WholeHomeDehumidifierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dehumidifierSchema) }}
      />
      <WholeHomeDehumidifierContent />
    </>
  );
}
