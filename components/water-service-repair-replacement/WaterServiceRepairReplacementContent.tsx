"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Phone, Shield, Home, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function WaterServiceRepairReplacementContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-20 sm:pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 sm:px-4 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Expert Water Line Solutions For Your Home
              </span>
              <h1 className="text-3xl font-extrabold text-[#11110E] sm:text-5xl lg:text-6xl mb-3 sm:mb-4 leading-tight">
                <span className="text-[#EA5D19]">Water Service </span>Repair & Replacement
              </h1>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Experiencing low water pressure, soggy spots in your yard, or unexplainably high water bills?
              </p>
              <p className="hidden sm:block text-lg text-gray-700 leading-relaxed mb-8">
                A damaged water service line can waste thousands of gallons, cause property damage, and disrupt your daily routine. Our expert plumbers repair and replace water service lines quickly to restore reliable water delivery.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sm:hidden">Get Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/water-service-repair.webp"
                  alt="Professional water service line repair and replacement"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
            <p>
              Your water service line is the underground pipe that delivers fresh water from the city main to your home, providing water for drinking, cooking, bathing, and all daily needs. When this critical line develops leaks, corrosion, or blockages, it causes low water pressure, water waste, soggy yards, and potentially unsafe water quality. Our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> diagnose water service line problems and provide lasting repair or replacement solutions.
            </p>
            <p>
              Common signs of water service line damage include unexpectedly high water bills from hidden leaks, wet or muddy spots in your yard even during dry weather, discolored or cloudy water from dirt infiltration, consistently low water pressure throughout the house, and visible cracks in driveways or foundations from soil erosion. Older galvanized steel or lead pipes corrode over time, while tree roots can penetrate and damage lines. We also handle <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole-house repiping</Link> when multiple plumbing issues indicate system-wide problems.
            </p>
            <p>
              For minor damage, we perform spot repairs by excavating the affected section and installing new pipe segments. When pipes are extensively corroded, have multiple leaks, or consist of outdated materials like galvanized steel, full replacement with modern copper or Schedule 80 PVC provides long-term reliability and eliminates recurring problems. We work efficiently to minimize lawn disruption and restore water service promptly. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
              Why Choose Our Water Service Solutions?
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Professional water line repair and replacement services
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Stop Water Waste",
                description: "Even small leaks in water service lines waste thousands of gallons monthly, spiking utility bills and harming the environment. We locate hidden leaks using advanced detection methods and repair them immediately. Eliminate water waste, reduce bills, and conserve precious water resources.",
                icon: Droplets,
              },
              {
                title: "Prevent Property Damage",
                description: "Leaking water service lines erode soil, damage foundations, crack driveways, and create dangerous sinkholes. We repair damaged lines before they cause structural damage to your home or landscape. Protect your property investment with professional water line services.",
                icon: Shield,
              },
              {
                title: "Restore Water Pressure",
                description: "Corroded or damaged service lines reduce water flow, causing weak pressure at all fixtures. Leaks divert water before it reaches your home, further reducing available pressure. New water service lines deliver strong, consistent water flow for showers, appliances, and outdoor use.",
                icon: Home,
              },
              {
                title: "Modern Materials",
                description: "Replace old galvanized steel or lead pipes with durable copper or Schedule 80 PVC that resists corrosion and lasts 50+ years. Modern materials provide clean water free from metal contamination. Avoid repeated repairs with reliable, long-lasting water service lines.",
                icon: Wrench,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200"
              >
                <div className="mb-3 sm:mb-4 inline-flex rounded-lg bg-[#EA5D19] p-2 sm:p-3">
                  <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-6">
              Get a Free Estimate Today!
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Don't let a leaking water service line waste water and damage your property. Contact us today for expert repair and replacement services.
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
                href="/quote"
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
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-2 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600">
              Common questions about water service repair & replacement
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4 sm:px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-[#EA5D19] transition-colors py-3 sm:py-4">
                How do I know if my water service line is leaking?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed pb-3 sm:pb-4">
                Signs include unexpectedly high water bills, soggy or muddy patches in your yard, low water pressure throughout the house, discolored or cloudy water, and cracks in driveways or foundations. A plumber can inspect your line and confirm leaks using specialized detection equipment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4 sm:px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-[#EA5D19] transition-colors py-3 sm:py-4">
                What causes a water service line to leak?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed pb-3 sm:pb-4">
                Leaks result from aging pipes, corrosion in galvanized steel or lead pipes, tree root intrusion, ground shifts or settling, and freezing temperatures that crack pipes. Older materials are more prone to deterioration and failure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4 sm:px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-[#EA5D19] transition-colors py-3 sm:py-4">
                How long does it take to repair a water service line?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed pb-3 sm:pb-4">
                Most spot repairs take a few hours to a day, depending on leak location and severity. Full line replacements may take 1-2 days. We work efficiently to minimize water shutoff time and restore service as quickly as possible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-4 sm:px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-[#EA5D19] transition-colors py-3 sm:py-4">
                When should I replace my water service line instead of repairing it?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed pb-3 sm:pb-4">
                If your pipe is old, extensively corroded, has multiple leaks, or consists of outdated materials like galvanized steel or lead, replacement is more cost-effective than repeated repairs. New pipes made from copper or PVC last 50+ years and prevent future problems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-4 sm:px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-[#EA5D19] transition-colors py-3 sm:py-4">
                How much does it cost to replace a water service line?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed pb-3 sm:pb-4">
                Costs vary based on pipe length, material choice, excavation depth, and labor requirements. Minor repairs cost less than full replacements. Contact us for a detailed estimate after inspection of your specific situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-4 sm:px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-[#EA5D19] transition-colors py-3 sm:py-4">
                Can a leaky water service line affect my water quality?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed pb-3 sm:pb-4">
                Yes, damaged lines can allow dirt, bacteria, or rust to contaminate your water supply, causing cloudy, discolored, or bad-tasting water. Fixing the leak restores clean, safe water. Regular inspections catch issues before they affect water quality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-4 sm:px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-[#EA5D19] transition-colors py-3 sm:py-4">
                What happens if I ignore a water service line leak?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed pb-3 sm:pb-4">
                Ignoring leaks leads to massive water waste, drastically higher bills, foundation and driveway damage, lawn flooding, potential sinkholes, water contamination, and complete water service loss. Quick repairs prevent these costly issues.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-4 sm:px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-[#EA5D19] transition-colors py-3 sm:py-4">
                Why is my water pressure low even after checking fixtures?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed pb-3 sm:pb-4">
                A leak or blockage in the water service line reduces water flow to your entire home. Corrosion narrows pipe diameter, while tree roots can restrict or completely block the line. Professional plumbers diagnose and fix the root cause.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
