import type { Metadata } from "next";
import { MurrietaContent } from "@/components/murrieta/MurrietaContent";

export const metadata: Metadata = {
  title: "Murrieta Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Highly rated plumbing services in Murrieta, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Murrieta plumber",
    "water heater repair Murrieta",
    "emergency plumbing Murrieta",
    "drain cleaning Murrieta",
    "tankless water heater Murrieta",
  ],
  openGraph: {
    title: "Murrieta Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Highly rated plumbing services in Murrieta, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function MurrietaPage() {
  return <MurrietaContent />;
}
