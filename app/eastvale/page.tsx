import type { Metadata } from "next";
import { EastvaleContent } from "@/components/eastvale/EastvaleContent";

export const metadata: Metadata = {
  title: "Eastvale Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Your trusted plumbing experts in Eastvale, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Eastvale plumber",
    "water heater repair Eastvale",
    "emergency plumbing Eastvale",
    "drain cleaning Eastvale",
    "tankless water heater Eastvale",
  ],
  openGraph: {
    title: "Eastvale Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Your trusted plumbing experts in Eastvale, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function EastvalePage() {
  return <EastvaleContent />;
}
