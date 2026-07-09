"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Snowflake,
  Phone,
  CheckCircle,
  ClipboardList,
  Tag,
  BadgeCheck,
  Zap,
  Thermometer,
  Wind,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const systemTypes = [
  {
    icon: Snowflake,
    title: "Central Split System AC",
    description:
      "The most common installation type in the Inland Empire. A split system consists of an outdoor condenser/compressor and an indoor air handler or coil connected to your existing furnace. If your home has ductwork in good condition, a central split system delivers whole-home cooling at the best cost per square foot. We size the system using a Manual J load calculation — not a rule of thumb.",
  },
  {
    icon: Thermometer,
    title: "Heat Pump Systems",
    description:
      "A heat pump delivers both cooling in summer and heating in winter using the same refrigerant cycle. For Inland Empire homeowners replacing aging equipment, a heat pump is worth serious consideration — especially with the federal IRA tax credit of up to $2,000 and SCE rebates for qualifying systems. Heat pumps are highly efficient in the IE's mild winters. We'll give you a full cost-of-ownership comparison vs. a traditional AC + furnace setup.",
  },
  {
    icon: Wind,
    title: "Ductless Mini-Split",
    description:
      "The right choice for room additions, garages, older homes without ductwork, or converted spaces. A ductless system has no duct losses — significant in attic-run ducts where Inland Empire summer heat can raise duct temperatures dramatically. See our dedicated mini-split installation page for details on single-zone and multi-zone options.",
  },
  {
    icon: Zap,
    title: "Package Units",
    description:
      "A packaged unit contains all components (compressor, coil, air handler) in a single outdoor cabinet, connecting to your home via ductwork through the exterior wall or rooftop. Common in certain Inland Empire home styles. All-in-one design simplifies service access and can be a good choice when interior mechanical space is limited.",
  },
];

const installSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Load Calculation & System Selection",
    description:
      "We run a Manual J load calculation based on your home's square footage, insulation, orientation, window area, and local climate data. This determines the correct tonnage. We then walk you through equipment options (brand, efficiency rating, features) and provide a written, itemized quote.",
  },
  {
    number: "02",
    icon: Tag,
    title: "Permit & Scheduling",
    description:
      "We pull the required city permit. Installation is scheduled once the permit is issued — typically within 1 to 2 weeks. Permit timelines vary by city; we'll give you an accurate estimate for your jurisdiction.",
  },
  {
    number: "03",
    icon: Phone,
    title: "Installation Day",
    description:
      "Our crew arrives with the equipment staged and ready. Old equipment is removed and disposed of. New system is installed, linesets are run, electrical connections are made, and refrigerant is charged. The full installation typically takes one day for a standard replacement.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Startup, Testing & City Inspection",
    description:
      "We start the system, run it through a full cooling cycle, measure temperature split, verify refrigerant charge, and confirm all controls are working. We schedule the city inspection and walk you through operating the new system. Manufacturer warranty registration is completed on your behalf.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Proper sizing, every time",
    description:
      "We run a Manual J load calculation on every installation — never size by rule of thumb or by matching the old unit. An oversized AC short-cycles and creates humidity problems; an undersized unit runs nonstop and never cools the house.",
  },
  {
    title: "Licensed and insured",
    description:
      "California Contractor License #1140776, C-20 classification. Required by CSLB for all HVAC work in California. We handle the permit and inspection — it's included in your installation quote.",
  },
  {
    title: "IRA and rebate guidance",
    description:
      "We know which systems currently qualify for the IRA tax credit and SCE rebates. We'll tell you the net cost after available incentives — not just the sticker price.",
  },
  {
    title: "All major brands",
    description:
      "Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, and Bryant. We recommend the brand and model that fits your home and budget — not what's surplus in the warehouse.",
  },
  {
    title: "Financing available",
    description:
      "A new AC system is a significant investment. We offer financing options to make it manageable. Ask when you call or submit a quote request.",
  },
  {
    title: "Warranty support",
    description:
      "We register your equipment warranty on your behalf and are available for any warranty service that arises during the coverage period.",
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
  { name: "San Jacinto", href: "/san-jacinto" },
  { name: "Banning", href: "/banning" },
];

const sbCountyCities = [
  { name: "Yucaipa", href: "/yucaipa" },
  { name: "Redlands", href: "/redlands" },
  { name: "Rancho Cucamonga", href: "/rancho-cucamonga" },
  { name: "Chino", href: "/chino" },
  { name: "Chino Hills", href: "/chino-hills" },
  { name: "Upland", href: "/upland" },
  { name: "Claremont", href: "/claremont" },
  { name: "San Bernardino", href: "/san-bernardino" },
  { name: "Fontana", href: "/fontana" },
  { name: "Ontario", href: "/ontario" },
  { name: "Rialto", href: "/rialto" },
  { name: "Colton", href: "/colton" },
  { name: "Loma Linda", href: "/loma-linda" },
  { name: "Highland", href: "/highland" },
  { name: "Beaumont", href: "/beaumont" },
  { name: "Calimesa", href: "/calimesa" },
  { name: "Mentone", href: "/mentone" },
  { name: "Grand Terrace", href: "/grand-terrace" },
];

export function AcInstallationContent() {
  return (
    <>
      <SetFooterCTA
        title="Get a New AC System Quote"
        description="Proper sizing. Licensed install. Permit included. Serving the Inland Empire — Riverside and San Bernardino County."
        quoteLink="/quote?category=HVAC&service=AC%20Installation"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "AC Services", href: "/ac-services" },
          { label: "AC Installation" },
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
                New AC Installation &amp; Replacement
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                AC Installation in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Properly sized. Permitted. Done right the first time.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                A new central AC system in the Inland Empire typically runs
                $4,500 to $12,000 installed, depending on system size, efficiency,
                and whether ductwork modifications are needed. We size every
                installation using a Manual J load calculation — not a guess, not
                "match the old unit." Undersized systems run nonstop and never
                cool the house; oversized systems short-cycle and create humidity
                problems.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                We install central split systems, heat pumps, ductless mini-splits,
                and package units throughout Riverside County and San Bernardino
                County. Licensed (CA LIC# 1140776), permit included, manufacturer
                warranty registered on your behalf. Financing available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=AC%20Installation"
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
                src="/service-page-images/ac-installation.webp"
                alt="Licensed HVAC technician performing AC installation in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /ac-installation-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct-answer box */}
      <section className="py-8 lg:py-12 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#EA5D19] pl-4 sm:pl-6">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong>How much does AC installation cost in the Inland Empire?</strong>{" "}
              A standard central AC replacement runs $4,500 to $12,000 installed —
              a 3-ton, 16 SEER2 system for a typical 1,500–2,000 sq ft home falls in the
              $5,500–$8,000 range. After the IRA tax credit ($600 for qualifying AC systems)
              and SCE rebates, the net cost is often $500–$1,200 lower.
            </p>
          </div>
        </div>
      </section>

      {/* System Types */}
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
              AC System Types We Install
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Every home is different. We match the system type to your home&rsquo;s
              ductwork, layout, budget, and efficiency goals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {systemTypes.map((item, index) => (
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
          <div className="mt-8 text-center">
            <p className="text-base text-gray-600">
              Considering ductless?{" "}
              <Link href="/mini-split-installation" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                See our mini-split installation page
              </Link>{" "}
              for single-zone and multi-zone options.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Process */}
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
              Our Installation Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              From load calculation to city inspection — here&rsquo;s what to expect.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-3xl font-black text-[#EA5D19]/20 mb-2">{step.number}</div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA5D19]/10 mx-auto mb-3">
                  <step.icon className="h-5 w-5 text-[#EA5D19]" />
                </div>
                <h3 className="text-base font-bold text-[#11110E] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
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
              AC Installation Service Area
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We install AC systems throughout Riverside County and San Bernardino County.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#11110E] mb-4">Riverside County</h3>
              <div className="flex flex-wrap gap-2">
                {riversideCountyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#EA5D19] hover:text-[#EA5D19] transition-colors min-h-[44px] flex items-center"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#11110E] mb-4">San Bernardino County</h3>
              <div className="flex flex-wrap gap-2">
                {sbCountyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#EA5D19] hover:text-[#EA5D19] transition-colors min-h-[44px] flex items-center"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBrands />
      <FAQ category="acInstallation" />
    </>
  );
}
