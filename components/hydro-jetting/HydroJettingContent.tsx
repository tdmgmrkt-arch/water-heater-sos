"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, CheckCircle2, Shield, Zap, Timer } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function HydroJettingContent() {
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
                Hydro-Jetting Services
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                High-Pressure Drain & Sewer Line Cleaning
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Need to have hydro-jetting on your home's main sewer line?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Over time, your home's drains can slow down as hair, grease, soap scum, and other debris build up and cause clogs. When that happens, hydro-jetting is a powerful way to clear out blockages and get your drains flowing like new again.
              </p>
              <Link
                href="/quote?category=Drain%20%26%20Sewer%20Services&service=Hydro-Jetting"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <span className="sm:hidden">Get Quote</span>
                <span className="hidden sm:inline">Get a Free Estimate</span>
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
                  alt="Hydro-jetting service for drain cleaning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              If your sinks, showers, or tubs are draining slowly, reach out to us to learn more about our hydro jet cleaning services. Hydro-jetting uses high-pressure water (up to 4,000 PSI) to blast through grease, sludge, roots, scale, and debris inside your drains and sewer line.
            </p>
            <p>
              Unlike chemical cleaners or basic snaking — which only temporarily poke a hole — hydro-jetting cleans the entire pipe wall for long-lasting results. Our professional plumbers insert a slim high-pressure hose and nozzle into your line, sending powerful water streams in multiple directions. This deep cleaning restores your plumbing system to peak performance.
            </p>
            <p>
              Hydro-jetting is the recommended solution when traditional <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning</Link> tools fail or when you want a complete and lasting clean. Chemical cleaners can corrode your pipes, and snaking often leaves debris behind — leading to recurring clogs. Hydro-jetting removes buildup fully, even in older or heavily used plumbing systems. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Hydro-Jetting?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The most effective solution for stubborn drain and sewer line clogs
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Deep Cleaning Power",
                description: "Hydro-jetting clears the entire pipe wall, not just the clog. High-pressure water (up to 4,000 PSI) blasts away grease, sludge, roots, scale, and debris that traditional snaking can't remove. This thorough cleaning prevents future clogs and restores your drains to like-new condition.",
                icon: Droplets,
              },
              {
                title: "Safe & Eco-Friendly",
                description: "Unlike harsh chemical drain cleaners that can corrode pipes and harm the environment, hydro-jetting uses only water. It's safe for most pipe materials and won't damage your plumbing system when performed by our professional plumbers.",
                icon: Shield,
              },
              {
                title: "Long-Lasting Results",
                description: "While traditional snaking only pokes a hole through blockages, hydro-jetting completely removes buildup from pipe walls. This comprehensive cleaning means fewer recurring clogs and longer-lasting drainage performance, saving you money on future plumbing repairs.",
                icon: Timer,
              },
              {
                title: "Versatile Solution",
                description: "Hydro-jetting effectively removes tree roots, mineral deposits, grease buildup, and years of accumulated debris. It works on kitchen drains, bathroom drains, main sewer lines, and commercial plumbing systems—making it the most versatile drain cleaning method available.",
                icon: Zap,
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
              Don't let slow drains or clogs disrupt your day. Contact us for professional hydro-jetting services.
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
                href="/quote?category=Drain%20%26%20Sewer%20Services&service=Hydro-Jetting"
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
      <FAQ category="hydroJetting" subtitle="Common questions about hydro-jetting services" />
    </>
  );
}
