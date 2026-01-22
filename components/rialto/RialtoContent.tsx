"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { Breadcrumb } from "@/components/Breadcrumb";

export function RialtoContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Service Areas", href: "/#service-areas" },
          { label: "Rialto" },
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-white text-sm font-semibold mb-4">
                Serving Rialto, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Rialto – Plumbing & Water Heater Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Top‑Rated Plumbing Company in Rialto, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Water Heater SOS, we're more than just plumbers—we're your Rialto neighbors! From the busy streets near the Renaissance Marketplace to the quiet homes around Frisbie Park, we've earned a name for showing up quickly and fixing things right. We proudly help homes and businesses in Rialto with reliable, licensed plumbing solutions tailored to local needs. Whether it's a sudden leak or a much‑needed upgrade, we're here to get your plumbing working perfectly, often on the same day.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/wh-sos-service-rep.webp"
                  alt="Professional plumber in Rialto"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We've handled everything from clogged drains in downtown Rialto to <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water‑heater breakdowns</Link> in the north end of town. Our licensed and insured plumbers are ready for any surprise, offering emergency services for urgent problems and warranties for peace of mind. Our mix of fast, trustworthy work keeps customers happy and recommending us.
            </p>
            <p>
              Our services include <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater fixes</Link> that repair leaks or heating problems in gas, electric or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link> to restore hot water quickly. We offer <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain clearing</Link> to unclog sinks, tubs or showers blocked by hair or grease for smooth water flow. Our <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet fixes or upgrades</Link> stop leaky faucets or install new ones to save water and cut costs.
            </p>
            <p>
              We handle <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet repairs or installs</Link>, fixing running or non‑flushing toilets and installing new ones. Our pipe leak repairs mend leaky pipes to prevent water damage, while sewer line clearing removes blockages in sewer lines to stop smelly backups. We use <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link> with high‑tech tools to find hidden leaks in walls or under slabs. For older homes, our <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repiping</Link> replaces old pipes with new ones for cleaner, faster‑flowing water. We also handle shower upgrades or repairs, installing or fixing showers, toilets or faucets for a fresh, modern look.
            </p>
          </div>
        </div>
      </section>

      {/* Plumbing Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Services We Provide in Rialto
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions for your home
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Water Heater Fixes",
                description: "Repairs leaks or heating problems in gas, electric or tankless water heaters",
                icon: Wrench,
                link: "/water-heater-services",
              },
              {
                title: "Drain Clearing",
                description: "Unclogs sinks, tubs or showers blocked by hair or grease",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Faucet Fixes or Upgrades",
                description: "Stops leaky faucets or installs new ones to save water",
                icon: Droplets,
                link: "/faucet-repair-replacement",
              },
              {
                title: "Toilet Repairs or Installs",
                description: "Fixes running or non‑flushing toilets and installs new ones",
                icon: Wrench,
                link: "/toilet-repair-replacement",
              },
              {
                title: "Leak Detection",
                description: "Uses high‑tech tools to find hidden leaks in walls or under slabs",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Whole‑House Repiping",
                description: "Replaces old pipes with new ones for cleaner, faster‑flowing water",
                icon: Wrench,
                link: "/whole-house-repipe",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <div className="h-full rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-200">
                    <div className="mb-4 inline-flex rounded-lg bg-[#EA5D19] p-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Water Heater Issues Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Common Issues with Water Heaters
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Rumbling, Popping, Pinging or Banging Noises",
                description: "Sediment buildup or a faulty heating element may cause loud noises. Flushing the tank and replacing the heating element can resolve these issues.",
              },
              {
                title: "No Hot Water",
                description: "Often caused by a malfunctioning heating element in electric heaters or a faulty gas pilot, control valve or thermocouple in gas heaters.",
              },
              {
                title: "Low Water Pressure",
                description: "Reduces water delivery to faucets, showers and appliances, but fixing the underlying issue is straightforward.",
              },
              {
                title: "Water Leaks",
                description: "Leaks may result from loose connections, corrosion or a defective pressure‑relief valve, heating‑element bolts or tank.",
              },
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-gray-50 p-8 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-5 w-5 text-[#EA5D19]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Need Plumbing Services in Rialto?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert plumbers are ready to help. Call now for fast, reliable service!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+18006974014"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                (800) 697-4014
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="rialto" />
    </>
  );
}
