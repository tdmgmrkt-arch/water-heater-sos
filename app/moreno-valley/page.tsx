import type { Metadata } from "next";
import { MorenoValleyContent } from "@/components/moreno-valley/MorenoValleyContent";

export const metadata: Metadata = {
  title: "Moreno Valley Plumbers & Water Heater Repair",
  description:
    "Expert plumbing services in Moreno Valley, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Moreno Valley plumber",
    "water heater repair Moreno Valley",
    "emergency plumbing Moreno Valley",
    "drain cleaning Moreno Valley",
    "tankless water heater Moreno Valley",
  ],
  openGraph: {
    title: "Moreno Valley Plumbers & Water Heater Repair",
    description:
      "Expert plumbing services in Moreno Valley, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/moreno-valley",
  },
};

export default function MorenoValleyPage() {
  return <MorenoValleyContent />;
}
