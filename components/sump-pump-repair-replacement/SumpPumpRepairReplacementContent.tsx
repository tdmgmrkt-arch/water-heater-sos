"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, WrenchIcon, Zap, Clock, Settings, AlertTriangle } from "lucide-react";
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
    icon: WrenchIcon,
    title: "Lack of Maintenance",
    description: "Sump pumps need regular checkups to stay in good shape, but many homeowners skip this. Debris, dirt, or mineral buildup can clog the pump or jam the float, causing it to stop working when a big rain hits.",
  },
  {
    icon: Zap,
    title: "Power Outages",
    description: "Sump pumps rely on electricity, and heavy storms often knock out power. Without a backup battery or generator, your pump can't run, leaving your basement at risk of flooding during the worst times.",
  },
  {
    icon: Clock,
    title: "Old Age",
    description: "Most sump pumps last 7-10 years, but wear and tear takes its toll. Over time, parts like the motor or impeller break down, making the pump less reliable or causing it to fail completely.",
  },
  {
    icon: Settings,
    title: "Improper Installation",
    description: "A sump pump that's not installed correctly might not handle water effectively. Issues like a poorly sized pump or wrong pipe setup can lead to backups or burnout, especially during heavy rain.",
  },
  {
    icon: AlertTriangle,
    title: "Clogged Discharge Lines",
    description: "The pipe that carries water away from your home can get blocked by dirt, roots, or ice. If water can't flow out, the pump overworks and may fail, letting water pool in your basement.",
  },
];

const faqs = [
  {
    question: "What does a sump pump do?",
    answer: "A sump pump removes water that collects in a basement or crawlspace, preventing flooding. It pumps water out to a safe drainage area, protecting your home's foundation. Most run automatically when water levels rise.",
  },
  {
    question: "How do I know if my sump pump is working?",
    answer: "Test it by pouring water into the sump pit until the pump turns on. If it doesn't start or struggles to clear the water, it may need repairs or replacement.",
  },
  {
    question: "Why does my sump pump keep running?",
    answer: "A pump that runs constantly might have a stuck float switch or a clogged discharge line. It could also mean high groundwater levels overwhelming the system. Check for blockages or damage to avoid burnout.",
  },
  {
    question: "What happens if my sump pump fails?",
    answer: "A failed sump pump can lead to basement flooding, damaging walls, floors, and belongings. Water can also weaken your home's foundation, causing costly structural issues.",
  },
  {
    question: "Why does my sump pump smell bad?",
    answer: "A bad smell often comes from stagnant water or mold in the sump pit. Cleaning the pit and pump regularly can prevent odors and keep the system healthy.",
  },
  {
    question: "Why is my sump pump making loud noises?",
    answer: "Loud noises like grinding or rattling can mean a worn-out motor, loose parts, or debris in the pump. These issues can lead to failure if not fixed quickly.",
  },
  {
    question: "Can a sump pump work during a power outage?",
    answer: "Standard sump pumps need electricity, so they stop during power outages. A battery backup or generator can keep the pump running during storms when power often fails.",
  },
  {
    question: "How often should I maintain my sump pump?",
    answer: "Check your sump pump every 3-6 months to ensure it's clear of debris and working properly. Annual professional maintenance can catch problems before they lead to failure.",
  },
];

export function SumpPumpRepairReplacementContent() {
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
              Premium Sump Pump Repair & Replacement Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Sump Pump Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Don't Let a Faulty Sump Pump Cause Home Damage!
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
                alt="Professional sump pump repair and replacement services"
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
        Living in the greater Redlands area where heavy rain can hit hard, your sump pump is a lifesaver however, most only last 7 to 10 years. Those big storms can push your pump to the limit, and without regular care, it might quit when you need it most. Keeping up with maintenance can stretch your pump's life and save you from costly surprises, especially in areas prone to flooding.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        We are here to guide you through everything you need to know about sump pump installation. You'll learn how to pick the right system and why having pros handle the job keeps your home safe. A properly installed sump pump kicks water out before it can harm your home's foundation, protecting your property's value and possibly even lowering your insurance costs. The clay soil and occasional heavy rains make basement flooding a real concern. A reliable sump pump acts like your home's first line of defense, stopping water damage before it starts. Don't wait for a flood to find out your pump isn't up to the task. Schedule your professional sump pump installation today.
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
        Reasons Why Sump Pumps Fail
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

{/* Can a Sump Pump Be Repaired Section */}
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
        Can a Sump Pump Be Repaired Instead of Replacing?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        In many cases, a full replacement makes more sense because repairs often cost nearly as much as a new pump. Sump pumps aren't crazy expensive and basic models start for a few hundred dollars, and even high-end ones with battery backups are usually not too much more. Repairs, like fixing a worn out motor or replacing a jammed float switch, can easily run a few hundred dollars, plus labor, which adds up fast.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        When a pump starts failing, it's often a sign that other parts are wearing out too. Patching one issue might just delay another breakdown, leaving your basement at risk during a big rain. Older pumps, especially those over 7-10 years, lose efficiency and reliability, so sinking money into repairs isn't always worth it. A new pump gives you better performance, modern features, and peace of mind. That said, minor fixes like clearing a clogged discharge line or adjusting a stuck float can be cheap and quick if the pump is still young. But if the motor's shot or the pump's old, replacement is usually the smarter move.
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
              Don't wait for a flood to damage your home. Contact us today for expert sump pump repair and replacement services.
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
