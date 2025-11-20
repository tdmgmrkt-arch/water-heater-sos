"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ClaremontContent() {
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
                Serving Claremont, CA
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                Professional Plumbers in Claremont, CA
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Expert Water Heater Services & Complete Plumbing Solutions
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Water Heater SOS proudly serves Claremont, CA, with top-tier <Link href="/water-heater-services" className="text-[#EA5D19] hover:underline font-semibold">water heater services</Link> and comprehensive plumbing solutions. Our licensed and insured plumbers are committed to delivering exceptional service, ensuring your home's plumbing system operates efficiently all year long.
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
                  alt="Professional plumber in Claremont"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Whether you need emergency <Link href="/water-heater-repair" className="text-[#EA5D19] hover:underline font-semibold">water heater repair</Link>, a new <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater</Link> installation, or routine plumbing maintenance, we're here to help. Our experienced technicians arrive on time, accurately diagnose problems, and deliver long-lasting solutions that keep your home comfortable and efficient.
            </p>
            <p>
              We know plumbing emergencies don't follow a schedule. That's why we offer 24/7 emergency services to handle urgent situations like <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link>, burst pipes, and water heater failures. From <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning</Link> to <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repairs</Link>, we handle everything with professionalism and care.
            </p>
            <p>
              Claremont homeowners trust Water Heater SOS for our transparent pricing, quality craftsmanship, and dedication to customer satisfaction. We use only premium materials and equipment, ensuring every job meets the highest standards. Contact us today to schedule an appointment or request emergency service.
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
              Our Plumbing Services in Claremont
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions for your home
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Water Heater Installation",
                description: "Professional installation of gas, electric, and tankless water heaters",
                icon: Droplets,
                link: "/water-heater-installation",
              },
              {
                title: "Water Heater Repair",
                description: "Fast diagnosis and repair of all water heater issues",
                icon: Wrench,
                link: "/water-heater-repair",
              },
              {
                title: "Tankless Water Heaters",
                description: "Energy-efficient tankless systems for endless hot water",
                icon: Droplets,
                link: "/tankless-water-heaters",
              },
              {
                title: "Drain Cleaning",
                description: "Professional drain cleaning and clog removal services",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Leak Detection",
                description: "Advanced leak detection technology to find hidden leaks",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Emergency Services",
                description: "24/7 emergency plumbing services when you need us most",
                icon: Phone,
                link: "/quote",
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

      {/* Common Plumbing Problems Section */}
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
              Common Plumbing Issues in Claremont Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Problems we solve every day
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "No Hot Water",
                description: "Water heater failures, thermostat issues, and heating element problems",
              },
              {
                title: "Leaking Pipes",
                description: "Hidden leaks, burst pipes, and water damage prevention",
              },
              {
                title: "Clogged Drains",
                description: "Slow drains, complete blockages, and sewer line issues",
              },
              {
                title: "Running Toilets",
                description: "Flapper valve problems, fill valve issues, and water waste",
              },
              {
                title: "Low Water Pressure",
                description: "Mineral buildup, pipe corrosion, and pressure regulator problems",
              },
              {
                title: "Dripping Faucets",
                description: "Worn washers, cartridge issues, and water waste",
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
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
              Need Plumbing Services in Claremont?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert plumbers are ready to help. Call now for fast, reliable service!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+19514890974"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                (951) 489-0974
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
              Common questions from Claremont homeowners
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Do you provide 24/7 emergency plumbing services in Claremont?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, Water Heater SOS offers 24/7 emergency plumbing services to Claremont residents. Whether it's a burst pipe, water heater failure, or severe leak, our team is ready to respond quickly to minimize damage and restore your plumbing system.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How soon can you respond to a service call in Claremont?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We prioritize same-day service for Claremont customers whenever possible. For emergencies, we aim to arrive within hours of your call. Our goal is to provide fast, reliable service when you need it most.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What types of water heaters do you install?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We install all types of water heaters including traditional tank models (gas and electric), tankless water heaters, heat pump water heaters, and hybrid systems. Our technicians will help you choose the best option for your home's needs and budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Do you offer free estimates?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, we provide free, no-obligation quotes for all plumbing services in Claremont. We believe in transparent pricing with no hidden fees, so you'll know exactly what to expect before any work begins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Are your plumbers licensed and insured?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutely. All our plumbers are fully licensed, insured, and experienced. We maintain the highest standards of professionalism and workmanship, ensuring your plumbing work is completed safely and correctly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
