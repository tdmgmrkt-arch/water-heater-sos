"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const brands = [
  { name: "Rheem", image: "/Rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/Bradford-White-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
];

const faqs = [
  {
    question: "What are the signs of a gas leak in my home?",
    answer: "Common signs include a rotten egg or sulfur smell, hissing or whistling noises near gas lines, dead or discolored plants near gas lines, higher than usual gas bills, or your carbon monoxide detector going off. Physical signs like condensation or frost on gas lines indicate a leak.",
  },
  {
    question: "What should I do if I suspect a gas leak?",
    answer: "If you suspect a gas leak, immediately evacuate everyone from the building, including pets. Do not use any electrical switches or appliances or light a flame, as these could ignite the gas. Once you are safely away, call 911 or your local emergency services, then contact your gas company from a safe distance.",
  },
  {
    question: "Can a gas leak be fixed without professional help?",
    answer: "No, gas leaks should never be fixed without the help of a professional plumber. Gas line repairs require specialized knowledge, tools, and safety protocols to ensure they are done safely and correctly. Attempting repairs yourself can lead to dangerous situations or incomplete fixes that could cause future leaks.",
  },
  {
    question: "How often should gas lines be inspected?",
    answer: "It's advisable to have your gas lines inspected annually or biennially by a professional, even if you haven't noticed any issues. Regular inspections can catch potential problems before they become serious leaks. However, if you're undertaking major home renovations or have recently experienced a gas leak, more frequent checks might be necessary.",
  },
  {
    question: "What should I do if my gas detector goes off?",
    answer: "If your gas detector alarms, do not ignore it. Immediately evacuate your home, avoid using any electrical devices, and do not light any flames. From a safe location outside, call emergency services and your gas provider. Only return to your home once it has been declared safe by professionals.",
  },
];

export function GasLeakRepairsContent() {
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
              Premium Gas Leak Repair Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Gas Leak Repair & Gas Line Installation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Protect Your Family and Avoid Gas Leaks with Professional Gas Line Repair
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Do you suspect you have a gas leak and need a repair?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Did the SoCal Gas Company shut your gas off due to a gas leak?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We will dispatch one of our professional plumbers to find the gas leak and make the necessary repairs to make your home safe again.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Gas lines are a vital component of your home. They power essential appliances like your fireplace, stove, and water heater to ensure your home remains warm and comfortable. They are also crucial for outdoor amenities such as kitchens, grills, and swimming pools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Water Heater SOS, our team of skilled plumbing technicians is ready to address all your gas line needs inside and outside your home. Whether you require repairs or a complete replacement, our experts guarantee that your gas piping system meets all safety codes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Don't risk the dangers of gas leaks. Choose Water Heater SOS, the Inland Empire's top choice for gas leak repair. We fix leaks in Redlands, Yucaipa, Loma Linda, Highland, San Bernardino, Fontana, Ontario, Rialto, Colton, and Riverside cities. Contact us today to secure the safety and comfort of your home.
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
                src="/placeholderimage.webp"
                alt="Gas leak repair and gas line installation service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Detecting a Gas Leak Early Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Detecting a Gas Leak Early is Crucial for Safety
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Early detection of a gas leak is essential for the safety of your household. Look out for signs like cool gas lines, condensation, or ice forming around the gas lines. Other indicators include:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700">
        <li>A hissing sound from gas appliances.</li>
        <li>The presence of a foul gas odor.</li>
        <li>Your carbon monoxide detectors activating.</li>
      </ul>

      <p className="text-lg text-gray-700 leading-relaxed">
        Ensure you have carbon monoxide detectors installed, especially in sleeping areas, where they can serve as critical early warning systems. If you suspect a leak, do not use any electrical devices or start your vehicle, as these actions could ignite the gas. Evacuate the area immediately, then contact the authorities and your gas provider.
      </p>
    </motion.div>
  </div>
</section>

{/* Gas Line Issues Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Professional Gas Line Repair
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Gas line issues can manifest as obvious or subtle signs requiring a professional's touch to diagnose. If you observe any of the following, do not hesitate to call Water Heater SOS:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700">
        <li>Bent or weakened lines</li>
        <li>Broken pipe connections</li>
        <li>Cracked gaskets</li>
        <li>Clogged gas lines</li>
      </ul>

      <p className="text-lg text-gray-700 leading-relaxed">
        Act swiftly to keep your home safe by contacting Water Heater SOS for prompt and expert service.
      </p>
    </motion.div>
  </div>
</section>

      {/* Trusted Brands Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-7xl text-center relative z-20"
          >
            <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-8">
              Trusted Brands
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 items-center relative z-20 min-h-[120px]">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative h-20 w-28 mx-auto z-20">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} logo - trusted water heater brand`}
                      fill
                      sizes="100px"
                      className="object-contain z-20"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-2xl bg-white px-6 shadow-md border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[#11110E] hover:text-[#EA5D19] py-6 flex items-start justify-between gap-2">
                      <span className="flex-shrink-0 mr-2 text-[#EA5D19] font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-grow text-collapse-fix">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Schedule an Appointment Today!
            </h2>

            <div className="h-1 w-20 bg-[#FFFF] mx-auto rounded-full mb-8" />

            <p className="text-xl text-white/90 mb-8 max-w-7xl mx-auto">
              Don't wait when it comes to gas leaks. Contact us immediately for emergency gas leak repair and gas line installation services.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Request Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
