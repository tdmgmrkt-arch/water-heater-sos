import type { Metadata } from "next";
import { MenifeeContent } from "@/components/menifee/MenifeeContent";

export const metadata: Metadata = {
  title: "Menifee Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Expert plumbing services in Menifee, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Menifee plumber",
    "water heater repair Menifee",
    "emergency plumbing Menifee",
    "drain cleaning Menifee",
    "tankless water heater Menifee",
  ],
  openGraph: {
    title: "Menifee Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Expert plumbing services in Menifee, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function MenifeePage() {
  return <MenifeeContent />;
}
