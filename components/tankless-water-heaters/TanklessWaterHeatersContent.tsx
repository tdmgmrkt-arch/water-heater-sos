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

const breakdownReasons = [
  {
    title: "No Hot Water",
    description: "This could be due to a power supply issue, a problem with the water supply, or a clogged filter.",
  },
  {
    title: "Water is Too Hot",
    description: "This could be due to a malfunctioning thermostat, scaling or mineral buildup, or a clogged filter.",
  },
  {
    title: "Low Water Pressure",
    description: "This could be due to a problem with the water supply, a clogged filter, or an issue with the water pressure regulator.",
  },
  {
    title: "Unit is Too Noisy",
    description: "This could be due to loose components, a gas issue, or a problem with the fan or burner.",
  },
  {
    title: "Discolored Water or Unpleasant Odor",
    description: "This could be caused by sediment buildup in the unit, a malfunctioning burner, or a clogged air filter.",
  },
  {
    title: "Burner Doesn't Ignite",
    description: "This could be due to a problem with the gas supply, a clogged burner, or a malfunctioning ignition system.",
  },
  {
    title: "Water Temperature Fluctuation",
    description: "This could be due to a problem with the thermostat, scaling or mineral buildup, or a clogged filter.",
  },
  {
    title: "Leaks",
    description: "This could be due to a problem with the water supply, a clogged filter, or a damaged component.",
  },
];

const benefits = [
  {
    title: "Energy Efficiency",
    description: "According to the U.S. Department of Energy, tankless water heaters are up to 34% more energy-efficient than traditional tank-style water heaters. This means you can save money on energy bills while reducing your carbon footprint.",
  },
  {
    title: "Endless Hot Water",
    description: "You'll never run out of hot water with a tankless water heater. If you have a sufficient gas or electric supply, you can enjoy a continuous flow of hot water for showers, baths, and household chores.",
  },
  {
    title: "Space-Saving Design",
    description: "Tankless water heaters are compact and can be mounted on a wall, freeing up valuable floor space in your home.",
  },
  {
    title: "Longer Lifespan",
    description: "Tankless water heaters typically have a lifespan of 20 years or more, compared to 10-15 years for traditional tank-style water heaters.",
  },
  {
    title: "Easy Maintenance",
    description: "Tankless water heaters require minimal maintenance, and many models have self-cleaning features to prevent mineral buildup and extend the unit's life.",
  },
];

const faqs = [
  {
    question: "How do tankless water heaters work?",
    answer: "Tankless water heaters use a heat exchanger to heat water as it flows through the unit. When you turn on a hot water faucet or start a hot water appliance, the tankless water heater senses the flow and activates, heating the water to your desired temperature.",
  },
  {
    question: "What size tankless water heater do I need?",
    answer: "The size of your tankless water heater depends on the number of fixtures in your home, the flow rate of each fixture, and the temperature rise required. We can help you determine the right size for your needs.",
  },
  {
    question: "How much does it cost to install a tankless water heater?",
    answer: "The cost varies depending on the unit's size, the installation's complexity, and your location. Call or text us to discuss your situation and what your installation would take.",
  },
  {
    question: "Are tankless water heaters more expensive than tank water heaters?",
    answer: "While tankless water heaters may have a higher upfront cost, they can save you money in the long run due to their energy efficiency and longer lifespan. In addition, many utility companies and government agencies offer rebates and incentives for installing energy-efficient appliances like tankless water heaters.",
  },
  {
    question: "Can I install a tankless water heater myself?",
    answer: "While it is possible to install a tankless water heater yourself, hiring a plumber is recommended to ensure the installation is done correctly and safely. Improper installation can lead to inefficiency, breakdowns, and even safety hazards.",
  },
];

export function TanklessWaterHeatersContent() {
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
                Premium Tankless Water Heater Service
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Tankless Water </span>Heater Service
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Is your tankless water heater displaying an error code?
                Tankless water heaters are great because they are energy efficient and will last considerably longer than traditional tank water heaters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
              However, many people neglect the yearly maintenance needed to ensure their unit's longevity. If your tankless water heater needs repair, we can help! Our technicians are experts in working on electric and gas tankless water heaters, as well as all sorts of tankless water heater brands.
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
                src="/tankless-water-heater.webp"
                alt="Tankless water heater repair and installation service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Common Reasons Tankless Water Heaters Breakdown */}
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
        Common Reasons Tankless Water Heaters Breakdown
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {breakdownReasons.map((reason, index) => (
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

{/* Considering a Tankless Water Heater Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center mb-14"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Considering a Tankless Water Heater?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mx-auto">
        If you have a tank water heater and are trying to determine if a tankless water heater is the way to go, we can help. An energy-efficient tankless water heater can save you money in the long run; however, the upfront costs are more considerable. Below are some key benefits of installing a tankless water heater at your home.
      </p>
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {benefits.map((benefit, index) => (
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
              {benefit.title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {benefit.description}
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
              Common questions about tankless water heaters
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
              Ready to upgrade to a tankless water heater or need repairs? Contact us today for expert service and installation.
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
