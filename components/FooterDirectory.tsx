"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  { name: "Air Duct Cleaning", href: "/air-duct-cleaning" },
  { name: "Drain Cleaning", href: "/drain-cleaning" },
  { name: "Faucet Repair & Replacement", href: "/faucet-repair-replacement" },
  { name: "Garbage Disposal Services", href: "/garbage-disposal-repair-replacement" },
  { name: "Gas Leak Repairs", href: "/gas-leak-repairs" },
  { name: "Gas Water Heaters", href: "/gas-water-heaters" },
  { name: "Heat Pump Water Heaters", href: "/heat-pump-water-heaters" },
  { name: "Hydro-Jetting", href: "/hydro-jetting" },
  { name: "Leak Detection Services", href: "/leak-detection-services" },
  { name: "Moen Flo Installation", href: "/moen-flo-installation" },
  { name: "Moen Flo Smart Monitor", href: "/moen-flo-smart-water-monitor" },
  { name: "Reverse Osmosis", href: "/reverse-osmosis" },
  { name: "Sewer Camera Inspection", href: "/sewer-camera-inspection" },
  { name: "Shower Repair & Replacement", href: "/shower-repair-replacement" },
  { name: "Sump Pump Services", href: "/sump-pump-repair-replacement" },
  { name: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { name: "Toilet Repair & Replacement", href: "/toilet-repair-replacement" },
  { name: "Water Filtration", href: "/water-filtration" },
  { name: "Water Pressure Regulator", href: "/water-pressure-regulator-replacement" },
  { name: "Water Service Repair", href: "/water-service-repair-replacement" },
  { name: "Whole House Repipe", href: "/whole-house-repipe" },
];

const serviceAreas = [
  { name: "Anaheim Hills", href: "/anaheim-hills" },
  { name: "Banning", href: "/banning" },
  { name: "Beaumont", href: "/beaumont" },
  { name: "Calimesa", href: "/calimesa" },
  { name: "Chino", href: "/chino" },
  { name: "Chino Hills", href: "/chino-hills" },
  { name: "Claremont", href: "/claremont" },
  { name: "Colton", href: "/colton" },
  { name: "Corona", href: "/corona" },
  { name: "Eastvale", href: "/eastvale" },
  { name: "Fontana", href: "/fontana" },
  { name: "Grand Terrace", href: "/grand-terrace" },
  { name: "Hemet", href: "/hemet" },
  { name: "Highland", href: "/highland" },
  { name: "Lake Elsinore", href: "/lake-elsinore" },
  { name: "Loma Linda", href: "/loma-linda" },
  { name: "Menifee", href: "/menifee" },
  { name: "Mentone", href: "/mentone" },
  { name: "Moreno Valley", href: "/moreno-valley" },
  { name: "Murrieta", href: "/murrieta" },
  { name: "Norco", href: "/norco" },
  { name: "Ontario", href: "/ontario" },
  { name: "Perris", href: "/perris" },
  { name: "Rancho Cucamonga", href: "/rancho-cucamonga" },
  { name: "Redlands", href: "/redlands" },
  { name: "Rialto", href: "/rialto" },
  { name: "Riverside", href: "/riverside" },
  { name: "San Bernardino", href: "/san-bernardino" },
  { name: "San Jacinto", href: "/san-jacinto" },
  { name: "Temecula", href: "/temecula" },
  { name: "Upland", href: "/upland" },
  { name: "Yorba Linda", href: "/yorba-linda" },
];

export function FooterDirectory() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <div className="border-t border-white/10 py-6">
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        {/* Services Section */}
        <div className="border-b border-white/10 pb-4 lg:border-b-0 lg:pb-0">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full group"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Our Services
            </h3>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 group-hover:text-[#EA5D19] transition-all duration-200 ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Links Grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-1.5 overflow-hidden transition-all duration-300 ${
              servicesOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="text-xs text-gray-400 hover:text-[#EA5D19] transition-colors py-1 truncate"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Service Areas Section */}
        <div>
          <button
            onClick={() => setAreasOpen(!areasOpen)}
            className="flex items-center justify-between w-full group"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Areas We Serve
            </h3>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 group-hover:text-[#EA5D19] transition-all duration-200 ${areasOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Links Grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1.5 overflow-hidden transition-all duration-300 ${
              areasOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            {serviceAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="text-xs text-gray-400 hover:text-[#EA5D19] transition-colors py-1 truncate"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
