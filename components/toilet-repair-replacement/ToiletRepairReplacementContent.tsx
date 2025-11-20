"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Phone, WrenchIcon, Timer, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ToiletRepairReplacementContent() {
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
                Toilet Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Expert Toilet Solutions for Your Home
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Is your toilet constantly running or frequently clogging?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A malfunctioning toilet wastes water, increases bills, and creates frustration. Our professional plumbers provide fast, reliable toilet repair and replacement services.
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
                  alt="Professional toilet repair and replacement services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              A constantly running toilet can waste up to 200 gallons of water daily, dramatically increasing your utility bills. Whether your toilet runs continuously, clogs frequently, leaks around the base, or wobbles dangerously, our expert <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> diagnose and fix the problem quickly.
            </p>
            <p>
              We repair worn flappers, faulty fill valves, damaged wax rings, and cracked tanks. For toilets with persistent issues or outdated water-wasting designs, we recommend upgrading to modern, high-efficiency models that save water and money. Our plumbers also handle related fixtures including <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repairs</Link> and <Link href="/shower-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">shower installations</Link>.
            </p>
            <p>
              Today's toilets use advanced flushing technology, consuming as little as 1.28 gallons per flush compared to older models using 3.5-7 gallons. This means significant savings on water bills while maintaining powerful, clog-free performance. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Our Toilet Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional repair and replacement for all toilet types
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Stop Water Waste",
                description: "Running toilets waste up to 200 gallons daily, costing hundreds annually. We fix faulty flappers, fill valves, and flush mechanisms immediately. Modern water-saving toilets we install use 1.28 gallons per flush versus old 3.5+ gallon models, dramatically reducing your water bills.",
                icon: Droplets,
              },
              {
                title: "Fast Repairs",
                description: "We understand toilet emergencies can't wait. Our plumbers arrive promptly with the right parts to fix running toilets, leaks, clogs, and wobbling bases. Most repairs complete within hours, minimizing disruption to your household routine.",
                icon: Timer,
              },
              {
                title: "Prevent Damage",
                description: "Leaking toilets damage floors, subfloors, and surrounding structures, leading to mold and costly repairs. We replace wax rings, repair cracks, and stop leaks before they cause serious damage. Secure installation prevents future wobbling and potential breaks.",
                icon: Shield,
              },
              {
                title: "Modern Upgrades",
                description: "Old toilets clog frequently and waste water. We install dual-flush, comfort-height, and ADA-compliant models with powerful yet efficient flushing. Upgrade to quiet-close seats, touchless flush, and easy-clean surfaces that improve bathroom functionality and hygiene.",
                icon: WrenchIcon,
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
              Don't let a faulty toilet waste water and money. Contact us today for expert toilet repair and replacement services.
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
              Common questions about toilet repair & replacement
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How do I know if my toilet needs repair or replacement?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A toilet that constantly runs, clogs frequently, leaks, or wobbles may need repair. If the issues persist or the toilet is old and inefficient, replacement is often more cost-effective. Severe damage, like cracks, usually requires a new toilet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What causes a toilet to run constantly?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A constantly running toilet is often due to a faulty flapper, fill valve, or float that fails to stop water flow. Worn-out parts need repair or replacement. In some cases, sediment buildup in the tank can also cause issues.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How can I tell if my toilet is leaking?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Check for water around the base, wet floors, or a bigger water bill. If water keeps trickling in the bowl, the tank might be leaking. One of our professional plumbers can diagnose and fix the source.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can a wobbling toilet be fixed, or does it need replacement?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A wobbly toilet can sometimes be fixed by tightening bolts or leveling it. If the base or pipes are broken, you'll need a new toilet to stop leaks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Are water saving toilets worth installing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Water saving toilets use less water, which lowers your bill and helps the environment. They flush just as well as old ones. You'll save money over time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What do I do if my toilet overflows?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Turn off the water valve behind the toilet to stop it. Don't flush again until the clog is gone or a plumber checks it. A pro can fix it without making a mess.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How long does a toilet replacement take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most toilet replacements take 1-2 hours, depending on the complexity of the installation. Our plumbers work efficiently to minimize disruption to your daily routine.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
