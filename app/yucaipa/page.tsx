import { YucaipaContent } from "@/components/yucaipa/YucaipaContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yucaipa Plumbing Services & Water Heater Repair | Water Heater SOS",
  description: "Expert plumbing services in Yucaipa, CA. Water heater repair, faucet fixes, drain cleaning, toilet repairs, and more. Same-day service available. Call (800) 697-4014.",
  keywords: "Yucaipa plumber, water heater repair Yucaipa, plumbing services Yucaipa, emergency plumber, drain cleaning, faucet repair, toilet repair, pipe repair, hard water solutions",
  openGraph: {
    title: "Yucaipa Plumbing Services & Water Heater Repair | Water Heater SOS",
    description: "Professional plumbing and water heater services in Yucaipa, CA. From leaky faucets to water heater replacements, we handle all your plumbing needs.",
    type: "website",
  },
};

export default function YucaipaPage() {
  return <YucaipaContent />;
}
