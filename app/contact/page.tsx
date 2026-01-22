import { ContactContent } from "@/components/contact/ContactContent";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact Us | Water Heater SOS | 24/7 Service Available",
  description: "Contact Water Heater SOS for expert water heater and plumbing services. Available 24/7. Call (800) 697-4014, Text (909) 406-6503, or Email help@waterheatersos.com",
  keywords: "contact water heater sos, plumbing contact, 24/7 plumber, Inland Empire plumber contact, emergency plumbing",
  openGraph: {
    title: "Contact Water Heater SOS | 24/7 Service",
    description: "Reach out to Water Heater SOS for fast, reliable service. Call, text, or email us anytime.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Server-rendered H1 for SEO - hidden when client component loads */}
      <h1 className="sr-only">Contact Us</h1>
      <Suspense fallback={<div className="min-h-screen" />}>
        <ContactContent />
      </Suspense>
    </>
  );
}
