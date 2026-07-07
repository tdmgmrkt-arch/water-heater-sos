import { MiniSplitInstallationContent } from "@/components/mini-split-installation/MiniSplitInstallationContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini-Split Installation in the Inland Empire | Ductless AC Systems",
  description:
    "Ductless mini-split installation in the Inland Empire — single-zone & multi-zone systems for additions, garages & older homes. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  keywords: [
    "mini split installation inland empire",
    "ductless ac inland empire",
    "ductless mini split inland empire",
    "mini split ac inland empire",
    "ductless air conditioner inland empire",
    "mini split installation riverside ca",
    "ductless hvac inland empire",
  ],
  alternates: { canonical: "https://waterheatersos.com/mini-split-installation" },
  openGraph: {
    title: "Mini-Split Installation in the Inland Empire | Ductless AC Systems",
    description:
      "Ductless mini-split installation in the Inland Empire — single-zone & multi-zone systems for additions, garages & older homes. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/mini-split-installation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini-Split Installation in the Inland Empire | Ductless AC Systems",
    description:
      "Ductless mini-split installation in the Inland Empire — single-zone & multi-zone systems for additions, garages & older homes. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const miniSplitSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "SOS Plumbing and Air",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$2,500\u2013$8,000",
      description:
        "Licensed HVAC contractor serving the Inland Empire with ductless mini-split installation — single-zone and multi-zone systems for homes, additions, and garages. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/mini-split-installation#service",
      name: "Mini-Split Installation",
      serviceType: "Ductless Mini-Split Installation",
      url: "https://waterheatersos.com/mini-split-installation",
      description:
        "Ductless mini-split installation in the Inland Empire. Single-zone and multi-zone systems for room additions, garages, older homes without ductwork, and targeted zone control. Licensed HVAC contractor (CA LIC# 1140776).",
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
          minPrice: "2500",
          maxPrice: "8000",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/mini-split-installation#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does mini-split installation cost in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A single-zone mini-split installation in the Inland Empire typically costs $2,500 to $4,500 installed, depending on BTU capacity, efficiency (SEER2), brand, and mounting complexity. Multi-zone systems serving 2\u20134 rooms run $5,000 to $8,000+. These are all-in prices including the equipment, labor, lineset, electrical disconnect, and startup. We provide a written quote after a site assessment.",
          },
        },
        {
          "@type": "Question",
          name: "What is a ductless mini-split and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A ductless mini-split consists of an outdoor compressor/condenser unit connected by a refrigerant line to one or more indoor air handlers mounted on walls or ceilings. There's no ductwork involved. The indoor unit blows conditioned air directly into the room and returns air to the unit for reconditioning. Most modern mini-splits are heat pumps, meaning they provide both cooling and heating in a single system.",
          },
        },
        {
          "@type": "Question",
          name: "Is a mini-split better than central AC for the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the use case. For homes with existing ductwork in good condition, central AC is usually more cost-effective. Mini-splits are the right choice for homes without ductwork, room additions, garages, detached structures, or situations where you want zone-level temperature control. They're also more efficient per zone because there's no duct loss \u2014 which can be significant in attic-run ducts in the Inland Empire's extreme heat.",
          },
        },
        {
          "@type": "Question",
          name: "How long does mini-split installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A single-zone installation typically takes 4 to 8 hours for a two-person crew. Multi-zone installations with 3\u20134 indoor heads usually require a full day or two depending on lineset routing complexity and electrical work required. We handle the permit and inspection as part of the installation.",
          },
        },
        {
          "@type": "Question",
          name: "Do mini-splits work in the Inland Empire heat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Modern mini-splits are rated to cool at outdoor temperatures of 115\u00b0F and higher \u2014 well above the Inland Empire's typical peak of 105\u2013110\u00b0F. Choose a system with a rated cooling capacity at high ambient temperatures (not just standard rating conditions at 95\u00b0F). We specify equipment that's rated for the IE's actual peak temperatures, not just the standard test conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Which mini-split brands do you install?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We install Mitsubishi, Daikin, Fujitsu, LG, and Carrier mini-split systems. Each has strengths in different applications. Mitsubishi and Daikin are widely regarded as the most reliable for long-term performance. We'll recommend the right brand and model for your specific situation \u2014 not just whatever's in the warehouse.",
          },
        },
        {
          "@type": "Question",
          name: "Can a mini-split heat as well as cool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All mini-splits we install are heat pump systems that provide both heating and cooling. In the Inland Empire's mild winters, a mini-split heat pump is extremely efficient for heating \u2014 typically 2\u20133x more efficient than electric resistance heat and cost-competitive with gas heating. For homes in higher-elevation areas like Yucaipa, Banning, or Beaumont that see harder freezes, we specify systems with low-ambient heating ratings.",
          },
        },
        {
          "@type": "Question",
          name: "Are there rebates for mini-split installation in California?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The federal IRA provides a tax credit of up to $2,000 for qualifying heat pump installations, including mini-splits. Southern California Edison offers rebates for high-efficiency ductless systems. Rebate amounts and qualifying models change annually. Ask us when you schedule your estimate \u2014 we'll tell you which systems currently qualify and what the expected rebate value is.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/mini-split-installation#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "AC Services", item: "https://waterheatersos.com/ac-services" },
        { "@type": "ListItem", position: 4, name: "Mini-Split Installation", item: "https://waterheatersos.com/mini-split-installation" },
      ],
    },
  ],
};

export default function MiniSplitInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(miniSplitSchema) }}
      />
      <MiniSplitInstallationContent />
    </>
  );
}
