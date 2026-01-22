import type { Metadata } from "next";
import { LakeElsinoreContent } from "@/components/lake-elsinore/LakeElsinoreContent";

export const metadata: Metadata = {
  title: "Lake Elsinore Plumbers & Water Heater Repair",
  description:
    "5-Star plumbing services in Lake Elsinore, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "Lake Elsinore plumber",
    "water heater repair Lake Elsinore",
    "emergency plumbing Lake Elsinore",
    "drain cleaning Lake Elsinore",
    "tankless water heater Lake Elsinore",
  ],
  openGraph: {
    title: "Lake Elsinore Plumbers & Water Heater Repair",
    description:
      "5-Star plumbing services in Lake Elsinore, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/lake-elsinore",
  },
};

export default function LakeElsinorePage() {
  return <LakeElsinoreContent />;
}
