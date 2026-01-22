"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Flame, Phone, Shield, Clock, Award } from "lucide-react";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { Breadcrumb } from "@/components/Breadcrumb";

const serviceCategories = [
  {
    title: "Water Heater Services",
    description: "Expert installation, repair, and maintenance for all types of water heaters including gas, electric, tankless, and heat pump models.",
    icon: Flame,
    services: [
      { name: "Gas Water Heaters", href: "/gas-water-heaters" },
      { name: "Tankless Water Heaters", href: "/tankless-water-heaters" },
      { name: "Electric Water Heaters", href: "/electric-water-heaters" },
      { name: "Heat Pump Water Heaters", href: "/heat-pump-water-heaters" },
      { name: "Water Heater Flush", href: "/water-heater-flush" },
    ],
  },
  {
    title: "Drain & Sewer Services",
    description: "Professional drain cleaning and sewer services to keep your plumbing system flowing smoothly and prevent costly backups.",
    icon: Droplets,
    services: [
      { name: "Drain Cleaning", href: "/drain-cleaning" },
      { name: "Hydro-Jetting", href: "/hydro-jetting" },
      { name: "Sewer Camera Inspection", href: "/sewer-camera-inspection" },
    ],
  },
  {
    title: "Leak & Water Services",
    description: "Advanced leak detection technology and comprehensive water service solutions to protect your home from water damage.",
    icon: Droplets,
    services: [
      { name: "Leak Detection", href: "/leak-detection-services" },
      { name: "Whole-House Repipe", href: "/whole-house-repipe" },
      { name: "Water Filtration", href: "/water-filtration" },
      { name: "Reverse Osmosis", href: "/reverse-osmosis" },
    ],
  },
  {
    title: "Fixture Services",
    description: "Expert repair and replacement for all plumbing fixtures throughout your home, from faucets to toilets.",
    icon: Wrench,
    services: [
      { name: "Faucet Repair & Replacement", href: "/faucet-repair-replacement" },
      { name: "Shower Repair & Replacement", href: "/shower-repair-replacement" },
      { name: "Toilet Repair & Replacement", href: "/toilet-repair-replacement" },
      { name: "Garbage Disposal", href: "/garbage-disposal-repair-replacement" },
      { name: "Sump Pump Services", href: "/sump-pump-repair-replacement" },
    ],
  },
  {
    title: "Gas & Safety Services",
    description: "Licensed gas line services and safety equipment installation to protect your home and family.",
    icon: Shield,
    services: [
      { name: "Gas Leak Repairs", href: "/gas-leak-repairs" },
      { name: "Moen Flo Installation", href: "/moen-flo-installation" },
      { name: "Water Pressure Regulator", href: "/water-pressure-regulator-replacement" },
    ],
  },
  {
    title: "Additional Services",
    description: "Comprehensive home services including air duct cleaning and water service line repair.",
    icon: Wrench,
    services: [
      { name: "Air Duct Cleaning", href: "/air-duct-cleaning" },
      { name: "Water Service Repair", href: "/water-service-repair-replacement" },
    ],
  },
];

export function ServiceContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services" },
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-white text-sm font-semibold mb-4">
              Full-Service Plumbing
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
              Our Plumbing Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Water Heater SOS provides comprehensive plumbing and water heater services throughout the Inland Empire. Our licensed technicians are available 24/7 for emergencies and scheduled appointments. From routine maintenance to major installations, we deliver quality workmanship with transparent pricing and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="tel:+18006974014"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                (800) 697-4014
              </Link>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {[
              { icon: Clock, title: "24/7 Emergency Service", desc: "Available around the clock" },
              { icon: Shield, title: "Licensed & Insured", desc: "Fully certified professionals" },
              { icon: Award, title: "Satisfaction Guaranteed", desc: "Quality you can trust" },
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="h-6 w-6 text-[#EA5D19]" />
                </div>
                <div>
                  <p className="font-bold text-[#11110E]">{badge.title}</p>
                  <p className="text-gray-600 text-sm">{badge.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Browse Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From water heaters to drain cleaning, we handle all your plumbing needs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#EA5D19] p-3">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="text-[#EA5D19] hover:underline flex items-center gap-2 text-sm font-medium"
                      >
                        <ArrowRight className="h-4 w-4" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate on any plumbing or water heater service. Our friendly team is ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+18006974014"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                (800) 697-4014
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands */}
      <TrustedBrands className="bg-white" />
    </>
  );
}
