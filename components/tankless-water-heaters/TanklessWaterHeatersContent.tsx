"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const breakdownReasons = [
  {
    title: "No Hot Water",
    description: "This could be due to a power supply issue, a problem with the water supply, or a clogged filter.",
  },
  {
    title: "Water is Too Hot",
    description: "This could be due to a malfunctioning thermostat, scaling or mineral buildup, or a clogged filter.",
  },
  {
    title: "Low Water Pressure",
    description: "This could be due to a problem with the water supply, a clogged filter, or an issue with the water pressure regulator.",
  },
  {
    title: "Unit is Too Noisy",
    description: "This could be due to loose components, a gas issue, or a problem with the fan or burner.",
  },
  {
    title: "Discolored Water or Unpleasant Odor",
    description: "This could be caused by sediment buildup in the unit, a malfunctioning burner, or a clogged air filter.",
  },
  {
    title: "Burner Doesn't Ignite",
    description: "This could be due to a problem with the gas supply, a clogged burner, or a malfunctioning ignition system.",
  },
  {
    title: "Water Temperature Fluctuation",
    description: "This could be due to a problem with the thermostat, scaling or mineral buildup, or a clogged filter.",
  },
  {
    title: "Leaks",
    description: "This could be due to a problem with the water supply, a clogged filter, or a damaged component.",
  },
];

const benefits = [
  {
    title: "Energy Efficiency",
    description: "According to the U.S. Department of Energy, tankless water heaters are up to 34% more energy-efficient than traditional tank-style water heaters. This means you can save money on energy bills while reducing your carbon footprint.",
  },
  {
    title: "Endless Hot Water",
    description: "You'll never run out of hot water with a tankless water heater. If you have a sufficient gas or electric supply, you can enjoy a continuous flow of hot water for showers, baths, and household chores.",
  },
  {
    title: "Space-Saving Design",
    description: "Tankless water heaters are compact and can be mounted on a wall, freeing up valuable floor space in your home.",
  },
  {
    title: "Longer Lifespan",
    description: "Tankless water heaters typically have a lifespan of 20 years or more, compared to 10-15 years for traditional tank-style water heaters.",
  },
  {
    title: "Easy Maintenance",
    description: "Tankless water heaters require minimal maintenance, and many models have self-cleaning features to prevent mineral buildup and extend the unit's life.",
  },
];

export function TanklessWaterHeatersContent() {
  return (
    <>
      <SetFooterCTA
        title="Need Tankless Water Heater Service?"
        description="Ready to upgrade to a tankless water heater or need repairs? Contact us today for expert service and installation."
        quoteLink="/quote?category=Water%20Heaters&service=Tankless%20Water%20Heater%20Installation%2FRepair"
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Tankless Water Heaters" },
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
                Premium Tankless Water Heater Service
              </span>
              <h1 className="text-2xl font-bold text-[#11110E] sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Tankless Water Heaters
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-8">
                Is your tankless water heater displaying an error code?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Tankless water heaters are great because they are energy efficient and will last considerably longer than traditional tank water heaters. However, many people neglect the yearly maintenance needed to ensure their unit's longevity.
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                If your tankless water heater needs repair, we can help! Our technicians are experts in working on electric and gas tankless water heaters, as well as all sorts of tankless water heater brands.
              </p>
              <Link
                href="/quote?category=Water%20Heaters&service=Tankless%20Water%20Heater%20Installation%2FRepair"
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
                src="/tankless-water-heater.webp"
                alt="Tankless water heater repair and installation service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Common Reasons Tankless Water Heaters Breakdown */}
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
        Common Reasons Tankless Water Heaters Breakdown
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {breakdownReasons.map((reason, index) => (
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
              {reason.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {reason.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Considering a Tankless Water Heater Section */}
<section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center mb-8 sm:mb-14"
    >
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
        Considering a Tankless Water Heater?
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-5 sm:mb-8" />

      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mx-auto">
        If you have a tank water heater and are trying to determine if a tankless water heater is the way to go, we can help. An energy-efficient tankless water heater can save you money in the long run; however, the upfront costs are more considerable. Below are some key benefits of installing a tankless water heater at your home.
      </p>
    </motion.div>

    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 max-w-6xl mx-auto">
      {benefits.map((benefit, index) => (
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
              {benefit.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="tanklessWaterHeaters" subtitle="Common questions about tankless water heaters" />
    </>
  );
}
