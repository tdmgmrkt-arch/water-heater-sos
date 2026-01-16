"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PerrisContent() {
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
                Serving Perris, CA
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                Perris Plumbers & Water Heater Repair
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Professional Plumbers in Perris, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Got plumbing problems in Perris? Water Heater SOS is your solution. We are a family‑owned business that offers fast and dependable plumbing repair and installation services. We handle everything from clearing <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet clogs</Link> to performing <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repipes</Link>. Our skilled plumbers fix <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain issues</Link>, repair showers, and tackle <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposals</Link>.
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
                  alt="Professional plumber in Perris"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We also address gas leaks, water leaks, and slab leaks with care and expertise. Water Heater SOS delivers a wide range of plumbing services. Our <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link> pinpoints water loss quickly. They unclog drains and restore faulty garbage disposals. Facing a shower breakdown or a gas leak? We act fast to keep your home safe.
            </p>
            <p>
              For big jobs like water line repairs or whole‑house repipes, we ensure durable results. If an emergency strikes, our team responds promptly to protect your property. At Water Heater SOS, we excel in repairing both traditional tank water heaters and <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link>. If your tank heater leaks or fails to heat, we diagnose and fix it fast.
            </p>
            <p>
              For tankless systems, we troubleshoot issues like inconsistent temperatures or low water flow. The team ensures your water heater, whether tank or tankless, runs smoothly again. Do you need a new water heater installed? We handle both traditional tank and tankless models. We will guide you in choosing the right unit for your home's needs. For tank heaters, we ensure proper setup for reliable hot water. For tankless systems, we install efficient, space‑saving units that deliver endless hot water.
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
              Our Plumbing Services in Perris
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions for your home
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
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
                title: "Water Heater Installation",
                description: "Professional installation of gas and electric water heaters",
                icon: Droplets,
                link: "/water-heater-installation",
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

      {/* Most Common Tankless Problems Section */}
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
              Most Common Tankless Water Heater Problems
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mineral Buildup",
                description: "Hard water causes scale to form inside the unit. This clogs the system, reducing water flow and efficiency. Regular maintenance helps prevent this issue.",
              },
              {
                title: "Ignition Failure",
                description: "The burner may fail to ignite due to gas supply problems or a faulty igniter. This stops the unit from heating water. Technicians can diagnose and repair the ignition system quickly.",
              },
              {
                title: "Overheating",
                description: "A malfunctioning thermostat or restricted water flow can cause the unit to overheat. This triggers safety shutoffs, leaving you without hot water. Repairs restore proper function and safety.",
              },
              {
                title: "Sensor Issues",
                description: "Faulty temperature or flow sensors can disrupt performance. This leads to inconsistent water temperatures or system shutdowns. Replacing or recalibrating sensors fixes the problem.",
              },
              {
                title: "System Overload",
                description: "High demand from multiple appliances can strain the unit. This causes it to shut down or deliver inadequate hot water. Adjusting usage or upgrading the system resolves the issue.",
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
              Need Plumbing Services in Perris?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule an appointment today!
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
              Common questions from Perris homeowners
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why does my sink drain slowly?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Clogs from grease, hair, or debris block the pipe. Water Heater SOS clears drains fast to restore flow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How do I know if I have a slab leak?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Wet spots or warm spots on floors combined with high water bills signal a slab leak. Their team uses advanced detection to find and fix it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What causes low water pressure in my shower?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Mineral deposits or pipe issues reduce water flow. Water Heater SOS inspects and repairs showers to boost pressure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can you fix a noisy garbage disposal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Loose parts or trapped debris cause grinding sounds. Our plumbers can diagnose and repair disposals quickly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How do you detect gas leaks?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We use specialized tools to find gas leaks safely. Usually, we do a pressurized test to look for leaks, and other times we use leak detection devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can you install a new bathroom sink?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, we can install sinks with proper plumbing connections. Our work ensures a leak‑free, functional setup.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why is my water bill so high?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Hidden leaks or faulty fixtures waste water. Our leak detection and repair services solve the problem as we quickly locate the leak and fix your plumbing problem.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
