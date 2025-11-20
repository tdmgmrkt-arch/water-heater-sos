"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "What cities do you service?",
    answer: "We service the entire Inland Empire including Riverside, San Bernardino, Redlands, Moreno Valley, Corona, Rancho Cucamonga, Ontario, Fontana, and surrounding areas. Contact us to confirm service in your specific location.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed (CA LIC# 1140776) and insured to provide plumbing and water heater services throughout California.",
  },
  {
    question: "Do you offer financing?",
    answer: "Yes, we offer financing options to make your water heater installation or repair more affordable. Contact us for details on available financing plans.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free online quotes and estimates. You can request a free estimate through our website or by calling us at (800) 697-4014.",
  },
  {
    question: "What should I do if my water heater is leaking?",
    answer: "If your water heater is leaking, turn off the water supply and power/gas to the unit immediately. Contact us for same-day emergency service. Our technicians can assess the situation and provide repair or replacement options.",
  },
  {
    question: "What type of water heaters do you install?",
    answer: "We install all types of water heaters including gas water heaters, tankless water heaters, heat pump water heaters, and electric water heaters. We can help you choose the best option for your home and budget.",
  },
  {
    question: "What water heater brands do you work on?",
    answer: "We work on all major water heater brands including Rheem, Bradford White, Rinnai, Navien, AO Smith, and more. Our technicians are trained to service and install all types and brands.",
  },
  {
    question: "Are you open 24/7?",
    answer: "We offer emergency water heater services and same-day appointments. Contact us at (800) 697-4014 to schedule service or for emergency assistance.",
  },
  {
    question: "Do you offer other plumbing services?",
    answer: "Yes! In addition to water heater services, we offer comprehensive plumbing services including drain cleaning, hydro-jetting, leak detection, whole-house repiping, and more.",
  },
];

export function FAQ() {
  return (
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
            Common questions about our water heater and plumbing services
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-gray-50"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
