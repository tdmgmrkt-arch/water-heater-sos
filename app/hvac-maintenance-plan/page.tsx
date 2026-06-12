import { HvacMaintenancePlanContent } from "@/components/hvac-maintenance-plan/HvacMaintenancePlanContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Maintenance Plan in the Inland Empire | Annual Service Agreement",
  description:
    "HVAC maintenance plan in the Inland Empire — annual tune-ups for heating & cooling, priority scheduling & repair discounts. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  keywords: [
    "hvac maintenance plan inland empire",
    "hvac service agreement inland empire",
    "annual hvac maintenance inland empire",
    "hvac maintenance contract inland empire",
    "ac maintenance plan inland empire",
    "hvac tune up plan inland empire",
    "hvac service plan riverside ca",
  ],
  alternates: { canonical: "https://waterheatersos.com/hvac-maintenance-plan" },
  openGraph: {
    title: "HVAC Maintenance Plan in the Inland Empire | Annual Service Agreement",
    description:
      "HVAC maintenance plan in the Inland Empire — annual tune-ups for heating & cooling, priority scheduling & repair discounts. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/hvac-maintenance-plan",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Maintenance Plan in the Inland Empire | Annual Service Agreement",
    description:
      "HVAC maintenance plan in the Inland Empire — annual tune-ups for heating & cooling, priority scheduling & repair discounts. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const hvacMaintenancePlanSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      description:
        "Licensed HVAC contractor serving the Inland Empire with HVAC maintenance plans — annual heating and cooling tune-ups, priority scheduling, and repair discounts. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/hvac-maintenance-plan#service",
      name: "HVAC Maintenance Plan",
      serviceType: "HVAC Maintenance Plan",
      url: "https://waterheatersos.com/hvac-maintenance-plan",
      description:
        "Annual HVAC maintenance plan covering heating and cooling tune-ups, priority scheduling, and repair discounts throughout the Inland Empire. Licensed HVAC contractor (CA LIC# 1140776).",
      provider: { "@id": "https://waterheatersos.com/#business" },
      // 3 plan tiers per draft. Pricing intentionally not exposed in schema until
      // client confirms final tier names + dollar amounts. Each tier surfaces here
      // as an Offer with `description: "Call for pricing"` so AI engines and rich
      // results know plans exist without committing to numbers that may shift.
      // TODO: once client confirms pricing, replace each Offer's description with
      // a proper `priceSpecification` block.
      offers: [
        {
          "@type": "Offer",
          name: "Essential Maintenance Plan",
          description:
            "Annual AC or furnace tune-up, repair discounts, and priority scheduling. Call for current pricing.",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Comfort Maintenance Plan",
          description:
            "Annual AC and furnace tune-ups, larger repair discounts, priority same-day scheduling, and waived diagnostic fees. Call for current pricing.",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Premium Maintenance Plan",
          description:
            "Everything in Comfort plus indoor air quality inspection, condensate drain flush, 24/7 emergency fee waivers, parts + labor warranty, and replacement loyalty credit. Call for current pricing.",
          availability: "https://schema.org/InStock",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Riverside" }, { "@type": "City", name: "Moreno Valley" },
        { "@type": "City", name: "Corona" }, { "@type": "City", name: "San Bernardino" },
        { "@type": "City", name: "Murrieta" }, { "@type": "City", name: "Temecula" },
        { "@type": "City", name: "Lake Elsinore" }, { "@type": "City", name: "Menifee" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/hvac-maintenance-plan#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does the HVAC maintenance plan include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The plan includes two annual tune-ups \u2014 one AC tune-up in spring (ideally March\u2013May) and one furnace or heating tune-up in fall (ideally September\u2013October). Each visit covers a full inspection and cleaning checklist for that system. Plan members also receive priority scheduling and a discount on any repairs needed during or after the maintenance visit.",
          },
        },
        {
          "@type": "Question",
          name: "How much does the HVAC maintenance plan cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plan pricing is available when you call or submit a quote request. The annual cost is structured to be less than paying for two separate tune-up visits individually. For current pricing, call (800) 697-4014 or request a quote \u2014 we'll give you the exact number before you commit to anything.",
          },
        },
        {
          "@type": "Question",
          name: "Is an HVAC maintenance plan worth it in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most homeowners with central HVAC in the Inland Empire, yes. The plan cost is typically less than a single emergency repair call. The Inland Empire's extreme summer heat is hard on AC equipment \u2014 an annual tune-up that catches a degrading capacitor or low refrigerant charge in April is far less expensive than an emergency call in August. The furnace check also includes a carbon monoxide safety inspection, which is worth doing on any gas appliance.",
          },
        },
        {
          "@type": "Question",
          name: "Does the maintenance plan cover repairs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The plan covers the cost of the tune-up visits. If repairs are needed (parts or additional labor beyond the tune-up scope), those are quoted and billed separately. Plan members receive a repair discount. We'll always tell you what's needed and what it costs before doing any additional work.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get the maintenance plan on a new system I just had installed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and we recommend it. Annual maintenance is required by most manufacturer warranties to keep them valid. Starting a maintenance plan on a new system from the beginning is the best way to protect your warranty and maximize equipment life.",
          },
        },
        {
          "@type": "Question",
          name: "What is priority scheduling and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Priority scheduling means plan members move to the front of the queue during high-demand periods. In practice, this matters most in June, July, and August when our repair schedule fills quickly. If your AC fails on a 108\u00b0F day in Riverside and you're on the maintenance plan, you get a same-day appointment ahead of non-members.",
          },
        },
        {
          "@type": "Question",
          name: "Does the plan cover both my AC and furnace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The standard plan covers one AC system and one heating system (furnace or heat pump). Multi-system homes (more than one AC or more than one heating zone) can add systems for an additional fee. Ask about multi-system pricing when you call.",
          },
        },
        {
          "@type": "Question",
          name: "Can I cancel the maintenance plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The plan is annual and does not auto-renew without your authorization. If you need to cancel before the year is up, we'll work with you on a prorated refund for unused visits. No long contracts.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/hvac-maintenance-plan#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "Heating Services", item: "https://waterheatersos.com/heating-services" },
        { "@type": "ListItem", position: 4, name: "HVAC Maintenance Plan", item: "https://waterheatersos.com/hvac-maintenance-plan" },
      ],
    },
  ],
};

export default function HvacMaintenancePlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacMaintenancePlanSchema) }}
      />
      <HvacMaintenancePlanContent />
    </>
  );
}
