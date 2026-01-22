import type { Metadata } from "next";
import { GrandTerraceContent } from "@/components/grand-terrace/GrandTerraceContent";

export const metadata: Metadata = {
  title: "Grand Terrace Plumbers & Water Heater Services",
  description:
    "Trusted for all your plumbing needs in Grand Terrace, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Grand Terrace plumber",
    "water heater repair Grand Terrace",
    "emergency plumbing Grand Terrace",
    "drain cleaning Grand Terrace",
    "tankless water heater Grand Terrace",
  ],
  openGraph: {
    title: "Grand Terrace Plumbers & Water Heater Services",
    description:
      "Trusted for all your plumbing needs in Grand Terrace, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/grand-terrace",
  },
};

export default function GrandTerracePage() {
  return <GrandTerraceContent />;
}
