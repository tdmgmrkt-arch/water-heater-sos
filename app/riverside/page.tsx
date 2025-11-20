import type { Metadata } from "next";
import { RiversideContent } from "@/components/riverside/RiversideContent";

export const metadata: Metadata = {
  title: "Riverside Plumbers & Water Heater Services | Water Heater SOS",
  description:
    "Family-owned plumbing company in Riverside, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Riverside plumber",
    "water heater repair Riverside",
    "emergency plumbing Riverside",
    "drain cleaning Riverside",
    "tankless water heater Riverside",
  ],
  openGraph: {
    title: "Riverside Plumbers & Water Heater Services | Water Heater SOS",
    description:
      "Family-owned plumbing company in Riverside, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function RiversidePage() {
  return <RiversideContent />;
}
