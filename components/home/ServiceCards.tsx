"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Droplets, Zap, Check } from "lucide-react";

const services = [
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
    title: "Water Filtration System",
    image: "/water-filtration-system.webp",
    href: "/water-filtration",
    description: "Whole-house water purification for healthier living",
    icon: Droplets,
    badge: "Premium Choice",
    features: ["Cleaner Water", "Healthier Living", "Eco-Friendly"],
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
];

export function ServiceCards() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center mb-12 min-w-0" 
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF5F0] to-white px-4 py-2 mb-4 border border-[#EA5D19]/10 shadow-sm"
          >
            <span className="text-sm font-bold text-gradient">Popular Services</span>
          </motion.div>

          <h2 className="text-3xl font-bold text-[#11110E] sm:text-7xl lg:text-5xl mb-6">
            Water Heater Repair or Replacement
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 max-w-7xl mx-auto">
            Most people just want to repair or replace their existing water heater with the same type they currently have. In most cases, this makes the most sense and is a cost effective way to restore your hot water. However, we can discuss energy efficient options.
          </p>
        </motion.div>

        {/* Premium Service Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
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
                    {/* Image Container with Zoom Effect */}
                    <div className="relative h-85 overflow-hidden">
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
                          {service.title === "Gas Water Heaters" ? (
                            <>Gas Water Heaters</>
                          ) : (
                            service.title
                          )}
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
  );
}