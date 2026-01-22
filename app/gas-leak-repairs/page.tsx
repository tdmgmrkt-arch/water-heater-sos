import { GasLeakRepairsContent } from "@/components/gas-leak-repairs/GasLeakRepairsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Leak Repair & Gas Line Installation | Emergency Service",
  description: "Emergency gas leak repair and professional gas line installation in the Inland Empire. Licensed technicians available 24/7 for gas leak detection and repair. Call (800) 697-4014.",
  keywords: "gas leak repair, gas line installation, emergency gas leak, gas line repair, gas leak detection, Inland Empire plumber, SoCal Gas",
  openGraph: {
    title: "Gas Leak Repair & Gas Line Installation",
    description: "Expert gas leak repair and gas line installation services. Fast emergency response to protect your family. Licensed and certified technicians.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/gas-leak-repairs",
  },
};

export default function GasLeakRepairsPage() {
  return <GasLeakRepairsContent />;
}
