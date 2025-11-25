import { AllServicesContent } from "@/components/services/AllServicesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Heater Services | Water Heater SOS",
  description: "Complete water heater services including gas, tankless, heat pump water heaters, and more. Expert installation and repair throughout the Inland Empire.",
};

export default function WaterHeaterServicesPage() {
  return <AllServicesContent />;
}
