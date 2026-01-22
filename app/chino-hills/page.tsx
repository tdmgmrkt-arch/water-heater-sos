import type { Metadata } from "next";
import { ChinoHillsContent } from "@/components/chino-hills/ChinoHillsContent";

export const metadata: Metadata = {
  title: "Chino Hills Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Professional top-rated plumbers in Chino Hills, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Chino Hills plumber",
    "water heater repair Chino Hills",
    "emergency plumbing Chino Hills",
    "drain cleaning Chino Hills",
    "tankless water heater Chino Hills",
  ],
  openGraph: {
    title: "Chino Hills Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Professional top-rated plumbers in Chino Hills, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/chino-hills",
  },
};

export default function ChinoHillsPage() {
  return <ChinoHillsContent />;
}
