import { FurnaceRepairContent } from "@/components/furnace-repair/FurnaceRepairContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Repair in the Inland Empire | 24/7 Heating Service",
  description:
    "Furnace repair in the Inland Empire — 24/7 emergency service, all brands. Licensed (CA LIC# 1140776). Riverside & San Bernardino County. Call (800) 697-4014.",
  keywords: [
    "furnace repair inland empire",
    "furnace repair riverside ca",
    "emergency furnace repair inland empire",
    "furnace not working inland empire",
    "heater repair inland empire",
    "gas furnace repair inland empire",
    "furnace repair near me",
  ],
  alternates: { canonical: "https://waterheatersos.com/furnace-repair" },
  openGraph: {
    title: "Furnace Repair in the Inland Empire | 24/7 Heating Service",
    description:
      "Furnace repair in the Inland Empire — 24/7 emergency service, all brands. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/furnace-repair",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furnace Repair in the Inland Empire | 24/7 Heating Service",
    description:
      "Furnace repair in the Inland Empire — 24/7 emergency service, all brands. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const furnaceRepairSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$89\u2013$1,800",
      description:
        "Licensed HVAC contractor serving the Inland Empire with 24/7 furnace repair, all major brands. Riverside County and San Bernardino County. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/furnace-repair#service",
      name: "Furnace Repair",
      serviceType: "Furnace Repair",
      url: "https://waterheatersos.com/furnace-repair",
      description:
        "24/7 furnace repair in the Inland Empire. All major brands, licensed HVAC technicians (CA LIC# 1140776). Serving Riverside County and San Bernardino County.",
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
          minPrice: "89",
          maxPrice: "1800",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/furnace-repair#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does furnace repair cost in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most furnace repairs in the Inland Empire run $89 to $600. Igniter replacement is one of the most common repairs, typically $150\u2013$300. Control board failures run $300\u2013$600. Heat exchanger issues are the most serious \u2014 if cracked, replacement may cost more than a new furnace. We give you an upfront quote after diagnosis so you know exactly what you're paying before we start.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my furnace blowing cold air?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A furnace blowing cold air usually means the burners aren't lighting. Common causes: a faulty igniter, a dirty flame sensor that won't confirm the burner lit, a tripped high-limit switch from overheating, or a gas supply issue. In the Inland Empire, furnaces that sit idle for months through summer often have igniter or flame sensor issues when first turned on in fall \u2014 the same failure mode we see most frequently in October and November.",
          },
        },
        {
          "@type": "Question",
          name: "Is a furnace repair safe to delay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depends on the issue. A furnace that won't light is inconvenient but not dangerous. A furnace with a cracked heat exchanger is a carbon monoxide hazard and should not be run at all until repaired or replaced. If your CO detector has alarmed in the vicinity of the furnace, or if you smell something odd when the heat runs, shut off the furnace and call us immediately.",
          },
        },
        {
          "@type": "Question",
          name: "How long does furnace repair take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most furnace repairs are completed in one visit, typically 1 to 3 hours. Igniter replacements and flame sensor cleanings take under an hour. Control board replacements or heat exchanger inspections take longer. We carry common igniter and sensor parts on the truck, so most repairs don\u2019t require a parts run.",
          },
        },
        {
          "@type": "Question",
          name: "Should I repair or replace my furnace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Repair when the repair cost is less than 50% of replacement and the furnace is under 15 years old. Replace when the repair is costly, the unit is older, or the heat exchanger is cracked. In the Inland Empire, furnaces are used less aggressively than in colder climates, which can extend their useful life. That said, older low-efficiency furnaces (80 AFUE) are significantly more expensive to operate than modern 96 AFUE units \u2014 the payback on replacement can be shorter than homeowners expect.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer emergency furnace repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide 24/7 emergency furnace repair throughout the Inland Empire. Call (800) 697-4014 any time. While heating emergencies are less common here than in colder states, they're still urgent \u2014 especially for households with elderly members, young children, or in the higher-elevation areas of Yucaipa, Banning, or Beaumont where overnight temperatures can drop below freezing.",
          },
        },
        {
          "@type": "Question",
          name: "What is a heat exchanger and why does it matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The heat exchanger is the component that separates combustion gases (including carbon monoxide) from the air that circulates through your home. A cracked heat exchanger allows CO to enter your living space \u2014 it is the single most serious furnace safety issue. We inspect the heat exchanger as part of every furnace service call and every annual tune-up. If it's cracked, we will not restart the furnace until it's addressed.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my furnace keep shutting off?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Short-cycling (turning on and off rapidly) is most often caused by: an overheating furnace tripping the high-limit switch (usually from a dirty filter or blocked return), a faulty flame sensor that can't confirm the burner stayed lit, or an oversized furnace that heats the house too quickly and shuts off before completing a proper cycle. The fix depends on the root cause \u2014 a dirty filter is a $10 DIY fix, a faulty sensor requires a technician.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/furnace-repair#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Heating Services", item: "https://waterheatersos.com/heating-services" },
        { "@type": "ListItem", position: 4, name: "Furnace Repair", item: "https://waterheatersos.com/furnace-repair" },
      ],
    },
  ],
};

export default function FurnaceRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(furnaceRepairSchema) }}
      />
      <FurnaceRepairContent />
    </>
  );
}
