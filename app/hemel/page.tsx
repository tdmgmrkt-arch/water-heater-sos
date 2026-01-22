import { StubPage } from "@/components/StubPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Heater Services in Hemel, CA",
  description: "Expert water heater repair and installation services in Hemel, CA. Same-day service available.",
  alternates: {
    canonical: "https://www.waterheatersos.com/hemel",
  },
};

export default function HemelPage() {
  return <StubPage title="Water Heater Services in Hemel, CA" />;
}
