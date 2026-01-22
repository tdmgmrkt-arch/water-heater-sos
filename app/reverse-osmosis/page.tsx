import { StubPage } from "@/components/StubPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reverse Osmosis",
  description: "Reverse osmosis water filtration system installation and service.",
  alternates: {
    canonical: "https://www.waterheatersos.com/reverse-osmosis",
  },
};

export default function ReverseOsmosisPage() {
  return <StubPage title="Reverse Osmosis" />;
}
