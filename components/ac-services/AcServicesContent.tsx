"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  Settings,
  Calendar,
  Zap,
  Thermometer,
  Phone,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const acServices = [
  {
    icon: Wrench,
    title: "AC Repair",
    href: "/ac-repair",
    description:
      "Same-day repairs for all AC problems — warm air, refrigerant leaks, capacitor failure, frozen coils, and more. Available 24/7 for emergencies.",
  },
  {
    icon: Settings,
    title: "AC Installation",
    href: "/ac-installation",
    description:
      "New central AC installation and full system replacements. Free in-home assessment, upfront pricing, and financing available.",
  },
  {
    icon: Calendar,
    title: "AC Maintenance",
    href: "/ac-maintenance",
    description:
      "Annual tune-ups and multi-visit maintenance plans. Spring service before the Inland Empire summer heat season protects your warranty and extends system life.",
  },
  {
    icon: Zap,
    title: "Mini-Split Installation",
    href: "/mini-split-installation",
    description:
      "Ductless mini-split systems for room additions, garages, ADUs, and homes without ductwork. Single-zone and multi-zone installations available.",
  },
  {
    icon: Thermometer,
    title: "Thermostat Installation",
    href: "/thermostat-installation",
    description:
      "Nest, ecobee, and Honeywell smart thermostat installation. Proper wiring, compatibility checks, and setup — same-day service available.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Licensed and insured",
    description:
      "C-20 license (Warm-Air Heating, Ventilating and Air-Conditioning) under the California State License Board (CSLB). EPA 608 certified for refrigerant handling.",
  },
  {
    title: "Same-day service, seven days a week",
    description:
      "We dispatch from the Inland Empire, which means faster arrival than contractors based outside the area.",
  },
  {
    title: "24/7 emergency response",
    description: "AC failures don't wait for business hours. Neither do we.",
  },
  {
    title: "Upfront pricing",
    description:
      "You get a firm price before we start. The invoice matches what you approved.",
  },
  {
    title: "All major AC brands",
    description:
      "Carrier, Trane, Lennox, Rheem, York, Goodman, Mitsubishi, and Daikin. We arrive stocked for the most common repairs.",
  },
  {
    title: "5-star rated",
    description:
      "Consistently rated by Inland Empire homeowners on response speed, honest assessments, and professional technicians.",
  },
  {
    title: "Financing available",
    description:
      "Ask about financing options for new system installs and larger repairs.",
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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function AcServicesContent() {
  return (
    <>
      <SetFooterCTA
        title="Need AC Service in the Inland Empire?"
        description="Licensed air conditioning contractor serving Riverside County and San Bernardino County. Same-day service, upfront pricing, 24/7 emergency response."
        quoteLink="/quote?category=HVAC&service=AC%20Services"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "AC Services" },
        ]}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Same-Day AC Service — Inland Empire
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Air Conditioning Services in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                From emergency repairs to full system installs — licensed AC service for Riverside County and San Bernardino County.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                When Inland Empire temperatures climb past 100°F, your air conditioner is not optional. We provide complete air conditioning services throughout the Inland Empire, including same-day emergency repairs, new AC installation, annual tune-ups, ductless mini-split systems, and smart thermostat installation. One licensed team. All the AC services your home needs.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                <strong>
                  Riverside County and San Bernardino County homeowners rely on their AC systems for 6 to 8 months of the year — longer than almost any other region in California.
                </strong>{" "}
                That demand means systems wear faster here than the national average, and choosing a licensed local contractor with fast response times matters more than it would in a milder climate.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=AC%20Services"
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
                alt="Licensed HVAC technician performing AC services in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /ac-services-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* AC Services Grid                                                     */}
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
              AC Services We Offer
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Five services covering every stage of your AC system — from emergency breakdowns to long-term efficiency upgrades.
            </p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {acServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={service.href}
                    className="group block rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all h-full"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                        <ServiceIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-[#11110E] group-hover:text-[#EA5D19] transition-colors flex-1 leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* When You Need AC Service                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-5 sm:mb-8">
              When to Call for AC Service in the Inland Empire
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Inland Empire summers demand more from AC systems than almost anywhere in California. Knowing which situation calls for emergency service versus a scheduled appointment saves money and avoids unnecessary stress.
            </p>

            <div className="space-y-6">
              <div className="rounded-xl bg-red-50 border-l-4 border-red-500 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-red-700">Emergency — call us immediately</h3>
                </div>
                <p className="text-sm sm:text-base text-red-800 leading-relaxed">
                  An AC failure is a health emergency when outdoor temperatures exceed 100°F and household members include children, elderly residents, or pets. If your system stops cooling entirely, trips the breaker repeatedly, makes a grinding or clanking noise, or is leaking water into ceilings or walls — call{" "}
                  <a href="tel:8006974014" className="font-bold underline">(800) 697-4014</a>{" "}
                  now. We provide 24/7 emergency AC repair throughout the Inland Empire.
                </p>
              </div>

              <div className="rounded-xl bg-orange-50 border-l-4 border-[#EA5D19] p-5">
                <h3 className="text-base sm:text-lg font-bold text-[#11110E] mb-2">Schedule same-day or next-day</h3>
                <ul className="space-y-1 text-sm sm:text-base text-gray-700">
                  {[
                    "Your AC is running but not cooling as well as it should",
                    "You notice higher electric bills without a change in usage habits",
                    "The system is short-cycling (turning on and off more frequently than normal)",
                    "Ice is forming on the refrigerant line or outdoor unit",
                    "You hear unusual noises but the system is still functioning",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#EA5D19] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-[#11110E] mb-2">Schedule ahead — planned service</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Annual AC maintenance should be scheduled in spring before the cooling season starts — ideally March through May in the Inland Empire. Pre-season tune-ups come with shorter wait times and catch small problems before they become $800 repairs on a 108-degree day in July. A well-maintained AC system has an average useful life of 10–15 years (ENERGY STAR). Regular annual service is one of the most cost-effective things you can do to protect that investment.
                </p>
              </div>
            </div>
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
              Why Inland Empire Homeowners Choose Us for Air Conditioning Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              SOS Plumbing and Air is a licensed Inland Empire HVAC contractor (CA LIC# 1140776) serving Riverside County and San Bernardino County with the full range of residential air conditioning services.
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
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{point.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed pl-8">{point.description}</p>
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
              AC Service Area — Inland Empire, CA
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We provide air conditioning services throughout Riverside County and San Bernardino County.
            </p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white p-5 sm:p-8 shadow-md border border-gray-100"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-4">Riverside County</h3>
              <div className="flex flex-wrap gap-2">
                {riversideCountyCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="inline-flex items-center rounded-full bg-orange-50 border border-[#EA5D19]/30 px-3 py-1 text-xs sm:text-sm font-medium text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-colors min-h-[32px]"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-white p-5 sm:p-8 shadow-md border border-gray-100"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-4">San Bernardino County</h3>
              <div className="flex flex-wrap gap-2">
                {sbCountyCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="inline-flex items-center rounded-full bg-orange-50 border border-[#EA5D19]/30 px-3 py-1 text-xs sm:text-sm font-medium text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-colors min-h-[32px]"
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
      <FAQ
        category="acServices"
        title="Frequently Asked Questions About Air Conditioning Services"
        subtitle="Common questions about AC services in the Inland Empire"
      />
    </>
  );
}
