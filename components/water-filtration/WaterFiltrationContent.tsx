"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
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

const reasons = [
  {
    title: "Removal of Contaminants",
    description: "Tap water can contain various contaminants, such as lead, chlorine, pesticides, and bacteria. A water filtration system effectively removes these harmful substances, providing clean and safe drinking water.",
  },
  {
    title: "Improved Taste and Smell",
    description: "Filtered water tastes and smells better than unfiltered tap water. This is because the filtration process removes the chemicals and impurities that can give tap water an unpleasant taste and odor.",
  },
  {
    title: "Cost-Effective",
    description: "Investing in a water filtration system can save you money in the long run. Instead of buying bottled water, you can access clean, filtered water straight from your tap. This is not only cost-effective but also environmentally friendly.",
  },
  {
    title: "Health Benefits",
    description: "Drinking clean, filtered water can have numerous health benefits. It helps to keep your body hydrated, supports your immune system, and can even improve the appearance of your skin.",
  },
  {
    title: "Protection for Your Home",
    description: "Certain contaminants in your water supply can damage your home's pipes and appliances. A water filtration system can help prevent this by removing these harmful substances before they cause damage.",
  },
];

const faqs = [
  {
    question: "What is a water filtration system, and how does it work?",
    answer: "A water filtration system is designed to remove impurities and contaminants from water, making it safe and pleasant to drink. It passes water through a series of filters, each designed to remove specific contaminants.",
  },
  {
    question: "What are the benefits of having a water filtration system?",
    answer: "There are several benefits to having a water filtration system. These include improved taste and odor of the water, removal of harmful contaminants, and protection of pipes and appliances from damage caused by these contaminants.",
  },
  {
    question: "How often should I replace the filters in my water filtration system?",
    answer: "The frequency of filter replacement depends on several factors, including the type of filter, the quality of your water, and the amount of water you use. Generally, it's recommended to replace filters every 3 to 6 months.",
  },
  {
    question: "Can a water filtration system remove all contaminants from my water?",
    answer: "While a water filtration system can remove many contaminants, it may not be able to remove all of them. The effectiveness of a system depends on its design and the type of contaminants present in your water.",
  },
  {
    question: "How much does a water filtration system cost?",
    answer: "The cost varies depending on the type, size, and features of the system. The most economical is an under-sink system, while a whole-house system can cost several thousand dollars.",
  },
  {
    question: "What is the difference between a water softener and a water filtration system?",
    answer: "While water softeners and water filters improve your water's quality, they serve different purposes. A water softener is designed to remove minerals that cause water hardness, such as calcium and magnesium. This helps to prevent limescale buildup in pipes and appliances and can improve the efficiency of your water heater.\n\nHowever, a water softener does not remove contaminants like bacteria, chemicals, or heavy metals. A water filter, on the other hand, is designed to remove these contaminants, making your water safer and more pleasant to drink.",
  },
];

export function WaterFiltrationContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-20 sm:pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 sm:px-4 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Premium Water Filtration Service
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#11110E] lg:text-6xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">Whole Home </span>Water Filtration
              </h1>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Unsure if your tap water is clean and free of unwanted chemicals?
              Tap water can contain various chemicals, such as chlorine, lead, fluoride, pesticides, herbicides, and traces of pharmaceuticals. Some are added for purification, and others may occur naturally or be introduced through environmental contamination.
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Having a water filtration system installed in your home is a crucial step toward ensuring the health and well-being of your family. A properly installed system can provide you and your family with bottled water quality from your tap.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sm:hidden">Get Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment Today!</span>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[280px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/water-filtration-system.webp"
                alt="Water filtration system installation service"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Important Reasons Section */}
<section className="py-10 sm:py-16 lg:py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-14"
    >
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#11110E] mb-4 sm:mb-6">
        Important Reasons to Have a Water Filtration System
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-4 sm:gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-[#11110E] flex-1 leading-snug">
              {reason.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {reason.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Water Quality Note Section */}
<section className="bg-gray-50 py-10 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center"
    >
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#11110E] mb-4 sm:mb-6">
        Water Quality Testing
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-6 sm:mb-8" />

      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
        It's important to note that the presence of these chemicals in tap water can vary widely depending on the location and the water source. Most public water systems are required to test for and remove these contaminants, but the effectiveness of these measures can vary. If you would like a free water quality test let us know so we can get you scheduled for one.
      </p>
    </motion.div>
  </div>
</section>

      {/* Trusted Brands Section */}
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-7xl text-center relative z-20"
          >
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-6 sm:mb-8">
              Trusted Brands
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-6 sm:mb-8" />

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5 items-center relative z-20 min-h-[80px] sm:min-h-[120px]">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative h-14 w-20 sm:h-20 sm:w-28 mx-auto z-20">
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
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-2 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600">
              Common questions about water filtration systems
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 sm:px-6 bg-gray-50">
                <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-[#EA5D19] transition-colors py-3 sm:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed whitespace-pre-line pb-3 sm:pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Schedule an Appointment Today!
            </h2>

            <div className="h-1 w-16 sm:w-20 bg-[#FFFF] mx-auto rounded-full mb-6 sm:mb-8" />

            <p className="text-sm sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-7xl mx-auto">
              Ready to enjoy clean, filtered water throughout your home? Contact us today for a free water quality test and professional installation.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sm:hidden">Get Free Quote</span>
              <span className="hidden sm:inline">Request Your Free Quote</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
