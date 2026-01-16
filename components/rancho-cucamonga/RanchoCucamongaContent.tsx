"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Wrench, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";

export function RanchoCucamongaContent() {
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
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-white text-sm font-semibold mb-4">
                Serving Rancho Cucamonga, CA
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Rancho Cucamonga – Plumbing & Water Heater Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                5-Star Rated Plumbers in Rancho Cucamonga, CA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Water Heater SOS is your go‑to plumber in Rancho Cucamonga for all your <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater repairs</Link>, <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning</Link>, and general plumbing needs. We're here to make your life easier, whether it's a broken pipe, a clogged drain, or a <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heater installation</Link>. Our friendly Rancho Cucamonga plumbers are ready to tackle any job.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
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
                  alt="Professional plumber in Rancho Cucamonga"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We know how frustrating it is when your water heater stops working. No hot water for showers, dishes, or laundry can throw off your entire day. That's why we specialize in fast, reliable <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater repair</Link> for <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas water heaters</Link>, electric models, and <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless water heaters</Link>. If your water heater is leaking, making strange noises, or just not heating water like it should, give us a call. We'll diagnose the problem and get it fixed quickly. And if your old water heater is beyond repair, we also offer <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">water heater installation services</Link> to upgrade you to a newer, more energy‑efficient model.
            </p>
            <p>
              But water heaters are just the beginning. Our Rancho Cucamonga plumbing services cover everything from <Link href="/drain-cleaning" className="text-[#EA5D19] hover:underline font-semibold">drain cleaning services</Link> to clear clogs in your kitchen sink, bathroom drains, and tub or shower, to <Link href="/faucet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">faucet repair or replacement</Link> to stop those annoying drips that waste water and cost you money. We also provide <Link href="/toilet-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">toilet repair or replacement</Link> for running, clogged, or leaky toilets.
            </p>
            <p>
              If you suspect a leak somewhere in your home but can't find it, our advanced <Link href="/leak-detection-services" className="text-[#EA5D19] hover:underline font-semibold">leak detection services</Link> use high‑tech equipment to pinpoint the problem without tearing up your walls or floors. For older homes with outdated plumbing, we offer <Link href="/whole-house-repipe" className="text-[#EA5D19] hover:underline font-semibold">whole‑house repipe</Link> services to replace old pipes and improve your water quality and flow. We also install or repair showers, fix or replace <Link href="/garbage-disposal-repair-replacement" className="text-[#EA5D19] hover:underline font-semibold">garbage disposals</Link>, and install <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water filtration systems</Link> to improve your tap water.
            </p>
            <p>
              Whatever plumbing challenge you're facing in Rancho Cucamonga, Water Heater SOS has you covered. Call or text us at (800) 697‑4014 for fast, friendly service.
            </p>
          </div>
        </div>
      </section>

      {/* Plumbing Services Section */}
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
              Our Plumbing Services in Rancho Cucamonga
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete plumbing solutions to keep your home running smoothly
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Water Heater Repair",
                description: "Fast, reliable repairs for gas, electric, and tankless water heaters",
                icon: Wrench,
                link: "/water-heater-repair",
              },
              {
                title: "Drain Cleaning Services",
                description: "Clear clogs in kitchen sinks, bathroom drains, tubs, and showers",
                icon: Wrench,
                link: "/drain-cleaning",
              },
              {
                title: "Faucet Repair or Replacement",
                description: "Stop dripping faucets and reduce your water bills",
                icon: Droplets,
                link: "/faucet-repair-replacement",
              },
              {
                title: "Toilet Repair or Replacement",
                description: "Fix running, clogged, or leaky toilets",
                icon: Wrench,
                link: "/toilet-repair-replacement",
              },
              {
                title: "Leak Detection Services",
                description: "Locate hidden leaks with advanced equipment",
                icon: Droplets,
                link: "/leak-detection-services",
              },
              {
                title: "Whole‑House Repipe",
                description: "Replace old pipes for better water quality",
                icon: Wrench,
                link: "/repiping",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <div className="h-full rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-200">
                    <div className="mb-4 inline-flex rounded-lg bg-[#EA5D19] p-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Heater Problems Section */}
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
              Common Water Heater Problems
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pilot Light Won't Stay Lit",
                description: "If the pilot light on your gas water heater keeps going out, it could be due to a faulty thermocouple, a clogged pilot tube, or a draft blowing it out. A malfunctioning thermocouple fails to detect the flame and shuts off the gas supply as a safety measure. Cleaning the pilot tube or replacing the thermocouple usually solves the problem, but persistent issues may indicate a more serious fault requiring professional help.",
              },
              {
                title: "No Hot Water",
                description: "If you have no hot water at all, the issue could be a tripped breaker, a faulty heating element (in electric water heaters), or a broken gas valve (in gas models). Check your breaker box first. If that's not the issue, the heating element or gas valve may need to be replaced. This is a job for a qualified plumber or electrician to ensure it's done safely and correctly.",
              },
              {
                title: "Water Temperature Fluctuates",
                description: "If your water goes from scalding hot to ice cold and back again, the thermostat may be malfunctioning or set incorrectly. Sediment buildup can also interfere with the heating element, causing uneven heating. Flushing the tank to remove sediment and recalibrating or replacing the thermostat can restore consistent water temperature.",
              },
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-gray-50 p-8 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-5 w-5 text-[#EA5D19]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-600">{problem.description}</p>
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
              Need Plumbing Services in Rancho Cucamonga?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert plumbers are ready to help. Call now for fast, reliable service!
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

      {/* Trusted Brands Section */}
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
              Trusted Brands We Install & Service
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
            {[
              { name: "Rheem", logo: "/rheem_logo-1.webp" },
              { name: "Bradford White", logo: "/bradford-white-logo-1.webp" },
              { name: "Rinnai", logo: "/rinnai-1.webp" },
              { name: "Navien", logo: "/navien-1.webp" },
              { name: "Hajoca", logo: "/hajoca-1.webp" },
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative h-20 w-32 grayscale hover:grayscale-0 transition-all duration-200"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ category="ranchoCucamonga" />
    </>
  );
}
