"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, CheckCircle2, DollarSign, Award, TrendingDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  { name: "Hemet", slug: "/hemel" },
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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-16 lg:py-20">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-[#EA5D19]" />
              <span className="text-sm font-semibold text-white">Serving the Inland Empire</span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
              Service Area
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We provide water heater repair and installation services for the Inland Empire, California. While we don&apos;t cover every city, we do cover most of them.
            </p>

            <div className="mt-8">
              <a
                href="tel:8006974014"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                (800) 697-4014
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Map & Cities Section */}
<section className="py-16 lg:py-24 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-4">
        Service Area Map
      </h2>
      <p className="text-lg text-gray-600 max-w-7xl mx-auto mb-4">
        Below, you will find a list of some of the main cities we service. Click on any city to learn more about our services in your area.
      </p>
      <p className="text-sm text-gray-600">
        If your city isn&apos;t on the list, please{" "}
        <a href="/contact" className="text-[#EA5D19] hover:underline font-semibold">
          reach out to us
        </a>{" "}
        and see if your home is within our service area.
      </p>
    </motion.div>

    {/* FIXED: GRID LAYOUT (NO MORE FLOAT / NO MORE COLUMNS) */}
    <div className="grid lg:grid-cols-1 gap-12 items-start">
      
      {/* City List */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cities.map((city, index) => (
          <motion.div
            key={city.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.02 }}
          >
            
            <Link
              href={city.slug}
              className="group block p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-[#EA5D19] transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-[#11110E] group-hover:text-[#EA5D19] transition-colors truncate">
                    {city.name}
                  </h3>
                </div>
                <CheckCircle2 className="h-4 w-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Why Choose Water Heater SOS?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-12 rounded-2xl"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                At Water Heater SOS we stand out in the industry not just for our quality service, but also for our incredibly competitive pricing. When you&apos;re looking at getting a new water heater or need repairs, cost can be a major concern. That&apos;s where we shine. We&apos;ve structured our plumbing pricing to be accessible to a broad range of customers, ensuring you don&apos;t have to break the bank to get reliable hot water at home.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Moreover, we sweeten the deal with various water heater discounts. Whether you&apos;re a first-time customer, a senior citizen, or perhaps looking to bundle services, we offer reductions that make our already competitive prices even more attractive. These discounts are not just minor cuts; they&apos;re significant enough to make a noticeable difference in your wallet. By choosing our plumbing company, you&apos;re not only investing in quality service but also ensuring you get some of the best deals around, making it a smart choice for anyone looking to manage expenses without compromising on service quality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] p-12 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don&apos;t see your city listed? Contact us today to confirm service availability in your area!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8006974014"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#EA5D19] shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                (800) 697-4014
              </a>
              <a
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#EA5D19] transition-all hover:scale-105"
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
