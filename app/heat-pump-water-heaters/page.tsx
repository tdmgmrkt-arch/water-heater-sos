import { HeatPumpWaterHeatersContent } from "@/components/heat-pump-water-heaters/HeatPumpWaterHeatersContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Pump Water Heater Repair & Installation | Energy Efficient | Water Heater SOS",
  description: "Professional heat pump water heater repair and installation services in the Inland Empire. Ultra energy-efficient, eco-friendly, and eligible for rebates. Call (800) 697-4014.",
  keywords: "heat pump water heater, energy efficient water heater, eco-friendly water heater, California water heater rebates, Inland Empire plumber",
  openGraph: {
    title: "Heat Pump Water Heater Repair & Installation | Water Heater SOS",
    description: "Expert heat pump water heater services. Energy-efficient solutions with up to 73% less energy usage. Professional installation and repairs.",
    type: "website",
  },
};

export default function HeatPumpWaterHeatersPage() {
  return <HeatPumpWaterHeatersContent />;
}
