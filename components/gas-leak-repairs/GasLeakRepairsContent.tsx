"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, Phone, Shield, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function GasLeakRepairsContent() {
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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                Gas Leak Repair & Gas Line Installation
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Emergency Gas Leak Detection and Safe Repairs
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Do you suspect a gas leak or did your gas company shut off your service?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Gas leaks pose serious safety hazards including fire, explosion, and health risks. Our licensed plumbers provide emergency gas leak detection, repairs, and complete gas line installations to keep your family safe.
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
                  alt="Professional gas leak repair and gas line installation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Gas lines power essential home appliances including water heaters, furnaces, stoves, fireplaces, and outdoor grills, making them critical for comfort and convenience. However, damaged or improperly installed gas lines create life-threatening hazards through potential fires, explosions, or carbon monoxide poisoning. Our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> include emergency gas leak detection, complete gas line repairs, new installations, and system testing to ensure your home meets all safety codes.
            </p>
            <p>
              Common signs of gas leaks include the distinctive rotten egg or sulfur smell added to natural gas for detection, hissing or whistling sounds near gas lines, dead or discolored vegetation near underground lines, unexplained increases in gas bills, physical symptoms like dizziness or nausea, and carbon monoxide detector alarms. If you notice any of these warning signs, evacuate immediately, avoid using electrical switches or creating sparks, call 911 from a safe distance, and then contact us for emergency repairs. We also provide <Link href="/water-heater-installation" className="text-[#EA5D19] hover:underline font-semibold">water heater installations</Link> with proper gas line connections.
            </p>
            <p>
              Our gas line services include repairing bent or weakened lines, fixing broken connections, replacing cracked gaskets and fittings, clearing clogged lines, installing new gas lines for appliances or outdoor kitchens, and performing comprehensive pressure testing to verify system integrity. We work with all gas line materials and ensure every installation meets strict safety standards and local building codes. Never attempt DIY gas line repairs - always rely on licensed professionals for safe, code-compliant work. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Our Gas Line Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Licensed professionals ensuring safe, code-compliant gas line work
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              Emergency Gas Leak? Call Now!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait when it comes to gas leaks. Contact us immediately for emergency gas leak repair and professional gas line installation services.
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
              Common questions about gas leak repair & gas line installation
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What are the signs of a gas leak in my home?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Common signs include a rotten egg or sulfur smell, hissing or whistling sounds near gas lines, dead or discolored plants near gas lines, higher than usual gas bills, physical symptoms like dizziness or nausea, or your carbon monoxide detector activating. If you notice any signs, evacuate immediately and call for help.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What should I do if I suspect a gas leak?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Immediately evacuate everyone from the building, including pets. Do not use any electrical switches, appliances, or create sparks or flames, as these could ignite the gas. Once safely away, call 911 and your gas company from a safe distance, then contact us for emergency repairs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can a gas leak be fixed without professional help?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                No, gas leaks should never be fixed without professional help. Gas line repairs require specialized knowledge, tools, licensing, and safety protocols to ensure safe, code-compliant work. Attempting DIY repairs creates dangerous situations and may cause future leaks or code violations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How often should gas lines be inspected?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Have your gas lines inspected annually or biennially by a licensed professional, even if you haven't noticed problems. Regular inspections catch potential issues before they become dangerous leaks. More frequent checks are recommended during major home renovations or after experiencing a gas leak.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What should I do if my gas detector goes off?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Never ignore a gas detector alarm. Immediately evacuate your home, avoid using any electrical devices or creating flames, and do not try to locate the leak yourself. From a safe location outside, call emergency services and your gas provider. Only return once professionals declare your home safe.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
