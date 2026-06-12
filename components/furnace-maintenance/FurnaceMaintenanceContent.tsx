"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  Phone,
  CheckCircle,
  Shield,
  Calendar,
  AlertTriangle,
  ClipboardList,
  Wrench,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const tuneUpChecklist = [
  {
    icon: Flame,
    title: "Burner Inspection & Cleaning",
    description:
      "Inspect burners for carbon buildup, uneven flame, or debris. Clean burners as needed. Uneven combustion increases gas consumption and stresses the heat exchanger. In IE furnaces that sit idle for months, spiders and debris in the burner assembly are common.",
  },
  {
    icon: AlertTriangle,
    title: "Heat Exchanger Inspection",
    description:
      "Visual inspection of the heat exchanger for cracks, holes, or corrosion. This is the CO safety check. A cracked heat exchanger allows carbon monoxide to enter the living space — we inspect it on every tune-up and every repair call. If cracked, we document with photos before any conversation about next steps.",
  },
  {
    icon: Wrench,
    title: "Igniter & Flame Sensor",
    description:
      "Test igniter operation and measure igniter current. Clean the flame sensor. These two components are responsible for the majority of furnace no-start failures in the Inland Empire — catching a degrading igniter in fall is far less disruptive than a failed igniter on the first cold night.",
  },
  {
    icon: Shield,
    title: "Safety Controls & Gas Pressure",
    description:
      "Test high-limit switch, pressure switches, and rollout switches. Verify gas pressure and manifold pressure match manufacturer specs. These safety controls exist to shut the furnace down before a dangerous condition develops — confirming they work is non-negotiable.",
  },
  {
    icon: ClipboardList,
    title: "Flue & Venting Inspection",
    description:
      "Inspect flue pipe and venting for blockages, corrosion, or improper slope. A bird nest or debris in the flue is a real occurrence in the Inland Empire after a long summer idle. Blocked fluing causes CO to back-draft into the living space.",
  },
  {
    icon: Calendar,
    title: "Temperature Rise & Blower Check",
    description:
      "Measure supply and return air temperature rise to confirm the furnace is operating within rated parameters. Check blower motor, belt condition, and bearing wear. Temperature rise outside spec is often the first sign of airflow restriction or heat exchanger stress.",
  },
];

const whyChooseUsPoints = [
  {
    title: "CO safety check on every visit",
    description: "We measure CO in the flue and check the heat exchanger on every furnace call. Not optional — it's on every checklist.",
  },
  {
    title: "Licensed HVAC technicians",
    description: "CA LIC# 1140776, C-20 classification. Every technician is background-checked and trained.",
  },
  {
    title: "Honest findings",
    description: "If the heat exchanger is fine, we tell you it's fine. We don't manufacture urgency to sell repairs you don't need.",
  },
  {
    title: "Maintenance plan available",
    description: "Cover both furnace and AC with one annual plan. Priority scheduling for summer emergency calls included.",
  },
  {
    title: "All major brands",
    description: "Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, Bryant.",
  },
  {
    title: "Fall scheduling priority",
    description: "September and October appointments fill faster than you'd expect. Book early for fall tune-up availability.",
  },
];

const riversideCountyCities = [
  { name: "Moreno Valley", href: "/moreno-valley" },
  { name: "Murrieta", href: "/murrieta" },
  { name: "Temecula", href: "/temecula" },
  { name: "Riverside", href: "/riverside" },
  { name: "Corona", href: "/corona" },
  { name: "Hemet", href: "/hemet" },
  { name: "Lake Elsinore", href: "/lake-elsinore" },
  { name: "Menifee", href: "/menifee" },
  { name: "Perris", href: "/perris" },
  { name: "Norco", href: "/norco" },
  { name: "Eastvale", href: "/eastvale" },
  { name: "San Jacinto", href: "/san-jacinto" },
  { name: "Banning", href: "/banning" },
];

const sbCountyCities = [
  { name: "Yucaipa", href: "/yucaipa" },
  { name: "Redlands", href: "/redlands" },
  { name: "Rancho Cucamonga", href: "/rancho-cucamonga" },
  { name: "Chino", href: "/chino" },
  { name: "Chino Hills", href: "/chino-hills" },
  { name: "Upland", href: "/upland" },
  { name: "Claremont", href: "/claremont" },
  { name: "San Bernardino", href: "/san-bernardino" },
  { name: "Fontana", href: "/fontana" },
  { name: "Ontario", href: "/ontario" },
  { name: "Rialto", href: "/rialto" },
  { name: "Colton", href: "/colton" },
  { name: "Loma Linda", href: "/loma-linda" },
  { name: "Highland", href: "/highland" },
  { name: "Beaumont", href: "/beaumont" },
  { name: "Calimesa", href: "/calimesa" },
  { name: "Mentone", href: "/mentone" },
  { name: "Grand Terrace", href: "/grand-terrace" },
];

export function FurnaceMaintenanceContent() {
  return (
    <>
      <SetFooterCTA
        title="Schedule Your Furnace Tune-Up"
        description="CO safety check included. Annual furnace maintenance before the Inland Empire heating season. Book early — fall appointments fill fast."
        quoteLink="/quote?category=HVAC&service=Furnace%20Maintenance"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Heating Services", href: "/heating-services" },
          { label: "Furnace Maintenance" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#EA5D19] text-xs sm:text-sm text-white font-semibold mb-3 sm:mb-4 tracking-wide">
                Annual Furnace Tune-Up &amp; Maintenance
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Furnace Maintenance in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                CO safety check included. Book before the heating season starts.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                The Inland Empire&rsquo;s short heating season — roughly November through March —
                means your furnace spends most of the year idle. That idle period is when
                igniters degrade, spiders nest in burner assemblies, and debris accumulates
                in flue passages. Annual maintenance catches these issues before the first
                cold night of November, when an emergency repair call is the alternative.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                A furnace tune-up runs $89 to $199 and includes a full safety inspection —
                heat exchanger check, CO measurement in the flue gases, and safety control
                testing. This is a gas appliance. The CO check is non-negotiable regardless
                of how infrequently it runs. Licensed CA LIC# 1140776.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=Furnace%20Maintenance"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[44px]"
                >
                  Schedule a Tune-Up
                </Link>
                <a
                  href="tel:8006974014"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#EA5D19] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-[#EA5D19] hover:bg-[#EA5D19] hover:text-white transition-all min-h-[44px]"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  Call Now: (800) 697-4014
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl"
            >
              <Image
                src="/wh-sos-service-rep.webp"
                alt="Licensed HVAC technician performing furnace maintenance in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /furnace-maintenance-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct-answer box */}
      <section className="py-8 lg:py-12 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#EA5D19] pl-4 sm:pl-6">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong>Why annual maintenance matters even in a short heating season:</strong>{" "}
              A furnace that runs only 10–14 weeks per year still undergoes hundreds of
              heating cycles — and the long summer idle period creates its own failure modes.
              The CO safety check alone is worth the cost of the visit on a gas appliance.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11110E] mb-4">
              What Our Furnace Tune-Up Covers
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuneUpChecklist.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA5D19]/10 shrink-0">
                    <item.icon className="h-5 w-5 text-[#EA5D19]" />
                  </div>
                  <h3 className="text-base font-bold text-[#11110E]">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-gray-600">
              Want AC covered too?{" "}
              <Link href="/hvac-maintenance-plan" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
                See our HVAC maintenance plan
              </Link>{" "}
              — covers both furnace and AC tune-ups annually.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 lg:py-20 bg-[#11110E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Inland Empire Homeowners Choose Water Heater SOS
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle className="h-6 w-6 text-[#EA5D19] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{point.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11110E] mb-4">
              Furnace Maintenance Service Area
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#11110E] mb-4">Riverside County</h3>
              <div className="flex flex-wrap gap-2">
                {riversideCountyCities.map((city) => (
                  <Link key={city.name} href={city.href} className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#EA5D19] hover:text-[#EA5D19] transition-colors min-h-[44px]">
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#11110E] mb-4">San Bernardino County</h3>
              <div className="flex flex-wrap gap-2">
                {sbCountyCities.map((city) => (
                  <Link key={city.name} href={city.href} className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#EA5D19] hover:text-[#EA5D19] transition-colors min-h-[44px]">
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBrands />
      <FAQ category="furnaceMaintenance" />
    </>
  );
}
