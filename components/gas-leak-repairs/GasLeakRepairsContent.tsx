"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, Phone, Shield, Clock } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function GasLeakRepairsContent() {
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
                Gas Leak Repair & Gas Line Installation
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Emergency Gas Leak Detection and Safe Repairs
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Do you suspect a gas leak or did your gas company shut off your service?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Gas leaks pose serious safety hazards including fire, explosion, and health risks. Our licensed plumbers provide emergency gas leak detection, repairs, and complete gas line installations to keep your family safe.
              </p>
              <Link
                href="/quote?category=Gas%20%26%20Other%20Services&service=Gas%20Leak%20Repair"
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
                  alt="Professional gas leak repair and gas line installation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              Gas lines power essential home appliances including water heaters, furnaces, stoves, fireplaces, and outdoor grills, making them critical for comfort and convenience. However, damaged or improperly installed gas lines create life-threatening hazards through potential fires, explosions, or carbon monoxide poisoning. Our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> include emergency gas leak detection, complete gas line repairs, new installations, and system testing to ensure your home meets all safety codes.
            </p>
            <p>
              Common signs of gas leaks include the distinctive rotten egg or sulfur smell added to natural gas for detection, hissing or whistling sounds near gas lines, dead or discolored vegetation near underground lines, unexplained increases in gas bills, physical symptoms like dizziness or nausea, and carbon monoxide detector alarms. If you notice any of these warning signs, evacuate immediately, avoid using electrical switches or creating sparks, call 911 from a safe distance, and then contact us for emergency repairs. We also provide <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater installations</Link> with proper gas line connections.
            </p>
            <p>
              Our gas line services include repairing bent or weakened lines, fixing broken connections, replacing cracked gaskets and fittings, clearing clogged lines, installing new gas lines for appliances or outdoor kitchens, and performing comprehensive pressure testing to verify system integrity. We work with all gas line materials and ensure every installation meets strict safety standards and local building codes. Never attempt DIY gas line repairs - always rely on licensed professionals for safe, code-compliant work. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Our Gas Line Services?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Licensed professionals ensuring safe, code-compliant gas line work
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Emergency Response",
                description: "Gas leaks require immediate action. We provide 24/7 emergency response for gas leak detection and repairs. Our technicians arrive quickly with specialized equipment to locate leaks, shut off gas safely, and make emergency repairs to protect your family.",
                icon: AlertTriangle,
              },
              {
                title: "Safety First",
                description: "We follow strict safety protocols and building codes for all gas line work. Every repair and installation includes comprehensive pressure testing to verify leak-free operation. Your family's safety is our top priority in every job we complete.",
                icon: Shield,
              },
              {
                title: "Licensed Experts",
                description: "Gas line work requires specialized training and licensing. Our certified plumbers have extensive experience with gas systems, proper installation techniques, and safety regulations. Trust licensed professionals for safe, reliable gas line services.",
                icon: Clock,
              },
              {
                title: "Complete Solutions",
                description: "From emergency leak repairs to new gas line installations for appliances, outdoor kitchens, and pools, we handle all your gas line needs. We repair damaged lines, upgrade old systems, and install new runs with proper sizing and materials.",
                icon: ArrowRight,
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
              Emergency Gas Leak? Call Now!
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-5 sm:mb-8 max-w-2xl mx-auto">
              Don't wait when it comes to gas leaks. Contact us immediately for emergency gas leak repair and professional gas line installation services.
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
                href="/quote?category=Gas%20%26%20Other%20Services&service=Gas%20Leak%20Repair"
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
      <FAQ category="gasLeakRepairs" subtitle="Common questions about gas leak repair & gas line installation" />
    </>
  );
}
