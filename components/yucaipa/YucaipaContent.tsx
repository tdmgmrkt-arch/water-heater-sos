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

const plumbingServices = [
  {
    title: "Water Heater Repair and Replacement",
    description: "If your water heater is leaking or not heating, we'll figure out the problem and fix or replace it to get your hot water back fast.",
    link: "/gas-water-heaters",
  },
  {
    title: "Leaky Faucet Fixes",
    description: "A dripping faucet wastes water and money. We repair or replace faulty parts to stop leaks and save you cash.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Clogged Drain Clearing",
    description: "Slow or blocked drains from hair, grease, or soap are no match for our tools. We clear clogs to keep water flowing smoothly.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Repairs",
    description: "A running or clogged toilet can be frustrating and wasteful. We fix valves, seals, or blockages to get your toilet working right.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Pipe Repairs and Replacements",
    description: "Leaky or broken pipes can damage your home. We repair or replace them to prevent water loss and costly repairs.",
    link: "/plumbing",
  },
  {
    title: "Low Water Pressure Solutions",
    description: "Hard water buildup or pipe issues can weaken water flow. We find the cause and boost your water pressure.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Services",
    description: "A backed-up sewer line can cause messy, smelly problems. We clear or repair lines to keep your plumbing system running.",
    link: "/sewer-camera-inspection",
  },
  {
    title: "New Fixture Installations",
    description: "Need a new faucet, toilet, or showerhead? We install high-quality fixtures to upgrade your home's plumbing.",
    link: "/plumbing",
  },
];

const waterHeaterIssues = [
  {
    title: "Unpleasant Water Odor or Smell",
    description: "If you notice a strong, unpleasant odor emanating from your hot water, it may be due to bacteria in the water heater tank. This issue can be addressed by flushing and disinfecting the tank. This process involves draining the tank, filling it with water, hydrogen peroxide, or vinegar, and flushing it out again. Regular maintenance and cleaning of your water heater can help prevent the growth of bacteria and keep your water smelling fresh.",
  },
  {
    title: "Leaking Storage Tank or Connections",
    description: "A leaking water heater can cause significant damage to your home if not addressed promptly. If you notice water pooling around the base of your water heater, it could be due to a leak in the tank itself or in the connections. In some cases, tightening the connections can resolve the issue. However, if the tank is leaking, it may need to be replaced. It's crucial to address a leaking water heater immediately to prevent further damage and ensure your home's safety.",
  },
  {
    title: "Reduced Hot Water Supply or Low Water Pressure",
    description: "If you're experiencing a reduced hot water supply or low water pressure, it could be due to a variety of factors. These include a malfunctioning heating element, a clogged or blocked pipe, or a faulty thermostat. A professional plumber can diagnose the issue and recommend the appropriate course of action. Regular maintenance of your water heater can help prevent these issues and ensure a consistent supply of hot water.",
  },
  {
    title: "Dirty or Rusty Water",
    description: "If your hot water appears dirty or rusty, it could be due to sediment buildup in the tank or corrosion. This can be addressed by flushing the tank to remove the sediment and replacing the anode rod, which helps to prevent corrosion. If the tank is severely corroded, it may need to be replaced. Regular maintenance and flushing of your water heater can help prevent sediment buildup and corrosion.",
  },
  {
    title: "Pilot Light Issues",
    description: "If the pilot light on your natural gas water heater doesn't light or stays lit, it could be due to a faulty thermocouple or a clogged pilot tube. A professional plumber can address these issues. Regular water heater maintenance can prevent pilot light issues and ensure its safe and efficient operation.",
  },
];

const faqs = [
  {
    question: "What brands of water heaters do you work on?",
    answer: "No matter the nature of your water heater needs, our extensive range of services ensures that we have you covered. From water heater installation and replacement to maintenance, repair, and emergency services, our team of experts is equipped to handle all aspects of water heater care. We proudly service a wide array of water heater brands, including Rheem, AO Smith, Bradford White, Kenmore, State, Whirlpool, and many more. Our commitment to excellence and customer satisfaction is unwavering and is reflected in our ability to provide top-quality services for a diverse range of water heater brands.",
  },
  {
    question: "What's the difference between a tank water heater and a tankless water heater?",
    answer: "Their operational principles distinguish between a tankless water heater and a traditional storage tank model. A traditional water heater is equipped with a tank that stores a predetermined volume of water, which it continuously heats to provide hot water whenever needed. In contrast, a tankless water heater employs a heating element that the water flows over only when hot water is required, heating the water on demand.",
  },
  {
    question: "What is the average cost to replace a water heater in Yucaipa, CA?",
    answer: "We provide free online estimates for water heater replacements in Yucaipa. To get started, please provide some information via our online estimate form, including pictures and some basic information about your current system. The cost of water heater services in Yucaipa depends on the specific service required. For replacement services, the price can vary even more widely, starting at around $1,500 for a smaller basic model and going up to $6,500 or more for high-end, energy-efficient tankless models. Factors influencing the cost include the type of water heater (tankless or traditional), its size, the complexity of the installation, and whether any additional plumbing or electrical work is needed.",
  },
  {
    question: "How long should a hot water heater last in Yucaipa?",
    answer: "Yucaipa has hard water which is harsher on a water heater and all your plumbing fixtures. Determining when to replace your water heater can be crucial for maintaining a consistent hot water supply in your home. The lifespan of a high-quality hot water tank typically ranges from 7 to 15 years, contingent upon proper installation and regular maintenance. An early indicator that it's time for a replacement is if your hot water temperature has significantly decreased, only reaching lukewarm levels. While this may seem like a relatively short lifespan, it's essential to consider that your hot water tank operates continuously, 24 hours a day, 365 days a year.",
  },
  {
    question: "Do tankless water heaters require maintenance?",
    answer: "Regular water heater maintenance is crucial to ensure a continuous hot water supply and prevent potential issues. Over time, sediment can accumulate in the system, primarily consisting of naturally occurring minerals. These minerals are more prevalent in hard water, exacerbating the buildup. To mitigate this, it's advisable to flush your water heater at least once a year or more frequently if you have hard water. Neglecting maintenance can lead to a buildup of mineral scale, which can significantly reduce your water heater's efficiency and potentially shorten its lifespan.",
  },
  {
    question: "Do your Yucaipa plumbers only work on water heaters?",
    answer: "Don't let our name trick you. Water Heater SOS does way more than just water heaters! We tackle all sorts of plumbing repairs, like fixing leaky faucets, clearing clogged drains, repairing pipes, toilets, showers, and garbage disposals. Of course, we're experts at installing and fixing gas, electric, and tankless water heaters too. Our friendly team is here to solve your plumbing problems quickly and keep your home running smoothly.",
  },
];

export function YucaipaContent() {
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
                Yucaipa Plumbing Experts
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Yucaipa Plumbing Services & Water Heater Repair
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Do You Need a Plumber in Yucaipa?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Water Heater SOS, we&apos;re not just about water heaters anymore—we&apos;ve expanded to handle all plumbing repairs and installations in Yucaipa, CA! Our skilled team is dedicated to fixing your plumbing problems, from dripping faucets to clogged drains, and making sure everything works perfectly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We focus on giving you top-notch service, tailored to your needs, so your home&apos;s plumbing runs smoothly and efficiently. With our commitment to customer satisfaction, you can trust us to put you first and deliver reliable solutions every time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Hot water is something we all rely on, but when your water heater starts acting up, it can mess up your whole day. A leaky water heater, one that won&apos;t stay lit, or one that doesn&apos;t heat well can leave you with cold showers and a big headache. That&apos;s where we come in!
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
                src="/wh-sos-service-rep.webp"
                alt="Yucaipa plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Plumbing Services Section */}
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
              Common Plumbing Services in Yucaipa
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our experienced technicians in Yucaipa are experts at diagnosing, repairing, and replacing all types of water heaters—gas, electric, or tankless. But our services don&apos;t stop there. We now fix a wide range of plumbing issues to keep your home in great shape.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {plumbingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link
                  href={service.link}
                  className="flex flex-col h-full rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug group-hover:text-[#EA5D19] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hard Water Problems Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-center max-w-4xl"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
              Hard Water Problems in Yucaipa?
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Yucaipa&apos;s hard water can be tough on your plumbing, especially water heaters. The minerals in the water build up in pipes and tanks, causing clogs, corrosion, and shorter equipment life. Our team knows how to tackle these issues.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We can install water softeners to reduce mineral buildup, protect your plumbing, and make your water heater last longer. This saves you from frequent repairs and keeps your system running efficiently.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When you choose Water Heater SOS, you&apos;re getting a team that&apos;s friendly, reliable, and ready to work. We show up on time, explain the problem in a way that&apos;s easy to understand, and use high-quality parts to ensure our repairs last. Whether we&apos;re fixing a leaky pipe, installing a new toilet, or replacing a water heater, we clean up after ourselves and leave your home neat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common Water Heater Issues Section */}
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
              Common Water Heater Issues
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {waterHeaterIssues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full flex flex-col rounded-2xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#11110E] flex-1 leading-snug">
                    {issue.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {issue.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Schedule an Appointment Today!
            </h2>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Get Free Estimate
            </Link>
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
            className="mx-auto max-w-5xl"
          >
            <h2 className="text-5xl font-bold text-[#11110E] sm:text-4xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
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
                    <AccordionTrigger className="text-left font-semibold text-[#11110E] hover:text-[#EA5D19] py-6">
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
    </>
  );
}
