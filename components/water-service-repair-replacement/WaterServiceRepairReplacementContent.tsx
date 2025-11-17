"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, DollarSign, Droplets, Gauge, FileWarning, Home } from "lucide-react";
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

const signs = [
  {
    icon: DollarSign,
    title: "Unexpectedly High Water Bills",
    description: "If your water bill suddenly spikes without you using more water, it could mean a leak in your water service line. Even a small leak can waste thousands of gallons of water, driving up costs. Checking your water meter for unusual activity can help confirm the issue.",
  },
  {
    icon: Droplets,
    title: "Wet or Soggy Spots in Your Yard",
    description: "Damp patches, muddy areas, or greener than usual grass in your yard, especially near the water meter, might indicate a leaking service line. The escaping water soaks the ground, even during dry weather. These spots can damage your lawn or attract pests if not fixed.",
  },
  {
    icon: Gauge,
    title: "Low Water Pressure in Your Home",
    description: "A leak in the water service line can reduce the amount of water reaching your faucets, causing weak pressure in showers or sinks. This happens because water is escaping before it gets to your home. If cleaning fixtures doesn't help, the line may need repair.",
  },
  {
    icon: FileWarning,
    title: "Discolored or Dirty Water",
    description: "If your tap water looks brown, cloudy, or has sediment, a damaged water service line might be letting dirt or rust into your water supply. This can also affect water taste and safety. One of our plumbing technicians can check if a leak is the cause and fix it quickly.",
  },
  {
    icon: Home,
    title: "Cracks in Your Driveway or Foundation",
    description: "A major leak can weaken the soil under your driveway or home, causing cracks or sinking. This happens when leaking water erodes the ground over time. Fixing the leak early prevents costly structural damage to your property.",
  },
];

const faqs = [
  {
    question: "How do I know if my water service line is leaking?",
    answer: "Signs include high water bills, soggy yard patches, low water pressure, or discolored water. You might also notice cracks in your driveway or foundation. A plumber can inspect the line to confirm a leak.",
  },
  {
    question: "What causes a water service line to leak?",
    answer: "Leaks can happen due to aging pipes, corrosion, tree root intrusion, or ground shifts. Older materials like galvanized steel are more prone to breaking down. Freezing temperatures can also crack pipes.",
  },
  {
    question: "How long does it take to repair a water service line?",
    answer: "Most spot repairs take a few hours, depending on the leak's location and severity. Complex issues or full replacements may take a day or more. Professionals work to minimize water shutoff time.",
  },
  {
    question: "When should I replace my water service line instead of repairing it?",
    answer: "If your pipe is old, corroded, or has multiple leaks, replacement is often better than patching. New pipes, like copper or PVC, last longer and prevent future problems. Our plumbers can assess if a replacement is needed.",
  },
  {
    question: "How much does it cost to replace a water service line?",
    answer: "Costs vary based on pipe length, material, and labor. Minor repairs are cheaper, but full replacements cost more due to digging and installation. One of our plumbing technicians can provide a detailed estimate after inspection.",
  },
  {
    question: "Can a leaky water service line affect my water quality?",
    answer: "Yes, a damaged line can let dirt, bacteria, or rust into your water, causing cloudy or bad tasting water. Fixing the leak restores clean, safe water. Regular inspections help catch issues early.",
  },
  {
    question: "What happens if I ignore a water service line leak?",
    answer: "Ignoring a leak can lead to water waste, higher bills, and damage to your yard or home's foundation. It may also cause water contamination or complete water loss. Quick repairs prevent bigger, costlier issues.",
  },
  {
    question: "Why is my water pressure low even after checking my fixtures?",
    answer: "A leak or blockage in the water service line could be reducing water flow to your home. Corrosion or tree roots may also restrict the pipe. One of our professional plumbers can diagnose and fix the problem.",
  },
];

export function WaterServiceRepairReplacementContent() {
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
              Premium Water Service Repair & Replacement
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Water Service Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert Water Service Line Solutions for Your Home
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
                alt="Professional water service line repair and replacement"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* What Is a Water Service Section */}
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
        What Is a Water Service?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        Your home's water service line is the pipe that brings fresh water from the city's water supply into your house, making sure you have water for drinking, cooking, showering, and more. If this pipe gets damaged, clogged, or old, it can cause low water pressure, leaks, or even no water at all, which can mess up your daily routine. We offer expert repair and replacement services for water service lines to keep your water flowing smoothly. Whether it's fixing a leak, clearing a blockage, or installing a new pipe, our skilled plumbers work fast to prevent water waste and protect your home from damage.
      </p>
    </motion.div>
  </div>
</section>

{/* Why You Should Repair Section */}
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
        Why You Should Repair a Leaky Water Service Line Right Away
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Fixing a leak in your water service line quickly is crucial because even a small leak can waste thousands of gallons of water, spiking your bills and harming the environment. Leaks can also damage your yard, driveway, or home's foundation, leading to costly repairs. If left unchecked, a leaky pipe might contaminate your water supply with dirt or bacteria, putting your family's health at risk. Waiting too long can turn a small problem into a major one, so fast action is key.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Spot repairs, like patching a single leak, might seem cheaper at first, but they're often just a temporary fix, especially on old pipes. Aging pipes made of materials like galvanized steel or lead can corrode, crack, or get clogged with tree roots, leading to more leaks down the road. Replacing the whole water service line with modern materials like copper or Schedule 80 pipe ensures better water flow, fewer problems, and a longer-lasting system. A full replacement saves you money and stress in the long run by preventing repeated repairs.
      </p>
    </motion.div>
  </div>
</section>

{/* Signs of a Leak Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Signs of a Leak in Your Home's Water Service Line
      </h2>
      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {signs.map((sign, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="mb-4 inline-flex rounded-full bg-[#EA5D19]/10 p-3">
            <sign.icon className="h-6 w-6 text-[#EA5D19]" />
          </div>
          <h3 className="text-xl font-bold text-[#11110E] mb-3">
            {sign.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {sign.description}
          </p>
        </motion.div>
      ))}
    </div>
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
              Don't let a leaky water service line damage your home. Contact us today for expert repair and replacement services.
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
