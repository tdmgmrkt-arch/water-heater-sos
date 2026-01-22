import { ReverseOsmosisContent } from "@/components/reverse-osmosis/ReverseOsmosisContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reverse Osmosis Systems | RO Water Filtration Installation",
  description: "Professional reverse osmosis system installation in the Inland Empire. Pure, clean drinking water for your home. Remove contaminants with advanced RO filtration. Call (800) 697-4014.",
  keywords: "reverse osmosis, RO system, water filtration, water purification, drinking water filter, Inland Empire plumber",
  openGraph: {
    title: "Reverse Osmosis Systems",
    description: "Expert reverse osmosis system installation. Pure, clean drinking water delivered directly from your tap.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/reverse-osmosis",
  },
};

export default function ReverseOsmosisPage() {
  return <ReverseOsmosisContent />;
}
