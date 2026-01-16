"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplet, Zap, Search, Check } from "lucide-react";

const services = [
  {
    title: "Drain Cleaning",
    subtitle: "",
    image: "/drain-cleaning.webp",
    href: "/drain-cleaning",
    description: "Fast, effective drain cleaning",
    icon: Droplet,
    badge: "Popular",
    features: ["Fast Service", "Clear Clogs", "Prevent Backups"],
  },
  {
    title: "Hydro-Jetting",
    subtitle: "",
    image: "/hydro-jet.webp",
    href: "/hydro-jetting",
    description: "High-pressure pipe cleaning",
    icon: Zap,
    badge: "Professional",
    features: ["Deep Cleaning", "Long-lasting", "Eco-Friendly"],
  },
  {
    title: "Leak Detection Services",
    subtitle: "",
    image: "/leak-detection.webp",
    href: "/leak-detection-services",
    description: "Advanced leak detection",
    icon: Search,
    badge: "Advanced",
    features: ["Find Hidden Leaks", "Save Water", "Prevent Damage"],
  },
];

export function PlumbingServiceCards() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center mb-8 sm:mb-12 min-w-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF5F0] to-white px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4 border border-[#EA5D19]/10 shadow-sm"
          >
            <span className="text-xs sm:text-sm font-bold text-gradient">Popular Services</span>
          </motion.div>

          <h2 className="text-2xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Plumbing Services
          </h2>

          <p className="text-sm sm:text-lg leading-relaxed text-gray-600 max-w-7xl mx-auto">
            <span className="hidden sm:inline">From drain cleaning to leak detection, we provide comprehensive plumbing solutions to keep your home running smoothly. Our expert technicians use advanced tools and techniques to solve any plumbing challenge.</span>
            <span className="sm:hidden">Comprehensive plumbing solutions from drain cleaning to leak detection. Expert technicians ready to help.</span>
          </p>
        </motion.div>

        {/* Premium Service Cards Grid */}
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden card-elevated bg-white">
                    {/* Image Container with Zoom Effect */}
                    <div className="relative h-52 sm:h-80 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.subtitle ? `${service.title} ${service.subtitle}` : service.title}
                        fill
                        className="object-contain"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent z-10" />

                      {/* Badge */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                        <div className="rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-2 py-1 sm:px-3 sm:py-1.5 shadow-lg badge-pulse">
                          <p className="text-[10px] sm:text-xs font-bold text-white">{service.badge}</p>
                        </div>
                      </div>

                      {/* Icon Badge */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-4 w-4 sm:h-6 sm:w-6 text-[#EA5D19]" />
                        </div>
                      </div>

                      {/* Title Overlay */}
                      <div className=" absolute bottom-4 left-4 right-4 z-20">
                        {service.subtitle && (
                          <p className="text-sm text-[#EA5D19] font-medium">{service.subtitle}</p>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 text-left">
                    <h3 className="text-lg sm:text-2xl font-bold text-[#11110E] mb-1 leading-tight">
                          {service.title}
                        </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-1.5 sm:space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FFF5F0] flex items-center justify-center">
                              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#EA5D19]" />
                            </div>
                            <span className="text-xs sm:text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-1 sm:pt-2">
                        <div className="inline-flex items-center gap-2 text-[#EA5D19] font-bold text-sm sm:text-base group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
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

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <Link
            href="/plumbing-services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#EA5D19] bg-transparent px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <span className="sm:hidden">All Plumbing Services</span>
            <span className="hidden sm:inline">View All Plumbing Services</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
