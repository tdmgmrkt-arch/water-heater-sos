import type { Metadata } from "next";
import { UplandContent } from "@/components/upland/UplandContent";

export const metadata: Metadata = {
  title: "Upland Plumbers & Water Heater Services",
  description:
    "Fantastic 5-star plumbers in Upland, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Upland plumber",
    "water heater repair Upland",
    "emergency plumbing Upland",
    "drain cleaning Upland",
    "tankless water heater Upland",
  ],
  openGraph: {
    title: "Upland Plumbers & Water Heater Services",
    description:
      "Fantastic 5-star plumbers in Upland, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/upland",
  },
};

export default function UplandPage() {
  return <UplandContent />;
}
