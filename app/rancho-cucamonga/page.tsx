import type { Metadata } from "next";
import { RanchoCucamongaContent } from "@/components/rancho-cucamonga/RanchoCucamongaContent";

export const metadata: Metadata = {
  title: "Rancho Cucamonga Plumbers & Water Heater Services | Water Heater SOS",
  description:
    "5-Star rated plumbers in Rancho Cucamonga, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Rancho Cucamonga plumber",
    "water heater repair Rancho Cucamonga",
    "emergency plumbing Rancho Cucamonga",
    "drain cleaning Rancho Cucamonga",
    "tankless water heater Rancho Cucamonga",
  ],
  openGraph: {
    title: "Rancho Cucamonga Plumbers & Water Heater Services | Water Heater SOS",
    description:
      "5-Star rated plumbers in Rancho Cucamonga, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/rancho-cucamonga",
  },
};

export default function RanchoCucamongaPage() {
  return <RanchoCucamongaContent />;
}
