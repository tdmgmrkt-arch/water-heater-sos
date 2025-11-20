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

export function FaucetRepairReplacementContent() {
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
                Faucet Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Expert Faucet Solutions for Your Kitchen and Bathroom
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Is your faucet dripping and driving you crazy?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A dripping or malfunctioning faucet can keep you awake at night and waste water that adds up on your bill. We're here to fix it with expert repair and replacement services.
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
                  alt="Professional faucet repair and replacement services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Whether it's a leaky kitchen sink or a worn-out shower faucet, our skilled plumbers will restore your home's faucets to top-notch condition, saving you money and hassle. Faucets are a daily essential in your home, but over time, they can wear out and need <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing repair</Link> or replacement.
            </p>
            <p>
              A properly working faucet not only cuts down on water waste but also adds a sleek, modern touch to your space and makes everyday tasks easier. Your kitchen faucet handles tasks like washing dishes, filling pots for cooking, and getting drinking water. A leaky or broken faucet can waste water, increase your bills, and make kitchen chores frustrating.
            </p>
            <p>
              We provide expert repair and replacement services to keep your kitchen faucet working perfectly. We fix common issues like drips, low water pressure, loose handles, or wobbly bases by replacing worn-out washers, cartridges, or other parts. Bathroom faucets are just as important for brushing teeth, showering, or filling the bathtub. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Our Faucet Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional repair and replacement for kitchen and bathroom faucets
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Stop Water Waste",
                description: "A single dripping faucet can waste hundreds of gallons of water per year, significantly raising your water bill. Our expert repairs fix leaks quickly, replacing worn washers, gaskets, and O-rings to stop drips and conserve water, saving you money every month.",
                icon: Droplets,
              },
              {
                title: "Fast Repairs",
                description: "We understand how frustrating a malfunctioning faucet can be. Our skilled plumbers arrive promptly with the right tools and parts to diagnose and fix issues like leaks, low pressure, or broken handles efficiently, getting your faucet working perfectly again.",
                icon: Timer,
              },
              {
                title: "Quality Parts & Installation",
                description: "We use only high-quality replacement parts and modern faucets from trusted brands. Whether repairing or installing new fixtures like pull-down sprayers or touchless models, we ensure secure connections, proper water flow, and long-lasting performance.",
                icon: Shield,
              },
              {
                title: "Kitchen & Bathroom Expertise",
                description: "From kitchen sinks to bathroom vanities and showers, we handle all types of faucet repairs and installations. We fix clogged aerators, faulty valves, corroded seats, and temperature control issues while matching your home's style and improving efficiency.",
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
              Don't let a leaky faucet waste water and money. Contact us today for expert faucet repair and replacement services.
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
              Common questions about faucet repair & replacement
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can a leaky faucet increase my water bill?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, a single dripping faucet can waste hundreds of gallons of water per year, raising your water bill. Fixing the leak promptly can save money and conserve water.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What causes low water pressure in my faucet?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Low pressure can result from a clogged aerator, mineral buildup in the pipes, or a faulty cartridge. Cleaning the aerator or replacing worn parts usually restores normal flow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How long does a faucet typically last?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most faucets last 15-20 years with proper maintenance, but heavy use or hard water can shorten their lifespan. Older faucets may need replacement due to wear or outdated technology.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why is my faucet dripping even when turned off?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A dripping faucet is often caused by worn-out washers, gaskets, or O-rings inside the faucet. Replacing these parts can stop the drip and prevent water waste.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why does my faucet make a squeaking noise when turned on?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Squeaking is usually caused by worn or dry seals, O-rings, or loose valve stems. Lubricating or replacing these parts can eliminate the noise and restore smooth operation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What's the difference between repairing and replacing a faucet?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Repair involves fixing specific parts like washers or seals to stop leaks or improve function. Replacement is needed when the faucet is too old, damaged, or inefficient to repair.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How much does it cost to repair or replace a faucet?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Faucet repairs will depend on the age and brand of the faucet. Often times older faucets are harder to get parts for and end up costing more to repair. Replacing a faucet will also depend on the brand and how fancy the faucet is you want. Give us a call so we can provide a free estimate and give you an accurate price on your project.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
