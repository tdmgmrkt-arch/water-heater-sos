import type { Metadata } from "next";
import { HighlandContent } from "@/components/highland/HighlandContent";

export const metadata: Metadata = {
  title: "Highland Plumbers & Water Heater Repair",
  description:
    "Expert plumbing services in Highland, CA. Water heater repair & replacement, leak detection, drain cleaning, and more. Call (800) 697-4014!",
  keywords: [
    "Highland plumber",
    "water heater repair Highland",
    "plumbing services Highland CA",
    "tankless water heater Highland",
    "emergency plumber Highland",
    "leak detection Highland",
    "drain cleaning Highland",
  ],
  openGraph: {
    title: "Highland Plumbers & Water Heater Repair",
    description:
      "Expert plumbing services in Highland, CA. Water heater repair & replacement, leak detection, and more.",
    type: "website",
    url: "https://waterheatersos.com/highland",
  },
  alternates: {
    canonical: "https://waterheatersos.com/highland",
  },
};

export default function HighlandPage() {
  return <HighlandContent />;
}
