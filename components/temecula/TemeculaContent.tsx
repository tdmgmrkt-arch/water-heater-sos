"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { Breadcrumb } from "@/components/Breadcrumb";

export function TemeculaContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Service Areas", href: "/#service-areas" },
          { label: "Temecula" },
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
                Serving Temecula, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Temecula Plumbers & Water Heater Repair
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                5‑Star Rated Plumbers in Temecula, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Need a plumber in Temecula? Look no further—Water Heater SOS has you covered. As a trusted family‑owned business, we pride ourselves on delivering fast, dependable plumbing repairs and installations. Whether it's a stubborn <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet clog</Link>, a full‑house <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">repipe</Link>, or a slow‑draining sink, our skilled team handles it all with care.
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
                  alt="Professional plumber in Temecula"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              From shower repairs and <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposal</Link> fixes to detecting gas leaks, water leaks, and even tricky slab leaks, we give every job the attention it deserves. At Water Heater SOS, we offer comprehensive plumbing solutions tailored to your needs. Our professional <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link> services quickly pinpoint issues to prevent water waste.
            </p>
            <p>
              Got a backed‑up drain or a malfunctioning garbage disposal? We'll clear it up in no time. Shower acting up or suspect a gas leak? Our rapid response keeps your home safe and sound. For larger projects like water line repairs or a repipe, we ensure durable, long‑lasting results. And if a plumbing emergency strikes, give us a call.
            </p>
            <p>
              When it comes to water heaters, Water Heater SOS is the expert you can trust. Whether you have a traditional <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tank heater</Link> or a modern <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater</Link> system, we've got the skills to keep it running smoothly. If your unit is leaking or not heating properly, we diagnose and fix the issue fast. Struggling with inconsistent temperatures or low water flow? We'll get it back on track. Planning to install a new water heater? We handle both tank and tankless models, helping you choose the best option for your home.
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
              Our Plumbing Services in Temecula
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

      {/* Common Repairs Section */}
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
              Common Repairs with Tankless Water Heaters
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Scale Accumulation",
                description: "Hard water leaves mineral deposits inside the unit. These blocked pipes, slow water flow, and reduced efficiency. Routine flushing keeps the system clear.",
              },
              {
                title: "Burner Failure",
                description: "A faulty gas line or broken igniter prevents the burner from starting. This stops hot water production. Skilled plumbers fix the gas supply or replace the igniter fast.",
              },
              {
                title: "Excessive Heat",
                description: "A broken thermostat or clogged water path causes the unit to get too hot. This activates safety switches, cutting off hot water. Technicians repair components to restore safe operation.",
              },
              {
                title: "Faulty Sensors",
                description: "Malfunctioning flow or temperature sensors disrupt the system. This results in uneven heating or unexpected shutdowns. Swapping out or adjusting sensors corrects the issue.",
              },
              {
                title: "Overworked System",
                description: "Too many appliances running at once overloads the unit. This leads to shutdowns or weak hot water output. Balancing usage or installing a larger unit solves the problem.",
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

      {/* Water Filtration & Tankless Section */}
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
              Water Filtration & Tankless Water Heaters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater</Link> from Water Heater SOS delivers hot water fast. Most Temecula homes should have a tankless water heater to provide their families with endless hot water. Pair it with a <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water filtration system</Link> for top performance.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Clean water keeps your heater running longer. It also makes your showers and dishes cleaner. Temecula's hard water leaves mineral deposits that clog pipes and damage heaters. Our filtration system traps calcium and magnesium before they build up. This keeps your tankless heater efficient and extends its life. You save money on repairs and replacements. Plus, filtered water feels better on your skin and hair.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Imagine a morning shower that never turns cold. With Water Heater SOS, you get endless hot water and cleaner pipes. A filtration system protects your investment. It ensures every drop is pure. You enjoy better water and a reliable heater every day.
              </p>
              <div className="space-y-4">
                {[
                  "Your home's value rises with upgraded systems",
                  "Cleaner water reduces appliance wear",
                  "A filtration system stops mineral buildup in its tracks",
                  "Your heater and pipes stay clear and efficient",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#EA5D19] flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/wh-sos-service-rep.webp"
                  alt="Water filtration and tankless water heater services in Temecula"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
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
              Need Plumbing Services in Temecula?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule an appointment today!
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
      <FAQ category="temecula" />
    </>
  );
}
