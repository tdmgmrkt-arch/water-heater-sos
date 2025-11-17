"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Droplets, AlertCircle, CircleDot, Filter, WrenchIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const brands = [
  { name: "Rheem", image: "/rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/bradford-white-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
];

const reasons = [
  {
    icon: Droplets,
    title: "Worn Out Washers or Gaskets",
    description: "Over time, the rubber washers or gaskets inside a faucet wear down due to constant water pressure and use. This causes leaks or drips, often seen at the base or spout, which can waste gallons of water if left unfixed.",
  },
  {
    icon: AlertCircle,
    title: "Corroded Valve Seat",
    description: "The valve seat, which connects the faucet to the spout, can corrode from mineral buildup in the water. This leads to leaks around the spout, reducing water flow and requiring repair to restore proper function.",
  },
  {
    icon: CircleDot,
    title: "Loose or Damaged O-Rings",
    description: "O-rings in cartridge faucets can become loose or worn, causing leaks at the base or handle. Replacing these small but critical parts can stop the leak and prevent water waste.",
  },
  {
    icon: Filter,
    title: "Clogged Aerator",
    description: "Mineral deposits or debris can clog the aerator, and the small screen at the end of the faucet, leading to low water pressure or uneven flow. Cleaning or replacing the aerator often resolves the issue quickly.",
  },
  {
    icon: WrenchIcon,
    title: "Broken Internal Parts",
    description: "Internal components like cartridges or stems can crack or wear out, causing leaks or difficulty turning the faucet on and off. Repairing or replacing these parts ensures smooth operation and prevents water loss.",
  },
];

const faqs = [
  {
    question: "Can a leaky faucet increase my water bill?",
    answer: "Yes, a single dripping faucet can waste hundreds of gallons of water per year, raising your water bill. Fixing the leak promptly can save money and conserve water.",
  },
  {
    question: "What causes low water pressure in my faucet?",
    answer: "Low pressure can result from a clogged aerator, mineral buildup in the pipes, or a faulty cartridge. Cleaning the aerator or replacing worn parts usually restores normal flow.",
  },
  {
    question: "How long does a faucet typically last?",
    answer: "Most faucets last 15-20 years with proper maintenance, but heavy use or hard water can shorten their lifespan. Older faucets may need replacement due to wear or outdated technology.",
  },
  {
    question: "Why is my faucet dripping even when turned off?",
    answer: "A dripping faucet is often caused by worn-out washers, gaskets, or O-rings inside the faucet. Replacing these parts can stop the drip and prevent water waste.",
  },
  {
    question: "Why does my faucet make a squeaking noise when turned on?",
    answer: "Squeaking is usually caused by worn or dry seals, O-rings, or loose valve stems. Lubricating or replacing these parts can eliminate the noise and restore smooth operation.",
  },
  {
    question: "What's the difference between repairing and replacing a faucet?",
    answer: "Repair involves fixing specific parts like washers or seals to stop leaks or improve function. Replacement is needed when the faucet is too old, damaged, or inefficient to repair.",
  },
  {
    question: "How much does it cost to repair or replace a faucet?",
    answer: "Faucet repairs will depend on the age and brand of the faucet. Often times older faucets are harder to get parts for and end up costing more to repair. Replacing a faucet will also depend on the brand and how fancy the faucet is you want. Give us a call so we can provide a free estimate and give you an accurate price on your project.",
  },
];

export function FaucetRepairReplacementContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

            <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
              Premium Faucet Repair & Replacement Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Faucet Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert Faucet Solutions for Your Kitchen and Bathroom
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Schedule an Appointment Today!
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/placeholderimage.webp"
                alt="Professional faucet repair and replacement services"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Main Content Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left"
    >
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A dripping or malfunctioning faucet can drive you up the wall, keeping you awake at night with its constant drip and wasting water that adds up on your bill. We know how frustrating a faulty faucet can be, and we're here to fix it with expert repair and replacement services. Whether it's a leaky kitchen sink or a worn-out shower faucet, our skilled plumbers will restore your home's faucets to top-notch condition, saving you money and hassle.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Faucets are a daily essential in your home, but over time, they can wear out and need repair or replacement. A properly working faucet not only cuts down on water waste but also adds a sleek, modern touch to your space and makes everyday tasks easier. From your bathroom to your kitchen, we've got all your faucet needs covered with reliable solutions.
      </p>
    </motion.div>
  </div>
</section>

{/* Kitchen Faucet Services Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Kitchen Faucet Services
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        Your kitchen faucet is a key part of your daily routine, handling tasks like washing dishes, filling pots for cooking, and getting drinking water. A leaky or broken faucet can waste water, increase your bills, and make kitchen chores frustrating. We provide expert repair and replacement services to keep your kitchen faucet working perfectly. We fix common issues like drips, low water pressure, loose handles, or wobbly bases by replacing worn-out washers, cartridges, or other parts. If your faucet is outdated or beyond repair, we can install a new one, like a pull-down sprayer or touchless model, that fits your kitchen's style and needs.
      </p>
    </motion.div>
  </div>
</section>

{/* Bathroom Faucet Services Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Bathroom Faucet Services
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        Bathroom faucets are just as important, whether you're brushing your teeth at the sink, taking a shower, or filling the bathtub. A problem like a leak, weak water flow, or inconsistent water temperature can throw off your routine. We tackle issues like leaking spouts, clogged shower heads, faulty temperature controls, or peeling finishes by replacing seals, valves, or entire faucets when needed. For bathroom upgrades or remodels, we install modern, water-saving faucets, such as single-handle designs or rain shower heads, to match your style and improve efficiency. Every faucet we install is securely connected to avoid leaks and ensure a steady water flow.
      </p>
    </motion.div>
  </div>
</section>

{/* Reasons Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Why Your Faucet Might Need Repair
      </h2>
      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="mb-4 inline-flex rounded-full bg-[#EA5D19]/10 p-3">
            <reason.icon className="h-6 w-6 text-[#EA5D19]" />
          </div>
          <h3 className="text-xl font-bold text-[#11110E] mb-3">
            {reason.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {reason.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Trusted Brands Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-7xl text-center relative z-20"
          >
            <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-8">
              Trusted Brands
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 items-center relative z-20 min-h-[120px]">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative h-20 w-28 mx-auto z-20">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} logo - trusted water heater brand`}
                      fill
                      sizes="100px"
                      className="object-contain z-20"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-2xl bg-white px-6 shadow-md border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[#11110E] hover:text-[#EA5D19] py-6 flex items-start justify-between gap-2">
                      <span className="flex-shrink-0 mr-2 text-[#EA5D19] font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-grow text-collapse-fix">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Get a Free Estimate Now!
            </h2>

            <div className="h-1 w-20 bg-[#FFFF] mx-auto rounded-full mb-8" />

            <p className="text-xl text-white/90 mb-8 max-w-7xl mx-auto">
              Don't let a leaky faucet waste water and money. Contact us today for expert faucet repair and replacement services.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Request Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
