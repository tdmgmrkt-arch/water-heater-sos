import { ThermostatInstallationContent } from "@/components/thermostat-installation/ThermostatInstallationContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermostat Installation & Replacement in the Inland Empire",
  description:
    "Thermostat installation & replacement in the Inland Empire — smart thermostats, Ecobee, Nest & Honeywell. Licensed HVAC contractor (CA LIC# 1140776). Call (800) 697-4014.",
  keywords: [
    "thermostat installation inland empire",
    "smart thermostat installation inland empire",
    "thermostat replacement inland empire",
    "ecobee installation inland empire",
    "nest thermostat installation inland empire",
    "thermostat installation riverside ca",
    "hvac thermostat inland empire",
  ],
  alternates: { canonical: "https://waterheatersos.com/thermostat-installation" },
  openGraph: {
    title: "Thermostat Installation & Replacement in the Inland Empire",
    description:
      "Thermostat installation & replacement in the Inland Empire — smart thermostats, Ecobee, Nest & Honeywell. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
    type: "website",
    url: "https://waterheatersos.com/thermostat-installation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thermostat Installation & Replacement in the Inland Empire",
    description:
      "Thermostat installation & replacement in the Inland Empire — smart thermostats, Ecobee, Nest & Honeywell. Licensed (CA LIC# 1140776). Call (800) 697-4014.",
  },
};

const thermostatSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://waterheatersos.com/#business",
      name: "Water Heater SOS",
      url: "https://waterheatersos.com",
      telephone: "+18006974014",
      priceRange: "$149\u2013$450",
      description:
        "Licensed HVAC contractor serving the Inland Empire with thermostat installation and replacement — smart thermostats, Ecobee, Nest, Honeywell, and heat pump thermostats. CA LIC# 1140776.",
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
      "@id": "https://waterheatersos.com/thermostat-installation#service",
      name: "Thermostat Installation",
      serviceType: "Thermostat Installation",
      url: "https://waterheatersos.com/thermostat-installation",
      description:
        "Thermostat installation and replacement in the Inland Empire. Smart thermostats (Ecobee, Nest, Honeywell) and standard programmable thermostats installed by licensed HVAC technicians (CA LIC# 1140776).",
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
          minPrice: "149",
          maxPrice: "450",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://waterheatersos.com/thermostat-installation#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does thermostat installation cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Thermostat installation in the Inland Empire runs $149 to $450 for parts and labor. A basic programmable thermostat replacement runs $149\u2013$199. Smart thermostats (Ecobee, Nest) typically run $250\u2013$350 installed. Heat pump thermostats require a specific wiring configuration and can run higher depending on the system. All-in prices include the thermostat and installation labor.",
          },
        },
        {
          "@type": "Question",
          name: "Can I install a smart thermostat myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many homeowners successfully DIY a standard smart thermostat swap on a basic single-stage heating and cooling system. Where it gets complicated: multi-stage systems, heat pumps (which require a C-wire and specific wiring configurations), older systems with non-standard wiring, and zoned HVAC systems. If your system is anything other than a basic single-stage central AC with gas furnace, we recommend professional installation to avoid wiring errors that can damage the control board.",
          },
        },
        {
          "@type": "Question",
          name: "What smart thermostat do you recommend for the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Ecobee Smart Thermostat Premium is our top recommendation for most Inland Empire homes \u2014 it has a built-in remote sensor for accurate room-level temperature readings, integrates with all major smart home platforms, and handles heat pump wiring well. The Nest Thermostat (4th gen) is a solid second choice for simpler systems. For homes with heat pumps or multi-stage equipment, we specify the correct thermostat during the estimate to avoid compatibility issues.",
          },
        },
        {
          "@type": "Question",
          name: "Does a smart thermostat actually save money in the Inland Empire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, for most homes. The Department of Energy estimates smart thermostats save an average of $50\u2013$150 per year. In the Inland Empire, where cooling costs are significantly higher than the national average due to long, hot summers, savings can reach $150\u2013$250 annually when the thermostat is properly configured with schedules and setback temperatures. Southern California Edison also offers a $75\u2013$100 rebate for qualifying smart thermostat installations.",
          },
        },
        {
          "@type": "Question",
          name: "My thermostat display is blank. Is it broken?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A blank thermostat display usually means one of three things: the batteries are dead (common on battery-powered units), the C-wire (common wire) has lost connection or wasn't connected, or a blown fuse on the HVAC control board has cut power to the thermostat. Try replacing the batteries first. If that doesn't fix it, call us \u2014 diagnosing and resolving a blank thermostat typically takes less than an hour.",
          },
        },
        {
          "@type": "Question",
          name: "Do you install thermostats for heat pump systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Heat pump thermostats require specific wiring (O/B wire for reversing valve, dual-fuel staging in hybrid systems) that standard thermostats don't support. We install heat pump-compatible smart thermostats and ensure the wiring is configured correctly for your specific system type \u2014 single-stage, dual-stage, or hybrid gas/heat pump.",
          },
        },
        {
          "@type": "Question",
          name: "Can a thermostat cause AC problems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A faulty thermostat can cause the AC to short-cycle (turn on and off rapidly), run constantly without reaching the set temperature, not turn on at all, or display incorrect temperature readings that lead to overcooling or undercooling. If your HVAC system is behaving oddly and the AC and furnace check out mechanically, the thermostat is often the next thing to investigate.",
          },
        },
        {
          "@type": "Question",
          name: "How long does thermostat installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard thermostat replacement takes 30 to 60 minutes. If additional wiring is needed (running a C-wire, adding a wire for a smart thermostat), it can take 1 to 2 hours. We test the full system \u2014 heating and cooling cycles \u2014 before leaving.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://waterheatersos.com/thermostat-installation#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://waterheatersos.com" },
        { "@type": "ListItem", position: 2, name: "HVAC Services", item: "https://waterheatersos.com/hvac-services" },
        { "@type": "ListItem", position: 3, name: "AC Services", item: "https://waterheatersos.com/ac-services" },
        { "@type": "ListItem", position: 4, name: "Thermostat Installation", item: "https://waterheatersos.com/thermostat-installation" },
      ],
    },
  ],
};

export default function ThermostatInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thermostatSchema) }}
      />
      <ThermostatInstallationContent />
    </>
  );
}
