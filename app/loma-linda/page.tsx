import type { Metadata } from "next";
import { LomaLindaContent } from "@/components/loma-linda/LomaLindaContent";

export const metadata: Metadata = {
  title: "Loma Linda Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Expert plumbing services in Loma Linda, CA. Water heater repair & replacement, leak detection, drain cleaning, and more. Call (800) 697-4014!",
  keywords: [
    "Loma Linda plumber",
    "water heater repair Loma Linda",
    "plumbing services Loma Linda CA",
    "tankless water heater Loma Linda",
    "leak detection Loma Linda",
    "drain cleaning Loma Linda",
  ],
  openGraph: {
    title: "Loma Linda Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Expert plumbing services in Loma Linda, CA. Water heater repair & replacement, leak detection, and more.",
    type: "website",
    url: "https://waterheatersos.com/loma-linda",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/loma-linda",
  },
};

export default function LomaLindaPage() {
  return <LomaLindaContent />;
}
