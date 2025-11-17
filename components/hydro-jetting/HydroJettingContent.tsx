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
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/Bradford-White-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
  { name: "Rheem", image: "/Rheem_logo-1.webp" },
];

const signs = [
  {
    title: "Sinks, Showers, or Tubs Draining Slowly",
    description: "When water takes forever to drain from your sink, shower, or bathtub, it's often due to buildup like grease, hair, or soap scum clogging the pipes. Hydro-jetting blasts away these blockages, restoring fast drainage. Our team can quickly clear the problem and prevent future slowdowns.",
  },
  {
    title: "Bad Smells Coming From Your Drains",
    description: "Foul odors from your drains can mean trapped food, grease, or other debris is rotting inside your pipes. These smells are a sign of buildup that needs professional plumber. Hydro-jetting cleans the entire pipe, eliminating odors and keeping your drains fresh.",
  },
  {
    title: "Toilets Back Up Instead of Flushing Properly",
    description: "A toilet that backs up or flushes weakly often points to a clog in the drain line or sewer system. This can be caused by debris, roots, or sludge blocking the flow. Hydro-jetting clears these tough blockages effectively, ensuring your toilet works like it should.",
  },
  {
    title: "Gurgling Sounds in Your Pipes",
    description: "Gurgling or bubbling noises from your drains usually mean air is trapped due to a partial blockage in the pipes. This can be an early warning of a bigger problem brewing. Hydro-jetting removes the obstruction, restoring quiet and efficient drainage. We have the tools to fix this before it becomes a major headache.",
  },
  {
    title: "Wet or Smelly Patches on Your Lawn",
    description: "Soggy, smelly spots in your yard can be a sign of a serious sewer line clog or break, often caused by tree roots or heavy debris. These issues can lead to costly damage if not addressed quickly. Hydro-jetting clears out roots and buildup, preventing further leaks or backups.",
  },
];

const faqs = [
  {
    question: "Is hydro-jetting safe for my pipes?",
    answer: "Yes, hydro jetting is safe for most pipes when done by a professional plumber, as it uses only water to clear blockages. Our team assesses your plumbing first to ensure it can handle the pressure. Unlike chemical cleaners, hydro jetting won't corrode or damage your pipes. It's a gentle yet powerful way to clean your drains.",
  },
  {
    question: "When should I consider hydro jetting for my drains?",
    answer: "Hydro-jetting is ideal for slow drains, recurring clogs, bad odors, gurgling pipes, or signs of sewer line issues like wet spots in your yard. It's especially effective for tough blockages caused by grease, roots, or heavy debris. Our plumbers recommend it when other methods, like snaking, aren't enough. We'll diagnose the issue and confirm if hydro-jetting is the best fix.",
  },
  {
    question: "Can hydro jetting prevent future clogs?",
    answer: "Hydro-jetting not only clears current clogs but also scrubs pipe walls clean, reducing buildup that leads to future blockages. The one caveat is if you have a root intrusion. Hydro-jetting will clear away the roots however, if the separation in the pipe isn't properly repaired the roots will eventually group back in about 6 months time.",
  },
  {
    question: "Will hydro jetting work on tree roots in my sewer line?",
    answer: "Hydro-jetting is highly effective at cutting through tree roots that invade sewer lines, especially in older plumbing systems. The high-pressure water breaks up roots and flushes them out, restoring proper flow. For severe root issues, we may pair it with a camera inspection to ensure the problem is fully resolved or to provide a more permanent sewer fix.",
  },
  {
    question: "Is hydro jetting worth the cost?",
    answer: "Yes, it is a cost-effective solution because it thoroughly cleans your pipes, preventing expensive repairs from recurring clogs or sewer backups. It's more efficient and cost-effective than having a plumbing company dig up the area affected and make manual repairs.",
  },
  {
    question: "How long does a hydro-jetting service take?",
    answer: "Most hydro-jetting jobs take 1-2 hours, depending on the clog's severity and the size of your sewer system. Complex sewer line issues might take a bit longer, but our team works efficiently to minimize disruption and ensure your drains are cleared quickly and thoroughly.",
  },
  {
    question: "How does hydro jetting compare to traditional drain snaking?",
    answer: "Hydro-jetting is more thorough than snaking because it clears the entire pipe, not just the clog, by blasting away buildup like grease and hair. While snaking pokes a hole through blockages, hydro-jetting prevents future clogs by cleaning the pipe walls. It's ideal for stubborn or recurring issues with long-lasting results when snaking isn't enough.",
  },
  {
    question: "Do I need to prepare my home for hydro-jetting?",
    answer: "There's minimal prep needed for hydro-jetting, but we recommend clearing the area around the affected drain for easy access. Our plumbers will handle everything else, using specialized equipment to keep your home clean during the process.",
  },
];

export function HydroJettingContent() {
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
              Premium Hydro-Jetting Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Hydro-Jetting
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Need to have hydro-jetting on your home's main sewer line?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Over time, your home's drains can slow down as hair, grease, soap scum, and other debris build up and cause clogs. When that happens, hydro-jetting is a powerful way to clear out blockages and get your drains flowing like new again. If your sinks, showers, or tubs are draining slowly, reach out to us to learn more about our hydro jet cleaning services.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Get a Free Estimate Today!
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
                alt="Hydro-jetting service for drain cleaning"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is Hydro Jet Cleaning Section */}
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
        What Is Hydro-Jet Cleaning?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        Hydro-jetting uses high-pressure water (up to 4,000 PSI) to blast through 
        grease, sludge, roots, scale, and debris inside your drains and sewer line.
        Unlike chemical cleaners or basic snaking — which only temporarily poke a 
        hole — hydro-jetting cleans the **entire pipe wall** for long-lasting results.
        Our professional plumbers insert a slim high-pressure hose and nozzle into 
        your line, sending powerful water streams in multiple directions. This deep 
        cleaning restores your plumbing system to peak performance.
      </p>
    </motion.div>
  </div>
</section>

{/* When Should You Use Hydro-Jetting Section */}
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
        When Should You Use Hydro-Jetting?
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        Hydro-jetting is the recommended solution when traditional drain cleaning tools 
        fail or when you want a **complete and lasting clean**. Chemical cleaners can 
        corrode your pipes, and snaking often leaves debris behind — leading to recurring 
        clogs. Hydro-jetting removes buildup fully, even in older or heavily used plumbing 
        systems.
      </p>
    </motion.div>
  </div>
</section>

{/* Signs Your Drains Need Hydro-Jetting */}
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
        Signs Your Drains Need Hydro-Jetting
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {signs.map((sign, index) => (
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
              {sign.title}
            </h3>
          </div>

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
              Get a Free Estimate Today!
            </h2>

            <div className="h-1 w-20 bg-[#FFFF] mx-auto rounded-full mb-8" />

            <p className="text-xl text-white/90 mb-8 max-w-7xl mx-auto">
              Don't let slow drains or clogs disrupt your day. Contact us for professional hydro-jetting services.
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
