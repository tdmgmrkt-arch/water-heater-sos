"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const brands = [
  { name: "Rheem", image: "/Rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/Bradford-White-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
];

const considerReasons = [
  {
    title: "Frequent Leaks",
    description: "If leaks keep happening in different areas, the problem might not be a single weak spot but aging pipes that need replacing.",
  },
  {
    title: "Discolored Water",
    description: "Brown, rusty, or odd-colored water is often a sign of corrosion inside your pipes, which can affect water quality and pipe strength.",
  },
  {
    title: "Low Water Pressure",
    description: "Weak water flow could mean mineral buildup or hidden leaks in your plumbing system, making repiping a smart fix to restore full pressure.",
  },
  {
    title: "Old Galvanized Pipes",
    description: "Homes or businesses with outdated galvanized steel or polybutylene pipes are prone to corrosion, cracks, or bursts. Repiping is a proactive way to avoid major problems.",
  },
  {
    title: "Repeated Pipe Reroutes",
    description: "If you're constantly paying for plumbing repairs, a whole-house repipe can save you money and hassle in the long run with fewer repairs.",
  },
];

const hiddenDangers = [
  {
    title: "Corrosion and Buildup",
    description: "The calcium and magnesium in Southern California's water react with galvanized pipes, causing rust and mineral buildup inside. This narrows the pipes, reducing water flow and leading to frustratingly low water pressure. Over time, the corrosion weakens the pipes, making them prone to cracks and leaks.",
  },
  {
    title: "Contaminated Water",
    description: "As galvanized pipes corrode, rust and debris can mix with your water supply, turning clean water brown or rusty. This not only looks unappealing but can also pose health risks by affecting water quality.",
  },
  {
    title: "Frequent and Costly Leaks",
    description: "Corroded pipes are brittle and prone to breaking, leading to leaks that can damage walls, floors, and foundations. These leaks often go unnoticed until the damage is extensive, resulting in expensive repairs and potential mold growth.",
  },
  {
    title: "Reduced Property Value",
    description: "Outdated plumbing can scare off potential buyers if you're selling your home. Modern buyers expect reliable, updated systems, and galvanized pipes are a red flag for costly future repairs.",
  },
  {
    title: "Unpredictable Failures",
    description: "Even if your galvanized pipes seem fine now, their deterioration is inevitable. A sudden pipe burst can cause flooding, ruining furniture, flooring, and personal belongings, while driving up repair costs.",
  },
];

const faqs = [
  {
    question: "What is whole-home repiping?",
    answer: "Whole-home repipe involves replacing all the old or damaged pipes in your home with new, durable materials like PEX or copper. It addresses widespread plumbing issues to ensure a reliable water supply and prevent leaks or corrosion.",
  },
  {
    question: "How do I know if my home needs a repipe?",
    answer: "Signs include frequent leaks, discolored or rusty water, low water pressure, or pipes made of outdated materials like galvanized steel. If repairs are becoming frequent, a repipe may be a better long-term solution.",
  },
  {
    question: "What materials are used for a whole-house repipe?",
    answer: "Common materials include PEX, which is flexible and corrosion-resistant, and copper, which is durable but more expensive. We will explain the different solutions with the homeowner so they can make the best decision for their situation.",
  },
  {
    question: "Are galvanized pipes really that bad?",
    answer: "Yes, galvanized pipes corrode over time due to minerals in the water, leading to reduced water flow, leaks, and poor water quality. Replacing them prevents damage and health risks from rust.",
  },
  {
    question: "Can I repipe just part of my home?",
    answer: "Partial repiping is possible for specific problem areas, but whole-home repiping is often more cost-effective if pipes are old or deteriorating. It ensures the entire system is updated and reliable.",
  },
  {
    question: "How long do new Pex pipes last?",
    answer: "PEX pipes typically last 50-70 years or more with proper maintenance. Their lifespan depends on water quality and usage, but they're far more durable than galvanized pipes.",
  },
  {
    question: "How long does a whole-home repipe take?",
    answer: "A typical repipe for an average-sized home takes 2-3 days, depending on the size of the house and complexity of the plumbing system. In nearly all of all repipes we do, the water will be back on later the evening on the day we start. Larger homes or commercial properties may take longer.",
  },
  {
    question: "How much does a whole-home repipe cost?",
    answer: "Costs vary based on home size, pipe material, and labor, typically ranging from $10,000 to $20,000 for an average home. Factors like accessibility and the extent of pipe replacement affect the price.",
  },
];

export function WholeHouseRepipeContent() {
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
              Premium Whole-House Repipe Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Whole-House Repipe
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Is It Time to Repipe Your Home?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Are you tired of dealing with plumbing issues like low water pressure, discolored water, or constant leaks? These could be signs that your home needs repiping. We specialize in expert repiping services for both residential and commercial properties, ensuring your plumbing system is reliable, efficient, and built to last.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our experienced plumbers are ready to tackle full pipe replacements using high-quality materials, like copper or PEX, to upgrade old, worn-out, or damaged pipes. Whether your home's plumbing is corroding or your commercial property needs a large-scale overhaul, we tailor our services to fit your specific needs. We work hard to keep disruptions to a minimum, delivering a smooth installation process that restores your plumbing's performance and extends its lifespan.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Get a Free Estimate Now!
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
                alt="Whole-house repipe service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* When Should You Consider Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        When Should You Consider A Whole-House Repiping?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {considerReasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
              <Check className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug">
              {reason.title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {reason.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Why You Should Replace Old Galvanized Pipes Section */}
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
        Why You Should Replace Old Galvanized Pipes
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        If your home or business still has old galvanized pipes, it's time to take action. These outdated pipes, once common in properties across the region, are a ticking time bomb due to the calcium and magnesium in our local water supply. Over time, these minerals cause galvanized pipes to corrode and deteriorate, leading to serious plumbing issues that can wreak havoc on your property. We are here to help you avoid costly damage with our expert repiping services, using high-quality PEX piping to ensure a reliable, long-lasting plumbing system.
      </p>
    </motion.div>
  </div>
</section>

{/* 5 Hidden Dangers Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        5 Hidden Dangers of Galvanized Pipes
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mx-auto">
        Galvanized pipes, made of steel coated with zinc, were popular decades ago but are now a major liability. Here's why they're so problematic for your home or business:
      </p>
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {hiddenDangers.map((danger, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
              <Check className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug">
              {danger.title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {danger.description}
          </p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="text-center mt-12"
    >
      <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        Replacing galvanized pipes before they fail is a proactive investment that saves you from these headaches. By upgrading to modern PEX piping, you'll enjoy better water flow, cleaner water, and peace of mind knowing your plumbing system is built to last.
      </p>
    </motion.div>
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
              Don't wait for old pipes to fail. Contact us today for expert whole-house repiping services and protect your home from costly damage.
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
