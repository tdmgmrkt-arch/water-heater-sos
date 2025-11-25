"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Phone, Gauge, Thermometer, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ShowerRepairReplacementContent() {
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
                Expert Shower Solutions For Your Bathroom
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Shower </span>Repair & Replacement
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Is your shower leaking or losing pressure?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A malfunctioning shower can waste water, damage your bathroom, and disrupt your daily routine. Our expert plumbers provide fast, reliable shower repair and replacement services.
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
                  src="/shower-repair-replacement.webp"
                  alt="Professional shower repair and replacement services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              A leaky shower can waste gallons of water daily, raising your utility bills while potentially damaging walls, floors, and ceilings. Whether it's a dripping shower head, faulty valve, or clogged drain, our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> restore your shower to perfect working condition.
            </p>
            <p>
              From fixing low water pressure caused by mineral buildup to replacing worn-out valves that affect temperature control, we handle all shower repair needs. We also specialize in <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repairs</Link>, ensuring every fixture in your bathroom works flawlessly.
            </p>
            <p>
              If your shower has frequent leaks, cracks, or outdated components, we recommend upgrading to modern, water-efficient fixtures. Our team installs thermostatic valves, rain shower heads, and low-flow systems that save water while enhancing your shower experience. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Our Shower Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional repair and replacement for all shower types
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fix Leaks & Save Water",
                description: "Leaking showers waste hundreds of gallons monthly and damage bathroom structures. We repair worn valves, cartridges, and seals to stop drips instantly. Our fixes prevent mold, water damage, and high utility bills while conserving water for your home.",
                icon: Droplets,
              },
              {
                title: "Restore Water Pressure",
                description: "Weak shower flow from clogged heads or faulty valves ruins your shower experience. We clean mineral buildup, replace restrictive parts, and install pressure-boosting fixtures. Enjoy strong, consistent water flow every time you shower.",
                icon: Gauge,
              },
              {
                title: "Temperature Control",
                description: "Sudden hot or cold water surges indicate valve problems that need immediate attention. We install thermostatic and anti-scald valves for precise temperature regulation. Never worry about uncomfortable or dangerous temperature fluctuations again.",
                icon: Thermometer,
              },
              {
                title: "Modern Upgrades",
                description: "Outdated showers waste water and lack modern features. We install rain shower heads, handheld sprayers, digital controls, and low-flow systems. Upgrade to eco-friendly, spa-like fixtures that match your bathroom style and reduce water consumption.",
                icon: Shield,
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
              Don't let a faulty shower disrupt your routine. Contact us today for expert shower repair and replacement services.
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
              Common questions about shower repair & replacement
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why is my shower leaking even when it's turned off?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A leak often comes from a worn out shower valve, cartridge, or seals. Replacing these parts stops the drip and prevents water waste. Leaks can also damage your bathroom if not fixed quickly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How do I know if my shower valve needs replacing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                If your shower leaks, has inconsistent temperatures or has low pressure despite cleaning, the valve may be too worn out. Replacing it fixes these issues and improves shower performance. A plumber can confirm if a replacement is needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What types of shower valves are there?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Common types include single-handle, dual-handle, and thermostatic valves. Each controls water flow and temperature differently, with thermostatic valves offering precise temperature control. One of our plumbing technicians can recommend the best type for your shower.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can a new shower valve save water?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Modern shower valves, like thermostatic or low-flow models, use less water while maintaining pressure. Upgrading an old valve reduces water bills and helps the environment. Proper installation ensures maximum efficiency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What causes low water pressure in my shower?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Low pressure is usually due to mineral buildup in the shower head or a clogged shower valve. Cleaning or replacing the affected parts restores strong water flow. Sometimes, pipe issues may also need checking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How long does a shower repair take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most shower repairs, like fixing a valve or unclogging a drain, take 1-2 hours. Complex issues, like pipe problems, may take longer. Our plumbers work quickly to minimize disruption.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                When should I replace my shower instead of repairing it?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                If your shower has frequent leaks, cracks, or an outdated design that wastes water, replacement is often better. A new shower improves efficiency and refreshes your bathroom. Repairs are best for minor, fixable issues.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why does my shower water temperature keep changing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A faulty shower valve or cartridge can cause sudden hot or cold water shifts. Repairing or replacing the valve ensures steady, safe temperatures. Old valves may need updating for better performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
