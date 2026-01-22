import type { Metadata } from "next";
import { FontanaContent } from "@/components/fontana/FontanaContent";

export const metadata: Metadata = {
  title: "Fontana Plumbers & Water Heater Services",
  description:
    "Delivering plumbing services in Fontana, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Fontana plumber",
    "water heater repair Fontana",
    "emergency plumbing Fontana",
    "drain cleaning Fontana",
    "tankless water heater Fontana",
  ],
  openGraph: {
    title: "Fontana Plumbers & Water Heater Services",
    description:
      "Delivering plumbing services in Fontana, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/fontana",
  },
};

export default function FontanaPage() {
  return <FontanaContent />;
}
