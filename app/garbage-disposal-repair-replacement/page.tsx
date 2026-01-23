import { GarbageDisposalRepairReplacementContent } from "@/components/garbage-disposal-repair-replacement/GarbageDisposalRepairReplacementContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garbage Disposal Repair & Replacement | Installation",
  description: "Expert garbage disposal repair and replacement in the Inland Empire. Fix jams, leaks, and clogs. Professional installation for all motor sizes. Emergency repairs available. Call (800) 697-4014.",
  keywords: "garbage disposal repair, garbage disposal replacement, garbage disposal installation, jammed disposal, leaking disposal, Inland Empire plumber, kitchen sink repair",
  openGraph: {
    title: "Garbage Disposal Repair & Replacement",
    description: "Professional garbage disposal repair and replacement services. Fix jams, leaks, and clogs with expert plumbing solutions for your kitchen.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/garbage-disposal-repair-replacement",
  },
};

export default function GarbageDisposalRepairReplacementPage() {
  return <GarbageDisposalRepairReplacementContent />;
}
