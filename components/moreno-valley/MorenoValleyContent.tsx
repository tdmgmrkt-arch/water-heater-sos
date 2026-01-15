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

const commonProblems = [
  {
    title: "Pilot Light",
    description: "If your pilot light, that little flame that starts up the gas burner, keeps going out, it might be due to a dirty or broken thermocouple, a blocked orifice, or some issue with the gas supply.",
  },
  {
    title: "Thermostat",
    description: "If your thermostat's on the fritz, you might end up with lukewarm or cold water instead of the hot shower you were hoping for. But don't sweat it! A plumber can swap out that thermostat or tweak the settings to get your water heater back on track, making sure you're getting the right temperature every time.",
  },
  {
    title: "Sediment Buildup",
    description: "Over time, dirt and stuff can pile up at the bottom of your water heater, making it work harder and less efficiently to heat up your water. If you flush out the water heater once a year, you can keep it running smoothly and extend its lifespan.",
  },
  {
    title: "Corrosion/Rust",
    description: "Water heaters can rust up like an old bike if the anode rod isn't doing its job. The anode rod is like a magnet for all the nasty corrosive stuff in the water, so it doesn't eat away at the tank. But if the rod's all used up, the tank can start to wear down and leak, and then you're stuck needing a whole new water heater.",
  },
  {
    title: "Old Age",
    description: "So, most water heaters kick the bucket after about 10 to 12 years. If yours is getting older, it might be time to consider getting a new one. A new water heater can give you better efficiency and peace of mind, knowing it won't conk out on you when you're in the middle of a shower. Another issue with old age is the gas pipe connections can start to cause gas leaks.",
  },
];

const plumbingServices = [
  {
    title: "Water Heater Repair & Replacement",
    description: "Our expert technicians in Moreno Valley are ready to repair a tankless water heater to get your hot water flowing again in no time.",
    link: "/gas-water-heaters",
  },
  {
    title: "Faucet Repairs",
    description: "If your faucet is dripping like crazy, we'll fix or replace it to save water and lower your bills.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Drain Cleaning",
    description: "Clogged drains in your sink, shower, or tub? Our drain cleaning gets rid of hair, grease, or gunk to keep water moving fast.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Repairs",
    description: "Got a toilet that won't flush or keeps running? We'll repair it so it works like new.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Leak Detection Services",
    description: "Leaky pipes can cause big messes, like water damage to your floors or walls, but we're pros at leak detection and fixing or replacing those pipes to protect your home.",
    link: "/leak-detection-services",
  },
  {
    title: "Whole House Repipes",
    description: "If your pipes are old and rusty, we can do a full repipe to upgrade your system.",
    link: "/whole-house-repipe",
  },
  {
    title: "Garbage Disposal Repairs",
    description: "Struggling with a jammed garbage disposal? We'll get it spinning again or install a new one.",
    link: "/garbage-disposal-repair-replacement",
  },
  {
    title: "Shower Installations",
    description: "Want to give your bathroom a fresh look? We install sleek new showers and toilets to make your space shine.",
    link: "/shower-repair-replacement",
  },
  {
    title: "Water Softeners",
    description: "Moreno Valley's hard water can clog pipes and wear out water heaters with mineral buildup, but we can install water softeners to fight it.",
    link: "/water-filtration",
  },
];

const faqs = [
  {
    question: "What brand of water heaters do you guys repair?",
    answer: "Our Moreno Valley plumbers are well‑versed in fixing water heaters from various brands. Bradford White, A. O. Smith, Rheem, Kenmore, and Whirlpool are some of the most common ones we work on.",
  },
  {
    question: "Can your plumbers fix a water heater that is leaking?",
    answer: "Well, it depends on where the leak is coming from and the age of the water heater. If the water heater is over seven years old, replace it because the lifespan is generally rated at 7‑15 years. If the water's leaking from the tank itself, it usually means the tank's rusted through from the inside, and you'll need a whole new water heater. But if the leak comes from a water line or valve, we can usually replace the leaking part.",
  },
  {
    question: "How long will a water heater last for?",
    answer: "The lifespan of a gas water heater usually falls between 7 to 15 years. But here's the kicker: a bunch of factors can affect how long it actually lasts, like the quality of your water and how well you take care of it. If your water's not great, it can speed up corrosion and rust on your water heater. On the flip side, keeping up with maintenance can help it stick around a bit longer.",
  },
  {
    question: "Would switching to a tankless water heater save me money?",
    answer: "Swapping out your old tank water heater for a shiny new tankless model could be a savvy move that'll save you some dough on your monthly utility bills. But, heads up, the initial cost of going tankless can be steeper. If you're curious about making the switch, give us a ring. We'll look at your setup and determine the best way to keep your hot water flowing and your wallet happy.",
  },
  {
    question: "Why is Moreno Valley stopping gas water heater sales?",
    answer: "It's not a City of Moreno Valley law; however, California's making a big move to ditch gas‑powered home appliances to give the air a break. Starting in 2030, you won't be able to buy a new gas water heater in the Golden State. When the time comes to replace your old one, you'll have to go electric or opt for a heat pump water heater instead.",
  },
  {
    question: "Can you fix other plumbing issues?",
    answer: "Yes, we do way more than just water heaters! We fix dripping sinks, clogged drains, leaky pipes, toilets, showers, garbage disposals, and other plumbing headaches.",
  },
];

export function MorenoValleyContent() {
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
                Moreno Valley Plumbing Experts
              </span>

              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Moreno Valley Plumbers & Water Heater Repair
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Moreno Valley, CA Plumbing Superstars!
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Water Heater SOS in Moreno Valley, CA, we pour our heart into every plumbing job, making sure everything's done right with skill and honesty. Our awesome team of pros treats every home like it's our own, working with care and clear pricing so you feel confident and stress‑free. We're not just <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater</Link> wizards—we fix all kinds of plumbing problems to keep your home running smoothly. As proud Moreno Valley locals, we're here to deliver top‑notch service you can count on, no matter the job!
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
                alt="Moreno Valley plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* FULL-WIDTH PARAGRAPH BLOCK */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Water heaters are lifesavers for hot showers and clean dishes, but when they leak or stop working, it's a total bummer. Our expert technicians in Moreno Valley are ready to repair a <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater</Link> to get your hot water flowing again in no time. But we're way more than just water heater heroes! We handle tons of plumbing services to keep your home in great shape. If your <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet</Link> is dripping like crazy, we'll fix or replace it to save water and lower your bills. Clogged drains in your sink, shower, or tub? Our <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning</Link> gets rid of hair, grease, or gunk to keep water moving fast. Got a <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet</Link> that won't flush or keeps running? We'll repair it so it works like new.
            </p>

            <p>
              Leaky pipes can cause big messes, like water damage to your floors or walls, but we're pros at <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link> and fixing or replacing those pipes to protect your home. If your pipes are old and rusty, we can do a full <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">repipe</Link> to upgrade your system. Struggling with a jammed <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposal</Link>? We'll get it spinning again or install a new one. Want to give your bathroom a fresh look? We install sleek new <Link href="/shower-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">showers</Link> and toilets to make your space shine. Moreno Valley's hard water can clog pipes and wear out water heaters with mineral buildup, but we can install <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water softeners</Link> to fight it, helping your plumbing last longer and saving you cash on repairs.
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
              Moreno Valley Plumbing Services
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Whether it's a broken water heater, a tricky leak, or a new shower installation, Water Heater SOS is here to make your plumbing perfect. We cover the whole Inland Empire region, including spots like Hemet, San Jacinto, Banning, Beaumont, Menifee, Perris, Murrieta, and Temecula.
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
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              One of the most frustrating things that can happen to a homeowner is to find out the water heater is leaking or won't stay lit. Having hot water is a necessity, as water heaters are a vital part of any home. Our plumbers can help!
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
