"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";

export function OntarioContent() {
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
                Serving Ontario, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Ontario – Plumbing & Water Heater Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                5-Star Rated Plumbing Company in Ontario, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Water Heater SOS is a local Ontario plumbing company you can trust. We do it all—fixing <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heaters</Link>, clearing drains, repairing <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucets</Link>, and installing <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link>. Our friendly Ontario plumbers are ready to tackle any plumbing problem and get things running smoothly again.
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
                  alt="Professional plumber in Ontario"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              If your water heater is acting up—leaking, making weird noises, or leaving you with ice‑cold showers—our team can fix it fast. We handle <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas water heaters</Link>, electric models, and energy‑efficient <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link> that provide hot water on demand. We also offer <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater installation services</Link> to upgrade your old unit to a newer, more efficient model.
            </p>
            <p>
              But we don't stop at water heaters. Our Ontario plumbing services include <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning services</Link> to clear clogs in your kitchen sink, bathroom drains, and tub or shower. Slow drains or complete blockages from hair, grease, or soap scum are no match for our expert team. We also specialize in <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repair or replacement</Link>, stopping those annoying drips that waste water and hike up your bills.
            </p>
            <p>
              Need help with your toilet? We provide <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet repair or replacement</Link> services to fix running, clogged, or leaky toilets. If you've got a leaky pipe hiding in your walls or under your foundation, our advanced <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection services</Link> can pinpoint the problem without tearing up your home. For older homes with outdated plumbing, our <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repipe</Link> service replaces old pipes to improve water quality and flow. We also install or repair showers, fix or replace <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposals</Link>, and offer <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water filtration systems</Link> to remove contaminants and improve your tap water.
            </p>
            <p>
              Whatever plumbing issue you're facing, Water Heater SOS is here to help. Call or text us at (800) 697‑4014 for fast, reliable plumbing services in Ontario and the surrounding areas.
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
              Our Plumbing Services in Ontario
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions to keep your home running smoothly
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Water Heater Repair",
                description: "Fast repairs for gas, electric, and tankless water heaters",
                icon: Wrench,
                link: "/water-heater-repair",
              },
              {
                title: "Drain Cleaning Services",
                description: "Clear clogs in sinks, tubs, and showers caused by hair or grease",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Faucet Repair or Replacement",
                description: "Stop dripping faucets and save water on your bills",
                icon: Droplets,
                link: "/faucet-repair-replacement",
              },
              {
                title: "Toilet Repair or Replacement",
                description: "Fix running, clogged, or leaky toilets quickly",
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
                description: "Replace old pipes for better water quality and flow",
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
              Frequent Problems with Water Heaters
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sediment Buildup",
                description: "Over time, minerals in hard water settle at the bottom of the tank, forming sediment. This sediment reduces efficiency, causes rumbling noises, and can lead to leaks or premature tank failure. Regular flushing helps prevent this, but neglected tanks often need professional cleaning or replacement.",
              },
              {
                title: "Faulty Thermostat or Heating Element",
                description: "If your water isn't getting hot enough—or is scalding hot—the thermostat or heating element may be broken. A malfunctioning thermostat fails to regulate temperature properly, while a bad heating element can't heat the water at all. Both issues require a technician to diagnose and replace the faulty part.",
              },
              {
                title: "Leaking Tank or Connections",
                description: "Leaks from the tank itself usually mean corrosion has eaten through the metal, requiring a full replacement. Leaks at connections—like the inlet, outlet, or pressure relief valve—are often due to loose fittings or worn gaskets and can be repaired. Either way, leaks waste water and can cause serious damage to your home.",
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
              Need Plumbing Services in Ontario?
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
      <FAQ category="ontario" />
    </>
  );
}
