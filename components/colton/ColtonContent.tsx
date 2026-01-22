"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { Breadcrumb } from "@/components/Breadcrumb";

export function ColtonContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Service Areas", href: "/#service-areas" },
          { label: "Colton" },
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
                Serving Colton, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Colton – Plumbing & Water Heater Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Full‑Service Plumbing Company in Colton, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Water Heater SOS, we're a family‑run crew that understands how important it is to have plumbing that works without headaches. Our super‑friendly technicians are all about giving you five‑star service that's fast, affordable and done right every time. We're not just pros at fixing <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heaters</Link>—we handle all kinds of plumbing problems for homes and businesses, from leaky pipes to clogged drains.
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
                  alt="Professional plumber in Colton"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We know a broken water heater can mess up your day with cold showers or dirty dishes, so we repair or install gas, electric or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless models</Link> to get your hot water back quickly. But that's not all! We fix countless plumbing issues to keep your home or business running smoothly. Same‑day appointments solve problems fast, and our team uses the best tools and parts—plus we always clean up afterwards.
            </p>
            <p>
              Our Colton plumbing services include water heater repairs, <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning</Link>, <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repairs or installs</Link>, <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet fixes or upgrades</Link>, pipe leak repairs, sewer line clearing, <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link>, <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repiping</Link>, and shower repairs or installs.
            </p>
            <p>
              Water Heater SOS is your trusted local plumber specializing in water‑heater repair and installation. Contact us for prompt service, honest guidance and exceptional water‑heater solutions from start to finish. Our licensed Colton plumbing experts thoroughly evaluate the problem with your water heater and address any concerns you may have. We value your trust and will never push unnecessary services—you can count on us for the most cost‑effective solution. Don't hesitate to contact us today to restore the hot water you rely on.
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
              Colton Plumbing Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions for your home
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Water Heater Repairs",
                description: "Fast repair of gas, electric, and tankless water heaters",
                icon: Wrench,
                link: "/water-heater-services",
              },
              {
                title: "Drain Cleaning",
                description: "Professional drain cleaning and clog removal",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Faucet Repairs or Installs",
                description: "Fix leaky faucets or install new ones",
                icon: Droplets,
                link: "/faucet-repair-replacement",
              },
              {
                title: "Toilet Fixes or Upgrades",
                description: "Repair or install toilets for reliable performance",
                icon: Wrench,
                link: "/toilet-repair-replacement",
              },
              {
                title: "Leak Detection",
                description: "Advanced technology to find hidden leaks",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Whole‑House Repiping",
                description: "Replace old pipes for better water flow",
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

      {/* Common Water Heater Problems Section */}
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
              Common Reasons Water Heaters Have Problems
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Thermostat",
                description: "Regulates the water temperature. Faulty thermostats cause lukewarm or cold water. A skilled plumber can replace the thermostat or adjust its settings.",
              },
              {
                title: "Sediment Buildup",
                description: "Sediment accumulates at the bottom of the tank, reducing efficiency and forcing the heater to work harder. Annual flushing helps prevent this issue.",
              },
              {
                title: "Corrosion or Rust",
                description: "Gas water heaters are prone to rust if the anode rod malfunctions. A depleted anode rod allows the tank to corrode, leading to leaks and the need for replacement.",
              },
              {
                title: "Leaking Water Heater",
                description: "Leaks may occur from fittings, connections or the tank. A professional can diagnose the source and provide repairs or replacements to prevent further damage.",
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
              Need Plumbing Services in Colton?
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
      <FAQ category="colton" />
    </>
  );
}
