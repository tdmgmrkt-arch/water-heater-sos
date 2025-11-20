"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, CheckCircle2, Shield, Zap, Timer } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HydroJettingContent() {
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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                Hydro-Jetting Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                High-Pressure Drain & Sewer Line Cleaning
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Need to have hydro-jetting on your home's main sewer line?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Over time, your home's drains can slow down as hair, grease, soap scum, and other debris build up and cause clogs. When that happens, hydro-jetting is a powerful way to clear out blockages and get your drains flowing like new again.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get a Free Estimate
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
                  alt="Hydro-jetting service for drain cleaning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              If your sinks, showers, or tubs are draining slowly, reach out to us to learn more about our hydro jet cleaning services. Hydro-jetting uses high-pressure water (up to 4,000 PSI) to blast through grease, sludge, roots, scale, and debris inside your drains and sewer line.
            </p>
            <p>
              Unlike chemical cleaners or basic snaking — which only temporarily poke a hole — hydro-jetting cleans the entire pipe wall for long-lasting results. Our professional plumbers insert a slim high-pressure hose and nozzle into your line, sending powerful water streams in multiple directions. This deep cleaning restores your plumbing system to peak performance.
            </p>
            <p>
              Hydro-jetting is the recommended solution when traditional <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning</Link> tools fail or when you want a complete and lasting clean. Chemical cleaners can corrode your pipes, and snaking often leaves debris behind — leading to recurring clogs. Hydro-jetting removes buildup fully, even in older or heavily used plumbing systems. We proudly serve homeowners throughout the Inland Empire, including <Link href="/redlands" className="text-[#EA5D19] hover:underline font-semibold">Redlands</Link>, <Link href="/loma-linda" className="text-[#EA5D19] hover:underline font-semibold">Loma Linda</Link>, <Link href="/highland" className="text-[#EA5D19] hover:underline font-semibold">Highland</Link>, and <Link href="/san-bernardino" className="text-[#EA5D19] hover:underline font-semibold">San Bernardino</Link>.
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
              Why Choose Hydro-Jetting?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most effective solution for stubborn drain and sewer line clogs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Deep Cleaning Power",
                description: "Hydro-jetting clears the entire pipe wall, not just the clog. High-pressure water (up to 4,000 PSI) blasts away grease, sludge, roots, scale, and debris that traditional snaking can't remove. This thorough cleaning prevents future clogs and restores your drains to like-new condition.",
                icon: Droplets,
              },
              {
                title: "Safe & Eco-Friendly",
                description: "Unlike harsh chemical drain cleaners that can corrode pipes and harm the environment, hydro-jetting uses only water. It's safe for most pipe materials and won't damage your plumbing system when performed by our professional plumbers.",
                icon: Shield,
              },
              {
                title: "Long-Lasting Results",
                description: "While traditional snaking only pokes a hole through blockages, hydro-jetting completely removes buildup from pipe walls. This comprehensive cleaning means fewer recurring clogs and longer-lasting drainage performance, saving you money on future plumbing repairs.",
                icon: Timer,
              },
              {
                title: "Versatile Solution",
                description: "Hydro-jetting effectively removes tree roots, mineral deposits, grease buildup, and years of accumulated debris. It works on kitchen drains, bathroom drains, main sewer lines, and commercial plumbing systems—making it the most versatile drain cleaning method available.",
                icon: Zap,
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
              Don't let slow drains or clogs disrupt your day. Contact us for professional hydro-jetting services.
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
              Common questions about hydro-jetting services
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Is hydro-jetting safe for my pipes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, hydro jetting is safe for most pipes when done by a professional plumber, as it uses only water to clear blockages. Our team assesses your plumbing first to ensure it can handle the pressure. Unlike chemical cleaners, hydro jetting won't corrode or damage your pipes. It's a gentle yet powerful way to clean your drains.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                When should I consider hydro jetting for my drains?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Hydro-jetting is ideal for slow drains, recurring clogs, bad odors, gurgling pipes, or signs of sewer line issues like wet spots in your yard. It's especially effective for tough blockages caused by grease, roots, or heavy debris. Our plumbers recommend it when other methods, like snaking, aren't enough. We'll diagnose the issue and confirm if hydro-jetting is the best fix.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Can hydro jetting prevent future clogs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Hydro-jetting not only clears current clogs but also scrubs pipe walls clean, reducing buildup that leads to future blockages. The one caveat is if you have a root intrusion. Hydro-jetting will clear away the roots however, if the separation in the pipe isn't properly repaired the roots will eventually group back in about 6 months time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Will hydro jetting work on tree roots in my sewer line?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Hydro-jetting is highly effective at cutting through tree roots that invade sewer lines, especially in older plumbing systems. The high-pressure water breaks up roots and flushes them out, restoring proper flow. For severe root issues, we may pair it with a camera inspection to ensure the problem is fully resolved or to provide a more permanent sewer fix.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Is hydro jetting worth the cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, it is a cost-effective solution because it thoroughly cleans your pipes, preventing expensive repairs from recurring clogs or sewer backups. It's more efficient and cost-effective than having a plumbing company dig up the area affected and make manual repairs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How long does a hydro-jetting service take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most hydro-jetting jobs take 1-2 hours, depending on the clog's severity and the size of your sewer system. Complex sewer line issues might take a bit longer, but our team works efficiently to minimize disruption and ensure your drains are cleared quickly and thoroughly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                How does hydro jetting compare to traditional drain snaking?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Hydro-jetting is more thorough than snaking because it clears the entire pipe, not just the clog, by blasting away buildup like grease and hair. While snaking pokes a hole through blockages, hydro-jetting prevents future clogs by cleaning the pipe walls. It's ideal for stubborn or recurring issues with long-lasting results when snaking isn't enough.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6 bg-gray-50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#EA5D19] transition-colors">
                Do I need to prepare my home for hydro-jetting?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                There's minimal prep needed for hydro-jetting, but we recommend clearing the area around the affected drain for easy access. Our plumbers will handle everything else, using specialized equipment to keep your home clean during the process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
