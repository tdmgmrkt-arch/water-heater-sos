"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";

const plumbingServices = [
  {
    title: "Leaky Faucets",
    description: "A dripping faucet wastes water and can raise your bill. We tighten or replace worn‑out parts to stop the leak for good.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Clogged Drains",
    description: "Hair, grease, or soap can block sinks or showers, causing slow drainage. We clear clogs with safe tools to get water flowing again.",
    link: "/drain-cleaning",
  },
  {
    title: "Running Toilets",
    description: "A toilet that won't stop running wastes gallons of water. We fix faulty valves or seals to make it work properly.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Leaking Pipes",
    description: "Cracked or loose pipes can cause water damage to your home. We repair or replace them to prevent costly leaks.",
    link: "/plumbing",
  },
  {
    title: "Water Heater Issues",
    description: "A water heater that leaks or doesn't heat leaves you with cold showers. We repair or replace gas, electric, or tankless models to restore hot water.",
    link: "/gas-water-heaters",
  },
  {
    title: "Low Water Pressure",
    description: "Hard water buildup or pipe issues can weaken water flow. We find the cause and fix it to improve pressure.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Backups",
    description: "A blocked sewer line can cause smelly backups in your home. We clear or repair the line to keep your plumbing system running smoothly.",
    link: "/sewer-camera-inspection",
  },
];

const whyChooseUs = [
  {
    title: "Upfront Pricing",
    description: "Our company offers affordable, upfront pricing on high‑quality water heater repairs and replacements. Our office is located in Redlands, CA, and our technicians can be quickly dispatched to you.",
  },
  {
    title: "Fully Stocked Vans",
    description: "We value your time at our company. In most cases, our vans are stocked with the parts needed to replace or repair most water heaters, ensuring that our technicians can get to work without delay. You won't have to worry about our technicians disappearing to the supply house for hours. Our vans are stocked and ready to get the job done efficiently.",
  },
  {
    title: "Excellent Warranty",
    description: "We provide an excellent warranty package. When we install a new water heater, we include a three‑year warranty covering both parts and labor. Additionally, the manufacturer offers a six‑year warranty on the water heater itself.",
  },
  {
    title: "Manufactured in the United States",
    description: "We know the residents of Redlands are proud of their country and prefer made‑in‑the‑USA products. We exclusively install Bradford White gas and electric water heaters, all of which are manufactured in the United States. These differ from the low‑cost models typically found in large home improvement stores. Bradford White water heaters are built with high‑quality components designed to have a longer lifespan, providing significant savings over time.",
  },
  {
    title: "Certified Technicians",
    description: "Our team consists of skilled technicians certified by the major water heater manufacturers. With a primary focus on water heater repair and installation, we have honed our expertise in this area. Our efficiency, proficiency, and certification allow us to work proficiently with most water heater brands.",
  },
];

export function RedlandsContent() {
  return (
    <>
      {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* GRID: Left Content + Right Image */}
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
          Redlands Plumbing Experts
        </span>

        <h1 className="text-3xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
          Redlands Plumbing Services & Water Heater Repair
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Plumbing issues? We've got you covered!
        </p>

        {/* Keep ONLY this intro paragraph here */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Plumbing problems can be a real pain, but our experienced team in Redlands, CA, is here to fix any issue fast. Whether it's a
          <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold"> leaky faucet</Link>,
          <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold"> clogged drain</Link>,
          broken pipe, or a
          <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold"> water heater</Link>
          that's not working, we repair or replace all kinds of plumbing problems.
        </p>

        <Link
          href="/quote"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <Phone className="h-5 w-5" />
          Schedule an Appointment Today!
        </Link>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/wh-sos-service-rep.webp"
          alt="Redlands plumbing services and water heater repair"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>

    {/* ⭐ FULL-WIDTH PARAGRAPH BLOCK */}
    <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">

      <p>
        We handle a wide range of plumbing services. If your water heater is leaking or not heating, we can repair or replace
        <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold"> gas</Link>,
        electric, or
        <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold"> tankless models</Link>.
        We also fix dripping faucets, clear stubborn drains, repair toilets, and tackle low water pressure. For bigger jobs, like
        <Link href="/sewer-camera-inspection" className="text-[#EA5D19] hover:underline font-semibold"> sewer line repairs </Link>
        or installing new fixtures, we've got you covered.
      </p>

      <p>
        Redlands's hard water can be tough on your plumbing. The minerals in the water can build up in pipes and water heaters, causing clogs,
        reduced water flow, and faster wear and tear. This can lead to costly repairs down the road. Our team knows how to handle these issues.
        We can install
        <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold"> water softeners </Link>
        or other solutions to improve water quality, protect your plumbing, and make your water heater last longer.
      </p>

    </div>

  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6">
              Why call Water Heater SOS?
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="w-full rounded-xl bg-white p-4 shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EA5D19] flex items-center justify-center shadow">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#11110E] flex-1 leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-700 leading-snug text-[15px]">
                {item.description}
              </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Common Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6">
              Most Common Redlands Plumbing Services
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              When you call us, you get a reliable, friendly team that works efficiently. We explain the problem in a way that's easy to understand, clean up after the job, and offer tips to prevent future issues. Whether it's a small leak or a major sewer line repair, we treat every job with care.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {plumbingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link
                  href={service.link}
                  className="flex flex-col h-full rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug group-hover:text-[#EA5D19] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Schedule an Appointment Today!
            </h2>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Get Free Estimate
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="redlands" />
    </>
  );
}
