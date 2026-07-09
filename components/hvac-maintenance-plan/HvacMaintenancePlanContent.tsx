"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Phone,
  CheckCircle,
  Calendar,
  Zap,
  Wrench,
  Star,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const planIncludes = [
  {
    icon: Zap,
    title: "Spring AC Tune-Up",
    description:
      "Full AC maintenance visit in March–May before the Inland Empire cooling season. Covers condenser and evaporator coil inspection, refrigerant check, capacitor and contactor testing, condensate drain cleaning, electrical inspection, and temperature split measurement.",
  },
  {
    icon: Wrench,
    title: "Fall Furnace Tune-Up",
    description:
      "Full furnace maintenance visit in September–October before the heating season. Covers burner inspection and cleaning, heat exchanger check, igniter test, flame sensor cleaning, gas pressure verification, flue inspection, and CO safety check.",
  },
  {
    icon: Star,
    title: "Priority Scheduling",
    description:
      "Plan members move to the front of the queue during peak season. In practice, this matters most in June–August when emergency calls fill the schedule. If your AC fails on a 108°F day in Riverside, priority scheduling means same-day service instead of the next available slot.",
  },
  {
    icon: Shield,
    title: "Repair Discount",
    description:
      "Plan members receive a discount on any repairs needed during or after maintenance visits. If we find a worn capacitor during your spring tune-up and replace it, the plan discount applies to that repair.",
  },
  {
    icon: Calendar,
    title: "No-Reminder Scheduling",
    description:
      "We schedule both visits at enrollment and remind you before each one. You don't have to remember to book — that's the point of the plan.",
  },
  {
    icon: CheckCircle,
    title: "Warranty Protection",
    description:
      "Most manufacturer warranties require annual maintenance to remain valid. The plan satisfies that requirement and creates a paper trail if a warranty claim arises.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Both systems covered",
    description: "One plan covers AC and furnace. No separate agreements to track.",
  },
  {
    title: "Licensed HVAC technicians",
    description: "CA LIC# 1140776. Every visit performed by licensed, background-checked technicians.",
  },
  {
    title: "Honest findings",
    description: "We tell you what we found — including what's fine. No manufactured urgency to sell repairs you don't need.",
  },
  {
    title: "No long contracts",
    description: "Annual plan with prorated refund for unused visits if you need to cancel. No multi-year lock-ins.",
  },
  {
    title: "Multi-system homes",
    description: "Multiple AC units or heating zones can be added to the plan. Ask about multi-system pricing.",
  },
  {
    title: "24/7 emergency response",
    description: "Plan members still have access to 24/7 emergency repair service. The plan reduces emergencies — it doesn't replace the safety net.",
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

export function HvacMaintenancePlanContent() {
  return (
    <>
      <SetFooterCTA
        title="Enroll in the HVAC Maintenance Plan"
        description="Two annual tune-ups, priority scheduling, repair discounts. One plan covers both your AC and furnace. Serving the Inland Empire."
        quoteLink="/quote?category=HVAC&service=HVAC%20Maintenance%20Plan"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Heating Services", href: "/heating-services" },
          { label: "HVAC Maintenance Plan" },
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
                Annual HVAC Service Agreement
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                HVAC Maintenance Plan in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Two annual tune-ups. Priority scheduling. Repair discounts.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                The HVAC maintenance plan covers both your air conditioner and your
                furnace with one annual agreement. A spring AC tune-up before cooling
                season and a fall furnace tune-up before heating season — scheduled,
                tracked, and performed without you having to remember to book.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                In the Inland Empire, where AC systems run hard for months and summer
                heat is unforgiving, annual maintenance is what separates planned
                maintenance costs from emergency repair costs. The plan also includes
                priority scheduling during the peak summer months — when an AC failure
                without it can mean a 2–3 day wait.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=HVAC%20Maintenance%20Plan"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[44px]"
                >
                  Enroll Today
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
                src="/service-page-images/hvac-maintenance-plan.webp"
                alt="Licensed HVAC technician on a scheduled HVAC maintenance plan visit in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /hvac-maintenance-plan-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct-answer box */}
      <section className="py-8 lg:py-12 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#EA5D19] pl-4 sm:pl-6">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong>Is the maintenance plan worth it in the Inland Empire?</strong>{" "}
              For most homeowners with central HVAC, yes. The plan cost is typically less
              than a single emergency repair call. The IE&rsquo;s extreme summer heat means AC
              failures are more likely — and more urgent — than in cooler climates.
              The furnace CO check alone is worth doing annually on any gas appliance.
            </p>
          </div>
        </div>
      </section>

      {/* Plan Includes */}
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
              What&rsquo;s Included in the Plan
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {planIncludes.map((item, index) => (
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
              Want just a single tune-up?{" "}
              <Link href="/ac-maintenance" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                See AC maintenance
              </Link>{" "}
              or{" "}
              <Link href="/furnace-maintenance" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                furnace maintenance
              </Link>{" "}
              for standalone visit options.
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
              Maintenance Plan Service Area
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
      <FAQ category="hvacMaintenancePlan" />
    </>
  );
}
