import { TermsOfServiceContent } from "@/components/terms-of-service/TermsOfServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read SOS Plumbing and Air's terms of service, including service agreements, warranties, liability limitations, and user responsibilities.",
  keywords: "terms of service, service agreement, warranty, SOS Plumbing and Air terms, plumbing terms",
  openGraph: {
    title: "Terms of Service",
    description: "Our terms and conditions for using SOS Plumbing and Air services.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
