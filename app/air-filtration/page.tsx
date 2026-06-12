import { AirFiltrationContent } from "@/components/air-filtration/AirFiltrationContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole-Home Air Filtration in the Inland Empire | MERV 13 & HEPA",
  description:
    "Whole-home air filtration installation in the Inland Empire — MERV 13, HEPA & media filters for wildfire smoke, allergens & dust. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  keywords: [
    "air filtration inland empire",
    "whole home air filtration inland empire",
    "merv 13 filter inland empire",
    "hepa filter installation inland empire",
    "air filter upgrade inland empire",
    "wildfire smoke air filtration inland empire",
    "air filtration system riverside ca",
  ],
  alternates: { canonical: "https://waterheatersos.com/air-filtration" },
  openGraph: {
    title: "Whole-Home Air Filtration in the Inland Empire | MERV 13 & HEPA",
    description:
      "Whole-home air filtration installation in the Inland Empire — MERV 13, HEPA & media filters for wildfire smoke, allergens & dust. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/air-filtration",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whole-Home Air Filtration in the Inland Empire | MERV 13 & HEPA",
    description:
      "Whole-home air filtration installation in the Inland Empire — MERV 13, HEPA & media filters for wildfire smoke, allergens & dust. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const airFiltrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$400\u2013$1,800",
      description:
        "Licensed HVAC contractor serving the Inland Empire with whole-home air filtration installation — MERV 13, HEPA media filters, and whole-house air cleaners for wildfire smoke, allergens, and dust. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/air-filtration#service",
      name: "Whole-Home Air Filtration",
      serviceType: "Whole-Home Air Filtration Installation",
      url: "https://waterheatersos.com/air-filtration",
      description:
        "Whole-home air filtration installation in the Inland Empire. MERV 13 filter upgrades, HEPA media filters, and whole-house air cleaners for wildfire smoke, allergens, pollen, and dust. Licensed HVAC contractor (CA LIC# 1140776).",
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
          minPrice: "400",
          maxPrice: "1800",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/air-filtration#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What whole-home air filtration options are available for my HVAC system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are three main options that connect to your existing HVAC ductwork: (1) Upgraded media filters \u2014 replacing your existing filter slot with a 4\u20135 inch media filter housing that accepts MERV 13\u201316 filters, capturing particles down to 0.3 microns. (2) Electronic air cleaners \u2014 use electrostatic charge to capture very fine particles, including PM2.5. (3) HEPA filtration systems \u2014 true HEPA (99.97% capture at 0.3 microns) housed in a bypass unit that routes a portion of your airflow through the HEPA filter. Each has different tradeoffs in cost, maintenance, and filtration effectiveness.",
          },
        },
        {
          "@type": "Question",
          name: "How much does whole-home air filtration installation cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A media filter upgrade (wider filter housing with MERV 13 capability) runs $400\u2013$700 installed. Electronic air cleaners installed into your duct system run $700\u2013$1,200. HEPA bypass filtration systems run $1,200\u2013$1,800 installed. All prices include parts and labor. We provide a written quote after assessing your duct system and the filter upgrade your system's blower can handle.",
          },
        },
        {
          "@type": "Question",
          name: "Will a MERV 13 filter damage my HVAC system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A thin 1-inch MERV 13 filter can restrict airflow significantly and damage your blower motor and compressor over time. The right way to use MERV 13 filtration is with a 4\u20135 inch media filter housing, which provides much more filter surface area and does not restrict airflow. We assess your blower motor's capacity before recommending any filter upgrade \u2014 putting the wrong filter in an undersized filter slot causes exactly the kind of damage homeowners are trying to prevent.",
          },
        },
        {
          "@type": "Question",
          name: "Does whole-home air filtration help with wildfire smoke?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Wildfire smoke particles are primarily PM2.5 \u2014 particles smaller than 2.5 microns. A standard MERV 8 filter (most homes' default) captures less than 20% of PM2.5. A MERV 13 media filter captures 85\u201390%+ of PM2.5. A true HEPA filter captures 99.97%. During wildfire smoke events, running your HVAC on \u201cfan-only\u201d mode with a MERV 13 or HEPA filter continuously cycles indoor air through the filter, significantly reducing particle concentration.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between air filtration and a UV purifier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Air filtration physically captures particles in filter media. UV purifiers use ultraviolet light to kill biological contaminants (mold, bacteria, viruses) but do not remove particles. They're complementary technologies: filtration handles smoke, dust, pollen, and allergens; UV handles biological growth on the evaporator coil and in circulating air. For wildfire smoke and allergy concerns, filtration is the more impactful investment.",
          },
        },
        {
          "@type": "Question",
          name: "How often do whole-home air filtration filters need to be replaced?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "4\u20135 inch media filters (MERV 13\u201316) typically need replacement every 6\u201312 months depending on air quality and usage. Electronic air cleaner cells need cleaning every 1\u20133 months. HEPA bypass filters are replaced annually. We note filter replacement intervals during installation and can include filtration maintenance in your HVAC maintenance plan.",
          },
        },
        {
          "@type": "Question",
          name: "Does a whole-home air filter help with allergies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Inland Empire is a high-pollen environment \u2014 the inland climate, dry wind patterns, and abundant landscaping create significant allergen loads throughout the year. MERV 13 filtration captures pollen, mold spores, and fine dust particles effectively. For households with allergy or asthma sufferers, upgrading to MERV 13 from a standard MERV 8 filter is one of the most practical IAQ improvements you can make.",
          },
        },
        {
          "@type": "Question",
          name: "Can I install whole-home air filtration in a home with old ductwork?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the duct condition. Significant leaks in the duct system reduce filtration effectiveness because unfiltered air bypasses the filter and enters the system directly. We assess duct condition during an air filtration estimate. If duct leakage is significant, we'll note it \u2014 duct sealing and filtration upgrades work together for the best result.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/air-filtration#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Indoor Air Quality", item: "https://waterheatersos.com/indoor-air-quality" },
        { "@type": "ListItem", position: 4, name: "Air Filtration", item: "https://waterheatersos.com/air-filtration" },
      ],
    },
  ],
};

export default function AirFiltrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(airFiltrationSchema) }}
      />
      <AirFiltrationContent />
    </>
  );
}
