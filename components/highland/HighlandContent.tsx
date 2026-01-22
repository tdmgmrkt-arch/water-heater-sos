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
    title: "Water Heater Repair and Replacement",
    description: "Our skilled technicians in Highland are ready to repair or replace gas, electric, or tankless water heaters to get your hot water back in no time.",
    link: "/gas-water-heaters",
  },
  {
    title: "Faucet Repairs",
    description: "We fix dripping faucets that waste water and raise your bills.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Drain Cleaning",
    description: "Clear out clogged sinks, tubs, or showers filled with hair or grease.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Repairs",
    description: "Repair toilets that keep running or won't flush right.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Pipe Repairs",
    description: "Leaky pipes under your sink or in your yard can cause serious water damage, but we'll repair or replace them to protect your home.",
    link: "/plumbing",
  },
  {
    title: "Water Pressure Solutions",
    description: "If your water pressure is low and making daily tasks tough, we'll find the problem and get the flow strong again.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Services",
    description: "For nasty sewer line backups that cause smelly issues, we'll clear or fix them to keep your plumbing system smooth.",
    link: "/sewer-camera-inspection",
  },
  {
    title: "Fixture Installations",
    description: "Want to spruce up your kitchen or bathroom? We install sleek new faucets, toilets, or showerheads to give your space a fresh vibe.",
    link: "/plumbing",
  },
  {
    title: "Leak Detection Services",
    description: "Even if we need to do leak detection services to find the slab leak, we'll repair or replace leaky pipes to protect your home.",
    link: "/leak-detection-services",
  },
];

const whyChooseUs = [
  {
    title: "Upfront Pricing",
    description: "We offer some of the most affordable prices for quality repairs and water heater replacement in Highland, CA.",
  },
  {
    title: "No Time Wasting",
    description: "Your time is valuable! In most cases, our vans are stocked with the parts needed to replace or repair most water heaters. Our technicians won't waste your time by disappearing to the supply house for hours on end. Our vans are stocked and ready to get work done.",
  },
  {
    title: "Great Warranty",
    description: "We offer one of the best warranties in the industry. When we install a new water heater, we provide a three‑year parts and labor warranty, and the manufacturer provides a six‑year warranty on the water heater itself.",
  },
  {
    title: "Made in USA",
    description: "We install Bradford White gas and electric water heaters, proudly made in the USA. These are not the cheap store‑bought water heaters from large box home stores. Bradford White water heaters are made with quality parts and will last much longer, saving you money in the long run.",
  },
  {
    title: "Certified Technicians",
    description: "Most plumbers are certified by the major water heater brands; we are. Ninety percent of the work we do is fixing and installing water heaters, and we are great at it. We are efficient, skilled, and certified to work on most water heater brands.",
  },
];

export function HighlandContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Service Areas", href: "/#service-areas" },
          { label: "Highland" },
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
                Highland Plumbing Experts
              </span>

              <h1 className="text-3xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Highland Plumbers & Water Heater Repair
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Your Go‑To Plumbing Team in Highland, CA
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Water Heater SOS in Highland, CA, we're a hometown crew dedicated to keeping your plumbing in top shape without ever taking shortcuts. Your comfort and safety are our top priorities, and we love serving our Highland neighbors with awesome service. While we're experts at fixing water heaters, we tackle all kinds of plumbing issues too, from <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leaky pipes</Link> to <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">clogged drains</Link>. Our friendly team is always ready to swoop in and fix any plumbing problem, big or small, to keep your home running like a charm. As part of the Highland community, we're proud to help our neighbors with reliable plumbing solutions.
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
                alt="Highland plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* FULL-WIDTH PARAGRAPH BLOCK */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Water heaters are key for cozy showers, clean dishes, and fresh laundry, but when they leak or stop heating, it can mess up your whole day. Our skilled technicians in Highland are ready to repair or replace <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas</Link>, electric, or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link> to get your hot water back in no time. But we do way more than that!
            </p>

            <p>
              Highland's hard water can clog pipes and wear out water heaters faster with mineral buildup, but we've got your back. We can install <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water softeners</Link> to reduce that buildup, helping your plumbing last longer and saving you from pricey repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why call Water Heater SOS?
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-full rounded-xl bg-white p-4 shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EA5D19] flex items-center justify-center shadow">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#11110E] flex-1 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-snug text-[15px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plumbing Services Section */}
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
              Highland Plumbing Services
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
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
      <FAQ category="highland" />
    </>
  );
}
