"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Phone, Search, Shield, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SewerCameraInspectionContent() {
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
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
                Advanced Video Inspection For Accurate Diagnoses
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Sewer Camera </span>Inspection
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Experiencing slow drains, frequent clogs, or foul odors from your plumbing?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our sewer camera inspection service pinpoints the exact cause of your plumbing problems without guesswork or unnecessary digging. We use high-tech video cameras to see inside your pipes and diagnose issues accurately.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Schedule an Appointment
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
                  alt="Professional sewer camera inspection services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
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
              Why Choose Camera Inspection?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced diagnostics that save time, money, and your property
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#EA5D19] p-3">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
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
              Get a Free Estimate Today!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't let hidden plumbing problems become expensive disasters. Contact us today for professional sewer camera inspection.
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

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about sewer camera inspection
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why would I need a sewer camera inspection?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                If you're dealing with slow drains, frequent clogs, bad odors, or sewage backups, a camera inspection pinpoints the exact cause like tree roots, cracks, or damaged pipes. It's also essential for pre-purchase home inspections to avoid surprise sewer repairs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How long does a sewer camera inspection take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most sewer camera inspections take 30 minutes to an hour, depending on your home's size and pipe layout. If repairs are needed, we can often start immediately, minimizing disruption to your day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Is a sewer camera inspection safe for my pipes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, sewer camera inspections are completely safe and non-invasive. The camera slides through your plumbing without causing damage. This gentle method diagnoses problems without harming your system or property.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can a sewer camera inspection find tree roots in my pipes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutely. Sewer camera inspections excel at spotting tree root intrusions, which are common in older homes. The camera shows exactly where roots are growing and how severe the blockage is, allowing us to locate the problem area on your property with pinpoint accuracy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Will I see the results of the sewer camera inspection?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, we show you the real-time video from the camera so you can see what's happening inside your pipes. Our plumbers explain the findings in plain language, helping you understand the problem and our recommended solution. This transparency helps you make confident decisions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Should I get a sewer camera inspection when buying a house?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutely, especially if the house isn't brand new. Sewer repairs can be among the most costly issues homeowners face. A camera inspection gives you peace of mind and reveals the true condition of the sewer line before you purchase, potentially saving thousands in unexpected repairs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Is a sewer camera inspection worth the cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, a camera inspection saves money by catching small issues before they become expensive emergencies like broken sewer lines. It's a precise diagnostic method that avoids unnecessary digging, keeping costs down while providing accurate fixes that last. It's a smart investment to protect your home.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
