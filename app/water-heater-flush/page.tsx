import { WaterHeaterFlushContent } from "@/components/water-heater-flush/WaterHeaterFlushContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Heater Flush Services | Professional Maintenance | Water Heater SOS",
  description: "Professional water heater flushing and maintenance services in the Inland Empire. Extend the life of your tankless and tank water heaters. Call (800) 697-4014.",
  keywords: "water heater flush, tankless water heater maintenance, water heater cleaning, sediment removal, Inland Empire plumber, water heater service",
  openGraph: {
    title: "Water Heater Flush Services | Water Heater SOS",
    description: "Expert water heater flushing services. Prevent mineral buildup and extend your water heater's lifespan. Professional maintenance available 24/7.",
    type: "website",
  },
};

export default function WaterHeaterFlushPage() {
  return <WaterHeaterFlushContent />;
}
