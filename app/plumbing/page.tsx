import { PlumbingContent } from "@/components/plumbing/PlumbingContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Service Plumbing & Water Heater Repair",
  description: "Complete plumbing services in the Inland Empire. Water heater repair, leak detection, shower repair, toilet installation, faucet repair, and garbage disposal services. Call (800) 697-4014.",
  keywords: "plumbing services, water heater repair, leak detection, shower repair, toilet installation, faucet repair, garbage disposal, Inland Empire plumber, emergency plumbing",
  openGraph: {
    title: "Plumbing Services",
    description: "Professional plumbing services for your home and business. From water heaters to leak repairs, we handle all your plumbing needs with expert care.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/plumbing",
  },
};

export default function PlumbingPage() {
  return <PlumbingContent />;
}
