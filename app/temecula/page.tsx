import type { Metadata } from "next";
import { TemeculaContent } from "@/components/temecula/TemeculaContent";

export const metadata: Metadata = {
  title: "Temecula Plumbers & Water Heater Repair",
  description:
    "5-Star rated plumbing services in Temecula, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Temecula plumber",
    "water heater repair Temecula",
    "emergency plumbing Temecula",
    "drain cleaning Temecula",
    "tankless water heater Temecula",
  ],
  openGraph: {
    title: "Temecula Plumbers & Water Heater Repair",
    description:
      "5-Star rated plumbing services in Temecula, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/temecula",
  },
};

export default function TemeculaPage() {
  return <TemeculaContent />;
}
