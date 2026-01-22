"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const repairIssues = [
  {
    title: "Low Heat Output",
    description: "If your water isn't getting hot enough, it could be due to a faulty heating element or a thermostat issue.",
  },
  {
    title: "Excessive Noise",
    description: "Heat pump water heaters can sometimes be noisy, especially if installed improperly.",
  },
  {
    title: "Frequent Cycling",
    description: "If your water heater keeps turning on and off, it could be due to a faulty thermostat or a clogged air filter. This can cause high energy bills.",
  },
  {
    title: "Leaking",
    description: "Water leaking from your water heater can cause problems, from water damage to mold growth.",
  },
  {
    title: "Frozen Coils",
    description: "In colder climates like some parts of California, the coils in your heat pump water heater can freeze, causing it to stop working.",
  },
];

export function HeatPumpWaterHeatersContent() {
  return (
    <>
      <SetFooterCTA
        title="Need Heat Pump Water Heater Service?"
        description="Ready to upgrade to a heat pump water heater or need expert repairs? Contact us today for professional service and installation."
        quoteLink="/quote?category=Water%20Heaters&service=Heat%20Pump%20Water%20Heater%20Installation"
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Heat Pump Water Heaters" },
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
                Premium Heat Pump Water Heater Service
              </span>
              <h1 className="text-2xl font-bold text-[#11110E] sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Heat Pump Water Heaters
              </h1>
              <p className="text-sm sm:text-xl text-gray-600 mb-5 sm:mb-8">
                Is your heat pump water heater giving you trouble? We offer fast, reliable repairs to restore your home&apos;s hot water. And if you&apos;re ready to install a new heat pump water heater, our technicians can help you choose the right model and handle the full installation.
              </p>

              <Link
                href="/quote?category=Water%20Heaters&service=Heat%20Pump%20Water%20Heater%20Installation"
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
                src="/heat-pump.webp"
                alt="Heat pump water heater repair and installation service"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is a Heat Pump Water Heater Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-left"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
              What is a Heat Pump Water Heater?
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] rounded-full mb-5 sm:mb-8" />

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Heat pump water heaters work by pulling warmth from the air around them and using it to heat the water in the tank. This super-efficient process uses up to 73% less energy than a standard electric water heater. That means lower energy bills for you and cleaner emissions for the environment.
            </p>

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              These water heaters come in different sizes to fit your household&apos;s needs, from 40 to 80 gallons. The bigger the tank, the more hot water it can hold. Some even have smart features that let you control the temperature and schedule hot water usage from your phone.
            </p>

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
              Installing a heat pump water heater is more involved than a traditional tank water heater, but the long-term savings make it worth the effort. Plus, many utility companies offer rebates to help offset the cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Need to Repair Your Heat Pump Water Heater */}
      <section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-14"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
              Need to Repair Your Heat Pump Water Heater?
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {repairIssues.map((issue, index) => (
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
                    {issue.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {issue.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* California Ban on Gas Water Heater Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-left"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
              California Ban on Gas Water Heater
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] rounded-full mb-5 sm:mb-8" />

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              California is taking a significant step towards reducing its carbon footprint and improving air quality by phasing out the sale of gas-powered furnaces and water heaters by 2030. This decision is part of a broader strategy to combat climate change and meet federal air quality standards.
            </p>

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Gas appliances, including furnaces and water heaters, contribute significantly to air pollution, particularly nitrogen oxide (NOx) emissions. These emissions have been linked to various health issues, including respiratory problems and increased risks of heart attack, stroke, lung cancer, and premature death.
            </p>

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              By transitioning to more eco-friendly alternatives, such as heat pump water heaters, California aims to reduce these harmful emissions and improve public health.
            </p>

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Heat pump water heaters are more energy-efficient than traditional gas water heaters. They use electricity to move heat from one place to another, rather than generating heat by burning natural gas. This process is much more efficient, resulting in lower energy consumption and reduced greenhouse gas emissions.
            </p>

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
              By banning the sale of gas-powered furnaces and water heaters in 2030, California is encouraging the adoption of heat pump technology, which will help the state meet its ambitious climate goals and transition to a cleaner, more sustainable energy future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="heatPumpWaterHeaters" subtitle="Common questions about heat pump water heaters" />
    </>
  );
}
