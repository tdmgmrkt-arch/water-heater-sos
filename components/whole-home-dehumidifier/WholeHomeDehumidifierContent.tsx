"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets,
  Phone,
  CheckCircle,
  AlertTriangle,
  Wind,
  Shield,
  Wrench,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const highHumidityProblems = [
  {
    icon: AlertTriangle,
    title: "Mold Growth",
    description:
      "Mold begins growing on surfaces when relative humidity exceeds 60% for extended periods. The IE's summer monsoon season (July–September) can push indoor RH above this threshold in poorly ventilated homes, particularly in bathrooms, closets, and spaces near slab foundations. Once mold is established, remediation is significantly more expensive than prevention.",
  },
  {
    icon: Wind,
    title: "Musty Odors",
    description:
      "Persistent musty odors — especially noticeable when the AC first comes on — indicate mold or mildew in the ductwork or on surfaces. A whole-home dehumidifier reduces the moisture that allows biological growth to develop in the first place. Air duct cleaning addresses existing growth; dehumidification prevents recurrence.",
  },
  {
    icon: Droplets,
    title: "Clammy, Uncomfortable Air",
    description:
      "High humidity at the same temperature feels warmer and stickier than dry air. Homes that feel uncomfortable despite the AC running are often high in humidity — the AC is cooling the air but the humidity load overwhelms it. A dedicated dehumidifier addresses the humidity directly and allows the AC to work more efficiently.",
  },
  {
    icon: Shield,
    title: "Structural & Material Damage",
    description:
      "Persistent high humidity warps hardwood flooring, causes paint to bubble, damages drywall over time, and creates conditions for wood rot in framing. This is most common in IE homes with slab foundations where ground moisture intrudes, or in tightly sealed new construction without adequate ventilation.",
  },
];

const warningSignals = [
  { label: "Condensation on windows during summer" },
  { label: "Musty or mildew odors anywhere in the home" },
  { label: "Visible mold spots on walls, ceilings, or in closets" },
  { label: "Warping or buckling hardwood floors" },
  { label: "Portable dehumidifier filling its tank daily" },
  { label: "Clammy feeling indoors despite the AC running" },
];

const whyChooseUsPoints = [
  {
    title: "Properly sized for your home",
    description: "Dehumidifier sizing is based on home volume and humidity load — we assess before recommending.",
  },
  {
    title: "Licensed HVAC technicians",
    description: "CA LIC# 1140776. Whole-home dehumidifier installation is part of HVAC work.",
  },
  {
    title: "Integrated with existing ductwork",
    description: "Installed inline with your HVAC system for whole-home coverage — not a portable unit tucked in a corner.",
  },
  {
    title: "Humidistat setup",
    description: "We configure the humidistat before leaving. You don't have to guess the right setting.",
  },
  {
    title: "Aprilaire, Santa Fe, Honeywell",
    description: "We install trusted brands with strong parts availability in the Inland Empire service area.",
  },
  {
    title: "Maintenance plan compatible",
    description: "Dehumidifier filter checks can be added to your HVAC maintenance plan.",
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

export function WholeHomeDehumidifierContent() {
  return (
    <>
      <SetFooterCTA
        title="Get a Whole-Home Dehumidifier Quote"
        description="Control summer monsoon humidity and prevent mold. Serving the Inland Empire — Riverside and San Bernardino County."
        quoteLink="/quote?category=IAQ&service=Whole-Home%20Dehumidifier"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Indoor Air Quality", href: "/indoor-air-quality" },
          { label: "Whole-Home Dehumidifier" },
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
                Whole-Home Dehumidifier Installation
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Whole-Home Dehumidifier in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Summer monsoon humidity, musty odors, and mold risk — addressed at the source.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                The Inland Empire&rsquo;s summer monsoon season (July–September) brings Pacific
                moisture inland, pushing outdoor humidity to 60–80%+ during storm events.
                Homes with poor ventilation, slab foundations, or tightly sealed construction
                can see indoor RH exceed the 60% mold-growth threshold — even with the AC
                running.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                A whole-home dehumidifier integrates with your existing HVAC ductwork and
                operates independently of the AC — targeting humidity directly rather than
                running the AC to achieve the same result. Installation runs $1,200 to
                $3,000. Licensed CA LIC# 1140776.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=IAQ&service=Whole-Home%20Dehumidifier"
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
                alt="Licensed HVAC technician performing whole-home dehumidifier installation in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /whole-home-dehumidifier-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What High Humidity Does */}
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
              What Excess Indoor Humidity Does to Your Home
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {highHumidityProblems.map((item, index) => (
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

      {/* Warning Signals */}
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
              Signs You Need a Whole-Home Dehumidifier
            </h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {warningSignals.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <CheckCircle className="h-5 w-5 text-[#EA5D19] shrink-0" />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-base text-gray-600 text-center">
              If several of these apply, a whole-home dehumidifier is likely the right
              solution. For {" "}
              <Link href="/air-duct-cleaning" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                air duct cleaning
              </Link>{" "}
              if mold or musty odors are in the ducts, that&rsquo;s a separate service
              that often pairs well with dehumidifier installation.
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
              Dehumidifier Installation Service Area
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
      <FAQ category="wholeHomeDehumidifier" />
    </>
  );
}
