"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DollarSign, Shield, Star, Award } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description:
      "We will give you an accurate price estimate before work is started. This way, there are no surprises afterward.",
  },
  {
    icon: Shield,
    title: "Best Warranty",
    description:
      "Our labor warranty, on average, is twice as long than most of our competitors.",
  },
  {
    icon: Star,
    title: "5-Star Service",
    description:
      "We have hundreds of 5-star reviews on Google, Yelp, and Facebook. You can rest assured that our commitment to service is our top priority, and it shows.",
  },
  {
    icon: Award,
    title: "Experienced Technicians",
    description:
      "Our team comprises highly trained and professional technicians who deliver exceptional plumbing services.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#11110E] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center">

          {/* Content Column - Left on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col w-full min-w-0 relative z-20"
          >
            {/* Headline - Always first */}
            <div className="mb-3">
              <h2 className="!text-white text-5xl leading-tight font-bold sm:text-4xl">
                Why Choose Water Heater SOS?
              </h2>
            </div>

            {/* Image - Shows here on mobile only (between headline and paragraph) */}
            <div className="block lg:hidden mb-6">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/wh-sos-service-rep.webp"
                  alt="Water Heater SOS professional technician"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Paragraph */}
            <p className="!text-gray-300 text-base leading-normal sm:text-lg mb-6">
              The Inland Empire's most trusted and highest-rated plumbing company that is dedicated to water heaters. We will restore your hot water quickly and with the highest quality standards.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EA5D19]">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="!text-white text-lg font-bold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="!text-gray-300 text-sm leading-normal">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-[#11110E] transition-all"
              >
                Schedule an Appointment Now!
              </a>
            </div>
          </motion.div>

          {/* Image Column - Right on Desktop, Hidden on Mobile (shown inline above) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/wh-sos-service-rep.webp"
                alt="Water Heater SOS professional technician"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
