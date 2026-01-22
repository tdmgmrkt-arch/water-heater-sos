import { ElectricWaterHeatersContent } from "@/components/electric-water-heaters/ElectricWaterHeatersContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Water Heater Repair & Installation | Reliable Service",
  description: "Professional electric water heater repair and installation services in the Inland Empire. Safe, reliable, and efficient hot water solutions. Call (800) 697-4014.",
  keywords: "electric water heater repair, electric water heater installation, tank water heater, hot water heater, Inland Empire plumber",
  openGraph: {
    title: "Electric Water Heater Repair & Installation",
    description: "Expert electric water heater services. Safe, reliable, and efficient solutions for your home. Fast, professional service.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/electric-water-heaters",
  },
};

export default function ElectricWaterHeatersPage() {
  return <ElectricWaterHeatersContent />;
}
