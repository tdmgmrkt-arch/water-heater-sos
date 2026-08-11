"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  DollarSign,
  CheckCircle,
  Phone,
  Shield,
  Award,
  HelpCircle,
  FileText,
  AlertTriangle,
  Star,
  Clock,
  Wrench,
  Droplets,
  Zap,
  ThumbsUp,
  X,
  Flame,
  Wind,
  Building2,
  BadgeCheck,
} from "lucide-react";

// ─── Brand constants ────────────────────────────────────────────────────────

const PHONE_DISPLAY = "(800) 697-4014";
const PHONE_HREF = "tel:8006974014";

// ─── Comparison data ────────────────────────────────────────────────────────

const comparisonRows = [
  { practice: "Service call / dispatch fee", competitors: "$75 – $300", sos: "Disclosed upfront" },
  { practice: "Written estimate before work begins", competitors: "Not always", sos: "Always" },
  { practice: "Flat-rate pricing", competitors: "Varies", sos: "Yes" },
  { practice: "Price changes after work starts", competitors: "Common", sos: "Only with your approval" },
  { practice: "Free online quote", competitors: "Rarely", sos: "Yes — at /quote" },
  { practice: "High-pressure upselling", competitors: "Common", sos: "No" },
];

// ─── Pricing tables ─────────────────────────────────────────────────────────

const serviceCallRows = [
  {
    service: "Standard Service Call / Dispatch Fee",
    range: "$49 – $89",
    notes: "Applied toward the cost of repair when work is approved on the same visit.",
  },
  {
    service: "Diagnostic & Inspection",
    range: "$89 – $149",
    notes: "Waived or credited toward repair cost when you proceed with the approved work.",
  },
  {
    service: "After-Hours / Emergency Service Fee",
    range: "$149 – $249",
    notes: "Applies to calls outside regular business hours — weekends, evenings, and holidays.",
  },
  {
    service: "Camera Inspection (sewer or drain line)",
    range: "$199 – $350",
    notes: "High-definition video inspection to pinpoint blockages, cracks, and root intrusion.",
  },
];

const drainPricingRows = [
  {
    service: "Single Drain Clearing (snake/cable)",
    range: "$49 – $179",
    notes: "Clears a blocked sink, tub, or shower drain using professional cable equipment.",
  },
  {
    service: "Main Sewer Line Clearing",
    range: "$295 – $495",
    notes: "Clears blockages from the main line connecting your home to the municipal sewer.",
  },
  {
    service: "Hydro-Jetting (single line)",
    range: "$495 – $595",
    notes: "High-pressure water jetting removes grease, mineral scale, and light root intrusion.",
  },
  {
    service: "Hydro-Jetting (main sewer line)",
    range: "$695 – $995",
    notes: "Full-force jetting on the main sewer line for severe buildup or recurring blockages.",
  },
  {
    service: "Whole Home Hydro-Jetting (all lines)",
    range: "$1,295 – $1,895",
    notes: "Comprehensive jetting of every drain line in the home — ideal for older properties.",
  },
  {
    service: "Sewer Camera Inspection",
    range: "$199 – $350",
    notes: "High-def video to locate cracks, bellied pipe, and root intrusion in sewer lines.",
  },
  {
    service: "Sewer Line Locating",
    range: "$295 – $495",
    notes: "Electronic line tracing to map your sewer layout before repairs or excavation.",
  },
  {
    service: "Cleanout Installation",
    range: "$495 – $895",
    notes: "Adds an accessible cleanout port to simplify future sewer maintenance.",
  },
];

const waterHeaterRows = [
  {
    service: "Water Heater Diagnostic",
    range: "$89 – $149",
    notes: "Credited toward repair cost when you proceed. Covers full system assessment.",
  },
  {
    service: "Thermocouple / Igniter Replacement",
    range: "$195 – $350",
    notes: "Restores pilot ignition on gas water heaters. Common cause of no-hot-water calls.",
  },
  {
    service: "Thermostat Replacement",
    range: "$195 – $350",
    notes: "Replaces faulty upper or lower thermostats on electric water heaters.",
  },
  {
    service: "Anode Rod Replacement",
    range: "$195 – $295",
    notes: "Extends tank life by replacing the sacrificial anode that prevents internal corrosion.",
  },
  {
    service: "Element Replacement (electric)",
    range: "$225 – $395",
    notes: "Replaces failed heating elements in electric tank water heaters.",
  },
  {
    service: "T&P Valve Replacement",
    range: "$175 – $295",
    notes: "Temperature & pressure relief valve — California code requires replacement when faulty.",
  },
  {
    service: "Water Heater Flush & Service",
    range: "$149 – $249",
    notes: "Flushes sediment buildup that reduces efficiency and shortens tank life.",
  },
  {
    service: "40-Gallon Tank Water Heater Installation",
    range: "$1,800 – $2,800",
    notes: "Includes seismic strapping, expansion tank, T&P discharge routing, and permit.",
  },
  {
    service: "50-Gallon Tank Water Heater Installation",
    range: "$2,000 – $3,200",
    notes: "Includes all code-required upgrades and permit. Common for larger households.",
  },
  {
    service: "Tankless Water Heater Installation",
    range: "$3,500 – $5,500",
    notes: "Gas line modifications, new venting, and permit included. Endless hot water on demand.",
  },
  {
    service: "Recirculation Pump Installation",
    range: "$695 – $1,295",
    notes: "Delivers instant hot water to fixtures — eliminates the wait and wastes less water.",
  },
];

const leakRepairRows = [
  {
    service: "Leak Detection (electronic / non-invasive)",
    range: "$295 – $595",
    notes: "Acoustic and electronic equipment locates leaks without opening walls.",
  },
  {
    service: "Slab Leak Detection",
    range: "$395 – $795",
    notes: "Locates leaks beneath concrete slab foundations — common in the Inland Empire.",
  },
  {
    service: "Leak Repair (accessible pipe)",
    range: "$250 – $595",
    notes: "Repairing or replacing an exposed pipe section.",
  },
  {
    service: "Slab Leak Repair (reroute)",
    range: "$2,500 – $5,500",
    notes: "Full pipe rerouting above the slab when the damaged section is not accessible.",
  },
  {
    service: "Slab Leak Repair (spot repair)",
    range: "$1,500 – $3,500",
    notes: "Concrete cutting, pipe repair at the failure point, and surface restoration.",
  },
];

const fixtureRows = [
  {
    service: "Faucet Repair",
    range: "$175 – $350",
    notes: "Replacing washers, cartridges, O-rings, or valve seats to stop drips.",
  },
  {
    service: "Faucet Replacement (labor — customer supplies faucet)",
    range: "$250 – $450",
    notes: "Professional installation of a customer-supplied kitchen or bathroom faucet.",
  },
  {
    service: "Faucet Replacement (labor + standard faucet)",
    range: "$395 – $695",
    notes: "Includes a quality faucet sourced by SOS — ask your tech during the estimate.",
  },
  {
    service: "Toilet Repair (flapper, fill valve, handle)",
    range: "$150 – $295",
    notes: "Stops running toilets and fixes flushing failures with new internal components.",
  },
  {
    service: "Toilet Replacement (standard)",
    range: "$450 – $795",
    notes: "Removal of old unit, installation of new toilet, and proper sealing.",
  },
  {
    service: "Toilet Replacement (premium / comfort height)",
    range: "$595 – $995",
    notes: "ADA-height or premium models — customer may supply or SOS can source.",
  },
  {
    service: "Angle Stop / Shut-Off Valve Replacement",
    range: "$99 – $299",
    notes: "Replaces corroded or seized shut-off valves under sinks and behind toilets.",
  },
  {
    service: "Hose Bib Replacement",
    range: "$195 – $395",
    notes: "Replaces exterior spigots that drip or have seized handles.",
  },
  {
    service: "PRV (Pressure Reducing Valve) Replacement",
    range: "$495 – $895",
    notes: "Maintains safe water pressure. High pressure is a leading cause of pipe damage.",
  },
  {
    service: "Main Water Shut-Off Valve Replacement",
    range: "$595 – $1,295",
    notes: "Replaces the home's primary shut-off — critical for emergency water control.",
  },
  {
    service: "Garbage Disposal Repair",
    range: "$150 – $295",
    notes: "Resetting, unclogging, or replacing internal components.",
  },
  {
    service: "Garbage Disposal Replacement (standard 1/2 HP)",
    range: "$395 – $595",
    notes: "Removal of old unit, installation of new disposal, and electrical connection check.",
  },
  {
    service: "Garbage Disposal Replacement (premium 3/4–1 HP)",
    range: "$495 – $795",
    notes: "Higher-torque models for larger households and heavier use.",
  },
];

const repipeRows = [
  {
    service: "Partial Repipe (1–3 fixtures)",
    range: "$1,500 – $3,500",
    notes: "Targeted replacement for corroded or failing sections serving specific fixtures.",
  },
  {
    service: "Whole Home Repipe (copper)",
    range: "$5,500 – $12,000",
    notes: "Full replacement of supply lines throughout the home using copper piping.",
  },
  {
    service: "Whole Home Repipe (PEX)",
    range: "$4,500 – $9,500",
    notes: "PEX is flexible, freeze-resistant, and often less expensive than copper.",
  },
  {
    service: "Polybutylene Replacement (full home)",
    range: "$5,000 – $10,000",
    notes: "Polybutylene fails over time. Complete replacement eliminates the risk of catastrophic leaks.",
  },
];

const gasLineRows = [
  {
    service: "Gas Leak Detection",
    range: "$150 – $295",
    notes: "Electronic sensors locate gas leaks safely without demolition.",
  },
  {
    service: "Gas Line Repair",
    range: "$295 – $795",
    notes: "Fixes leaking or damaged gas supply lines.",
  },
  {
    service: "Gas Line Installation (per appliance)",
    range: "$495 – $1,295",
    notes: "New gas line run to a dryer, range, fireplace, or outdoor grill.",
  },
  {
    service: "Gas Pressure Test",
    range: "$195 – $350",
    notes: "Verifies system integrity — required before and after gas line work in most jurisdictions.",
  },
  {
    service: "Earthquake Valve Installation",
    range: "$395 – $695",
    notes: "Automatically shuts off gas supply during seismic events — strongly recommended in CA.",
  },
];

const sewerRepairRows = [
  {
    service: "Spot Repair (per section)",
    range: "$1,500 – $3,500",
    notes: "Excavation and replacement of a single failed sewer pipe section.",
  },
  {
    service: "Sewer Line Replacement (per linear foot)",
    range: "$150 – $300/ft",
    notes: "Traditional open-trench replacement. Full residential line typically $3,000–$20,000.",
  },
  {
    service: "Trenchless Sewer Lining (epoxy / CIPP)",
    range: "$4,500 – $12,000",
    notes: "Restores the existing pipe with a seamless epoxy liner — no yard excavation required.",
  },
  {
    service: "Cleanout to City Connection Replacement",
    range: "$3,500 – $8,500",
    notes: "Replaces the lateral from your cleanout to the city connection at the property line.",
  },
];

const hvacDiagnosticRows = [
  {
    service: "HVAC Diagnostic / Service Call",
    range: "$59 – $149",
    notes: "Applied toward repair cost when work is approved. Covers full system assessment.",
  },
  {
    service: "AC Tune-Up / Maintenance",
    range: "$79 – $149",
    notes: "Coil cleaning, electrical check, refrigerant level verification, and filter replacement.",
  },
  {
    service: "Furnace Tune-Up / Safety Inspection",
    range: "$79 – $149",
    notes: "Combustion analysis, heat exchanger inspection, and ignition system check.",
  },
  {
    service: "After-Hours / Emergency HVAC Service",
    range: "$149 – $249",
    notes: "Applies to calls outside regular hours — no heat in winter, no AC in July, we come.",
  },
];

const acRepairRows = [
  {
    service: "Capacitor Replacement",
    range: "$195 – $395",
    notes: "One of the most common AC failures in the Inland Empire heat — restores compressor startup.",
  },
  {
    service: "Contactor Replacement",
    range: "$195 – $395",
    notes: "Replaces the electrical switch that engages the compressor and condenser fan.",
  },
  {
    service: "Condenser Fan Motor Replacement",
    range: "$395 – $695",
    notes: "Restores airflow over the outdoor coil — prevents compressor overheating.",
  },
  {
    service: "Blower Motor Replacement",
    range: "$495 – $895",
    notes: "Indoor air handler motor replacement — restores airflow through ducts.",
  },
  {
    service: "Compressor Hard Start Kit",
    range: "$195 – $350",
    notes: "Reduces compressor startup stress — extends compressor life on older units.",
  },
  {
    service: "Refrigerant Recharge (R-410A, per lb)",
    range: "$85 – $150/lb",
    notes: "Low refrigerant causes warm air and compressor damage. Leak source also addressed.",
  },
  {
    service: "Refrigerant Recharge (R-22, per lb)",
    range: "$150 – $250/lb",
    notes: "R-22 (Freon) is phased out and expensive — replacement equipment is often cost-effective.",
  },
  {
    service: "Refrigerant Leak Repair",
    range: "$395 – $995",
    notes: "Locating and sealing refrigerant leaks. Recharge follows after verified repair.",
  },
  {
    service: "Evaporator Coil Replacement",
    range: "$1,200 – $2,500",
    notes: "Indoor coil replacement — corroded or leaking coils waste refrigerant and degrade performance.",
  },
  {
    service: "Condenser Coil Replacement",
    range: "$1,000 – $2,200",
    notes: "Outdoor coil replacement. Damage from debris or corrosion reduces system efficiency.",
  },
  {
    service: "TXV (Expansion Valve) Replacement",
    range: "$495 – $895",
    notes: "Regulates refrigerant flow — failure causes inconsistent cooling and compressor stress.",
  },
  {
    service: "Condensate Drain Line Clearing",
    range: "$150 – $295",
    notes: "Clears algae-blocked condensate lines that cause water damage and system shutdowns.",
  },
  {
    service: "Thermostat Replacement (standard)",
    range: "$195 – $395",
    notes: "Replaces failed or inaccurate thermostats. Proper calibration included.",
  },
  {
    service: "Thermostat Replacement (smart/WiFi)",
    range: "$295 – $495",
    notes: "Installation of app-controlled smart thermostats (Ecobee, Nest, Honeywell, etc.).",
  },
  {
    service: "Ductwork Repair (per section)",
    range: "$295 – $795",
    notes: "Sealing disconnected or damaged duct sections that waste conditioned air.",
  },
];

const heatingRepairRows = [
  {
    service: "Igniter / Hot Surface Igniter Replacement",
    range: "$250 – $450",
    notes: "Restores furnace ignition — common cause of no-heat calls in winter.",
  },
  {
    service: "Flame Sensor Cleaning / Replacement",
    range: "$150 – $295",
    notes: "A dirty flame sensor causes the furnace to light and then immediately shut off.",
  },
  {
    service: "Gas Valve Replacement",
    range: "$495 – $895",
    notes: "Controls gas flow to the burners. Failure means no heat or unsafe gas delivery.",
  },
  {
    service: "Heat Exchanger Replacement",
    range: "$1,500 – $3,000",
    notes: "Cracked heat exchangers leak carbon monoxide — immediate replacement required.",
  },
  {
    service: "Inducer Motor Replacement",
    range: "$495 – $895",
    notes: "The inducer vents combustion gases. Failure trips a safety and prevents operation.",
  },
  {
    service: "Limit Switch Replacement",
    range: "$195 – $395",
    notes: "Prevents furnace overheating. A tripped limit switch is often a symptom of airflow issues.",
  },
  {
    service: "Pilot Assembly Replacement",
    range: "$250 – $450",
    notes: "Restores standing pilot on older furnaces and boilers.",
  },
  {
    service: "Circuit Board Replacement",
    range: "$495 – $895",
    notes: "The furnace control board manages all ignition and safety sequences.",
  },
];

// ─── Pricing concerns ────────────────────────────────────────────────────────

const pricingConcerns = [
  {
    question: "I got a lower quote from another company. Why is SOS different?",
    answer:
      "A lower quote is not always a lower final cost. Some companies quote a low number to get in the door, then add charges for travel, materials, or 'complications' discovered during the job. SOS Plumbing and Air provides a written estimate that covers all expected costs before any work begins. If a quote from another company does not include a written breakdown of parts and labor, ask for one before agreeing to anything.",
  },
  {
    question: "Why do plumbing and HVAC prices vary so much between companies?",
    answer:
      "Licensing, insurance, and quality parts all cost money — and companies that carry proper coverage charge accordingly. A low-cost repair using substandard components may need to be redone within a year. Experience also affects pricing; a technician who has handled hundreds of similar jobs across the Inland Empire works more efficiently and is less likely to cause additional damage.",
  },
  {
    question: "Is it cheaper to hire an unlicensed contractor?",
    answer:
      "The upfront cost may be lower, but the risks are significant. In California, plumbing and HVAC work over $500 legally requires a licensed contractor. Unlicensed work may not meet building codes, can void homeowner's insurance, and may need to be torn out and redone before a home can be sold. SOS Plumbing and Air is fully licensed (CA LIC #1140776), bonded, and insured.",
  },
  {
    question: "Why can't you give me an exact price over the phone?",
    answer:
      "Every home is different. The age of the equipment, the accessibility of the problem, and the specific code requirements for your city all affect the price. A number given over the phone without seeing the job is a guess, not a quote. Our diagnostic visit gives you a real, firm number — and the diagnostic fee is credited toward the repair when you proceed.",
  },
  {
    question: "What if the job costs more than the estimate?",
    answer:
      "If a technician discovers something unexpected during the work — for example, corroded piping that wasn't visible during diagnosis — they stop, explain the situation, and get your approval before doing any additional work. You are never charged for work you did not authorize.",
  },
];

// ─── FAQs ────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How much does a plumber cost in the Inland Empire?",
    answer:
      "For most standard service calls across Riverside County and San Bernardino County, homeowners pay between $150 and $600. Common repairs like drain clearing or a toilet fix typically fall in the $150–$450 range. More complex projects — water heater replacements, slab leak repairs, whole-home repiping — range from $1,500 to $20,000 depending on scope.",
  },
  {
    question: "Does SOS Plumbing and Air charge a trip fee?",
    answer:
      "SOS charges a standard service call / dispatch fee ($49–$89 for standard hours) that is applied toward the cost of repair when work is approved on the same visit. There is no separate trip fee stacked on top. The diagnostic visit gives you a real written number — not a guess.",
  },
  {
    question: "How much does a water heater installation cost in the Inland Empire?",
    answer:
      "A 40-gallon tank water heater replacement in the Inland Empire typically costs $1,800–$2,800 fully installed, including the unit, seismic strapping, expansion tank, T&P valve discharge routing, and permit. A 50-gallon unit runs $2,000–$3,200. Tankless water heater installations range from $3,500–$5,500 because of required gas line and venting modifications.",
  },
  {
    question: "How much does AC repair cost in Riverside or San Bernardino County?",
    answer:
      "Common AC repairs in the Inland Empire range from $195–$895 for component replacements (capacitors, contractors, fan motors). Refrigerant recharges run $85–$250 per pound depending on refrigerant type. Major repairs like coil replacements range from $1,000–$2,500. Our HVAC diagnostic fee ($59–$149) is credited toward the repair when you approve the work.",
  },
  {
    question: "How much does furnace repair cost in Southern California?",
    answer:
      "Furnace repairs in the Inland Empire typically run $150–$895 for component replacements (igniters, flame sensors, gas valves, limit switches). Heat exchanger replacement — required immediately when cracked due to carbon monoxide risk — runs $1,500–$3,000. The furnace diagnostic fee is credited toward the repair.",
  },
  {
    question: "How much does drain cleaning cost in the Inland Empire?",
    answer:
      "Single drain clearing with a cable/snake runs $49–$179. Main sewer line clearing costs $295–$495. Hydro-jetting for severe buildup or recurring blockages runs $495–$995 for a single line, and $1,295–$1,895 for a whole-home treatment. A sewer camera inspection ($199–$350) is often recommended before hydro-jetting to confirm the scope.",
  },
  {
    question: "How much does slab leak repair cost in Southern California?",
    answer:
      "Slab leak detection runs $395–$795. Spot repair (concrete cutting and pipe fix at the failure point) costs $1,500–$3,500. Full pipe rerouting above the slab runs $2,500–$5,500. Slab leaks are common across the Inland Empire because of regional soil movement and seismic activity — homes built on slab foundations are especially susceptible.",
  },
  {
    question: "How much does toilet replacement cost in the Inland Empire?",
    answer:
      "Standard toilet replacement typically costs $450–$795, including removal of the old unit, installation, and sealing. Premium or comfort-height models run $595–$995. Customers can supply their own fixture or SOS can source one — ask your technician during the estimate.",
  },
  {
    question: "Does plumbing or HVAC work require a permit in California?",
    answer:
      "Many projects require a permit in California, including water heater replacements, sewer line work, gas line modifications, whole-home repiping, and new HVAC installations. When your job requires a permit, SOS will tell you upfront and can coordinate the paperwork on your behalf — permit fees appear as a separate pass-through line on your quote.",
  },
  {
    question: "What is flat-rate pricing?",
    answer:
      "Flat-rate pricing means the price is set for the job, not for the hour. You pay the quoted amount regardless of how long the work takes. This protects you from paying more if a job takes longer than expected. SOS Plumbing and Air uses flat-rate pricing for all standard services.",
  },
  {
    question: "How much does whole-home repiping cost in the Inland Empire?",
    answer:
      "A whole-home repipe in the Inland Empire typically costs $4,500–$9,500 for PEX or $5,500–$12,000 for copper, depending on the size of the home and the number of fixtures. Polybutylene replacement (common in 1980s–90s-era Inland Empire homes) runs $5,000–$10,000. The investment eliminates decades of recurring leak and pressure problems.",
  },
];

// ─── Service area cities ──────────────────────────────────────────────────────

const serviceAreaCities = [
  "Riverside", "Moreno Valley", "Corona", "San Bernardino", "Murrieta",
  "Temecula", "Redlands", "Rancho Cucamonga", "Fontana", "Ontario",
  "Hemet", "Lake Elsinore", "Perris", "Menifee", "Yucaipa",
  "Highland", "Loma Linda", "Beaumont", "Banning", "Calimesa",
  "Mentone", "Grand Terrace", "Colton", "Rialto", "San Jacinto",
  "Norco", "Eastvale", "Chino", "Chino Hills", "Claremont",
  "Upland", "Yorba Linda", "Anaheim Hills",
];

// ─── Shared sub-components ──────────────────────────────────────────────────

function SectionBadge({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#EA5D19]/10 border border-[#EA5D19]/20 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#EA5D19] mb-6">
      <Icon className="h-4 w-4" aria-hidden="true" />
      {text}
    </span>
  );
}

function PricingTable({
  rows,
}: {
  rows: { service: string; range: string; notes: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#EA5D19]">
            <th className="text-left px-5 py-4 text-white font-semibold text-base">
              Service
            </th>
            <th className="text-left px-5 py-4 text-white font-semibold text-base whitespace-nowrap">
              Typical Price Range
            </th>
            <th className="text-left px-5 py-4 text-white font-semibold text-base hidden md:table-cell">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className={`border-t border-gray-200 transition-colors hover:bg-gray-50 ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
              }`}
            >
              <td className="px-5 py-4 text-[#11110E] font-medium align-top">
                {row.service}
              </td>
              <td className="px-5 py-4 text-[#EA5D19] font-bold align-top whitespace-nowrap">
                {row.range}
              </td>
              <td className="px-5 py-4 text-gray-600 align-top hidden md:table-cell leading-relaxed">
                {row.notes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────

export function TransparentPricing() {
  return (
    <div className="min-h-screen">

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Transparent Pricing" }]} />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#11110E] py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              {/* Badge */}
              <SectionBadge icon={DollarSign} text="No Surprises. No Hidden Fees. Just Fair Prices." />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transparent{" "}
                <span className="text-[#EA5D19]">Pricing</span>
              </h1>

              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                SOS Plumbing and Air provides upfront, written pricing for all plumbing,
                water heater, and HVAC services across the Inland Empire.
                You know the full cost before any work begins — every time.
              </p>

              {/* Trust strip */}
              <p className="text-base text-gray-400 mb-10 font-medium">
                Licensed &amp; Insured &nbsp;&middot;&nbsp; 5-Star Rated &nbsp;&middot;&nbsp; Available 24/7 &nbsp;&middot;&nbsp; No Hidden Fees &nbsp;&middot;&nbsp; CA LIC #1140776
              </p>

              {/* Key trust points */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: FileText, text: "Written estimate every time" },
                  { icon: DollarSign, text: "Flat-rate pricing" },
                  { icon: Shield, text: "No hidden fees" },
                  { icon: ThumbsUp, text: "Diagnostic fee applied to repair" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EA5D19] shrink-0">
                      <item.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-w-[220px] bg-[#EA5D19] hover:bg-[#d45416] text-white px-8 py-4 rounded-xl shadow-lg group h-auto"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <FileText className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Get a Free Quote
                    </span>
                  </Button>
                </Link>
                <a href={PHONE_HREF} className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-w-[220px] border-2 border-white text-white hover:bg-white hover:text-[#11110E] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 group bg-transparent h-auto"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      Call {PHONE_DISPLAY}
                    </span>
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/sos-technician-hero.webp"
                  alt="SOS Plumbing and Air technician — transparent pricing, upfront written estimates with no hidden fees across the Inland Empire"
                  width={1200}
                  height={1500}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-6 left-6 rounded-2xl p-4 border border-white/20 shadow-2xl bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EA5D19] rounded-lg flex items-center justify-center">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Written Estimates</div>
                      <div className="text-gray-300 text-xs">Flat-Rate, No Surprises</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT TRANSPARENT PRICING MEANS ──────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionBadge icon={DollarSign} text="Our Pricing Commitment" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-3">
              What Transparent Pricing Means at SOS Plumbing and Air
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* LEFT: philosophy + 3 "No" promises */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl p-7 sm:p-9 border border-gray-200 shadow-md bg-white"
              >
                <p className="text-lg sm:text-xl text-[#11110E] font-semibold leading-relaxed mb-4">
                  Transparent pricing means one thing:{" "}
                  <span className="text-[#EA5D19]">
                    you know the full cost before any work begins.
                  </span>
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  When an SOS technician arrives, they diagnose the problem,
                  explain every option in plain language, and hand you a written estimate. That
                  written number is the number you pay. If the job turns out to be more complex
                  once work is underway, we stop, explain, and get your approval before continuing.
                  You are always in control.
                </p>
              </motion.div>

              {/* 3 "No" promise cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "No Surprise Add-Ons", sub: "Written quote = invoice" },
                  { label: "No Hidden Fees", sub: "Full cost disclosed upfront" },
                  { label: "No Pressure Sales", sub: "Walk away anytime" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-5 border border-gray-200 shadow-md bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-[#EA5D19] rounded-lg flex items-center justify-center shrink-0">
                        <X className="h-5 w-5 text-white" aria-hidden="true" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="text-[#11110E] font-bold text-sm leading-tight">{item.label}</p>
                        <p className="text-gray-600 text-xs mt-1 leading-snug">{item.sub}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: 4-step process */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-2xl border border-gray-200 shadow-md p-7 sm:p-9 bg-white"
              aria-label="How transparent pricing works in your home"
            >
              <p className="text-[10px] font-bold text-[#EA5D19] uppercase tracking-widest mb-2">
                How It Works In Your Home
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#11110E] mb-6 leading-tight">
                Four steps, every visit.
              </h3>

              <ol className="space-y-5">
                {[
                  {
                    title: "We Diagnose",
                    detail: "Our technician assesses the issue on-site — no phone-call guesses.",
                  },
                  {
                    title: "We Explain Every Option",
                    detail: "Plain language, all repair paths, trade-offs spelled out.",
                  },
                  {
                    title: "You Get a Written Estimate",
                    detail: "A firm number — parts, labor, and any permit fees included.",
                  },
                  {
                    title: "You Approve. Then We Work.",
                    detail: "If scope changes mid-job, we stop and re-quote before continuing.",
                  },
                ].map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-full bg-[#EA5D19] flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="text-[#11110E] font-bold text-[15px] leading-tight">
                        {step.title}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.aside>
          </div>

          {/* Trust strip */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              The foundation of how SOS Plumbing and Air has earned the trust of homeowners
              across{" "}
              <span className="text-[#11110E] font-semibold">the Inland Empire</span>{" "}
              — Riverside County, San Bernardino County, and parts of Orange County.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. FREE ESTIMATES ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionBadge icon={ThumbsUp} text="Free Online Quotes" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-6 leading-tight">
                Free Quotes &mdash;{" "}
                <span className="text-[#EA5D19]">No Obligation, No Pressure</span>
              </h2>
              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  SOS Plumbing and Air provides free quotes for plumbing, water heater, and
                  HVAC services. Every home and every system is different. A price given over
                  the phone without seeing the actual problem is rarely accurate, and an
                  inaccurate quote helps no one. An on-site visit allows the technician to
                  assess the exact scope of work, identify code requirements specific to your
                  home, and give you a firm, reliable number.
                </p>
                <p>
                  SOS is interested in building a long-term relationship with every customer —
                  not closing a one-time sale. That means no high-pressure sales tactics, no
                  rushing you into a decision, and no pushing services you do not need. A
                  verbal or written agreement is always in place before any work begins. You
                  always know the cost and what is included before a single tool is picked up.
                </p>
                <p className="font-semibold text-[#11110E]">
                  Request a quote online at any time. If you choose not to move forward,
                  you owe nothing.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/sos-technician-assessment.webp"
                  alt="SOS Plumbing and Air technician assessing a water heater before providing a written estimate — no obligation, no pressure across the Inland Empire"
                  width={1200}
                  height={1500}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-[400px] lg:h-[500px] object-cover object-center"
                />
                <div className="absolute bottom-6 left-6 rounded-2xl p-4 border border-white/20 shadow-2xl bg-black/60 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EA5D19] rounded-lg flex items-center justify-center">
                      <ThumbsUp className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Free Quote</div>
                      <div className="text-gray-300 text-xs">No charge, no obligation</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust stat strip */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Star, stat: "5-Star", label: "Rated on Google" },
              { icon: BadgeCheck, stat: "CA LIC\n#1140776", label: "Licensed, Bonded & Insured" },
              { icon: Clock, stat: "24/7", label: "Emergency Service Available" },
              { icon: DollarSign, stat: "0%", label: "Hidden Fees — Always" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 border border-gray-200 shadow-md text-center bg-white"
                >
                  <div className="w-12 h-12 bg-[#EA5D19] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#11110E] mb-1 whitespace-pre-line leading-tight">
                    {item.stat}
                  </div>
                  <div className="text-gray-600 text-xs leading-snug">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. COMPARISON TABLE ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionBadge icon={CheckCircle} text="Side-by-Side Comparison" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-3">
              How SOS Plumbing and Air Pricing Compares to Other Companies
            </h2>
            <p className="text-base sm:text-lg italic text-gray-500 max-w-3xl mx-auto">
              The plumbing and HVAC industry across the Inland Empire has a well-known problem
              with hidden fees and unclear pricing. Understanding the difference helps homeowners
              make confident decisions.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#EA5D19]">
                  <th className="text-left px-5 py-4 text-white font-semibold text-base">
                    Pricing Practice
                  </th>
                  <th className="text-left px-5 py-4 text-white font-semibold text-base">
                    Many Competitors
                  </th>
                  <th className="text-left px-5 py-4 text-white font-semibold text-base">
                    SOS Plumbing and Air
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-t border-gray-200 transition-colors hover:bg-gray-50 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                    }`}
                  >
                    <td className="px-5 py-4 text-[#11110E] font-medium align-middle">
                      {row.practice}
                    </td>
                    <td className="px-5 py-4 text-gray-600 align-middle">{row.competitors}</td>
                    <td className="px-5 py-4 align-middle">
                      <span className="inline-flex items-center gap-2 text-[#EA5D19] font-semibold">
                        <CheckCircle className="h-4 w-4 shrink-0" />
                        {row.sos}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. PRICING INTRO + DISCLAIMER ───────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionBadge icon={DollarSign} text="Plumbing, Water Heater & HVAC Pricing" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-3">
              Service Pricing in the Inland Empire
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 bg-white">
                <p className="text-base text-gray-600 leading-relaxed">
                  The price ranges throughout this page represent average costs for common
                  plumbing, water heater, and HVAC services across{" "}
                  <span className="text-[#11110E] font-semibold">the Inland Empire</span>{" "}
                  — provided for general reference only. Every home is different, and the only
                  way to get an accurate number is through a free on-site estimate. SOS
                  Plumbing and Air provides a firm written quote after assessing your specific
                  situation.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 flex-1 bg-white">
                <h3 className="text-sm font-bold text-[#EA5D19] uppercase tracking-widest mb-5">
                  What actually affects your final price
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    "Age and condition of your system",
                    "Accessibility of pipes, equipment, and fixtures",
                    "Permit and code requirements in your city",
                    "Materials, fixtures, and equipment selected",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        className="h-5 w-5 text-[#EA5D19] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700 text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside
              className="lg:col-span-2 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8"
              aria-label="Pricing disclaimer"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-7 w-7 text-amber-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">
                    Read Before Pricing Tables
                  </p>
                  <p className="text-amber-900 font-bold text-lg leading-tight">
                    Important Pricing Disclaimer
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-amber-800 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1" aria-hidden="true">•</span>
                  <span>All prices listed are averages — every job is unique.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1" aria-hidden="true">•</span>
                  <span>
                    Subject to change based on materials, labor, code requirements, and job complexity.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1" aria-hidden="true">•</span>
                  <span>Ranges reflect Southern California market conditions, 2025–2026.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1" aria-hidden="true">•</span>
                  <span>
                    All prices include labor and standard materials. Permit fees are included
                    in written estimates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1" aria-hidden="true">•</span>
                  <span className="font-semibold text-amber-900">
                    The only accurate price is a free in-home estimate.
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 6. SERVICE CALL & DIAGNOSTIC FEES ──────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionBadge icon={Clock} text="Service Call & Diagnostic" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-4 leading-tight">
              Service Call &amp; Diagnostic Fees
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-4">
              SOS charges a service call / dispatch fee that is applied toward your repair
              when you approve the work on the same visit. Diagnostic fees are credited the
              same way — you never pay twice.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
              <strong className="text-gray-700">Note:</strong> Diagnostic fees are waived or
              applied toward the cost of repair when work is approved.
            </p>
          </motion.div>
          <PricingTable rows={serviceCallRows} />
        </div>
      </section>

      {/* ── 7. DRAIN CLEANING & SEWER ───────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionBadge icon={Droplets} text="Drain & Sewer" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-4 leading-tight">
              Drain Cleaning and Sewer Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-4">
              Drain and sewer problems are among the most common plumbing calls across
              the Inland Empire. Pricing varies based on the location of the blockage,
              the method required to clear it, and whether the main sewer line is involved.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
              <strong className="text-gray-700">What affects sewer line cost:</strong> Many
              homes in the Inland Empire were built before the 1970s and still have clay or
              cast-iron sewer lines. Tree root intrusion is extremely common. The depth of the
              line, the length of pipe involved, and whether the work requires city permits all
              affect the final price.
            </p>
          </motion.div>
          <PricingTable rows={drainPricingRows} />
        </div>
      </section>

      {/* ── 8. WATER HEATERS ────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionBadge icon={Zap} text="Water Heaters — SOS Flagship Service" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-4 leading-tight">
              Water Heater Installation and Repair
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Water heater pricing in Southern California is higher than the national average
              because California building codes require specific upgrades — including seismic
              strapping, thermal expansion tanks, and proper T&amp;P valve discharge routing —
              on every installation. SOS includes all required upgrades in the written estimate.
            </p>
          </motion.div>
          <PricingTable rows={waterHeaterRows} />
        </div>
      </section>

      {/* ── 9. LEAK DETECTION & REPAIR ──────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionBadge icon={Wrench} text="Leak Detection & Repair" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-4 leading-tight">
              Leak Detection and Repair
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Plumbing leaks range from minor dripping faucets to serious slab leaks hidden
              beneath the concrete foundation. The location and severity of the leak are the
              primary drivers of cost.
            </p>
          </motion.div>

          <PricingTable rows={leakRepairRows} />

          {/* Slab leak callout */}
          <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-[#EA5D19] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#11110E] font-semibold mb-2">
                  What affects leak repair cost in the Inland Empire
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Slab leaks are particularly common across the Inland Empire because of the
                  region&apos;s shifting soil and seismic activity, which stresses underground pipes
                  over time. Homes built on slab foundations — the majority of homes in
                  Riverside and San Bernardino counties — require concrete cutting to access
                  pipes beneath the floor. The extent of the damage and whether pipe rerouting
                  is necessary determine the final cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FAUCETS, FIXTURES, VALVES & GARBAGE DISPOSALS ──────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionBadge icon={Wrench} text="Fixtures & Valves" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-4 leading-tight">
              Faucets, Fixtures, Valves and Disposals
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Fixture pricing covers the labor for installation or repair. For replacements,
              customers may supply their own fixture. SOS can also source fixtures when
              requested — ask your technician during the free estimate.
            </p>
          </motion.div>
          <PricingTable rows={fixtureRows} />
        </div>
      </section>

      {/* ── 11. REPIPING ────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionBadge icon={Droplets} text="Repiping" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-4 leading-tight">
              Whole-Home Repiping
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Older homes across the Inland Empire — particularly those built in the 1970s,
              80s, and 90s — frequently have galvanized steel, polybutylene, or corroded copper
              that needs full replacement. Repiping eliminates recurring leaks and restores
              consistent water pressure throughout the home.
            </p>
          </motion.div>
          <PricingTable rows={repipeRows} />
        </div>
      </section>

      {/* ── 12. GAS LINES ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionBadge icon={Flame} text="Gas Lines" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-4 leading-tight">
              Gas Line Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Gas line work requires a licensed contractor in California. SOS handles leak
              detection, repairs, new appliance connections, and earthquake valve installation.
              All gas line work is permitted and inspected when required.
            </p>
          </motion.div>
          <PricingTable rows={gasLineRows} />
        </div>
      </section>

      {/* ── 13. SEWER LINE REPAIR & REPLACEMENT ─────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionBadge icon={Droplets} text="Sewer Line Repair & Replacement" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-4 leading-tight">
              Sewer Line Repair and Replacement
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Sewer line failure is one of the most disruptive plumbing problems a homeowner
              faces. SOS offers trenchless lining and traditional excavation depending on the
              condition of the line and your property constraints.
            </p>
          </motion.div>
          <PricingTable rows={sewerRepairRows} />
        </div>
      </section>

      {/* ── 14. HVAC — DIAGNOSTIC, AC REPAIRS & HEATING REPAIRS ─────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionBadge icon={Wind} text="HVAC Services" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-4 leading-tight">
              HVAC Pricing &mdash; Diagnostic, AC &amp; Heating
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              HVAC service pricing in the Inland Empire follows the same flat-rate, written-estimate
              model as SOS plumbing services. The diagnostic fee is applied toward the repair
              when you approve the work. No surprise charges.
            </p>
          </motion.div>

          <h3 className="text-xl font-bold text-[#11110E] mb-4">Diagnostic &amp; Maintenance</h3>
          <PricingTable rows={hvacDiagnosticRows} />

          <h3 className="text-xl font-bold text-[#11110E] mt-12 mb-4">Air Conditioning Repairs</h3>
          <PricingTable rows={acRepairRows} />

          <h3 className="text-xl font-bold text-[#11110E] mt-12 mb-4">Heating Repairs</h3>
          <PricingTable rows={heatingRepairRows} />
        </div>
      </section>

      {/* ── 15. PROPERTY MANAGEMENT & REALTOR PARTNERSHIPS ──────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionBadge icon={Building2} text="Trade Partnerships" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-3">
              Property Management, Realtor &amp; HOA Partnerships
            </h2>
            <p className="text-base sm:text-lg italic text-gray-500 max-w-3xl mx-auto">
              SOS Plumbing and Air partners with property managers, real estate agents, home
              warranty providers, and HOAs across the Inland Empire. Trade partners receive
              preferred pricing and priority scheduling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Property Management Companies",
                desc: "Dedicated account rep, preferred rates, and priority scheduling for multi-unit and single-family rental portfolios.",
              },
              {
                icon: Award,
                title: "Real Estate Agents & Brokers",
                desc: "Pre-listing inspections, quick-turn repairs, and buyer consultation reports — all with transparent, written pricing.",
              },
              {
                icon: Shield,
                title: "Home Warranty Providers",
                desc: "Streamlined dispatch and documentation process. Fast claim reporting and photo documentation on every work order.",
              },
              {
                icon: Building2,
                title: "HOAs & Community Managers",
                desc: "Common-area plumbing and HVAC maintenance, bulk service agreements, and preferred pricing for association properties.",
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 border border-gray-200 shadow-md bg-white hover:border-[#EA5D19]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#EA5D19] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-[#11110E] font-bold text-base mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#EA5D19] hover:bg-[#d45416] text-white px-8 py-4 rounded-xl shadow-lg h-auto"
              >
                <Building2 className="h-5 w-5 mr-2" />
                Inquire About Trade Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 16. THE SOS PROMISE ─────────────────────────────────────────── */}
      <section className="bg-[#11110E] py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EA5D19]/10 border border-[#EA5D19]/20 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#EA5D19] mb-6">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Our Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              The <span className="text-[#EA5D19]">SOS Promise</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Five commitments that apply to every job, every time — plumbing, water heaters,
              or HVAC.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              {
                icon: FileText,
                title: "Upfront Pricing",
                desc: "Written estimate before any work begins. The number you see is the number you pay.",
              },
              {
                icon: Shield,
                title: "Licensed &amp; Insured",
                desc: "CA LIC #1140776. Fully bonded and insured on every job, every visit.",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "Emergency service available around the clock — no extra waiting until Monday.",
              },
              {
                icon: Award,
                title: "Warranty on All Work",
                desc: "We stand behind our labor and materials. If something isn't right, we make it right.",
              },
              {
                icon: DollarSign,
                title: "Financing Available",
                desc: "Flexible payment options for larger repairs and replacements — ask your technician.",
              },
            ].map((promise, idx) => {
              const Icon = promise.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EA5D19]">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-white text-base font-bold mb-1"
                      dangerouslySetInnerHTML={{ __html: promise.title }}
                    />
                    <p
                      className="text-gray-300 text-sm leading-normal"
                      dangerouslySetInnerHTML={{ __html: promise.desc }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 17. COMMON PRICING CONCERNS ─────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionBadge icon={HelpCircle} text="Straight Answers" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-3">
              Common Pricing Concerns &mdash; Answered Directly
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {pricingConcerns.map((concern, idx) => {
              const isLastOrphan =
                idx === pricingConcerns.length - 1 && pricingConcerns.length % 2 !== 0;
              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl shadow-md border border-gray-200 p-6 sm:p-8 bg-white ${
                    isLastOrphan ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex gap-4 mb-6">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#EA5D19]/10 rounded-xl flex items-center justify-center">
                        <span className="text-lg font-bold text-[#EA5D19]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                        Customer Concern
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-[#11110E] leading-snug italic">
                        &ldquo;{concern.question}&rdquo;
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-[10px] font-bold text-[#EA5D19] uppercase tracking-widest whitespace-nowrap">
                      SOS&rsquo;s Direct Answer
                    </span>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle
                      className="h-5 w-5 text-[#EA5D19] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <p className="text-gray-700 text-[15px] leading-relaxed">
                      {concern.answer}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 18. FAQ ACCORDION ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionBadge icon={HelpCircle} text="FAQ" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-3">
              FAQ &mdash; Plumbing, Water Heater &amp; HVAC Pricing
            </h2>
            <p className="text-base sm:text-lg italic text-gray-500 max-w-3xl mx-auto">
              Straightforward answers to the most common questions about plumbing, water heater,
              and HVAC costs in the Inland Empire.
            </p>
          </motion.div>

          <div className="mx-auto max-w-5xl">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`faq-${idx}`}
                    className="rounded-xl sm:rounded-2xl bg-white px-4 sm:px-6 shadow-sm sm:shadow-md border-0"
                  >
                    <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#11110E] hover:text-[#EA5D19] py-4 sm:py-6 flex items-start justify-between gap-2">
                      <span className="shrink-0 mr-2 text-[#EA5D19] font-bold text-xs sm:text-base">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="grow text-collapse-fix">
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
          </div>
        </div>
      </section>

      {/* ── Service area footer ──────────────────────────────────────────── */}
      <section className="bg-[#11110E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-[#EA5D19]" />
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              Serving the Inland Empire
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Transparent pricing available for all services in:
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {serviceAreaCities.map((city) => (
              <span key={city} className="text-gray-400 text-sm">
                {city}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-500">
            Last Updated: August 2026
          </p>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div
        className="fixed bottom-0 inset-x-0 lg:hidden z-50 flex"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-[#EA5D19] hover:bg-[#d45416] text-white font-bold py-4 transition-colors min-h-14"
        >
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </a>
        <Link
          href="/quote"
          className="flex-1 flex items-center justify-center gap-2 bg-[#11110E] hover:bg-gray-900 text-white font-bold py-4 transition-colors min-h-14 border-l border-white/20"
        >
          <FileText className="h-5 w-5" />
          <span>Free Quote</span>
        </Link>
      </div>
    </div>
  );
}
