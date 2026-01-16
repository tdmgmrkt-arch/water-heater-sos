"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";

const plumbingServices = [
  {
    title: "Water Heater Repairs and Installations",
    description: "Got a water heater that's not heating or making weird noises? We repair or replace gas, electric, and tankless water heaters.",
    link: "/gas-water-heaters",
  },
  {
    title: "Faucet Fixes",
    description: "A leaky faucet can drive you nuts and waste water. We fix or replace them to stop drips and save you money.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Drain Cleaning",
    description: "Clogged sinks or showers from hair or grease? We clear out blockages to keep drains running smoothly.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Repairs",
    description: "A toilet that keeps running or won't flush right is a hassle. We repair valves and parts to get it back to normal.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Pipe Repairs",
    description: "Leaky or burst pipes can cause big damage. We fix or replace them to protect your home.",
    link: "/plumbing",
  },
  {
    title: "Low Water Pressure Repairs",
    description: "Weak water flow can make showers and dishwashing tough. We find the cause and fix it.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Fixes",
    description: "A backed‑up sewer is a messy nightmare. We clear or repair lines to keep things flowing.",
    link: "/sewer-camera-inspection",
  },
  {
    title: "Plumbing Fixture Installations",
    description: "Want a new sink, toilet, or showerhead? We install top‑quality fixtures to upgrade your home.",
    link: "/plumbing",
  },
  {
    title: "Leak Detection Services",
    description: "Got a slab leak or a leak in the walls? Our expert plumbers will find it with our advanced leak detection equipment.",
    link: "/leak-detection-services",
  },
  {
    title: "Whole House Repipes",
    description: "Old pipes causing constant problems? We can replace all the pipes in your home for long-term reliability.",
    link: "/whole-house-repipe",
  },
];

const commonProblems = [
  {
    title: "Lack of Hot Water",
    description: "One of the most common issues is a sudden lack of hot water. This could be due to a faulty heating element, a malfunctioning thermostat, or a pilot light that has gone out.",
  },
  {
    title: "Water Leaks",
    description: "Leaks can occur for a variety of reasons, such as a loose connection, a crack in the tank, or a faulty valve. If not addressed, leaks not only waste water but can also lead to more serious issues. It's essential to seek professional assistance to address these issues effectively.",
  },
  {
    title: "Unusual Noises",
    description: "Gas water heaters can make various noises, including popping, rumbling, or hissing sounds. These noises can indicate issues like sediment buildup in the tank or a failing heating element.",
  },
  {
    title: "Inconsistent Water Temperature",
    description: "If your water heater produces water that is too hot or not hot enough, it could be due to a faulty thermostat or a problem with the gas supply.",
  },
  {
    title: "Rusty Water",
    description: "If the water from your hot water taps is rusty or discolored, it could be a sign of corrosion in the tank. This can be a severe issue, leading to leaks and even tank failure.",
  },
  {
    title: "Pilot Light Issues",
    description: "The pilot light in your gas water heater should be a steady blue flame. It could indicate a problem with the gas supply or the burner if it's yellow or orange.",
  },
];

export function BeaumontContent() {
  return (
    <>
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
                Beaumont Plumbing Experts
              </span>

              <h1 className="text-3xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Beaumont Plumbers & Water Heater Repair
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Need a plumbing company in Beaumont, CA?
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Nobody likes a cold shower or a sink full of dirty dishes because the hot water's gone out. At Water Heater SOS, we know how annoying it is when your <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater</Link> leaks or won't stay lit, and we're here to fix it fast! But we don't stop at water heaters. We are your go‑to team for all kinds of plumbing repairs and installations. From <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">clogged drains</Link> to <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">leaky faucets</Link>, we handle every plumbing issue with care to keep your home running smoothly.
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
                alt="Beaumont plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* FULL-WIDTH PARAGRAPH BLOCK */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Water heaters are super important for hot showers, clean clothes, and sparkling dishes, but they can break down and cause big headaches. Whether your <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas</Link>, electric, or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater</Link> is leaking or not heating up, our skilled technicians in Beaumont can repair or replace it to get your hot water back.
            </p>

            <p>
              Sometimes, you already know that your water heater is old and not worth fixing. In those cases, it is more cost‑effective to get a new water heater installed than to waste money on costly repairs. Our experienced team of Beaumont plumbers can install your new water heater and provide code upgrades if needed. Whether you need a tank or a tankless water heater, our installation team has you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Plumbing Services Section */}
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
              Our Beaumont Plumbing Services
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Here's what we can fix or install for you
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

      {/* Common Water Heater Problems Section */}
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
              Common Water Heater Problems
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
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
      <FAQ category="beaumont" />
    </>
  );
}
