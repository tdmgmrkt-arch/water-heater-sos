"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Droplets, Gauge, Thermometer, AlertCircle, WrenchIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const brands = [
  { name: "Rheem", image: "/rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/bradford-white-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
];

const reasons = [
  {
    icon: Droplets,
    title: "Leaks Waste Water and Cause Damage",
    description: "A leaky shower can waste gallons of water, raising your utility bills. It can also damage walls, floors, and ceilings, leading to mold and costly repairs. Fixing leaks quickly saves money and protects your home.",
  },
  {
    icon: Gauge,
    title: "Low Water Pressure Slows Your Routine",
    description: "Weak water flow from clogged shower heads or pipes makes showering less effective. Repairs like cleaning mineral buildup or replacing faulty parts restore strong water pressure. This ensures a better shower experience every day.",
  },
  {
    icon: Thermometer,
    title: "Broken Valves Affect Water Temperature",
    description: "Faulty valves can cause sudden changes in water temperature, making showers uncomfortable or unsafe. Repairing or replacing the valve fixes inconsistent hot or cold water. You'll enjoy a consistent, comfortable shower again.",
  },
  {
    icon: AlertCircle,
    title: "Clogged Shower Drains Lead to Backups",
    description: "Slow or clogged drains can cause water to pool in your shower, creating a mess and health hazards. Clearing blockages or fixing drain issues prevents backups and keeps your bathroom clean. Professional repairs ensure proper drainage.",
  },
  {
    icon: WrenchIcon,
    title: "Worn Out Parts Reduce Shower Lifespan",
    description: "Old shower heads, faucets, or seals wear out and cause leaks or poor performance. Repairing or replacing these parts extends your shower's life and improves efficiency. It's a cost-effective way to avoid a full replacement.",
  },
];

const faqs = [
  {
    question: "Why is my shower leaking even when it's turned off?",
    answer: "A leak often comes from a worn out shower valve, cartridge, or seals. Replacing these parts stops the drip and prevents water waste. Leaks can also damage your bathroom if not fixed quickly.",
  },
  {
    question: "How do I know if my shower valve needs replacing?",
    answer: "If your shower leaks, has inconsistent temperatures or has low pressure despite cleaning, the valve may be too worn out. Replacing it fixes these issues and improves shower performance. A plumber can confirm if a replacement is needed.",
  },
  {
    question: "What types of shower valves are there?",
    answer: "Common types include single-handle, dual-handle, and thermostatic valves. Each controls water flow and temperature differently, with thermostatic valves offering precise temperature control. One of our plumbing technicians can recommend the best type for your shower.",
  },
  {
    question: "Can a new shower valve save water?",
    answer: "Modern shower valves, like thermostatic or low-flow models, use less water while maintaining pressure. Upgrading an old valve reduces water bills and helps the environment. Proper installation ensures maximum efficiency.",
  },
  {
    question: "What causes low water pressure in my shower?",
    answer: "Low pressure is usually due to mineral buildup in the shower head or a clogged shower valve. Cleaning or replacing the affected parts restores strong water flow. Sometimes, pipe issues may also need checking.",
  },
  {
    question: "How long does a shower repair take?",
    answer: "Most shower repairs, like fixing a valve or unclogging a drain, take 1-2 hours. Complex issues, like pipe problems, may take longer. Our plumbers work quickly to minimize disruption.",
  },
  {
    question: "When should I replace my shower instead of repairing it?",
    answer: "If your shower has frequent leaks, cracks, or an outdated design that wastes water, replacement is often better. A new shower improves efficiency and refreshes your bathroom. Repairs are best for minor, fixable issues.",
  },
  {
    question: "Why does my shower water temperature keep changing?",
    answer: "A faulty shower valve or cartridge can cause sudden hot or cold water shifts. Repairing or replacing the valve ensures steady, safe temperatures. Old valves may need updating for better performance.",
  },
];

export function ShowerRepairReplacementContent() {
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
              Premium Shower Repair & Replacement Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Shower Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert Shower Solutions for Your Bathroom
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
                alt="Professional shower repair and replacement services"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Main Content Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left"
    >
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Your shower is a big part of your daily routine, but problems like leaks, low water pressure, or an outdated look can make it a hassle. We provide top-notch shower repair and installation services to keep your bathroom working great and looking awesome. Whether you're fixing a drippy shower head, unclogging a drain, or planning a full bathroom remodel, we'll check out the problem and offer solutions that fit your needs. We work fast to stop issues like water damage and make sure your shower has strong, steady water flow. Our goal is to give you a shower that's both functional and stylish, so you can enjoy your bathroom every day.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Regular maintenance and quick repairs help your shower last longer and prevent big plumbing problems. From small fixes like replacing a worn-out faucet to installing a brand-new, modern shower system, our experienced team gets the job done right. We also offer emergency repair services for sudden leaks or clogs, so you're never stuck with a broken shower for long. If your shower looks old, has chips, or just doesn't work well anymore, it might be time for a replacement. A new shower can make your bathroom feel fresh and new, turning it into a space you'll love using. We'll help you pick the perfect shower or bathtub that matches your style and fits your bathroom's setup, from sleek rain shower heads to water saving models.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Our plumbing technicians take care of everything, from removing your old shower to installing the new one with care to avoid leaks or issues. When we're finished, you'll have a beautiful, reliable shower that's built to last. Say goodbye to stains, cracks, or weak water flow, and hello to a shower you'll be excited to use every day!
      </p>
    </motion.div>
  </div>
</section>

{/* Reasons Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Reasons to Repair Your Shower Today
      </h2>
      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="mb-4 inline-flex rounded-full bg-[#EA5D19]/10 p-3">
            <reason.icon className="h-6 w-6 text-[#EA5D19]" />
          </div>
          <h3 className="text-xl font-bold text-[#11110E] mb-3">
            {reason.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {reason.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Shower Valve Section */}
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
        Shower Valve Repair & Replacement Services
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Shower valves are a key part of your shower system, controlling water flow and temperature to make your showers comfortable and safe. When they stop working right, they can cause all sorts of problems that mess up your daily routine. We know how frustrating a broken shower valve can be, so we offer fast, reliable repairs to get your shower working perfectly again. Here's why shower valves are often the top reason showers don't work properly and why fixing them is so important.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        One big issue with shower valves is that they can wear out over time, causing leaks or drips. A faulty valve might let water trickle out even when the shower is off, wasting water and raising your bills. Leaks can also damage your walls or floors, leading to mold and expensive repairs. Our team can replace worn-out parts or the entire valve to stop leaks and keep your bathroom safe.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Another common problem is inconsistent water temperature, which happens when the valve's internal parts, like the cartridge or seals, get old or damaged. This can make your shower suddenly too hot or too cold, which is not only annoying but can also be unsafe, especially for kids or older adults. We fix these issues by repairing or replacing the valve, ensuring you get steady, comfortable water every time you shower.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Shower valves can also cause low water pressure if they're clogged with mineral buildup or debris. This makes your shower feel weak and less effective, dragging out your morning routine. Our plumbers clean or replace the valve to restore strong water flow, so you can enjoy a powerful shower again.
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
              Get a Free Estimate Now!
            </h2>

            <div className="h-1 w-20 bg-[#FFFF] mx-auto rounded-full mb-8" />

            <p className="text-xl text-white/90 mb-8 max-w-7xl mx-auto">
              Don't let shower problems ruin your day. Contact us today for expert shower repair and replacement services.
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
