"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

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

export function WaterFiltrationContent() {
  return (
    <>
      <SetFooterCTA
        title="Need Water Filtration Services?"
        description="Ready to enjoy clean, filtered water throughout your home? Contact us today for a free water quality test and professional installation."
        quoteLink="/quote?category=Water%20Heaters&service=Water%20Filtration%20System%20Installation"
      />
      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: "Water Filtration" },
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Premium Water Filtration Service
              </span>
              <h1 className="text-2xl font-bold text-[#11110E] sm:text-3xl lg:text-5xl mb-3 lg:mb-6">
                Water Filtration
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-3 sm:mb-4">
                Unsure if your tap water is clean and free of unwanted chemicals?
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Tap water can contain various chemicals, such as chlorine, lead, fluoride, pesticides, herbicides, and traces of pharmaceuticals. Some are added for purification, and others may occur naturally or be introduced through environmental contamination.
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-8">
                Having a water filtration system installed in your home is a crucial step toward ensuring the health and well-being of your family. A properly installed system can provide you and your family with bottled water quality from your tap.
              </p>
              <Link
                href="/quote?category=Water%20Heaters&service=Water%20Filtration%20System%20Installation"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sm:hidden">Get Free Quote</span>
                <span className="hidden sm:inline">Schedule an Appointment Today!</span>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl"
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
<section className="py-10 sm:py-14 lg:py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-14"
    >
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
        Important Reasons to Have a Water Filtration System
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
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
<section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center"
    >
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#11110E] mb-3 lg:mb-6">
        Water Quality Testing
      </h2>

      <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-5 sm:mb-8" />

      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
        It's important to note that the presence of these chemicals in tap water can vary widely depending on the location and the water source. Most public water systems are required to test for and remove these contaminants, but the effectiveness of these measures can vary. If you would like a free water quality test let us know so we can get you scheduled for one.
      </p>
    </motion.div>
  </div>
</section>

      {/* Trusted Brands Section */}
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="waterFiltration" subtitle="Common questions about water filtration systems" />
    </>
  );
}
