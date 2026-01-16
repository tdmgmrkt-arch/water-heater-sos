"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";

const maintenanceItems = [
  {
    title: "Understanding Mineral Buildup",
    description: "Over time, minerals present in water, particularly in hard water areas, can accumulate inside the heater, forming lime scale. This buildup not only reduces the heater's efficiency but can also lead to blockages and overheating.",
  },
  {
    title: "Flushing the System",
    description: "It's advisable to flush your tankless water heater every six months to one year. The exact frequency depends on the water hardness in your area. The harder water means more frequent maintenance.",
  },
  {
    title: "Checking for Leaks",
    description: "Regularly inspect the unit for any signs of leaks. Even small leaks can lead to significant water damage over time. Check all connections, including the inlet and outlet pipes.",
  },
  {
    title: "Filter Maintenance",
    description: "Many tankless heaters have filters that need cleaning or replacement. This is crucial as filters can become clogged with debris, reducing water flow and heating efficiency.",
  },
  {
    title: "Ventilation Inspection",
    description: "If your model requires it, ensure that the ventilation system is clear of obstructions. Proper ventilation prevents carbon monoxide buildup, which is a safety concern.",
  },
  {
    title: "Temperature and Pressure Relief Valve",
    description: "Test this valve annually to ensure it's functioning correctly. This valve is crucial for safety, preventing the heater from overheating or building up too much pressure.",
  },
];

export function WaterHeaterFlushContent() {
  return (
    <>
      <SetFooterCTA
        title="Need Water Heater Maintenance?"
        description="Keep your water heater running efficiently with professional flushing services. Contact us today to schedule your maintenance."
        quoteLink="/quote?category=Water%20Heaters&service=Water%20Heater%20Flush%2FMaintenance"
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
              Premium Water Heater Flush Service
            </span>
              <h1 className="text-2xl font-bold text-[#11110E] sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Water Heater Flush
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-8">
                Professional Tankless Water Heater Flush!
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                A tankless water heater is designed to provide hot water only when needed, which can lead to significant energy savings compared to traditional tank heaters. However, regular maintenance, particularly flushing, is essential to maintain its efficiency and longevity.
              </p>
              <Link
                href="/quote?category=Water%20Heaters&service=Water%20Heater%20Flush%2FMaintenance"
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
                src="/placeholderimage.webp"
                alt="Water heater flush service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Benefits Section */}
<section className="py-10 sm:py-14 lg:py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center mb-8 sm:mb-14"
    >
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
        Why Flush Your Water Heater?
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-5 sm:mb-8" />
    </motion.div>

    <div className="grid gap-4 sm:gap-10 md:grid-cols-2 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
            <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-[#11110E] flex-1 leading-snug">
            Prevents Mineral Buildup
          </h3>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Over time, minerals from your water supply, like calcium and magnesium, can accumulate inside the heat exchanger of a tankless water heater. This buildup, often called limescale, can reduce the unit's efficiency by insulating the heat exchanger, making it harder to heat the water. Flushing the system helps remove these deposits, ensuring your heater operates at peak performance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
            <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-[#11110E] flex-1 leading-snug">
            Extends Lifespan
          </h3>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Regular maintenance, including flushing, can significantly extend the life of your tankless water heater. Neglecting this maintenance can lead to mineral buildup, increasing wear and tear on the internal components, and potentially causing your unit to fail sooner. By preventing these issues, you can ensure your unit lasts up to 20 years or more.
        </p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center mt-8 sm:mt-12"
    >
      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        Our water heater flushing services are meticulously designed to eliminate sediment and mineral buildup, thereby enhancing the longevity and efficiency of your water heating system.
      </p>
    </motion.div>
  </div>
</section>

{/* What Maintenance Is Required Section */}
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
      What Maintenance Do Tankless Water Heaters Need?
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-5 sm:mb-8" />

      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mx-auto">
        Tankless water heaters are celebrated for their durability and efficiency, but like any mechanical system, they require regular maintenance to ensure optimal performance and longevity. Here's a detailed look at what maintenance is necessary:
      </p>
    </motion.div>

    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {maintenanceItems.map((item, index) => (
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
              {item.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="waterHeaterFlush" subtitle="Common questions about water heater flushing" />
    </>
  );
}
