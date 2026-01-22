import { WholeHouseRepipeContent } from "@/components/whole-house-repipe/WholeHouseRepipeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole-House Repipe Services | PEX & Copper Repiping | Water Heater SOS",
  description: "Professional whole-house repiping services in the Inland Empire. Replace old galvanized pipes with PEX or copper. Fix leaks, low pressure, and discolored water. Call (800) 697-4014.",
  keywords: "whole house repipe, repiping services, galvanized pipe replacement, PEX piping, copper piping, Inland Empire plumber, pipe replacement",
  openGraph: {
    title: "Whole-House Repipe Services | Water Heater SOS",
    description: "Expert whole-house repiping to replace old, corroded pipes. Modern PEX and copper solutions for reliable plumbing. Free estimates available.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/whole-house-repipe",
  },
};

export default function WholeHouseRepipePage() {
  return <WholeHouseRepipeContent />;
}
