import type { Metadata } from "next";
import { BeaumontContent } from "@/components/beaumont/BeaumontContent";

export const metadata: Metadata = {
  title: "Beaumont Plumbers & Water Heater Repair",
  description:
    "Expert plumbing services in Beaumont, CA. Water heater repair & replacement, drain cleaning, and more. Fast, reliable service. Call (800) 697-4014!",
  keywords: [
    "Beaumont plumber",
    "water heater repair Beaumont",
    "plumbing services Beaumont CA",
    "tankless water heater Beaumont",
    "emergency plumber Beaumont",
    "drain cleaning Beaumont",
  ],
  openGraph: {
    title: "Beaumont Plumbers & Water Heater Repair",
    description:
      "Expert plumbing services in Beaumont, CA. Water heater repair & replacement, drain cleaning, and more.",
    type: "website",
    url: "https://waterheatersos.com/beaumont",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/beaumont",
  },
};

export default function BeaumontPage() {
  return <BeaumontContent />;
}
