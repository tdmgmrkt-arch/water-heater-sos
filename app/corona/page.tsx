import { CoronaContent } from "@/components/corona/CoronaContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & Water Heater Services in Corona, CA",
  description: "Expert water heater repair, installation, and plumbing services in Corona, CA. Same-day service available. Licensed plumbers serving Corona and surrounding areas. Call (800) 697-4014.",
  alternates: {
    canonical: "https://waterheatersos.com/corona",
  },
};

export default function CoronaPage() {
  return <CoronaContent />;
}
