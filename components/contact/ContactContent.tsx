"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { QuoteContent } from "@/components/quote/QuoteContent";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "(800) 697-4014",
    href: "tel:8006974014",
    description: "Speak with our team 24/7",
    primary: true,
  },
  {
    icon: MessageSquare,
    title: "Text Us",
    value: "(909) 406-6503",
    href: "sms:9094066503",
    description: "Send us a text anytime",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "help@waterheatersos.com",
    href: "mailto:help@waterheatersos.com",
    description: "We'll respond quickly",
    primary: false,
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/waterheatersos" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/waterheatersos" },
];

export function ContactContent() {
  return (
    <>
      {/* Contact Info Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-20 pb-10 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-5 tracking-wide">
              Get In Touch
            </span>
            <p className="text-3xl font-extrabold text-[#11110E] sm:text-4xl lg:text-5xl mb-5 leading-tight" aria-hidden="true">
              Contact <span className="text-[#EA5D19]">Us</span>
            </p>
            <p className="text-lg text-gray-500 leading-relaxed max-w-6xl mx-auto">
              Have a question or need assistance? Our friendly team is here to help 24/7. Whether you need emergency water heater repair, want to schedule routine plumbing maintenance, or have questions about our services, reach out through any channel that works best for you. We proudly serve homeowners throughout the Inland Empire with fast, reliable plumbing and water heater services.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-5 sm:grid-cols-3 mb-12"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  className={`group relative block rounded-2xl bg-white py-8 px-6 shadow-sm border hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center ${
                    method.primary
                      ? "border-[#EA5D19]/20 ring-1 ring-[#EA5D19]/10"
                      : "border-gray-100"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    method.primary
                      ? "bg-gradient-to-br from-[#EA5D19] to-[#FF7A3D] shadow-lg shadow-[#EA5D19]/25"
                      : "bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E]"
                  }`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">{method.title}</p>
                  <p className="text-lg font-bold text-[#11110E] group-hover:text-[#EA5D19] transition-colors duration-300">{method.value}</p>
                  <p className="text-sm text-gray-400 mt-1.5">{method.description}</p>
                </a>
              );
            })}
          </motion.div>

          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-5 sm:grid-cols-2 mb-10"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-[#EA5D19]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-[#EA5D19]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Location</p>
                <p className="font-bold text-[#11110E]">571 Crane St, Unit H, Lake Elsinore, CA 92530</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-[#EA5D19]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-[#EA5D19]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Hours</p>
                <p className="font-bold text-[#11110E]">Available 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="text-sm font-semibold text-gray-400 tracking-wide">Follow Us:</span>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#EA5D19] hover:text-white hover:shadow-lg hover:shadow-[#EA5D19]/25 transition-all duration-300"
                  aria-label={social.name}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteContent />
    </>
  );
}
