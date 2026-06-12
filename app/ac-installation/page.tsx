import { AcInstallationContent } from "@/components/ac-installation/AcInstallationContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Installation in the Inland Empire | New Central Air Systems",
  description:
    "AC installation in the Inland Empire — new central air systems, heat pumps & ductless mini-splits. Licensed (CA LIC# 1140776). Riverside & San Bernardino County. Call (800) 697-4014.",
  keywords: [
    "ac installation inland empire",
    "new ac unit inland empire",
    "central air installation inland empire",
    "ac replacement inland empire",
    "air conditioner installation riverside ca",
    "new ac system inland empire",
    "ac installation cost inland empire",
  ],
  alternates: { canonical: "https://waterheatersos.com/ac-installation" },
  openGraph: {
    title: "AC Installation in the Inland Empire | New Central Air Systems",
    description:
      "AC installation in the Inland Empire — new central air systems, heat pumps & ductless mini-splits. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/ac-installation",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Installation in the Inland Empire | New Central Air Systems",
    description:
      "AC installation in the Inland Empire — new central air systems, heat pumps & ductless mini-splits. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const acInstallationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$4,500\u2013$12,000",
      description:
        "Licensed HVAC contractor serving the Inland Empire with AC installation, heat pump systems, and central air replacements. Riverside County and San Bernardino County. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/ac-installation#service",
      name: "AC Installation",
      serviceType: "AC Installation",
      url: "https://waterheatersos.com/ac-installation",
      description:
        "Professional AC installation in the Inland Empire. New central air systems, heat pump installations, and ductless mini-splits. Licensed HVAC contractor (CA LIC# 1140776), Riverside County and San Bernardino County.",
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
          minPrice: "4500",
          maxPrice: "12000",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/ac-installation#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does AC installation cost in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A new central AC system in the Inland Empire typically costs $4,500 to $12,000 installed, depending on system size (tonnage), efficiency rating (SEER2), and whether ductwork modifications are needed. A standard 3-ton, 16 SEER2 system for a 1,500\u20132,000 sq ft home falls in the $5,500\u2013$8,000 range. Higher-efficiency systems (18+ SEER2) and larger homes push toward the top of the range. We provide a written, itemized quote after a load calculation \u2014 no guessing on size.",
          },
        },
        {
          "@type": "Question",
          name: "How long does AC installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most standard central AC replacements take one full day \u2014 roughly 6 to 8 hours for a two-person crew. New installations in homes without existing ductwork take longer, sometimes two to three days depending on the duct layout. We handle the city permit (required by California for new HVAC installations) and schedule the inspection so you don't have to.",
          },
        },
        {
          "@type": "Question",
          name: "What size AC do I need for my Inland Empire home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sizing is done through a Manual J load calculation, not a rule of thumb. The Inland Empire's extreme summer heat, higher insulation requirements, and roof orientation all affect the correct tonnage. An undersized system runs nonstop and never cools the house; an oversized system short-cycles and creates humidity problems. We run the calculation before recommending any system.",
          },
        },
        {
          "@type": "Question",
          name: "Should I get a heat pump or a traditional AC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most Inland Empire homeowners replacing aging equipment, a heat pump is worth serious consideration \u2014 especially with the federal IRA tax credit of up to $2,000 for qualifying installations and California utility rebates. Heat pumps provide both cooling and heating in a single system, which is efficient in the IE's mild winters. If you have an existing gas furnace in good condition and good ductwork, a high-efficiency central AC paired with the furnace is also a solid choice. We'll give you both options with honest cost-of-ownership comparisons.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a permit for AC installation in California?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. California requires a building permit for new HVAC equipment installation and replacement. We handle the permit application and city inspection as part of our installation process. Never accept an installation offer that skips the permit \u2014 an unpermitted system can create problems at resale and voids most manufacturer warranties.",
          },
        },
        {
          "@type": "Question",
          name: "What SEER2 rating should I get?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The federal minimum in California is now 15.2 SEER2 for split systems. We recommend 16\u201318 SEER2 for most Inland Empire homes \u2014 the energy savings over a 15-year system lifespan typically justify the modest upfront premium over the minimum. Systems above 20 SEER2 have longer payback periods and are worth considering only if you're in a high-use home or qualify for utility rebates that close the gap.",
          },
        },
        {
          "@type": "Question",
          name: "Do you install ductless mini-splits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We install single-zone and multi-zone ductless mini-splits throughout the Inland Empire. Mini-splits are the right choice for room additions, garages, converted spaces, or homes without existing ductwork. They're also highly efficient for targeted cooling in specific areas. See our dedicated mini-split installation page for details on systems, pricing, and use cases.",
          },
        },
        {
          "@type": "Question",
          name: "Are there rebates or tax credits for new AC installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The federal Inflation Reduction Act (IRA) provides a tax credit of up to $600 for qualifying high-efficiency central AC systems (up to $2,000 for heat pumps). Southern California Edison and SoCal Gas also offer rebates for high-efficiency equipment. Rebate amounts change annually \u2014 ask us for current qualifying systems when you schedule your estimate.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/ac-installation#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "AC Services", item: "https://waterheatersos.com/ac-services" },
        { "@type": "ListItem", position: 4, name: "AC Installation", item: "https://waterheatersos.com/ac-installation" },
      ],
    },
  ],
};

export default function AcInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acInstallationSchema) }}
      />
      <AcInstallationContent />
    </>
  );
}
