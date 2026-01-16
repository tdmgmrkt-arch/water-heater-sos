"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";

const plumbingServices = [
  {
    title: "Water Heater Repair and Replacement",
    description: "If your gas water heater is leaking or won't heat, it's time to call in the experts. Our skilled technicians in Banning show up ready to repair or replace any water heater.",
    link: "/gas-water-heaters",
  },
  {
    title: "Faucet Fixes",
    description: "Got a faucet that won't stop dripping? We'll fix or replace it to stop the waste and lower your water bill.",
    link: "/faucet-repair-replacement",
  },
  {
    title: "Drain Cleaning",
    description: "If your sink or shower is draining slowly because of hair or grease, we'll clear out the clog to get things flowing again.",
    link: "/drain-cleaning",
  },
  {
    title: "Toilet Repairs",
    description: "Toilets that keep running or won't flush are no match for us because we can repair valves and parts to get them working right.",
    link: "/toilet-repair-replacement",
  },
  {
    title: "Pipe Repairs",
    description: "Leaky pipes can cause big problems, like water damage to your floors or walls, but we're here to repair or replace them before things get worse.",
    link: "/plumbing",
  },
  {
    title: "Low Water Pressure",
    description: "If your water pressure is super low, making showers or dishwashing a chore, we'll track down the issue and boost the flow.",
    link: "/water-pressure-regulator-replacement",
  },
  {
    title: "Sewer Line Services",
    description: "For messy sewer line backups that cause smelly trouble, we'll clear or fix the line to keep your plumbing system in check.",
    link: "/sewer-camera-inspection",
  },
  {
    title: "Fixture Installations",
    description: "Want to upgrade your home with a new faucet, toilet, or showerhead? We install high‑quality fixtures to give your place a fresh look.",
    link: "/plumbing",
  },
];

const commonReasons = [
  {
    title: "Pilot Light",
    description: "The pilot light is a small flame that starts the gas burner in your water heater. If it's not working, it could be because the thermocouple (a safety device) is dirty or broken, the gas pipe is clogged, or there's an issue with the gas supply.",
  },
  {
    title: "Thermostat Controls",
    description: "The thermostat controls the water temperature. If it's not working right, you might get water that's not hot enough or too hot. A plumber can fix or adjust the thermostat to ensure your water heater works properly.",
  },
  {
    title: "Sediment",
    description: "Regular maintenance is key to maintaining your water heater. Over time, sediment can build up in the bottom of the water heater, making it less efficient and harder to work. By flushing the water heater once a year, you can prevent this problem and ensure your water heater lasts longer.",
  },
  {
    title: "Leaking Water Heater",
    description: "Gas water heaters can rust if the anode rod (a part that protects the tank from corrosion) isn't working properly. If the anode rod is worn out, the tank can leak, and you might need a new water heater.",
  },
  {
    title: "Old Age",
    description: "Water heaters typically have a lifespan of 10‑12 years. If your water heater is approaching this age or has already surpassed it, it's a good time to consider replacing it with a newer, more efficient model. This information can help you plan and budget for the future.",
  },
  {
    title: "Gas Leaks",
    description: "If you smell gas near your water heater, it's a serious problem that needs immediate attention. A broken gas valve, a damaged burner, or a problem with the gas line can cause a gas leak. If you smell gas, immediately turn off the gas supply and call for help.",
  },
];

export function BanningContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* GRID: Left Content + Right Image */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
                Banning Plumbing Experts
              </span>

              <h1 className="text-3xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
                Banning Plumbers & Water Heater Repair
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Banning, CA's Plumbing Fix‑It Crew!
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Imagine stepping into the shower, expecting warm water, only to get a freezing blast because your <Link href="/gas-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">gas water heater</Link> gave up. Talk about a bad start to the day! At Water Heater SOS in Banning, CA, we're pros at getting your hot water flowing again, whether it's a gas, electric, or <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">tankless model</Link> that's acting up. But don't think we're just about water heaters because our team can handle any plumbing problem you've got! From dripping faucets to backed‑up drains, we're here to fix it all and keep your home running smoothly.
              </p>

              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Schedule an Appointment Today!
              </Link>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/wh-sos-service-rep.webp"
                alt="Banning plumbing services and water heater repair"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* FULL-WIDTH PARAGRAPH BLOCK */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Banning's hard water is tough on plumbing, with minerals that build up in pipes and water heaters, causing clogs and wear. We can install <Link href="/water-filtration" className="text-[#EA5D19] hover:underline font-semibold">water softeners</Link> to fight this problem, helping your water heater and pipes last longer while saving you from costly repairs.
            </p>

            <p>
              <Link href="/tankless-water-heaters" className="text-[#EA5D19] hover:underline font-semibold">Tankless water heaters</Link> are extremely energy efficient and will save you money on your utility bill. Southern California Gas Company usually has huge rebates for Banning residents from switching from a tank water heater to a tankless model. The rebates vary from time to time, but often, you can receive up to a $1,200 rebate for installing an energy‑efficient tankless water heater.
            </p>
          </div>
        </div>
      </section>

      {/* Plumbing Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6">
              Banning Plumbing Services
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
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

      {/* Common Reasons Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6">
              Common Reasons Why Water Heaters Go Out
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {commonReasons.map((reason, index) => (
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
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {reason.description}
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
      <TrustedBrands className="bg-gray-50" />

      {/* FAQ Section */}
      <FAQ category="banning" />
    </>
  );
}
