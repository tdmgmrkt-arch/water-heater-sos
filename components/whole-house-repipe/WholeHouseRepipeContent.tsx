"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Phone, Home, Shield, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function WholeHouseRepipeContent() {
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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                Whole-House Repipe
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Complete Plumbing System Replacement for Your Home
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Dealing with frequent leaks, discolored water, or low water pressure?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Old, corroded pipes can cause serious damage to your home and drive up repair costs. Our whole-house repiping service replaces outdated plumbing with modern, reliable materials that last decades.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Schedule an Appointment
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
                  alt="Professional whole-house repipe services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Whole-house repiping replaces all the old, corroded pipes in your home with modern copper or PEX pipes that provide clean water, strong pressure, and reliable performance for 50+ years. If your home has galvanized steel or polybutylene pipes, you're at risk for frequent leaks, rust-colored water, and expensive water damage. Our expert <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> assess your system and recommend the best repiping solution.
            </p>
            <p>
              Common signs you need repiping include multiple leaks in different locations, discolored or foul-smelling water, weak water pressure throughout the house, and visible corrosion on exposed pipes. Galvanized pipes corrode from the inside due to mineral buildup, restricting water flow and contaminating your water supply. Our repiping process involves replacing all supply lines while minimizing disruption to your daily routine. We also handle <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection services</Link> to identify hidden pipe damage before it causes major problems.
            </p>
            <p>
              Modern PEX piping offers flexibility, freeze resistance, and faster installation compared to traditional copper, though both materials provide excellent longevity and performance. Our skilled plumbers work efficiently to complete most residential repipes in 3-7 days, ensuring your water remains functional each evening. Whether you're dealing with frequent emergency repairs or planning ahead to protect your investment, we deliver professional repiping services throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Whole-House Repiping?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern plumbing solutions that protect your home and family
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Eliminate Leaks",
                description: "Stop recurring leaks from corroded pipes that damage walls, floors, and foundations. New pipes eliminate the constant cycle of patch repairs and emergency calls. Prevent water damage, mold growth, and structural issues with a complete system replacement.",
                icon: Droplets,
              },
              {
                title: "Improve Water Quality",
                description: "End rust-colored, foul-smelling water caused by corroded galvanized pipes. Modern pipes deliver clean, clear water free from metal contamination and sediment. Protect your family's health with safe drinking water and improved taste throughout your home.",
                icon: Shield,
              },
              {
                title: "Increase Water Pressure",
                description: "Restore strong, consistent water flow to all fixtures. Corroded pipes narrow from mineral buildup, reducing pressure dramatically. New pipes provide full water pressure for showers, faucets, and appliances, improving daily comfort and appliance efficiency.",
                icon: Home,
              },
              {
                title: "Long-Term Solution",
                description: "Invest in pipes that last 50-100 years with proper maintenance. Stop wasting money on temporary repairs and rising water bills. PEX and copper pipes resist corrosion, freeze damage, and leaks, providing reliable performance and peace of mind for decades.",
                icon: Wrench,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#EA5D19] p-3">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Don't wait for old pipes to fail and cause expensive damage. Contact us today for expert whole-house repiping services.
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
              Common questions about whole-house repiping
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How do I know if my home needs repiping?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Signs include frequent leaks in multiple locations, discolored or rusty water, consistently low water pressure, visible corrosion on exposed pipes, or if your home has galvanized steel or polybutylene pipes. If you're making frequent repair calls, repiping is often more cost-effective.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How long does a whole-house repipe take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most residential repipes take 3-7 days depending on home size and complexity. We work efficiently to minimize disruption, and in most cases, water service is restored each evening so you can use your plumbing overnight.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What's the difference between copper and PEX pipes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Both are excellent long-term solutions. Copper pipes are traditional, extremely durable, and last 50-100 years but cost more. PEX is flexible, freeze-resistant, faster to install, and typically less expensive. We'll recommend the best option based on your home's needs and budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Will repiping damage my walls and ceilings?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Some access points need to be opened to reach pipes, but we minimize damage by using strategic access points and careful workmanship. Any necessary drywall repairs are part of the service. The long-term benefits far outweigh the temporary inconvenience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How much does a whole-house repipe cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Costs vary based on home size, pipe material choice, and complexity. While it's a significant investment, repiping eliminates ongoing repair costs, prevents major water damage, and adds value to your home. Contact us for a free, detailed estimate tailored to your specific situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can I stay in my home during the repipe?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, most homeowners stay in their homes during repiping. We restore water service each evening and work efficiently to minimize disruption. You'll have temporary interruptions during work hours, but we coordinate with you to make the process as convenient as possible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why are galvanized pipes so problematic?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Galvanized pipes corrode from the inside due to mineral buildup in the water. This causes rust contamination, reduced water pressure, frequent leaks, and poor water quality. They typically fail after 40-50 years and should be replaced before causing serious water damage.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
