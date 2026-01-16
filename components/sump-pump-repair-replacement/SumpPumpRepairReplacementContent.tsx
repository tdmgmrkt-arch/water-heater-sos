"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Phone, Zap, Clock } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function SumpPumpRepairReplacementContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Sump Pump Repair & Replacement
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Protect Your Home from Basement Flooding
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Is your sump pump making strange noises, running constantly, or not working at all?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                A failing sump pump leaves your basement vulnerable to flooding and water damage during heavy rains. Our expert plumbers provide fast sump pump repairs and professional installations to keep your home dry and protected.
              </p>
              <Link
                href="/quote?category=Fixtures%20%26%20Appliances&service=Sump%20Pump%20Repair%2FReplacement"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <span className="sm:hidden">Get Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
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

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
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
      <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 lg:text-4xl mb-3 sm:mb-4">
              Why Choose Professional Sump Pump Service?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Reliable protection from basement flooding and water damage
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-8 shadow-md sm:shadow-lg border border-gray-200"
              >
                <div className="mb-3 sm:mb-4 inline-flex rounded-lg bg-[#EA5D19] p-2 sm:p-3">
                  <benefit.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white lg:text-4xl mb-4 sm:mb-6">
              Get a Free Estimate Today!
            </h2>
            <p className="text-sm sm:text-xl text-white/90 mb-5 sm:mb-8 max-w-2xl mx-auto">
              Don't wait for a flood to damage your home. Contact us today for expert sump pump repair and replacement services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+18006974014"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                (800) 697-4014
              </Link>
              <Link
                href="/quote?category=Fixtures%20%26%20Appliances&service=Sump%20Pump%20Repair%2FReplacement"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ category="sumpPump" subtitle="Common questions about sump pump repair & replacement" />
    </>
  );
}
