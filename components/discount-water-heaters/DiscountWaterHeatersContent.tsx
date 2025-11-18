"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Tag } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const discounts = [
  {
    title: "$100 OFF Water Heater Replacement",
    image: "/100-OFF-1024x770.webp",
    description: "Save $100 on your new water heater replacement installation",
  },
  {
    title: "$250 OFF Tankless Water Heater Installation",
    image: "/250-OFF-1024x770.webp",
    description: "Get $250 off when you upgrade to a tankless water heater system",
  },
  {
    title: "$25 OFF Water Heater Flush",
    image: "/25-OFF-1024x770.webp",
    description: "Save $25 on professional water heater flush and maintenance service",
  },
  {
    title: "$300 OFF Whole House Water Filtration",
    image: "/300-OFF-1024x770.webp",
    description: "Receive $300 off installation of a whole house water filtration system",
  },
];

const faqs = [
  {
    question: "Do you offer senior or military discounts?",
    answer: "Yes! We proudly offer special discounts for seniors and military personnel. Contact us to learn more about our current discount programs and how you can save on your water heater services.",
  },
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

export function DiscountWaterHeatersContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
                <Tag className="inline h-4 w-4 mr-1" />
                Special Offers & Discounts
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Discount Water Heaters
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Affordable Pricing, 5-Star Service
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Water Heater SOS, we believe everyone deserves reliable hot water without breaking the bank. That's why we offer exclusive discounts on water heater installations, repairs, and maintenance services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Whether you need a traditional tank replacement, want to upgrade to an energy-efficient tankless system, or need routine maintenance, our special offers help you save while getting the quality service you deserve.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Claim Your Discount Today!
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discount Coupons Section */}
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
              Current Special Offers
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {discounts.map((discount, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all overflow-hidden"
              >
                <div className="relative h-[400px] w-full">
                  <Image
                    src={discount.image}
                    alt={discount.title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-2xl font-bold text-[#11110E] mb-3">
                    {discount.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {discount.description}
                  </p>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 text-[#EA5D19] font-semibold hover:text-[#FF6E2E] transition-colors"
                  >
                    Claim This Offer
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-center max-w-3xl"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
              Quality Service at Great Prices
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Don't let the cost of water heater services stop you from getting the hot water your family needs. Our discount offers make it easier than ever to get professional installation, repair, or maintenance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              All of our services come with the same quality workmanship and customer care that has earned us hundreds of 5-star reviews. We're family-owned and locally operated, serving Southern California since 2019.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Get Your Free Quote Now
            </Link>
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

      {/* Final CTA Section */}
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
              Ready to Save on Water Heater Services?
            </h2>
            <div className="h-1 w-20 bg-white mx-auto rounded-full mb-8" />
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact us today to schedule your appointment and take advantage of our exclusive discount offers. Our team is ready to help you save!
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Schedule Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
