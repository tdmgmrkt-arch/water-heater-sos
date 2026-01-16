"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Phone, Home, Shield, Wrench } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function WholeHouseRepipeContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Whole-House Repipe
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Complete Plumbing System Replacement for Your Home
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Dealing with frequent leaks, discolored water, or low water pressure?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Old, corroded pipes can cause serious damage to your home and drive up repair costs. Our whole-house repiping service replaces outdated plumbing with modern, reliable materials that last decades.
              </p>
              <Link
                href="/quote?category=Leak%20%26%20Water%20Services&service=Whole-House%20Repipe"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <span className="sm:hidden">Get Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
                <Image
                  src="/placeholderimage.webp"
                  alt="Professional whole-house repipe services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              Whole-house repiping replaces all the old, corroded pipes in your home with modern copper or PEX pipes that provide clean water, strong pressure, and reliable performance for 50+ years. If your home has galvanized steel or polybutylene pipes, you're at risk for frequent leaks, rust-colored water, and expensive water damage. Our expert <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> assess your system and recommend the best repiping solution.
            </p>
            <p>
              Common signs you need repiping include multiple leaks in different locations, discolored or foul-smelling water, weak water pressure throughout the house, and visible corrosion on exposed pipes. Galvanized pipes corrode from the inside due to mineral buildup, restricting water flow and contaminating your water supply. Our repiping process involves replacing all supply lines while minimizing disruption to your daily routine. We also handle <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection services</Link> to identify hidden pipe damage before it causes major problems.
            </p>
            <p>
              Modern PEX piping offers flexibility, freeze resistance, and faster installation compared to traditional copper, though both materials provide excellent longevity and performance. Our skilled plumbers work efficiently to complete most residential repipes in 3-7 days, ensuring your water remains functional each evening. Whether you're dealing with frequent emergency repairs or planning ahead to protect your investment, we deliver professional repiping services throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 lg:text-4xl mb-3 sm:mb-4">
              Why Choose Whole-House Repiping?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Modern plumbing solutions that protect your home and family
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Eliminate Leaks",
                description: "Stop recurring leaks from corroded pipes that damage walls, floors, and foundations. New pipes eliminate the constant cycle of patch repairs and emergency calls. Prevent water damage, mold growth, and structural issues with a complete system replacement.",
                icon: Droplets,
              },
              {
                title: "Improve Water Quality",
                description: "End rust-colored, foul-smelling water caused by corroded galvanized pipes. Modern pipes deliver clean, clear water free from metal contamination and sediment. Protect your family's health with safe drinking water and improved taste throughout your home.",
                icon: Shield,
              },
              {
                title: "Increase Water Pressure",
                description: "Restore strong, consistent water flow to all fixtures. Corroded pipes narrow from mineral buildup, reducing pressure dramatically. New pipes provide full water pressure for showers, faucets, and appliances, improving daily comfort and appliance efficiency.",
                icon: Home,
              },
              {
                title: "Long-Term Solution",
                description: "Invest in pipes that last 50-100 years with proper maintenance. Stop wasting money on temporary repairs and rising water bills. PEX and copper pipes resist corrosion, freeze damage, and leaks, providing reliable performance and peace of mind for decades.",
                icon: Wrench,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-8 shadow-md sm:shadow-lg border border-gray-200"
              >
                <div className="mb-3 sm:mb-4 inline-flex rounded-lg bg-[#EA5D19] p-2 sm:p-3">
                  <benefit.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white lg:text-4xl mb-4 sm:mb-6">
              Get a Free Estimate Today!
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-5 sm:mb-8 max-w-2xl mx-auto">
              Don't wait for old pipes to fail and cause expensive damage. Contact us today for expert whole-house repiping services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+18006974014"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                (800) 697-4014
              </Link>
              <Link
                href="/quote?category=Leak%20%26%20Water%20Services&service=Whole-House%20Repipe"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ category="wholeHouseRepipe" subtitle="Common questions about whole-house repiping" />
    </>
  );
}
