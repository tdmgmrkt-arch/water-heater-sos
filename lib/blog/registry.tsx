import type { ReactNode } from "react";
import { HeatPumpVsGasFurnace } from "@/components/blog/posts/HeatPumpVsGasFurnace";
import { FallWaterHeaterMaintenance } from "@/components/blog/posts/FallWaterHeaterMaintenance";
import { PreventHolidayKitchenDrainClogs } from "@/components/blog/posts/PreventHolidayKitchenDrainClogs";
import { RiversidePlumbingUpgrades2026 } from "@/components/blog/posts/RiversidePlumbingUpgrades2026";
import { FurnaceFailsColdSnap } from "@/components/blog/posts/FurnaceFailsColdSnap";
import { SantaAnaIndoorAirQuality } from "@/components/blog/posts/SantaAnaIndoorAirQuality";
import { HardWaterRiversideCounty } from "@/components/blog/posts/HardWaterRiversideCounty";
import { AcMaintenanceChecklist } from "@/components/blog/posts/AcMaintenanceChecklist";
import { TanklessVsTraditional2026 } from "@/components/blog/posts/TanklessVsTraditional2026";
import { AcNotCoolingFixes } from "@/components/blog/posts/AcNotCoolingFixes";

export const blogContentRegistry: Record<string, ReactNode> = {
  "heat-pump-vs-gas-furnace-southern-california": <HeatPumpVsGasFurnace />,
  "fall-water-heater-maintenance-inland-empire": <FallWaterHeaterMaintenance />,
  "prevent-holiday-kitchen-drain-clogs": <PreventHolidayKitchenDrainClogs />,
  "riverside-plumbing-upgrades-2026": <RiversidePlumbingUpgrades2026 />,
  "furnace-fails-cold-snap-mornings-inland-empire": <FurnaceFailsColdSnap />,
  "indoor-air-quality-santa-ana-winds": <SantaAnaIndoorAirQuality />,
  "hard-water-riverside-county-water-heater-damage": <HardWaterRiversideCounty />,
  "ac-maintenance-checklist-before-100-degree-days": <AcMaintenanceChecklist />,
  "tankless-vs-traditional-water-heaters-socal-2026": <TanklessVsTraditional2026 />,
  "ac-not-cooling-inland-empire-heat-fixes": <AcNotCoolingFixes />,
};
