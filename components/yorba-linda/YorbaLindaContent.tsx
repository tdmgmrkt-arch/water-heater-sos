"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { Breadcrumb } from "@/components/Breadcrumb";

export function YorbaLindaContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Service Areas", href: "/#service-areas" },
          { label: "Yorba Linda" },
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
                Serving Yorba Linda, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Yorba Linda – Plumbing & Water Heater Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Your Plumbing Pros in Yorba Linda, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Water Heater SOS is Yorba Linda's trusted local plumbing team. We prioritize your comfort with fast, reliable service and fair prices, handling everything from <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater repairs</Link> and leaky pipes to major plumbing upgrades. Hot water is essential for daily tasks, so our team repairs gas, electric or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link> quickly.
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
                  alt="Professional plumber in Yorba Linda"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We recommend replacements for units older than seven years to avoid costly breakdowns. We also fix dripping <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucets</Link>, unclog sinks, repair running <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilets</Link>, restore water pressure, and detect sewer backups or slab leaks with advanced tools. Our team installs new faucets, toilets and showerheads, and sets up <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water softeners</Link> to combat hard water.
            </p>
            <p>
              Water Heater SOS restores hot water quickly, fixing both traditional tank and tankless heaters. We're experienced with major brands and handle everything from quick fixes to full replacements, emphasizing honest pricing and same‑day service. If a traditional tank heater fails, sediment buildup, broken elements or faulty thermostats could be the cause. Our plumbers flush tanks or replace parts and may recommend a new model for heaters older than seven years.
            </p>
            <p>
              For <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless systems</Link>, common problems include mineral scale, ignition failures or sensor errors. Our technicians use advanced tools to pinpoint issues and will repair or replace units as needed. We also provide <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning</Link> services and <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link> to keep your Yorba Linda home running smoothly.
            </p>
            <p>
              Whatever plumbing challenge you're facing in Yorba Linda, Water Heater SOS is ready to help. Call or text us at (800) 697‑4014 for fast, professional service.
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
              Our Plumbing Services in Yorba Linda
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
                link: "/water-heater-services",
              },
              {
                title: "Drain Cleaning",
                description: "Clear clogged drains and restore proper flow",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Faucet Repair or Replacement",
                description: "Fix dripping faucets and install new fixtures",
                icon: Droplets,
                link: "/faucet-repair-replacement",
              },
              {
                title: "Toilet Repair or Replacement",
                description: "Fix running toilets and install new units",
                icon: Wrench,
                link: "/toilet-repair-replacement",
              },
              {
                title: "Leak Detection",
                description: "Detect sewer backups and slab leaks with advanced tools",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Water Filtration Systems",
                description: "Install water softeners to combat hard water",
                icon: Droplets,
                link: "/water-filtration",
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
              Why Choose Water Heater SOS
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Convenient Same‑Day Service",
                description: "Same‑day appointments tackle issues like leaky pipes or broken water heaters fast.",
              },
              {
                title: "Locally Owned",
                description: "As a Yorba Linda‑based family business, we understand local plumbing needs such as hard water and aging pipes.",
              },
              {
                title: "Honest, Upfront Pricing",
                description: "Clear pricing is provided before work starts with costs explained for every job.",
              },
              {
                title: "Experienced, Professional Plumbers",
                description: "Licensed plumbers bring years of expertise to every job using top tools and techniques.",
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
              Need Plumbing Services in Yorba Linda?
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
      <FAQ category="yorbaLinda" />
    </>
  );
}
