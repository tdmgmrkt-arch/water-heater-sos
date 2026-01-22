import { GasWaterHeatersContent } from "@/components/gas-water-heaters/GasWaterHeatersContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Water Heater Repair & Replacement | Expert Service",
  description: "Professional gas water heater repair and replacement services in the Inland Empire. Fast, reliable service for leaking, pilot light issues, and more. Call (800) 697-4014.",
  keywords: "gas water heater repair, gas water heater replacement, water heater installation, pilot light repair, Inland Empire plumber, water heater service",
  openGraph: {
    title: "Gas Water Heater Repair & Replacement",
    description: "Expert gas water heater repair and replacement services. Fast, reliable, and affordable. Available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/gas-water-heaters",
  },
};

export default function GasWaterHeatersPage() {
  return <GasWaterHeatersContent />;
}
