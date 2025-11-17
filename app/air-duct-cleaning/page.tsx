import { AirDuctCleaningContent } from "@/components/air-duct-cleaning/AirDuctCleaningContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct & Dryer Vent Cleaning | Formerly Vent Gator | Water Heater SOS",
  description: "Professional air duct and dryer vent cleaning services in the Inland Empire. Improve indoor air quality, reduce fire risk, and boost HVAC efficiency. Formerly Vent Gator. Call (800) 697-4014.",
  keywords: "air duct cleaning, dryer vent cleaning, vent gator, HVAC cleaning, indoor air quality, Inland Empire, lint removal, vent cleaning",
  openGraph: {
    title: "Air Duct & Dryer Vent Cleaning | Water Heater SOS",
    description: "Expert air duct and dryer vent cleaning to improve air quality and safety. Formerly Vent Gator, serving the Inland Empire with trusted, professional service.",
    type: "website",
  },
};

export default function AirDuctCleaningPage() {
  return <AirDuctCleaningContent />;
}
