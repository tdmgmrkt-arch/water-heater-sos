"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";

const plumbingServices = [
  {
    title: "Water Heater Repair and Replacement",
    description: "If your water heater is leaking or not heating, we'll figure out the problem and fix or replace it to get your hot water back fast.",
    link: "/gas-water-heaters",
  },
  {
    title: "Leaky Faucet Fixes",
    description: "A dripping faucet wastes water and money. We repair or replace faulty parts to stop leaks and save you cash.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Clogged Drain Clearing",
    description: "Slow or blocked drains from hair, grease, or soap are no match for our tools. We clear clogs to keep water flowing smoothly.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Repairs",
    description: "A running or clogged toilet can be frustrating and wasteful. We fix valves, seals, or blockages to get your toilet working right.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Pipe Repairs and Replacements",
    description: "Leaky or broken pipes can damage your home. We repair or replace them to prevent water loss and costly repairs.",
    link: "/plumbing",
  },
  {
    title: "Low Water Pressure Solutions",
    description: "Hard water buildup or pipe issues can weaken water flow. We find the cause and boost your water pressure.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Services",
    description: "A backed-up sewer line can cause messy, smelly problems. We clear or repair lines to keep your plumbing system running.",
    link: "/sewer-camera-inspection",
  },
  {
    title: "New Fixture Installations",
    description: "Need a new faucet, toilet, or showerhead? We install high-quality fixtures to upgrade your home's plumbing.",
    link: "/plumbing",
  },
];

const waterHeaterIssues = [
  {
    title: "Unpleasant Water Odor or Smell",
    description: "If you notice a strong, unpleasant odor emanating from your hot water, it may be due to bacteria in the water heater tank. This issue can be addressed by flushing and disinfecting the tank. This process involves draining the tank, filling it with water, hydrogen peroxide, or vinegar, and flushing it out again. Regular maintenance and cleaning of your water heater can help prevent the growth of bacteria and keep your water smelling fresh.",
  },
  {
    title: "Leaking Storage Tank or Connections",
    description: "A leaking water heater can cause significant damage to your home if not addressed promptly. If you notice water pooling around the base of your water heater, it could be due to a leak in the tank itself or in the connections. In some cases, tightening the connections can resolve the issue. However, if the tank is leaking, it may need to be replaced. It's crucial to address a leaking water heater immediately to prevent further damage and ensure your home's safety.",
  },
  {
    title: "Reduced Hot Water Supply or Low Water Pressure",
    description: "If you're experiencing a reduced hot water supply or low water pressure, it could be due to a variety of factors. These include a malfunctioning heating element, a clogged or blocked pipe, or a faulty thermostat. A professional plumber can diagnose the issue and recommend the appropriate course of action. Regular maintenance of your water heater can help prevent these issues and ensure a consistent supply of hot water.",
  },
  {
    title: "Dirty or Rusty Water",
    description: "If your hot water appears dirty or rusty, it could be due to sediment buildup in the tank or corrosion. This can be addressed by flushing the tank to remove the sediment and replacing the anode rod, which helps to prevent corrosion. If the tank is severely corroded, it may need to be replaced. Regular maintenance and flushing of your water heater can help prevent sediment buildup and corrosion.",
  },
  {
    title: "Pilot Light Issues",
    description: "If the pilot light on your natural gas water heater doesn't light or stays lit, it could be due to a faulty thermocouple or a clogged pilot tube. A professional plumber can address these issues. Regular water heater maintenance can prevent pilot light issues and ensure its safe and efficient operation.",
  },
];

export function YucaipaContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
                Yucaipa Plumbing Experts
              </span>
              <h1 className="text-3xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Yucaipa Plumbing Services & Water Heater Repair
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Do You Need a Plumber in Yucaipa?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Water Heater SOS, we&apos;re not just about water heaters anymore—we&apos;ve expanded to handle all plumbing repairs and installations in Yucaipa, CA! Our skilled team is dedicated to fixing your plumbing problems, from dripping faucets to clogged drains, and making sure everything works perfectly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We focus on giving you top-notch service, tailored to your needs, so your home&apos;s plumbing runs smoothly and efficiently. With our commitment to customer satisfaction, you can trust us to put you first and deliver reliable solutions every time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Hot water is something we all rely on, but when your water heater starts acting up, it can mess up your whole day. A leaky water heater, one that won&apos;t stay lit, or one that doesn&apos;t heat well can leave you with cold showers and a big headache. That&apos;s where we come in!
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Schedule an Appointment Today!
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/wh-sos-service-rep.webp"
                alt="Yucaipa plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Plumbing Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6">
              Common Plumbing Services in Yucaipa
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our experienced technicians in Yucaipa are experts at diagnosing, repairing, and replacing all types of water heaters—gas, electric, or tankless. But our services don&apos;t stop there. We now fix a wide range of plumbing issues to keep your home in great shape.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {plumbingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link
                  href={service.link}
                  className="flex flex-col h-full rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug group-hover:text-[#EA5D19] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hard Water Problems Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-center max-w-7xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6">
              Hard Water Problems in Yucaipa?
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Yucaipa&apos;s hard water can be tough on your plumbing, especially water heaters. The minerals in the water build up in pipes and tanks, causing clogs, corrosion, and shorter equipment life. Our team knows how to tackle these issues.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We can install water softeners to reduce mineral buildup, protect your plumbing, and make your water heater last longer. This saves you from frequent repairs and keeps your system running efficiently.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When you choose Water Heater SOS, you&apos;re getting a team that&apos;s friendly, reliable, and ready to work. We show up on time, explain the problem in a way that&apos;s easy to understand, and use high-quality parts to ensure our repairs last. Whether we&apos;re fixing a leaky pipe, installing a new toilet, or replacing a water heater, we clean up after ourselves and leave your home neat.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Common Water Heater Issues Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6">
              Common Water Heater Issues
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {waterHeaterIssues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full flex flex-col rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug">
                    {issue.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {issue.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Schedule an Appointment Today!
            </h2>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Get Free Estimate
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="yucaipa" />
    </>
  );
}
