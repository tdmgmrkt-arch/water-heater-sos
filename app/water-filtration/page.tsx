import { WaterFiltrationContent } from "@/components/water-filtration/WaterFiltrationContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Filtration Systems | Whole House Water Filters | Water Heater SOS",
  description: "Professional water filtration system installation in the Inland Empire. Remove contaminants, improve taste, and protect your home. Free water quality testing. Call (800) 697-4014.",
  keywords: "water filtration system, whole house water filter, water purification, reverse osmosis, Inland Empire plumber, clean drinking water",
  openGraph: {
    title: "Water Filtration Systems | Water Heater SOS",
    description: "Expert water filtration system installation. Clean, safe drinking water for your entire home. Free water quality testing available.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/water-filtration",
  },
};

export default function WaterFiltrationPage() {
  return <WaterFiltrationContent />;
}
