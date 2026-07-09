"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Snowflake,
  Droplets,
  Thermometer,
  AlertTriangle,
  Wrench,
  Zap,
  Phone,
  CheckCircle,
  ClipboardList,
  Tag,
  BadgeCheck,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const commonProblems = [
  {
    icon: Thermometer,
    title: "AC Blowing Warm Air",
    description:
      "An AC that runs but pushes out warm or room-temperature air is most often caused by low refrigerant, a dirty evaporator coil, or a failed compressor. We check refrigerant levels, inspect the coil, and test system pressure to pinpoint the cause. Most warm-air calls are resolved same day. If refrigerant is low, we also find and seal the leak — not just recharge the system.",
  },
  {
    icon: Droplets,
    title: "Refrigerant Leak",
    description:
      "A refrigerant leak means your system can't absorb heat, so the AC runs nonstop but never cools the house. Signs include ice on the refrigerant line, a hissing sound near the unit, and rising electric bills. Topping off refrigerant without fixing the leak is a short-term patch — we locate the leak, repair it, and restore the correct charge so the fix actually holds. Most Inland Empire systems use R-410A refrigerant; newer installations may use R-454B, the lower-GWP replacement being phased in under the EPA's AIM Act schedule.",
  },
  {
    icon: Snowflake,
    title: "Frozen Evaporator Coil",
    description: (
      <>
        A frozen coil shuts down airflow and can damage the compressor if
        ignored. Causes include restricted airflow (dirty filter, blocked
        vents), low refrigerant, or a failing blower fan. We thaw the coil
        safely, identify why it froze, and address the root cause. Running your
        AC with a frozen coil for more than a few hours often turns a $200
        repair into a $1,500 compressor job. Issues with airflow can also be
        related to{" "}
        <Link
          href="/air-duct-cleaning"
          className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]"
        >
          air duct issues affecting AC performance
        </Link>
        .
      </>
    ),
  },
  {
    icon: Zap,
    title: "Capacitor Failure",
    description:
      "The capacitor is the part that starts and runs the compressor and fan motors. When it fails, your AC may hum, click repeatedly, or simply not start. Capacitor failure is one of the most common AC repairs in the Inland Empire — the extreme summer heat degrades capacitors faster than in cooler climates. Replacement is typically a same-day fix and falls on the lower end of the repair cost range.",
  },
  {
    icon: Wrench,
    title: "Clogged Condensate Drain Line",
    description:
      "Your AC removes humidity from the air and drains the water out through a condensate line. When that line clogs with algae or debris, water backs up, trips the float switch, and shuts the system off — or worse, leaks into ceilings and walls. We clear the drain line, flush it with a safe cleaning solution, and check the float switch so you don't deal with water damage on top of a broken AC.",
  },
  {
    icon: AlertTriangle,
    title: "Failed Compressor",
    description:
      "The compressor is the heart of your AC system — it pressurizes the refrigerant and drives the entire cooling cycle. A failed compressor usually means the unit is making a grinding or clanking noise and the home isn't cooling at all. Compressor replacement is the most expensive AC repair, typically $800–$1,800 for the part and labor. If your system is 10+ years old, we'll give you an honest comparison between repair and replacement so you can make the right call for your budget.",
  },
];

const repairSteps = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Book Online",
    description:
      "Call (800) 697-4014 or submit a quote request. Tell us what the system is doing (or not doing) and we'll give you an arrival window. Same-day appointments are available seven days a week across the Inland Empire.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Diagnosis",
    description:
      "Your technician arrives, inspects the system, and runs a full diagnostic. We check refrigerant levels, electrical components, airflow, coil condition, and drainage. You'll know exactly what's wrong before we quote any work.",
  },
  {
    number: "03",
    icon: Tag,
    title: "Upfront Price, No Surprises",
    description:
      "We quote the repair before starting. The price you approve is the price on your invoice. No \"additional charges discovered mid-job.\"",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Repair + Warranty",
    description:
      "We complete the repair, test the system through a full cooling cycle, and walk you through what was done. All repairs carry a workmanship warranty — if the same issue returns, we return to fix it at no charge.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Licensed and insured",
    description:
      "California Contractor License #1140776 — the C-20 (Warm-Air Heating, Ventilating and Air-Conditioning) classification required by the California State License Board (CSLB) for HVAC and mechanical work. Every technician is background-checked and trained on current refrigerant handling regulations.",
  },
  {
    title: "24/7 availability",
    description:
      "We answer the phone day and night. A 107-degree day in Fontana at 10 PM is still an emergency — we treat it that way.",
  },
  {
    title: "Same-day service, seven days a week",
    description:
      "Most Inland Empire AC repair calls are scheduled and completed the same day, including weekends.",
  },
  {
    title: "Upfront pricing",
    description:
      "You see the price before we start. No surprises on the invoice.",
  },
  {
    title: "5-star rated",
    description:
      "Our customers across Riverside County and San Bernardino County consistently rate us on service speed, technician professionalism, and honest recommendations.",
  },
  {
    title: "Financing available",
    description:
      "For larger repairs or replacements, we offer financing options. Ask when you call.",
  },
  {
    title: "All major brands serviced",
    description:
      "Carrier, Trane, Lennox, Rheem, York, Goodman, and more. We arrive stocked with the most common parts so most repairs finish in one visit.",
  },
];

// Riverside County city links — all confirmed live
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

// San Bernardino County city links — all confirmed live
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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function AcRepairContent() {
  return (
    <>
      <SetFooterCTA
        title="Need AC Repair in the Inland Empire?"
        description="Don't wait out a broken AC in the Inland Empire heat. Same-day service, upfront pricing, and licensed technicians ready now."
        quoteLink="/quote?category=HVAC&service=AC%20Repair"
      />

      {/*
        Breadcrumb: 2 items only — Services > AC Repair.
        The HVAC Services middle item is intentionally omitted because /hvac-services
        does not yet exist. Insert it in Phase: scale-batch once that hub page is live.
        Full intended trail: Home > HVAC Services > AC Repair
      */}
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "AC Repair" },
        ]}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content — text first on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                24/7 Emergency AC Repair
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                AC Repair in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Your AC stopped working. We can fix it today.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                When your air conditioner breaks down in Riverside, Moreno
                Valley, or anywhere across the Inland Empire, you don&rsquo;t
                have time to wait. SOS Plumbing and Air provides AC repair
                throughout the Inland Empire with same-day appointments and
                24/7 emergency service. Most AC repairs run between $150 and
                $800 — a diagnostic call starts at the low end, while a
                refrigerant recharge or capacitor replacement typically falls
                in the middle range. We give you an upfront price before we
                touch anything.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Our licensed technicians (CA LIC# 1140776) service all major AC
                brands and arrive fully stocked. Whether your system is blowing
                warm air, tripping the breaker, or simply won&rsquo;t turn on,
                we diagnose the problem fast and fix it right the first time.
                No runaround, no upsell pressure — just cold air back in your
                home.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=AC%20Repair"
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

            {/* Hero image — photo second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl"
            >
              {/*
                TODO: Replace with /ac-repair-hero.webp once generated from ac-repair-hero-prompt.md
                Current placeholder: /wh-sos-service-rep.webp
              */}
              <Image
                src="/service-page-images/ac-repair.webp"
                alt="Licensed HVAC technician performing AC repair in the Inland Empire"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Common AC Problems                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-14"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
              Common AC Problems We Fix
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Inland Empire summers regularly push past 100°F — here are the
              six AC issues our techs see most often.
            </p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>

          {/* 1 col mobile → 2 col sm → 3 col lg */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {commonProblems.map((problem, index) => {
              const ProblemIcon = problem.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                      <ProblemIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-[#11110E] flex-1 leading-snug">
                      {problem.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* AC Repair Process                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-14"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
              What to Expect When You Call Our HVAC Team
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {repairSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl bg-white p-5 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="absolute -top-3 left-5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EA5D19] text-white text-xs font-bold shadow-md">
                    {step.number}
                  </div>
                  <div className="mt-4 mb-3">
                    <StepIcon className="h-6 w-6 text-[#EA5D19]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#11110E] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Cost & Repair-vs-Replace                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-5 sm:mb-8">
              How Much Does AC Repair Cost?
            </h2>

            {/*
              AIO-citable direct-answer sentence — rendered as semantic <strong>.
              GEO requirement: bolded direct-answer for AI Overview / ChatGPT / Perplexity citability.
              Do NOT change to CSS-only bold or move inside a collapsed accordion.
            */}
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-5 sm:mb-6 p-4 bg-orange-50 border-l-4 border-[#EA5D19] rounded-r-xl">
              <strong>
                AC repair in the Inland Empire costs between $150 and $1,800,
                with most service calls falling in the $150–$800 range. A
                diagnostic call starts at $75–$150 (typically applied toward
                the repair), while a full compressor replacement is the
                highest-cost repair at $800–$1,800.
              </strong>
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Here&rsquo;s how that repair range breaks down by service type:
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
              {[
                ["Diagnostic fee", "$75–$150 (applied toward the repair if you proceed)"],
                ["Capacitor replacement", "$150–$350"],
                ["Refrigerant recharge (plus leak repair)", "$200–$600"],
                ["Condensate drain cleaning", "$100–$250"],
                ["Evaporator coil cleaning", "$150–$400"],
                ["Fan motor replacement", "$300–$700"],
                ["Compressor replacement", "$800–$1,800"],
              ].map(([service, cost]) => (
                <li
                  key={service}
                  className="flex items-start justify-between gap-4 text-sm sm:text-base text-gray-700 border-b border-gray-100 pb-2"
                >
                  <span className="font-medium">{service}</span>
                  <span className="shrink-0 font-bold text-[#11110E]">
                    {cost}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 italic">
              Cost varies by system age, refrigerant type, and accessibility.
              We give you an exact number before any work begins.
            </p>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#11110E] mb-4">
              Repair vs. Replace
            </h3>

            {/*
              AIO-citable direct-answer sentence — rendered as semantic <strong>.
              GEO requirement #2: passage-citable for "should I repair or replace my AC".
              Do NOT change to CSS-only bold or move inside a collapsed accordion.
            */}
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-5 sm:mb-6 p-4 bg-orange-50 border-l-4 border-[#EA5D19] rounded-r-xl">
              <strong>
                Replace your AC when the repair cost exceeds 50% of a new
                system&rsquo;s price AND your unit is 10 or more years old;
                otherwise, repair is typically the better investment. According
                to ENERGY STAR, the average central AC has a useful lifespan of
                10–15 years, which is why the age threshold matters as much as
                the cost threshold.
              </strong>
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              When a repair quote feels high, the question becomes whether
              it&rsquo;s smarter to replace the system. A 15-year-old unit
              using R-22 refrigerant (now phased out and expensive) is almost
              always a replacement candidate. Replacement also unlocks a
              meaningful efficiency upgrade — current minimum-efficiency
              residential systems in California must meet SEER2 14.3 (raised
              from the prior SEER 14 standard in 2023), and high-efficiency
              units run SEER2 18 or higher, which can cut summer cooling costs
              noticeably given the Inland Empire&rsquo;s long cooling season.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We&rsquo;ll tell you honestly where your system stands. If
              replacement makes more sense, we&rsquo;ll walk you through AC
              installation options{/* FUTURE link: /ac-installation — activate once page is live */}{" "}
              and can schedule that same week. If the repair is solid,
              we&rsquo;ll do the repair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why Choose Us                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#11110E] py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-14"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white mb-3 lg:mb-6">
              Why Inland Empire Homeowners Choose Us for AC Repair
            </h2>
            {/* Canonical brand entity — appears once per GEO requirement #6 */}
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              SOS Plumbing and Air is a licensed Inland Empire HVAC contractor (CA
              LIC# 1140776) serving Riverside County and San Bernardino County
              with 24/7 emergency AC repair and same-day service.
            </p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle className="h-5 w-5 text-[#EA5D19] shrink-0 mt-0.5" />
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed pl-8">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Service Area                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-5">
              AC Repair Service Area — Inland Empire, CA
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We provide AC repair throughout Riverside County and San
              Bernardino County. Our technicians are dispatched from
              the Inland Empire, which means faster arrival times and no
              out-of-area travel fees.
            </p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Riverside County */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white p-5 sm:p-8 shadow-md border border-gray-100"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-2">
                Riverside County
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Whether you&rsquo;re dealing with triple-digit summer heat
                in{" "}
                <Link
                  href="/moreno-valley"
                  className="text-[#EA5D19] hover:underline"
                >
                  Moreno Valley
                </Link>{" "}
                or need a same-day tech in{" "}
                <Link
                  href="/murrieta"
                  className="text-[#EA5D19] hover:underline"
                >
                  Murrieta
                </Link>{" "}
                or{" "}
                <Link
                  href="/temecula"
                  className="text-[#EA5D19] hover:underline"
                >
                  Temecula
                </Link>
                , we cover all of Riverside County.
              </p>
              <div className="flex flex-wrap gap-2">
                {riversideCountyCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="inline-block rounded-full bg-orange-50 border border-[#EA5D19]/30 px-3 py-1 text-xs sm:text-sm font-medium text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-colors min-h-[32px] flex items-center"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* San Bernardino County */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-white p-5 sm:p-8 shadow-md border border-gray-100"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-2">
                San Bernardino County
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                From the high-desert edge of{" "}
                <Link
                  href="/yucaipa"
                  className="text-[#EA5D19] hover:underline"
                >
                  Yucaipa
                </Link>{" "}
                and{" "}
                <Link
                  href="/redlands"
                  className="text-[#EA5D19] hover:underline"
                >
                  Redlands
                </Link>{" "}
                to the western corridor cities of{" "}
                <Link
                  href="/rancho-cucamonga"
                  className="text-[#EA5D19] hover:underline"
                >
                  Rancho Cucamonga
                </Link>
                , we dispatch across all of San Bernardino County.
              </p>
              <div className="flex flex-wrap gap-2">
                {sbCountyCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="inline-block rounded-full bg-orange-50 border border-[#EA5D19]/30 px-3 py-1 text-xs sm:text-sm font-medium text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-colors min-h-[32px] flex items-center"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Trusted Brands                                                       */}
      {/* ------------------------------------------------------------------ */}
      <TrustedBrands className="bg-white" />

      {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                                  */}
      {/* ------------------------------------------------------------------ */}
      {/*
        SSR note: FAQ component is "use client" but Accordion content is rendered
        in the initial HTML (AccordionContent is in the DOM, just visually collapsed).
        AI crawlers can see all Q+A text. Verified pattern matches GEO Note #3 requirement.
      */}
      <FAQ
        category="acRepair"
        title="Frequently Asked Questions About AC Repair"
        subtitle="Common questions about AC repair in the Inland Empire"
      />
    </>
  );
}
