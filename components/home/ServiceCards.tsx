"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Zap, Check } from "lucide-react";

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
    title: "Electric Water Heaters",
    image: "/electric-water-heater.webp",
    href: "/electric-water-heaters",
    description: "Reliable and efficient electric heating for any home",
    icon: Zap,
    badge: "Easy Install",
    features: ["No Gas Required", "Simple Setup", "Consistent Heat"],
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
    <section id="services" className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16">
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
            Water Heater Services
          </h2>

          <p className="text-sm sm:text-base italic text-gray-500 max-w-3xl mx-auto">
            Gas, electric, tankless, and heat pump water heaters — repaired or replaced across the Inland Empire.
          </p>
        </motion.div>

        {/* Premium Service Cards Grid */}
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
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