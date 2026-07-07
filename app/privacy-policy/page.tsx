import { PrivacyPolicyContent } from "@/components/privacy-policy/PrivacyPolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about SOS Plumbing and Air's privacy policy, data collection practices, and how we protect your personal information. Effective August 3, 2024.",
  keywords: "privacy policy, data protection, GDPR, personal data, cookies, SOS Plumbing and Air privacy",
  openGraph: {
    title: "Privacy Policy",
    description: "Our commitment to protecting your privacy and personal information.",
    type: "website",
  },
  alternates: {
    canonical: "https://waterheatersos.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
