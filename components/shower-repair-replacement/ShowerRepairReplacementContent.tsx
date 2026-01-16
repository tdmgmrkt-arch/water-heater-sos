"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Phone, Gauge, Thermometer, Shield } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function ShowerRepairReplacementContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Shower Repair & Replacement
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Expert Shower Solutions for Your Bathroom
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Is your shower leaking or losing pressure?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                A malfunctioning shower can waste water, damage your bathroom, and disrupt your daily routine. Our expert plumbers provide fast, reliable shower repair and replacement services.
              </p>
              <Link
                href="/quote?category=Fixtures%20%26%20Appliances&service=Shower%20Repair%2FReplacement"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <span className="sm:hidden">Get Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
                <Image
                  src="/placeholderimage.webp"
                  alt="Professional shower repair and replacement services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              A leaky shower can waste gallons of water daily, raising your utility bills while potentially damaging walls, floors, and ceilings. Whether it's a dripping shower head, faulty valve, or clogged drain, our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> restore your shower to perfect working condition.
            </p>
            <p>
              From fixing low water pressure caused by mineral buildup to replacing worn-out valves that affect temperature control, we handle all shower repair needs. We also specialize in <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repairs</Link>, ensuring every fixture in your bathroom works flawlessly.
            </p>
            <p>
              If your shower has frequent leaks, cracks, or outdated components, we recommend upgrading to modern, water-efficient fixtures. Our team installs thermostatic valves, rain shower heads, and low-flow systems that save water while enhancing your shower experience. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 lg:text-4xl mb-3 sm:mb-4">
              Why Choose Our Shower Services?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Professional repair and replacement for all shower types
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Fix Leaks & Save Water",
                description: "Leaking showers waste hundreds of gallons monthly and damage bathroom structures. We repair worn valves, cartridges, and seals to stop drips instantly. Our fixes prevent mold, water damage, and high utility bills while conserving water for your home.",
                icon: Droplets,
              },
              {
                title: "Restore Water Pressure",
                description: "Weak shower flow from clogged heads or faulty valves ruins your shower experience. We clean mineral buildup, replace restrictive parts, and install pressure-boosting fixtures. Enjoy strong, consistent water flow every time you shower.",
                icon: Gauge,
              },
              {
                title: "Temperature Control",
                description: "Sudden hot or cold water surges indicate valve problems that need immediate attention. We install thermostatic and anti-scald valves for precise temperature regulation. Never worry about uncomfortable or dangerous temperature fluctuations again.",
                icon: Thermometer,
              },
              {
                title: "Modern Upgrades",
                description: "Outdated showers waste water and lack modern features. We install rain shower heads, handheld sprayers, digital controls, and low-flow systems. Upgrade to eco-friendly, spa-like fixtures that match your bathroom style and reduce water consumption.",
                icon: Shield,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-8 shadow-md sm:shadow-lg border border-gray-200"
              >
                <div className="mb-3 sm:mb-4 inline-flex rounded-lg bg-[#EA5D19] p-2 sm:p-3">
                  <benefit.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white lg:text-4xl mb-4 sm:mb-6">
              Get a Free Estimate Today!
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-5 sm:mb-8 max-w-2xl mx-auto">
              Don't let a faulty shower disrupt your routine. Contact us today for expert shower repair and replacement services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+18006974014"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                (800) 697-4014
              </Link>
              <Link
                href="/quote?category=Fixtures%20%26%20Appliances&service=Shower%20Repair%2FReplacement"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ category="showerRepair" subtitle="Common questions about shower repair & replacement" />
    </>
  );
}
