import { QuoteContent } from "@/components/quote/QuoteContent";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Free Water Heater Estimate | Get Your Quote Today",
  description: "Get a free water heater estimate online in the Inland Empire. Same-day quotes and installation available. Expert tankless and tank water heater services. Call (800) 697-4014.",
  keywords: "free water heater estimate, water heater quote, water heater installation, tankless water heater, tank water heater, Inland Empire, same-day service",
  openGraph: {
    title: "Free Water Heater Estimate",
    description: "Get your free water heater estimate today. Same-day quotes and installation available throughout the Inland Empire.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/quote",
  },
};

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <QuoteContent />
    </Suspense>
  );
}
