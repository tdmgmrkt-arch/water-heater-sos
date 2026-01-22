import type { Metadata } from "next";
import { DiscountWaterHeatersContent } from "@/components/discount-water-heaters/DiscountWaterHeatersContent";

export const metadata: Metadata = {
  title: "Water Heater Discounts & Special Offers | Water Heater SOS",
  description:
    "Save big on water heater services! Get $100 off replacements, $250 off tankless installations, $25 off flushes, and $300 off whole house water filtration. Affordable pricing, 5-star service in Southern California.",
  keywords: [
    "water heater discounts",
    "water heater coupons",
    "tankless water heater discount",
    "water heater replacement deals",
    "water heater special offers",
    "affordable water heater service",
    "water heater installation discount",
    "Southern California water heater deals",
    "San Bernardino water heater coupons",
    "Riverside water heater specials",
  ],
  openGraph: {
    title: "Water Heater Discounts & Special Offers | Water Heater SOS",
    description:
      "Save big on water heater services! Get $100 off replacements, $250 off tankless installations, $25 off flushes, and $300 off whole house water filtration.",
    type: "website",
    url: "https://waterheatersos.com/discount-water-heaters",
  },
  alternates: {
    canonical: "https://www.waterheatersos.com/discount-water-heaters",
  },
};

export default function DiscountWaterHeatersPage() {
  return <DiscountWaterHeatersContent />;
}
