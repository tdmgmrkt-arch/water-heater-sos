import type { ReactNode } from "react";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO YYYY-MM-DD
  category: string;
  readTime: string;
  author: string;
  coverImage: string;
  coverImageAlt: string;
  keywords: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: ReactNode;
}

// Ordered oldest → newest (list will render newest first)
export const blogPosts: BlogPostMeta[] = [
  {
    slug: "heat-pump-vs-gas-furnace-southern-california",
    title: "Heat Pump vs Gas Furnace in Southern California: Which Should You Install?",
    description:
      "A licensed Inland Empire HVAC contractor compares heat pumps and gas furnaces for Riverside and San Bernardino homes — costs, rebates, comfort, and long-term value.",
    date: "2025-10-08",
    category: "HVAC",
    readTime: "8 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/heat-pump-vs-gas-furnace.jpg",
    coverImageAlt:
      "Residential outdoor heat pump condenser unit installed next to a Southern California home",
    keywords: [
      "heat pump vs gas furnace",
      "heat pump installation Inland Empire",
      "furnace installation Riverside",
      "SoCal heat pump rebates",
    ],
  },
  {
    slug: "fall-water-heater-maintenance-inland-empire",
    title: "Fall Water Heater Maintenance for Inland Empire Homes: A 10-Minute Homeowner Checklist",
    description:
      "Before the cool season hits, walk through this fall water heater maintenance checklist built specifically for Riverside and San Bernardino County homes.",
    date: "2025-11-05",
    category: "Water Heaters",
    readTime: "6 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/fall-water-heater-maintenance.jpg",
    coverImageAlt:
      "Residential tank water heater installed in a utility closet with copper flex lines and safety straps",
    keywords: [
      "water heater maintenance",
      "water heater flush Inland Empire",
      "fall home checklist Riverside",
      "extend water heater life",
    ],
  },
  {
    slug: "prevent-holiday-kitchen-drain-clogs",
    title: "Preventing Kitchen Drain Clogs Over the Holidays: A Plumber's Guide",
    description:
      "Thanksgiving through New Year's is peak drain-clog season. Here's how Inland Empire homeowners can avoid an emergency plumber call during the holidays.",
    date: "2025-12-03",
    category: "Plumbing",
    readTime: "7 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/holiday-kitchen-drain-clogs.jpg",
    coverImageAlt:
      "Modern kitchen sink prepped for holiday cooking — a common source of drain clogs",
    keywords: [
      "holiday drain clogs",
      "kitchen drain cleaning Riverside",
      "garbage disposal tips",
      "prevent clogged drain",
    ],
  },
  {
    slug: "riverside-plumbing-upgrades-2026",
    title: "5 Plumbing Upgrades Riverside Homeowners Are Making in 2026",
    description:
      "From smart leak detection to whole-house filtration, here are the five plumbing upgrades our licensed team is installing most across Riverside County right now.",
    date: "2026-01-14",
    category: "Plumbing",
    readTime: "9 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/riverside-plumbing-upgrades.jpg",
    coverImageAlt:
      "Plumber working on residential water pipes under a kitchen sink during a plumbing upgrade",
    keywords: [
      "plumbing upgrades 2026",
      "smart leak detection Inland Empire",
      "whole house repipe Riverside",
      "water filtration systems",
    ],
  },
  {
    slug: "furnace-fails-cold-snap-mornings-inland-empire",
    title: "Why Furnaces Fail Most Often on Cold-Snap Mornings in the Inland Empire",
    description:
      "The first sub-40°F morning is the day our phones ring off the hook. Here's why furnaces fail on cold snaps in Riverside and San Bernardino — and how to prevent it.",
    date: "2026-02-11",
    category: "HVAC",
    readTime: "7 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/furnace-cold-snap.jpg",
    coverImageAlt:
      "American-style upright condensing gas furnace installed in a residential utility closet",
    keywords: [
      "furnace not turning on",
      "cold snap furnace failure",
      "furnace repair Inland Empire",
      "furnace maintenance Riverside",
    ],
  },
  {
    slug: "indoor-air-quality-santa-ana-winds",
    title: "Indoor Air Quality After a Santa Ana Wind Event: A Homeowner's Guide",
    description:
      "Santa Ana winds push dust, pollen, and wildfire smoke into every Inland Empire home. Here's what to do to restore healthy indoor air after the winds die down.",
    date: "2026-03-04",
    category: "Indoor Air Quality",
    readTime: "8 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/santa-ana-indoor-air-quality.jpg",
    coverImageAlt:
      "Homeowner holding a residential HVAC air filter in front of a furnace cabinet after a wind event",
    keywords: [
      "indoor air quality Santa Ana winds",
      "air filtration Inland Empire",
      "wildfire smoke home",
      "MERV 13 filter Riverside",
    ],
  },
  {
    slug: "hard-water-riverside-county-water-heater-damage",
    title: "Hard Water in Riverside County: 5 Ways It's Damaging Your Water Heater",
    description:
      "Riverside County water is some of the hardest in California. Here's exactly how it shortens the life of your water heater — and what to do about it.",
    date: "2026-04-08",
    category: "Water Heaters",
    readTime: "8 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/hard-water-riverside.jpg",
    coverImageAlt:
      "Heavy white calcium and limescale deposits caked on a bathroom faucet aerator from hard water",
    keywords: [
      "hard water Riverside County",
      "water heater scale buildup",
      "water softener Inland Empire",
      "extend water heater life",
    ],
  },
  {
    slug: "ac-maintenance-checklist-before-100-degree-days",
    title: "AC Maintenance Checklist for Inland Empire Homeowners Before 100°F Days Hit",
    description:
      "Get your AC ready before the Inland Empire heat sets in. A licensed HVAC tech walks through the exact pre-summer AC checklist for Riverside and San Bernardino homes.",
    date: "2026-05-13",
    category: "HVAC",
    readTime: "8 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/ac-maintenance-checklist.jpg",
    coverImageAlt:
      "HVAC technician using refrigerant manifold gauges to service a residential AC condenser before summer",
    keywords: [
      "AC maintenance checklist",
      "pre-summer AC tune up",
      "AC maintenance Riverside",
      "prevent AC breakdown",
    ],
  },
  {
    slug: "tankless-vs-traditional-water-heaters-socal-2026",
    title: "Tankless vs Traditional Water Heaters in Southern California: Which Wins in 2026?",
    description:
      "A licensed Inland Empire installer breaks down tankless vs traditional water heaters for Southern California homes — cost, hot water performance, rebates, and lifespan.",
    date: "2026-06-10",
    category: "Water Heaters",
    readTime: "10 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/tankless-vs-traditional-water-heaters.jpg",
    coverImageAlt:
      "Two wall-mounted Noritz tankless water heaters installed with piping and gas lines",
    keywords: [
      "tankless vs traditional water heater",
      "tankless water heater installation Inland Empire",
      "SoCalGas rebates water heater",
      "gas water heater Riverside",
    ],
  },
  {
    slug: "ac-not-cooling-inland-empire-heat-fixes",
    title: "AC Not Cooling in Inland Empire Heat? 7 Fast Fixes Before You Call a Pro",
    description:
      "When your AC quits during a 105°F Inland Empire afternoon, try these 7 fast fixes first. A licensed HVAC tech's step-by-step guide before you pay for a service call.",
    date: "2026-07-15",
    category: "HVAC",
    readTime: "9 min read",
    author: "SOS Plumbing and Air",
    coverImage: "/blog/ac-not-cooling-hot-homeowner.jpg",
    coverImageAlt:
      "Man wiping sweat from his forehead indoors during a Southern California heat wave when the AC isn't cooling",
    keywords: [
      "AC not cooling",
      "AC troubleshooting Inland Empire",
      "AC repair Riverside",
      "AC blowing warm air",
    ],
  },
];

export function getSortedBlogPosts(): BlogPostMeta[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostMeta(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
