"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone, Menu, X, ChevronDown, Wrench, Droplet, Mail,
  Flame, Zap, FlaskConical, Waves, Filter,
  Wind, Gauge, Camera, Search, Home, AlertTriangle,
  Droplets, Settings, ShowerHead, Toilet, CircleDot,
  Trash2, Shield, Grip, WashingMachine, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const menuStructure = {
  "Water Heaters": {
    icon: Droplet,
    items: [
      { name: "Gas Water Heaters", href: "/gas-water-heaters", desc: "Traditional gas water heater installation", icon: Flame, featured: true },
      { name: "Tankless Water Heaters", href: "/tankless-water-heaters", desc: "Energy-efficient on-demand hot water", icon: Zap, featured: true },
      { name: "Water Heater Flush", href: "/water-heater-flush", desc: "Maintenance and flushing services", icon: Settings },
      { name: "Heat Pump Water Heaters", href: "/heat-pump-water-heaters", desc: "Eco-friendly heat pump systems", icon: FlaskConical },
      { name: "Water Filtration Systems", href: "/water-filtration", desc: "Whole-house water filtration", icon: Filter },
    ],
  },
  "Plumbing Services": {
    icon: Wrench,
    items: [
      { name: "Drain Cleaning", href: "/drain-cleaning", desc: "Fast, effective drain cleaning", icon: Wind, featured: true },
      { name: "Hydro-Jetting", href: "/hydro-jetting", desc: "High-pressure pipe cleaning", icon: Waves, featured: true },
      { name: "Sewer Camera Inspection", href: "/sewer-camera-inspection", desc: "Video pipe inspection", icon: Camera },
      { name: "Leak Detection Services", href: "/leak-detection-services", desc: "Advanced leak detection", icon: Search, featured: true },
      { name: "Whole-House Repipe", href: "/whole-house-repipe", desc: "Complete pipe replacement", icon: Home },
      { name: "Gas Leak Repair & Installation", href: "/gas-leak-repairs", desc: "Gas line services", icon: AlertTriangle },
      { name: "Water Service Repair & Replacement", href: "/water-service-repair-replacement", desc: "Water line services", icon: Droplets },
      { name: "Water Pressure Regulator Replacement", href: "/water-pressure-regulator-replacement", desc: "Pressure control", icon: Gauge },
      { name: "Shower Repair & Replacement", href: "/shower-repair-replacement", desc: "Shower installation", icon: ShowerHead },
      { name: "Toilet Repair & Replacement", href: "/toilet-repair-replacement", desc: "Toilet services", icon: Toilet },
      { name: "Faucet Repair & Replacement", href: "/faucet-repair-replacement", desc: "Faucet installation", icon: CircleDot },
      { name: "Garbage Disposal Repair & Replacement", href: "/garbage-disposal-repair-replacement", desc: "Disposal services", icon: Trash2 },
      { name: "Moen Flo Leak Detection Installation", href: "/moen-flo-installation", desc: "Smart water monitoring", icon: Shield },
      { name: "Sump Pump Repair & Replacement", href: "/sump-pump-repair-replacement", desc: "Sump pump services", icon: Grip },
      { name: "Plumbing Services", href: "/plumbing", desc: "All plumbing needs", icon: WashingMachine },
      { name: "Air Duct Cleaning", href: "/air-duct-cleaning", desc: "HVAC duct cleaning", icon: Sparkles },
    ],
  },
  Contact: {
    icon: Mail,
    items: [
      { name: "About", href: "/about", desc: "Learn about our team", icon: Mail },
      { name: "Free Online Quote", href: "/quote", desc: "Get instant pricing", icon: Phone },
    ],
  },
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        isScrolled
          ? "bg-[#11110E]/95 backdrop-blur-lg shadow-md border-white/10"
          : "bg-gradient-to-r from-[#11110E] via-[#1a1917] to-[#11110E] border-white/10"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/wh-sos-logo.webp"
              alt="Water Heater SOS Logo"
              width={120}
              height={15}
              className="h-15 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            {Object.entries(menuStructure).map(([category, { icon: Icon }]) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => setActiveMenu(category)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={`group flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-base font-semibold transition-all ${
                    activeMenu === category
                      ? 'bg-[#EA5D19] text-white'
                      : 'text-white hover:bg-white/10 hover:text-[#EA5D19]'
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-transform ${activeMenu === category ? 'scale-110' : ''}`} />
                  {category}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    activeMenu === category ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>
            ))}

            {/* Primary CTA */}
            <a
              href="tel:8006974014"
              className="ml-4 flex items-center gap-2 rounded-xl bg-[#EA5D19] px-5 py-2.5 text-base font-semibold text-white shadow-md hover:bg-[#d45416] hover:shadow-lg transition-all whitespace-nowrap btn-ripple shine-effect group"
            >
              <Phone className="h-4 w-4 shrink-0 group-hover:wiggle transition-transform" />
              (800) 697-4014
            </a>
          </nav>

          {/* Full-Width Premium Mega Menu */}
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="fixed left-0 right-0 top-21 z-40 w-full border-b border-white/10 bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] shadow-2xl backdrop-blur-lg"
                onMouseEnter={() => setActiveMenu(activeMenu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Branding Section - Left Column */}
                      <div className="lg:col-span-3 flex flex-col justify-between border-r border-white/10 pr-8">
                        <div>
                          <div className="space-y-3 -ml-12">
                            <div className="flex items-start gap-3">
                              <div className="rounded-lg bg-[#EA5D19]/20 p-2">
                                {(() => {
                                  const Icon = menuStructure[activeMenu as keyof typeof menuStructure].icon;
                                  return <Icon className="h-5 w-5 text-[#EA5D19]" />;
                                })()}
                              </div>
                              <div>
                                <h3 className="font-bold text-lg text-white! mb-1">
                                  {activeMenu}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                  {activeMenu === "Water Heaters"
                                    ? "Expert installation, repair, and maintenance for all types of water heating systems."
                                    : activeMenu === "Plumbing Services"
                                    ? "Comprehensive plumbing solutions for your home or business. From emergency repairs to expert installations, our licensed technicians deliver fast, reliable service backed by years of industry experience."
                                    : "Get in touch with our expert team for fast, reliable service."}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Contact in Brand Section */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="space-y-2">
                            <div className="relative overflow-hidden rounded-xl shadow-2xl my-10">
                                          <Image
                                            src="/wh-sos-service-rep.webp"
                                            alt="Water Heater SOS professional technician"
                                            width={600}
                                            height={400}
                                            className="h-auto w-full object-cover"
                                          />
                                        </div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Need Help Now?
                            </p>
                            <a
                              href="tel:8006974014"
                              className="flex items-center gap-2 text-[#EA5D19] font-bold text-lg hover:text-[#FF6E2E] transition-colors"
                            >
                              <Phone className="h-5 w-5" />
                              (800) 697-4014
                            </a>
                            <p className="text-xs text-gray-500">
                              Available 24/7 for emergencies
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items - Right Columns */}
                      <div className="lg:col-span-9 relative">
                        <div className="grid auto-rows-min grid-cols-2 gap-4 md:grid-cols-3">
                          {menuStructure[activeMenu as keyof typeof menuStructure].items.map((item, index) => {
                            const ItemIcon = 'icon' in item ? item.icon : null;
                            const isFeatured = 'featured' in item && item.featured;

                            return (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.03, duration: 0.2 }}
                              >
                                <Link
                                  href={item.href}
                                  className={`group relative flex items-start gap-3 rounded-xl px-4 py-4 transition-all h-full border hover-lift ${
                                    isFeatured
                                      ? 'border-[#EA5D19]/40 bg-[#EA5D19]/10 backdrop-blur-sm shadow-sm'
                                      : 'border-white/10 hover:border-[#EA5D19]/40 hover:bg-white/5'
                                  }`}
                                >
                                  {isFeatured && (
                                    <div className="absolute -top-2 -right-2 z-10">
                                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-2 py-0.5 text-[10px] font-bold text-white shadow-md badge-pulse">
                                        POPULAR
                                      </span>
                                    </div>
                                  )}

                                  {ItemIcon && (
                                    <div className={`flex-shrink-0 rounded-lg p-2 transition-all duration-300 ${
                                      isFeatured
                                        ? 'bg-[#EA5D19] text-white'
                                        : 'bg-white/10 text-[#EA5D19] group-hover:bg-[#EA5D19] group-hover:text-white group-hover:scale-110'
                                    }`}>
                                      <ItemIcon className="h-4 w-4" />
                                    </div>
                                  )}

                                  <div className="flex-1 min-w-0">
                                    <span className={`block text-sm font-semibold transition-colors leading-tight ${
                                      isFeatured
                                        ? 'text-white'
                                        : 'text-white group-hover:text-[#EA5D19]'
                                    }`}>
                                      {item.name}
                                    </span>
                                    {'desc' in item && item.desc && (
                                      <span className="mt-1 block text-xs text-gray-400 leading-snug">
                                        {item.desc}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>

                        {/* Logo in Bottom Right */}
                        <div className="absolute bottom-0 right-0 opacity-30 hover:opacity-60 transition-opacity">
                          <Link href="/" className="inline-block">
                            <Image
                              src="/wh-sos-logo.webp"
                              alt="Water Heater SOS"
                              width={100}
                              height={33}
                              className="h-auto w-auto brightness-0 invert"
                            />
                          </Link>
                        </div>

                        {/* Bottom CTA Bar */}
                        <div className="mt-10 pt-8">
                          <div className="divider-gradient mb-8"></div>
                          <div className="relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] p-6 shadow-xl">
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="text-white relative z-10">
                              <p className="font-bold text-lg mb-1 flex items-center gap-2">
                                Ready to Get Started?
                                <span className="inline-block animate-bounce-in">✨</span>
                              </p>
                              <p className="text-sm text-white/90">
                                Schedule your service today and experience 5-star service
                              </p>
                            </div>
                            <div className="flex gap-3 shrink-0 relative z-10">
                              <a
                                href="tel:8006974014"
                                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#EA5D19] hover:bg-gray-50 transition-all shadow-md hover:shadow-xl whitespace-nowrap hover-lift"
                              >
                                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                                Call Now
                              </a>
                              <Link
                                href="/quote"
                                className="group flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all whitespace-nowrap relative overflow-hidden"
                              >
                                <span className="relative z-10">Get Free Quote</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl hover:bg-white/10 text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 p-0">
              <div className="flex h-full flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between border-b border-white/10 bg-[#11110E] p-6">
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    <Image
                      src="/wh-sos-logo.webp"
                      alt="Water Heater SOS Logo"
                      width={120}
                      height={40}
                      className="h-auto w-auto brightness-0 invert"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg p-2 hover:bg-white/10 transition-colors text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto p-6 bg-[#11110E]">
                  {Object.entries(menuStructure).map(([category, { icon: Icon, items }]) => (
                    <div key={category} className="mb-6">
                      <div className="mb-3 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-[#EA5D19]" />
                        <h3 className="text-lg font-bold text-white">{category}</h3>
                      </div>
                      <div className="space-y-1 pl-7">
                        {items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-[#EA5D19] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Footer Logo */}
                <div className="border-t border-white/10 bg-[#11110E] px-6 pt-4 pb-2 flex justify-center">
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    <Image
                      src="/wh-sos-logo.webp"
                      alt="Water Heater SOS"
                      width={80}
                      height={26}
                      className="h-auto w-auto opacity-40 brightness-0 invert"
                    />
                  </Link>
                </div>

                {/* Mobile CTA */}
                <div className="border-t border-white/10 bg-[#11110E] p-6 pt-4">
                  <a
                    href="tel:8006974014"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#EA5D19] px-6 py-4 text-lg font-semibold text-white shadow-lg"
                  >
                    <Phone className="h-5 w-5" />
                    (800) 697-4014
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
