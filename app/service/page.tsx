import { ServiceContent } from "@/components/service/ServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services | Water Heater & Drain Services",
  description: "Full-service plumbing company in the Inland Empire. Water heater repair, drain cleaning, leak detection, and more. Licensed plumbers available 24/7. Call (800) 697-4014.",
  keywords: "plumbing services, water heater repair, drain cleaning, leak detection, Inland Empire plumber, 24/7 plumbing",
  openGraph: {
    title: "Our Plumbing Services",
    description: "Comprehensive plumbing and water heater services throughout the Inland Empire. Licensed, insured, and available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/service",
  },
};

export default function ServicePage() {
  return <ServiceContent />;
}
