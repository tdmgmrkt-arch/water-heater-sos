"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Droplets, Link2, AlertCircle, WrenchIcon } from "lucide-react";
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

const leakReasons = [
  {
    icon: Link2,
    title: "Faulty Sink Flange Connection",
    description: "The flange is the part that connects the garbage disposal to the sink. If it's loose, improperly installed, or worn out, water can seep through the gaps, causing leaks under the sink.",
  },
  {
    icon: Droplets,
    title: "Worn Out Seals",
    description: "Over time, the seals inside the garbage disposal can deteriorate due to constant use and exposure to water. When these seals fail, water escapes from the unit, leading to puddles underneath.",
  },
  {
    icon: AlertCircle,
    title: "Leaking Dishwasher or Drain Pipe Connection",
    description: "The pipes connecting the disposal to the dishwasher or drain can become loose or damaged. These leaks often appear under the sink and may be mistaken for a problem with the disposal itself.",
  },
  {
    icon: WrenchIcon,
    title: "Worn Internal Parts Causing Bottom Leaks",
    description: "Internal components of the disposal, like the grinding chamber, can wear out over time, especially in older units. This causes water to leak from the bottom, often signaling the need for a replacement.",
  },
];

const faqs = [
  {
    question: "Can I fix a jammed garbage disposal myself?",
    answer: "You can try using an allen wrench to manually turn the blades through the bottom of the unit or press the reset button. If the jam persists, professional plumbing help is needed to avoid damaging the disposal.",
  },
  {
    question: "What causes a garbage disposal to stop working?",
    answer: "A garbage disposal may stop due to a jam from food scraps, a burned-out motor, or electrical issues. Common culprits include bones, grease, or fibrous foods clogging the blades.",
  },
  {
    question: "What foods should I avoid putting in my garbage disposal?",
    answer: "Avoid fibrous foods like celery, grease, bones, and starchy items like pasta and potato peels. These can jam the blades, cause clogs, or damage the unit over time.",
  },
  {
    question: "How long does a garbage disposal typically last?",
    answer: "Most garbage disposals last 8-15 years, depending on usage and maintenance. Heavy use or improper items can shorten their lifespan significantly.",
  },
  {
    question: "Why does my garbage disposal smell bad?",
    answer: "Odors are caused by food buildup or grease trapped in the unit. Regular cleaning with ice, citrus peels, or baking soda and vinegar can help eliminate smells. If the smells persist call us so we can send one of our professional plumbers out to fix the situation.",
  },
  {
    question: "Why is my garbage disposal leaking?",
    answer: "Leaks often come from a loose sink flange, worn-out seals, or damaged internal parts. Dishwasher or drain pipe connections can also be the source of leaks.",
  },
  {
    question: "How do I know if my garbage disposal needs repair or replacement?",
    answer: "If the unit hums but doesn't spin, leaks persistently, or requires frequent resets, it may need repair. A burned-out motor or extensive internal damage often means replacement is more cost-effective.",
  },
  {
    question: "Is it safe to run my garbage disposal without water?",
    answer: "No, always run cold water while using the disposal to flush debris and prevent overheating. Running it dry can damage the blades and motor over time.",
  },
];

export function GarbageDisposalRepairReplacementContent() {
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
              Premium Garbage Disposal Repair & Replacement Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Garbage Disposal Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fast, Reliable Garbage Disposal Solutions
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
                alt="Professional garbage disposal repair and replacement services"
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
      <p className="text-lg text-gray-700 leading-relaxed">
        A garbage disposal makes cleaning up in the kitchen super easy, but when it gets clogged, jams, or starts leaking, it can be a real pain. Our skilled plumbers fix garbage disposal problems quickly, whether it's a simple repair or a complete replacement. We work hard to get your kitchen back to normal with dependable service you can count on. From clearing stubborn clogs to replacing worn-out units, we handle it all to save you time and stress. Contact us today for fast garbage disposal repair or installation.
      </p>
    </motion.div>
  </div>
</section>

{/* Common Problems Section */}
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
        Common Garbage Disposal Problems
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        Garbage disposals can break down for a variety of reasons. A common issue is a motor that's too small for your household's needs, struggling to keep up with daily use. Another culprit is grease, or stringy food scraps being put down the drain, causing clogs or jams. Over time, wear and tear or buildup from food debris can also slow down or damage the unit, leading to poor performance or leaks.
      </p>
    </motion.div>
  </div>
</section>

{/* Repair & Installation Section */}
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
        Garbage Disposal Repair & Installation
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        When your garbage disposal acts up, our plumbers start by inspecting the unit to pinpoint the issue. If it's just jammed, we can often clear the blockage and get it running smoothly again. However, if the motor is burned out or the unit is too worn, a replacement may be the best option. We'll guide you in choosing the right disposal for your home, ensuring it's powerful enough to handle your needs.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Garbage disposals come in different motor sizes, measured in horsepower (HP). For small households, like apartments or condos with one or two people, a ½ HP motor is usually enough. Larger families of four or more in a house may need a ¾ HP model to keep up with heavier use. We'll recommend the perfect size to match your lifestyle.
      </p>
    </motion.div>
  </div>
</section>

{/* Why Is My Garbage Disposal Leaking Section */}
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
        Why Is My Garbage Disposal Leaking?
      </h2>
      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Finding water under your sink can be frustrating, and it might mean your garbage disposal is leaking or the problem could be nearby. Below are four common reasons why garbage disposals leak, along with a summary of each issue.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {leakReasons.map((reason, index) => (
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
              Don't let a broken garbage disposal slow you down. Contact us today for expert repair and replacement services.
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
