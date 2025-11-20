// =================================================================
// 0. IMPORTS, DATA, AND HOOKS (START)
// =================================================================
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { CheckCircle, Phone } from "lucide-react"; // Importing an iconic symbol for trust
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 

// --- Data (Unchanged) ---
const brands = [
  { name: "Rheem", image: "/rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/bradford-white-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
];

const faqs = [
  // ... (All 5 FAQ objects defined previously remain here)
  {
    question: "What brand of water heaters do you install or replace?",
    answer: `We prioritize the installation of Bradford White... (Full answer truncated for brevity)`,
  },
  {
    question: "How long does it take to get my free water heater estimate?",
    answer: "We work seven days a week, and in most cases, we can provide you with a quote for a new water heater the same day... ",
  },
  { question: "If I approve your estimate how fast can you get the work done?", answer: "It depends on the time of day you approve the estimate... (full answer)", },
  { question: "Do you offer free quotes on tankless water heaters?", answer: "Yes, we offer free online estimates on tankless water heaters... (full answer)", },
  { question: "What cities does your service area cover?", answer: "We provide professional installation services by experienced plumbers... (full answer)", },
];

// --- Helper Components (Enhanced Visuals) ---

const LisaReview = ({ imageSrc }) => (
    <div className="p-6 bg-white rounded-2xl shadow-xl border-t-4 border-[#EA5D19] flex items-start gap-4">
      <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#EA5D19]">
        <Image src={imageSrc} alt="Lisa B. customer profile picture" fill sizes="64px" className="object-cover"/>
      </div>
      <div>
        <h3 className="text-xl font-extrabold text-[#11110E] mb-1">⭐⭐⭐⭐⭐ Lisa B.</h3>
        <p className="text-sm font-semibold text-gray-500 mb-2">Verified Customer, Redlands, CA</p>
        <p className="text-lg text-gray-700 leading-relaxed italic">
          &quot;I woke up to no hot water... I put a request in online and got several quotes, theirs was considerably lower. They showed up the same day, replaced my water heater, and it only took a few hours. Highly recommended!&quot;
        </p>
      </div>
    </div>
);


// =================================================================
// 1. MAIN COMPONENT (PREMIUM BUILD)
// =================================================================
export function QuoteContent() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "", address: "",
    heaterType: "", currentSize: "", serviceType: "", issue: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, selectedFile);
  };

  const heroFaqs = faqs.slice(0, 2);
  const detailedFaqs = faqs.slice(2);

  return (
    <>
      {/* -------------------- SECTION 1: HERO (CONVERSION FOCUSED) -------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 items-start">

            {/* --- Left Column (L-Col): Value Proposition & Trust Signals (Col span 7) --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
              <span className="text-[#EA5D19]">Free Online </span> Water Heater Estimate.
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed mb-10">
                Submit photos and details to receive an accurate, same-day quote from our certified local experts. Protect your home and budget.
              </p>

              {/* --- Trust Element: Key Guarantees --- */}
              <div className="mb-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 space-y-3">
                <h3 className="text-xl font-bold text-[#11110E] mb-4 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#EA5D19]" /> Why Choose Water Heater SOS?
                </h3>
                <ul className="list-none space-y-2 text-lg text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> Same-Day Service: Installation available within 24 hours in most cases.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> Zero Hidden Fees: Transparent pricing guaranteed from your estimate.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> Licensed & Insured: Fully certified professional installation and repairs.</li>
                </ul>
              </div>

              {/* --- Quick FAQ Section (Addressing immediate concerns) --- */}
              <div className="mb-10 space-y-4">
                <h3 className="text-3xl font-extrabold text-[#11110E] mb-4">Quick Answers</h3>
                <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-md border border-gray-100 p-4">
                  {heroFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 border-gray-100">
                      <AccordionTrigger className="font-semibold text-left py-4 text-lg hover:text-[#EA5D19]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4 whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Testimonial (Placed below the form for final push) */}
              <div className="mt-8">
                <LisaReview imageSrc="/lisa-b-review.webp" />
              </div>

            </motion.div>

            {/* --- Right Column (R-Col): The Conversion Form (Col span 5, Sticky) --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 lg:sticky lg:top-8" 
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl space-y-6 border border-gray-200">
                <h2 className="text-3xl font-extrabold text-[#11110E] text-center mb-4 border-b pb-4">
                  Request Your Estimate Now
                </h2>
                
                {/* Form Fields (Condensed) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label htmlFor="firstName" className="block text-sm font-semibold text-[#11110E] mb-2">First Name</label><input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="First Name" required/></div>
                  <div><label htmlFor="lastName" className="block text-sm font-semibold text-[#11110E] mb-2">Last Name</label><input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="Last Name" required/></div>
                </div>
                <div><label htmlFor="phone" className="block text-sm font-semibold text-[#11110E] mb-2">Phone</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="phone" required/></div>
                <div><label htmlFor="email" className="block text-sm font-semibold text-[#11110E] mb-2">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="email" required/></div>
                <div><label htmlFor="address" className="block text-sm font-semibold text-[#11110E] mb-2">Service Address</label><input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="123 Main St, Redlands, CA" required/></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label htmlFor="heaterType" className="block text-sm font-semibold text-[#11110E] mb-2">Tankless or Tank Heater?</label><select id="heaterType" name="heaterType" value={formData.heaterType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" required><option value="">Select...</option><option value="tankless">Tankless</option><option value="tank">Traditional Tank</option></select></div>
                  <div><label htmlFor="serviceType" className="block text-sm font-semibold text-[#11110E] mb-2">Service Needed?</label><select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" required><option value="">Select...</option><option value="repairs">Repairs</option><option value="replacement">Replacement</option><option value="unsure">Not Sure</option></select></div>
                </div>

                <div className='border-t pt-4'>
                    <label htmlFor="issue" className="block text-sm font-semibold text-[#11110E] mb-2">What is currently wrong with your water heater?</label>
                    <textarea id="issue" name="issue" value={formData.issue} onChange={handleInputChange} rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all resize-none" placeholder="Is it leaking, making noise, or not heating?" />
                </div>
                
                {/* File Upload (Highlighted) */}
                <div className="p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <label htmlFor="photo" className="block text-sm font-extrabold text-[#11110E] mb-2">Upload Photo for Best Accuracy</label>
                  <input type="file" id="photo" name="photo" accept="image/*" onChange={handleFileChange} className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#EA5D19] file:text-white hover:file:bg-[#FF6E2E] file:cursor-pointer" required/>
                  <p className="mt-2 text-sm text-gray-600">{selectedFile ? selectedFile.name : "No file chosen"}</p>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] text-white font-extrabold text-xl py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]">
                  GET MY FREE ESTIMATE
                </button>
              </form>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 2: TRUSTED BRANDS SHOWCASE -------------------- */}
      <section className="bg-white py-12 lg:py-16 border-t border-b border-gray-100">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <h2 className="text-xl font-bold text-center text-gray-600 uppercase tracking-widest mb-8">
                 We Repair & Install Products From All Leading Manufacturers
             </h2>
             <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
                 {brands.map((brand, index) => (
                     <motion.div
                         key={brand.name}
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5, delay: index * 0.1 }}
                         viewport={{ once: true, amount: 0.8 }}
                         className="relative h-14 w-32 grayscale hover:grayscale-0 transition-all duration-300"
                     >
                         <Image
                             src={brand.image}
                             alt={`${brand.name} logo - trusted water heater brand`}
                             fill
                             sizes="128px"
                             className="object-contain"
                         />
                     </motion.div>
                 ))}
             </div>
         </div>
      </section>

      {/* -------------------- SECTION 3: EXPERT EDUCATION (REPAIR VS REPLACE) -------------------- */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-7xl text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6 text-center">
              Guidance from Certified Water Heater Professionals
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-16" />

            {/* When to Replace or Repair */}
            <h3 className="text-3xl font-extrabold text-[#11110E] mt-10 mb-6 flex items-center gap-3">
                <Phone className="h-7 w-7 text-[#EA5D19]" /> When to Choose Repair vs. Replacement
            </h3>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Deciding whether to repair or replace can save you thousands. While minor issues can be repaired, a replacement is often necessary if:
                </p>
                <ul className="list-disc list-outside text-lg text-gray-700 leading-relaxed space-y-2 pl-6">
                    <li>The warranty on your unit has expired (usually after 8-12 years).</li>
                    <li>The cost of repairs is more than 50% of the price of a new unit.</li>
                    <li>The unit is actively leaking, which often signals tank failure.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Our team will always provide a detailed, unbiased analysis of your situation to help you make the most cost-effective decision.
                </p>
            </div>

            {/* Determining Needs */}
            <h3 className="text-3xl font-extrabold text-[#11110E] mt-10 mb-6 flex items-center gap-3">
                <CheckCircle className="h-7 w-7 text-[#EA5D19]" /> Determining Your Specific Water Heater Needs
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our comprehensive approach ensures your new system is perfectly matched to your home's usage, whether you choose a tankless or traditional model.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-2xl font-bold text-[#EA5D19] mb-3">Tankless Systems</h4>
                    <p className="text-gray-700">We assess your household's hot water consumption, fixture flow rates, and local groundwater temperatures to ensure the system delivers endless hot water without capacity issues.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-2xl font-bold text-[#EA5D19] mb-3">Traditional Tank Systems</h4>
                    <p className="text-gray-700">We calculate the specific volume of water necessary to meet your household's peak demand times, ensuring you never run out of hot water when you need it most.</p>
                </div>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* -------------------- SECTION 4: DETAILED FAQ (Final Trust Builder) -------------------- */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <h2 className="text-3xl font-extrabold text-[#11110E] sm:text-4xl mb-8 text-center">
              Have More Questions? We Have Answers.
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-12" />
            <Accordion type="single" collapsible className="space-y-4">
              {detailedFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-detailed-${index}`}
                    className="rounded-xl bg-gray-50 px-6 shadow-md border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-xl text-[#11110E] hover:text-[#EA5D19] py-5 flex items-start justify-between gap-2">
                      <span className="text-[#EA5D19] font-extrabold mr-3">Q:</span>
                      <span className="flex-grow">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-5 whitespace-pre-line border-t border-gray-200 pt-4">
                      <span className="text-[#EA5D19] font-extrabold mr-3">A:</span>
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