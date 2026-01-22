"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Phone, WrenchIcon, Timer, Shield } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

export function ToiletRepairReplacementContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Toilet Repair & Replacement" },
        ]}
      />
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
                Toilet Repair & Replacement
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Expert Toilet Solutions for Your Home
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Is your toilet constantly running or frequently clogging?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                A malfunctioning toilet wastes water, increases bills, and creates frustration. Our professional plumbers provide fast, reliable toilet repair and replacement services.
              </p>
              <Link
                href="/quote?category=Fixtures%20%26%20Appliances&service=Toilet%20Repair%2FReplacement"
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
                  alt="Professional toilet repair and replacement services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              A constantly running toilet can waste up to 200 gallons of water daily, dramatically increasing your utility bills. Whether your toilet runs continuously, clogs frequently, leaks around the base, or wobbles dangerously, our expert <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> diagnose and fix the problem quickly.
            </p>
            <p>
              We repair worn flappers, faulty fill valves, damaged wax rings, and cracked tanks. For toilets with persistent issues or outdated water-wasting designs, we recommend upgrading to modern, high-efficiency models that save water and money. Our plumbers also handle related fixtures including <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repairs</Link> and <Link href="/shower-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">shower installations</Link>.
            </p>
            <p>
              Today's toilets use advanced flushing technology, consuming as little as 1.28 gallons per flush compared to older models using 3.5-7 gallons. This means significant savings on water bills while maintaining powerful, clog-free performance. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Our Toilet Services?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Professional repair and replacement for all toilet types
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Stop Water Waste",
                description: "Running toilets waste up to 200 gallons daily, costing hundreds annually. We fix faulty flappers, fill valves, and flush mechanisms immediately. Modern water-saving toilets we install use 1.28 gallons per flush versus old 3.5+ gallon models, dramatically reducing your water bills.",
                icon: Droplets,
              },
              {
                title: "Fast Repairs",
                description: "We understand toilet emergencies can't wait. Our plumbers arrive promptly with the right parts to fix running toilets, leaks, clogs, and wobbling bases. Most repairs complete within hours, minimizing disruption to your household routine.",
                icon: Timer,
              },
              {
                title: "Prevent Damage",
                description: "Leaking toilets damage floors, subfloors, and surrounding structures, leading to mold and costly repairs. We replace wax rings, repair cracks, and stop leaks before they cause serious damage. Secure installation prevents future wobbling and potential breaks.",
                icon: Shield,
              },
              {
                title: "Modern Upgrades",
                description: "Old toilets clog frequently and waste water. We install dual-flush, comfort-height, and ADA-compliant models with powerful yet efficient flushing. Upgrade to quiet-close seats, touchless flush, and easy-clean surfaces that improve bathroom functionality and hygiene.",
                icon: WrenchIcon,
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
              Don't let a faulty toilet waste water and money. Contact us today for expert toilet repair and replacement services.
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
                href="/quote?category=Fixtures%20%26%20Appliances&service=Toilet%20Repair%2FReplacement"
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
      <FAQ category="toiletRepairReplacement" subtitle="Common questions about toilet repair & replacement" />
    </>
  );
}
