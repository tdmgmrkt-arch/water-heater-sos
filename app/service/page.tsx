import { StubPage } from "@/components/StubPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Water heater tips, maintenance guides, and plumbing advice from the experts.",
  alternates: {
    canonical: "https://www.waterheatersos.com/service",
  },
};

export default function BlogPage() {
  return <StubPage title="Blog" />;
}
