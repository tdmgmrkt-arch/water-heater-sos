import type { Metadata } from "next";
import { YorbaLindaContent } from "@/components/yorba-linda/YorbaLindaContent";

export const metadata: Metadata = {
  title: "Yorba Linda Plumbers & Water Heater Repair",
  description:
    "Your plumbing pros in Yorba Linda, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Yorba Linda plumber",
    "water heater repair Yorba Linda",
    "emergency plumbing Yorba Linda",
    "drain cleaning Yorba Linda",
    "tankless water heater Yorba Linda",
  ],
  openGraph: {
    title: "Yorba Linda Plumbers & Water Heater Repair",
    description:
      "Your plumbing pros in Yorba Linda, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/yorba-linda",
  },
};

export default function YorbaLindaPage() {
  return <YorbaLindaContent />;
}
