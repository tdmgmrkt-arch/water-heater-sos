import { FurnaceMaintenanceContent } from "@/components/furnace-maintenance/FurnaceMaintenanceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Maintenance & Tune-Up in the Inland Empire | Annual Service",
  description:
    "Annual furnace maintenance & tune-ups in the Inland Empire. CO safety checks included. Licensed (CA LIC# 1140776). Riverside & San Bernardino County. Call (800) 697-4014.",
  keywords: [
    "furnace maintenance inland empire",
    "furnace tune up inland empire",
    "annual furnace service inland empire",
    "furnace maintenance riverside ca",
    "heater tune up inland empire",
    "hvac maintenance inland empire",
    "furnace safety check inland empire",
  ],
  alternates: { canonical: "https://waterheatersos.com/furnace-maintenance" },
  openGraph: {
    title: "Furnace Maintenance & Tune-Up in the Inland Empire | Annual Service",
    description:
      "Annual furnace maintenance & tune-ups in the Inland Empire. CO safety checks included. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/furnace-maintenance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furnace Maintenance & Tune-Up in the Inland Empire | Annual Service",
    description:
      "Annual furnace maintenance & tune-ups in the Inland Empire. CO safety checks included. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const furnaceMaintenanceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "SOS Plumbing and Air",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$89\u2013$199",
      description:
        "Licensed HVAC contractor serving the Inland Empire with annual furnace maintenance, tune-ups, and carbon monoxide safety checks. Riverside County and San Bernardino County. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/furnace-maintenance#service",
      name: "Furnace Maintenance",
      serviceType: "Furnace Maintenance",
      url: "https://waterheatersos.com/furnace-maintenance",
      description:
        "Annual furnace maintenance and tune-up service in the Inland Empire, including carbon monoxide safety inspection. Licensed HVAC contractor (CA LIC# 1140776).",
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
          maxPrice: "199",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/furnace-maintenance#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a furnace tune-up cost in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A furnace tune-up in the Inland Empire runs $89 to $199 for a single system. The price varies based on furnace type, how long the system has been since its last service, and whether it includes just the inspection and cleaning or additional minor adjustments. Our HVAC maintenance plan covers both heating and cooling tune-ups annually at a reduced per-visit rate.",
          },
        },
        {
          "@type": "Question",
          name: "Do I really need annual furnace maintenance if I only use heat a few months a year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes \u2014 and arguably the Inland Empire's short heating season makes it more important, not less. A furnace that sits idle for 7\u20138 months accumulates dust, pests can nest in the combustion chamber, and igniters that worked fine in spring may fail in October when you first turn the heat on. The carbon monoxide safety check is non-negotiable on a gas appliance regardless of how infrequently it runs.",
          },
        },
        {
          "@type": "Question",
          name: "What does a furnace tune-up include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our furnace tune-up covers: inspect and clean burners, inspect heat exchanger for cracks, test igniter operation and measure igniter current, clean flame sensor, check gas pressure and manifold pressure, inspect flue and venting for obstructions or damage, test safety switches and limit controls, check blower motor and belt condition, measure temperature rise, and test CO levels in flue gases. We also change the filter if you provide one or ask us to.",
          },
        },
        {
          "@type": "Question",
          name: "What is a heat exchanger inspection and why does it matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The heat exchanger is the metal component that separates combustion gases (including carbon monoxide) from the air that circulates through your home. A cracked heat exchanger allows CO to enter your living space \u2014 it's the most serious safety issue a furnace can have. We inspect it visually and with combustion analysis during every tune-up. If cracked, we'll document it with photos and won't restart the furnace without your authorization to proceed with repair or replacement.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to schedule furnace maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "September and October are ideal for Inland Empire homeowners \u2014 before the heating season starts and before our schedule fills up. If you get your AC tuned in spring and your furnace tuned in fall, you'll be covered year-round. Our HVAC maintenance plan handles the scheduling automatically so you don't have to remember.",
          },
        },
        {
          "@type": "Question",
          name: "Can a dirty furnace filter cause a breakdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A severely clogged filter restricts airflow, which causes the furnace to overheat and trip the high-limit safety switch. The furnace shuts off, then tries to restart, then shuts off again \u2014 a cycle that stresses the components and can lead to heat exchanger failure over time. Check your filter monthly during heating season and replace it every 1\u20133 months depending on filter type.",
          },
        },
        {
          "@type": "Question",
          name: "Is the HVAC maintenance plan worth it for a furnace I rarely use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, primarily for the CO safety check and igniter inspection. A furnace failure in November when overnight temperatures drop in Yucaipa, Banning, or Beaumont isn't inconvenient in the same way a broken AC in August is \u2014 but it's still a problem. The plan cost is typically less than a single emergency call, and priority scheduling means you're not waiting three days when it's cold.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a furnace tune-up take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most furnace tune-ups take 45 minutes to 90 minutes for a single system. If the burners need significant cleaning or we find items that need attention, it may take longer. We'll give you an honest time estimate when you schedule.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/furnace-maintenance#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Heating Services", item: "https://waterheatersos.com/heating-services" },
        { "@type": "ListItem", position: 4, name: "Furnace Maintenance", item: "https://waterheatersos.com/furnace-maintenance" },
      ],
    },
  ],
};

export default function FurnaceMaintenancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(furnaceMaintenanceSchema) }}
      />
      <FurnaceMaintenanceContent />
    </>
  );
}
