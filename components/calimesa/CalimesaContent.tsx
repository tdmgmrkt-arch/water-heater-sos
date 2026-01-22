"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { Breadcrumb } from "@/components/Breadcrumb";

const plumbingServices = [
  {
    title: "Water Heater Repair and Installation",
    description: "Got a water heater that's not heating or making weird noises? We repair or replace gas, electric, and tankless water heaters.",
    link: "/gas-water-heaters",
  },
  {
    title: "Faucet Repairs",
    description: "A leaky faucet can drive you nuts and waste water. We fix or replace them to stop drips and save you money.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Drain Cleaning",
    description: "Clogged sinks or showers from hair or grease? We clear out blockages to keep drains running smoothly.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Fixes",
    description: "A toilet that keeps running or won't flush right is a hassle. We repair valves and parts to get it back to normal.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Pipe Repairs",
    description: "Leaky or burst pipes can cause big damage. We fix or replace them to protect your home.",
    link: "/plumbing",
  },
  {
    title: "Low Water Pressure Help",
    description: "Weak water flow can make showers and dishwashing tough.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Services",
    description: "A backed‑up sewer is a messy nightmare. We clear or repair lines to keep things flowing.",
    link: "/sewer-camera-inspection",
  },
  {
    title: "Fixture Installations",
    description: "Want a new sink, toilet, or showerhead? We install top‑quality fixtures to upgrade your home.",
    link: "/plumbing",
  },
  {
    title: "Leak Detection Services",
    description: "Got a slab leak or a leak in the walls? Our expert plumbers will find it with our advanced leak detection equipment.",
    link: "/leak-detection-services",
  },
];

const commonProblems = [
  {
    title: "Pilot Light",
    description: "This is the small flame responsible for igniting the gas burner in your water heater. If it doesn't stay lit, possible causes include a malfunctioning or dirty thermocouple, a blocked orifice, or an issue with the gas delivery.",
  },
  {
    title: "Temperature Control",
    description: "The thermostat manages the water's heat; if it fails, you could encounter water that's only tepid or even cold. A professional can either recalibrate it or replace the thermostat to maintain the correct heating level.",
  },
  {
    title: "Sediment Accumulation",
    description: "Sediment gradually builds up inside the tank, which can impair efficiency and force the heater to overwork. Regularly flushing the tank, ideally annually, can mitigate this problem and extend the life of your water heater.",
  },
  {
    title: "Corrosion and Rust",
    description: "Rusting is a common issue for gas water heaters when the sacrificial anode rod wears out. This rod is designed to corrode instead of the tank, but once it's gone, the tank itself can begin to corrode, leading to leaks and the eventual need for a new unit.",
  },
  {
    title: "Age of the Appliance",
    description: "On average, a gas water heater lasts between 10 to 12 years. As it nears or exceeds this age, you should start thinking about a replacement to benefit from better performance and energy savings.",
  },
  {
    title: "Gas Leak",
    description: "Detecting a gas smell near your heater is a critical alert. It might stem from a defective gas valve, a compromised burner, or a problem within the gas line. If this occurs, turn off the gas immediately and get in touch with us for emergency assistance.",
  },
];

export function CalimesaContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Service Areas", href: "/#service-areas" },
          { label: "Calimesa" },
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* GRID: Left Content + Right Image */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
                Calimesa Plumbing Experts
              </span>

              <h1 className="text-3xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Calimesa Plumbers & Water Heater Repair
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Your Trusted Plumbing Experts in Calimesa, CA
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Hey there, Calimesa homeowners! At Water Heater SOS, we're all about keeping your home's plumbing in tip‑top shape. While we're pros at fixing and installing water heaters, we've got you covered for all kinds of plumbing repairs and installations too. From dripping faucets to <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">clogged drains</Link>, we tackle the most common plumbing problems with skill and care.
              </p>

              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Schedule an Appointment Today!
              </Link>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/wh-sos-service-rep.webp"
                alt="Calimesa plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* FULL-WIDTH PARAGRAPH BLOCK */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Water heaters are super important, and we're experts at keeping them running smoothly. If your <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas</Link>, electric, or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater</Link> is leaking or not giving you hot water, we'll figure out what's wrong and fix it fast. We also install new water heaters, including energy‑efficient ones that can cut down your utility bills. But that's not all we do! Our team handles tons of other plumbing jobs in Calimesa to keep your home working like it should.
            </p>

            <p>
              Calimesa's hard water can be rough on your plumbing. All those minerals can clog pipes, mess up faucets, and make your water heater wear out faster. We know how to handle it! We can install <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water softeners</Link> to reduce buildup, which helps your water heater and pipes last longer. This means fewer repairs and more savings for you. Plus, our energy‑efficient water heater options can lower your bills while keeping your showers nice and hot.
            </p>
          </div>
        </div>
      </section>

      {/* Common Plumbing Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6">
              Plumbing Services in Calimesa
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Here's a look at some of the top services we offer
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {plumbingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link
                  href={service.link}
                  className="flex flex-col h-full rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug group-hover:text-[#EA5D19] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Gas Water Heater Problems Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6">
              Common Problems on Gas Water Heaters
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              When your water heater, whether traditional or tankless, begins to show signs of trouble, immediate action is necessary to safeguard your household's comfort and the integrity of your hot water supply. Regular maintenance, including periodic flushes and temperature checks, plays a pivotal role in preventing common problems and can significantly extend the longevity of your water heater.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {commonProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full flex flex-col rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Schedule an Appointment Today!
            </h2>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Get Free Estimate
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="calimesa" />
    </>
  );
}
