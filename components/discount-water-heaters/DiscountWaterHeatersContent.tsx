"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Tag, Star, CheckCircle } from "lucide-react"; // Added Star and CheckCircle
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- Data (Unchanged) ---
const discounts = [
  {
    title: "$100 OFF Water Heater Replacement",
    image: "/100-OFF-1024x770.webp",
    linkText: "Claim $100 Off",
  },
  {
    title: "$250 OFF Tankless Water Heater Installation",
    image: "/250-OFF-1024x770.webp",
    linkText: "Claim $250 Off",
  },
  {
    title: "$25 OFF Your Water Heater Flush",
    image: "/25-OFF-1024x770.webp",
    linkText: "Claim $25 Off",
  },
  {
    title: "$300 OFF Whole House Water Filtration",
    image: "/300-OFF-1024x770.webp",
    linkText: "Claim $300 Off",
  },
];

const faqs = [
  {
    question: "Do you offer senior or military discounts?",
    answer: "Yes! We proudly offer special discounts for seniors and military personnel. Contact us to learn more about our current discount programs and how you can save on your water heater services.",
  },
  // ... (Remaining FAQs are as before)
  {
    question: "What areas do you service?",
    answer: "We provide water heater services throughout Southern California, including San Bernardino, Riverside, and surrounding areas. Check our service area page for the complete list of cities we cover.",
  },
  {
    question: "Do you offer water heater repair services?",
    answer: "Absolutely! In addition to replacements and installations, we specialize in water heater repairs. Our experienced technicians can diagnose and fix most water heater issues quickly and efficiently.",
  },
  {
    question: "Should I upgrade to a tankless water heater?",
    answer: "Tankless water heaters offer many benefits including energy efficiency, endless hot water, and space savings. They can be more expensive upfront, but many homeowners find the long-term savings worthwhile. Our team can assess your needs and help you decide if a tankless system is right for your home.",
  },
  {
    question: "How do I redeem these coupons?",
    answer: "Simply mention the coupon you'd like to use when you schedule your appointment or show it to our technician when they arrive. We'll apply the discount to your service. Please note that coupons cannot be combined with other offers.",
  },
];


// =================================================================
// 1. MAIN COMPONENT (PREMIUM DESIGN)
// =================================================================
export function DiscountWaterHeatersContent() {
  return (
    <>
      {/* -------------------- SECTION 1: HERO (HIGH-IMPACT VALUE) -------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pt-28 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center justify-center space-x-2 mb-6 text-xl font-bold text-[#EA5D19]">
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                  <span className="text-[#11110E]">Trusted 5-Star Service</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                Unlock Exclusive <span className="text-[#EA5D19]">Water Heater Discounts</span>
              </h1>

              {/* Subheading */}
              <p className="text-2xl text-gray-600 mb-8">
                Quality, certified plumbing services shouldn't break the bank. Claim our current special offers today for immediate savings!
              </p>

              {/* CTA Button */}
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-10 py-5 text-xl font-extrabold text-white shadow-xl ring-4 ring-orange-200 hover:shadow-2xl transition-all hover:scale-[1.03]"
              >
                <Phone className="h-6 w-6" />
                See All Offers & Get Started
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------- SECTION 2: DISCOUNT COUPONS (VISUAL FOCUS) -------------------- */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
              Claim Your Savings Now
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          {/* Discount Grid (2-column layout kept for larger card size, but cards are enhanced) */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {discounts.map((discount, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                // Enhanced "Coupon Look" Design
                className="relative bg-white shadow-2xl border-4 border-dashed border-[#FF6E2E] rounded-3xl overflow-hidden group transition-all duration-300 hover:shadow-3xl"
              >
                {/* Coupon Header (The main discount value) */}
                <div className="p-6 bg-[#EA5D19] text-white text-center">
                    <h3 className="text-1xl font-extrabold mb-1">{discount.title}</h3>
                </div>

                {/* Image Area */}
                <div className="relative h-[250px] w-full bg-gray-50 flex items-center justify-center p-8">
                  <Image
                    src={discount.image}
                    alt={discount.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Coupon Footer (CTA) */}
                <div className="p-4 bg-white text-center">
                  <Link
                    href="/quote"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-8 py-3 text-lg font-bold text-white shadow-md transition-all group-hover:bg-[#EA5D19] group-hover:scale-[1.02] duration-300"
                  >
                    <Tag className="h-3 w-3" />
                    {discount.linkText}
                  </Link>
                  <p className="mt-5 text-sm text-gray-500">
                      *Mention code at time of booking. Cannot be combined with other offers.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 3: VALUE & TRUST GUARANTEE -------------------- */}
      <section className="bg-[#11110E] py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-center max-w-6xl text-white"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Our 5-Star Value Guarantee
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-12" />
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="p-4">
                    <CheckCircle className="h-10 w-10 text-[#FF6E2E] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Quality & Savings Combined</h3>
                    <p className="text-gray-300">Our discounts are paired with the same certified, high-quality work that earned us hundreds of 5-star reviews across Southern California.</p>
                </div>
                <div className="p-4">
                    <CheckCircle className="h-10 w-10 text-[#FF6E2E] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Local & Reliable</h3>
                    <p className="text-gray-300">As a family-owned and locally operated business since 2019, we pride ourselves on honesty, punctuality, and transparent pricing on every job.</p>
                </div>
                <div className="p-4">
                    <CheckCircle className="h-10 w-10 text-[#FF6E2E] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Zero Hassle Redemption</h3>
                    <p className="text-gray-300">Simply mention the coupon or claim it online. We handle the rest, ensuring your discount is applied correctly without hidden fees or fine print surprises.</p>
                </div>
            </div>
            
            <Link
              href="/quote"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-10 py-5 text-xl font-extrabold text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.03] ring-4 ring-[#EA5D19]/30"
            >
              <Phone className="h-6 w-6" />
              Schedule Today & Lock In Your Savings
            </Link>
          </motion.div>
        </div>
      </section>

      {/* -------------------- SECTION 4: FAQ (CLEAN & PROFESSIONAL) -------------------- */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <h2 className="text-3xl font-extrabold text-[#11110E] sm:text-4xl mb-8 text-center">
              Discount & Service Questions
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-12" />
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
                    className="rounded-xl bg-gray-50 px-6 shadow-md border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg text-[#11110E] hover:text-[#EA5D19] py-5 flex items-start justify-between gap-2">
                      <span className="flex-grow">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-5 border-t border-gray-200 pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* -------------------- SECTION 5: FINAL CTA (COLOR POP) -------------------- */}
      <section className="bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
              Don't Miss Out! Claim Your Water Heater Discount Today.
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Ready to experience 5-star service and immediate savings? Click below to schedule your appointment and lock in your exclusive offer.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-xl font-extrabold text-[#EA5D19] shadow-lg hover:shadow-2xl transition-all hover:scale-105 ring-4 ring-white/30"
            >
              <Phone className="h-6 w-6" />
              Schedule & Claim Discount
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}