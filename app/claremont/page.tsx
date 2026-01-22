import type { Metadata } from "next";
import { ClaremontContent } from "@/components/claremont/ClaremontContent";

export const metadata: Metadata = {
  title: "Claremont Plumbers & Water Heater Repair",
  description:
    "Expert plumbing services in Claremont, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Claremont plumber",
    "water heater repair Claremont",
    "emergency plumbing Claremont",
    "drain cleaning Claremont",
    "tankless water heater Claremont",
  ],
  openGraph: {
    title: "Claremont Plumbers & Water Heater Repair",
    description:
      "Expert plumbing services in Claremont, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/claremont",
  },
};

export default function ClaremontPage() {
  return <ClaremontContent />;
}
