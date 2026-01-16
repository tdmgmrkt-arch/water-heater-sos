"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function EastvaleContent() {
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
                Serving Eastvale, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Eastvale – Plumbing & Water Heater Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Your Trusted Plumbing Experts in Eastvale, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Water Heater SOS provides plumbing services to homes and businesses in Eastvale. Our team uses modern tools to fix plumbing problems quickly and has served Eastvale for years. Licensed plumbers handle any job—big or small—with care and professionalism to keep your plumbing systems running smoothly.
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
                  alt="Professional plumber in Eastvale"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We offer a full range of plumbing services, handling small fixes and large installations. Our <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection and repair</Link> service uses advanced tools to locate and fix water or gas leaks quickly, stopping damage and lowering your water bills. We provide <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning and maintenance</Link> with powerful equipment that clears clogged drains, and regular maintenance prevents future blockages and keeps your pipes in top shape.
            </p>
            <p>
              We install and repair traditional and <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link>, ensuring your systems run efficiently. Our team handles <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet clogs and repairs</Link>, unclogging toilets and fixing faulty valves or seals to prevent overflows. For homes with aging plumbing, our <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repipe services</Link> replace old or damaged pipes throughout your home to improve water flow and prevent leaks.
            </p>
            <p>
              We also specialize in shower repair and installation for leak‑free performance, and our <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposal repair and installation</Link> service repairs jammed or leaking disposals and installs new units for smooth kitchen sink operation. Our team locates and fixes slab leaks under foundations to prevent structural damage, keeping your Eastvale home safe and sound.
            </p>
            <p>
              Whatever plumbing issue you're facing in Eastvale, Water Heater SOS is ready to help. Call or text us at (800) 697‑4014 for fast, professional service.
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
              Our Plumbing Services in Eastvale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions to keep your home running smoothly
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Water Heater Installation & Repair",
                description: "Expert installation and repair for traditional and tankless water heaters",
                icon: Wrench,
                link: "/water-heater-repair",
              },
              {
                title: "Drain Cleaning & Maintenance",
                description: "Clear clogs and maintain your drains for optimal flow",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Leak Detection & Repair",
                description: "Advanced tools locate water or gas leaks quickly",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Toilet Repair & Replacement",
                description: "Fix clogs, faulty valves, and prevent overflows",
                icon: Wrench,
                link: "/toilet-repair-replacement",
              },
              {
                title: "Whole‑House Repipe",
                description: "Replace old pipes for improved water flow",
                icon: Wrench,
                link: "/repiping",
              },
              {
                title: "Garbage Disposal Service",
                description: "Repair or install garbage disposals for smooth operation",
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
              Why Call Water Heater SOS
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fast & Reliable Fixes",
                description: "Quick repairs for leaks, clogs, toilets, faucets and more to get your plumbing back to normal fast.",
              },
              {
                title: "Complete Home Solutions",
                description: "Handling small repairs and major upgrades such as drains, showers and pipes.",
              },
              {
                title: "Professional Repairs",
                description: "Fixing leaky showers and stiff faucets to restore comfort in your home.",
              },
              {
                title: "Efficient Repipe Solutions",
                description: "Replacement of old or damaged pipes for improved water flow and lasting reliability.",
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
              Need Plumbing Services in Eastvale?
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
      <FAQ category="eastvale" />
    </>
  );
}
