"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Tag, Star, CheckCircle } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

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



// =================================================================
// 1. MAIN COMPONENT (PREMIUM DESIGN)
// =================================================================
export function DiscountWaterHeatersContent() {
  return (
    <>
      {/* -------------------- SECTION 1: HERO (HIGH-IMPACT VALUE) -------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center justify-center space-x-2 mb-4 sm:mb-6 text-base sm:text-xl font-bold text-[#EA5D19]">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 fill-amber-400 text-amber-400" />
                  <span className="text-[#11110E]">Trusted 5-Star Service</span>
              </div>

              {/* Heading */}
              <h1 className="text-2xl font-extrabold text-[#11110E] sm:text-3xl lg:text-5xl mb-3 sm:mb-4 leading-tight">
                Unlock Exclusive <span className="text-[#EA5D19]">Water Heater Discounts</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-xl lg:text-2xl text-gray-600 mb-5 sm:mb-8">
                Quality, certified plumbing services shouldn't break the bank. Claim our current special offers today for immediate savings!
              </p>

              {/* CTA Button */}
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-10 sm:py-5 text-sm sm:text-xl font-extrabold text-white shadow-xl ring-2 sm:ring-4 ring-orange-200 hover:shadow-2xl transition-all hover:scale-[1.03]"
              >
                <Phone className="h-4 w-4 sm:h-6 sm:w-6" />
                <span className="sm:hidden">Get Started</span>
                <span className="hidden sm:inline">See All Offers & Get Started</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------- SECTION 2: DISCOUNT COUPONS (VISUAL FOCUS) -------------------- */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
              Claim Your Savings Now
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          {/* Discount Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {discounts.map((discount, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white shadow-lg sm:shadow-2xl border-2 sm:border-4 border-dashed border-[#FF6E2E] rounded-2xl sm:rounded-3xl overflow-hidden group transition-all duration-300 hover:shadow-3xl"
              >
                {/* Coupon Header */}
                <div className="p-3 sm:p-6 bg-[#EA5D19] text-white text-center">
                    <h3 className="text-xs sm:text-xl font-extrabold">{discount.title}</h3>
                </div>

                {/* Image Area */}
                <div className="relative h-[120px] sm:h-[250px] w-full bg-gray-50 flex items-center justify-center p-2 sm:p-8">
                  <Image
                    src={discount.image}
                    alt={discount.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Coupon Footer (CTA) */}
                <div className="p-2 sm:p-4 bg-white text-center">
                  <Link
                    href="/quote"
                    className="w-full inline-flex items-center justify-center gap-1 sm:gap-2 rounded-full bg-[#11110E] px-3 py-2 sm:px-8 sm:py-3 text-xs sm:text-lg font-bold text-white shadow-md transition-all group-hover:bg-[#EA5D19] group-hover:scale-[1.02] duration-300"
                  >
                    <Tag className="h-3 w-3 hidden sm:block" />
                    {discount.linkText}
                  </Link>
                  <p className="mt-2 sm:mt-5 text-[10px] sm:text-sm text-gray-500">
                      *Mention code at time of booking.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 3: VALUE & TRUST GUARANTEE -------------------- */}
      <section className="bg-[#11110E] py-10 sm:py-14 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-center max-w-6xl text-white"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold mb-3 lg:mb-6">
              Our 5-Star Value Guarantee
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-6 sm:mb-12" />

            <div className="grid md:grid-cols-3 gap-4 sm:gap-8 text-left">
                <div className="p-3 sm:p-4">
                    <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-[#FF6E2E] mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-xl font-bold mb-2">Quality & Savings Combined</h3>
                    <p className="text-sm sm:text-base text-gray-300">Our discounts are paired with the same certified, high-quality work that earned us hundreds of 5-star reviews across Southern California.</p>
                </div>
                <div className="p-3 sm:p-4">
                    <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-[#FF6E2E] mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-xl font-bold mb-2">Local & Reliable</h3>
                    <p className="text-sm sm:text-base text-gray-300">As a family-owned and locally operated business since 2019, we pride ourselves on honesty, punctuality, and transparent pricing on every job.</p>
                </div>
                <div className="p-3 sm:p-4">
                    <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-[#FF6E2E] mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-xl font-bold mb-2">Zero Hassle Redemption</h3>
                    <p className="text-sm sm:text-base text-gray-300">Simply mention the coupon or claim it online. We handle the rest, ensuring your discount is applied correctly without hidden fees or fine print surprises.</p>
                </div>
            </div>

            <Link
              href="/quote"
              className="mt-6 sm:mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-10 sm:py-5 text-sm sm:text-xl font-extrabold text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.03] ring-2 sm:ring-4 ring-[#EA5D19]/30"
            >
              <Phone className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="sm:hidden">Lock In Savings</span>
              <span className="hidden sm:inline">Schedule Today & Lock In Your Savings</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* -------------------- SECTION 4: FAQ (CLEAN & PROFESSIONAL) -------------------- */}
      <FAQ category="discountWaterHeaters" title="Discount & Service Questions" />

      {/* -------------------- SECTION 5: FINAL CTA (COLOR POP) -------------------- */}
      <section className="bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold text-white lg:text-4xl mb-4 sm:mb-6">
              Don't Miss Out! Claim Your Water Heater Discount Today.
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-5 sm:mb-8 max-w-3xl mx-auto">
              Ready to experience 5-star service and immediate savings? Click below to schedule your appointment and lock in your exclusive offer.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 sm:px-10 sm:py-5 text-sm sm:text-xl font-extrabold text-[#EA5D19] shadow-lg hover:shadow-2xl transition-all hover:scale-105 ring-2 sm:ring-4 ring-white/30"
            >
              <Phone className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="sm:hidden">Claim Discount</span>
              <span className="hidden sm:inline">Schedule & Claim Discount</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}