import { TermsOfServiceContent } from "@/components/terms-of-service/TermsOfServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Water Heater SOS",
  description: "Read Water Heater SOS's terms of service, including service agreements, warranties, liability limitations, and user responsibilities.",
  keywords: "terms of service, service agreement, warranty, Water Heater SOS terms, plumbing terms",
  openGraph: {
    title: "Terms of Service | Water Heater SOS",
    description: "Our terms and conditions for using Water Heater SOS services.",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
