import type { Metadata } from "next";
import { AnaheimHillsContent } from "@/components/anaheim-hills/AnaheimHillsContent";

export const metadata: Metadata = {
  title: "Anaheim Hills Plumbers & Water Heater Repair",
  description:
    "Quality plumbing services in Anaheim Hills, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Anaheim Hills plumber",
    "water heater repair Anaheim Hills",
    "emergency plumbing Anaheim Hills",
    "drain cleaning Anaheim Hills",
    "tankless water heater Anaheim Hills",
  ],
  openGraph: {
    title: "Anaheim Hills Plumbers & Water Heater Repair",
    description:
      "Quality plumbing services in Anaheim Hills, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/anaheim-hills",
  },
};

export default function AnaheimHillsPage() {
  return <AnaheimHillsContent />;
}
