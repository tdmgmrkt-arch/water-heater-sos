"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const brands = [
  { name: "Rheem", image: "/Rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/Bradford-White-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
];

const typicalReasons = [
  {
    title: "Internal Rusting and Corrosion",
    description: "While most people know that external rust can indicate a failing water heater, internal rusting and corrosion can also be a significant issue. Over time, the glass lining inside the water heater can crack, allowing water to come into contact with the steel tank. This can lead to internal rusting and corrosion, weakening the tank and potentially causing leaks or a tank rupture.",
  },
  {
    title: "Thermostat Failure",
    description: "The thermostat in a water heater controls the temperature of the water. If it malfunctions, it can cause the water heater to overheat or not heat it enough. A thermostat failure can be caused by various issues, from a faulty temperature sensor to a wiring problem. This can lead to inconsistent or insufficient hot water or a dangerous overheating situation.",
  },
  {
    title: "Sediment Buildup",
    description: "Sediment buildup is a common issue in water heaters, but it's often overlooked until it causes a problem. Over time, minerals in the water can settle at the bottom of the tank, forming a layer of sediment. This sediment can act as an insulator, making the water heater less efficient and causing it to work harder to heat the water. In extreme cases, sediment buildup can cause the heating element to overheat and burn out.",
  },
];

const plumbingServices = [
  {
    title: "Water Heater Repair & Installation",
    description: "Our skilled technicians in Loma Linda are experts at repairing or replacing gas or tankless water heaters to get your hot water back fast.",
    link: "/gas-water-heaters",
  },
  {
    title: "Faucet Repairs",
    description: "We fix dripping faucets that jack up your water bill.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Drain Cleaning",
    description: "Clear out clogged sinks, tubs, or showers packed with hair or grease.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Repairs",
    description: "Repair toilets that keep running or won't flush.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Pipe Repairs",
    description: "Leaky pipes in your walls or a slab leak can cause serious damage. Our leak detection services will find the leak so we can repair or replace it to protect your home.",
    link: "/leak-detection-services",
  },
  {
    title: "Water Pressure Solutions",
    description: "If your water pressure is weak and slowing down your chores, we'll track down the issue and boost the flow.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Services",
    description: "For smelly sewer line backups, we'll clear or fix them to keep your plumbing system in great shape.",
    link: "/sewer-camera-inspection",
  },
  {
    title: "Fixture Installations",
    description: "Looking to upgrade your kitchen or bathroom? We install sleek new faucets, toilets, or showerheads to give your space a modern vibe.",
    link: "/plumbing",
  },
  {
    title: "Water Filtration Systems",
    description: "We install water softeners to fight those minerals, helping your plumbing last longer and saving you from costly fixes. We also set up water filtration systems for cleaner, better‑tasting water.",
    link: "/water-filtration",
  },
];

const faqs = [
  {
    question: "What are the most common brands of water heaters?",
    answer: "There are several brands known for producing reliable and efficient water heaters. Among the most common are Rheem, A. O. Smith, Bradford White, and Rinnai. These brands offer a variety of models, including tankless, hybrid, and traditional storage tank water heaters. Each brand has unique features and benefits, catering to different needs and preferences. For instance, Rheem is known for its high‑efficiency models, Bradford White is recognized for its durability, A. O. Smith offers a wide range of products from basic to high-end, ensuring a suitable option for most budgets, and Rinnai is popular for its tankless water heaters, which provide an endless hot water supply on demand.",
  },
  {
    question: "Why is my water heater making noise?",
    answer: "Water heaters can produce sounds like rumbling, popping, or whistling. These noises can be caused by sediment buildup at the bottom of the tank, resulting in a popping noise as the water bubbles through the sediment layer. If your water heater is making a loud banging or rumbling noise, it could be due to a water hammer, which occurs when water flow is suddenly stopped or started, causing a pressure surge. Regular maintenance, such as flushing the tank and checking the anode rod, can help prevent these issues.",
  },
  {
    question: "Can I install a water heater in a closet or a small space?",
    answer: "While installing a water heater in a closet or a small space is possible, it's essential to ensure the area meets the manufacturer's installation requirements and local building codes. Most water heaters require a certain amount of clearance around the unit for proper ventilation and to prevent fire risk. Additionally, the closet or space should be well‑ventilated to avoid the buildup of carbon monoxide or other harmful gases.",
  },
  {
    question: "What is an anode rod, and why is it important?",
    answer: "An anode rod is a long, thin rod made of a metal like magnesium or aluminum installed inside a water heater tank. Its purpose is to protect the tank from corrosion by attracting corrosive elements in the water. Over time, especially in Loma Linda, the anode rod can become corroded and must be replaced. Regular maintenance and replacement of the anode rod can help extend the life of your water heater.",
  },
  {
    question: "Can I use a tankless water heater in Loma Linda?",
    answer: "Tankless water heaters can be used in cold climates but may require additional equipment to ensure they operate efficiently. In very cold climates, the incoming water temperature can be so low that it affects the water heater's performance. In these situations, a recirculation pump or a water heater with a built‑in freeze protection system may be necessary. It's also essential to insulate the water heater to prevent freezing.",
  },
  {
    question: "Are you a full service plumbing company?",
    answer: "Yes! Water Heater SOS fixes all your plumbing problems! We handle leaky faucets, clogged drains, broken pipes, toilets, showers, garbage disposals, and more. Our team is also awesome at repairing and installing tankless water heaters to keep your hot water flowing.",
  },
];

export function LomaLindaContent() {
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
                Loma Linda Plumbing Experts
              </span>

              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Loma Linda Plumbers & Water Heater Repair
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Water Heater SOS: Loma Linda, CA's Plumbing Champions
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Water Heater SOS is your go‑to local plumbing crew in Loma Linda, CA, delivering awesome service to keep your home's plumbing running perfectly. We're known for fixing water heaters, but we tackle all sorts of plumbing issues too, from <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">leaky faucets</Link> to <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">clogged drains</Link>. Our friendly team is ready to handle any job, big or small, to make sure your home stays cozy and stress‑free.
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
                alt="Loma Linda plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* FULL-WIDTH PARAGRAPH BLOCK */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              When your <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater</Link> stops working, it can mess up everything and cold showers and dirty dishes are no fun! Our skilled technicians in Loma Linda are experts at repairing or replacing gas or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link> to get your hot water back fast. But we do way more than that! We fix dripping faucets that jack up your water bill, clear out clogged sinks, tubs, or showers packed with hair or grease, and repair <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilets</Link> that keep running or won't flush. If your water pressure is weak and slowing down your chores, we'll track down the issue and boost the flow. For smelly sewer line backups, we'll clear or fix them to keep your plumbing system in great shape.
            </p>

            <p>
              Leaky pipes in your walls or a slab leak can cause serious damage. Our <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection services</Link> will find the leak so we can repair or replace it to protect your home. Looking to upgrade your kitchen or bathroom? We install sleek new faucets, toilets, or <Link href="/shower-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">showerheads</Link> to give your space a modern vibe. Loma Linda's hard water can clog pipes and wear out water heaters with mineral buildup, but we've got it covered. We install <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water softeners</Link> to fight those minerals, helping your plumbing last longer and saving you from costly fixes. We also set up water filtration systems for cleaner, better‑tasting water.
            </p>
          </div>
        </div>
      </section>

      {/* Plumbing Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
              Plumbing Repairs You Need in Loma Linda
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We love being part of this community and treat every job like it's for our own home. With years of experience, we're known for quick, affordable service that gets it right the first time.
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

      {/* Typical Reasons Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
              Typical Reasons Your Water Heater Breaks Down
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Water heaters can experience breakdowns for various reasons, some less common than others. It's important to be aware of these less typical reasons why water heaters may fail, as they can lead to potential dangers.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {typicalReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full flex flex-col rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
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
              Water Heater Installation & Repair in Loma Linda, CA
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
              We pride ourselves on providing top‑notch water heater services at the best value. Whether your water heater requires a repair or a complete replacement, our team of experts is here to assist you. We also offer competitive pricing on electric, gas, and tankless water heater installations for those seeking high‑efficiency equipment to reduce their utility costs.
            </p>
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
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-7xl text-center relative z-20"
          >
            <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-8">
              Trusted Brands
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 items-center relative z-20 min-h-[120px]">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative h-20 w-28 mx-auto z-20">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} logo - trusted water heater brand`}
                      fill
                      sizes="100px"
                      className="object-contain z-20"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <h2 className="text-5xl font-bold text-[#11110E] sm:text-4xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-2xl bg-white px-6 shadow-md border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[#11110E] hover:text-[#EA5D19] py-6">
                      <span className="flex-shrink-0 mr-2 text-[#EA5D19] font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-grow text-collapse-fix">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
}
