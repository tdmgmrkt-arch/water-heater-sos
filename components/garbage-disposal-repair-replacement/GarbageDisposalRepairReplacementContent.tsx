"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Phone, Timer, Shield, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function GarbageDisposalRepairReplacementContent() {
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
                Expert Solutions For Your Kitchen Disposal
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Garbage Disposal </span>Repair & Replacement
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Is your garbage disposal jammed, leaking, or making strange noises?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A malfunctioning garbage disposal disrupts your kitchen routine and can cause clogs or water damage. Our expert plumbers provide fast, reliable repair and replacement services.
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
                  src="/garbage-disposal-repair.webp"
                  alt="Professional garbage disposal repair and replacement services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Garbage disposals are essential kitchen appliances that grind food waste, preventing <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain clogs</Link> and keeping your kitchen clean. When your disposal jams, leaks, or stops working, it creates inconvenient backups and potential water damage. Our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> quickly diagnose and fix the problem.
            </p>
            <p>
              We repair jammed blades, replace worn seals, fix leaking connections, and address electrical issues. Common problems include faulty sink flange connections, deteriorated internal seals, and loose dishwasher or drain pipe connections. For disposals beyond repair or outdated units that waste energy, we recommend upgrading to modern, powerful models with noise reduction and enhanced grinding capabilities.
            </p>
            <p>
              Today's garbage disposals feature continuous feed operation, stainless steel components, and multi-stage grinding for efficient waste disposal. Whether you need a quick repair or complete replacement installation, our team ensures proper connection to prevent leaks and optimal performance. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Our Disposal Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional repair and replacement for all garbage disposal brands
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fix Jams & Clogs",
                description: "Jammed disposals from bones, fibrous foods, or grease buildup stop your kitchen routine. We safely clear blockages, repair damaged blades, and restore grinding power. Our technicians use proper tools to avoid damaging the motor or internal components during jam removal.",
                icon: Wrench,
              },
              {
                title: "Stop Leaks",
                description: "Leaking disposals damage cabinets, floors, and create mold risks. We repair or replace worn seals, tighten sink flange connections, and fix dishwasher/drain pipe leaks. Proper installation prevents future water damage and ensures long-lasting, dry operation under your sink.",
                icon: Shield,
              },
              {
                title: "Fast Service",
                description: "Kitchen disposal problems can't wait. Our plumbers arrive promptly with common replacement parts and disposal units. Most repairs and installations complete within 1-2 hours, minimizing disruption to your cooking and cleaning routines while ensuring proper functionality.",
                icon: Timer,
              },
              {
                title: "Modern Upgrades",
                description: "Old disposals are loud, weak, and prone to jams. We install quiet, powerful models with multi-stage grinding, stainless steel components, and anti-jam features. Upgrade to continuous feed operation and enhanced horsepower for effortless food waste disposal.",
                icon: Zap,
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
              Don't let a faulty garbage disposal disrupt your kitchen. Contact us today for expert repair and replacement services.
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
              Common questions about garbage disposal repair & replacement
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can I fix a jammed garbage disposal myself?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                You can try using an allen wrench to manually turn the blades through the bottom of the unit or press the reset button. If the jam persists, professional plumbing help is needed to avoid damaging the disposal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What causes a garbage disposal to stop working?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A garbage disposal may stop due to a jam from food scraps, a burned-out motor, or electrical issues. Common culprits include bones, grease, or fibrous foods clogging the blades.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What foods should I avoid putting in my garbage disposal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Avoid fibrous foods like celery, grease, bones, and starchy items like pasta and potato peels. These can jam the blades, cause clogs, or damage the unit over time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How long does a garbage disposal typically last?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most garbage disposals last 8-15 years, depending on usage and maintenance. Heavy use or improper items can shorten their lifespan significantly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why is my garbage disposal leaking?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Leaks can occur from worn seals, loose sink flange connections, or damaged dishwasher/drain pipe connections. A professional inspection can identify the source and provide proper repairs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How much does garbage disposal installation cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Installation costs vary based on the disposal model and complexity of the job. Contact us for a free estimate tailored to your specific needs and kitchen setup.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can you install a garbage disposal if I don't have one?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes! We can install a new garbage disposal even if your sink doesn't currently have one. Our plumbers assess your plumbing setup and recommend the best disposal model for your needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
