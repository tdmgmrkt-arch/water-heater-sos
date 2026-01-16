"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Phone, Shield, Clock } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function LeakDetectionServicesContent() {
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
                Leak Detection Services
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Advanced Technology to Find Hidden Leaks Fast
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Suspect a slab leak or hidden leak in your walls?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Hidden water leaks cause serious damage to foundations, walls, and floors while wasting water and driving up bills. Our advanced leak detection services use specialized equipment to locate leaks without destructive digging or wall removal.
              </p>
              <Link
                href="/quote?category=Leak%20%26%20Water%20Services&service=Leak%20Detection"
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
                  alt="Professional leak detection services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              Leak detection services use advanced technology including acoustic listening devices, infrared cameras, moisture detectors, and video inspection equipment to locate hidden water leaks in walls, under slabs, and throughout your plumbing system without causing property damage. Signs of hidden leaks include unexplained water bill increases, damp or warm floor spots, reduced water pressure, cracks in floors or walls, musty odors, visible mold growth, and sounds of running water when fixtures are off. Our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> quickly identify leak locations so repairs can begin immediately, preventing extensive damage and costly restoration work.
            </p>
            <p>
              Slab leaks occur when water lines running beneath your home's concrete foundation develop cracks or corrosion, allowing water to escape under pressure. These leaks are particularly dangerous because they go unnoticed for extended periods, saturating soil beneath foundations, causing structural shifts, cracking floors and walls, and creating ideal conditions for mold growth. Common causes include ground settling shifting pipes, corrosion from soil chemistry or water quality, poor installation during construction, and excessive water pressure stressing pipe connections. We also handle <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole-house repiping</Link> when multiple leaks indicate systemic plumbing problems.
            </p>
            <p>
              Our leak detection process begins with comprehensive testing including pressure tests to verify system integrity, acoustic detection to hear water escaping pipes, infrared thermal imaging to identify temperature variations from leaking water, and video camera inspection for visual confirmation. Once we locate the leak precisely, we recommend the most effective repair approach - spot repairs for isolated leaks, trenchless repairs to minimize excavation, pipe rerouting to bypass damaged sections, or complete line replacement for extensively corroded pipes. Early detection prevents minor leaks from becoming major disasters, protecting your home and saving thousands in potential damage repairs. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Professional Leak Detection?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced technology finds leaks without damaging your property
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Non-Invasive Detection",
                description: "Our advanced equipment locates leaks behind walls, under slabs, and throughout your plumbing without tearing up floors, cutting walls, or digging up yards. Acoustic devices, infrared cameras, and moisture detectors pinpoint exact leak locations, preserving your property while providing accurate results.",
                icon: Search,
              },
              {
                title: "Prevent Major Damage",
                description: "Hidden leaks cause foundation damage, mold growth, structural deterioration, and costly repairs if left undetected. Early leak detection stops small problems before they become disasters. Protect your home's foundation, walls, and floors by catching leaks early.",
                icon: Shield,
              },
              {
                title: "Fast & Accurate",
                description: "Most leak detection services complete within 1-2 hours, immediately identifying problem locations without guesswork. Once we locate the leak, repairs can begin right away, minimizing water damage and restoration costs while getting your plumbing fixed quickly.",
                icon: Clock,
              },
              {
                title: "Save Money",
                description: "Hidden leaks waste thousands of gallons monthly, spiking water bills dramatically. Leak detection identifies the source immediately, stopping water waste and preventing expensive damage repairs. Early detection saves money on bills, repairs, and restoration work.",
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
              Get a Free Estimate Today!
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-5 sm:mb-8 max-w-2xl mx-auto">
              Don't let hidden leaks damage your home. Contact us today for professional leak detection and repair services.
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
                href="/quote?category=Leak%20%26%20Water%20Services&service=Leak%20Detection"
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
      <FAQ category="leakDetection" subtitle="Common questions about leak detection services" />
    </>
  );
}
