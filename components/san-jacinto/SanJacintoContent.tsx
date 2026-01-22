"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { Breadcrumb } from "@/components/Breadcrumb";

export function SanJacintoContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Service Areas", href: "/#service-areas" },
          { label: "San Jacinto" },
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
                Serving San Jacinto, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                San Jacinto – Plumbing & Water Heater Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Top‑Rated Plumbers in San Jacinto, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Water Heater SOS is a trusted local family business serving San Jacinto. We fix stubborn clogs, emergency leaks and more with honest, careful service. From routine maintenance such as <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposal repairs</Link> and shower fixes to major projects like <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repipes</Link>, our team arrives prepared to diagnose and solve any issue.
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
                  alt="Professional plumber in San Jacinto"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Most of our new customers come from referrals because we treat every home like our own and bring dedication to every call. Don't let plumbing headaches disrupt your day—Water Heater SOS offers reliable, friendly service to keep your home running smoothly. We handle everything from <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">clogged toilets</Link> to <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">slab leaks</Link> with care and fair prices.
            </p>
            <p>
              A broken <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater</Link> can disrupt your day, which is why we provide quick service, honest pricing and a clean workspace. We handle simple repairs and full replacements, and for heaters older than seven years we often recommend replacement to avoid repeated breakdowns and to save on energy costs. When a <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas water heater</Link> fails due to pilot‑light, thermostat or valve issues, we pinpoint the problem and explain it clearly.
            </p>
            <p>
              We also repair <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless units</Link> that save energy but can suffer from scale buildup or ignition problems. Our team diagnoses issues such as low flow or error codes using advanced tools. For older units (over seven years), frequent repairs may not be cost‑effective, so we recommend replacement. You'll receive clear pricing and honest advice, and we leave your home spotless after each job.
            </p>
            <p>
              Whatever plumbing challenge you're facing in San Jacinto, Water Heater SOS is ready to help. Call or text us at (800) 697‑4014 for fast, professional service.
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
              Our Plumbing Services in San Jacinto
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
                title: "Drain Cleaning",
                description: "Clear stubborn clogs throughout your home",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Leak Detection",
                description: "Locate slab leaks and emergency leaks quickly",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Toilet Repair",
                description: "Fix clogged and running toilets",
                icon: Wrench,
                link: "/toilet-repair-replacement",
              },
              {
                title: "Whole‑House Repipe",
                description: "Major plumbing upgrades for your home",
                icon: Wrench,
                link: "/repiping",
              },
              {
                title: "Garbage Disposal Repair",
                description: "Routine maintenance and repairs",
                icon: Wrench,
                link: "/garbage-disposal",
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
              Why Call Water Heater SOS?
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Flexible Scheduling",
                description: "Appointment times that fit your busy life, including mornings, evenings or weekends.",
              },
              {
                title: "Trusted Reputation",
                description: "Over 75% of jobs come from word‑of‑mouth referrals from satisfied homeowners.",
              },
              {
                title: "Clear Communication",
                description: "Plumbing issues explained in simple language with costs outlined before work begins.",
              },
              {
                title: "Guaranteed Workmanship",
                description: "Repairs backed by a satisfaction promise using top materials and proven methods.",
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
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-[#EA5D19]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
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
              Need Plumbing Services in San Jacinto?
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
      <FAQ category="sanJacinto" />
    </>
  );
}
