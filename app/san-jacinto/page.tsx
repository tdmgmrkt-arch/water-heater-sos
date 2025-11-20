import type { Metadata } from "next";
import { SanJacintoContent } from "@/components/san-jacinto/SanJacintoContent";

export const metadata: Metadata = {
  title: "San Jacinto Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Top-rated plumbers in San Jacinto, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "San Jacinto plumber",
    "water heater repair San Jacinto",
    "emergency plumbing San Jacinto",
    "drain cleaning San Jacinto",
    "tankless water heater San Jacinto",
  ],
  openGraph: {
    title: "San Jacinto Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Top-rated plumbers in San Jacinto, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function SanJacintoPage() {
  return <SanJacintoContent />;
}
