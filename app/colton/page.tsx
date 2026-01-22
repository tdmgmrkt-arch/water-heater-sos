import type { Metadata } from "next";
import { ColtonContent } from "@/components/colton/ColtonContent";

export const metadata: Metadata = {
  title: "Colton Plumbers & Water Heater Services",
  description:
    "Full-service plumbing company in Colton, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Colton plumber",
    "water heater repair Colton",
    "emergency plumbing Colton",
    "drain cleaning Colton",
    "tankless water heater Colton",
  ],
  openGraph: {
    title: "Colton Plumbers & Water Heater Services",
    description:
      "Full-service plumbing company in Colton, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/colton",
  },
};

export default function ColtonPage() {
  return <ColtonContent />;
}
