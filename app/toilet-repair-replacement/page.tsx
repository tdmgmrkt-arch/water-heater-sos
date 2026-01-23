import { ToiletRepairReplacementContent } from "@/components/toilet-repair-replacement/ToiletRepairReplacementContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toilet Repair & Replacement | Toilet Installation",
  description: "Expert toilet repair and replacement in the Inland Empire. Fix leaks, clogs, running toilets. Professional toilet installation for all types. Emergency repairs available. Call (800) 697-4014.",
  keywords: "toilet repair, toilet replacement, toilet installation, running toilet, toilet leak, clogged toilet, Inland Empire plumber, water-saving toilet",
  openGraph: {
    title: "Toilet Repair & Replacement",
    description: "Professional toilet repair and replacement services. Fix leaks, clogs, and running toilets with expert plumbing solutions for your bathroom.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/toilet-repair-replacement",
  },
};

export default function ToiletRepairReplacementPage() {
  return <ToiletRepairReplacementContent />;
}
