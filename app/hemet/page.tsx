import type { Metadata } from "next";
import { HemetContent } from "@/components/hemet/HemetContent";

export const metadata: Metadata = {
  title: "Hemet Plumbers & Water Heater Repair",
  description:
    "Fast response plumbing company in Hemet, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Hemet plumber",
    "water heater repair Hemet",
    "emergency plumbing Hemet",
    "drain cleaning Hemet",
    "tankless water heater Hemet",
  ],
  openGraph: {
    title: "Hemet Plumbers & Water Heater Repair",
    description:
      "Fast response plumbing company in Hemet, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/hemet",
  },
};

export default function HemetPage() {
  return <HemetContent />;
}
