"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone, Droplets } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const benefits = [
  {
    title: "Superior Contaminant Removal",
    description: "Reverse osmosis systems remove up to 99% of dissolved contaminants, including lead, arsenic, fluoride, chlorine, nitrates, and other harmful substances that standard filters miss.",
  },
  {
    title: "Better Tasting Water",
    description: "RO systems produce crisp, clean-tasting water by removing the minerals and chemicals that cause unpleasant tastes and odors. Enjoy pure, refreshing water straight from your tap.",
  },
  {
    title: "Cost Savings",
    description: "Stop buying bottled water and reduce your environmental footprint. A reverse osmosis system provides unlimited purified water at a fraction of the cost of bottled alternatives.",
  },
  {
    title: "Healthier Cooking",
    description: "Cooking with purified RO water improves the taste of coffee, tea, soups, and other dishes. Your food will taste better without the interference of chlorine or mineral deposits.",
  },
  {
    title: "Protects Appliances",
    description: "Reverse osmosis water is gentle on ice makers, coffee machines, and other appliances. Extend the life of your equipment by reducing mineral buildup and scale formation.",
  },
];

export function ReverseOsmosisContent() {
  return (
    <>
      <SetFooterCTA
        title="Need Reverse Osmosis Installation?"
        description="Ready to enjoy pure, clean drinking water? Contact us today for a free consultation and professional RO system installation."
        quoteLink="/quote?category=Water%20Heaters&service=Water%20Filtration%20System%20Installation"
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Reverse Osmosis" },
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
                Advanced Water Purification
              </span>
              <h1 className="text-2xl font-bold text-[#11110E] sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Reverse Osmosis Systems
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-3 sm:mb-4">
                The gold standard in home water purification technology
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Reverse osmosis is a water purification process that uses a semipermeable membrane to remove ions, molecules, and larger particles from drinking water. This technology provides the highest level of water purification available for residential use, delivering bottled-water quality directly from your kitchen faucet.
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Our licensed plumbers install under-sink and whole-house reverse osmosis systems throughout the Inland Empire. We help homeowners choose the right system for their needs, providing expert installation and ongoing maintenance support.
              </p>
              <Link
                href="/quote?category=Water%20Heaters&service=Water%20Filtration%20System%20Installation"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sm:hidden">Get Free Quote</span>
                <span className="hidden sm:inline">Schedule Your Installation Today!</span>
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
                src="/water-filtration-system.webp"
                alt="Reverse osmosis water filtration system"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How RO Works Section */}
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
              How Reverse Osmosis Works
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Reverse osmosis systems force water through a semipermeable membrane with microscopic pores. These pores are small enough to allow water molecules to pass through while blocking contaminants, minerals, and impurities. The purified water collects in a storage tank, ready for use, while the concentrated contaminants are flushed away.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8">
            {[
              { step: "1", title: "Pre-Filtration", desc: "Sediment and carbon filters remove larger particles and chlorine to protect the RO membrane" },
              { step: "2", title: "RO Membrane", desc: "Water passes through the membrane, leaving contaminants behind at a molecular level" },
              { step: "3", title: "Post-Filtration", desc: "Final polishing filter ensures crisp, clean taste before water reaches your glass" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-gray-50 p-6 text-center border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#EA5D19] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#11110E] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-14"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
              Benefits of Reverse Osmosis
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Droplets className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
              Ready for Pure, Clean Drinking Water?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Our expert plumbers install reverse osmosis systems throughout the Inland Empire. Call today for a free consultation!
            </p>
            <Link
              href="tel:+18006974014"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              (800) 697-4014
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-white" />

      {/* FAQ Section */}
      <FAQ category="waterFiltration" subtitle="Common questions about reverse osmosis and water filtration" />
    </>
  );
}
