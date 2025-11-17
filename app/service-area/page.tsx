import { StubPage } from "@/components/StubPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Area",
  description: "We serve the entire Inland Empire including Riverside, San Bernardino, Redlands, and surrounding areas.",
};

export default function ServiceAreaPage() {
  return <StubPage title="Service Area" />;
}
