import { StubPage } from "@/components/StubPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Heater Services in Corona, CA",
  description: "Expert water heater repair and installation services in Corona, CA. Same-day service available.",
  alternates: {
    canonical: "https://www.waterheatersos.com/corona",
  },
};

export default function CoronaPage() {
  return <StubPage title="Water Heater Services in Corona, CA" />;
}
