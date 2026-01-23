import { SewerCameraInspectionContent } from "@/components/sewer-camera-inspection/SewerCameraInspectionContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Camera Inspection Services | Professional Plumbing Diagnostics",
  description: "High-tech sewer camera inspection services to diagnose drain and sewer line issues accurately. Non-invasive, fast, and reliable. Find hidden clogs, tree roots, and pipe damage. Call (800) 697-4014.",
  keywords: "sewer camera inspection, plumbing camera, drain inspection, sewer line inspection, pipe inspection, tree root detection, Inland Empire plumber",
  openGraph: {
    title: "Sewer Camera Inspection Services",
    description: "Professional sewer camera inspection services to identify plumbing issues without digging. Fast, accurate, and non-invasive diagnostics.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/sewer-camera-inspection",
  },
};

export default function SewerCameraInspectionPage() {
  return <SewerCameraInspectionContent />;
}
