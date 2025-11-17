"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Droplets, AlertCircle, WrenchIcon, DollarSign, Zap, AlertTriangle } from "lucide-react";
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
    icon: Droplets,
    title: "Constant Running",
    description: "A toilet that runs non-stop often has a worn out flapper, fill valve, or float. Replacing the toilet eliminates ongoing water waste and high bills.",
  },
  {
    icon: AlertCircle,
    title: "Frequent Clogs",
    description: "Older toilets with weak flush systems clog often. A new model with stronger flushing power prevents blockages and frustration.",
  },
  {
    icon: AlertTriangle,
    title: "Leaks",
    description: "Cracks in the tank, base, or supply line cause water damage and mold growth. Replacing the toilet stops leaks and protects your bathroom.",
  },
  {
    icon: WrenchIcon,
    title: "Wobbling or Instability",
    description: "Loose or broken bolts make a toilet unsteady, risking cracks or leaks. A new, securely installed toilet ensures stability.",
  },
  {
    icon: DollarSign,
    title: "Outdated Design",
    description: "Older toilets use more water and lack modern efficiency. Upgrading to a water-saving model reduces utility costs and environmental impact.",
  },
  {
    icon: Zap,
    title: "Cracks or Damage",
    description: "Visible cracks in the porcelain can worsen, leading to leaks or complete failure. Replacing a damaged toilet prevents costly repairs.",
  },
];

const faqs = [
  {
    question: "How do I know if my toilet needs repair or replacement?",
    answer: "A toilet that constantly runs, clogs frequently, leaks, or wobbles may need repair. If the issues persist or the toilet is old and inefficient, replacement is often more cost-effective. Severe damage, like cracks, usually requires a new toilet.",
  },
  {
    question: "What causes a toilet to run constantly?",
    answer: "A constantly running toilet is often due to a faulty flapper, fill valve, or float that fails to stop water flow. Worn-out parts need repair or replacement. In some cases, sediment buildup in the tank can also cause issues.",
  },
  {
    question: "How can I tell if my toilet is leaking?",
    answer: "Check for water around the base, wet floors, or a bigger water bill. If water keeps trickling in the bowl, the tank might be leaking. One of our professional plumbers can diagnose and fix the source.",
  },
  {
    question: "Can a wobbling toilet be fixed, or does it need replacement?",
    answer: "A wobbly toilet can sometimes be fixed by tightening bolts or leveling it. If the base or pipes are broken, you'll need a new toilet to stop leaks.",
  },
  {
    question: "Are water saving toilets worth installing?",
    answer: "Water saving toilets use less water, which lowers your bill and helps the environment. They flush just as well as old ones. You'll save money over time.",
  },
  {
    question: "What do I do if my toilet overflows?",
    answer: "Turn off the water valve behind the toilet to stop it. Don't flush again until the clog is gone or a plumber checks it. A pro can fix it without making a mess.",
  },
  {
    question: "Why is my toilet's flush so weak?",
    answer: "A weak flush can happen from clogged holes, a broken flush valve, or low water in the tank. Buildup in the pipes might also be the problem. A pro can clean or fix it.",
  },
];

export function ToiletRepairReplacementContent() {
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
              Premium Toilet Repair & Replacement Service
            </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Toilet Repair & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Upgrade Your Bathroom with a New Toilet Installation
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
                alt="Professional toilet repair and replacement services"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Upgrade Your Bathroom Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto text-left"
    >
      <p className="text-lg text-gray-700 leading-relaxed">
        A new toilet can completely change your bathroom, making it look fresh and modern. Our skilled plumbing technicians offer fast, reliable toilet installation services to help you enjoy your upgrade quickly. We're dedicated to keeping the process easy and stress-free, so you can start loving your new bathroom right away. Whether you choose a water-saving model or a sleek design, we ensure a perfect installation every time.
      </p>
    </motion.div>
  </div>
</section>

{/* Toilet Installation Services Section */}
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
        Toilet Installation Services Near You
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed">
        While installing a toilet might seem like a simple DIY project, it's best left to professionals. Proper installation requires specialized tools and know-how to ensure your toilet is secure and leak-free. A poorly installed toilet can lead to water damage, an unsteady fixture, or even harm to your new toilet. We can install any toilet type, including one-piece, two-piece, waterless, gravity-fed, wall-mounted, or double-cyclone models. We'll give you a clear, customized quote based on your chosen toilet.
      </p>
    </motion.div>
  </div>
</section>

{/* Toilet Repair Services Section */}
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
        Toilet Repair Services
      </h2>

      <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Toilets can cause all kinds of problems, like constant running, weak flushes, leaks that harm your bathroom, or strange gurgling sounds. Our experienced plumbers quickly find the issue and fix it, whether it's a clogged drain, a broken flapper, or a faulty fill valve. We also inspect for things like low water pressure or worn-out parts to make sure your toilet works like it should. Regular check-ups can help avoid trouble, but we're always ready to handle major repairs when they pop up.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        A backed-up or overflowing toilet can be a huge headache, especially if it happens late at night or during a busy day. Our team is available for emergency toilet repairs, so you're never left dealing with a mess for long. We act fast to clear clogs, stop leaks, and prevent water damage to your home, getting your bathroom back to normal as soon as possible. Whether it's a small fix or a big problem, we use top-quality tools and parts to ensure your toilet stays reliable.
      </p>
    </motion.div>
  </div>
</section>

{/* Signs Section */}
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
        Signs Your Toilet Needs Repair
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
              Don't let toilet problems disrupt your home. Contact us today for expert toilet repair and replacement services.
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
