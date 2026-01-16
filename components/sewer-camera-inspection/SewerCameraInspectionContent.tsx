"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Phone, Search, Shield, Clock } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function SewerCameraInspectionContent() {
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
                Sewer Camera Inspection
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Advanced Video Inspection for Accurate Diagnoses
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Experiencing slow drains, frequent clogs, or foul odors from your plumbing?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Our sewer camera inspection service pinpoints the exact cause of your plumbing problems without guesswork or unnecessary digging. We use high-tech video cameras to see inside your pipes and diagnose issues accurately.
              </p>
              <Link
                href="/quote?category=Drain%20%26%20Sewer%20Services&service=Sewer%20Camera%20Inspection"
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
                  alt="Professional sewer camera inspection services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              Sewer camera inspection is a non-invasive diagnostic method that uses waterproof cameras to see inside your sewer and drain lines, revealing clogs, cracks, tree root intrusions, and other hidden problems without excavating your yard. This advanced technology allows our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> to pinpoint exact problem locations, saving you time and money by eliminating guesswork and preventing unnecessary digging or exploratory work.
            </p>
            <p>
              Common reasons for camera inspections include recurring clogs despite repeated snaking, slow drains throughout the house, gurgling sounds from drains or toilets, foul sewer odors, soggy spots in your yard, or pre-purchase inspections for older homes. The camera reveals tree roots penetrating pipe joints, corroded or collapsed sections, grease buildup, foreign objects, and bellied (sagging) pipes that trap water and debris. We also offer <Link href="/hydro-jetting" className="text-[#EA5D19] hover:underline font-semibold">hydro-jetting services</Link> to thoroughly clean lines after identifying blockages.
            </p>
            <p>
              After completing the inspection, we show you real-time video footage so you can see exactly what's causing problems inside your pipes. This transparency ensures you understand the issue and our recommended repair approach, whether it's spot repairs, trenchless sewer line replacement, or pipe cleaning. Camera inspections are especially valuable for homebuyers checking sewer line conditions before purchase, preventing expensive surprise repairs. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Camera Inspection?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced diagnostics that save time, money, and your property
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Precise Diagnosis",
                description: "See exactly what's wrong inside your pipes instead of relying on guesswork. Our high-resolution cameras reveal blockages, cracks, root intrusions, and corrosion in real-time. Know the exact location and nature of problems before any repair work begins.",
                icon: Eye,
              },
              {
                title: "No Excavation Needed",
                description: "Avoid tearing up your lawn, driveway, or landscaping to find problems. Camera inspection is completely non-invasive, preserving your property while providing complete diagnostic information. Save thousands on unnecessary excavation and restoration costs.",
                icon: Shield,
              },
              {
                title: "Fast & Accurate",
                description: "Most sewer camera inspections complete within 30-60 minutes, immediately identifying problem areas. No waiting days for excavation crews or trial-and-error repairs. Get accurate answers quickly so repairs can start right away without delays.",
                icon: Clock,
              },
              {
                title: "Informed Decisions",
                description: "We show you the video footage so you see exactly what we see inside your pipes. This transparency helps you understand the problem, verify our diagnosis, and make confident decisions about repairs. Perfect for pre-purchase home inspections.",
                icon: Search,
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
              Don't let hidden plumbing problems become expensive disasters. Contact us today for professional sewer camera inspection.
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
                href="/quote?category=Drain%20%26%20Sewer%20Services&service=Sewer%20Camera%20Inspection"
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
      <FAQ category="sewerCameraInspection" subtitle="Common questions about sewer camera inspection" />
    </>
  );
}
