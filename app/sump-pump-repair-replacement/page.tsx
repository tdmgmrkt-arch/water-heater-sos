import { SumpPumpRepairReplacementContent } from "@/components/sump-pump-repair-replacement/SumpPumpRepairReplacementContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sump Pump Repair & Replacement | Installation",
  description: "Expert sump pump repair and replacement in the Inland Empire. Prevent basement flooding with professional installation and maintenance. Battery backup systems available. Call (800) 697-4014.",
  keywords: "sump pump repair, sump pump replacement, sump pump installation, basement flooding, battery backup, Inland Empire plumber, flood prevention",
  openGraph: {
    title: "Sump Pump Repair & Replacement",
    description: "Professional sump pump repair and replacement services. Protect your home from flooding with expert installation and reliable maintenance.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/sump-pump-repair-replacement",
  },
};

export default function SumpPumpRepairReplacementPage() {
  return <SumpPumpRepairReplacementContent />;
}
