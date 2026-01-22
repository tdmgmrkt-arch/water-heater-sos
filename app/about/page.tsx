import { AboutContent } from "@/components/about/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Family-Owned Water Heater & Plumbing Experts | Water Heater SOS",
  description: "Learn about Water Heater SOS, a family-owned business serving the Inland Empire since 2019. Expert water heater installation, repair, and full-service plumbing. Call (800) 697-4014.",
  keywords: "about us, family-owned plumber, Water Heater SOS, Inland Empire plumbing, water heater experts, Redlands plumber, Anna M., plumbing services",
  openGraph: {
    title: "About Water Heater SOS | Family-Owned Plumbing Experts",
    description: "Discover the story behind Water Heater SOS, your trusted family-owned water heater and plumbing service provider in the Inland Empire since 2019.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
