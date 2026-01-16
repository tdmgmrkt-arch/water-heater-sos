"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Calendar } from "lucide-react";
import { useState } from "react";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "services", title: "Services Provided" },
  { id: "scheduling", title: "Scheduling and Appointments" },
  { id: "pricing", title: "Pricing and Payment" },
  { id: "warranties", title: "Warranties and Guarantees" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "property-access", title: "Property Access" },
  { id: "customer-responsibilities", title: "Customer Responsibilities" },
  { id: "cancellation", title: "Cancellation Policy" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Us" },
];

export function TermsOfServiceContent() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#EA5D19]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
              <FileText className="h-4 w-4 text-[#EA5D19]" />
              <span className="text-sm font-semibold text-white">Legal Agreement</span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
              Terms of Service
            </h1>

            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Calendar className="h-4 w-4" />
              <p className="text-lg">Effective Date: August 3, 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100"
                >
                  <h2 className="text-lg font-bold text-[#11110E] mb-4">Table of Contents</h2>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                          activeSection === section.id
                            ? "bg-[#EA5D19] text-white font-semibold"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[#EA5D19]"
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </motion.div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                {/* Introduction */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to Water Heater SOS. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Please read these Terms carefully before scheduling service or using our website. If you do not agree with any part of these Terms, you may not use our services.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div id="acceptance" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Acceptance of Terms
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      By using the services provided by Water Heater SOS, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                    </p>
                  </div>
                </div>

                {/* Services Provided */}
                <div id="services" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Services Provided
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Water Heater SOS provides professional plumbing services including, but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Water heater installation, repair, and maintenance</li>
                      <li>Tankless water heater services</li>
                      <li>Drain cleaning and hydro-jetting</li>
                      <li>Leak detection and repair</li>
                      <li>General plumbing repairs and installations</li>
                      <li>Emergency plumbing services</li>
                      <li>Water filtration system installation</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      All services are performed by licensed and insured technicians in accordance with applicable local codes and regulations.
                    </p>
                  </div>
                </div>

                {/* Scheduling and Appointments */}
                <div id="scheduling" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Scheduling and Appointments
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you schedule a service appointment with Water Heater SOS:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>We will make every reasonable effort to arrive within the scheduled time window</li>
                      <li>You will receive confirmation of your appointment via phone, email, or text</li>
                      <li>We will contact you if any delays or changes to the schedule occur</li>
                      <li>An adult (18 years or older) must be present during the service call</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Emergency services are available 24/7 and may be subject to additional fees outside of regular business hours.
                    </p>
                  </div>
                </div>

                {/* Pricing and Payment */}
                <div id="pricing" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Pricing and Payment
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our pricing structure is as follows:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>A written estimate will be provided before any work begins</li>
                      <li>Estimates are valid for 30 days from the date of issue</li>
                      <li>Additional work discovered during service will be communicated and approved before proceeding</li>
                      <li>Payment is due upon completion of services unless otherwise agreed in writing</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We accept major credit cards, checks, and cash. Financing options may be available for qualifying customers on larger projects.
                    </p>
                  </div>
                </div>

                {/* Warranties and Guarantees */}
                <div id="warranties" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Warranties and Guarantees
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Water Heater SOS stands behind the quality of our work:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Labor Warranty:</strong> All labor is warranted for one (1) year from the date of service</li>
                      <li><strong>Parts Warranty:</strong> Parts are covered by manufacturer warranties, which vary by product</li>
                      <li><strong>Satisfaction Guarantee:</strong> We are committed to your complete satisfaction</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Warranty claims must be reported within the warranty period. Warranties do not cover damage caused by misuse, neglect, unauthorized modifications, or acts of nature.
                    </p>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div id="liability" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Limitation of Liability
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To the maximum extent permitted by law, Water Heater SOS shall not be liable for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Indirect, incidental, special, or consequential damages</li>
                      <li>Loss of profits, data, or business opportunities</li>
                      <li>Damages resulting from circumstances beyond our reasonable control</li>
                      <li>Pre-existing conditions not caused by our services</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Our total liability for any claim arising from our services shall not exceed the amount paid for the specific service giving rise to the claim.
                    </p>
                  </div>
                </div>

                {/* Property Access */}
                <div id="property-access" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Property Access
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      By scheduling service, you grant Water Heater SOS and its technicians permission to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Access your property to perform the requested services</li>
                      <li>Access areas necessary to complete the work, including utility connections</li>
                      <li>Temporarily shut off water, gas, or electricity as needed for safe service</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      You are responsible for clearing access to the work area and securing pets during service visits.
                    </p>
                  </div>
                </div>

                {/* Customer Responsibilities */}
                <div id="customer-responsibilities" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Customer Responsibilities
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As a customer, you agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Provide accurate information about the service needed</li>
                      <li>Disclose any known hazards or conditions that may affect the service</li>
                      <li>Ensure a safe working environment for our technicians</li>
                      <li>Obtain any necessary permits or HOA approvals if required</li>
                      <li>Make timely payment for services rendered</li>
                    </ul>
                  </div>
                </div>

                {/* Cancellation Policy */}
                <div id="cancellation" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Cancellation Policy
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We understand that plans change. Our cancellation policy is as follows:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Cancellations made 24 hours or more before the appointment: No charge</li>
                      <li>Cancellations made less than 24 hours before: May be subject to a cancellation fee</li>
                      <li>No-shows without notice: May be subject to a service call fee</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      To cancel or reschedule an appointment, please contact us as soon as possible at (951) 600-5010.
                    </p>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div id="intellectual-property" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Intellectual Property
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      All content on the Water Heater SOS website, including text, graphics, logos, images, and software, is the property of Water Heater SOS and is protected by copyright and trademark laws.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                    </p>
                  </div>
                </div>

                {/* Indemnification */}
                <div id="indemnification" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Indemnification
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      You agree to indemnify, defend, and hold harmless Water Heater SOS, its owners, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from your violation of these Terms or your misuse of our services.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div id="governing-law" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Governing Law
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Any disputes arising under these Terms shall be resolved in the state or federal courts located in Riverside County, California.
                    </p>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div id="changes" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Changes to Terms
                  </h2>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Water Heater SOS reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Your continued use of our services after any changes indicates your acceptance of the modified Terms. We encourage you to review these Terms periodically.
                    </p>
                  </div>
                </div>

                {/* Contact Us */}
                <div id="contact" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl font-bold text-[#11110E] mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#EA5D19] to-[#FF6E2E] rounded-full"></span>
                    Contact Us
                  </h2>
                  <div className="bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] p-8 rounded-2xl shadow-lg">
                    <p className="text-white text-lg leading-relaxed mb-6">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <a
                      href="mailto:help@waterheatersos.com"
                      className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl text-[#EA5D19] font-semibold hover:bg-gray-100 transition-all shadow-lg"
                    >
                      <Mail className="h-5 w-5" />
                      help@waterheatersos.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
