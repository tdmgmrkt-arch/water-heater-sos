"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wind,
  Phone,
  CheckCircle,
  Shield,
  AlertTriangle,
  Zap,
  Wrench,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const filtrationOptions = [
  {
    icon: Shield,
    title: "4–5 Inch Media Filter Upgrade",
    description:
      "Replaces your existing 1-inch filter slot with a larger housing that accepts MERV 13–16 media filters. The increased filter surface area provides high filtration efficiency without restricting airflow — the key problem with 1-inch MERV 13 filters. Most cost-effective option for smoke, pollen, and allergen removal. Filter replacement every 6–12 months.",
    price: "$400–$700 installed",
  },
  {
    icon: Zap,
    title: "Electronic Air Cleaner",
    description:
      "Uses electrostatic charge to capture very fine particles — including PM2.5 from wildfire smoke — that pass through media filters. Installed in-line with existing ductwork. Cells require cleaning every 1–3 months with a standard dishwasher wash.",
    price: "$700–$1,200 installed",
  },
  {
    icon: Wind,
    title: "HEPA Bypass Filtration",
    description:
      "True HEPA filtration (99.97% capture at 0.3 microns) in a bypass unit that routes a portion of your airflow through the HEPA filter. Most effective option for wildfire smoke and fine particle removal. Higher installation cost but highest filtration performance available for residential use.",
    price: "$1,200–$1,800 installed",
  },
];

const iaqContext = [
  {
    icon: AlertTriangle,
    title: "Wildfire Smoke",
    description:
      "Wildfire smoke is primarily PM2.5 — particles smaller than 2.5 microns. Standard MERV 8 filters (most homes' default) capture less than 20% of PM2.5. A MERV 13 media filter captures 85–90%+. During active smoke events, running your HVAC fan-only mode with a MERV 13 filter significantly reduces indoor particle concentration.",
  },
  {
    icon: Wind,
    title: "Santa Ana Winds & Dust",
    description:
      "Santa Ana wind events generate significant dust and particulate loads across the Inland Empire — sometimes reducing visibility and driving AQI into unhealthy ranges. High-efficiency filtration keeps these particles out of your home and out of your HVAC system's components, which accumulate damage from dusty air over time.",
  },
  {
    icon: Shield,
    title: "Pollen & Allergens",
    description:
      "The IE's inland climate, year-round warm weather, and landscaping create high pollen loads across multiple seasons. MERV 13 filtration captures pollen, mold spores, and fine dust effectively — a practical improvement for allergy and asthma sufferers that works passively every time the HVAC system runs.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Blower capacity assessment first",
    description: "We check your blower motor's capacity before recommending any filter upgrade. The wrong filter in an undersized housing damages equipment.",
  },
  {
    title: "Licensed HVAC technicians",
    description: "CA LIC# 1140776. Filtration installation is part of HVAC work — duct modification and airflow management is our specialty.",
  },
  {
    title: "Duct condition awareness",
    description: "Significant duct leakage reduces filtration effectiveness. We note duct condition during the assessment so you have the full picture.",
  },
  {
    title: "Multiple options with honest tradeoffs",
    description: "We present media filter, electronic, and HEPA options with real cost and maintenance tradeoffs — not just the most expensive option.",
  },
  {
    title: "UV purifier compatible",
    description: "Air filtration and UV purifiers are complementary technologies. We can install both in the same visit.",
  },
  {
    title: "All major brands",
    description: "Aprilaire, Honeywell, Lennox, Trane, and others. We specify the right system for your ductwork configuration.",
  },
];

const riversideCountyCities = [
  { name: "Moreno Valley", href: "/moreno-valley" },
  { name: "Murrieta", href: "/murrieta" },
  { name: "Temecula", href: "/temecula" },
  { name: "Riverside", href: "/riverside" },
  { name: "Corona", href: "/corona" },
  { name: "Hemet", href: "/hemet" },
  { name: "Lake Elsinore", href: "/lake-elsinore" },
  { name: "Menifee", href: "/menifee" },
  { name: "Perris", href: "/perris" },
  { name: "Norco", href: "/norco" },
  { name: "Eastvale", href: "/eastvale" },
];

const sbCountyCities = [
  { name: "Yucaipa", href: "/yucaipa" },
  { name: "Redlands", href: "/redlands" },
  { name: "Rancho Cucamonga", href: "/rancho-cucamonga" },
  { name: "Chino", href: "/chino" },
  { name: "Upland", href: "/upland" },
  { name: "San Bernardino", href: "/san-bernardino" },
  { name: "Fontana", href: "/fontana" },
  { name: "Ontario", href: "/ontario" },
  { name: "Highland", href: "/highland" },
  { name: "Beaumont", href: "/beaumont" },
  { name: "Loma Linda", href: "/loma-linda" },
];

export function AirFiltrationContent() {
  return (
    <>
      <SetFooterCTA
        title="Upgrade Your Home's Air Filtration"
        description="MERV 13, HEPA, and electronic air cleaners for wildfire smoke, allergens, and pollen. Inland Empire — licensed HVAC installation."
        quoteLink="/quote?category=IAQ&service=Air%20Filtration"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Indoor Air Quality", href: "/indoor-air-quality" },
          { label: "Air Filtration" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Whole-Home Air Filtration Installation
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Whole-Home Air Filtration in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                MERV 13, HEPA, and electronic air cleaners — for wildfire smoke, pollen,
                and the IE&rsquo;s notorious dust.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                The Inland Empire has some of the worst air quality in California — chronic
                particulate pollution from traffic and industry, seasonal wildfire smoke,
                Santa Ana wind events, and high pollen loads. Standard MERV 8 filters
                (the default in most homes) are designed for equipment protection, not
                air quality. They capture less than 20% of PM2.5 from wildfire smoke.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                A whole-home air filtration upgrade connects to your existing HVAC ductwork
                and filters every cubic foot of air that circulates through your home.
                Installations run $400 to $1,800 depending on system type. Licensed
                CA LIC# 1140776.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=IAQ&service=Air%20Filtration"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[44px]"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:8006974014"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#EA5D19] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-all min-h-[44px]"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  Call Now: (800) 697-4014
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl"
            >
              <Image
                src="/wh-sos-service-rep.webp"
                alt="Licensed HVAC technician performing air filtration system installation in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /air-filtration-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct-answer box */}
      <section className="py-8 lg:py-12 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#EA5D19] pl-4 sm:pl-6">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong>Will a MERV 13 filter damage my HVAC?</strong>{" "}
              A 1-inch MERV 13 filter can restrict airflow and damage your blower motor.
              The correct approach is a 4–5 inch media filter housing, which provides
              significantly more surface area and does not restrict airflow. We assess
              your blower&rsquo;s capacity before recommending any filter upgrade.
            </p>
          </div>
        </div>
      </section>

      {/* Filtration Options */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11110E] mb-4">
              Whole-Home Air Filtration Options
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {filtrationOptions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA5D19]/10 shrink-0">
                    <item.icon className="h-5 w-5 text-[#EA5D19]" />
                  </div>
                  <h3 className="text-base font-bold text-[#11110E]">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                <p className="text-sm font-semibold text-[#EA5D19]">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IE-Specific IAQ Context */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11110E] mb-4">
              Air Quality Threats Specific to the Inland Empire
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {iaqContext.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA5D19]/10 shrink-0">
                    <item.icon className="h-5 w-5 text-[#EA5D19]" />
                  </div>
                  <h3 className="text-base font-bold text-[#11110E]">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-gray-600">
              Want UV protection against biological contaminants?{" "}
              <Link href="/indoor-air-quality" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                See our full indoor air quality services
              </Link>{" "}
              — filtration and UV purifiers work together.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 lg:py-20 bg-[#11110E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Inland Empire Homeowners Choose Water Heater SOS
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle className="h-6 w-6 text-[#EA5D19] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{point.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11110E] mb-4">
              Air Filtration Service Area
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#11110E] mb-4">Riverside County</h3>
              <div className="flex flex-wrap gap-2">
                {riversideCountyCities.map((city) => (
                  <Link key={city.name} href={city.href} className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#EA5D19] hover:text-[#EA5D19] transition-colors min-h-[44px]">
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#11110E] mb-4">San Bernardino County</h3>
              <div className="flex flex-wrap gap-2">
                {sbCountyCities.map((city) => (
                  <Link key={city.name} href={city.href} className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#EA5D19] hover:text-[#EA5D19] transition-colors min-h-[44px]">
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBrands />
      <FAQ category="airFiltration" />
    </>
  );
}
