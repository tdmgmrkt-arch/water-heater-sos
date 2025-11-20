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

const slabLeakSigns = [
  {
    title: "Unusually High Water Bills",
    description: "If your water bill spikes without a clear reason, like increased usage, it could mean a hidden slab leak is wasting water under your home. These leaks often go unnoticed, quietly driving up costs. Our team uses advanced tools to find and fix the leak quickly. This saves you money and prevents further damage to your foundation.",
  },
  {
    title: "Damp or Warm Spots on Your Floor",
    description: "Wet, soggy, or unusually warm patches on your floor, especially in areas like bathrooms or kitchens, can signal a slab leak. Warm spots might mean a hot water line is leaking under the slab. We can pinpoint the exact location with our non-invasive cameras and repair it before it causes mold or structural issues. Don't ignore these signs, as they often point to a serious problem.",
  },
  {
    title: "Low Water Pressure",
    description: "If your faucets or shower suddenly have weak water flow, a slab leak could be reducing pressure by allowing water to escape under your foundation. This can happen when pipes crack or corrode over time. Acting quickly can prevent bigger plumbing issues down the line.",
  },
  {
    title: "Cracks in Floors or Walls",
    description: "Small cracks appearing in your floors, walls, or foundation might indicate a slab leak shifting the soil beneath your home. Water from the leak can weaken the foundation, causing structural damage. Early repairs can save you from costly foundation work later.",
  },
  {
    title: "Strange Sounds from Pipes",
    description: "Hearing running water, hissing, or gurgling sounds in your pipes when no faucets are on could mean a slab leak is letting water escape. These noises often come from water leaking under pressure beneath your home. We'll fix it fast to stop the noise and protect your plumbing.",
  },
  {
    title: "Mold or Mildew Smells",
    description: "A musty odor or visible mold growth in areas like under carpets or near baseboards can point to a slab leak causing hidden moisture buildup. This dampness creates a perfect spot for mold, which can harm your health and home. We'll help keep your home safe and dry.",
  },
];

const faqs = [
  {
    question: "Can leak detection find leaks in walls or ceilings?",
    answer: "Yes, our advanced tools, like moisture detectors and infrared cameras, can find leaks hidden in walls or ceilings often without causing damage. These leaks come from faulty pipes or fittings and can lead to mold or structural issues if ignored.",
  },
  {
    question: "Can leak detection find slab leaks under my foundation?",
    answer: "Yes, our advanced tools, like cameras and acoustic leak detection, are designed to locate slab leaks hidden beneath your home's foundation. These leaks can be tricky to spot but cause serious damage if ignored.",
  },
  {
    question: "What happens after you find a leak?",
    answer: "Once we locate the leak, our team will explain the issue and recommends the best repair options, like a reroute of the plumbing lines, trenchless fixes, or targeted repairs. We work quickly to fix the leak, preventing further damage to your home. Our goal is to restore your plumbing with minimal hassle. You'll know exactly what's happening every step of the way.",
  },
  {
    question: "What are leak detection services?",
    answer: "Leak detection services use advanced tools like cameras, moisture detectors, and audio equipment to find hidden water leaks in your home's plumbing without tearing up your property. We locate leaks in pipes, slabs, or walls with precision to prevent damage and save you money. These non-invasive methods help us identify issues quickly.",
  },
  {
    question: "How long does a leak detection service take?",
    answer: "Most leak detection jobs take one to two hours, depending on the size of your home and the complexity of the issue.",
  },
  {
    question: "How often should I get leak detection done?",
    answer: "You only need leak detection if you suspect you have a potential leak somewhere on your home or property. If you are not sure, you can give us a call, and we can come out and perform a pressure test to see if your plumbing systems are holding correctly.",
  },
  {
    question: "Can leak detection help prevent mold in my home?",
    answer: "Yes, leak detection can prevent mold growth by finding hidden leaks that create damp conditions where mold thrives. Fixing leaks early keeps your home safe and healthy. We'll work fast to protect your property from costly mold issues.",
  },
  {
    question: "Will my water need to be shut off during leak detection?",
    answer: "In most cases, we can perform leak detection without shutting off your water, using non-invasive tools like audio devices and infrared cameras to find the problem. For certain tests, we may briefly turn off the water to get accurate results. We'll keep you informed and ensure your home stays functional during the process.",
  },
];

export function LeakDetectionServicesContent() {
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
              Premium Leak Detection Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Leak Detection Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Do you suspect you have either a slab leak or a leak in your walls?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are dedicated to keeping your home safe from hidden water leaks that can cause serious damage. Our plumbing technicians use cutting-edge tools like moisture detectors, audio devices, and tiny cameras to find leaks without tearing up your property. We take a non-invasive approach, pinpointing the exact source of the problem so we can fix it fast and right. With years of experience, our team gives you the confidence that your plumbing is in good hands and your home is protected.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Book Your Appointment Today!
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
                alt="Leak detection service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Slab Leak and Foundation Leak Repair Section */}
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
        Slab Leak and Foundation Leak Repair
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        No matter what type of foundation your home or business has, leaks beneath it can lead to costly damage if left unchecked. Our skilled team specializes in detecting and repairing slab and foundation leaks to keep your property in great shape. Delaying repairs can make the problem worse and more expensive, so count on us for fast, reliable solutions.
      </p>
    </motion.div>
  </div>
</section>

{/* How We Fix Slab and Foundation Leaks Section */}
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
        How We Fix Slab and Foundation Leaks
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        At Water Heater SOS, we're experts in underground plumbing and know how to handle even the toughest leak repairs. We start by using advanced diagnostic tools, like electronic line tracing, listening devices, hydrostatic pressure testing, infrared video cameras, and static leak isolation tests, to find the exact location and cause of the leak. Once we've got a clear picture of the problem, we create a tailored plan to fix it efficiently. Our team combines traditional repair methods with innovative trenchless techniques to minimize digging and keep your property looking great, saving you time and money while ensuring long-lasting results.
      </p>
    </motion.div>
  </div>
</section>

{/* Signs You May Have a Slab Leak */}
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
        Signs You May Have a Slab Leak
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {slabLeakSigns.map((sign, index) => (
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
              {sign.title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {sign.description}
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
              Common questions about leak detection services
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
              Book Your Appointment Today!
            </h2>

            <div className="h-1 w-20 bg-[#FFFF] mx-auto rounded-full mb-8" />

            <p className="text-xl text-white/90 mb-8 max-w-7xl mx-auto">
              Don't let hidden leaks damage your home. Contact us today for professional leak detection and repair services.
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
