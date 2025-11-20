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
    title: "Water Heater Repair and Installation",
    description: "Got a water heater that's not heating or making weird noises? We repair or replace gas, electric, and tankless water heaters.",
    link: "/gas-water-heaters",
  },
  {
    title: "Faucet Repairs",
    description: "A leaky faucet can drive you nuts and waste water. We fix or replace them to stop drips and save you money.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Drain Cleaning",
    description: "Clogged sinks or showers from hair or grease? We clear out blockages to keep drains running smoothly.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Fixes",
    description: "A toilet that keeps running or won't flush right is a hassle. We repair valves and parts to get it back to normal.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Pipe Repairs",
    description: "Leaky or burst pipes can cause big damage. We fix or replace them to protect your home.",
    link: "/plumbing",
  },
  {
    title: "Low Water Pressure Help",
    description: "Weak water flow can make showers and dishwashing tough.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Services",
    description: "A backed‑up sewer is a messy nightmare. We clear or repair lines to keep things flowing.",
    link: "/sewer-camera-inspection",
  },
  {
    title: "Fixture Installations",
    description: "Want a new sink, toilet, or showerhead? We install top‑quality fixtures to upgrade your home.",
    link: "/plumbing",
  },
  {
    title: "Leak Detection Services",
    description: "Got a slab leak or a leak in the walls? Our expert plumbers will find it with our advanced leak detection equipment.",
    link: "/leak-detection-services",
  },
];

const commonProblems = [
  {
    title: "Pilot Light",
    description: "This is the small flame responsible for igniting the gas burner in your water heater. If it doesn't stay lit, possible causes include a malfunctioning or dirty thermocouple, a blocked orifice, or an issue with the gas delivery.",
  },
  {
    title: "Temperature Control",
    description: "The thermostat manages the water's heat; if it fails, you could encounter water that's only tepid or even cold. A professional can either recalibrate it or replace the thermostat to maintain the correct heating level.",
  },
  {
    title: "Sediment Accumulation",
    description: "Sediment gradually builds up inside the tank, which can impair efficiency and force the heater to overwork. Regularly flushing the tank, ideally annually, can mitigate this problem and extend the life of your water heater.",
  },
  {
    title: "Corrosion and Rust",
    description: "Rusting is a common issue for gas water heaters when the sacrificial anode rod wears out. This rod is designed to corrode instead of the tank, but once it's gone, the tank itself can begin to corrode, leading to leaks and the eventual need for a new unit.",
  },
  {
    title: "Age of the Appliance",
    description: "On average, a gas water heater lasts between 10 to 12 years. As it nears or exceeds this age, you should start thinking about a replacement to benefit from better performance and energy savings.",
  },
  {
    title: "Gas Leak",
    description: "Detecting a gas smell near your heater is a critical alert. It might stem from a defective gas valve, a compromised burner, or a problem within the gas line. If this occurs, turn off the gas immediately and get in touch with us for emergency assistance.",
  },
];

const faqs = [
  {
    question: "What brand of gas water heaters do you repair?",
    answer: "Our expert water heater technicians can work on an extensive variety of brands, ensuring that no matter what model you have, we likely have the expertise to service it. Commonly, we handle repairs for Bradford White, A. O. Smith, Rheem, Kenmore, Whirlpool, and now proudly, we include Noritz water heaters in our service list. Our technicians are trained to diagnose and fix issues across these brands, providing reliable repair and installation services for both traditional and tankless units. So, when you're facing water heater troubles, remember, our team is equipped to restore functionality to virtually any brand, keeping your home's hot water supply uninterrupted.",
  },
  {
    question: "Can you fix a gas water heater that is leaking?",
    answer: "The source of a leak in your gas water heater determines the repair strategy. Should the leak stem from the tank itself, this generally points to rust within the tank, suggesting the need for a whole new unit. However, if the leak is from an external part such as a water connection or a valve, our experts are often able to address the problem by replacing just the faulty part.",
  },
  {
    question: "How long should a gas water heater last?",
    answer: "On average, a gas water heater can serve your home for 7 to 15 years, though this duration varies based on multiple factors. The quality of water in your area is a pivotal element; regions with hard water or high mineral content can accelerate corrosion and rust within the heater. However, with regular maintenance and attention to water quality, such as installing water softeners or regular tank flushes, you can substantially extend the service life of your water heater.",
  },
  {
    question: "Should I switch to a tankless water heater?",
    answer: "Transitioning to a tankless water heater can be a game‑changer for your home's energy efficiency and comfort. Tankless units provide hot water on demand, eliminating the need for a storage tank, which not only saves space but also reduces energy waste since you're not constantly heating a large volume of water that might not be used. This means you enjoy the luxury of endless hot water with potentially up to 30‑40% savings on your utility bills. Although the initial cost of installation can be higher, the long‑term benefits include lower operating costs, a longer lifespan, and reduced risk of leaks from a tank. Furthermore, modern tankless systems can be more environmentally friendly, often producing fewer greenhouse emissions. Give us a call, and let's explore how we can upgrade your home with this efficient, space‑saving technology tailored to your specific requirements.",
  },
  {
    question: "What other plumbing services do you perform?",
    answer: "Just about everything plumbing‑related we can handle, so don't let our name fool you. We repair water leaks, sinks, drains, garbage disposals, showers, faucets, and more!",
  },
];

export function CalimesaContent() {
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
                Calimesa Plumbing Experts
              </span>

              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Calimesa Plumbers & Water Heater Repair
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Your Trusted Plumbing Experts in Calimesa, CA
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Hey there, Calimesa homeowners! At Water Heater SOS, we're all about keeping your home's plumbing in tip‑top shape. While we're pros at fixing and installing water heaters, we've got you covered for all kinds of plumbing repairs and installations too. From dripping faucets to <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">clogged drains</Link>, we tackle the most common plumbing problems with skill and care.
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
                alt="Calimesa plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* FULL-WIDTH PARAGRAPH BLOCK */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Water heaters are super important, and we're experts at keeping them running smoothly. If your <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas</Link>, electric, or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater</Link> is leaking or not giving you hot water, we'll figure out what's wrong and fix it fast. We also install new water heaters, including energy‑efficient ones that can cut down your utility bills. But that's not all we do! Our team handles tons of other plumbing jobs in Calimesa to keep your home working like it should.
            </p>

            <p>
              Calimesa's hard water can be rough on your plumbing. All those minerals can clog pipes, mess up faucets, and make your water heater wear out faster. We know how to handle it! We can install <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water softeners</Link> to reduce buildup, which helps your water heater and pipes last longer. This means fewer repairs and more savings for you. Plus, our energy‑efficient water heater options can lower your bills while keeping your showers nice and hot.
            </p>
          </div>
        </div>
      </section>

      {/* Common Plumbing Services Section */}
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
              Plumbing Services in Calimesa
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Here's a look at some of the top services we offer
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

      {/* Common Gas Water Heater Problems Section */}
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
              Common Problems on Gas Water Heaters
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              When your water heater, whether traditional or tankless, begins to show signs of trouble, immediate action is necessary to safeguard your household's comfort and the integrity of your hot water supply. Regular maintenance, including periodic flushes and temperature checks, plays a pivotal role in preventing common problems and can significantly extend the longevity of your water heater.
            </p>
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
