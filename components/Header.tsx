"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone, Menu, X, ChevronDown, Wrench, Droplet, Mail,
  Flame, Zap, FlaskConical, Waves, Filter,
  Wind, Gauge, Camera, Search, Home, AlertTriangle,
  Droplets, Settings, ShowerHead, Toilet, CircleDot,
  Trash2, Shield, Grip, WashingMachine, Sparkles,
  Ticket,
  Map,
  HomeIcon,
  MapIcon,
  TrendingUp,
  Snowflake,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

// ---------------------------------------------------------------------------
// Menu type definitions
// ---------------------------------------------------------------------------

interface MenuItem {
  name: string;
  href: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
  comingSoon?: boolean;
}

interface FlatCategory {
  icon: React.ComponentType<{ className?: string }>;
  items: MenuItem[];
  subcategories?: never;
}

interface SubcategoryCategory {
  icon: React.ComponentType<{ className?: string }>;
  subcategories: Record<string, MenuItem[]>;
  items?: never;
}

type MenuCategory = FlatCategory | SubcategoryCategory;

// ---------------------------------------------------------------------------
// Menu data
// ---------------------------------------------------------------------------

const menuStructure: Record<string, MenuCategory> = {
  "Water Heaters": {
    icon: Droplet,
    items: [
      { name: "Gas Water Heaters", href: "/gas-water-heaters", desc: "Traditional gas water heater installation", icon: Flame, featured: true },
      { name: "Electric Water Heaters", href: "/electric-water-heaters", desc: "Reliable electric heating solutions", icon: Zap, featured: true },
      { name: "Tankless Water Heaters", href: "/tankless-water-heaters", desc: "Energy-efficient on-demand hot water", icon: Zap },
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
      { name: "Leak Detection Services", href: "/leak-detection-services", desc: "Advanced leak detection", icon: Search, featured: true },
      { name: "Sewer Camera Inspection", href: "/sewer-camera-inspection", desc: "Video pipe inspection", icon: Camera },
      { name: "Whole-House Repipe", href: "/whole-house-repipe", desc: "Complete pipe replacement", icon: Home },
      { name: "Gas Leak Repair & Installation", href: "/gas-leak-repairs", desc: "Gas line services", icon: AlertTriangle },
      { name: "Water Service Repair & Replacement", href: "/water-service-repair-replacement", desc: "Water line services", icon: Droplets },
      { name: "Water Pressure Regulator Replacement", href: "/water-pressure-regulator-replacement", desc: "Pressure control", icon: Gauge },
      { name: "Shower Repair & Replacement", href: "/shower-repair-replacement", desc: "Shower installation", icon: ShowerHead },
      { name: "Toilet Repair & Replacement", href: "/toilet-repair-replacement", desc: "Toilet services", icon: Toilet },
      { name: "Faucet Repair & Replacement", href: "/faucet-repair-replacement", desc: "Faucet installation", icon: CircleDot },
      { name: "Garbage Disposal Repair & Replacement", href: "/garbage-disposal-repair-replacement", desc: "Disposal services", icon: Trash2 },
      { name: "Moen Flo Leak Detection Installation", href: "/moen-flo-smart-water-monitor", desc: "Smart water monitoring", icon: Shield },
      { name: "Sump Pump Repair & Replacement", href: "/sump-pump-repair-replacement", desc: "Sump pump services", icon: Grip },
      // Air Duct Cleaning moved to HVAC Services > Indoor Air Quality
    ],
  },
  "HVAC Services": {
    icon: Snowflake,
    subcategories: {
      "AC": [
        { name: "AC Repair", href: "/ac-repair", desc: "24/7 emergency AC repair", icon: Wrench, featured: true },
        { name: "AC Installation", href: "/ac-installation", desc: "New AC system installation", icon: Snowflake },
        { name: "AC Maintenance", href: "/ac-maintenance", desc: "Tune-ups & preventive care", icon: Settings },
        { name: "Mini-Split / Ductless AC", href: "/mini-split-installation", desc: "Ductless cooling solutions", icon: Wind },
        { name: "Thermostat Installation", href: "/thermostat-installation", desc: "Smart & programmable thermostats", icon: Gauge },
      ],
      "Heating": [
        { name: "Furnace Repair", href: "/furnace-repair", desc: "Fast furnace diagnostics & repair", icon: Flame, featured: true },
        { name: "Furnace Installation", href: "/furnace-installation", desc: "New furnace installation", icon: Flame },
        { name: "Furnace Maintenance", href: "/furnace-maintenance", desc: "Annual furnace tune-ups", icon: Settings },
        { name: "Heat Pump Systems", href: "/heat-pump-systems", desc: "Efficient heating & cooling", icon: Zap },
        { name: "HVAC Maintenance Plans", href: "/hvac-maintenance-plan", desc: "Scheduled preventive service", icon: Shield },
      ],
      "Indoor Air Quality": [
        { name: "Air Duct Cleaning", href: "/air-duct-cleaning", desc: "Whole-home duct cleaning", icon: Sparkles },
        { name: "Air Filtration Systems", href: "/air-filtration", desc: "Whole-home air purification", icon: Filter, featured: true },
        { name: "Whole-Home Humidifiers", href: "/whole-home-humidifier", desc: "Balanced indoor humidity", icon: Droplets },
        { name: "Whole-Home Dehumidifiers", href: "/whole-home-dehumidifier", desc: "Moisture control solutions", icon: Droplets },
      ],
    },
  },
  Contact: {
    icon: Mail,
    items: [
      { name: "Free Online Quote", href: "/quote", desc: "Get instant pricing", icon: Ticket, featured: true },
      { name: "About", href: "/about", desc: "Learn about our team", icon: Mail },
      { name: "Contact Us", href: "/contact", desc: "Get in touch with our team", icon: Phone },
      { name: "Blog", href: "/blog", desc: "Field notes & homeowner guides", icon: BookOpen },
      { name: "Discounts", href: "/discount-water-heaters", desc: "Get Water Heater Discounts", icon: Ticket },
      { name: "Service Area", href: "/service-area", desc: "Areas We Service", icon: MapIcon },
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
      
      {/* 🛑 OVERLAY 🛑 */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>
      {/* 🛑 END OVERLAY 🛑 */}

      <Container>
        <div className="flex h-32 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-60 flex items-center">
            <Image
              src="/sos-plumbing-and-air.svg"
              alt="SOS Plumbing and Air Logo"
              width={300}
              height={200}
              className="h-24 md:h-28 w-auto"
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
                // FIX APPLIED: Removed y-translation to prevent visual gap flash
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                // FIX APPLIED: Added visible orange top border (border-t-2 border-[#EA5D19]) to cover the microscopic rendering gap.
                className="fixed left-0 right-0 top-20 z-50 w-full border-t-2 border-[#EA5D19] bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] shadow-2xl backdrop-blur-lg"
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
                                    : activeMenu === "HVAC Services"
                                    ? "Complete HVAC solutions for your home. Expert installation, repair, and maintenance for AC, heating, and indoor air quality systems across the Inland Empire."
                                    : "Get in touch with our expert team for fast, reliable service."}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Contact in Brand Section */}
                        <div className="mt-4 pt-6 border-t border-white/10">
                          <div className="space-y-2">
                            <div className="relative overflow-hidden rounded-xl shadow-2xl my-10">
                                            <Image
                                              src="/wh-sos-service-rep.webp"
                                              alt="SOS Plumbing and Air professional technician"
                                              width={600}
                                              height={400}
                                              className="h-30 w-80 object-cover"
                                            />
                                          </div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Need Help Now?
                            </p>
                            <a
                              href="tel:8006974014"
                              className="flex items-center gap-2 text-[#EA5D19] font-bold text-lg hover:text-[#FF6E2E] transition-colors"
                            >
                              <Phone className="h-3 w-3" />
                              (800) 697-4014
                            </a>
                            <p className="text-xs text-gray-500">
                              Available 24/7 for emergencies
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items - Right Columns */}
                      <div className="lg:col-span-9 relative flex flex-col h-full">
                        {(() => {
                          const category = menuStructure[activeMenu as keyof typeof menuStructure];
                          const hasSubcategories = category.subcategories != null;

                          // ---- Flat layout (Water Heaters, Plumbing, Contact) ----
                          if (!hasSubcategories) {
                            const items = (category as FlatCategory).items;
                            return (
                              <div className="grid auto-rows-min grid-cols-2 gap-4 md:grid-cols-3 flex-1">
                                {items.map((item, index) => {
                                  const ItemIcon = item.icon;
                                  const isFeatured = item.featured === true;
                                  return (
                                    <motion.div
                                      key={item.href}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: index * 0.01, duration: 0.15 }}
                                      whileHover={{ y: -4 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <Link
                                        href={item.href}
                                        onClick={() => setActiveMenu(null)}
                                        className={`group relative flex items-start gap-3 rounded-xl px-4 py-4 h-full border
                                          transition duration-200 ease-out overflow-visible
                                          ${isFeatured
                                            ? "border-[#EA5D19]/40 bg-[#EA5D19]/10 backdrop-blur-sm shadow-sm hover:shadow-md"
                                            : "border-white/10 hover:border-[#EA5D19]/40 hover:bg-white/5 hover:shadow-md"
                                          }`}
                                      >
                                        {isFeatured && (
                                          <div className="absolute -top-4 left-[18px] z-20">
                                            <span className="inline-flex items-center gap-1 rounded-md px-3 py-0.5 text-[10px] font-semibold text-[#EA5D19] uppercase tracking-wide bg-[#fffdf9]/95 shadow-[0_0_6px_rgba(234,93,25,0.35)] border border-[#EA5D19]/30">
                                              <TrendingUp className="h-3 w-3 text-[#EA5D19]" />
                                              Popular
                                            </span>
                                          </div>
                                        )}
                                        <div className={`shrink-0 rounded-lg p-2 transition duration-200 ease-out ${isFeatured ? "bg-[#EA5D19] text-white" : "bg-white/10 text-[#EA5D19] group-hover:bg-[#EA5D19] group-hover:text-white group-hover:scale-105"}`}>
                                          <ItemIcon className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <span className={`block text-sm font-semibold transition-colors leading-tight ${isFeatured ? "text-white" : "text-white group-hover:text-[#EA5D19]"}`}>
                                            {item.name}
                                          </span>
                                          {item.desc && (
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
                            );
                          }

                          // ---- Subcategory layout (HVAC Services — 3 columns) ----
                          const subcategories = (category as SubcategoryCategory).subcategories;
                          return (
                            <div className="grid grid-cols-3 gap-6 flex-1">
                              {Object.entries(subcategories).map(([subcatName, items], colIndex) => (
                                <div key={subcatName}>
                                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#EA5D19]">
                                    {subcatName}
                                  </p>
                                  <div className="space-y-1">
                                    {items.map((item, index) => {
                                      const ItemIcon = item.icon;
                                      const isFeatured = item.featured === true;
                                      const isComingSoon = item.comingSoon === true;

                                      if (isComingSoon) {
                                        return (
                                          <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: (colIndex * 5 + index) * 0.015, duration: 0.15 }}
                                          >
                                            <div
                                              className="group flex items-center gap-3 rounded-xl px-3 py-3 border border-white/5 cursor-not-allowed opacity-50"
                                              aria-disabled="true"
                                            >
                                              <div className="shrink-0 rounded-lg p-1.5 bg-white/5 text-gray-600">
                                                <ItemIcon className="h-4 w-4" />
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                <span className="block text-sm font-semibold text-gray-500 leading-tight">
                                                  {item.name}
                                                </span>
                                              </div>
                                              <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                                                Soon
                                              </span>
                                            </div>
                                          </motion.div>
                                        );
                                      }

                                      return (
                                        <motion.div
                                          key={item.href}
                                          initial={{ opacity: 0, y: 8 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: (colIndex * 5 + index) * 0.015, duration: 0.15 }}
                                          whileHover={{ y: -2 }}
                                          whileTap={{ scale: 0.98 }}
                                        >
                                          <Link
                                            href={item.href}
                                            onClick={() => setActiveMenu(null)}
                                            className={`group relative flex items-center gap-3 rounded-xl px-3 py-3 border transition duration-200 ease-out
                                              ${isFeatured
                                                ? "border-[#EA5D19]/40 bg-[#EA5D19]/10 shadow-sm hover:shadow-md"
                                                : "border-white/10 hover:border-[#EA5D19]/40 hover:bg-white/5 hover:shadow-md"
                                              }`}
                                          >
                                            {isFeatured && (
                                              <div className="absolute -top-3.5 left-[14px] z-20">
                                                <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[9px] font-semibold text-[#EA5D19] uppercase tracking-wide bg-[#fffdf9]/95 shadow-[0_0_6px_rgba(234,93,25,0.35)] border border-[#EA5D19]/30">
                                                  <TrendingUp className="h-2.5 w-2.5" />
                                                  Popular
                                                </span>
                                              </div>
                                            )}
                                            <div className={`shrink-0 rounded-lg p-1.5 transition duration-200 ease-out ${isFeatured ? "bg-[#EA5D19] text-white" : "bg-white/10 text-[#EA5D19] group-hover:bg-[#EA5D19] group-hover:text-white group-hover:scale-105"}`}>
                                              <ItemIcon className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <span className={`block text-sm font-semibold leading-tight ${isFeatured ? "text-white" : "text-white group-hover:text-[#EA5D19]"}`}>
                                                {item.name}
                                              </span>
                                              {item.desc && (
                                                <span className="mt-0.5 block text-xs text-gray-400 leading-snug">
                                                  {item.desc}
                                                </span>
                                              )}
                                            </div>
                                          </Link>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        })()}



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
                                onClick={() => setActiveMenu(null)}
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

          {/* Mobile Menu Button (No change) */}
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
                      src="/sos-plumbing-and-air.svg"
                      alt="SOS Plumbing and Air Logo"
                      width={240}
                      height={160}
                      className="h-16 w-auto"
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
                  {Object.entries(menuStructure).map(([category, categoryData]) => {
                    const Icon = categoryData.icon;
                    const hasSubcategories = categoryData.subcategories != null;

                    return (
                      <div key={category} className="mb-6">
                        <div className="mb-3 flex items-center gap-2">
                          <Icon className="h-5 w-5 text-[#EA5D19]" />
                          <h3 className="text-lg font-bold text-white">{category}</h3>
                        </div>

                        {!hasSubcategories ? (
                          // Flat category (Water Heaters, Plumbing, Contact)
                          <div className="space-y-1 pl-7">
                            {(categoryData as FlatCategory).items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-[#EA5D19] transition-colors min-h-11"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          // Subcategory category (HVAC Services)
                          <div className="pl-7 space-y-4">
                            {Object.entries((categoryData as SubcategoryCategory).subcategories).map(([subcatName, items]) => (
                              <div key={subcatName}>
                                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#EA5D19]">
                                  {subcatName}
                                </p>
                                <div className="space-y-1">
                                  {items.map((item) => {
                                    if (item.comingSoon) {
                                      return (
                                        <div
                                          key={item.href}
                                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 cursor-not-allowed min-h-11"
                                          aria-disabled="true"
                                        >
                                          <span>{item.name}</span>
                                          <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-gray-600">
                                            Soon
                                          </span>
                                        </div>
                                      );
                                    }
                                    return (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-[#EA5D19] transition-colors min-h-11"
                                      >
                                        {item.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="border-t border-white/10 bg-[#11110E] p-6 pt-4">
                  <a
                    href="tel:8006974014"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#EA5D19] px-6 py-4 text-lg font-semibold text-white shadow-lg"
                  >
                    <Phone className="h-5 w-5" />
                    CALL NOW
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