import type { Metadata } from "next";
import { DrainCleaningContent } from "@/components/drain-cleaning/DrainCleaningContent";

export const metadata: Metadata = {
  title: "Drain Cleaning Services",
  description:
    "Expert drain cleaning services to clear clogs and restore proper drainage. Fast, professional service for backed up drains, sewer lines & more. Call now!",
  keywords: [
    "drain cleaning",
    "clogged drain",
    "sewer cleaning",
    "hydro jetting",
    "drain repair",
    "backed up drain",
  ],
  openGraph: {
    title: "Drain Cleaning Services",
    description:
      "Expert drain cleaning services to clear clogs and restore proper drainage. Fast, professional service for backed up drains, sewer lines & more.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/drain-cleaning",
  },
};

export default function DrainCleaningPage() {
  return <DrainCleaningContent />;
}
