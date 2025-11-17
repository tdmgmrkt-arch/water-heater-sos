import { FaucetRepairReplacementContent } from "@/components/faucet-repair-replacement/FaucetRepairReplacementContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faucet Repair & Replacement | Kitchen & Bathroom Faucets | Water Heater SOS",
  description: "Expert faucet repair and replacement in the Inland Empire. Fix leaky kitchen and bathroom faucets, low water pressure, and dripping taps. Modern installations available. Call (800) 697-4014.",
  keywords: "faucet repair, faucet replacement, kitchen faucet, bathroom faucet, leaky faucet, dripping faucet, Inland Empire plumber, touchless faucet",
  openGraph: {
    title: "Faucet Repair & Replacement | Water Heater SOS",
    description: "Professional faucet repair and replacement for kitchen and bathroom. Fix leaks, drips, and install modern water-saving faucets with expert plumbing services.",
    type: "website",
  },
};

export default function FaucetRepairReplacementPage() {
  return <FaucetRepairReplacementContent />;
}
