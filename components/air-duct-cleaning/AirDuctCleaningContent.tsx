"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wind, Phone, Heart, Flame } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function AirDuctCleaningContent() {
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
                Air Duct & Dryer Vent Cleaning
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Professional Vent Cleaning for Safer, Healthier Homes
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Experiencing poor air quality, high energy bills, or slow dryer performance?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Dirty air ducts and clogged dryer vents reduce efficiency, worsen allergies, and create fire hazards. Our expert cleaning services improve indoor air quality, lower energy costs, and protect your home from dangerous lint buildup.
              </p>
              <Link
                href="/quote?category=Gas%20%26%20Other%20Services&service=Air%20Duct%20Cleaning"
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
                  alt="Professional air duct and dryer vent cleaning services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-gray-700">
            <p>
              Your home's air ducts and dryer vents play critical roles in comfort, safety, and efficiency, but over time they accumulate dust, allergens, pet dander, mold spores, and lint that reduce air quality and create hazards. Dirty air ducts circulate contaminants throughout your home with every HVAC cycle, triggering allergies, asthma, and respiratory issues while forcing your heating and cooling systems to work harder, raising energy bills. Professional air duct cleaning removes years of buildup, improving indoor air quality and HVAC efficiency.
            </p>
            <p>
              Clogged dryer vents present even more serious dangers - lint buildup is a leading cause of residential fires, with thousands of dryer fires occurring annually. When lint blocks airflow, your dryer overheats, creating ignition risks while dramatically reducing drying efficiency and increasing energy costs. Signs you need dryer vent cleaning include clothes taking multiple cycles to dry, the dryer feeling hot to touch, burning smells during operation, and lint accumulation around the dryer door or outdoor vent opening.
            </p>
            <p>
              Formerly known as Vent Gator, we've provided professional air duct and dryer vent cleaning services for years, using advanced equipment to thoroughly clean entire vent systems from appliance to exterior exhaust. Our non-invasive methods remove contaminants without damaging ductwork, while our dryer vent cleaning eliminates fire hazards and restores proper airflow. Regular cleaning protects your family's health, prevents fires, extends appliance life, and reduces utility costs. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Professional Vent Cleaning?
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Cleaner air, safer homes, and lower energy costs
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Improve Air Quality",
                description: "Air ducts accumulate dust, pollen, pet dander, mold spores, and other allergens that circulate throughout your home. Professional cleaning removes these contaminants, reducing allergy and asthma symptoms while creating healthier indoor air for your family to breathe.",
                icon: Wind,
              },
              {
                title: "Prevent Dryer Fires",
                description: "Lint buildup in dryer vents causes thousands of house fires annually. Our thorough dryer vent cleaning removes dangerous lint accumulation from the entire vent system, eliminating fire hazards and protecting your home and family from this common but preventable danger.",
                icon: Flame,
              },
              {
                title: "Lower Energy Bills",
                description: "Dirty air ducts force HVAC systems to work harder, while clogged dryer vents extend drying times. Professional cleaning restores proper airflow, improving efficiency dramatically. Your heating, cooling, and dryer will use less energy, reducing monthly utility costs significantly.",
                icon: ArrowRight,
              },
              {
                title: "Healthier Living",
                description: "Clean vents mean cleaner air and safer homes. Removing mold, dust, and allergens from air ducts reduces respiratory issues and allergy symptoms. Clearing dryer vents eliminates fire risks and prevents carbon monoxide buildup. Professional cleaning protects your family's health and safety.",
                icon: Heart,
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
              Don't wait to improve your home's air quality and safety. Contact us today for professional air duct and dryer vent cleaning services.
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
                href="/quote?category=Gas%20%26%20Other%20Services&service=Air%20Duct%20Cleaning"
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
      <FAQ category="airDuctCleaning" subtitle="Common questions about air duct & dryer vent cleaning" />
    </>
  );
}
