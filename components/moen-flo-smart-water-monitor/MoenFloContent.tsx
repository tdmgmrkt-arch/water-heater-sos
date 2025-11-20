"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, CheckCircle2, Shield, Bell, Smartphone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MoenFloContent() {
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
                Redlands, Yucaipa, Highland, Loma Linda & San Bernardino
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Moen Flo </span>Leak Detection Installation
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Are you looking to protect your home from water damage?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Does your homeowner's insurance policy require a plumber to install a Moen Flo leak detection device?
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
                  src="/Moen.webp"
                  alt="Moen Flo Smart Water Monitor installation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We install Moen Flo leak detection shut-off systems. In fact, we install several of these devices every week in the nearby cities of <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>, <Link href="/rialto" className="text-[#EA5D19] hover:underline font-semibold">Rialto</Link>, <Link href="/yucaipa" className="text-[#EA5D19] hover:underline font-semibold">Yucaipa</Link>, and <Link href="/riverside" className="text-[#EA5D19] hover:underline font-semibold">Riverside</Link>. Once installed by one of our professional plumbers, we will provide you with a letter for your homeowner's insurance that verifies you had a Moen Flo leak shut-off professionally installed.
            </p>
            <p>
              Water damage can be costly and devastating for homeowners. It can cause extensive damage to property and belongings, and the longer it goes untreated, the worse it gets. With a Moen Flo Smart Water Monitor, you can help deter a water leak emergency and appease your homeowner's insurance at the same time.
            </p>
            <p>
              We offer expert installation of the Moen Flo Leak Detection device across the Inland Empire, serving areas like <Link href="/rancho-cucamonga" className="text-[#EA5D19] hover:underline font-semibold">Rancho Cucamonga</Link>, Big Bear, and <Link href="/riverside" className="text-[#EA5D19] hover:underline font-semibold">Riverside</Link>.
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
              Why Install A Moen Flo Smart Water Monitor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protect your home with advanced leak detection technology
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Leak Detection",
                description: "The Moen Flo Smart Water Monitor can detect leaks in your plumbing system. It uses advanced technology to monitor water flow and pressure and can alert you if it detects a leak. This can help you catch problems early and prevent costly water damage.",
                icon: Droplets,
              },
              {
                title: "Water Usage Monitoring",
                description: "The Moen Flo Smart Water Monitor tracks your water usage, allowing you to see how much water you use and where it goes. This can help you identify areas where you can conserve water and save money on your water bill.",
                icon: CheckCircle2,
              },
              {
                title: "Automatic Shutoff",
                description: "If the Moen Flo Smart Water Monitor detects a leak, it can automatically shut off your water supply to prevent further damage. This can be a lifesaver if you're away from home and a pipe bursts.",
                icon: Shield,
              },
              {
                title: "Remote Access",
                description: "The Moen Flo Smart Water Monitor can be controlled remotely using a smartphone.",
                icon: Smartphone,
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
              Schedule an Appointment Today!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Protect your home from water damage with professional Moen Flo installation. Call now!
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
              Common questions about Moen Flo Smart Water Monitor
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What is a smart home water shut-off valve?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A smart home water shut-off valve is a device that can automatically shut off the water supply to your home in case of a leak or burst pipe. It's usually installed on the main water supply line and can be controlled remotely through a smartphone app.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How does a smart home water shut-off valve work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Smart home water shut-off valves use sensors to detect leaks or abnormal water usage. When a leak is detected, the valve automatically shuts off the water supply to prevent further damage. Some valves can also send alerts to your smartphone or email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How much does a smart home water shut-off valve cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                The cost varies depending on the brand and features. The Moen Flo Smart Water Monitor costs about $500 but there are some less expensive models on the market. This price does not include installation by a professional plumber.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Do I need a plumber to install a smart home water shut-off valve?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                In most cases, yes. Smart home water shut-off valves require professional installation by a licensed plumber, and if your homeowner's insurance requires one, they will want a letter stating it was done by a certified professional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Do I need Wi-Fi for my smart water shut-off monitor?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, nearly all devices connect to Wi-Fi, so if there is a problem with your home plumbing, your smartphone will be notified.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Will the Moen Flo work if I have high water pressure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Many homeowners think having high water pressure is a good thing, but it's not. High water pressure often leads to costly water leaks, as many of your home's plumbing fixtures are only rated for a specific PSI. The Moen Flo device constantly notifies you if your water pressure is above 80 PSI. Our plumbers must test your water pressure and replace your water pressure regulator if it's high. Please also note that when our plumbers test your PSI, the reading is a screenshot in time. Often, in the evening, when most of your neighborhood is asleep and nobody is using their water, your water pressure spikes. A reading of 70 PSI during the day can easily be over 80 PSI at night. Water pressure can vary within each city, but some of the cities with the highest pressure we have encountered are Redlands, Loma Linda, Highland, and San Bernardino. Several times, we have tested homes in Redlands with 120+ PSI in water pressure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Will you provide me with a letter of installation for my insurance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, we will provide you with a certificate of completion that you can forward to your homeowner's insurance company. This letter states that you had a Moen Flo device installed by one of our plumbers with our California license number.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
