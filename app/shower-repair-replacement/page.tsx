import { ShowerRepairReplacementContent } from "@/components/shower-repair-replacement/ShowerRepairReplacementContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shower Repair & Replacement | Shower Valve Repair",
  description: "Expert shower repair and replacement in the Inland Empire. Fix leaks, valves, low pressure, and drains. Modern shower installations and emergency repairs. Call (800) 697-4014.",
  keywords: "shower repair, shower replacement, shower valve repair, shower leak, low water pressure, shower drain, Inland Empire plumber, bathroom remodel",
  openGraph: {
    title: "Shower Repair & Replacement",
    description: "Professional shower repair and replacement services. Fix leaks, valves, and drains with expert plumbing solutions for your bathroom.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/shower-repair-replacement",
  },
};

export default function ShowerRepairReplacementPage() {
  return <ShowerRepairReplacementContent />;
}
