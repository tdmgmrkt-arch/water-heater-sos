import type { Metadata } from "next";
import { OntarioContent } from "@/components/ontario/OntarioContent";

export const metadata: Metadata = {
  title: "Ontario Plumbers & Water Heater Services | Water Heater SOS",
  description:
    "5-Star rated plumbing company in Ontario, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Ontario plumber",
    "water heater repair Ontario",
    "emergency plumbing Ontario",
    "drain cleaning Ontario",
    "tankless water heater Ontario",
  ],
  openGraph: {
    title: "Ontario Plumbers & Water Heater Services | Water Heater SOS",
    description:
      "5-Star rated plumbing company in Ontario, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function OntarioPage() {
  return <OntarioContent />;
}
