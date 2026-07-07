"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Settings, Calendar, Zap, Shield, Phone, CheckCircle } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const heatingServices = [
  { icon: Flame, title: "Furnace Repair", href: "/furnace-repair", description: "Same-day furnace repair for all makes and models. Gas and electric systems. 24/7 emergency response for heating failures during cold weather." },
  { icon: Settings, title: "Furnace Installation", href: "/furnace-installation", description: "High-efficiency gas and electric furnace installation. Free in-home estimate, AFUE sizing guidance, and financing available." },
  { icon: Calendar, title: "Furnace Maintenance", href: "/furnace-maintenance", description: "Annual fall tune-ups and multi-visit maintenance plans. Includes heat exchanger inspection, burner cleaning, safety checks, and carbon monoxide testing." },
  { icon: Zap, title: "Heat Pump Systems", href: "/heat-pump-systems", description: "Whole-home heat pump installation and service. Heats and cools with a single system — ideal for the Inland Empire's mild winters and extreme summers. California rebates and federal IRA tax credits available." },
  { icon: Shield, title: "HVAC Maintenance Plan", href: "/hvac-maintenance-plan", description: "Annual or bi-annual HVAC maintenance plans covering both heating and cooling. Priority scheduling, discounted repairs, and warranty-compliant tune-ups." },
];

const whyChooseUsPoints = [
  { title: "C-20 Licensed and insured", description: "California Contractor License #1140776 under the C-20 classification required by the CSLB for HVAC and heating work. Every technician is EPA 608 certified." },
  { title: "24/7 emergency heating service", description: "Cold nights don't follow business hours. We answer the phone around the clock and dispatch for heating emergencies throughout the Inland Empire." },
  { title: "Same-day service, seven days a week", description: "Local dispatch from the Inland Empire — faster response, no out-of-area fees." },
  { title: "Gas and electric system expertise", description: "We service and install gas furnaces, electric furnaces, and heat pump systems of all major brands." },
  { title: "Upfront pricing", description: "You see the price before we touch anything. No surprises." },
  { title: "Carbon monoxide safety checks included", description: "Every furnace service call includes a heat exchanger inspection and CO check — standard, not an add-on." },
  { title: "California rebate guidance", description: "We'll walk you through current utility and federal incentives on qualifying heat pump installations so you don't leave money on the table." },
];

const riversideCountyCities = [
  { name: "Moreno Valley", href: "/moreno-valley" }, { name: "Murrieta", href: "/murrieta" }, { name: "Temecula", href: "/temecula" },
  { name: "Riverside", href: "/riverside" }, { name: "Corona", href: "/corona" }, { name: "Hemet", href: "/hemet" },
  { name: "Lake Elsinore", href: "/lake-elsinore" }, { name: "Menifee", href: "/menifee" }, { name: "Perris", href: "/perris" },
  { name: "Norco", href: "/norco" }, { name: "Eastvale", href: "/eastvale" }, { name: "San Jacinto", href: "/san-jacinto" }, { name: "Banning", href: "/banning" },
];

const sbCountyCities = [
  { name: "Yucaipa", href: "/yucaipa" }, { name: "Redlands", href: "/redlands" }, { name: "Rancho Cucamonga", href: "/rancho-cucamonga" },
  { name: "Chino", href: "/chino" }, { name: "Chino Hills", href: "/chino-hills" }, { name: "Upland", href: "/upland" }, { name: "Claremont", href: "/claremont" },
  { name: "San Bernardino", href: "/san-bernardino" }, { name: "Fontana", href: "/fontana" }, { name: "Ontario", href: "/ontario" },
  { name: "Rialto", href: "/rialto" }, { name: "Colton", href: "/colton" }, { name: "Loma Linda", href: "/loma-linda" }, { name: "Highland", href: "/highland" },
  { name: "Beaumont", href: "/beaumont" }, { name: "Calimesa", href: "/calimesa" }, { name: "Mentone", href: "/mentone" }, { name: "Grand Terrace", href: "/grand-terrace" },
];

export function HeatingServicesContent() {
  return (
    <>
      <SetFooterCTA
        title="Need Heating Service in the Inland Empire?"
        description="Licensed heating contractor serving Riverside County and San Bernardino County. Furnace repair, heat pump installation, annual tune-ups. Same-day availability."
        quoteLink="/quote?category=HVAC&service=Heating%20Services"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Heating Services" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Licensed Heating Contractor — Riverside &amp; San Bernardino County
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Heating Services in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Furnace repair, installation, heat pump systems, and annual maintenance — all in one place.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Inland Empire winters are short but they&rsquo;re real. When temperatures drop into the 30s in Redlands, San Bernardino, or the high-desert edges of Yucaipa and Banning, a furnace that won&rsquo;t start is not a minor inconvenience. We provide heating services throughout the Inland Empire including furnace repair, furnace installation, heat pump systems, and maintenance plans — with same-day availability for emergency heating failures.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                <strong>The Inland Empire&rsquo;s heating season runs roughly November through February, but heating systems that go without annual maintenance tend to fail at the worst possible time — on the coldest night of the year.</strong>{" "}
                Our licensed technicians service all major furnace and heat pump brands and can assess, repair, or replace your heating system in a single visit for most jobs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote?category=HVAC&service=Heating%20Services" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[44px]">
                  Get a Free Quote
                </Link>
                <a href="tel:8006974014" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#EA5D19] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-all min-h-[44px]">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  Call Now: (800) 697-4014
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
              <Image
                src="/wh-sos-service-rep.webp"
                alt="Licensed HVAC technician performing heating services in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /heating-services-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-14">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">Heating Services We Offer</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Five services covering emergency furnace repair through full heat pump system installation.</p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {heatingServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.08 }} viewport={{ once: true }}>
                  <Link href={service.href} className="group block rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                        <ServiceIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-[#11110E] group-hover:text-[#EA5D19] transition-colors flex-1 leading-snug">{service.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{service.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Heating Season explainer */}
      <section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-5 sm:mb-8">Heating in the Inland Empire — What Homeowners Need to Know</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              The Inland Empire is not Minnesota. Heating season is short — typically 10 to 14 weeks — and outdoor temperatures rarely drop below the mid-20s even at the region&rsquo;s coldest high-desert edges. But that short season comes with a specific set of challenges.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              <strong>Gas furnaces do the majority of heating work here.</strong> Most single-family homes in Riverside County and San Bernardino County use central forced-air gas furnaces, and those systems often go 10 or 11 months without running. A furnace that sat idle all summer is statistically more likely to fail on the first cold night of November than a system that&rsquo;s been inspected and serviced in the fall. Scheduling a furnace tune-up in October or early November is one of the most effective things you can do to avoid a cold-night emergency.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              <strong>Carbon monoxide safety is the one heating concern that&rsquo;s not optional.</strong> A cracked heat exchanger — a common issue in furnaces over 10 years old — can leak CO into living spaces. CO is odorless and colorless, and exposure symptoms (headache, dizziness, nausea) are often mistaken for flu. Our annual furnace maintenance includes a heat exchanger inspection and carbon monoxide check at every visit.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <strong>Heat pumps are changing the calculation.</strong> For homeowners replacing aging furnace-and-AC setups, a modern heat pump system now makes strong economic sense in the Inland Empire. If you already have a{" "}
              <Link href="/heat-pump-water-heaters" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">heat pump water heater</Link>{" "}
              in your home, you already know how the technology performs — a{" "}
              <Link href="/heat-pump-systems" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">heat pump HVAC system</Link>{" "}
              uses the same refrigerant-based cycle, just on a larger scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#11110E] py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-14">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white mb-3 lg:mb-6">Why Inland Empire Homeowners Choose Us for Heating Services</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">SOS Plumbing and Air is a licensed Inland Empire HVAC contractor (CA LIC# 1140776) serving Riverside County and San Bernardino County with full-service furnace and heating system repair, installation, and maintenance.</p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.07 }} viewport={{ once: true }} className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-6 hover:bg-white/10 transition-all">
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

      {/* Service Area */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-5">Heating Service Area — Inland Empire, CA</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">We provide heating services throughout Riverside County and San Bernardino County.</p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-white p-5 sm:p-8 shadow-md border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-4">Riverside County</h3>
              <div className="flex flex-wrap gap-2">
                {riversideCountyCities.map((city) => (
                  <Link key={city.href} href={city.href} className="inline-flex items-center rounded-full bg-orange-50 border border-[#EA5D19]/30 px-3 py-1 text-xs sm:text-sm font-medium text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-colors min-h-[32px]">{city.name}</Link>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl bg-white p-5 sm:p-8 shadow-md border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-4">San Bernardino County</h3>
              <div className="flex flex-wrap gap-2">
                {sbCountyCities.map((city) => (
                  <Link key={city.href} href={city.href} className="inline-flex items-center rounded-full bg-orange-50 border border-[#EA5D19]/30 px-3 py-1 text-xs sm:text-sm font-medium text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-colors min-h-[32px]">{city.name}</Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustedBrands className="bg-white" />

      <FAQ
        category="heatingServices"
        title="Frequently Asked Questions About Heating Services"
        subtitle="Common questions about heating services in the Inland Empire"
      />
    </>
  );
}
