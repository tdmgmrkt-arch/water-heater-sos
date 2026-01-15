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

const plumbingServices = [
  {
    title: "Water Heater Repairs and Installations",
    description: "Got a water heater that's not heating or making weird noises? We repair or replace gas, electric, and tankless water heaters.",
    link: "/gas-water-heaters",
  },
  {
    title: "Faucet Fixes",
    description: "A leaky faucet can drive you nuts and waste water. We fix or replace them to stop drips and save you money.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Drain Cleaning",
    description: "Clogged sinks or showers from hair or grease? We clear out blockages to keep drains running smoothly.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Repairs",
    description: "A toilet that keeps running or won't flush right is a hassle. We repair valves and parts to get it back to normal.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Pipe Repairs",
    description: "Leaky or burst pipes can cause big damage. We fix or replace them to protect your home.",
    link: "/plumbing",
  },
  {
    title: "Low Water Pressure Repairs",
    description: "Weak water flow can make showers and dishwashing tough. We find the cause and fix it.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Fixes",
    description: "A backed‑up sewer is a messy nightmare. We clear or repair lines to keep things flowing.",
    link: "/sewer-camera-inspection",
  },
  {
    title: "Plumbing Fixture Installations",
    description: "Want a new sink, toilet, or showerhead? We install top‑quality fixtures to upgrade your home.",
    link: "/plumbing",
  },
  {
    title: "Leak Detection Services",
    description: "Got a slab leak or a leak in the walls? Our expert plumbers will find it with our advanced leak detection equipment.",
    link: "/leak-detection-services",
  },
  {
    title: "Whole House Repipes",
    description: "Old pipes causing constant problems? We can replace all the pipes in your home for long-term reliability.",
    link: "/whole-house-repipe",
  },
];

const commonProblems = [
  {
    title: "Lack of Hot Water",
    description: "One of the most common issues is a sudden lack of hot water. This could be due to a faulty heating element, a malfunctioning thermostat, or a pilot light that has gone out.",
  },
  {
    title: "Water Leaks",
    description: "Leaks can occur for a variety of reasons, such as a loose connection, a crack in the tank, or a faulty valve. If not addressed, leaks not only waste water but can also lead to more serious issues. It's essential to seek professional assistance to address these issues effectively.",
  },
  {
    title: "Unusual Noises",
    description: "Gas water heaters can make various noises, including popping, rumbling, or hissing sounds. These noises can indicate issues like sediment buildup in the tank or a failing heating element.",
  },
  {
    title: "Inconsistent Water Temperature",
    description: "If your water heater produces water that is too hot or not hot enough, it could be due to a faulty thermostat or a problem with the gas supply.",
  },
  {
    title: "Rusty Water",
    description: "If the water from your hot water taps is rusty or discolored, it could be a sign of corrosion in the tank. This can be a severe issue, leading to leaks and even tank failure.",
  },
  {
    title: "Pilot Light Issues",
    description: "The pilot light in your gas water heater should be a steady blue flame. It could indicate a problem with the gas supply or the burner if it's yellow or orange.",
  },
];

const faqs = [
  {
    question: "What brand of water heaters do you repair?",
    answer: "Our team of skilled technicians specializes in repairing a variety of water heater brands, ensuring that your system is back up and running in no time. We have extensive experience working with some of the most popular and reliable brands in the industry, including Bradford White, A. O. Smith, Rheem, Kenmore, and Whirlpool. Our expertise allows us to quickly diagnose and fix issues, no matter the make or model of your water heater.",
  },
  {
    question: "Can you fix a water heater that is leaking?",
    answer: "The source of a leak in your gas water heater can significantly impact the necessary course of action. If the leak originates from the tank itself, it's likely due to internal corrosion, which, unfortunately, means the tank will need to be replaced. On the other hand, if the leak is coming from a water line or valve, we can typically repair or replace the part causing the issue. This targeted approach not only saves time but also helps reduce repair costs. Our experienced technicians will carefully inspect your water heater to determine the source of the leak and provide you with the most effective solution.",
  },
  {
    question: "How long should a residential water heater last?",
    answer: "The lifespan of a gas water heater can vary significantly, generally ranging from 7 to 15 years. Several factors can influence this timeline, including the quality of your water supply and the level of maintenance your water heater receives. Poor water quality can accelerate corrosion and rust, significantly shortening your water heater's lifespan. Conversely, regular maintenance can extend its life and ensure optimal performance. Our team can assist with routine maintenance, including flushing out sediment and checking for signs of corrosion, to help keep your water heater in top condition for as long as possible.",
  },
  {
    question: "Should I switch to a tankless water heater?",
    answer: "Upgrading from a traditional tank water heater to a more efficient tankless model can be a wise investment that can lead to significant savings on your utility bills over time. While the initial cost of installing a tankless water heater may be higher than a traditional tank model, the long‑term benefits of energy efficiency and cost savings can make it a worthwhile investment. Our experienced plumbing technicians can assess your situation and provide customized solutions tailored to your home's needs. We will conduct a thorough evaluation of your hot water usage, the condition of your current water heater, and your budget to determine the best course of action. Whether you need a new tankless water heater installed or repairs to your existing system, we have the expertise to handle it all.",
  },
  {
    question: "Why is the city of Beaumont stopping gas water heater sales?",
    answer: "In an effort to improve air quality and reduce greenhouse gas emissions, California is taking steps to phase out gas‑powered appliances in homes. As part of this initiative, the state will ban the purchase of new gas water heaters starting in 2030. This means that homeowners will need to consider alternative options, such as electric or heat pump water heaters when it comes time to replace their existing gas‑powered units. Our team of experienced technicians can help you navigate this transition and determine the best solution for your home. We can provide expert advice and professional installation services if you're interested in a traditional electric water heater or a more efficient heat pump water heater.",
  },
  {
    question: "What other type of plumbing stuff do you do?",
    answer: "At Water Heater SOS we are not just about water heaters. We are your go‑to for all plumbing fixes! We repair dripping faucets, clogged drains, leaky pipes, leak detection services, toilets, showers, garbage disposals, and more. Plus, we're pros at fixing or installing gas, electric, and tankless water heaters to make sure you've got hot water.",
  },
];

export function BeaumontContent() {
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
                Beaumont Plumbing Experts
              </span>

              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Beaumont Plumbers & Water Heater Repair
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Need a plumbing company in Beaumont, CA?
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Nobody likes a cold shower or a sink full of dirty dishes because the hot water's gone out. At Water Heater SOS, we know how annoying it is when your <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater</Link> leaks or won't stay lit, and we're here to fix it fast! But we don't stop at water heaters. We are your go‑to team for all kinds of plumbing repairs and installations. From <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">clogged drains</Link> to <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">leaky faucets</Link>, we handle every plumbing issue with care to keep your home running smoothly.
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
                alt="Beaumont plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* FULL-WIDTH PARAGRAPH BLOCK */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Water heaters are super important for hot showers, clean clothes, and sparkling dishes, but they can break down and cause big headaches. Whether your <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas</Link>, electric, or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater</Link> is leaking or not heating up, our skilled technicians in Beaumont can repair or replace it to get your hot water back.
            </p>

            <p>
              Sometimes, you already know that your water heater is old and not worth fixing. In those cases, it is more cost‑effective to get a new water heater installed than to waste money on costly repairs. Our experienced team of Beaumont plumbers can install your new water heater and provide code upgrades if needed. Whether you need a tank or a tankless water heater, our installation team has you covered.
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
              Our Beaumont Plumbing Services
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Here's what we can fix or install for you
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

      {/* Common Water Heater Problems Section */}
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
              Common Water Heater Problems
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {commonProblems.map((problem, index) => (
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
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {problem.description}
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
