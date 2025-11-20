import type { Metadata } from "next";
import { NorcoContent } from "@/components/norco/NorcoContent";

export const metadata: Metadata = {
  title: "Norco Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Your go-to plumbing experts in Norco, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Norco plumber",
    "water heater repair Norco",
    "emergency plumbing Norco",
    "drain cleaning Norco",
    "tankless water heater Norco",
  ],
  openGraph: {
    title: "Norco Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Your go-to plumbing experts in Norco, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function NorcoPage() {
  return <NorcoContent />;
}
