"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Thermometer,
  Phone,
  CheckCircle,
  Zap,
  Settings,
  Wifi,
  AlertTriangle,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const thermostatTypes = [
  {
    icon: Wifi,
    title: "Smart Thermostats",
    description:
      "Ecobee Smart Thermostat Premium, Nest Thermostat (4th gen), and Honeywell Home T9 — Wi-Fi connected, app-controlled, and compatible with Alexa, Google Home, and Apple HomeKit. Smart thermostats save $50–$250 annually in the Inland Empire through scheduling and setback. Southern California Edison offers a $75–$100 rebate for qualifying installations.",
  },
  {
    icon: Settings,
    title: "Programmable Thermostats",
    description:
      "7-day programmable thermostats for homes that want scheduling without app connectivity. Reliable, straightforward to operate, and a significant upgrade from a manual thermostat for homes where no one is adjusting temperatures during the day.",
  },
  {
    icon: Thermometer,
    title: "Heat Pump Thermostats",
    description:
      "Heat pumps require thermostats with specific wiring configurations — including the O/B wire for the reversing valve and, in hybrid systems, dual-fuel staging logic. Standard smart thermostats aren't always compatible. We install the correct heat pump-compatible thermostat for your system type and wire it correctly the first time.",
  },
  {
    icon: Zap,
    title: "Multi-Stage & Zoned Systems",
    description:
      "Homes with multi-stage equipment or zoned HVAC require thermostats that can communicate with zone controllers or two-stage heating and cooling. We identify the correct thermostat for your system configuration and confirm compatibility before installation.",
  },
];

const troubleSignals = [
  {
    icon: AlertTriangle,
    title: "Blank or unresponsive display",
    description: "Usually dead batteries, a lost C-wire connection, or a blown fuse on the HVAC control board.",
  },
  {
    icon: Thermometer,
    title: "AC or furnace short-cycling",
    description: "Turning on and off rapidly — often a faulty thermostat reading or bad placement in a hot/cold spot.",
  },
  {
    icon: Settings,
    title: "System runs but won't reach set temperature",
    description: "Can indicate a miscalibrated thermostat reading several degrees off. Common in older units.",
  },
  {
    icon: Zap,
    title: "System won't turn on",
    description: "Before calling for a full HVAC diagnostic, a bad thermostat should be ruled out — it's a fast, inexpensive check.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Correct compatibility check",
    description: "We verify your system wiring before recommending a thermostat — no guessing on heat pump compatibility or multi-stage systems.",
  },
  {
    title: "Licensed HVAC technicians",
    description: "CA LIC# 1140776. Not an electrician, not a handyman — a licensed HVAC tech who understands the full system.",
  },
  {
    title: "All major brands",
    description: "Ecobee, Nest, Honeywell, Emerson, White-Rodgers. We recommend the right unit for your system and budget.",
  },
  {
    title: "Full system test",
    description: "After installation we test both heating and cooling cycles before leaving. You don't discover a wiring issue in November.",
  },
  {
    title: "SCE rebate guidance",
    description: "We'll confirm whether your new thermostat qualifies for the current SCE rebate and walk you through the claim process.",
  },
  {
    title: "Upfront pricing",
    description: "All-in price quoted before we start. Equipment and labor on one invoice.",
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
  { name: "Loma Linda", href: "/loma-linda" },
  { name: "Highland", href: "/highland" },
  { name: "Beaumont", href: "/beaumont" },
];

export function ThermostatInstallationContent() {
  return (
    <>
      <SetFooterCTA
        title="Schedule Thermostat Installation"
        description="Smart thermostats, heat pump-compatible units, and multi-stage systems. Inland Empire — Riverside and San Bernardino County."
        quoteLink="/quote?category=HVAC&service=Thermostat%20Installation"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "AC Services", href: "/ac-services" },
          { label: "Thermostat Installation" },
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
                Thermostat Installation &amp; Replacement
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Thermostat Installation in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Smart thermostats, heat pump systems, and everything in between.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Thermostat installation in the Inland Empire runs $149 to $450 installed —
                all-in, equipment and labor. A smart thermostat (Ecobee, Nest) saves
                $50–$250 annually in the Inland Empire through scheduled setbacks during
                the workday, and Southern California Edison offers a $75–$100 rebate for
                qualifying installations.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Where it gets complicated: heat pump systems, multi-stage equipment, and
                zoned HVAC all require specific thermostat compatibility and wiring that
                a DIY installation can get wrong — damaging the control board in the
                process. We confirm compatibility, install correctly, and test both
                heating and cooling cycles before we leave.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=Thermostat%20Installation"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[44px]"
                >
                  Get a Quote
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
                alt="Licensed HVAC technician performing thermostat installation in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /thermostat-installation-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thermostat Types */}
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
              Thermostat Types We Install
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {thermostatTypes.map((item, index) => (
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

      {/* Trouble Signals */}
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
              Signs Your Thermostat Needs Replacement
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {troubleSignals.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA5D19]/10 mb-3">
                  <item.icon className="h-5 w-5 text-[#EA5D19]" />
                </div>
                <h3 className="text-base font-bold text-[#11110E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
              Thermostat Installation Service Area
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
      <FAQ category="thermostatInstallation" />
    </>
  );
}
