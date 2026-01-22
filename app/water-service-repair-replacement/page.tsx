import { WaterServiceRepairReplacementContent } from "@/components/water-service-repair-replacement/WaterServiceRepairReplacementContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Service Line Repair & Replacement | Main Water Line",
  description: "Expert water service line repair and replacement in the Inland Empire. Fix leaks, low water pressure, and damaged pipes. Modern copper and PVC solutions. Call (800) 697-4014.",
  keywords: "water service line repair, main water line replacement, water service leak, water line repair, copper pipe, Schedule 80 pipe, Inland Empire plumber",
  openGraph: {
    title: "Water Service Line Repair & Replacement",
    description: "Professional water service line repair and replacement. Fix leaks and restore water flow with expert plumbing solutions for your home.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/water-service-repair-replacement",
  },
};

export default function WaterServiceRepairReplacementPage() {
  return <WaterServiceRepairReplacementContent />;
}
