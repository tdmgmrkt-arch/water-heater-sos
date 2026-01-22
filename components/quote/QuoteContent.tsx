// =================================================================
// 0. IMPORTS, DATA, AND HOOKS (START)
// =================================================================
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TrustedBrands } from "@/components/home/TrustedBrands";

// --- Data ---
const serviceCategories = [
  {
    label: "Water Heaters",
    services: [
      "Gas Water Heater Installation/Repair",
      "Tankless Water Heater Installation/Repair",
      "Heat Pump Water Heater Installation",
      "Water Heater Flush/Maintenance",
      "Water Filtration System Installation",
    ],
  },
  {
    label: "Drain & Sewer Services",
    services: [
      "Drain Cleaning",
      "Hydro-Jetting",
      "Sewer Camera Inspection",
      "Sewer Line Repair",
    ],
  },
  {
    label: "Leak & Water Services",
    services: [
      "Leak Detection",
      "Water Service Repair/Replacement",
      "Whole-House Repipe",
      "Water Pressure Regulator Replacement",
      "Moen Flo Smart Water Monitor Installation",
    ],
  },
  {
    label: "Fixtures & Appliances",
    services: [
      "Faucet Repair/Replacement",
      "Shower Repair/Replacement",
      "Toilet Repair/Replacement",
      "Garbage Disposal Repair/Replacement",
      "Sump Pump Repair/Replacement",
    ],
  },
  {
    label: "Gas & Other Services",
    services: [
      "Gas Leak Repair",
      "Gas Line Installation",
      "Air Duct Cleaning",
    ],
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide comprehensive plumbing services including water heater installation and repair (gas, tankless, heat pump), drain cleaning, hydro-jetting, leak detection, whole-house repipe, fixture repairs, gas line services, and much more. Our licensed technicians handle everything from minor repairs to major installations.",
  },
  {
    question: "How long does it take to get my free estimate?",
    answer: "We work seven days a week, and in most cases, we can provide you with a quote the same day you submit your request. For complex projects, we may need to schedule an on-site evaluation to ensure accurate pricing.",
  },
  {
    question: "If I approve your estimate, how fast can you get the work done?",
    answer: "It depends on the service and time of day you approve the estimate. For emergency repairs and standard installations, we often provide same-day or next-day service. Larger projects like whole-house repipes are typically scheduled within a few days.",
  },
  {
    question: "Do you offer emergency plumbing services?",
    answer: "Yes! We offer 24/7 emergency services for urgent issues like water leaks, gas leaks, broken water heaters, and clogged drains. Call us anytime at (800) 697-4014 for immediate assistance.",
  },
  {
    question: "What cities does your service area cover?",
    answer: "We provide professional plumbing services throughout the Inland Empire and surrounding areas, including Redlands, Yucaipa, Beaumont, Banning, Highland, San Bernardino, Riverside, Rancho Cucamonga, Fontana, Ontario, and many more cities in San Bernardino and Riverside counties.",
  },
];

// --- Helper Components (Enhanced Visuals) ---

const LisaReview = ({ imageSrc }: { imageSrc: string }) => (
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
// reCAPTCHA Enterprise Site Key
const RECAPTCHA_SITE_KEY = "6LdLs0ssAAAAAGh7XxBMgc_5JNXWo5_61U0M-Xvg";

// Extend Window interface for Google Maps and reCAPTCHA
declare global {
  interface Window {
    google?: typeof google;
    initGooglePlaces?: () => void;
    grecaptcha?: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

export function QuoteContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "", address: "",
    city: "", state: "", zipCode: "",
    serviceCategory: "", specificService: "", urgency: "", description: "",
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Pre-fill form from URL parameters
  useEffect(() => {
    const category = searchParams.get("category");
    const service = searchParams.get("service");
    const urgency = searchParams.get("urgency");

    if (category || service || urgency) {
      setFormData(prev => ({
        ...prev,
        serviceCategory: category || prev.serviceCategory,
        specificService: service || prev.specificService,
        urgency: urgency || prev.urgency,
      }));
    }
  }, [searchParams]);

  // Load reCAPTCHA Enterprise script
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector(`script[src*="recaptcha/enterprise.js"]`)) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  // Initialize Google Places Autocomplete
  useEffect(() => {
    const initAutocomplete = () => {
      if (!addressInputRef.current || !window.google?.maps?.places) return;

      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: "us" },
          fields: ["formatted_address", "address_components"],
        }
      );

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace();
        if (place?.formatted_address && place?.address_components) {
          // Extract city, state, and zip from address_components
          let city = "";
          let state = "";
          let zipCode = "";

          for (const component of place.address_components) {
            const types = component.types;
            if (types.includes("locality")) {
              city = component.long_name;
            } else if (types.includes("administrative_area_level_1")) {
              state = component.short_name; // e.g., "CA" instead of "California"
            } else if (types.includes("postal_code")) {
              zipCode = component.long_name;
            }
          }

          setFormData(prev => ({
            ...prev,
            address: place.formatted_address || "",
            city,
            state,
            zipCode,
          }));
        }
      });
    };

    // Check if Google Maps is already loaded
    if (window.google?.maps?.places) {
      initAutocomplete();
      return;
    }

    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDTqdsZsNqZW4b8P89ivDWfhv9yBBWUpmE&libraries=places&callback=initGooglePlaces`;
    script.async = true;
    script.defer = true;

    window.initGooglePlaces = initAutocomplete;

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (window.initGooglePlaces) {
        delete window.initGooglePlaces;
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Execute reCAPTCHA Enterprise
      let recaptchaToken = "";
      const grecaptcha = window.grecaptcha;
      if (grecaptcha?.enterprise) {
        await new Promise<void>((resolve) => {
          grecaptcha.enterprise.ready(resolve);
        });
        recaptchaToken = await grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, {
          action: "submit_quote",
        });
      }

      // Parse address components from address string
      // Address format: "123 Street, City, ST 12345, USA"
      let { city, state, zipCode } = formData;
      let streetAddress = "";

      if (formData.address) {
        const addressParts = formData.address.split(",").map(part => part.trim());
        // Typically: ["123 Street", "City", "ST 12345", "USA"]

        // Street address is always the first part
        streetAddress = addressParts[0] || "";

        if (addressParts.length >= 3) {
          // City is usually the second-to-last part before "ST 12345"
          const stateZipPart = addressParts[addressParts.length - 2]; // "CA 91701"
          const stateZipMatch = stateZipPart.match(/^([A-Z]{2})\s+(\d{5}(-\d{4})?)$/);
          if (stateZipMatch) {
            state = state || stateZipMatch[1]; // "CA"
            zipCode = zipCode || stateZipMatch[2]; // "91701"
            city = city || addressParts[addressParts.length - 3]; // "Rancho Cucamonga"
          }
        }
      }

      // Prepare form data for submission
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        full_address: formData.address,
        street_address: streetAddress,
        city,
        state,
        zipCode,
        serviceCategory: formData.serviceCategory,
        specificService: formData.specificService,
        urgency: formData.urgency.charAt(0).toUpperCase() + formData.urgency.slice(1),
        description: formData.description,
        smsConsent,
        recaptchaToken,
        submittedAt: new Date().toISOString(),
      };

      // Send to Lead Connector webhook
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/afEqVDyvYdwwENWgmTcC/webhook-trigger/5a9afcec-2903-4b2d-a14a-174f64f7adbc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (!response.ok) {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }

      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        firstName: "", lastName: "", phone: "", email: "", address: "",
        city: "", state: "", zipCode: "",
        serviceCategory: "", specificService: "", urgency: "", description: "",
      });
      setSmsConsent(false);

    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
              <p className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight" aria-hidden="true">
                <span className="text-[#EA5D19]">Free </span> Service Estimate.
              </p>
              <p className="text-2xl text-gray-600 leading-relaxed mb-10">
                Submit your details to receive an accurate, same-day quote for any plumbing or water heater service. Our certified local experts proudly serve homeowners throughout the Inland Empire, including Redlands, Riverside, San Bernardino, Corona, and surrounding communities. Whether you need emergency water heater repair, routine plumbing maintenance, or a complete system installation, we provide transparent pricing with no hidden fees.
              </p>

              {/* --- Trust Element: Key Guarantees --- */}
              <div className="mb-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 space-y-3">
                <h3 className="text-xl font-bold text-[#11110E] mb-4 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#EA5D19]" /> Why Choose Water Heater SOS?
                </h3>
                <ul className="list-none space-y-2 text-lg text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> Same-Day Service: Fast response for repairs and installations.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> Zero Hidden Fees: Transparent pricing guaranteed from your estimate.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> Licensed & Insured: Fully certified plumbing professionals.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> Full-Service: Water heaters, drains, leaks, fixtures, and more.</li>
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
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 pb-10 shadow-2xl space-y-6 border border-gray-200">
                <h2 className="text-2xl font-extrabold text-[#11110E] text-center mb-3 border-b pb-4">
                  Request Your Estimate Now
                </h2>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-5">
                  <div><label htmlFor="firstName" className="block text-sm font-semibold text-[#11110E] mb-1.5">First Name <span className="text-red-500">*</span></label><input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="First Name" required/></div>
                  <div><label htmlFor="lastName" className="block text-sm font-semibold text-[#11110E] mb-1.5">Last Name <span className="text-red-500">*</span></label><input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="Last Name" required/></div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div><label htmlFor="phone" className="block text-sm font-semibold text-[#11110E] mb-1.5">Phone <span className="text-red-500">*</span></label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="(555) 555-5555" required/></div>
                  <div><label htmlFor="email" className="block text-sm font-semibold text-[#11110E] mb-1.5">Email <span className="text-red-500">*</span></label><input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="you@email.com" required/></div>
                </div>
                <div><label htmlFor="address" className="block text-sm font-semibold text-[#11110E] mb-1.5">Service Address <span className="text-red-500">*</span></label><input ref={addressInputRef} type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" placeholder="Start typing your address..." autoComplete="off" required/></div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="serviceCategory" className="block text-sm font-semibold text-[#11110E] mb-1.5">Service Category <span className="text-red-500">*</span></label>
                    <select id="serviceCategory" name="serviceCategory" value={formData.serviceCategory} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" required>
                      <option value="">Select category...</option>
                      {serviceCategories.map((cat) => (
                        <option key={cat.label} value={cat.label}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-semibold text-[#11110E] mb-1.5">Urgency <span className="text-red-500">*</span></label>
                    <select id="urgency" name="urgency" value={formData.urgency} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" required>
                      <option value="">Select...</option>
                      <option value="emergency">Emergency - ASAP</option>
                      <option value="soon">Soon - Few days</option>
                      <option value="planning">Planning ahead</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="specificService" className="block text-sm font-semibold text-[#11110E] mb-1.5">Specific Service <span className="text-red-500">*</span></label>
                  <select id="specificService" name="specificService" value={formData.specificService} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all" required disabled={!formData.serviceCategory}>
                    <option value="">{formData.serviceCategory ? "Select a service..." : "Select category first..."}</option>
                    {formData.serviceCategory && serviceCategories
                      .find((cat) => cat.label === formData.serviceCategory)
                      ?.services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-[#11110E] mb-1.5">Tell us what you need help with <span className="text-red-500">*</span></label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows={8} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all resize-none" placeholder="Let us know what service you're interested in or need help with" required/>
                </div>

                {/* SMS Consent Checkbox - A2P Compliance */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="smsConsent"
                    name="smsConsent"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#EA5D19] focus:ring-[#EA5D19] cursor-pointer"
                    required
                  />
                  <label htmlFor="smsConsent" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                    <span className="text-red-500">*</span> By checking this box, I consent to receive SMS messages from Water Heater SOS. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. View our{" "}
                    <a href="/privacy-policy" className="underline hover:text-[#EA5D19]">Privacy Policy</a>{" "}
                    and{" "}
                    <a href="/terms-of-service" className="underline hover:text-[#EA5D19]">Terms of Service</a>.
                  </label>
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="p-5 bg-green-50 border border-green-200 rounded-xl text-center">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <p className="text-green-800 font-semibold text-base mb-2">
                      A local Water Heater SOS specialist will review your request and contact you shortly — often within the same day.
                    </p>
                    <p className="text-green-700 text-sm">
                      If this is urgent, call us now at{" "}
                      <a href="tel:8006974014" className="font-bold underline hover:text-green-900">(800) 697-4014</a>
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold text-sm">
                      Something went wrong. Please try again or call (800) 697-4014.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] text-white font-extrabold text-lg py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      SUBMITTING...
                    </span>
                  ) : (
                    "GET MY FREE ESTIMATE"
                  )}
                </button>

                {/* reCAPTCHA Notice */}
                <p className="text-xs text-gray-500 text-center">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#EA5D19]">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#EA5D19]">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </form>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 2: TRUSTED BRANDS SHOWCASE -------------------- */}
      <TrustedBrands className="border-t border-b border-gray-100" />

      {/* -------------------- SECTION 3: EXPERT EDUCATION (OUR SERVICES) -------------------- */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-7xl text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#11110E] mb-4 lg:mb-6 text-center">
              Expert Guidance from Licensed Professionals
            </h2>
            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-16" />

            {/* Our Approach */}
            <h3 className="text-3xl font-extrabold text-[#11110E] mt-10 mb-6 flex items-center gap-3">
                <Phone className="h-7 w-7 text-[#EA5D19]" /> Our Approach to Every Job
            </h3>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Whether you need a simple repair or a major installation, our licensed technicians follow a thorough process:
                </p>
                <ul className="list-disc list-outside text-lg text-gray-700 leading-relaxed space-y-2 pl-6">
                    <li>Detailed assessment to understand the issue or project scope.</li>
                    <li>Clear, upfront pricing with no hidden fees or surprises.</li>
                    <li>Professional workmanship backed by our satisfaction guarantee.</li>
                    <li>Honest recommendations - we'll always tell you if repair is more cost-effective than replacement.</li>
                </ul>
            </div>

            {/* Service Categories */}
            <h3 className="text-3xl font-extrabold text-[#11110E] mt-10 mb-6 flex items-center gap-3">
                <CheckCircle className="h-7 w-7 text-[#EA5D19]" /> Our Full Range of Services
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From water heaters to drain cleaning to fixture installation, we handle it all with expertise and care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-[#EA5D19] mb-3">Water Heaters</h4>
                    <p className="text-gray-700">Installation, repair, and maintenance for gas, tankless, and heat pump water heaters. Plus water filtration systems.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-[#EA5D19] mb-3">Drain & Sewer</h4>
                    <p className="text-gray-700">Drain cleaning, hydro-jetting, sewer camera inspection, and sewer line repairs to keep your pipes flowing.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-[#EA5D19] mb-3">Leak Services</h4>
                    <p className="text-gray-700">Advanced leak detection, water service repair, whole-house repipe, and smart water monitoring installation.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-[#EA5D19] mb-3">Fixtures</h4>
                    <p className="text-gray-700">Faucet, shower, toilet, and garbage disposal repair and replacement by skilled technicians.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-[#EA5D19] mb-3">Gas Services</h4>
                    <p className="text-gray-700">Gas leak detection and repair, gas line installation, and safety inspections for your peace of mind.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-[#EA5D19] mb-3">Additional Services</h4>
                    <p className="text-gray-700">Sump pump services, air duct cleaning, water pressure regulators, and more.</p>
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