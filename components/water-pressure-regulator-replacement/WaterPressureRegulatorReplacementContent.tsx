"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Volume2, Droplets, Gauge, Wrench, AlertTriangle } from "lucide-react";
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

const signs = [
  {
    icon: Volume2,
    title: "Noisy Pipes",
    description: "If you hear banging, hissing, or vibrating sounds coming from your pipes, it could mean your pressure regulator is failing. These noises often happen when water pressure is too high or unstable, putting stress on your plumbing system.",
  },
  {
    icon: Droplets,
    title: "Leaking Faucets or Fixtures",
    description: "Dripping faucets or toilets that run constantly may signal a faulty pressure regulator. High or fluctuating pressure can cause seals and fixtures to wear out faster, leading to leaks you can't ignore.",
  },
  {
    icon: Gauge,
    title: "Sudden Changes in Water Pressure",
    description: "If your shower or sink goes from a strong flow to a trickle without warning, the pressure regulator might be malfunctioning. These sudden shifts can make daily tasks like washing dishes or bathing frustrating.",
  },
  {
    icon: Wrench,
    title: "Damaged Appliances",
    description: "A bad pressure regulator can send too much water pressure to appliances like your washing machine or water heater, causing them to break down early. If you notice appliances failing sooner than expected, it's worth checking your regulator.",
  },
  {
    icon: AlertTriangle,
    title: "Visible Pipe Damage",
    description: "Look for signs like bulging or cracked pipes, especially near joints or connections. Excessive pressure from a failing regulator can weaken pipes over time, leading to costly repairs if not addressed.",
  },
];

const faqs = [
  {
    question: "What causes a water pressure regulator to fail?",
    answer: "Regulators can fail due to age, mineral buildup, or wear on internal parts. Poor water quality or sudden pressure spikes from the city supply can also contribute.",
  },
  {
    question: "Can a bad regulator cause my water bill to go up?",
    answer: "Yes, high pressure from a failing regulator can cause leaks in pipes or fixtures. Even small, hidden leaks can waste water and increase your bill.",
  },
  {
    question: "What happens if I don't fix a bad regulator?",
    answer: "A faulty regulator can cause leaks, burst pipes, or damaged appliances. Over time, this leads to higher water bills and expensive repairs.",
  },
  {
    question: "What does a water pressure regulator do?",
    answer: "A water pressure regulator controls the water pressure entering your home from the main supply. It keeps the pressure at a safe level to protect your pipes and appliances. If it fails, you might notice high or low pressure issues.",
  },
  {
    question: "Why is my water pressure suddenly low?",
    answer: "A failing regulator might not be letting enough water through, or it could be clogged with debris. Low pressure can also come from a leak or issue in the main supply line.",
  },
  {
    question: "How often should a water pressure regulator be replaced?",
    answer: "Most regulators last 7-10 years, but it depends on water quality and usage. If you notice pressure issues or it's been over a decade, it's time to check or replace it.",
  },
  {
    question: "Is it safe to adjust my water pressure regulator myself?",
    answer: "Adjusting a regulator requires technical know-how and the right tools. It's best left to professionals to avoid damaging your plumbing or causing pressure issues.",
  },
];

export function WaterPressureRegulatorReplacementContent() {
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
              Premium Water Pressure Regulator Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Water Pressure Regulator Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Are you tired of dealing with unpredictable water pressure in your home?
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
                src="/water-pressure-regulator.webp"
                alt="Professional water pressure regulator replacement service"
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
        From noisy pipes and dripping faucets to burst hoses and appliances that just won't work right, high water pressure can be a real headache. If ignored, it can damage your plumbing, ruin appliance warranties, and even raise your water bills with hidden leaks. In Redlands and the surrounding cities, where city water pressure can spike during busy times or after utility work, these issues are all too common. That's where we come in. Your local plumbing experts for water pressure diagnostics and pressure reducing valve installation.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We begin every job with a thorough water pressure test to pinpoint any problems. Our experienced plumbers look for warning signs like hissing noises, shaking pipes, or fixtures wearing out too soon. If we find an issue, we'll install or adjust a water pressure regulator valve and strengthen any weak spots in your plumbing. We don't just slap on a quick fix, we make sure your system is balanced for safe water flow, check for any damage caused by high pressure, and give you clear, honest advice on any needed repairs.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our goal is to provide lasting solutions that protect your home and keep things running smoothly. Don't let water pressure problems stress you out! A faulty pressure regulator, which controls the water pressure coming into your home, can cause sudden drops or spikes in pressure. Fixing or replacing it is a job best left to pros like us to ensure it's done right.
      </p>
    </motion.div>
  </div>
</section>

{/* Signs Section */}
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
        Signs Your Water Pressure Regulator Is Going Bad
      </h2>
      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {signs.map((sign, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="mb-4 inline-flex rounded-full bg-[#EA5D19]/10 p-3">
            <sign.icon className="h-6 w-6 text-[#EA5D19]" />
          </div>
          <h3 className="text-xl font-bold text-[#11110E] mb-3">
            {sign.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {sign.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* High Water Pressure Section */}
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
        High Water Pressure is Not a Good Thing
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        You might think high water pressure is great, right? But if your pressure regulator is showing 75 PSI or more, it's bad news for your home. That kind of pressure is like a wrecking ball to your pipes and appliances, causing damage that hits your wallet and your patience. Too much pressure puts your plumbing through the wringer. Older pipes, like those made of copper or galvanized steel, aren't built for that kind of force day in and day out.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        The constant strain can lead to cracks, leaks, or even pipes bursting, which means water damage and a hefty repair bill. Joints and seals take the worst of it, as the extra pressure can loosen fittings or blow out gaskets, leaving you with drips you didn't ask for. Your fixtures and appliances aren't safe either. High pressure can make faucets, shower heads, and toilets leak or just give out. Your dishwasher, washing machine, or water heater will be working overtime under that kind of stress, and their parts will wear out faster and cause potential damage. If your water pressure is high it is important you get that pressure reducing valve replaced before it's too late.
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
              Don't let water pressure problems damage your home. Contact us today for expert water pressure regulator replacement.
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
