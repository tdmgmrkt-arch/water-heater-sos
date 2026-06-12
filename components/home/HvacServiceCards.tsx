"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Flame, Wind, Check } from "lucide-react";

const hvacServices = [
  {
    title: "AC Services",
    image: "/acunit.webp",
    href: "/ac-services",
    description:
      "24/7 emergency AC repair, new installations, and seasonal maintenance for Inland Empire homes.",
    icon: Snowflake,
    badge: "Most Popular",
    features: [
      "Same-Day AC Repair",
      "SEER2 14.3+ Installs",
      "Mini-Split Ductless",
    ],
  },
  {
    title: "Heating Services",
    image: "/furnace.webp",
    href: "/heating-services",
    description:
      "Furnace repair, installation, and maintenance — plus modern heat pump systems with CA + IRA rebates.",
    icon: Flame,
    badge: "Heat Pump Ready",
    features: [
      "Furnace Repair & Install",
      "Heat Pump Rebates",
      "CO Safety Check",
    ],
  },
  {
    title: "Indoor Air Quality",
    image: "/airpurifier.webp",
    href: "/indoor-air-quality",
    description:
      "Whole-home filtration, UV-C purifiers, humidifiers, and duct cleaning — including wildfire smoke protection.",
    icon: Wind,
    badge: "Wildfire Ready",
    features: [
      "MERV 13+ Filtration",
      "UV-C Air Purifiers",
      "Whole-Home Humidifier",
    ],
  },
];

export function HvacServiceCards() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center mb-6 lg:mb-8 min-w-0"
        >
          <h2 className="text-2xl font-bold text-[#11110E] sm:text-3xl lg:text-4xl mb-2 lg:mb-3">
            HVAC Services
          </h2>

          <p className="text-sm sm:text-base italic text-gray-500 max-w-3xl mx-auto">
            AC, heating, and indoor air quality — serving Riverside &amp; San Bernardino counties.
          </p>
        </motion.div>

        {/* HVAC Service Cards Grid */}
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hvacServices.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link href={service.href} className="block group">
                  <div className="relative h-full rounded-3xl overflow-hidden card-elevated bg-white">
                    {/* Image */}
                    <div className="relative h-40 sm:h-56 overflow-hidden">
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
                          <p className="text-xs font-bold text-white">
                            {service.badge}
                          </p>
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
                            <span className="text-sm text-gray-700 font-medium">
                              {feature}
                            </span>
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
  );
}
