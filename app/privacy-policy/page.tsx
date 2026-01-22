import { PrivacyPolicyContent } from "@/components/privacy-policy/PrivacyPolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Water Heater SOS",
  description: "Learn about Water Heater SOS's privacy policy, data collection practices, and how we protect your personal information. Effective August 3, 2024.",
  keywords: "privacy policy, data protection, GDPR, personal data, cookies, Water Heater SOS privacy",
  openGraph: {
    title: "Privacy Policy | Water Heater SOS",
    description: "Our commitment to protecting your privacy and personal information.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
