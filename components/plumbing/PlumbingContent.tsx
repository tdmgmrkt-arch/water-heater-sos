"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Droplets, Thermometer, Volume2, Flame, AlertCircle } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";

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

export function PlumbingContent() {
  return (
    <>
      <SetFooterCTA
        title="Need Plumbing Services?"
        description="From water heaters to full plumbing services, we're here to help. Contact us today for expert plumbing solutions."
        quoteLink="/quote"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Premium Plumbing Services
              </span>
              <h1 className="text-2xl font-bold text-[#11110E] sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Plumbing Services
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-5 sm:mb-8">
                Complete Plumbing Solutions for Your Home and Business
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sm:hidden">Get Free Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment Today!</span>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl"
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
<section className="py-8 sm:py-12 lg:py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left"
    >
      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
        At Water Heater SOS, our expertise isn't limited to water heaters; we offer various plumbing services to ensure your home or business functions seamlessly. Here's a detailed look at the additional services our plumbers provide:
      </p>
    </motion.div>
  </div>
</section>

{/* Services Section */}
<section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left space-y-8 sm:space-y-12"
    >
      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#11110E] mb-3 sm:mb-4">
          Leak Detection and Water Leak Repairs
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
          Water leaks can lead to significant property damage and waste valuable resources. Our skilled technicians are adept at identifying and repairing leaks, no matter how concealed they might be. We use advanced leak detection technologies to pinpoint the exact location of leaks in walls, floors, or underground, preventing further damage. Once found, we provide swift repair services for leaks in pipes, faucets, toilets, and under-sink areas, minimizing inconvenience and conserving water.
        </p>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#11110E] mb-3 sm:mb-4">
          Shower Repair and Installation
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
          A malfunctioning shower can be a major inconvenience. Whether it's low water pressure, leaks, or a damaged shower head, our technicians are here to fix it. We offer comprehensive repair services for shower components, including valves, handles, and fixtures. Additionally, we can assist with installing new showers and helping you choose fixtures that match your aesthetic preferences while ensuring they meet your functional needs, like water efficiency or accessibility features.
        </p>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#11110E] mb-3 sm:mb-4">
          Garbage Disposal Installation and Repair
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
          A garbage disposal is a kitchen convenience until it stops working. Our services include the installation of new garbage disposals tailored to your kitchen's size and needs. If your current unit is malfunctioning or making unusual noises, our technicians can diagnose the issue, whether it requires a simple reset or parts replacement. We ensure your disposal operates safely and efficiently.
        </p>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#11110E] mb-3 sm:mb-4">
          Toilet Repair, Installation, and Maintenance
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
          Toilet issues can range from simple fixes like running toilets to complex problems like a cracked tank. We provide thorough inspection and repair services for all toilet components, from flappers to fill valves. If you want to upgrade or replace your toilet for better water conservation or aesthetics, we carefully guide you through the selection process and handle the installation. Our maintenance services help prevent common issues, ensuring your toilet functions flawlessly for years.
        </p>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#11110E] mb-3 sm:mb-4">
          Faucet and Fixture Services
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
          Dripping faucets and broken fixtures waste water and can be pretty irritating. Our services encompass the repair, replacement, or installation of faucets across your home, from kitchen sinks to bathroom vanities. We help enhance the look and functionality of your fixtures, including options for touchless operation or water-efficient models.
        </p>
      </div>

      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed pt-4 sm:pt-8">
        At Water Heater SOS, we're committed to providing quality, reliability, and professionalism in all our plumbing services. Our team can assist you with a minor drip or a major plumbing catastrophe. Contact us today to see how we can help with your plumbing needs.
      </p>
    </motion.div>
  </div>
</section>

{/* Water Heater Repairs Section */}
<section className="py-10 sm:py-14 lg:py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-12"
    >
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
        Water Heater Repairs
      </h2>
      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-5 sm:mb-8" />
      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
        We understand that water heater issues can disrupt your daily routine. From temperature inconsistencies to complete system failures, we've seen it all. Our experienced team is equipped to diagnose and fix these common problems swiftly, ensuring you're never without hot water for long. Here's a look at some of the most frequent water heater repair issues we encounter:
      </p>
    </motion.div>

    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {repairs.map((repair, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-gray-50 p-5 sm:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="mb-3 sm:mb-4 inline-flex rounded-full bg-[#EA5D19]/10 p-2.5 sm:p-3">
            <repair.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA5D19]" />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-[#11110E] mb-2 sm:mb-3">
            {repair.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {repair.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="plumbing" />
    </>
  );
}
