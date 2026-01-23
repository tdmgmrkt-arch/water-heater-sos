import type { Metadata } from "next";
import { RedlandsContent } from "@/components/redlands/RedlandsContent";

export const metadata: Metadata = {
  title: "Redlands Plumbers & Water Heater Repair",
  description:
    "Expert plumbing services in Redlands, CA. Fast water heater repair & replacement, drain cleaning, faucet repairs, and more. Upfront pricing. Call (800) 697-4014!",
  keywords: [
    "Redlands plumber",
    "water heater repair Redlands",
    "plumbing services Redlands CA",
    "drain cleaning Redlands",
    "faucet repair Redlands",
    "toilet repair Redlands",
    "sewer line repair Redlands",
    "tankless water heater Redlands",
    "emergency plumber Redlands",
  ],
  openGraph: {
    title: "Redlands Plumbers & Water Heater Repair",
    description:
      "Expert plumbing services in Redlands, CA. Fast water heater repair & replacement, drain cleaning, faucet repairs, and more.",
    type: "website",
    url: "https://waterheatersos.com/redlands",
  },
  alternates: {
    canonical: "https://waterheatersos.com/redlands",
  },
};

export default function RedlandsPage() {
  return <RedlandsContent />;
}
