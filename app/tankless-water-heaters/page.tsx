import { TanklessWaterHeatersContent } from "@/components/tankless-water-heaters/TanklessWaterHeatersContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tankless Water Heater Repair & Installation | Energy Efficient",
  description: "Professional tankless water heater repair and installation services in the Inland Empire. Energy-efficient, endless hot water, and expert service. Call (800) 697-4014.",
  keywords: "tankless water heater repair, tankless water heater installation, on-demand water heater, energy efficient water heater, Inland Empire plumber",
  openGraph: {
    title: "Tankless Water Heater Repair & Installation",
    description: "Expert tankless water heater services. Energy-efficient solutions with endless hot water. Fast, reliable, and professional.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/tankless-water-heaters",
  },
};

export default function TanklessWaterHeatersPage() {
  return <TanklessWaterHeatersContent />;
}
