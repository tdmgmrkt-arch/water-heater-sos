import { TransparentPricing } from "@/components/TransparentPricing";
import { StoryTestimonials, STORIES_TRANSPARENT_PRICING } from "@/components/StoryTestimonials";
import { FinalCallCta } from "@/components/FinalCallCta";
import Script from "next/script";

export const metadata = {
  title: "Transparent Pricing",
  description:
    "SOS Plumbing and Air provides upfront, written pricing for all plumbing, water heater, and HVAC services across the Inland Empire. No hidden fees, no surprise charges — ever.",
  alternates: {
    canonical: "/transparent-pricing",
  },
  openGraph: {
    title: "Transparent Pricing | SOS Plumbing and Air",
    description:
      "SOS Plumbing and Air provides upfront, written pricing for all plumbing, water heater, and HVAC services across the Inland Empire. No hidden fees, no surprise charges — ever.",
    url: "/transparent-pricing",
    images: ["/wh-sos-logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing | SOS Plumbing and Air",
    description:
      "Upfront, written pricing for plumbing, water heaters, and HVAC across the Inland Empire. Licensed & Insured — CA LIC #1140776.",
  },
};

// ─── Service schema ────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Transparent Plumbing, Water Heater, and HVAC Pricing",
  description:
    "SOS Plumbing and Air provides upfront, written pricing for all plumbing, water heater, and HVAC services across the Inland Empire. No hidden fees, no surprise charges.",
  serviceType: "Plumbing, Water Heater, and HVAC Services",
  provider: {
    "@type": "LocalBusiness",
    name: "SOS Plumbing and Air",
    telephone: "+1-800-697-4014",
    url: "https://sosplumbingandair.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "571 Crane St Unit H",
      addressLocality: "Lake Elsinore",
      addressRegion: "CA",
      postalCode: "92530",
      addressCountry: "US",
    },
    hasCredential: "CA LIC #1140776",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "500",
      bestRating: "5",
    },
  },
  areaServed: [
    "Riverside, CA",
    "Moreno Valley, CA",
    "Corona, CA",
    "San Bernardino, CA",
    "Murrieta, CA",
    "Temecula, CA",
    "Redlands, CA",
    "Rancho Cucamonga, CA",
    "Fontana, CA",
    "Ontario, CA",
    "Hemet, CA",
    "Lake Elsinore, CA",
    "Perris, CA",
    "Menifee, CA",
    "Yucaipa, CA",
    "Highland, CA",
    "Loma Linda, CA",
    "Beaumont, CA",
    "Banning, CA",
    "Calimesa, CA",
    "Mentone, CA",
    "Grand Terrace, CA",
    "Colton, CA",
    "Rialto, CA",
    "San Jacinto, CA",
    "Norco, CA",
    "Eastvale, CA",
    "Chino, CA",
    "Chino Hills, CA",
    "Claremont, CA",
    "Upland, CA",
    "Yorba Linda, CA",
    "Anaheim Hills, CA",
  ],
  offers: {
    "@type": "Offer",
    description: "Free online quote — no obligation",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

// ─── FAQ schema (11 FAQs) ──────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a plumber cost in the Inland Empire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most standard service calls across Riverside County and San Bernardino County, homeowners pay between $150 and $600. Common repairs like drain clearing or a toilet fix typically fall in the $150–$450 range. More complex projects — water heater replacements, slab leak repairs, whole-home repiping — range from $1,500 to $20,000 depending on scope.",
      },
    },
    {
      "@type": "Question",
      name: "Does SOS Plumbing and Air charge a trip fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOS charges a standard service call / dispatch fee ($49–$89 for standard hours) that is applied toward the cost of repair when work is approved on the same visit. There is no separate trip fee stacked on top. The diagnostic visit gives you a real written number — not a guess.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a water heater installation cost in the Inland Empire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 40-gallon tank water heater replacement in the Inland Empire typically costs $1,800–$2,800 fully installed, including the unit, seismic strapping, expansion tank, T&P valve discharge routing, and permit. A 50-gallon unit runs $2,000–$3,200. Tankless water heater installations range from $3,500–$5,500 because of required gas line and venting modifications.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AC repair cost in Riverside or San Bernardino County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common AC repairs in the Inland Empire range from $195–$895 for component replacements (capacitors, contractors, fan motors). Refrigerant recharges run $85–$250 per pound depending on refrigerant type. Major repairs like coil replacements range from $1,000–$2,500. The HVAC diagnostic fee ($59–$149) is credited toward the repair when you approve the work.",
      },
    },
    {
      "@type": "Question",
      name: "How much does furnace repair cost in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Furnace repairs in the Inland Empire typically run $150–$895 for component replacements (igniters, flame sensors, gas valves, limit switches). Heat exchanger replacement — required immediately when cracked due to carbon monoxide risk — runs $1,500–$3,000. The furnace diagnostic fee is credited toward the repair.",
      },
    },
    {
      "@type": "Question",
      name: "How much does drain cleaning cost in the Inland Empire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single drain clearing with a cable/snake runs $49–$179. Main sewer line clearing costs $295–$495. Hydro-jetting for severe buildup or recurring blockages runs $495–$995 for a single line, and $1,295–$1,895 for a whole-home treatment.",
      },
    },
    {
      "@type": "Question",
      name: "How much does slab leak repair cost in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slab leak detection runs $395–$795. Spot repair costs $1,500–$3,500. Full pipe rerouting above the slab runs $2,500–$5,500. Slab leaks are common across the Inland Empire because of regional soil movement and seismic activity.",
      },
    },
    {
      "@type": "Question",
      name: "How much does toilet replacement cost in the Inland Empire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard toilet replacement typically costs $450–$795, including removal of the old unit, installation, and sealing. Premium or comfort-height models run $595–$995.",
      },
    },
    {
      "@type": "Question",
      name: "Does plumbing or HVAC work require a permit in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many projects require a permit in California, including water heater replacements, sewer line work, gas line modifications, whole-home repiping, and new HVAC installations. When your job requires a permit, SOS will tell you upfront and can coordinate the paperwork on your behalf — permit fees appear as a separate pass-through line on your quote.",
      },
    },
    {
      "@type": "Question",
      name: "What is flat-rate pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat-rate pricing means the price is set for the job, not for the hour. You pay the quoted amount regardless of how long the work takes. This protects you from paying more if a job takes longer than expected. SOS Plumbing and Air uses flat-rate pricing for all standard services.",
      },
    },
    {
      "@type": "Question",
      name: "How much does whole-home repiping cost in the Inland Empire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A whole-home repipe in the Inland Empire typically costs $4,500–$9,500 for PEX or $5,500–$12,000 for copper, depending on the size of the home and the number of fixtures. Polybutylene replacement runs $5,000–$10,000.",
      },
    },
  ],
};

export default function TransparentPricingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <TransparentPricing />
        <StoryTestimonials
          heading="Customers on Our Upfront Pricing"
          subheading="Real stories about quotes that matched the invoice — no surprise fees, no padded labor, no upsell pressure."
          stories={STORIES_TRANSPARENT_PRICING}
        />
        <FinalCallCta
          heading="Get a Written, Upfront Quote"
          subheading="Every quote is documented before any work begins. Call now or request a free estimate online — no hidden charges, no surprises."
        />
      </main>
    </div>
  );
}
