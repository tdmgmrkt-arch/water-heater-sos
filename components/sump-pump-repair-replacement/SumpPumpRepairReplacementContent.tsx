"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Phone, Zap, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SumpPumpRepairReplacementContent() {
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
                Sump Pump Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Protect Your Home from Basement Flooding
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Is your sump pump making strange noises, running constantly, or not working at all?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A failing sump pump leaves your basement vulnerable to flooding and water damage during heavy rains. Our expert plumbers provide fast sump pump repairs and professional installations to keep your home dry and protected.
              </p>
              <Link
                href="/quote?category=Fixtures%20%26%20Appliances&service=Sump%20Pump%20Repair%2FReplacement"
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
                  src="/placeholderimage.webp"
                  alt="Professional sump pump repair and replacement services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Sump pumps are your home's first line of defense against basement flooding, removing water that accumulates in sump pits and preventing damage to foundations, floors, walls, and belongings. In areas prone to heavy rainfall or high groundwater levels, a properly functioning sump pump is essential for home protection. Our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> include sump pump repairs, complete replacements, battery backup installations, and preventive maintenance to ensure your system works when you need it most.
            </p>
            <p>
              Most sump pumps last 7-10 years before requiring replacement, though lack of maintenance, power outages during storms, clogged discharge lines, and improper installation can cause premature failure. Common problems include motors that won't start or run continuously, stuck or jammed float switches, clogged intake screens, burned-out motors from overwork, and discharge pipes blocked by debris, roots, or frozen ice. We also handle <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection</Link> to identify water intrusion sources that overwork your sump pump.
            </p>
            <p>
              While minor issues like clearing clogged discharge lines or adjusting stuck float switches may allow repairs, most sump pump problems warrant replacement rather than repair. Repair costs often approach new pump prices, and fixing one component doesn't prevent other aging parts from failing during the next storm. Modern sump pumps offer superior reliability, battery backup options for power outages, higher capacity motors, and advanced features like Wi-Fi monitoring and alarm systems. Professional installation ensures proper sizing, correct discharge routing, and reliable operation when storms hit. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Professional Sump Pump Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reliable protection from basement flooding and water damage
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Prevent Flooding",
                description: "A functioning sump pump removes water before it floods your basement, protecting foundations, walls, floors, and stored belongings. Don't wait for the next heavy rain to discover your pump has failed. Professional installation and maintenance prevent costly flood damage.",
                icon: Shield,
              },
              {
                title: "Battery Backup",
                description: "Storms that cause flooding often knock out power, leaving standard pumps useless. We install battery backup systems that keep pumping during outages. Protect your home when you need it most with reliable backup power for sump pumps.",
                icon: Zap,
              },
              {
                title: "Fast Service",
                description: "Sump pump failures can't wait, especially during storm season. We provide prompt service to repair or replace failed pumps quickly, minimizing your basement's flood risk. Most installations complete within hours, restoring protection immediately.",
                icon: Clock,
              },
              {
                title: "Modern Systems",
                description: "Today's sump pumps offer Wi-Fi monitoring, high-capacity motors, dual-pump systems, and automatic alarms that alert you to problems. Upgrade from old, unreliable pumps to modern systems with features that provide peace of mind and superior protection.",
                icon: ArrowRight,
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
              Don't wait for a flood to damage your home. Contact us today for expert sump pump repair and replacement services.
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
                href="/quote?category=Fixtures%20%26%20Appliances&service=Sump%20Pump%20Repair%2FReplacement"
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
              Common questions about sump pump repair & replacement
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What does a sump pump do?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A sump pump removes water that collects in a basement or crawlspace sump pit, preventing flooding and protecting your home's foundation. It automatically activates when water levels rise, pumping water out to a safe drainage area away from your home.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How do I know if my sump pump is working?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Test it by pouring water into the sump pit until the float switch activates and the pump turns on. If it doesn't start, struggles to clear water, or makes unusual noises, it may need repairs or replacement. Test your pump every 3-6 months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why does my sump pump keep running?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A pump that runs constantly might have a stuck float switch, a clogged discharge line preventing water removal, or extremely high groundwater levels overwhelming the system. Check for blockages or contact a professional to diagnose the issue before the pump burns out.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What happens if my sump pump fails?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A failed sump pump leads to basement flooding, damaging walls, floors, stored belongings, and furniture. Water can weaken your home's foundation, cause mold growth, and create costly structural issues. Quick replacement prevents these expensive problems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can a sump pump work during a power outage?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Standard sump pumps require electricity and stop during power outages. Since storms that cause flooding often knock out power, a battery backup system or generator is essential. Battery backup pumps keep running when the power fails, protecting your home when you need it most.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How often should I maintain my sump pump?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Check your sump pump every 3-6 months by pouring water in the pit to ensure it activates and clears debris. Annual professional maintenance catches problems before they lead to failure. Clean the pit, check the float switch, and test the discharge line regularly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Should I repair or replace my sump pump?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Replacement is usually better than repair because repair costs often approach new pump prices, and fixing one part doesn't prevent other components from failing. If your pump is over 7-10 years old or has recurring problems, replacement with a modern, reliable system makes more sense.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Why is my sump pump making loud noises?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Loud grinding or rattling noises indicate a worn-out motor, loose parts, or debris in the pump. These issues can lead to complete failure if not addressed quickly. Contact a professional to inspect and repair or replace the pump before it stops working entirely.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
