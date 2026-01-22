"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs as faqData, FAQCategory } from "@/data/faqs";

interface FAQProps {
  category?: FAQCategory;
  title?: string;
  subtitle?: string;
}

export function FAQ({ category = "home", title = "Frequently Asked Questions", subtitle }: FAQProps) {
  const faqItems = faqData[category] || faqData.home;

  // Generate FAQPage JSON-LD schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#11110E] lg:text-4xl mb-4 sm:mb-6 lg:mb-8 text-center">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-xl text-gray-600 text-center mb-5 sm:mb-8">{subtitle}</p>
          )}

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-xl sm:rounded-2xl bg-white px-4 sm:px-6 shadow-sm sm:shadow-md border-0"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#11110E] hover:text-[#EA5D19] py-4 sm:py-6 flex items-start justify-between gap-2">
                    <span className="flex-shrink-0 mr-2 text-[#EA5D19] font-bold text-xs sm:text-base">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-grow text-collapse-fix">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-gray-700 pb-4 sm:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
    </>
  );
}
