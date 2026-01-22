"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Phone, Camera, Zap } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";

export function DrainCleaningContent() {
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
                Drain Cleaning Services
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Are your drains backing up into your home?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Nobody wants to deal with a backed up <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet</Link> or a clogged drain. With regular use, hair, soap, grease, and other debris can build up in your pipes, causing slow drainage or complete blockages. If left untreated, these clogs can make your sink, shower, toilet or bathtub nearly impossible to use. At Water Heater SOS, we offer expert drain cleaning services to keep your drains flowing freely and your home running smoothly.
              </p>
              <Link
                href="/quote?category=Drain%20%26%20Sewer%20Services&service=Drain%20Cleaning"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
                <Image
                  src="/wh-sos-service-rep.webp"
                  alt="Professional drain cleaning service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-6 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              Many homeowners try store-bought drain cleaners to fix clogs, but these harsh chemicals can damage your pipes, harm the environment, and often fail to fully fix the problem. Our plumbers have the tools and expertise to tackle any drain issue, big or small, and get your plumbing back to normal. We've helped countless homeowners and businesses restore their drains to like-new condition.
            </p>
            <p>
              No two clogs are the same, and we have a range of solutions to handle any obstruction. For example, a kitchen sink clog is often caused by food debris stuck just below the drain opening. In these cases, our skilled technicians can simply remove the P-Trap under the sink, clear the blockage, and reassemble everything quickly.
            </p>
            <p>
              Sometimes, the problem lies deeper in the drain system. Tree roots, for instance, can grow into pipes and cause stubborn blockages. For these tougher clogs, we may use a plumber's snake or hydrojetting to push through or break up the obstruction. Over time, grease, soap, hair, and food debris can also build up on the inner walls of your drains, narrowing them and slowing the drainage. This can lead to slow-draining sinks or tubs and even unpleasant odors that lead to a bigger issue. These problems won't resolve on their own, but our professional drain cleaning services can restore your pipes to full function.
            </p>
            <p>
              And then there are those unexpected clogs—a piece of food, a child's toy, or other random objects that make their way down the drain. No matter the cause, our team has the skills and tools to remove the obstruction and get your drains working again.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Drain Services Include
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Professional solutions to keep your drains flowing freely
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[
              {
                title: "Drain Cleaning",
                description: "Our team uses specialized tools to clear clogs and remove buildup from your pipes, ensuring water flows smoothly again. Whether it's hair, grease, or food debris, we'll restore your drains to full function quickly and efficiently.",
                icon: Wrench,
              },
              {
                title: "Drain Repair",
                description: "We fix cracked, corroded, or leaking drains to prevent water damage and avoid recurring issues. Our expert plumbers ensure repairs are done right, extending the life of your plumbing system.",
                icon: Wrench,
              },
              {
                title: "Sewer Camera Inspection",
                description: "Using state-of-the-art sewer cameras, we inspect deep within your pipes to identify hidden problems like blockages or damage. This precise technology allows us to diagnose issues accurately without invasive digging.",
                icon: Camera,
              },
              {
                title: "Sewer Repair",
                description: "We address sewer line issues, such as cracks, offsets, or root intrusions, to keep your drain system running smoothly. Our repairs prevent backups and ensure your sewer operates reliably.",
                icon: Wrench,
              },
              {
                title: "Sewer Replacement",
                description: "When sewer lines are too damaged to repair, we replace them with durable, modern materials for long-lasting performance. We offer pipe lining and trenchless sewer repairs to minimize disruption to your property and keep your cost down.",
                icon: Wrench,
              },
              {
                title: "Hydro Jetting",
                description: "We use high-pressure water to blast away stubborn clogs, grease, and debris, thoroughly cleaning your pipes. This method blasts away the blockage with minimal impact on your plumbing.",
                icon: Zap,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-md sm:shadow-lg border border-gray-200"
              >
                <div className="mb-3 sm:mb-4 inline-flex rounded-lg bg-[#EA5D19] p-2 sm:p-3">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
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
              Our expert plumbers are ready to clear your drains. Call now for fast, reliable service!
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
                href="/quote?category=Drain%20%26%20Sewer%20Services&service=Drain%20Cleaning"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="drainCleaning" subtitle="Common questions about drain cleaning" />
    </>
  );
}
