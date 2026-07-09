"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  Phone,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Zap,
  ClipboardList,
  Tag,
  BadgeCheck,
  Wind,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const commonProblems = [
  {
    icon: Flame,
    title: "Furnace Won't Light",
    description:
      "The most common furnace failure in the Inland Empire — particularly in October and November when furnaces first turn on after months of summer idle. Most no-ignition calls are caused by a failed igniter (the component that glows to light the burners) or a dirty flame sensor that fails to confirm the burner lit and shuts the gas off as a safety measure. Both are straightforward repairs we carry parts for on the truck.",
  },
  {
    icon: Wind,
    title: "Furnace Blowing Cold Air",
    description:
      "If your furnace turns on but blows cold air, the burners aren't lighting. Common causes: faulty igniter, dirty flame sensor, tripped high-limit switch from overheating, or a gas supply issue. Check that your gas is on and your filter isn't completely blocked. If both are fine and it's still blowing cold, call us.",
  },
  {
    icon: AlertTriangle,
    title: "Short-Cycling",
    description:
      "A furnace that turns on and off repeatedly without completing a heating cycle is short-cycling. Most common causes: a dirty filter restricting airflow and tripping the high-limit switch, a faulty flame sensor, or an oversized furnace that heats too quickly. Ignoring short-cycling stresses the heat exchanger and can lead to cracks.",
  },
  {
    icon: Zap,
    title: "Cracked Heat Exchanger",
    description: (
      <>
        The heat exchanger separates combustion gases (including carbon monoxide)
        from the air circulating through your home. A crack is the most serious
        furnace safety issue — it allows CO to enter the living space. If your CO
        detector has alarmed near the furnace, or you notice a burning smell when
        the heat runs, shut off the furnace and call us. Do not restart it until
        the heat exchanger is inspected. This issue can also create{" "}
        <Link
          href="/indoor-air-quality"
          className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]"
        >
          indoor air quality concerns
        </Link>{" "}
        throughout the home.
      </>
    ),
  },
  {
    icon: Wrench,
    title: "Control Board Failure",
    description:
      "The control board is the brain of the furnace — it sequences ignition, manages safety controls, and communicates with the thermostat. Control board failures can cause a range of symptoms: furnace won't start, runs but shuts off mid-cycle, or displays fault codes. Replacement runs $300–$600 depending on the board. We diagnose before quoting.",
  },
  {
    icon: ClipboardList,
    title: "Gas Valve Issues",
    description:
      "A failed or stuck gas valve prevents gas from reaching the burners — the furnace tries to ignite but no flame appears. This is less common than igniter or sensor failures but needs prompt attention. We test the valve as part of diagnosis and quote repair or replacement based on the findings.",
  },
];

const repairSteps = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Book",
    description: "Call (800) 697-4014 or submit a quote request. 24/7 for emergencies — same-day for non-emergencies.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Diagnosis",
    description: "Your technician inspects the system, runs fault code retrieval if applicable, and identifies the root cause before quoting any work.",
  },
  {
    number: "03",
    icon: Tag,
    title: "Upfront Quote",
    description: "You see the price before we start. Parts and labor, no add-ons mid-job.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Repair & Test",
    description: "We complete the repair, run the system through a full heating cycle, and verify CO levels in the flue. Workmanship warranty included.",
  },
];

const whyChooseUsPoints = [
  {
    title: "24/7 emergency service",
    description: "Furnace failures are emergencies, especially for households with elderly members or in higher-elevation areas where overnight temps can drop below freezing.",
  },
  {
    title: "Licensed HVAC technicians",
    description: "CA LIC# 1140776, C-20 classification. CO safety inspection included on every furnace call.",
  },
  {
    title: "Heat exchanger honesty",
    description: "If the heat exchanger is cracked, we document it with photos and won't restart the furnace without your authorization. No pressure to make a decision under stress.",
  },
  {
    title: "Repair vs. replace guidance",
    description: "We give you an honest comparison when the repair cost approaches replacement cost. We don't push replacement to drive a larger ticket.",
  },
  {
    title: "All major brands",
    description: "Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, Bryant. We arrive with common parts on the truck.",
  },
  {
    title: "Upfront pricing",
    description: "No surprise additions on the invoice. The price you approve is the price you pay.",
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

export function FurnaceRepairContent() {
  return (
    <>
      <SetFooterCTA
        title="Need Furnace Repair in the Inland Empire?"
        description="24/7 emergency furnace repair. All brands. Licensed technicians (CA LIC# 1140776). Riverside and San Bernardino County."
        quoteLink="/quote?category=HVAC&service=Furnace%20Repair"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Heating Services", href: "/heating-services" },
          { label: "Furnace Repair" },
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
                24/7 Emergency Furnace Repair
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Furnace Repair in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Your heat stopped working. We can fix it today.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Most furnace repairs in the Inland Empire run $89 to $600. The most common
                failures — igniter replacement, flame sensor cleaning, and capacitor issues —
                are same-day fixes we carry parts for on every service truck. We provide an
                upfront quote after diagnosis before starting any work.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Our licensed technicians (CA LIC# 1140776) service all major furnace brands
                and include a carbon monoxide safety check on every furnace call. 24/7
                emergency service available throughout Riverside County and San Bernardino
                County.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=Furnace%20Repair"
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
                src="/service-page-images/furnace-repair.webp"
                alt="Licensed HVAC technician performing furnace repair in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /furnace-repair-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct-answer box */}
      <section className="py-8 lg:py-12 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#EA5D19] pl-4 sm:pl-6">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong>Repair or replace your furnace?</strong>{" "}
              Repair when the cost is less than 50% of replacement and the furnace is
              under 15 years old. Replace when the repair is costly, the heat exchanger
              is cracked, or the unit is old enough that further failures are likely.
              We give you an honest comparison — we don&rsquo;t push replacement to run
              up a larger ticket.
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems */}
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
              Common Furnace Problems We Fix
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
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
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11110E] mb-4">Our Repair Process</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairSteps.map((step, index) => (
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
              Furnace Repair Service Area
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We provide furnace repair throughout Riverside County and San Bernardino County.
            </p>
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
      <FAQ category="furnaceRepair" />
    </>
  );
}
