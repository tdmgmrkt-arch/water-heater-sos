"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  Phone,
  CheckCircle,
  ClipboardList,
  Tag,
  BadgeCheck,
  Thermometer,
  Zap,
} from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { SetFooterCTA } from "@/components/SetFooterCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

const installSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Assessment & Quote",
    description:
      "We assess your home's heating load, existing ductwork condition, and current equipment. We present options — furnace vs. heat pump, efficiency ratings, brands — with written itemized quotes for each.",
  },
  {
    number: "02",
    icon: Tag,
    title: "Permit",
    description:
      "California requires a permit for HVAC equipment installation. We handle the permit application for your city and schedule the inspection.",
  },
  {
    number: "03",
    icon: Flame,
    title: "Installation Day",
    description:
      "Old equipment is removed and disposed of. New furnace is installed, gas line connected, venting checked, and all electrical connections made. Standard replacement completes in one day.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Startup & Inspection",
    description:
      "We test the furnace through a full heating cycle, measure temperature rise, verify CO levels in flue gases, and confirm all safety controls operate correctly. City inspection scheduled and attended.",
  },
];

const systemOptions = [
  {
    icon: Flame,
    title: "80 AFUE Gas Furnace",
    description:
      "The California minimum. Appropriate when budget is the primary constraint or when the existing 80 AFUE unit is in good condition and you're replacing only because of age. 20% of combustion gases are exhausted outside — less efficient than 96 AFUE but lower equipment cost.",
  },
  {
    icon: Thermometer,
    title: "96 AFUE Gas Furnace",
    description:
      "Our most frequently recommended option for IE homes. 96% of combustion energy converts to heat. The extra cost over an 80 AFUE unit typically pays back in 5–8 years in SoCal gas prices — faster than in other markets because SoCal gas is expensive. Qualifies for the IRA tax credit up to $600.",
  },
  {
    icon: Zap,
    title: "Heat Pump (Heating + Cooling)",
    description: (
      <>
        Replaces both the furnace and AC in a single system. For most IE
        homeowners replacing aging equipment, a heat pump makes strong
        financial sense with the IRA tax credit (up to $2,000) and SCE
        rebates. Highly efficient in IE&rsquo;s mild winters. For a full
        comparison, see our{" "}
        <Link href="/heat-pump-systems" className="text-[#EA5D19] underline underline-offset-2 hover:text-[#d45416]">
          heat pump systems page
        </Link>
        .
      </>
    ),
  },
  {
    icon: ClipboardList,
    title: "Dual-Fuel (Heat Pump + Gas Backup)",
    description:
      "A heat pump handles heating down to 35–40°F with high efficiency. Below that threshold, a gas furnace takes over. Best for higher-elevation IE homes (Yucaipa, Banning, Beaumont) that want heat pump efficiency for most of winter but need reliable gas heating on coldest nights.",
  },
];

const whyChooseUsPoints = [
  {
    title: "All options on the table",
    description: "We present furnace, heat pump, and dual-fuel options with honest cost-of-ownership comparisons. You make the call.",
  },
  {
    title: "Licensed and permitted",
    description: "CA LIC# 1140776. We handle the permit and city inspection — included in your installation quote.",
  },
  {
    title: "IRA & rebate guidance",
    description: "We'll tell you which systems qualify for the current IRA tax credit and SCE rebates, and what the net cost is after incentives.",
  },
  {
    title: "All major brands",
    description: "Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, Bryant.",
  },
  {
    title: "CO safety inspection",
    description: "We test CO levels in flue gases after every furnace installation. Safety documentation provided.",
  },
  {
    title: "Financing available",
    description: "Furnace installation is a significant investment. We offer financing options. Ask when you call.",
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

export function FurnaceInstallationContent() {
  return (
    <>
      <SetFooterCTA
        title="Get a Furnace Installation Quote"
        description="Gas furnaces and heat pump systems. Permit included. Serving the Inland Empire — Riverside and San Bernardino County."
        quoteLink="/quote?category=HVAC&service=Furnace%20Installation"
      />

      <Breadcrumb
        items={[
          { label: "HVAC Services", href: "/hvac-services" },
          { label: "Heating Services", href: "/heating-services" },
          { label: "Furnace Installation" },
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
                Furnace Installation &amp; Replacement
              </span>
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-4xl lg:text-5xl mb-3 lg:mb-4">
                Furnace Installation in the Inland Empire
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Gas furnaces and heat pump systems. Permit included.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                A new gas furnace in the Inland Empire typically runs $3,500 to $7,000
                installed — including the equipment, labor, and permit. Heat pump systems
                run $5,000 to $10,000 but replace both the furnace and AC, and qualify
                for the federal IRA tax credit of up to $2,000.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                We present all options honestly — gas furnace, heat pump, and dual-fuel
                hybrid — with real cost-of-ownership comparisons for your specific home.
                Licensed CA LIC# 1140776, permit and city inspection included. Financing
                available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?category=HVAC&service=Furnace%20Installation"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[44px]"
                >
                  Get a Free Quote
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
                alt="Licensed HVAC technician performing furnace installation in the Inland Empire"
                fill
                className="object-cover"
                priority
              />
              {/* TODO: Replace with /furnace-installation-hero.webp once generated */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct-answer box */}
      <section className="py-8 lg:py-12 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#EA5D19] pl-4 sm:pl-6">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong>80 AFUE vs. 96 AFUE furnace:</strong>{" "}
              For most Inland Empire homes, 96 AFUE is the right choice — the extra
              efficiency pays back faster in SoCal&rsquo;s high gas prices than it would
              in other markets, and it qualifies for the IRA tax credit. If your primary
              constraint is upfront cost, an 80 AFUE unit is a solid system.
            </p>
          </div>
        </div>
      </section>

      {/* System Options */}
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
              Heating System Options
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We present all options with honest cost-of-ownership analysis — not just
              what&rsquo;s easiest for us to install.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {systemOptions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA5D19]/10 shrink-0">
                    <item.icon className="h-5 w-5 text-[#EA5D19]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#11110E]">{item.title}</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Install Process */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11110E] mb-4">Our Installation Process</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-3xl font-black text-[#EA5D19]/20 mb-2">{step.number}</div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA5D19]/10 mx-auto mb-3">
                  <step.icon className="h-5 w-5 text-[#EA5D19]" />
                </div>
                <h3 className="text-base font-bold text-[#11110E] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
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
              Why Inland Empire Homeowners Choose SOS Plumbing and Air
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
              Furnace Installation Service Area
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
      <FAQ category="furnaceInstallation" />
    </>
  );
}
