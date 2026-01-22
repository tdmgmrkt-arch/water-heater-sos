import { LeakDetectionServicesContent } from "@/components/leak-detection-services/LeakDetectionServicesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leak Detection Services | Slab Leak Detection | Water Heater SOS",
  description: "Professional leak detection services in the Inland Empire. Advanced technology to find hidden slab leaks, wall leaks, and foundation leaks. Non-invasive and accurate. Call (800) 697-4014.",
  keywords: "leak detection, slab leak detection, foundation leak repair, water leak detection, hidden leak detection, Inland Empire plumber",
  openGraph: {
    title: "Leak Detection Services | Water Heater SOS",
    description: "Expert leak detection using advanced tools. Find hidden slab and foundation leaks without tearing up your property. Fast, accurate, and reliable.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/leak-detection-services",
  },
};

export default function LeakDetectionServicesPage() {
  return <LeakDetectionServicesContent />;
}
