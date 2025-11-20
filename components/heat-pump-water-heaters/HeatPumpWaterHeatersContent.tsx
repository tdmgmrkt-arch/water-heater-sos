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

const repairIssues = [
  {
    title: "Low Heat Output",
    description: "If your water isn't getting hot enough, it could be due to a faulty heating element or a thermostat issue.",
  },
  {
    title: "Excessive Noise",
    description: "Heat pump water heaters can sometimes be noisy, especially if installed improperly.",
  },
  {
    title: "Frequent Cycling",
    description: "If your water heater keeps turning on and off, it could be due to a faulty thermostat or a clogged air filter. This can cause high energy bills.",
  },
  {
    title: "Leaking",
    description: "Water leaking from your water heater can cause problems, from water damage to mold growth.",
  },
  {
    title: "Frozen Coils",
    description: "In colder climates like some parts of California, the coils in your heat pump water heater can freeze, causing it to stop working.",
  },
];

const faqs = [
  {
    question: "What is a heat pump water heater?",
    answer: "A heat pump water heater uses electricity to move heat from the surrounding air into the water rather than generating heat directly.\n\nImagine a heat pump water heater as a magical box that can make your water hot without burning gas.\n\nInside the box, there's a fan that sucks in the air from the room. This air passes over some tubes filled with a special liquid called refrigerant. As the air blows over the tubes, the refrigerant sucks up the heat from the air.\n\nThe warm refrigerant then gets pumped into a compressor, which is like a tiny machine that squeezes the refrigerant and makes it even hotter. This super-hot refrigerant then goes into another part of the box, where it gives its heat to the water inside the tank.",
  },
  {
    question: "Are heat pump water heaters energy-efficient?",
    answer: "They are two to three times more efficient than traditional electric or gas water heaters and up to 50% more efficient than gas water heaters.",
  },
  {
    question: "Are there rebates for heat pump water heaters in California?",
    answer: "California offers several incentives and rebates for homeowners who switch to heat pump water heaters. The specific rebates change from time-to-time so it's best to call or text us to inquire about the current rebates.",
  },
  {
    question: "Are heat pump water heaters noisy?",
    answer: "Heat pump water heaters make some noise, but it's usually not very loud. The noise comes from the compressor and the fan, which can sound like a quiet refrigerator or air conditioner.",
  },
  {
    question: "How long do heat pump water heaters last?",
    answer: "Heat pump water heaters typically last between 10 and 15 years, which is about the same lifespan as a traditional electric water heater.",
  },
];

export function HeatPumpWaterHeatersContent() {
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
              Premium Heat Pump Water Heater Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Heat Pump Water Heaters
              </h1>
              <p className="text-xl text-gray-600 mb-8">
              Is your heat pump water heater giving you trouble? We offer fast, reliable repairs to restore your home’s hot water. And if you're ready to install a new heat pump water heater, our technicians can help you choose the right model and handle the full installation.
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
                src="/heat-pump.webp"
                alt="Heat pump water heater repair and installation service"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* What is a Heat Pump Water Heater Section */}
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
        What is a Heat Pump Water Heater?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Heat pump water heaters work by pulling warmth from the air around them and using it to heat the water in the tank. This super-efficient process uses up to 73% less energy than a standard electric water heater. That means lower energy bills for you and cleaner emissions for the environment.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        These water heaters come in different sizes to fit your household's needs, from 40 to 80 gallons. The bigger the tank, the more hot water it can hold. Some even have smart features that let you control the temperature and schedule hot water usage from your phone.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Installing a heat pump water heater is more involved than a traditional tank water heater, but the long-term savings make it worth the effort. Plus, many utility companies offer rebates to help offset the cost.
      </p>
    </motion.div>
  </div>
</section>

{/* Need to Repair Your Heat Pump Water Heater */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Need to Repair Your Heat Pump Water Heater?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {repairIssues.map((issue, index) => (
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
              {issue.title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {issue.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* California Ban on Gas Water Heater Section */}
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
        California Ban on Gas Water Heater
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        California is taking a significant step towards reducing its carbon footprint and improving air quality by phasing out the sale of gas-powered furnaces and water heaters by 2030. This decision is part of a broader strategy to combat climate change and meet federal air quality standards.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Gas appliances, including furnaces and water heaters, contribute significantly to air pollution, particularly nitrogen oxide (NOx) emissions. These emissions have been linked to various health issues, including respiratory problems and increased risks of heart attack, stroke, lung cancer, and premature death.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        By transitioning to more eco-friendly alternatives, such as heat pump water heaters, California aims to reduce these harmful emissions and improve public health.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Heat pump water heaters are more energy-efficient than traditional gas water heaters. They use electricity to move heat from one place to another, rather than generating heat by burning natural gas. This process is much more efficient, resulting in lower energy consumption and reduced greenhouse gas emissions.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        By banning the sale of gas-powered furnaces and water heaters in 2030, California is encouraging the adoption of heat pump technology, which will help the state meet its ambitious climate goals and transition to a cleaner, more sustainable energy future.
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
              Common questions about heat pump water heaters
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
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
              Ready to upgrade to a heat pump water heater or need expert repairs? Contact us today for professional service and installation.
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
