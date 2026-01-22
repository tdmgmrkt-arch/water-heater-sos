"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Phone, Shield, Wrench, AlertTriangle } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";

export function WaterPressureRegulatorReplacementContent() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Water Pressure Regulator Replacement" },
        ]}
      />
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
                Water Pressure Regulator Replacement
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Expert Water Pressure Control for Your Home
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Dealing with noisy pipes, leaking fixtures, or fluctuating water pressure?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                A faulty water pressure regulator can damage pipes, destroy appliances, and waste water. Our expert plumbers install and replace pressure regulators to protect your plumbing system and maintain safe water pressure.
              </p>
              <Link
                href="/quote?category=Leak%20%26%20Water%20Services&service=Water%20Pressure%20Regulator%20Replacement"
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
                  src="/water-pressure-regulator.webp"
                  alt="Professional water pressure regulator replacement service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              A water pressure regulator controls the water pressure entering your home from the city main, reducing high municipal pressure (often 100+ PSI) to a safe level of 50-60 PSI. Without proper pressure regulation, excessive force damages pipes, causes leaks at fixture connections, voids appliance warranties, and creates banging or hissing noises in your plumbing. Our professional <Link href="/plumbing" className="text-[#EA5D19] hover:underline font-semibold">plumbing services</Link> test water pressure, diagnose regulator problems, and install new pressure reducing valves to protect your entire system.
            </p>
            <p>
              Common signs of a failing pressure regulator include noisy or vibrating pipes, constantly dripping faucets despite new washers, sudden water pressure fluctuations between fixtures, appliances failing prematurely, visible pipe damage like bulging or cracks, and higher water bills from hidden leaks caused by excessive pressure. In the Inland Empire, city water pressure can spike during low-usage hours or after utility maintenance, making pressure regulators essential for home protection. We also handle <Link href="/water-service-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">water service repairs</Link> when pressure issues stem from main line problems.
            </p>
            <p>
              High water pressure above 75 PSI stresses your plumbing system constantly, causing accelerated wear on pipes, joints, and seals. Older copper or galvanized pipes can crack or burst under sustained high pressure, while modern fixtures and appliances aren't designed to handle excessive force. We install quality pressure reducing valves, adjust them to optimal settings for your home, and inspect your plumbing for any damage caused by previous high pressure. Proper pressure regulation extends the life of all plumbing components and prevents costly emergency repairs. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Replace Your Pressure Regulator?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Professional pressure regulation protects your entire plumbing system
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Protect Your Pipes",
                description: "Excessive water pressure above 75 PSI damages pipes, joints, and connections, causing cracks, leaks, and bursts. Older copper and galvanized pipes can't withstand sustained high pressure. Proper regulation keeps pressure at safe levels (50-60 PSI), preventing costly pipe damage and water emergencies.",
                icon: Shield,
              },
              {
                title: "Extend Appliance Life",
                description: "High water pressure voids appliance warranties and causes premature failure of water heaters, washing machines, dishwashers, and other appliances. Excessive force damages internal components and seals. Regulated pressure extends appliance lifespan and protects your investment in home equipment.",
                icon: Wrench,
              },
              {
                title: "Eliminate Noisy Pipes",
                description: "Banging, hissing, or vibrating pipes indicate dangerously high water pressure stressing your plumbing. These noises signal damage occurring throughout your system. A new pressure regulator eliminates these sounds and prevents the damage that causes them.",
                icon: AlertTriangle,
              },
              {
                title: "Stop Fixture Leaks",
                description: "Constantly dripping faucets, running toilets, and leaking shower valves often result from high pressure wearing out seals and gaskets prematurely. Proper pressure regulation stops these leaks, reduces water waste, and extends the life of all fixtures throughout your home.",
                icon: Gauge,
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
              Don't let high water pressure damage your plumbing and appliances. Contact us today for expert pressure regulator replacement.
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
                href="/quote?category=Leak%20%26%20Water%20Services&service=Water%20Pressure%20Regulator%20Replacement"
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
      <FAQ category="waterPressureRegulator" subtitle="Common questions about water pressure regulators" />
    </>
  );
}
