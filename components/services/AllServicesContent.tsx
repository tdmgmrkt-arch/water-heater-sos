"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Droplets, Zap, Droplet, Search, Check, Wind, Wrench } from "lucide-react";
import { SetFooterCTA } from "@/components/SetFooterCTA";

const waterHeaterServices = [
  {
    title: "Gas Water Heaters",
    image: "/gas-water-heater-.webp",
    href: "/gas-water-heaters",
    description: "Traditional, reliable, and cost-effective heating solutions",
    icon: Flame,
    badge: "Most Popular",
    features: ["Fast Installation", "Proven Technology", "Budget Friendly"],
  },
  {
    title: "Tankless Water Heaters",
    image: "/tankless-water-heater.webp",
    href: "/tankless-water-heaters",
    description: "Energy-efficient, endless hot water on demand",
    icon: Zap,
    badge: "Energy Saver",
    features: ["Endless Hot Water", "Space Saving", "Lower Bills"],
  },
  {
    title: "Water Heater Flush",
    image: "/water-heater-flush.webp",
    href: "/water-heater-flush",
    description: "Maintenance and flushing services",
    icon: Droplets,
    badge: "Maintenance",
    features: ["Extend Lifespan", "Better Performance", "Save Money"],
  },
  {
    title: "Heat Pump Water Heaters",
    image: "/heat-pump.webp",
    href: "/heat-pump-water-heaters",
    description: "Eco-friendly heat pump systems",
    icon: Zap,
    badge: "Eco-Friendly",
    features: ["Energy Efficient", "Lower Costs", "Green Technology"],
  },
  {
    title: "Water Filtration Systems",
    image: "/water-filtration-system.webp",
    href: "/water-filtration",
    description: "Whole-house water purification for healthier living",
    icon: Droplets,
    badge: "Premium Choice",
    features: ["Cleaner Water", "Healthier Living", "Eco-Friendly"],
  },
];

const plumbingServices = [
  {
    title: "Drain Cleaning",
    image: "/drain-cleaning.webp",
    href: "/drain-cleaning",
    description: "Fast, effective drain cleaning",
    icon: Droplet,
    badge: "Popular",
    features: ["Fast Service", "Clear Clogs", "Prevent Backups"],
  },
  {
    title: "Hydro-Jetting",
    image: "/hydro-jet.webp",
    href: "/hydro-jetting",
    description: "High-pressure pipe cleaning",
    icon: Zap,
    badge: "Professional",
    features: ["Deep Cleaning", "Long-lasting", "Eco-Friendly"],
  },
  {
    title: "Leak Detection Services",
    image: "/leak-detection.webp",
    href: "/leak-detection-services",
    description: "Advanced leak detection",
    icon: Search,
    badge: "Advanced",
    features: ["Find Hidden Leaks", "Save Water", "Prevent Damage"],
  },
  {
    title: "Sewer Camera Inspection",
    image: "/sewer-camera-inspection.webp",
    href: "/sewer-camera-inspection",
    description: "Video pipe inspection",
    icon: Search,
    badge: "Technology",
    features: ["Accurate Diagnosis", "No Guesswork", "Save Time"],
  },
  {
    title: "Whole-House Repipe",
    image: "/whole-house-repiping.webp",
    href: "/whole-house-repipe",
    description: "Complete pipe replacement",
    icon: Wrench,
    badge: "Comprehensive",
    features: ["New Plumbing", "Better Flow", "Increase Value"],
  },
  {
    title: "Gas Leak Repair & Installation",
    image: "/gas-leak-detection.webp",
    href: "/gas-leak-repairs",
    description: "Gas line services",
    icon: Flame,
    badge: "Safety",
    features: ["Emergency Service", "Licensed Pros", "Safe & Secure"],
  },
  {
    title: "Water Service Repair & Replacement",
    image: "/water-service-repair.webp",
    href: "/water-service-repair-replacement",
    description: "Water line services",
    icon: Droplets,
    badge: "Essential",
    features: ["Main Line Repair", "Quality Parts", "Fast Service"],
  },
  {
    title: "Water Pressure Regulator Replacement",
    image: "/water-pressure-regulator-install.webp",
    href: "/water-pressure-regulator-replacement",
    description: "Pressure control",
    icon: Wrench,
    badge: "Control",
    features: ["Protect Pipes", "Consistent Pressure", "Prevent Damage"],
  },
  {
    title: "Shower Repair & Replacement",
    image: "/shower-repair-replacement.webp",
    href: "/shower-repair-replacement",
    description: "Shower installation",
    icon: Droplets,
    badge: "Bathroom",
    features: ["Modern Fixtures", "Leak Repair", "Expert Install"],
  },
  {
    title: "Toilet Repair & Replacement",
    image: "/toilet-repair.installation.webp",
    href: "/toilet-repair-replacement",
    description: "Toilet services",
    icon: Wrench,
    badge: "Essential",
    features: ["Fix Leaks", "New Installs", "Water Efficient"],
  },
  {
    title: "Faucet Repair & Replacement",
    image: "/faucet-repair-replacement.webp",
    href: "/faucet-repair-replacement",
    description: "Faucet installation",
    icon: Droplet,
    badge: "Kitchen & Bath",
    features: ["Stop Drips", "Modern Styles", "Quality Brands"],
  },
  {
    title: "Garbage Disposal Repair & Replacement",
    image: "/garbage-disposal-repair.webp",
    href: "/garbage-disposal-repair-replacement",
    description: "Disposal services",
    icon: Wrench,
    badge: "Kitchen",
    features: ["Fix Jams", "New Units", "Quiet Operation"],
  },
  {
    title: "Moen Flo Leak Detection Installation",
    image: "/Moen.webp",
    href: "/moen-flo-smart-water-monitor",
    description: "Smart water monitoring",
    icon: Droplets,
    badge: "Smart Home",
    features: ["24/7 Monitoring", "Auto Shut-Off", "Insurance Approved"],
  },
  {
    title: "Sump Pump Repair & Replacement",
    image: "/sump-pump.webp",
    href: "/sump-pump-repair-replacement",
    description: "Sump pump services",
    icon: Droplets,
    badge: "Protection",
    features: ["Prevent Flooding", "Battery Backup", "Reliable"],
  },
  {
    title: "Air Duct Cleaning",
    image: "/air-duct-cleaning.webp",
    href: "/air-duct-cleaning",
    description: "HVAC duct cleaning",
    icon: Wind,
    badge: "Air Quality",
    features: ["Cleaner Air", "Better Health", "Energy Savings"],
  },
];

interface AllServicesContentProps {
  defaultTab?: "water-heater" | "plumbing";
}

export function AllServicesContent({ defaultTab = "water-heater" }: AllServicesContentProps = {}) {
  const [activeTab, setActiveTab] = useState<"water-heater" | "plumbing">(defaultTab);

  const services = activeTab === "water-heater" ? waterHeaterServices : plumbingServices;

  return (
    <main className="min-h-screen bg-white">
      <SetFooterCTA
        title="Ready to Get Started?"
        description="Contact Water Heater SOS today for expert service you can trust. Same-day appointments available!"
        quoteLink="/quote"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-20 sm:pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-4 tracking-wide">
              Complete Service Menu
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#11110E] lg:text-7xl mb-4 leading-tight">
              <span className="text-[#EA5D19]">All </span>Our Services
            </h1>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive water heater and plumbing solutions for your home throughout the Inland Empire
            </p>

            {/* Toggle Tabs */}
            <div className="inline-flex rounded-full bg-gray-100 p-1 shadow-md">
              <button
                onClick={() => setActiveTab("water-heater")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === "water-heater"
                    ? "bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] text-white shadow-lg"
                    : "text-gray-700 hover:text-[#EA5D19]"
                }`}
              >
                Water Heater Services
              </button>
              <button
                onClick={() => setActiveTab("plumbing")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === "plumbing"
                    ? "bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] text-white shadow-lg"
                    : "text-gray-700 hover:text-[#EA5D19]"
                }`}
              >
                Plumbing Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Link href={service.href} className="block group">
                    <div className="relative h-full rounded-3xl overflow-hidden card-elevated bg-white">
                      {/* Image Container */}
                      <div className="relative h-52 sm:h-80 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent z-10" />

                        {/* Badge */}
                        <div className="absolute top-4 right-4 z-20">
                          <div className="rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-3 py-1.5 shadow-lg badge-pulse">
                            <p className="text-xs font-bold text-white">{service.badge}</p>
                          </div>
                        </div>

                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-6 w-6 text-[#EA5D19]" />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 space-y-4 text-left">
                        <h3 className="text-2xl font-bold text-[#11110E] mb-1 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFF5F0] flex items-center justify-center">
                                <Check className="h-3 w-3 text-[#EA5D19]" />
                              </div>
                              <span className="text-sm text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-2">
                          <div className="inline-flex items-center gap-2 text-[#EA5D19] font-bold group-hover:gap-3 transition-all">
                            <span>Learn More</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Hover Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
