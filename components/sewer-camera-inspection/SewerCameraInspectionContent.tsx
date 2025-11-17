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
  { name: "Navien", image: "/navien-1.webp" },
  { name: "Rheem", image: "/Rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/Bradford-White-logo-1.webp" },
];

const repairOptions = [
  {
    title: "Hydro Jet Cleaning",
    description: "Hydro-jetting cleaning blasts high-pressure water through your sewer line to clear out tough clogs like grease, debris, or tree roots. It scrubs the pipes clean, helping prevent future blockages while being gentle on your plumbing system. This method is perfect for stubborn obstructions and keeps your drains flowing freely. This is one of our preferred methods we use to restore your sewer line with minimal fuss.",
  },
  {
    title: "Trenchless Sewer Repairs",
    description: "Trenchless sewer solutions let us repair damaged pipes without tearing up your lawn, using methods like pipe lining or bursting to mend pipes from the inside. This approach saves time, reduces mess, and keeps your yard looking great while fixing leaks or cracks. It's a great choice for pipes that need repair but aren't ready for full replacement.",
  },
  {
    title: "Full Sewer Line Replacement",
    description: "If your sewer line is too worn out or damaged to fix, replacing it with new, durable pipes ensures your plumbing works reliably for years. Our team plans the job carefully to limit disruption and get it done efficiently, even for older systems. This solution is best for severely cracked or collapsed lines.",
  },
  {
    title: "Localized Spot Repairs",
    description: "For minor damage, like a small crack or a single area of root intrusion, spot repairs target just the problem area without replacing the whole line. We use camera inspections to find the issue and repair it with minimal digging, saving you time and money. This method works well for isolated problems that don't require major work. We ensure quick, accurate fixes to keep your sewer system in top shape.",
  },
];

const faqs = [
  {
    question: "Is a sewer camera inspection safe for my pipes?",
    answer: "Yes, sewer camera inspections are completely safe and non-invasive, as they don't involve digging or damaging your pipes. The camera simply slides through your plumbing to show us what's wrong. We uses this gentle method to diagnose problems without harming your system. It's a reliable way to get answers without messing up your property.",
  },
  {
    question: "Can a sewer camera inspection find tree roots in my pipes?",
    answer: "Absolutely, sewer camera inspections are great for spotting tree roots that invade sewer lines, which is a common issue in older homes. The camera shows us exactly where roots are growing and how bad the blockage is. Additionally, we can then precisely locate where on your property the tree root intrusion is located with pinpoint accuracy.",
  },
  {
    question: "Will I see the results of the sewer camera inspection?",
    answer: "Yes, we show you the real-time video from the camera so you can see what's happening inside your pipes. Our plumbers explain the findings in plain language, so you understand the problem and our recommended fix. This transparency helps you feel confident about the solution.",
  },
  {
    question: "Why would I need a sewer camera inspection?",
    answer: "If you're dealing with slow drains, frequent clogs, bad smells, or backups, a sewer camera inspection can pinpoint the cause, like tree roots or damaged pipes. It's also great for checking older homes or before buying a new property to avoid surprise repairs.",
  },
  {
    question: "How long does a sewer camera inspection take?",
    answer: "Most sewer camera inspections take about 30 minutes to an hour, depending on the size of your home and the issue's complexity. If repairs are needed, we can often start right away. This keeps disruptions to your day as short as possible.",
  },
  {
    question: "I'm buying a new house should I get a sewer camera inspection?",
    answer: "100% if the house is not brand new. Depending on the severity of your sewer issues having to pay for a sewer repair can be one of the more costly issues a homeowner has to face. Give yourself peace of mind and get a professional camera inspection done so you know the condition of the home you are purchasing.",
  },
  {
    question: "Is a sewer camera inspection worth the cost?",
    answer: "Yes, a sewer camera inspection can save you money by catching small issues before they turn into expensive repairs, like a broken sewer line. It's a precise way to diagnose problems without digging up your yard, which keeps costs down. We use this method to provide accurate fixes that last. It's a smart investment to protect your home's plumbing.",
  },
];

export function SewerCameraInspectionContent() {
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
              Premium Sewer Camera Inspection Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Sewer Camera Inspection
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Do you need a plumbing camera inspection?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are proud to offer high-tech sewer camera inspection services with a focus on honesty and exceptional plumbing expertise. With years of experience, our friendly team uses the latest technology to give you a clear view of what's going on inside your pipes. We show you real-time images so you know exactly what's causing issues with your drains or sewer lines. Our skilled plumbers will find the problems and then provide quick, customized solutions to get your plumbing back on track.
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
                alt="Sewer camera inspection service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Get a Sewer Camera Inspection Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Why Get a Sewer Camera Inspection?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        Got a plumbing problem? Don't let a hidden clog or damaged pipe turn into a major headache. Our sewer camera inspection services let us see exactly what's wrong inside your pipes, so we can fix it fast without guesswork. This saves you time and money by avoiding unnecessary digging or repairs.
        <br /><br />
        A sewer camera inspection is a smart, non-invasive way to check your plumbing. This helps us catch problems early before they become expensive disasters. It's a simple way to keep your plumbing in great shape.
      </p>
    </motion.div>
  </div>
</section>

{/* Why Sewer Camera Inspections Are a Game-Changer Section */}
<section className="bg-gray-50 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-center"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Why Sewer Camera Inspections Are a Game-Changer
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        Sewer camera inspections offer a smart, hassle-free way to keep your plumbing in top shape without disrupting your home. Our approach is minimally invasive, meaning we don't have to dig up your yard or tear up your floors to find the problem, keeping your property clean and intact. With our advanced cameras, we get a clear, real-time view inside your pipes, pinpointing the exact location and cause of issues like clogs or cracks, so we can fix them right the first time without guesswork. Best of all, this technology lets us spot small problems, like early leaks or minor blockages, before they turn into expensive repairs. It's a proactive way to protect your plumbing system and save you money in the long run.
      </p>
    </motion.div>
  </div>
</section>

{/* Common Sewer Line Repair Options */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
        Common Sewer Line Repair Options
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {repairOptions.map((option, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
              <Check className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug">
              {option.title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {option.description}
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
              Schedule an Appointment Today!
            </h2>

            <div className="h-1 w-20 bg-[#FFFF] mx-auto rounded-full mb-8" />

            <p className="text-xl text-white/90 mb-8 max-w-7xl mx-auto">
              Don't wait for a small plumbing issue to become a costly disaster. Contact us today for a professional sewer camera inspection.
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
