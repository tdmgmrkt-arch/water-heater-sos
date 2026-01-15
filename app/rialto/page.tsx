import type { Metadata } from "next";
import { RialtoContent } from "@/components/rialto/RialtoContent";

export const metadata: Metadata = {
  title: "Rialto Plumbers & Water Heater Services | Water Heater SOS",
  description:
    "Top-rated plumbing company in Rialto, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Rialto plumber",
    "water heater repair Rialto",
    "emergency plumbing Rialto",
    "drain cleaning Rialto",
    "tankless water heater Rialto",
  ],
  openGraph: {
    title: "Rialto Plumbers & Water Heater Services | Water Heater SOS",
    description:
      "Top-rated plumbing company in Rialto, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function RialtoPage() {
  return <RialtoContent />;
}
