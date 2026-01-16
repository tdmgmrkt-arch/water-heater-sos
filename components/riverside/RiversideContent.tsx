"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function RiversideContent() {
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
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-white text-sm font-semibold mb-4">
                Serving Riverside, CA
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                Riverside – Plumbing & Water Heater Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Plumbing Company in Riverside, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Water Heater SOS is a family‑owned plumbing company ready to fix any problem you've got. No job is too big or too small—from unclogging drains to fixing <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heaters</Link>—and we treat every home like it's our own. Our friendly Riverside plumbers know their stuff and work hard to get your plumbing back in shape fast.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
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
                  src="/wh-sos-service-rep.webp"
                  alt="Professional plumber in Riverside"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We're experts at fixing water heaters when they leak or stop heating, getting your hot showers and clean dishes back in no time. But we do a lot more than that! We offer <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning services</Link> that clear clogs in sinks, tubs or showers caused by hair or grease. We fix dripping <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucets</Link> to save water and lower your bills, and repair <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilets</Link> that won't flush or keep running.
            </p>
            <p>
              Our pipe leak repair service mends leaky pipes to prevent water damage, while our sewer line cleaning clears blocked sewer lines to stop smelly backups. We use advanced <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection services</Link> to locate slab or wall leaks with advanced equipment. For homes with old plumbing, our <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repipe</Link> service replaces old pipes for cleaner, faster‑flowing water. We also install or fix showers for a fresh look.
            </p>
            <p>
              We service the greater Riverside area, including Jurupa Valley, Norco, Eastvale, Lake Elsinore, Menifee, Murrieta and Temecula. If you aren't sure if we service your city, call or text us at (800) 697‑4014.
            </p>
          </div>
        </div>
      </section>

      {/* Plumbing Services Section */}
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
              Our Plumbing Services in Riverside
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions to keep your home running smoothly
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Water Heater Repair",
                description: "Fixes leaks or heating issues in gas, electric or tankless water heaters",
                icon: Wrench,
                link: "/water-heater-repair",
              },
              {
                title: "Drain Cleaning Services",
                description: "Clears clogs in sinks, tubs or showers caused by hair or grease",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Faucet Repair or Installation",
                description: "Stops dripping faucets to save water and lower your bills",
                icon: Droplets,
                link: "/faucet-repair-replacement",
              },
              {
                title: "Toilet Repair or Installation",
                description: "Fixes toilets that won't flush or keep running",
                icon: Wrench,
                link: "/toilet-repair-replacement",
              },
              {
                title: "Leak Detection Services",
                description: "Locates slab or wall leaks with advanced equipment",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Whole‑House Repipe",
                description: "Replaces old pipes for cleaner, faster‑flowing water",
                icon: Wrench,
                link: "/repiping",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <div className="h-full rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-200">
                    <div className="mb-4 inline-flex rounded-lg bg-[#EA5D19] p-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Heater Breakdown Section */}
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
              Reasons Water Heaters Break Down
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Faulty Flue Pipe",
                description: "The flue pipe vents exhaust gases from the combustion process. A damaged or improperly installed flue can backdraft gases into living spaces, posing health risks. Signs include noises from the heater, rust or corrosion on the flue and poor heating performance.",
              },
              {
                title: "Sediment Buildup",
                description: "Over time, sediment accumulates at the bottom of the tank, corroding the heating element and reducing efficiency. Signs include noises, rusty water or reduced hot‑water output.",
              },
              {
                title: "Electrical Issues",
                description: "Gas water heaters still need electricity. A faulty thermostat, igniter or control board can cause the heater to malfunction or fail. Signs include failure to turn on, improper heating or strange noises.",
              },
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-gray-50 p-8 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-5 w-5 text-[#EA5D19]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-600">{problem.description}</p>
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
              Need Plumbing Services in Riverside?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert plumbers are ready to help. Call now for fast, reliable service!
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
                Get Free Quote
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
              Trusted Brands We Install & Service
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
              Common questions from Riverside homeowners
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What brand of water heaters do you repair?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We commonly repair water heaters from Bradford White, A. O. Smith, Kenmore and Whirlpool. Consumer Reports ranks Bradford White highly for its American‑made, employee‑owned products, including tank‑style and tankless models.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can I install a water heater myself, or should I hire a plumber?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                DIY installation is possible, but hiring a professional ensures the job is done correctly, safely and to code, preventing leaks, inefficiency or hazards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How often should I flush my water heater?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Flush your water heater at least once a year to remove sediment buildup, prevent noise and extend the unit's lifespan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Should my Riverside home have a tankless water heater?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Tankless water heaters heat water on demand, offering energy savings of up to 34%. They have higher upfront costs but can be more efficient long‑term. We can help you decide based on household size and water usage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Is the tap water in Riverside safe to drink?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Riverside's water comes from a blend of local groundwater, the Santa Ana River and imported sources. While it meets standards, some contaminants remain. Installing filtration systems or using bottled water can improve safety. Being informed about local water issues and supporting infrastructure improvements also helps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can you snake a toilet or install a sink?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes! We fix dripping faucets, clogged drains, broken pipes, toilets, showers, garbage disposals and more. We're experts at tankless water‑heater repair and installation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
