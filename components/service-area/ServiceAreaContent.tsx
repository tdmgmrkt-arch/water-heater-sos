"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, CheckCircle2, DollarSign, Award, TrendingDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Data (Unchanged) ---
const cities = [
  { name: "Redlands", slug: "/redlands" },
  { name: "Yucaipa", slug: "/yucaipa" },
  { name: "Calimesa", slug: "/calimesa" },
  { name: "Beaumont", slug: "/beaumont" },
  { name: "Banning", slug: "/banning" },
  { name: "Highland", slug: "/highland" },
  { name: "Loma Linda", slug: "/loma-linda" },
  { name: "Moreno Valley", slug: "/moreno-valley" },
  { name: "Mentone", slug: "/mentone" },
  { name: "Claremont", slug: "/claremont" },
  { name: "Corona", slug: "/corona" },
  { name: "Lake Elsinore", slug: "/lake-elsinore" },
  { name: "Menifee", slug: "/menifee" },
  { name: "Murrieta", slug: "/murrieta" },
  { name: "Perris", slug: "/perris" },
  { name: "Temecula", slug: "/temecula" },
  { name: "Anaheim Hills", slug: "/anaheim-hills" },
  { name: "San Bernardino", slug: "/san-bernardino" },
  { name: "Riverside", slug: "/riverside" },
  { name: "Rialto", slug: "/rialto" },
  { name: "Colton", slug: "/colton" },
  { name: "Ontario", slug: "/ontario" },
  { name: "Rancho Cucamonga", slug: "/rancho-cucamonga" },
  { name: "Fontana", slug: "/fontana" },
  { name: "Upland", slug: "/upland" },
  { name: "Grand Terrace", slug: "/grand-terrace" },
  { name: "Eastvale", slug: "/eastvale" },
  { name: "Norco", slug: "/norco" },
  { name: "Chino", slug: "/chino" },
  { name: "Chino Hills", slug: "/chino-hills" },
  { name: "Hemet", slug: "/hemet" },
  { name: "San Jacinto", slug: "/san-jacinto" },
  { name: "Yorba Linda", slug: "/yorba-linda" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Industry-leading rates that don't break the bank",
  },
  {
    icon: TrendingDown,
    title: "Special Discounts",
    description: "First-time customers, seniors, and bundle savings",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "Expert technicians with proven track records",
  },
];

export function ServiceAreaContent() {
  return (
    <main className="min-h-screen bg-gray-50"> {/* Changed main background to light gray */}
      {/* -------------------- SECTION 1: HERO (HIGH-IMPACT GEOGRAPHIC FOCUS) -------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-12 sm:py-20 lg:py-28"> {/* Increased padding slightly */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#EA5D19]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#EA5D19]/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-[#EA5D19]" />
              <span className="text-xs sm:text-sm font-semibold text-white">California Licensed Plumbing Experts</span>
            </div>

            <h1 className="text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl mb-4 leading-tight">
              Local <span className="text-[#EA5D19]">Water Heater Service</span> Area
            </h1>

            <p className="text-sm sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
              We provide same-day water heater repair, installation, and tankless service for the entire Inland Empire, California. Check below for the full list of cities we cover.
            </p>

            <div className="mt-6 sm:mt-8">
              <a
                href="tel:8006974014"
                className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-sm sm:text-lg lg:text-xl font-extrabold text-white shadow-xl ring-2 sm:ring-4 ring-orange-200/50 hover:shadow-2xl transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                Call Now for Same-Day Service
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------- SECTION 2: SERVICE AREA MAP & CITY LIST (TWO-COLUMN GRID) -------------------- */}
      <section className="py-10 sm:py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-14"
          >
            <h2 className="text-2xl font-extrabold text-[#11110E] sm:text-4xl lg:text-5xl mb-2 sm:mb-3">
              Cities We Proudly Serve
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-7xl mx-auto">
              Our licensed technicians cover a wide radius across San Bernardino County and Riverside County.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: SERVICE MAP (Visual Anchor - Col Span 5) */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 relative h-196 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#EA5D19]/30"
            >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d219890.3485624005!2d-117.46355972087129!3d34.043980669711594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sinland%20empire!5e0!3m2!1sen!2sus!4v1763673846625!5m2!1sen!2sus"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

            {/* RIGHT COLUMN: CITY LIST (Detailed List - Col Span 7) */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-7"
            >
                <div className="text-left mb-4 sm:mb-6">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold mb-3 sm:mb-4">
                        If your city is listed, you qualify for our 24/7 same-day service guarantee.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                        *Don't see your city? Call us directly to confirm availability—we often service neighboring areas!
                    </p>
                </div>
                
                {/* Enhanced City Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                    {cities.map((city, index) => (
                        <motion.div
                            key={city.slug}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                        >
                            <Link
                                href={city.slug}
                                className="group block p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-[#EA5D19]"
                            >
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-[#EA5D19] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-semibold text-sm sm:text-base text-[#11110E] group-hover:text-[#EA5D19] transition-colors truncate">
                                        {city.name}
                                    </h3>
                                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------- SECTION 3: BENEFITS (TRUST & VALUE) -------------------- */}
      <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-14"
          >
            <h2 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
              Why Water Heater SOS is the Smart Choice
            </h2>
            <div className="h-1 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-3 mb-6 sm:mb-8 lg:mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:bg-white/15 transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] flex items-center justify-center mb-4 sm:mb-6">
                  <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 lg:p-8 xl:p-12 rounded-xl sm:rounded-2xl"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white mb-3 sm:mb-4">Trusted, Licensed, and Insured</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                At Water Heater SOS, we stand out in the industry not just for our quality service, but also for our commitment to transparent and competitive pricing. We ensure you receive reliable hot water without unexpected costs.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We also offer significant water heater discounts for first-time customers, seniors, and bundling services. By choosing our licensed plumbing company, you are investing in certified quality and ensuring you get some of the best deals around, making it the smart choice for managing expenses without compromising service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------- SECTION 4: FINAL CALL TO ACTION (COLOR POP) -------------------- */}
      <section className="py-10 sm:py-16 lg:py-20 xl:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] p-6 sm:p-8 lg:p-12 xl:p-16 rounded-2xl sm:rounded-3xl shadow-2xl"
          >
            <h2 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
              Check Availability & Get Your Quote Now!
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Ready for service? Click below to confirm if your home is in our service area and get your free, transparent estimate immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8006974014"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-white px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-sm sm:text-lg lg:text-xl font-extrabold text-[#EA5D19] shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                (800) 697-4014
              </a>
              <a
                href="/quote"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full border-2 border-white bg-transparent px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-sm sm:text-lg lg:text-xl font-extrabold text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}