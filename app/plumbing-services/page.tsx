import { AllServicesContent } from "@/components/services/AllServicesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Plumbing Services",
  description: "Browse all our plumbing services including drain cleaning, leak detection, sewer repair, and all fixture installations throughout the Inland Empire.",
  alternates: {
    canonical: "https://www.waterheatersos.com/plumbing-services",
  },
};

export default function PlumbingServicesPage() {
  return <AllServicesContent defaultTab="plumbing" />;
}
