"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, CheckCircle2, Camera, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DrainCleaningContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
                Are Your Drains Backing Up Into Your Home?
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Drain Cleaning </span>Services
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Nobody wants to deal with a backed up <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet</Link> or a clogged drain. With regular use, hair, soap, grease, and other debris can build up in your pipes, causing slow drainage or complete blockages. If left untreated, these clogs can make your sink, shower, toilet or bathtub nearly impossible to use. At Water Heater SOS, we offer expert drain cleaning services to keep your drains flowing freely and your home running smoothly.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/drain-cleaning.webp"
                  alt="Professional drain cleaning service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Many homeowners try store-bought drain cleaners to fix clogs, but these harsh chemicals can damage your pipes, harm the environment, and often fail to fully fix the problem. Our plumbers have the tools and expertise to tackle any drain issue, big or small, and get your plumbing back to normal. We've helped countless homeowners and businesses restore their drains to like-new condition.
            </p>
            <p>
              No two clogs are the same, and we have a range of solutions to handle any obstruction. For example, a kitchen sink clog is often caused by food debris stuck just below the drain opening. In these cases, our skilled technicians can simply remove the P-Trap under the sink, clear the blockage, and reassemble everything quickly.
            </p>
            <p>
              Sometimes, the problem lies deeper in the drain system. Tree roots, for instance, can grow into pipes and cause stubborn blockages. For these tougher clogs, we may use a plumber's snake or hydrojetting to push through or break up the obstruction. Over time, grease, soap, hair, and food debris can also build up on the inner walls of your drains, narrowing them and slowing the drainage. This can lead to slow-draining sinks or tubs and even unpleasant odors that lead to a bigger issue. These problems won't resolve on their own, but our professional drain cleaning services can restore your pipes to full function.
            </p>
            <p>
              And then there are those unexpected clogs—a piece of food, a child's toy, or other random objects that make their way down the drain. No matter the cause, our team has the skills and tools to remove the obstruction and get your drains working again.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Drain Services Include
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional solutions to keep your drains flowing freely
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Drain Cleaning",
                description: "Our team uses specialized tools to clear clogs and remove buildup from your pipes, ensuring water flows smoothly again. Whether it's hair, grease, or food debris, we'll restore your drains to full function quickly and efficiently.",
                icon: Wrench,
              },
              {
                title: "Drain Repair",
                description: "We fix cracked, corroded, or leaking drains to prevent water damage and avoid recurring issues. Our expert plumbers ensure repairs are done right, extending the life of your plumbing system.",
                icon: Wrench,
              },
              {
                title: "Sewer Camera Inspection",
                description: "Using state-of-the-art sewer cameras, we inspect deep within your pipes to identify hidden problems like blockages or damage. This precise technology allows us to diagnose issues accurately without invasive digging.",
                icon: Camera,
              },
              {
                title: "Sewer Repair",
                description: "We address sewer line issues, such as cracks, offsets, or root intrusions, to keep your drain system running smoothly. Our repairs prevent backups and ensure your sewer operates reliably.",
                icon: Wrench,
              },
              {
                title: "Sewer Replacement",
                description: "When sewer lines are too damaged to repair, we replace them with durable, modern materials for long-lasting performance. We offer pipe lining and trenchless sewer repairs to minimize disruption to your property and keep your cost down.",
                icon: Wrench,
              },
              {
                title: "Hydro Jetting",
                description: "We use high-pressure water to blast away stubborn clogs, grease, and debris, thoroughly cleaning your pipes. This method blasts away the blockage with minimal impact on your plumbing.",
                icon: Zap,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#EA5D19] p-3">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Get a Free Estimate Today!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert plumbers are ready to clear your drains. Call now for fast, reliable service!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+18006974014"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                (800) 697-4014
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Trusted Brands We Service
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
            {[
              { name: "Rheem", logo: "/rheem_logo-1.webp" },
              { name: "Bradford White", logo: "/bradford-white-logo-1.webp" },
              { name: "Rinnai", logo: "/rinnai-1.webp" },
              { name: "Navien", logo: "/navien-1.webp" },
              { name: "Hajoca", logo: "/hajoca-1.webp" },
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative h-20 w-32 grayscale hover:grayscale-0 transition-all duration-200"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about drain cleaning
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why do my drains keep getting clogged?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Drains often clog because everyday stuff like hair, soap scum, grease, or food bits sticks to the inside of your pipes and builds up over time. This gunk can narrow the pipes, slowing down the flow or blocking it completely. Sometimes, random things like a small toy or debris can get stuck, too. Getting your drains cleaned regularly can stop these problems before they turn into a big hassle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can I just use a store-bought drain cleaner?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Store-bought drain cleaners might seem like an easy fix, but their strong chemicals can eat away at your pipes and aren't great for the environment. Plus, they usually don't clear tough clogs completely, leaving some gunk behind. Our professional drain cleaning services use safe tools and methods to fully clear blockages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How can I tell if my drain needs a professional plumber?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                If your sink or tub drains slowly, makes gurgling sounds, smells bad, or has water backing up, it's time to call a plumber. These signs often mean there's a serious clog or deeper issue that DIY tricks won't fix. Our team uses professional tools to figure out the problem and fix it fast. We'll clear the problem before it causes expensive damage to your plumbing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How long does it take to clear a drain?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most drain cleaning jobs take about an hour, depending on where the clog is and how bad it is. Tougher problems, like clogs deep in the pipes or sewer issues, might need a bit more time to fix. Our skilled plumbers work quickly to get your drains flowing again. We keep disruptions to your day as minimal as possible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can tree roots actually mess up my drains?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, tree roots can sneak into pipes, especially older or cracked ones, looking for water. These roots can block pipes or even break them, leading to pricey repairs. We use sewer cameras to spot roots without tearing up your yard. Then, we clear them out with methods like hydro-jetting to get your drains working smoothly again.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How often should I get my drains cleaned?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Having your drains professionally cleaned every couple of years can keep clogs at bay and your plumbing in great shape. If your home has lots of people, heavy drain use, or older pipes, you might need cleaning more often. Regular maintenance stops sudden blockages and helps your pipes last longer. Our team can check your system and suggest the best cleaning schedule for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What should I do if my drain clogs over and over?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                If your drain keeps clogging, it's likely a sign of a bigger problem, like thick buildup, tree roots, or damaged pipes. Whether it's clearing a tough clog or repairing a pipe, we've got you covered with long-lasting solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why does my shower back up at the same time my toilet backs up?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                When your shower and toilet back up at the same time, it's usually a sign of a blockage in the main sewer line that both fixtures share. This clog, often caused by debris or even tree roots, prevents the main sewer line from flowing out properly, causing backups in multiple drains. You will likely notice a main sewer backup at the drain point that is the lowest in your home, typically located in a downstairs shower or bathtub.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
