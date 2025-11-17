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

const commonProblems = [
  {
    title: "Pilot Light",
    description: "The pilot light is the small flame that ignites the gas burner. If your pilot light is not staying lit, it could be due to a dirty or faulty thermocouple, a clogged orifice, or a problem with the gas supply.",
  },
  {
    title: "Thermostat",
    description: "The thermostat controls the water temperature; if it's not working correctly, you might get lukewarm or cold water. A plumber can replace the thermostat or adjust the settings to ensure your water heater operates at the right temperature.",
  },
  {
    title: "Sediment Buildup",
    description: "Over time, sediment can accumulate at the bottom of the tank, reducing efficiency and causing the water heater to work harder to heat the water. Flushing the water heater every year can help prevent this issue and ensure your water heater lasts longer.",
  },
  {
    title: "Corrosion/Rust",
    description: "Gas water heaters can rust, especially if the anode rod is not properly functioning. The anode rod is a rod that attracts corrosive elements in the water to prevent the tank from rusting. If the anode rod is depleted, the tank can start to erode, leading to leaks and the need for a new water heater.",
  },
  {
    title: "Old Age",
    description: "The average lifespan of a gas water heater is about 10-12 years. If your water heater is approaching or has surpassed this age, it might be time to consider a replacement. A new water heater can provide improved efficiency and reliability.",
  },
  {
    title: "Gas Leak",
    description: "If you smell gas near your water heater, it's a serious issue that requires immediate attention. A faulty gas valve, a damaged burner, or a problem with the gas line can cause a gas leak. Please turn off the gas supply and contact us immediately.",
  },
];

const faqs = [
  {
    question: "What brand of gas water heaters do you repair?",
    answer: "Our expertise extends to repairing a wide range of brands, with Bradford White, A. O. Smith, Rheem, Kenmore, and Whirlpool being the most popular ones we work on.",
  },
  {
    question: "Can you fix a gas water heater that is leaking?",
    answer: "It depends on where the leak is coming from. When a gas water heater leaks from the tank, it usually means it has rusted out from the inside and will need to be replaced. If the leak comes from a water line or valve, we can often replace the leaking part.",
  },
  {
    question: "How long should a gas water heater last?",
    answer: "Typically, a gas water heater lasts 7-15 years, but that depends on several factors, including water quality and maintenance. Poor water quality can cause your water heater to corrode and rust, but proper maintenance can prolong its life.",
  },
  {
    question: "Should I switch to a tankless water heater?",
    answer: "Converting your traditional tank water to a more effective tankless model can be a smart move that will save you money on your utility bills. However, the upfront cost of switching to a tankless water heater can be more expensive initially. Call us, and we can assess your situation and provide solutions for your home.",
  },
  {
    question: "Why is the state of California stopping gas water heater sales?",
    answer: "California is moving away from gas-powered appliances in homes to help with air quality. As of 2030, the state will ban the purchase of gas water heaters, and you will have to choose between an electric or a heat pump water heater.",
  },
];

export function GasWaterHeatersContent() {
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
              Premium Gas Water Heater Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Gas Water Heater Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Is Your Gas Water Heater Leaking or Acting Up?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                One of the most frustrating things that can happen to a homeowner is to find out you have no hot water for your house.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Gas water heaters are a vital part of any home, providing us with hot showers, clean dishes, and laundry. However, like any appliance, they can experience issues that require a plumber.
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
                src="/gas-water-heater-controls.webp"
                alt="Gas water heater repair and replacement service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Common Problems with Gas Water Heaters */}
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
        Common Problems with Gas Water Heaters
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {commonProblems.map((problem, index) => (
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
              {problem.title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {problem.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Gas Water Heater Controls Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Gas Water Heater Controls
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        When your water heater has problems, it's essential to address them promptly to ensure the safety and efficiency of your home's hot water supply. Regular maintenance and inspections can help prevent issues and extend the lifespan of your water heater.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        If you're experiencing problems with your gas water heater, don't hesitate to contact us immediately.
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
              Schedule an Appointment Today!
            </h2>

            <div className="h-1 w-20 bg-[#FFFF] mx-auto rounded-full mb-8" />

            <p className="text-xl text-white/90 mb-8 max-w-7xl mx-auto">
              Don't let a broken gas water heater disrupt your daily routine. Contact us today for fast, reliable repair and replacement services.
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
