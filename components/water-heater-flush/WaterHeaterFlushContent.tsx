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

const maintenanceItems = [
  {
    title: "Understanding Mineral Buildup",
    description: "Over time, minerals present in water, particularly in hard water areas, can accumulate inside the heater, forming lime scale. This buildup not only reduces the heater's efficiency but can also lead to blockages and overheating.",
  },
  {
    title: "Flushing the System",
    description: "It's advisable to flush your tankless water heater every six months to one year. The exact frequency depends on the water hardness in your area. The harder water means more frequent maintenance.",
  },
  {
    title: "Checking for Leaks",
    description: "Regularly inspect the unit for any signs of leaks. Even small leaks can lead to significant water damage over time. Check all connections, including the inlet and outlet pipes.",
  },
  {
    title: "Filter Maintenance",
    description: "Many tankless heaters have filters that need cleaning or replacement. This is crucial as filters can become clogged with debris, reducing water flow and heating efficiency.",
  },
  {
    title: "Ventilation Inspection",
    description: "If your model requires it, ensure that the ventilation system is clear of obstructions. Proper ventilation prevents carbon monoxide buildup, which is a safety concern.",
  },
  {
    title: "Temperature and Pressure Relief Valve",
    description: "Test this valve annually to ensure it's functioning correctly. This valve is crucial for safety, preventing the heater from overheating or building up too much pressure.",
  },
];

const faqs = [
  {
    question: "Can you flush any brand of water heater?",
    answer: "We can flush any water heater, ensuring it continues functioning efficiently. Here's what you should know:\n\nWe handle a variety of brands, including Bradford White, A. O. Smith, Rheem, Kenmore, and Whirlpool, which are among the most common we encounter. However, our expertise also covers other manufacturers.\n\nFor tankless water heaters, we pay special attention to isolation valves. These valves are crucial for the flushing process, allowing us to isolate the heater from the rest of the plumbing system. This makes maintenance easier without affecting your water supply. If your tankless water heater lacks isolation valves, we can install them for you. This not only facilitates future maintenance but also improves the safety and efficiency of your system.",
  },
  {
    question: "How often do I need to clean my tankless water heater?",
    answer: "For those with a tankless hot water heater, scheduling maintenance at least once a year is advisable. This annual service helps ensure your unit remains in good health and operates at its best performance level.\n\nAt Water Heater SOS, we're more than willing to take care of your tankless water heater maintenance needs. Our team is not just committed, but dedicated to delivering the same high-quality service and customer satisfaction that has made us a favorite among your neighbors.",
  },
  {
    question: "Do you offer a yearly maintenance program for tankless water heaters?",
    answer: "Our maintenance services for tankless water heaters encompass a thorough inspection of all components to confirm they're functioning correctly. This includes:\n\nChecking for any signs of corrosion or damage.\nFlushing out accumulated mineral deposits to maintain efficiency.\nReplacing any parts that show signs of wear.\nEnsuring that gas pressure levels are optimal for safe and efficient operation.\n\nAdditionally, should any issues arise, rest assured that we provide repair services to promptly get your system back to its best performance.",
  },
  {
    question: "Should I flush my gas tank water heater?",
    answer: "Flushing your gas tank water heater is a vital maintenance task that should not be overlooked. This process benefits all water heaters, including those that run on gas.\n\nFlushing the tank removes sediment that naturally settles at the bottom over time. This sediment can insulate the heating element, reducing efficiency and potentially causing damage. Additionally, flushing allows for a thorough inspection of the tank's interior, helping to identify any signs of wear, corrosion, or other issues before they escalate into major problems.\n\nRegular maintenance through flushing not only prolongs the life of your water heater but also ensures it continues to operate efficiently, which translates to energy savings and fewer unexpected repairs.",
  },
  {
    question: "What can happen if I don't flush my water heater?",
    answer: "Regular flushing of your water heater is essential to maintain its efficiency and prevent increased utility costs. Without it, sediment can build up, leading to reduced water pressure, potential leaks through faucets, and even complete system failure.\n\nMoreover, for tankless models, skipping annual flushes might void the manufacturer's warranty, making maintenance not just a matter of efficiency but also of financial protection.",
  },
];

export function WaterHeaterFlushContent() {
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
                Premium Water Heater Flush Service
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Water Heater </span>Flush Service
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A tankless water heater is designed to provide hot water only when needed, which can lead to significant energy savings compared to traditional tank heaters. However, regular maintenance, particularly flushing, is essential to maintain its efficiency and longevity.
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
                src="/water-heater-flush.webp"
                alt="Water heater flush service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Benefits Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center mb-14"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Why Flush Your Water Heater?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
            <Check className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug">
            Prevents Mineral Buildup
          </h3>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Over time, minerals from your water supply, like calcium and magnesium, can accumulate inside the heat exchanger of a tankless water heater. This buildup, often called limescale, can reduce the unit's efficiency by insulating the heat exchanger, making it harder to heat the water. Flushing the system helps remove these deposits, ensuring your heater operates at peak performance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
            <Check className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug">
            Extends Lifespan
          </h3>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Regular maintenance, including flushing, can significantly extend the life of your tankless water heater. Neglecting this maintenance can lead to mineral buildup, increasing wear and tear on the internal components, and potentially causing your unit to fail sooner. By preventing these issues, you can ensure your unit lasts up to 20 years or more.
        </p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center mt-12"
    >
      <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        Our water heater flushing services are meticulously designed to eliminate sediment and mineral buildup, thereby enhancing the longevity and efficiency of your water heating system.
      </p>
    </motion.div>
  </div>
</section>

{/* What Maintenance Is Required Section */}
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
      What Maintenance Do Tankless Water Heaters Need?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mx-auto">
        Tankless water heaters are celebrated for their durability and efficiency, but like any mechanical system, they require regular maintenance to ensure optimal performance and longevity. Here's a detailed look at what maintenance is necessary:
      </p>
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {maintenanceItems.map((item, index) => (
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
              {item.title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {item.description}
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
              Common questions about water heater flushing
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
              Keep your water heater running efficiently with professional flushing services. Contact us today to schedule your maintenance.
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
