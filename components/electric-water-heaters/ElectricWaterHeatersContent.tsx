"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { Breadcrumb } from "@/components/Breadcrumb";

const reasons = [
  {
    title: "Energy Efficiency",
    description: "Modern electric water heaters are highly efficient, converting nearly all the electrical energy into heat for your water.",
  },
  {
    title: "Lower Installation Costs",
    description: "Electric water heaters typically cost less to install than gas models since they don't require gas lines or venting systems.",
  },
  {
    title: "Safety",
    description: "Electric water heaters don't produce combustion gases, eliminating risks of carbon monoxide leaks or gas explosions.",
  },
  {
    title: "Quiet Operation",
    description: "Electric water heaters operate quietly without the noise of a gas burner igniting.",
  },
  {
    title: "Longer Lifespan",
    description: "With fewer mechanical parts, electric water heaters often last longer than gas models with proper maintenance.",
  },
];

export function ElectricWaterHeatersContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Electric Water Heaters" },
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Premium Electric Water Heater Service
              </span>
              <h1 className="text-2xl font-bold text-[#11110E] sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Electric Water Heaters
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-8">
                Professional Electric Water Heater Repair & Installation
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Electric water heaters are a reliable and efficient choice for many homes. Whether you need a repair or a new installation, our experienced technicians can help you get the hot water you need. We service all major brands and offer competitive pricing.
              </p>
              <Link
                href="/quote?category=Water%20Heaters&service=Electric%20Water%20Heater%20Installation"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sm:hidden">Get Free Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment Today!</span>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl"
            >
              <Image
                src="/wh-sos-service-rep.webp"
                alt="Electric water heater repair and installation service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-14"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
              Benefits of Electric Water Heaters
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-[#11110E] flex-1 leading-snug">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white lg:text-4xl mb-4 sm:mb-6">
              Schedule an Appointment Today!
            </h2>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Get Free Estimate
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="home" subtitle="Common questions about electric water heaters" />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white lg:text-4xl mb-4 sm:mb-6">
              Ready for Reliable Hot Water?
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-5 sm:mb-8 max-w-7xl mx-auto">
              Contact us today for professional electric water heater services. Our experts are ready to help you.
            </p>
            <Link
              href="/quote?category=Water%20Heaters&service=Electric%20Water%20Heater%20Installation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Request Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
