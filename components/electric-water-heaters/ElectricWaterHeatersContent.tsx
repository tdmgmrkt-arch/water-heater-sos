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
    description: "This could be due to a tripped circuit breaker, a faulty thermostat, or a burned-out heating element.",
  },
  {
    title: "Water is Too Hot",
    description: "This is often caused by a malfunctioning thermostat set too high or a faulty temperature and pressure relief valve.",
  },
  {
    title: "Water Takes Too Long to Heat",
    description: "This could indicate sediment buildup in the tank, a failing heating element, or an undersized unit for your household needs.",
  },
  {
    title: "Strange Noises",
    description: "Popping, rumbling, or cracking sounds typically indicate sediment buildup at the bottom of the tank that needs to be flushed.",
  },
  {
    title: "Rusty or Discolored Water",
    description: "This could be caused by a corroding anode rod, rust inside the tank, or sediment accumulation that needs attention.",
  },
  {
    title: "Leaking Tank",
    description: "Leaks can occur from loose connections, a faulty T&P valve, or internal tank corrosion requiring immediate attention.",
  },
  {
    title: "Frequent Tripping of Circuit Breaker",
    description: "This could indicate a faulty heating element, thermostat issues, or electrical problems that need professional diagnosis.",
  },
  {
    title: "Reduced Hot Water Capacity",
    description: "Sediment buildup reduces tank capacity over time, or a failing lower heating element may not be working properly.",
  },
];

const benefits = [
  {
    title: "Lower Upfront Cost",
    description: "Electric water heaters typically cost less to purchase and install compared to gas or tankless units, making them an affordable option for many homeowners.",
  },
  {
    title: "Safe & Easy Installation",
    description: "Electric water heaters don't require gas lines or venting, making them safer and easier to install in various locations throughout your home.",
  },
  {
    title: "Consistent Hot Water",
    description: "Modern electric water heaters provide reliable, consistent hot water for your entire household with minimal temperature fluctuations.",
  },
  {
    title: "Low Maintenance",
    description: "With fewer components than gas units, electric water heaters require less maintenance and have fewer potential points of failure.",
  },
  {
    title: "Quiet Operation",
    description: "Electric water heaters operate silently without the combustion noise associated with gas units, perfect for homes where the unit is near living spaces.",
  },
  {
    title: "High Efficiency Options",
    description: "Modern electric water heaters, especially heat pump models, can achieve efficiency ratings of 200-300%, significantly reducing energy costs.",
  },
];

const faqs = [
  {
    question: "How long do electric water heaters last?",
    answer: "A well-maintained electric water heater typically lasts 10-15 years. Regular maintenance like flushing the tank annually and replacing the anode rod every 3-5 years can extend its lifespan.",
  },
  {
    question: "What size electric water heater do I need?",
    answer: "The size depends on your household size and hot water usage. Generally, a 40-gallon tank works for 2-3 people, 50 gallons for 3-4 people, and 80 gallons for 5+ people. We can help determine the right size for your needs.",
  },
  {
    question: "How much does it cost to install an electric water heater?",
    answer: "Installation costs vary based on the unit size, any necessary electrical upgrades, and installation complexity. Contact us for a free quote tailored to your specific situation.",
  },
  {
    question: "Are electric water heaters more expensive to operate than gas?",
    answer: "While electricity rates vary by location, electric water heaters are often comparable in operating costs due to their higher efficiency. Heat pump electric water heaters can actually be cheaper to operate than gas units.",
  },
  {
    question: "Can I replace my gas water heater with an electric one?",
    answer: "Yes, but it may require electrical upgrades to support the higher amperage. Our technicians can assess your home's electrical system and provide recommendations for a smooth conversion.",
  },
  {
    question: "How often should I flush my electric water heater?",
    answer: "We recommend flushing your electric water heater at least once a year to remove sediment buildup. In areas with hard water, more frequent flushing (every 6 months) may be beneficial.",
  },
];

export function ElectricWaterHeatersContent() {
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
                Reliable Electric Water Heater Service
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Electric Water </span>Heater Service
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Is your electric water heater not producing enough hot water?
                Electric water heaters are dependable, safe, and efficient options for homes without gas lines or for homeowners who prefer electric appliances.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Whether you need a repair, replacement, or new installation, our expert technicians have the experience to handle all electric water heater brands and models. We provide fast, reliable service to restore your hot water quickly.
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
                src="/electric-water-heater.webp"
                alt="Electric water heater repair and installation service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Reasons Electric Water Heaters Breakdown */}
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
              Common Reasons Electric Water Heaters Breakdown
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

      {/* Benefits of Electric Water Heaters Section */}
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
              Benefits of Electric Water Heaters
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              Electric water heaters offer many advantages for homeowners. Whether you&apos;re replacing an existing unit or installing a new one, here are the key benefits of choosing an electric water heater for your home.
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
              Common questions about electric water heaters
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
              Need electric water heater repair, replacement, or installation? Contact us today for expert service you can trust.
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
