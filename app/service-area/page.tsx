import { ServiceAreaContent } from "@/components/service-area/ServiceAreaContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Area | Inland Empire Water Heater Services",
  description: "Water Heater SOS serves the entire Inland Empire including Riverside, San Bernardino, Redlands, Ontario, Corona, and 30+ cities. Check if we service your area. Call (800) 697-4014.",
  keywords: "service area, Inland Empire, Riverside, San Bernardino, Redlands, water heater service, coverage area, cities served, Ontario, Corona, Fontana",
  openGraph: {
    title: "Service Area",
    description: "Serving 30+ cities across the Inland Empire with expert water heater installation and repair services.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/service-area",
  },
};

export default function ServiceAreaPage() {
  return <ServiceAreaContent />;
}
