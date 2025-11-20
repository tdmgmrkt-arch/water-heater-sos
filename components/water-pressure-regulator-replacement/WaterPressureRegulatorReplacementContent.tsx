"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Phone, Shield, Wrench, AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function WaterPressureRegulatorReplacementContent() {
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
                Expert Water Pressure Control For Your Home
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Water Pressure Regulator </span>Replacement
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Dealing with noisy pipes, leaking fixtures, or fluctuating water pressure?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A faulty water pressure regulator can damage pipes, destroy appliances, and waste water. Our expert plumbers install and replace pressure regulators to protect your plumbing system and maintain safe water pressure.
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
                  src="/water-pressure-regulator.webp"
                  alt="Professional water pressure regulator replacement service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              A water pressure regulator controls the water pressure entering your home from the city main, reducing high municipal pressure (often 100+ PSI) to a safe level of 50-60 PSI. Without proper pressure regulation, excessive force damages pipes, causes leaks at fixture connections, voids appliance warranties, and creates banging or hissing noises in your plumbing. Our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> test water pressure, diagnose regulator problems, and install new pressure reducing valves to protect your entire system.
            </p>
            <p>
              Common signs of a failing pressure regulator include noisy or vibrating pipes, constantly dripping faucets despite new washers, sudden water pressure fluctuations between fixtures, appliances failing prematurely, visible pipe damage like bulging or cracks, and higher water bills from hidden leaks caused by excessive pressure. In the Inland Empire, city water pressure can spike during low-usage hours or after utility maintenance, making pressure regulators essential for home protection. We also handle <Link href="/water-service-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">water service repairs</Link> when pressure issues stem from main line problems.
            </p>
            <p>
              High water pressure above 75 PSI stresses your plumbing system constantly, causing accelerated wear on pipes, joints, and seals. Older copper or galvanized pipes can crack or burst under sustained high pressure, while modern fixtures and appliances aren't designed to handle excessive force. We install quality pressure reducing valves, adjust them to optimal settings for your home, and inspect your plumbing for any damage caused by previous high pressure. Proper pressure regulation extends the life of all plumbing components and prevents costly emergency repairs. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Replace Your Pressure Regulator?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional pressure regulation protects your entire plumbing system
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Protect Your Pipes",
                description: "Excessive water pressure above 75 PSI damages pipes, joints, and connections, causing cracks, leaks, and bursts. Older copper and galvanized pipes can't withstand sustained high pressure. Proper regulation keeps pressure at safe levels (50-60 PSI), preventing costly pipe damage and water emergencies.",
                icon: Shield,
              },
              {
                title: "Extend Appliance Life",
                description: "High water pressure voids appliance warranties and causes premature failure of water heaters, washing machines, dishwashers, and other appliances. Excessive force damages internal components and seals. Regulated pressure extends appliance lifespan and protects your investment in home equipment.",
                icon: Wrench,
              },
              {
                title: "Eliminate Noisy Pipes",
                description: "Banging, hissing, or vibrating pipes indicate dangerously high water pressure stressing your plumbing. These noises signal damage occurring throughout your system. A new pressure regulator eliminates these sounds and prevents the damage that causes them.",
                icon: AlertTriangle,
              },
              {
                title: "Stop Fixture Leaks",
                description: "Constantly dripping faucets, running toilets, and leaking shower valves often result from high pressure wearing out seals and gaskets prematurely. Proper pressure regulation stops these leaks, reduces water waste, and extends the life of all fixtures throughout your home.",
                icon: Gauge,
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
              Don't let high water pressure damage your plumbing and appliances. Contact us today for expert pressure regulator replacement.
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
              Common questions about water pressure regulators
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What does a water pressure regulator do?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A water pressure regulator controls the water pressure entering your home from the city main, reducing high municipal pressure to a safe level (typically 50-60 PSI). It protects pipes, fixtures, and appliances from damage caused by excessive pressure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What causes a water pressure regulator to fail?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Regulators fail due to age, mineral buildup from hard water, wear on internal diaphragms and springs, poor water quality, or sudden pressure spikes from city supply. Most last 7-10 years before needing replacement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why is my water pressure suddenly low?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A failing regulator might not allow enough water through, or it could be clogged with sediment. Low pressure can also indicate leaks in your water service line. Professional diagnosis determines the exact cause.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can a bad regulator cause my water bill to increase?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, high pressure from a failing regulator causes leaks in pipes, fixtures, and appliance connections. Even small hidden leaks waste significant water and raise bills. Proper pressure regulation prevents these costly leaks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What happens if I don't fix a bad regulator?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A faulty regulator causes pipe leaks, burst pipes, damaged appliances with voided warranties, constant fixture drips, and high water bills. Over time, unchecked high pressure leads to expensive emergency repairs and replacements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How often should a water pressure regulator be replaced?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most regulators last 7-10 years depending on water quality and usage. If you notice pressure fluctuations, noisy pipes, or it's been over a decade since installation, have it inspected and likely replaced.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Is it safe to adjust my water pressure regulator myself?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Adjusting a regulator requires technical knowledge, specialized tools, and pressure testing equipment. Improper adjustment can damage your plumbing or create dangerous pressure conditions. Professional installation ensures safe, optimal operation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
