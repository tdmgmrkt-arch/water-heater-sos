import { AllServicesContent } from "@/components/services/AllServicesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Water Heater Services",
  description: "Browse all our water heater services including gas, electric, tankless, and heat pump water heater repair, installation, and replacement throughout the Inland Empire.",
  alternates: {
    canonical: "https://waterheatersos.com/water-heater-services",
  },
};

export default function WaterHeaterServicesPage() {
  return <AllServicesContent defaultTab="water-heater" />;
}
