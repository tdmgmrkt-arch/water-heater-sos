"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Phone, Shield, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function LeakDetectionServicesContent() {
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
              Advanced Technology To Find Hidden Leaks Fast
            </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
              <span className="text-[#EA5D19]">Leak Detection </span> Services
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Suspect a slab leak or hidden leak in your walls?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Hidden water leaks cause serious damage to foundations, walls, and floors while wasting water and driving up bills. Our advanced leak detection services use specialized equipment to locate leaks without destructive digging or wall removal.
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
                  src="/leak-detection.webp"
                  alt="Professional leak detection services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
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
              Why Choose Professional Leak Detection?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced technology finds leaks without damaging your property
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              Don't let hidden leaks damage your home. Contact us today for professional leak detection and repair services.
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
              Common questions about leak detection services
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What are leak detection services?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Leak detection services use advanced tools like acoustic devices, infrared cameras, moisture detectors, and video inspection equipment to find hidden water leaks in your home's plumbing without tearing up property. We locate leaks in pipes, slabs, and walls with precision to prevent damage and save money through non-invasive methods.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can leak detection find slab leaks under my foundation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, our advanced tools including acoustic leak detection and infrared cameras are specifically designed to locate slab leaks hidden beneath your home's foundation. These leaks can be difficult to spot but cause serious damage if ignored, so professional detection is essential.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How long does a leak detection service take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most leak detection jobs take one to two hours, depending on your home's size and the complexity of the issue. Once we locate the leak, we can often begin repairs immediately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What happens after you find a leak?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Once we locate the leak, our team explains the issue and recommends the best repair options like pipe rerouting, trenchless repairs, or targeted spot repairs. We work quickly to fix the leak, preventing further damage to your home with minimal hassle. You'll know exactly what's happening every step of the way.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can leak detection help prevent mold in my home?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, leak detection prevents mold growth by finding hidden leaks that create damp conditions where mold thrives. Fixing leaks early keeps your home safe and healthy. We work fast to protect your property from costly mold remediation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Will my water need to be shut off during leak detection?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                In most cases, we can perform leak detection without shutting off your water, using non-invasive tools like acoustic devices and infrared cameras. For certain pressure tests, we may briefly turn off water to get accurate results. We keep you informed and ensure your home stays functional during the process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How often should I get leak detection done?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                You only need leak detection if you suspect a potential leak somewhere in your home or property. If you're unsure, call us for a pressure test to check if your plumbing systems are holding correctly. This quick test reveals whether leaks exist.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can leak detection find leaks in walls or ceilings?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, our advanced tools including moisture detectors and infrared cameras can find leaks hidden in walls or ceilings without causing damage. These leaks often come from faulty pipes or fittings and can lead to mold or structural issues if ignored.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
