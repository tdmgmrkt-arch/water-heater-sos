import type { Metadata } from "next";
import { BanningContent } from "@/components/banning/BanningContent";

export const metadata: Metadata = {
  title: "Banning Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Expert plumbing services in Banning, CA. Water heater repair & replacement, tankless installations, drain cleaning, and more. Call (800) 697-4014!",
  keywords: [
    "Banning plumber",
    "water heater repair Banning",
    "plumbing services Banning CA",
    "tankless water heater Banning",
    "emergency plumber Banning",
    "drain cleaning Banning",
  ],
  openGraph: {
    title: "Banning Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Expert plumbing services in Banning, CA. Water heater repair & replacement, tankless installations, and more.",
    type: "website",
    url: "https://waterheatersos.com/banning",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/banning",
  },
};

export default function BanningPage() {
  return <BanningContent />;
}
