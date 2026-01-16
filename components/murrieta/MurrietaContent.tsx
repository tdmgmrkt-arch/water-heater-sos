"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, CheckCircle2, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MurrietaContent() {
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
                Serving Murrieta, CA
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                Murrieta Plumbers & Water Heater Repair
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Highly Rated Plumbing Company in Murrieta, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A backed‑up sink or a dripping showerhead can throw off your day. Water Heater SOS steps in to solve these issues quickly. Our skilled technicians tackle <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">clogged toilets</Link>, clear drains, fix showers, and repair <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposals</Link>. Notice a water leak, gas leak, or slab leak? We act fast to keep your home safe.
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
                  alt="Professional plumber in Murrieta"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Our advanced <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link> pinpoints problems, and our <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repipes</Link> upgrade your plumbing for years of reliability. You get straightforward answers in plain English and solutions tailored to your home. Your house needs plumbing that works without fail. Water Heater SOS offers emergency service, so a pipe burst won't leave you stranded.
            </p>
            <p>
              We provide regular maintenance to catch issues early, keeping your pipes in top condition. Our team shows up with fully stocked trucks, ready to handle everything from minor fixes to major installations. Murrieta homeowners pick us for honest pricing and discounts for military or seniors, showing we care about our community.
            </p>
            <p>
              Starting your day with a freezing shower in Murrieta is no fun. Water Heater SOS specializes in <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater repair</Link>, getting your hot water flowing fast. Our brand‑certified technicians diagnose problems like rusty tanks or faulty thermostats and often fix them the same day. We know every major brand, ensuring precise repairs that last. For <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link>, we optimize performance to save you energy and keep water hot. Need a <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">new water heater</Link>? We install modern tank or tankless units that fit your home's needs, boosting efficiency and reliability.
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
              Our Plumbing Services in Murrieta
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

      {/* Why Choose Us Section */}
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
              Why Choose Water Heater SOS Over Other Plumbers?
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Professional Plumbers",
                description: "Our brand‑certified team offers fast, expert service with clear pricing. We prioritize homeowners with availability and quality work. You get peace of mind with every job. We're committed to your home's comfort.",
              },
              {
                title: "High Customer Satisfaction",
                description: "Reviews praise our professionalism and quick service. Customers highlight our courteous technicians and effective repairs. You can trust us based on real feedback from other homeowners.",
              },
              {
                title: "Advanced Technology",
                description: "We use cutting‑edge leak detection and repair tools to find and fix issues fast. This minimizes damage to your home and speeds up the process. You get efficient solutions without unnecessary hassle.",
              },
              {
                title: "Water Heater Expertise",
                description: "Beyond general plumbing, we specialize in water heater and tankless repairs, ensuring hot water when you need it. Our technicians fix issues like leaks or faulty thermostats quickly. You enjoy a comfortable home with minimal disruption.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-gray-50 p-8 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-5 w-5 text-[#EA5D19] fill-current" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Softeners & Filtration Section */}
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
              Why Water Softeners & Filtration Systems Are Essential for Your Murrieta Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hard water or contaminated water isn't just an inconvenience; it can damage your home and affect your family's health. At Water Heater SOS, we specialize in installing <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water softeners and filtration systems</Link> to provide you with clean, safe water.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clean Water Means Peace of Mind</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your family deserves water free from hidden dangers. We test your water supply thoroughly, identifying impurities that could be lurking in your tap. Whether it's chemical byproducts from city treatment or well water contaminants like arsenic or lead (which can seep in from the surrounding soil), we'll give you a clear picture of your water quality.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Benefits of Softened, Filtered Water</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hard water doesn't just harm your plumbing; it can dry out your skin, fade your clothes, and shorten the lifespan of appliances. Our water softeners reduce mineral buildup, protecting your pipes and water heater while leaving your laundry softer and your skin smoother.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Remove</h3>
              <div className="space-y-4">
                {[
                  "Heavy metals (lead, arsenic)",
                  "Pesticides and chemicals",
                  "Calcium and magnesium (hard water minerals)",
                  "Chlorine and chloramines",
                  "Manganese and copper",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#EA5D19] flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="tel:+18006974014"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 w-full justify-center"
                >
                  <Phone className="h-5 w-5" />
                  (800) 697-4014
                </Link>
              </div>
            </motion.div>
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
              Need Plumbing Services in Murrieta?
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
              Common questions from Murrieta homeowners
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How do I stop my faucet from dripping?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A dripping faucet often needs new washers or seals. We fix it quickly to stop water waste. You save on your water bill. Water Heater SOS ensures a leak‑free faucet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can you help with hard water issues?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, we install water softeners to combat hard water. Hard water damages pipes and appliances, but we find the right solution. You get better water quality. Our team explains options clearly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What causes a toilet to run constantly?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A faulty flapper or valve often causes a running toilet. We replace the problem parts to stop the issue. You save water and lower your bills. Call Water Heater SOS for a quick fix.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Do you offer financing for big plumbing jobs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We provide financing options for major projects like whole‑house repipes, sewer repairs, and water heaters. You spread out costs without stress. Our team walks you through the process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What's the benefit of professional drain cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Professional drain cleaning removes deep clogs and buildup. Our tools clear pipes better than store‑bought solutions. You avoid recurring blockages. Water Heater SOS keeps your drains flowing freely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Do you repair outdoor plumbing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, we fix outdoor faucets, pressure regulators, and pipes. Leaks or breaks waste water, but we repair them fast. You keep your yard in great shape. Our team ensures durable outdoor fixes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can you fix my tankless water heater?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, we specialize in all types of water heaters, but specifically tankless water heaters. The vast majority of the time, the tankless can be fixed and up in running the same day.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
