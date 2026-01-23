import type { Metadata } from "next";
import { SanBernardinoContent } from "@/components/san-bernardino/SanBernardinoContent";

export const metadata: Metadata = {
  title: "San Bernardino Plumbers & Water Heater Services",
  description:
    "Plumbing problem solvers in San Bernardino, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7. Call now!",
  keywords: [
    "San Bernardino plumber",
    "water heater repair San Bernardino",
    "emergency plumbing San Bernardino",
    "drain cleaning San Bernardino",
    "tankless water heater San Bernardino",
  ],
  openGraph: {
    title: "San Bernardino Plumbers & Water Heater Services",
    description:
      "Plumbing problem solvers in San Bernardino, CA. Fast water heater repair, installation, drain cleaning & more. Licensed, insured & available 24/7.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/san-bernardino",
  },
};

export default function SanBernardinoPage() {
  return <SanBernardinoContent />;
}
