"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";

export function GrandTerraceContent() {
  return (
    <>
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
                Serving Grand Terrace, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Grand Terrace – Plumbing & Water Heater Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Trusted for All Your Plumbing Needs in Grand Terrace, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Water Heater SOS is your trusted local plumbing company serving Grand Terrace and the surrounding areas. We specialize in <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater repairs</Link>, <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning</Link>, <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repairs</Link>, and <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater installations</Link>. Our experienced Grand Terrace plumbers are ready to solve any plumbing problem you have.
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
                  alt="Professional plumber in Grand Terrace"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              When your water heater stops working—whether it's leaking, making strange noises, or not providing hot water—we're here to fix it fast. We service and repair all types of water heaters, including <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas water heaters</Link>, electric models, and energy‑efficient <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link>. If your old water heater is beyond repair or you're looking to upgrade to a more efficient model, we also offer <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater installation services</Link>.
            </p>
            <p>
              Our Grand Terrace plumbing services cover much more than just water heaters. We provide <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning services</Link> to clear clogs in your kitchen sink, bathroom drains, and tub or shower caused by hair, grease, or soap scum. We also specialize in <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repair or replacement</Link> to stop those dripping faucets that waste water and increase your bills.
            </p>
            <p>
              If you're dealing with a toilet that won't flush, runs constantly, or leaks, our <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet repair or replacement</Link> service will get it working right. For hidden leaks in your walls, floors, or foundation, our advanced <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection services</Link> use high‑tech equipment to locate the problem without damaging your home. We also offer <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repipe</Link> services for older homes with outdated plumbing, improving water quality and flow. Plus, we install or repair showers, fix or replace <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposals</Link>, and offer <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water filtration systems</Link> to improve your tap water.
            </p>
            <p>
              Whatever plumbing issue you're facing in Grand Terrace, Water Heater SOS is ready to help. Call or text us at (800) 697‑4014 for fast, reliable service.
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
              Our Plumbing Services in Grand Terrace
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions to keep your home running smoothly
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Water Heater Repair",
                description: "Expert repairs for gas, electric, and tankless water heaters",
                icon: Wrench,
                link: "/water-heater-repair",
              },
              {
                title: "Drain Cleaning Services",
                description: "Clear clogs in sinks, tubs, and showers",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Faucet Repair or Replacement",
                description: "Stop dripping faucets and save on water bills",
                icon: Droplets,
                link: "/faucet-repair-replacement",
              },
              {
                title: "Toilet Repair or Replacement",
                description: "Fix running, clogged, or leaky toilets",
                icon: Wrench,
                link: "/toilet-repair-replacement",
              },
              {
                title: "Leak Detection Services",
                description: "Locate hidden leaks with advanced equipment",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Whole‑House Repipe",
                description: "Replace old pipes for better water quality",
                icon: Wrench,
                link: "/repiping",
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

      {/* Water Heater Problems Section */}
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
              Why Water Heaters Fail
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pressure Relief Valve Failure",
                description: "The pressure relief valve is a critical safety feature that releases excess pressure from the tank to prevent explosions. If the valve is faulty, corroded, or stuck closed, pressure can build up dangerously. Signs of a failing valve include leaking water near the valve, hissing sounds, or steam coming from the tank. A malfunctioning valve should be replaced immediately to prevent serious damage or injury.",
              },
              {
                title: "Corroded Anode Rod",
                description: "The anode rod is a sacrificial component inside the tank that attracts corrosive elements in the water, protecting the tank from rust. Over time, the rod corrodes and deteriorates. Once it's completely worn out, the tank itself begins to corrode, leading to leaks and tank failure. Regular inspection and replacement of the anode rod—typically every 3–5 years—can extend the life of your water heater.",
              },
              {
                title: "Thermal Expansion Issues",
                description: "When water heats up, it expands. In a closed plumbing system (one with a backflow preventer or check valve), this expansion has nowhere to go, causing excessive pressure in the tank. Over time, this can lead to leaks, ruptured pipes, or even tank failure. Installing an expansion tank can relieve this pressure and prevent damage to your water heater and plumbing system.",
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
              Need Plumbing Services in Grand Terrace?
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
      <FAQ category="grandTerrace" />
    </>
  );
}
