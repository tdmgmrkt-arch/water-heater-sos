import type { Metadata } from "next";
import { PerrisContent } from "@/components/perris/PerrisContent";

export const metadata: Metadata = {
  title: "Perris Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Professional plumbing services in Perris, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Perris plumber",
    "water heater repair Perris",
    "emergency plumbing Perris",
    "drain cleaning Perris",
    "tankless water heater Perris",
  ],
  openGraph: {
    title: "Perris Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Professional plumbing services in Perris, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function PerrisPage() {
  return <PerrisContent />;
}
