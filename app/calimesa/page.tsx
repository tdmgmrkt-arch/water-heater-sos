import type { Metadata } from "next";
import { CalimesaContent } from "@/components/calimesa/CalimesaContent";

export const metadata: Metadata = {
  title: "Calimesa Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Expert plumbing services in Calimesa, CA. Water heater repair & replacement, drain cleaning, leak detection, and more. Call (800) 697-4014!",
  keywords: [
    "Calimesa plumber",
    "water heater repair Calimesa",
    "plumbing services Calimesa CA",
    "drain cleaning Calimesa",
    "tankless water heater Calimesa",
    "leak detection Calimesa",
    "emergency plumber Calimesa",
  ],
  openGraph: {
    title: "Calimesa Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Expert plumbing services in Calimesa, CA. Water heater repair & replacement, drain cleaning, leak detection, and more.",
    type: "website",
    url: "https://waterheatersos.com/calimesa",
  },
};

export default function CalimesaPage() {
  return <CalimesaContent />;
}
