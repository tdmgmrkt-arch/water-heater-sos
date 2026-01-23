import type { Metadata } from "next";
import { MoenFloContent } from "@/components/moen-flo-smart-water-monitor/MoenFloContent";

export const metadata: Metadata = {
  title: "Moen Flo Leak Detection Installation",
  description:
    "Professional Moen Flo Smart Water Monitor installation in Redlands, Yucaipa, Highland, Loma Linda & San Bernardino. Protect your home from water damage. Call now!",
  keywords: [
    "Moen Flo installation",
    "smart water monitor",
    "leak detection",
    "water shut-off valve",
    "Moen Flo Smart Water Monitor",
    "water damage prevention",
  ],
  openGraph: {
    title: "Moen Flo Leak Detection Installation",
    description:
      "Professional Moen Flo Smart Water Monitor installation in Redlands, Yucaipa, Highland, Loma Linda & San Bernardino. Protect your home from water damage.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/moen-flo-smart-water-monitor",
  },
};

export default function MoenFloSmartWaterMonitorPage() {
  return <MoenFloContent />;
}
