"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Phone,
  CheckCircle,
  Thermometer,
  DollarSign,
  Snowflake,
  ClipboardList,
  BadgeCheck,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const heatPumpBenefits = [
  {
    icon: Snowflake,
    title: "Cooling + Heating in One System",
    description:
      "A heat pump replaces both your AC and your furnace. In summer it cools the same way a central AC does. In winter it runs in reverse — pulling heat from outdoor air (even at 40°F) and moving it inside. For most Inland Empire homes, this is the most efficient heating available.",
  },
  {
    icon: Zap,
    title: "Higher Efficiency Than Gas Heating",
    description:
      "A heat pump moves heat rather than generating it — typically delivering 2–3 BTUs of heat for every BTU of electricity consumed. In the IE's mild winters (most days above 40°F), this efficiency advantage over a gas furnace is significant. Even at SoCal's high electricity prices, heat pumps are cost-competitive with gas heating for most IE homes.",
  },
  {
    icon: DollarSign,
    title: "IRA Tax Credit Up to $2,000",
    description:
      "The Inflation Reduction Act provides a direct tax credit of up to $2,000 for qualifying heat pump installations — significantly more than the $600 credit for high-efficiency gas furnaces. Southern California Edison also offers rebates for qualifying systems. Ask us for the current qualifying models when you schedule your estimate.",
  },
  {
    icon: Thermometer,
    title: "Works in IE Summer Heat",
    description:
      "Modern heat pumps are rated for cooling at outdoor temperatures of 115°F and higher — well above the IE's typical peak. We specify systems rated for actual IE peak temperatures, not just the standard 95°F test conditions. Cooling efficiency is typically 18–22 SEER2 or higher.",
  },
];

const systemTypes = [
  {
    title: "Standard Split Heat Pump",
    description:
      "Replaces a traditional central AC + furnace with a single outdoor heat pump unit and indoor air handler. Uses existing ductwork. Most common heat pump installation in IE homes replacing aging split-system HVAC.",
  },
  {
    title: "Dual-Fuel (Hybrid Heat Pump)",
    description:
      "Pairs a heat pump with an existing gas furnace as a backup heat source. Heat pump handles mild-weather heating with high efficiency; gas furnace takes over on the coldest nights. Best for higher-elevation IE homes (Yucaipa, Banning, Beaumont) with existing gas infrastructure.",
  },
  {
    title: "Ductless Mini-Split Heat Pump",
    description: (
      <>
        Single-zone and multi-zone ductless systems for homes without ductwork,
        room additions, garages, and converted spaces. All mini-splits we install
        are heat pumps. See our{" "}
        <Link href="/mini-split-installation" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
          mini-split installation page
        </Link>{" "}
        for ductless-specific details.
      </>
    ),
  },
];

const installSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Assessment & Quote",
    description: "Load calculation, ductwork assessment, electrical panel review. Written quotes for heat pump, gas furnace, and dual-fuel options side-by-side.",
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Incentive Review",
    description: "We confirm IRA tax credit eligibility and current SCE rebate amounts for qualifying systems before you commit.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Permit & Install",
    description: "We handle the city permit. Installation typically takes one day. Electrical panel upgrade scheduled separately if needed.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Startup & Inspection",
    description: "Full heating and cooling cycle test. City inspection attended. Manufacturer warranty registered on your behalf.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Honest side-by-side comparisons",
    description: "We give you real cost-of-ownership numbers for heat pump vs. gas furnace — not a sales pitch for whichever margin is better.",
  },
  {
    title: "IRA & rebate maximization",
    description: "We specify qualifying systems and walk you through the tax credit and rebate process. You shouldn't leave money on the table.",
  },
  {
    title: "Licensed and permitted",
    description: "CA LIC# 1140776. Permit and city inspection included in every installation quote.",
  },
  {
    title: "High-temperature rated systems",
    description: "We only install systems rated for IE's actual peak temperatures — not just the standard test conditions.",
  },
  {
    title: "All major brands",
    description: "Carrier, Trane, Lennox, Rheem, Daikin, Goodman. We recommend based on your home's needs.",
  },
  {
    title: "Financing available",
    description: "Heat pump systems are a significant investment. Financing options available to make the upgrade accessible.",
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

export function HeatPumpSystemsContent() {
  return (
    <>
      <SetFooterCTA
        title="Get a Heat Pump System Quote"
        description="IRA tax credit up to $2,000. Heating and cooling in one system. Serving the Inland Empire — Riverside and San Bernardino County."
        quoteLink="/quote?category=HVAC&service=Heat%20Pump%20Systems"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Heating Services", href: "/heating-services" },
          { label: "Heat Pump Systems" },
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
                Heat Pump Installation &amp; Service
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Heat Pump Systems in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Heating and cooling in one system. IRA tax credit up to $2,000.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                A whole-home heat pump replaces both your air conditioner and your furnace
                with a single efficient system. In the Inland Empire&rsquo;s mild winters,
                heat pumps operate at 2–3x the efficiency of gas heating — and they cool
                just as effectively as a traditional central AC in triple-digit summers.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Installation runs $5,000 to $12,000, depending on system size and whether
                ductwork modifications are needed. After the IRA tax credit (up to $2,000)
                and SCE rebates, the net cost is typically $3,500 to $10,000. We give you
                a side-by-side comparison with a gas furnace option so you can decide based
                on real numbers. Licensed CA LIC# 1140776.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=Heat%20Pump%20Systems"
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
                alt="Licensed HVAC technician performing heat pump system installation in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /heat-pump-systems-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct-answer box */}
      <section className="py-8 lg:py-12 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#EA5D19] pl-4 sm:pl-6">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong>Heat pump vs. gas furnace for the Inland Empire:</strong>{" "}
              Heat pumps make strong financial sense for most IE homes replacing aging
              equipment — especially with the IRA credit. The main exception: homes at
              higher elevation that see sustained below-freezing winters may benefit from
              a dual-fuel system with gas backup. We give you both options with real
              cost-of-ownership numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Heat Pumps Make Sense in the Inland Empire
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {heatPumpBenefits.map((item, index) => (
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

      {/* System Types */}
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
              Heat Pump System Types We Install
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {systemTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-base font-bold text-[#11110E] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-gray-600">
              Considering a heat pump water heater?{" "}
              <Link href="/heat-pump-water-heaters" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                See our heat pump water heater page
              </Link>{" "}
              — a separate product category that also qualifies for IRA credits.
            </p>
          </div>
        </div>
      </section>

      {/* Install Process */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11110E] mb-4">Our Installation Process</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
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
              Heat Pump Service Area
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
      <FAQ category="heatPumpSystems" />
    </>
  );
}
