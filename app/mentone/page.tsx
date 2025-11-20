import type { Metadata } from "next";
import { MentoneContent } from "@/components/mentone/MentoneContent";

export const metadata: Metadata = {
  title: "Mentone Plumbers & Water Heater Repair | Water Heater SOS",
  description:
    "Expert plumbing services in Mentone, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Mentone plumber",
    "water heater repair Mentone",
    "emergency plumbing Mentone",
    "drain cleaning Mentone",
    "tankless water heater Mentone",
  ],
  openGraph: {
    title: "Mentone Plumbers & Water Heater Repair | Water Heater SOS",
    description:
      "Expert plumbing services in Mentone, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
};

export default function MentonePage() {
  return <MentoneContent />;
}
