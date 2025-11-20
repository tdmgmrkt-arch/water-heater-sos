"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wind, Phone, Heart, Flame } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AirDuctCleaningContent() {
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
                Professional Vent Cleaning For Safer, Healthier Homes
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Air Duct & Dryer Vent </span>Cleaning
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Experiencing poor air quality, high energy bills, or slow dryer performance?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Dirty air ducts and clogged dryer vents reduce efficiency, worsen allergies, and create fire hazards. Our expert cleaning services improve indoor air quality, lower energy costs, and protect your home from dangerous lint buildup.
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
                  src="/wh-sos-service-rep.webp"
                  alt="Professional air duct and dryer vent cleaning services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
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
              Why Choose Professional Vent Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cleaner air, safer homes, and lower energy costs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              Don't wait to improve your home's air quality and safety. Contact us today for professional air duct and dryer vent cleaning services.
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
              Common questions about air duct & dryer vent cleaning
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How often should I have my dryer vent cleaned?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We recommend dryer vent cleaning at least once a year. However, if you do a lot of laundry, have a large family, or notice your dryer taking longer to dry clothes, you may need more frequent cleanings. Regular cleaning prevents lint buildup, reduces fire risk, and improves dryer efficiency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                What are the signs that my air ducts need cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Common signs include visible dust buildup around vents, musty odors when your HVAC system runs, increased allergy symptoms, inconsistent airflow between rooms, and higher energy bills. If you've recently moved into a new home or completed renovations, it's also a good time for professional air duct cleaning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Will air duct cleaning help with my allergies?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, professional air duct cleaning significantly improves indoor air quality by removing dust, pollen, pet dander, mold spores, and other allergens that accumulate in your HVAC system. This can help reduce allergy symptoms and create a healthier living environment for you and your family.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Do you offer both dryer vent cleaning and air duct cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, we offer both services. Formerly known as Vent Gator, we've provided professional vent cleaning for years. Our skilled technicians deliver reliable, professional service with transparent pricing and no hidden fees. Whether you need air duct or dryer vent cleaning, we're your local experts dedicated to keeping your home safe and efficient.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
