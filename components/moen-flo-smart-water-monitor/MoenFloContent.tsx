"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, CheckCircle2, Shield, Bell, Smartphone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function MoenFloContent() {
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
                Moen Flo Leak Detection Installation
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Redlands, Yucaipa, Highland, Loma Linda & San Bernardino
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Are you looking to protect your home from water damage?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Does your homeowner's insurance policy require a plumber to install a Moen Flo leak detection device?
              </p>
              <Link
                href="/quote?category=Leak%20%26%20Water%20Services&service=Moen%20Flo%20Smart%20Water%20Monitor%20Installation"
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
                  src="/Moen.webp"
                  alt="Moen Flo Smart Water Monitor installation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              We install Moen Flo leak detection shut-off systems. In fact, we install several of these devices every week in the nearby cities of <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>, <Link href="/rialto" className="text-[#EA5D19] hover:underline font-semibold">Rialto</Link>, <Link href="/yucaipa" className="text-[#EA5D19] hover:underline font-semibold">Yucaipa</Link>, and <Link href="/riverside" className="text-[#EA5D19] hover:underline font-semibold">Riverside</Link>. Once installed by one of our professional plumbers, we will provide you with a letter for your homeowner's insurance that verifies you had a Moen Flo leak shut-off professionally installed.
            </p>
            <p>
              Water damage can be costly and devastating for homeowners. It can cause extensive damage to property and belongings, and the longer it goes untreated, the worse it gets. With a Moen Flo Smart Water Monitor, you can help deter a water leak emergency and appease your homeowner's insurance at the same time.
            </p>
            <p>
              We offer expert installation of the Moen Flo Leak Detection device across the Inland Empire, serving areas like <Link href="/rancho-cucamonga" className="text-[#EA5D19] hover:underline font-semibold">Rancho Cucamonga</Link>, Big Bear, and <Link href="/riverside" className="text-[#EA5D19] hover:underline font-semibold">Riverside</Link>.
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
              Why Install A Moen Flo Smart Water Monitor?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Protect your home with advanced leak detection technology
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Leak Detection",
                description: "The Moen Flo Smart Water Monitor can detect leaks in your plumbing system. It uses advanced technology to monitor water flow and pressure and can alert you if it detects a leak. This can help you catch problems early and prevent costly water damage.",
                icon: Droplets,
              },
              {
                title: "Water Usage Monitoring",
                description: "The Moen Flo Smart Water Monitor tracks your water usage, allowing you to see how much water you use and where it goes. This can help you identify areas where you can conserve water and save money on your water bill.",
                icon: CheckCircle2,
              },
              {
                title: "Automatic Shutoff",
                description: "If the Moen Flo Smart Water Monitor detects a leak, it can automatically shut off your water supply to prevent further damage. This can be a lifesaver if you're away from home and a pipe bursts.",
                icon: Shield,
              },
              {
                title: "Remote Access",
                description: "The Moen Flo Smart Water Monitor can be controlled remotely using a smartphone.",
                icon: Smartphone,
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
              Schedule an Appointment Today!
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-5 sm:mb-8 max-w-2xl mx-auto">
              Protect your home from water damage with professional Moen Flo installation. Call now!
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
                href="/quote?category=Leak%20%26%20Water%20Services&service=Moen%20Flo%20Smart%20Water%20Monitor%20Installation"
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
      <FAQ category="moenFlo" subtitle="Common questions about Moen Flo Smart Water Monitor" />
    </>
  );
}
