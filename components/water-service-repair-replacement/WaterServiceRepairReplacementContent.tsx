"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Phone, Shield, Home, Wrench } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function WaterServiceRepairReplacementContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Water Service Repair & Replacement
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Expert Water Line Solutions for Your Home
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Experiencing low water pressure, soggy spots in your yard, or unexplainably high water bills?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                A damaged water service line can waste thousands of gallons, cause property damage, and disrupt your daily routine. Our expert plumbers repair and replace water service lines quickly to restore reliable water delivery.
              </p>
              <Link
                href="/quote?category=Leak%20%26%20Water%20Services&service=Water%20Service%20Repair%2FReplacement"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <span className="sm:hidden">Get Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
                <Image
                  src="/placeholderimage.webp"
                  alt="Professional water service line repair and replacement"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              Your water service line is the underground pipe that delivers fresh water from the city main to your home, providing water for drinking, cooking, bathing, and all daily needs. When this critical line develops leaks, corrosion, or blockages, it causes low water pressure, water waste, soggy yards, and potentially unsafe water quality. Our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> diagnose water service line problems and provide lasting repair or replacement solutions.
            </p>
            <p>
              Common signs of water service line damage include unexpectedly high water bills from hidden leaks, wet or muddy spots in your yard even during dry weather, discolored or cloudy water from dirt infiltration, consistently low water pressure throughout the house, and visible cracks in driveways or foundations from soil erosion. Older galvanized steel or lead pipes corrode over time, while tree roots can penetrate and damage lines. We also handle <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole-house repiping</Link> when multiple plumbing issues indicate system-wide problems.
            </p>
            <p>
              For minor damage, we perform spot repairs by excavating the affected section and installing new pipe segments. When pipes are extensively corroded, have multiple leaks, or consist of outdated materials like galvanized steel, full replacement with modern copper or Schedule 80 PVC provides long-term reliability and eliminates recurring problems. We work efficiently to minimize lawn disruption and restore water service promptly. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 lg:text-4xl mb-3 sm:mb-4">
              Why Choose Our Water Service Solutions?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Professional water line repair and replacement services
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Stop Water Waste",
                description: "Even small leaks in water service lines waste thousands of gallons monthly, spiking utility bills and harming the environment. We locate hidden leaks using advanced detection methods and repair them immediately. Eliminate water waste, reduce bills, and conserve precious water resources.",
                icon: Droplets,
              },
              {
                title: "Prevent Property Damage",
                description: "Leaking water service lines erode soil, damage foundations, crack driveways, and create dangerous sinkholes. We repair damaged lines before they cause structural damage to your home or landscape. Protect your property investment with professional water line services.",
                icon: Shield,
              },
              {
                title: "Restore Water Pressure",
                description: "Corroded or damaged service lines reduce water flow, causing weak pressure at all fixtures. Leaks divert water before it reaches your home, further reducing available pressure. New water service lines deliver strong, consistent water flow for showers, appliances, and outdoor use.",
                icon: Home,
              },
              {
                title: "Modern Materials",
                description: "Replace old galvanized steel or lead pipes with durable copper or Schedule 80 PVC that resists corrosion and lasts 50+ years. Modern materials provide clean water free from metal contamination. Avoid repeated repairs with reliable, long-lasting water service lines.",
                icon: Wrench,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-8 shadow-md sm:shadow-lg border border-gray-200"
              >
                <div className="mb-3 sm:mb-4 inline-flex rounded-lg bg-[#EA5D19] p-2 sm:p-3">
                  <benefit.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white lg:text-4xl mb-4 sm:mb-6">
              Get a Free Estimate Today!
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-5 sm:mb-8 max-w-2xl mx-auto">
              Don't let a leaking water service line waste water and damage your property. Contact us today for expert repair and replacement services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+18006974014"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                (800) 697-4014
              </Link>
              <Link
                href="/quote?category=Leak%20%26%20Water%20Services&service=Water%20Service%20Repair%2FReplacement"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ category="waterService" subtitle="Common questions about water service repair & replacement" />
    </>
  );
}
