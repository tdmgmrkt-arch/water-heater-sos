"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wind, Droplets, Minus, Filter, Phone, CheckCircle } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const iaqServices = [
  { icon: Wind, title: "Air Duct Cleaning", href: "/air-duct-cleaning", description: "Professional air duct cleaning removes accumulated dust, debris, and allergens from your home's duct system. Recommended every 3–5 years, or after construction, renovation, or a major smoke event." },
  { icon: Filter, title: "Air Filtration Systems", href: "/air-filtration", description: "Whole-home HEPA and media air filtration systems installed in your existing HVAC system. Captures dust, pollen, smoke particulates, and allergens — covers every room, not just one." },
  { icon: Droplets, title: "Whole-Home Humidifier", href: "/whole-home-humidifier", description: "Bypass, fan-powered, and steam humidifiers installed directly into your HVAC system. Addresses the dry winter air that causes cracked wood floors, static electricity, and dry sinuses in IE homes." },
  { icon: Minus, title: "Whole-Home Dehumidifier", href: "/whole-home-dehumidifier", description: "Whole-home dehumidification for the Inland Empire's summer monsoon season. Controls mold risk, musty odors, and the sticky late-summer humidity that portable units can't handle." },
];

const whyChooseUsPoints = [
  { title: "Licensed and insured", description: "C-20 license under the California State License Board (CSLB). We assess your home's specific IAQ needs and recommend the right solution — not the most expensive one." },
  { title: "IE-specific expertise", description: "We understand Inland Empire air quality conditions — wildfire smoke season, Santa Ana wind events, summer monsoon humidity, and desert dry winters. Our recommendations reflect the actual conditions your home faces." },
  { title: "Full-system approach", description: "Duct cleaning, filtration, purification, and humidity control work together. We assess the complete picture rather than selling isolated products." },
  { title: "All major IAQ brands", description: "Aprilaire, Carrier, Honeywell, Lennox, and Reme Halo. We match equipment to your specific duct configuration and HVAC system." },
  { title: "EPA-cited data", description: "We reference current EPA guidance on indoor air quality in all assessments — including PM2.5 thresholds and recommended filtration ratings for wildfire smoke events." },
  { title: "Upfront pricing", description: "No surprises. You see the price before we start any work." },
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

export function IndoorAirQualityContent() {
  return (
    <>
      <SetFooterCTA
        title="Improve the Air in Your Inland Empire Home"
        description="Licensed IAQ contractor serving Riverside County and San Bernardino County. Duct cleaning, filtration, purifiers, and humidity control for the conditions IE homes actually face."
        quoteLink="/quote?category=HVAC&service=Indoor%20Air%20Quality"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Indoor Air Quality" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Inland Empire Indoor Air Quality Specialists
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Indoor Air Quality Services in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Cleaner air throughout your home — duct cleaning, filtration, purification, and humidity control for Riverside County and San Bernardino County.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Indoor air quality in the Inland Empire is not an abstract concern. Wildfire smoke, Santa Ana wind events, desert dust, and summer smog push outdoor pollutants into homes throughout Riverside County and San Bernardino County. When combined with inadequate filtration or dirty ductwork, the air inside your home can be worse than outside. We provide a full range of indoor air quality services designed specifically for the conditions Inland Empire homeowners face.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                <strong>The EPA estimates that indoor air is 2 to 5 times more polluted than outdoor air in the average American home — and that figure can spike significantly during wildfire events, Santa Ana wind days, and high-pollen spring weeks in the IE.</strong>{" "}
                Our licensed technicians assess your home&rsquo;s air quality needs and recommend the right combination of filtration, purification, and humidity control — not just the most expensive option.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote?category=HVAC&service=Indoor%20Air%20Quality" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[44px]">
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
                src="/service-page-images/indoor-air-quality.webp"
                alt="Licensed HVAC technician performing indoor air quality services in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /indoor-air-quality-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-14">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">Indoor Air Quality Services We Offer</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Four services that address the complete air quality picture — from ductwork to whole-home filtration to humidity balance.</p>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mt-4" />
          </motion.div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:gap-8">
            {iaqServices.map((service, index) => {
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

      {/* IAQ explainer */}
      <section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-5 sm:mb-8">Indoor Air Quality in the Inland Empire — Wildfires, Wind, and What&rsquo;s in Your Air</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-2">Wildfire Smoke</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Wildfire smoke is the most acute air quality threat Inland Empire homeowners face. During active fire events, PM2.5 particulate matter can spike to hazardous levels even when the nearest fire is 50 or 100 miles away. Standard HVAC filters (MERV 8 and below) do not capture PM2.5 effectively. A whole-home{" "}
                  <Link href="/air-filtration" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">air filtration system</Link>{" "}
                  rated MERV 13 or higher is the most effective way to protect your household during smoke events.</p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-2">Santa Ana Wind Events</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Santa Ana winds drive fine dust, desert particulates, and combustion byproducts from distant fires directly into the Inland Empire several times each fall and winter. A whole-home filtration system provides continuous protection that responds to air quality events without manual intervention.</p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-2">Summer Humidity and Desert Dry</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">From late November through March, indoor relative humidity in many homes drops below 30% during heating season. A{" "}
                  <Link href="/whole-home-humidifier" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">whole-home humidifier</Link>{" "}
                  maintains the 35–50% RH range recommended for comfort and health. From July through September, Pacific moisture pushes late-summer humidity above 60% in poorly ventilated homes. A{" "}
                  <Link href="/whole-home-dehumidifier" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">whole-home dehumidifier</Link>{" "}
                  handles this without portable units running in every room.</p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#11110E] mb-2">Air Duct Condition</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Every cubic foot of air in your home passes through your duct system multiple times per day. Ducts that haven&rsquo;t been cleaned in 5+ years, or that were contaminated during a major smoke event or renovation, continuously recirculate trapped particles throughout the house regardless of what filtration is installed downstream. <Link href="/air-duct-cleaning" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">Duct cleaning</Link> is the foundation of a whole-home air quality plan — not a replacement for filtration, but the necessary first step.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#11110E] py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-14">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white mb-3 lg:mb-6">Why Inland Empire Homeowners Choose Us for Indoor Air Quality Services</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">SOS Plumbing and Air is a licensed Inland Empire HVAC contractor (CA LIC# 1140776) serving Riverside County and San Bernardino County with the full range of indoor air quality assessment, installation, and maintenance services.</p>
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
          <div className="mt-8 text-center">
            <p className="text-sm sm:text-base text-gray-400">
              Clean air and clean water go together. Ask about our{" "}
              <Link href="/water-filtration" className="text-[#EA5D19] underline underline-offset-2 hover:text-orange-300">whole-home water filtration</Link>{" "}
              options if you&rsquo;re doing a complete home comfort upgrade.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-5">Indoor Air Quality Service Area — Inland Empire, CA</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">We provide indoor air quality services throughout Riverside County and San Bernardino County.</p>
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
        category="indoorAirQuality"
        title="Frequently Asked Questions About Indoor Air Quality"
        subtitle="Common questions about indoor air quality in the Inland Empire"
      />
    </>
  );
}
