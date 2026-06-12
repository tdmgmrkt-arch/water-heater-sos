"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  Phone,
  CheckCircle,
  Calendar,
  ClipboardList,
  Shield,
  Thermometer,
  Droplets,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const tuneUpChecklist = [
  {
    icon: Thermometer,
    title: "Condenser & Evaporator Coil",
    description:
      "Inspect and clean the condenser coil (outdoor unit). Inspect the evaporator coil for buildup that restricts airflow and reduces efficiency. A dirty condenser coil can reduce system capacity by 30% and increase energy consumption significantly.",
  },
  {
    icon: Droplets,
    title: "Refrigerant Check",
    description:
      "Check and record refrigerant pressure. If the system is low, we'll tell you — and explain why. Low refrigerant means a leak; we quote the repair separately so you can decide how to proceed. Topping off without fixing the leak is a temporary patch.",
  },
  {
    icon: Wrench,
    title: "Capacitor & Contactor",
    description:
      "Test the capacitor and contactor — the two electrical components most commonly responsible for no-start failures in the Inland Empire. Capacitors degrade faster in extreme heat. We measure remaining capacitance and flag capacitors approaching end-of-life before they fail on a 108°F day.",
  },
  {
    icon: ClipboardList,
    title: "Condensate Drain & Float Switch",
    description:
      "Clean or flush the condensate drain line. Test the float switch that shuts the system down if the drain backs up. A blocked drain is a common cause of water damage in attics and ceiling spaces — routine clearing prevents it.",
  },
  {
    icon: Shield,
    title: "Electrical & Controls",
    description:
      "Inspect electrical connections, wiring, and terminals. Test safety controls. Measure supply and return air temperature split to confirm the system is achieving rated cooling. Review thermostat operation.",
  },
  {
    icon: Calendar,
    title: "Pre-Season Readiness Report",
    description:
      "At the end of the tune-up, we walk you through what we found — what's fine, what's worn but not failed, and what should be addressed before summer. You get an honest picture, not a list of upsells.",
  },
];

const whenToSchedule = [
  {
    timing: "March – May",
    label: "Ideal",
    description:
      "Spring is the best time — before the Inland Empire cooling season ramps up and before our emergency repair schedule fills. Scheduling early means you have the most flexibility on appointment windows.",
  },
  {
    timing: "June",
    label: "OK",
    description:
      "Still a good time to tune up before peak heat arrives, though appointment availability tightens. Prioritize early June.",
  },
  {
    timing: "July – September",
    label: "Hard",
    description:
      "This is peak repair season. Tune-ups are still available but scheduling windows are tight and technicians are dispatching emergency calls. If you're on our maintenance plan, priority scheduling applies.",
  },
  {
    timing: "October – February",
    label: "Off-season",
    description:
      "The most available window, but you're coming in after the hardest season. Better than nothing — especially if you skipped spring. Fall is also when we recommend scheduling furnace maintenance.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Licensed HVAC technicians",
    description: "CA LIC# 1140776, C-20 classification. Every technician is trained and background-checked.",
  },
  {
    title: "Honest findings",
    description: "We tell you what we found — including items that are fine. No manufactured urgency to sell repairs you don't need.",
  },
  {
    title: "Maintenance plan available",
    description: "Cover both AC and furnace with one annual plan. Priority scheduling, repair discounts, and no scheduling reminders to track.",
  },
  {
    title: "All major brands serviced",
    description: "Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, Bryant, Daikin.",
  },
  {
    title: "Seven-day availability",
    description: "Tune-ups available seven days a week, including weekends.",
  },
  {
    title: "Upfront pricing",
    description: "You see the price before we arrive. No surprise add-ons on the invoice.",
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

export function AcMaintenanceContent() {
  return (
    <>
      <SetFooterCTA
        title="Schedule Your AC Tune-Up"
        description="Annual maintenance keeps your AC running through the Inland Empire's triple-digit summers. Book before peak season fills up."
        quoteLink="/quote?category=HVAC&service=AC%20Maintenance"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "AC Services", href: "/ac-services" },
          { label: "AC Maintenance" },
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
                Annual AC Tune-Up &amp; Maintenance
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                AC Maintenance in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                One tune-up every spring. No surprise breakdowns in August.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                The Inland Empire&rsquo;s extreme summer heat — sustained triple-digit
                temperatures for weeks — puts more stress on AC equipment than almost any
                other California climate. A degrading capacitor, a partially blocked coil,
                or slightly low refrigerant that was manageable in May can cause a complete
                system failure when your system is running 16 hours a day in July.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Annual maintenance catches these issues early. An AC tune-up in the Inland
                Empire runs $89 to $199. A same-day emergency repair call in August — plus
                the discomfort while waiting — runs several times more. We service all major
                brands, seven days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=AC%20Maintenance"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[44px]"
                >
                  Schedule a Tune-Up
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
                alt="Licensed HVAC technician performing AC maintenance in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /ac-maintenance-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct-answer box */}
      <section className="py-8 lg:py-12 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#EA5D19] pl-4 sm:pl-6">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong>How often should you get AC maintenance?</strong>{" "}
              Once a year, in early spring (March–May) before the Inland Empire cooling
              season begins. The IE&rsquo;s extreme summer heat means AC systems run harder
              and longer than in most of California — annual maintenance is what keeps
              that workload from shortening your system&rsquo;s life.
            </p>
          </div>
        </div>
      </section>

      {/* Tune-Up Checklist */}
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
              What Our AC Tune-Up Covers
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A full inspection and cleaning checklist — not a filter swap and a handshake.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuneUpChecklist.map((item, index) => (
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
          <div className="mt-8 text-center">
            <p className="text-base text-gray-600">
              Want heating covered too?{" "}
              <Link href="/hvac-maintenance-plan" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                See our HVAC maintenance plan
              </Link>{" "}
              — covers both AC and furnace tune-ups annually.
            </p>
          </div>
        </div>
      </section>

      {/* When to Schedule */}
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
              When to Schedule Your AC Tune-Up
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whenToSchedule.map((item, index) => (
              <motion.div
                key={item.timing}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="mb-3">
                  <span className="text-lg font-bold text-[#11110E] block">{item.timing}</span>
                  <span className={`text-sm font-semibold ${item.label === "Ideal" ? "text-green-600" : item.label === "OK" ? "text-yellow-600" : item.label === "Hard" ? "text-red-500" : "text-gray-500"}`}>
                    {item.label}
                  </span>
                </div>
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
              AC Maintenance Service Area
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We provide AC tune-ups throughout Riverside County and San Bernardino County.
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
                    className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#EA5D19] hover:text-[#EA5D19] transition-colors min-h-[44px]"
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
                    className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#EA5D19] hover:text-[#EA5D19] transition-colors min-h-[44px]"
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
      <FAQ category="acMaintenance" />
    </>
  );
}
