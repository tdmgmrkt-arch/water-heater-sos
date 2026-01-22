"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const commonProblems = [
  {
    title: "Pilot Light",
    description: "The pilot light is the small flame that ignites the gas burner. If your pilot light is not staying lit, it could be due to a dirty or faulty thermocouple, a clogged orifice, or a problem with the gas supply.",
  },
  {
    title: "Thermostat",
    description: "The thermostat controls the water temperature; if it's not working correctly, you might get lukewarm or cold water. A plumber can replace the thermostat or adjust the settings to ensure your water heater operates at the right temperature.",
  },
  {
    title: "Sediment Buildup",
    description: "Over time, sediment can accumulate at the bottom of the tank, reducing efficiency and causing the water heater to work harder to heat the water. Flushing the water heater every year can help prevent this issue and ensure your water heater lasts longer.",
  },
  {
    title: "Corrosion/Rust",
    description: "Gas water heaters can rust, especially if the anode rod is not properly functioning. The anode rod is a rod that attracts corrosive elements in the water to prevent the tank from rusting. If the anode rod is depleted, the tank can start to erode, leading to leaks and the need for a new water heater.",
  },
  {
    title: "Old Age",
    description: "The average lifespan of a gas water heater is about 10-12 years. If your water heater is approaching or has surpassed this age, it might be time to consider a replacement. A new water heater can provide improved efficiency and reliability.",
  },
  {
    title: "Gas Leak",
    description: "If you smell gas near your water heater, it's a serious issue that requires immediate attention. A faulty gas valve, a damaged burner, or a problem with the gas line can cause a gas leak. Please turn off the gas supply and contact us immediately.",
  },
];

export function GasWaterHeatersContent() {
  return (
    <>
      <SetFooterCTA
        title="Need Gas Water Heater Service?"
        description="Don't let a broken gas water heater disrupt your daily routine. Contact us today for fast, reliable repair and replacement services."
        quoteLink="/quote?category=Water%20Heaters&service=Gas%20Water%20Heater%20Installation%2FRepair"
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Gas Water Heaters" },
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Premium Gas Water Heater Service
              </span>
              <h1 className="text-2xl font-bold text-[#11110E] sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Gas Water Heater Repair & Replacement
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-8">
                Is Your Gas Water Heater Leaking or Acting Up?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                One of the most frustrating things that can happen to a homeowner is to find out you have no hot water for your house.
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Gas water heaters are a vital part of any home, providing us with hot showers, clean dishes, and laundry. However, like any appliance, they can experience issues that require a plumber.
              </p>
              <Link
                href="/quote?category=Water%20Heaters&service=Gas%20Water%20Heater%20Installation%2FRepair"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sm:hidden">Get Free Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment Today!</span>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl"
            >
              <Image
                src="/gas-water-heater-controls.webp"
                alt="Gas water heater repair and replacement service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Common Problems with Gas Water Heaters */}
<section className="py-10 sm:py-14 lg:py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-14"
    >
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
        Common Problems with Gas Water Heaters
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {commonProblems.map((problem, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-[#11110E] flex-1 leading-snug">
              {problem.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {problem.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Gas Water Heater Controls Section */}
<section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center"
    >
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
        Gas Water Heater Controls
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-5 sm:mb-8" />

      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
        When your water heater has problems, it's essential to address them promptly to ensure the safety and efficiency of your home's hot water supply. Regular maintenance and inspections can help prevent issues and extend the lifespan of your water heater.
      </p>

      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
        If you're experiencing problems with your gas water heater, don't hesitate to contact us immediately.
      </p>
    </motion.div>
  </div>
</section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="gasWaterHeaters" subtitle="Common questions about gas water heaters" />
    </>
  );
}
