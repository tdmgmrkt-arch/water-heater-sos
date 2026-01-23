import { HydroJettingContent } from "@/components/hydro-jetting/HydroJettingContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hydro-Jetting Services | Professional Drain Cleaning",
  description: "High-pressure hydro-jetting services to clean and clear stubborn drain clogs, tree roots, and sewer line blockages. Fast, effective, and safe for your pipes. Call (800) 697-4014.",
  keywords: "hydro jetting, drain cleaning, sewer line cleaning, clogged drains, tree root removal, plumbing services, Inland Empire plumber",
  openGraph: {
    title: "Hydro-Jetting Services",
    description: "Professional hydro-jetting services to clear stubborn clogs and restore your drains. Safe, effective, and thorough drain cleaning.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/hydro-jetting",
  },
};

export default function HydroJettingPage() {
  return <HydroJettingContent />;
}
