"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Snowflake,
  Flame,
  Wind,
  Phone,
  CheckCircle,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const services = [
  {
    icon: Snowflake,
    title: "Air Conditioning Services",
    href: "/ac-services",
    description:
      "AC repair, AC installation, maintenance plans, ductless mini-splits, and smart thermostats. Same-day emergency service available.",
  },
  {
    icon: Flame,
    title: "Heating Services",
    href: "/heating-services",
    description:
      "Furnace repair, furnace installation, heat pump systems, and annual heating tune-ups. We service all gas and electric heating equipment.",
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    href: "/indoor-air-quality",
    description:
      "Air duct cleaning, whole-home air filtration, UV purifiers, humidifiers, and dehumidifiers. Critical for Inland Empire homes during wildfire and Santa Ana wind season.",
  },
];

const whyChooseUsPoints = [
  {
    title: "C-20 Licensed and insured",
    description:
      "California Contractor License #1140776 under the C-20 (Warm-Air Heating, Ventilating and Air-Conditioning) classification — the credential California requires under CSLB authority for residential HVAC work. Every technician is EPA 608 certified for refrigerant handling.",
  },
  {
    title: "24/7 emergency service",
    description:
      "A broken AC at 11 PM in Rancho Cucamonga or a furnace that won't start on a cold January morning in Ontario — we respond any time, day or night.",
  },
  {
    title: "Same-day appointments, seven days a week",
    description:
      "We dispatch from the Inland Empire, which means short drive times and no out-of-area surcharges.",
  },
  {
    title: "Upfront pricing",
    description: "You see the price before we start. The invoice matches the quote.",
  },
  {
    title: "All major brands",
    description:
      "Carrier, Trane, Lennox, Rheem, York, Goodman, Mitsubishi, Daikin, and more. We stock common parts on the truck so most jobs are completed in one visit.",
  },
  {
    title: "5-star rated",
    description:
      "Homeowners across Riverside County and San Bernardino County rate us on speed, transparency, and technician professionalism.",
  },
  {
    title: "ENERGY STAR-qualified installations",
    description:
      "When you replace equipment, we'll walk you through current efficiency standards (SEER2 for AC systems, AFUE for furnaces) and applicable California and federal rebates.",
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

export function HvacServicesContent() {
  return (
    <>
      <SetFooterCTA
        title="Need HVAC Service in the Inland Empire?"
        description="Licensed HVAC contractor serving Riverside County and San Bernardino County. Same-day service, upfront pricing, 24/7 emergency availability."
        quoteLink="/quote?category=HVAC&service=HVAC%20Services"
      />

      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "HVAC Services" },
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
                Licensed HVAC Contractor — Riverside &amp; San Bernardino County
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                HVAC Services in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Heating, cooling, and indoor air quality — one licensed team for everything your home needs.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Water Heater SOS provides full-service HVAC throughout the Inland Empire, including{" "}
                <Link href="/ac-repair" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                  air conditioning
                </Link>
                , heating, and indoor air quality solutions. Whether you need same-day{" "}
                <Link href="/ac-repair" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                  AC repair
                </Link>{" "}
                on a 107-degree afternoon in Riverside, a new furnace installed before winter hits San Bernardino, or a whole-home air filtration system to filter out wildfire smoke, we have the licensed technicians and equipment to get it done.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                <strong>
                  Inland Empire homeowners face some of California&rsquo;s most extreme HVAC demands — summer highs above 100°F, short but cold winters, and air quality events tied to wildfire season and Santa Ana winds.
                </strong>{" "}
                Our team is based in the Inland Empire and services Riverside County and San Bernardino County seven days a week, with 24/7 emergency availability for heating and cooling failures.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=HVAC%20Services"
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
                alt="Licensed HVAC technician performing HVAC services in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /hvac-services-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Our HVAC Services Grid                                               */}
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
              Our HVAC Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Everything under one roof — no subcontracting, no scheduling gaps. Click any category to see all the services underneath it.
            </p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={service.href}
                    className="group block rounded-2xl bg-white p-5 sm:p-7 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all h-full"
                  >
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                        <ServiceIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-[#11110E] group-hover:text-[#EA5D19] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#EA5D19] group-hover:underline">
                      View services &rarr;
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Our Approach                                                         */}
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
              How We Handle HVAC in the Inland Empire
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              The Inland Empire is not a typical California market. Riverside County and San Bernardino County sit in a bowl geography that traps heat — summer temperatures in Moreno Valley, Fontana, and Redlands regularly exceed 100°F and can spike past 110°F during heat domes. Those same areas can drop into the low 30s on January nights. Your HVAC system does more work here than almost anywhere else in California.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Our technicians are trained on the full range of residential HVAC equipment — central air systems, ductless mini-splits, gas furnaces, heat pump systems, and the refrigerants that power them (R-410A and the newer R-454B being phased in under the EPA&rsquo;s AIM Act). We hold the California C-20 (Warm-Air Heating, Ventilating and Air-Conditioning) license required by the CSLB for HVAC work in this state.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We also understand that the IE housing stock spans everything from 1960s tract homes in San Bernardino with aging ductwork to new construction in Menifee and Eastvale with modern zoning demands. If you have a{" "}
              <Link href="/heat-pump-water-heaters" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                heat pump water heater
              </Link>{" "}
              at home, you may also be a strong candidate for a{" "}
              <Link href="/heating-services" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                heat pump HVAC system
              </Link>{" "}
              — both use the same refrigerant technology and can be integrated into a highly efficient whole-home setup.
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
              Why Inland Empire Homeowners Choose Us for HVAC Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Water Heater SOS is a licensed Inland Empire HVAC contractor (CA LIC# 1140776) serving Riverside County and San Bernardino County with full-service heating, cooling, and indoor air quality solutions.
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
              HVAC Service Area — Inland Empire, CA
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We provide HVAC services throughout Riverside County and San Bernardino County. Our team is based in the Inland Empire — fast response times, no out-of-area fees.
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
        category="hvacServices"
        title="Frequently Asked Questions About HVAC Services"
        subtitle="Common questions about HVAC services in the Inland Empire"
      />
    </>
  );
}
