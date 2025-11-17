"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Droplets, Thermometer, Volume2, Flame, AlertCircle } from "lucide-react";
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

const repairs = [
  {
    icon: Thermometer,
    title: "No Hot Water",
    description: "This could be due to a malfunctioning heating element, thermostat, or gas supply issues.",
  },
  {
    icon: AlertCircle,
    title: "Inconsistent Water Temperature",
    description: "Often caused by a faulty thermostat or sediment buildup inside the tank.",
  },
  {
    icon: Droplets,
    title: "Leaking Water Heater",
    description: "Leaks can originate from various places, such as the drain valve, pressure relief valve, or tank corrosion.",
  },
  {
    icon: Volume2,
    title: "Unusual Noises",
    description: "Sounds like popping or rumbling are typically signs of sediment accumulation at the bottom of the tank.",
  },
  {
    icon: Flame,
    title: "Pilot Light Issues",
    description: "For gas water heaters, the pilot light might go out or have trouble staying lit due to a dirty or damaged thermocouple.",
  },
];

const faqs = [
  {
    question: "What plumbing services do you offer besides water heaters?",
    answer: "We offer a full range of plumbing services including leak detection and repair, shower repair and installation, garbage disposal services, toilet repair and installation, and faucet and fixture services. Our technicians are equipped to handle any plumbing need in your home or business.",
  },
  {
    question: "How quickly can you respond to a plumbing emergency?",
    answer: "We understand that plumbing emergencies can't wait. We offer prompt service and can often dispatch a technician the same day for urgent issues like major leaks, water heater failures, or toilet backups. Contact us immediately for emergency plumbing assistance.",
  },
  {
    question: "Do you offer warranties on your plumbing work?",
    answer: "Yes, we stand behind our work with warranties on both parts and labor. The specific warranty terms vary depending on the service and parts used. Our team will explain all warranty details before starting any work.",
  },
  {
    question: "How can I prevent common plumbing problems?",
    answer: "Regular maintenance is key. Schedule annual inspections, avoid putting grease down drains, don't flush inappropriate items, and address small leaks immediately. We offer maintenance services to help prevent costly plumbing issues before they start.",
  },
  {
    question: "What should I do if I have a water leak?",
    answer: "First, turn off the water supply to the affected area or your main water valve if needed. Then contact us immediately. Water leaks can cause significant damage quickly, so prompt professional attention is essential to minimize property damage.",
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Yes, all our plumbers are fully licensed, insured, and experienced. We maintain the highest standards of professionalism and safety in all our work, giving you peace of mind that your plumbing is in expert hands.",
  },
  {
    question: "Do you provide free estimates for plumbing services?",
    answer: "Yes, we provide free estimates for most plumbing projects. Contact us to describe your plumbing needs, and we'll provide a detailed, no-obligation quote. For emergency repairs, we'll assess the situation on-site and provide pricing before starting work.",
  },
];

export function PlumbingContent() {
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
              Premium Plumbing Services
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Plumbing Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Complete Plumbing Solutions for Your Home and Business
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
                alt="Professional plumbing services"
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
        At Water Heater SOS, our expertise isn't limited to water heaters; we offer various plumbing services to ensure your home or business functions seamlessly. Here's a detailed look at the additional services our plumbers provide:
      </p>
    </motion.div>
  </div>
</section>

{/* Services Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left space-y-12"
    >
      <div>
        <h2 className="text-3xl font-bold text-[#11110E] mb-4">
          Leak Detection and Water Leak Repairs
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Water leaks can lead to significant property damage and waste valuable resources. Our skilled technicians are adept at identifying and repairing leaks, no matter how concealed they might be. We use advanced leak detection technologies to pinpoint the exact location of leaks in walls, floors, or underground, preventing further damage. Once found, we provide swift repair services for leaks in pipes, faucets, toilets, and under-sink areas, minimizing inconvenience and conserving water.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#11110E] mb-4">
          Shower Repair and Installation
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          A malfunctioning shower can be a major inconvenience. Whether it's low water pressure, leaks, or a damaged shower head, our technicians are here to fix it. We offer comprehensive repair services for shower components, including valves, handles, and fixtures. Additionally, we can assist with installing new showers and helping you choose fixtures that match your aesthetic preferences while ensuring they meet your functional needs, like water efficiency or accessibility features.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#11110E] mb-4">
          Garbage Disposal Installation and Repair
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          A garbage disposal is a kitchen convenience until it stops working. Our services include the installation of new garbage disposals tailored to your kitchen's size and needs. If your current unit is malfunctioning or making unusual noises, our technicians can diagnose the issue, whether it requires a simple reset or parts replacement. We ensure your disposal operates safely and efficiently.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#11110E] mb-4">
          Toilet Repair, Installation, and Maintenance
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Toilet issues can range from simple fixes like running toilets to complex problems like a cracked tank. We provide thorough inspection and repair services for all toilet components, from flappers to fill valves. If you want to upgrade or replace your toilet for better water conservation or aesthetics, we carefully guide you through the selection process and handle the installation. Our maintenance services help prevent common issues, ensuring your toilet functions flawlessly for years.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#11110E] mb-4">
          Faucet and Fixture Services
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dripping faucets and broken fixtures waste water and can be pretty irritating. Our services encompass the repair, replacement, or installation of faucets across your home, from kitchen sinks to bathroom vanities. We help enhance the look and functionality of your fixtures, including options for touchless operation or water-efficient models.
        </p>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed pt-8">
        At Water Heater SOS, we're committed to providing quality, reliability, and professionalism in all our plumbing services. Our team can assist you with a minor drip or a major plumbing catastrophe. Contact us today to see how we can help with your plumbing needs.
      </p>
    </motion.div>
  </div>
</section>

{/* Water Heater Repairs Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Water Heater Repairs
      </h2>
      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
        We understand that water heater issues can disrupt your daily routine. From temperature inconsistencies to complete system failures, we've seen it all. Our experienced team is equipped to diagnose and fix these common problems swiftly, ensuring you're never without hot water for long. Here's a look at some of the most frequent water heater repair issues we encounter:
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {repairs.map((repair, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gray-50 p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="mb-4 inline-flex rounded-full bg-[#EA5D19]/10 p-3">
            <repair.icon className="h-6 w-6 text-[#EA5D19]" />
          </div>
          <h3 className="text-xl font-bold text-[#11110E] mb-3">
            {repair.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {repair.description}
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
              Schedule an Appointment Today!
            </h2>

            <div className="h-1 w-20 bg-[#FFFF] mx-auto rounded-full mb-8" />

            <p className="text-xl text-white/90 mb-8 max-w-7xl mx-auto">
              From water heaters to full plumbing services, we're here to help. Contact us today for expert plumbing solutions.
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
