import { WaterPressureRegulatorReplacementContent } from "@/components/water-pressure-regulator-replacement/WaterPressureRegulatorReplacementContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Pressure Regulator Replacement | PRV Installation",
  description: "Expert water pressure regulator replacement in the Inland Empire. Fix high water pressure, protect pipes and appliances. Professional PRV installation and testing. Call (800) 697-4014.",
  keywords: "water pressure regulator, PRV replacement, pressure reducing valve, high water pressure, water pressure test, Inland Empire plumber, regulator installation",
  openGraph: {
    title: "Water Pressure Regulator Replacement",
    description: "Professional water pressure regulator replacement and installation. Protect your plumbing from high pressure damage with expert PRV services.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/water-pressure-regulator-replacement",
  },
};

export default function WaterPressureRegulatorReplacementPage() {
  return <WaterPressureRegulatorReplacementContent />;
}
