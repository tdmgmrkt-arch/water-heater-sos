"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function LakeElsinoreContent() {
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
                Serving Lake Elsinore, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Lake Elsinore Plumbers & Water Heater Repair
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                5‑Star Plumbing Company in Lake Elsinore, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A dripping faucet or a clogged toilet can throw your whole day off track. When plumbing problems strike in Lake Elsinore, CA, Water Heater SOS is your go‑to solution. Our certified technicians handle everything from <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning</Link> and shower repairs to getting your <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposal</Link> back in action.
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
                  alt="Professional plumber in Lake Elsinore"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Noticed a leak? Whether it's water, gas, or even a hidden slab leak, our team jumps into action to safeguard your home. With advanced <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link> and expert <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">house repiping</Link> services, we ensure your plumbing stays reliable—no surprises. Plus, we explain everything in plain terms and tailor solutions to fit your home's needs.
            </p>
            <p>
              Your home deserves plumbing that just works. That's why Water Heater SOS offers emergency services, so a burst pipe doesn't turn into a disaster. From routine maintenance (to prevent leaks before they happen) to major installations, our fully stocked trucks mean we're ready for anything. We proudly serve Lake Elsinore and nearby areas like Menifee, Murrieta, Temecula, Canyon Lake, and Wildomar.
            </p>
            <p>
              A cold shower on a Lake Elsinore morning? No thanks. Our specialists get your hot water flowing again, fast. Water Heater SOS specializes in <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater repair</Link>, getting your hot water back fast. Our brand‑certified technicians know every major brand and fix problems with precision. For <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link>, we ensure efficient performance, cutting your energy bills and keeping water hot. You deserve a reliable system that works when you need it.
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
              Our Plumbing Services in Lake Elsinore
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions for your home
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Water Heater Repair",
                description: "Fast diagnosis and repair of all water heater issues",
                icon: Wrench,
                link: "/water-heater-repair",
              },
              {
                title: "Tankless Water Heaters",
                description: "Energy-efficient tankless systems for endless hot water",
                icon: Droplets,
                link: "/tankless-water-heaters",
              },
              {
                title: "Water Heater Installation",
                description: "Professional installation of gas and electric water heaters",
                icon: Droplets,
                link: "/water-heater-installation",
              },
              {
                title: "Drain Cleaning",
                description: "Professional drain cleaning and clog removal services",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Leak Detection",
                description: "Advanced leak detection technology to find hidden leaks",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Emergency Services",
                description: "24/7 emergency plumbing services when you need us most",
                icon: Phone,
                link: "/quote",
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

      {/* Why Choose Us Section */}
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
              Why Water Heater SOS?
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Upfront Pricing",
                description: "We provide some of the most competitive rates for high‑quality water heater repairs and replacements with no hidden fees, just honest pricing.",
              },
              {
                title: "No Time Wasting",
                description: "Your time matters! Our fully stocked service vans carry the essential parts for most repairs or replacements, so our technicians won't leave you waiting while they run to the supply store.",
              },
              {
                title: "Industry Leading Warranty",
                description: "We stand behind our work with one of the best warranties in the business. Every new water heater installation comes with a parts and labor warranty, and the manufacturer backs the unit itself with a six‑year warranty.",
              },
              {
                title: "Proudly American Made",
                description: "We install Bradford White gas and electric water heaters, which are crafted in the USA with top‑tier materials. Unlike the flimsy models you'll find at big‑box stores, these units are built to last.",
              },
              {
                title: "Expert Technicians",
                description: "Water heaters are our specialty, and 70% of our work revolves around them. Our team isn't just certified by major brands; they're highly skilled, efficient, and dedicated to flawless service.",
              },
              {
                title: "Fast Response Times",
                description: "Our team responds quickly to your call, often same‑day, to restore your comfort. We use advanced tools to diagnose issues accurately, avoiding guesswork and extra costs.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-gray-50 p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Need Plumbing Services in Lake Elsinore?
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
              Trusted Brands We Install & Service
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
            {[
              { name: "Rheem", logo: "/rheem_logo-1.webp" },
              { name: "Bradford White", logo: "/bradford-white-logo-1.webp" },
              { name: "Rinnai", logo: "/rinnai-1.webp" },
              { name: "Navien", logo: "/navien-1.webp" },
              { name: "Hajoca", logo: "/hajoca-1.webp" },
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative h-20 w-32 grayscale hover:grayscale-0 transition-all duration-200"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ category="lakeElsinore" />
    </>
  );
}
