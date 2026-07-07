"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets,
  Phone,
  CheckCircle,
  Wind,
  Shield,
  Thermometer,
  Wrench,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const dryAirProblems = [
  {
    icon: Shield,
    title: "Health & Comfort",
    description:
      "Indoor relative humidity below 30% causes dry skin, cracked lips, and dry nasal passages — the body's first-line defense against airborne pathogens. Research consistently shows virus transmission increases in very dry air. During the IE's heating season, unmanaged homes regularly see indoor RH in the teens.",
  },
  {
    icon: Thermometer,
    title: "Static Electricity",
    description:
      "Dry air in winter is the source of the static shock you get touching a doorknob. At very low humidity levels it's not just annoying — it can damage electronics. Maintaining humidity above 30% eliminates most static electricity in the home.",
  },
  {
    icon: Wind,
    title: "Wood & Furniture Damage",
    description:
      "Hardwood floors, wood furniture, cabinetry, and musical instruments absorb and release moisture with the surrounding air. Cycling between the IE's dry winters and more humid summers stresses wood finishes, causes gaps in flooring, and cracks wood furniture. Stable humidity prevents this.",
  },
  {
    icon: Droplets,
    title: "Heating Efficiency",
    description:
      "Humid air feels warmer than dry air at the same temperature — this is well-established physics. Maintaining 35–45% RH in winter typically allows homeowners to lower the thermostat by 2–4°F without sacrificing perceived comfort. That translates directly to lower heating bills.",
  },
];

const humidifierTypes = [
  {
    title: "Bypass Flow-Through Humidifier",
    description:
      "Most common type for IE homes with gas furnaces. Taps into the supply and return ductwork. Uses the furnace fan to push air across a water panel. Works only when the furnace is heating. Low maintenance — annual water panel replacement. Most affordable installation option.",
    bestFor: "Gas furnace homes, budget-conscious installations",
  },
  {
    title: "Fan-Powered Humidifier",
    description:
      "Similar to a bypass unit but includes its own fan, which improves moisture output. Doesn't require a bypass duct between supply and return, which can simplify installation in some duct configurations. More consistent output than a bypass unit.",
    bestFor: "Homes where bypass duct routing is difficult",
  },
  {
    title: "Steam Humidifier",
    description:
      "Heats water independently to generate steam, which is injected into the airstream. Works with any HVAC system — including heat pumps — regardless of whether heating is running. Most precise humidity control. Higher installation cost but superior performance for year-round humidity management.",
    bestFor: "Heat pump homes, precise year-round control, larger homes",
  },
];

const whyChooseUsPoints = [
  {
    title: "Correct system type for your HVAC",
    description: "Bypass humidifiers don't work with heat pumps — we specify the correct type for your heating system.",
  },
  {
    title: "Licensed HVAC technicians",
    description: "CA LIC# 1140776. Humidifier installation is part of HVAC work, not a plumbing or handyman job.",
  },
  {
    title: "Plumbing connection included",
    description: "We run the water supply line as part of the installation. No separate plumber needed.",
  },
  {
    title: "Humidistat setup",
    description: "We set your humidistat to a recommended starting point and explain seasonal adjustments.",
  },
  {
    title: "Maintenance plan compatible",
    description: "Humidifier checks and water panel replacements can be added to your HVAC maintenance plan.",
  },
  {
    title: "All major brands",
    description: "Aprilaire, Honeywell, Skuttle, Lennox. We'll recommend the right unit for your home size and heating system.",
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

export function WholeHomeHumidifierContent() {
  return (
    <>
      <SetFooterCTA
        title="Get a Whole-Home Humidifier Quote"
        description="Combat the Inland Empire's dry desert air during heating season. Licensed HVAC installation, Riverside and San Bernardino County."
        quoteLink="/quote?category=IAQ&service=Whole-Home%20Humidifier"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Indoor Air Quality", href: "/indoor-air-quality" },
          { label: "Whole-Home Humidifier" },
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
                Whole-Home Humidifier Installation
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Whole-Home Humidifier in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                The IE&rsquo;s desert climate and forced-air heating creates some of the driest
                indoor air in California. A whole-home humidifier fixes that automatically.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                During heating season (November through March), indoor relative humidity
                in Inland Empire homes without humidifiers regularly drops below 25% —
                sometimes into the teens during cold snaps. At those levels, dry skin,
                cracked wood, and increased airborne illness transmission are documented
                consequences. A whole-home humidifier maintains 35–45% RH automatically.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Installation runs $600 to $1,800 depending on system type. We install
                bypass, fan-powered, and steam humidifiers throughout Riverside County
                and San Bernardino County. Licensed CA LIC# 1140776.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=IAQ&service=Whole-Home%20Humidifier"
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
                alt="Licensed HVAC technician performing whole-home humidifier installation in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /whole-home-humidifier-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Dry Air Does */}
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
              What Very Dry Indoor Air Does to Your Home
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {dryAirProblems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA5D19]/10 shrink-0">
                    <item.icon className="h-5 w-5 text-[#EA5D19]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#11110E]">{item.title}</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Humidifier Types */}
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
              Whole-Home Humidifier Types
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {humidifierTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-base font-bold text-[#11110E] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                <p className="text-xs font-semibold text-[#EA5D19]">Best for: {item.bestFor}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-gray-600">
              Also dealing with excess summer humidity?{" "}
              <Link href="/whole-home-dehumidifier" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                See our whole-home dehumidifier page
              </Link>
              .
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
              Why Inland Empire Homeowners Choose SOS Plumbing and Air
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
              Humidifier Installation Service Area
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
      <FAQ category="wholeHomeHumidifier" />
    </>
  );
}
