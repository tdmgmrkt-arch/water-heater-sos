import type { Metadata } from "next";
import { ChinoContent } from "@/components/chino/ChinoContent";

export const metadata: Metadata = {
  title: "Chino Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Your go-to plumbing experts in Chino, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Chino plumber",
    "water heater repair Chino",
    "emergency plumbing Chino",
    "drain cleaning Chino",
    "tankless water heater Chino",
  ],
  openGraph: {
    title: "Chino Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Your go-to plumbing experts in Chino, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/chino",
  },
};

export default function ChinoPage() {
  return <ChinoContent />;
}
