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
  },
  {
    icon: MessageSquare,
    title: "Text Us",
    value: "(909) 406-6503",
    href: "sms:9094066503",
    description: "Send us a text anytime",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "help@waterheatersos.com",
    href: "mailto:help@waterheatersos.com",
    description: "We'll respond quickly",
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
      <section className="bg-gradient-to-b from-gray-50 to-white pt-20 pb-8 lg:pt-32 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
              Get In Touch
            </span>
            <h1 className="text-3xl font-extrabold text-[#11110E] sm:text-4xl lg:text-5xl mb-4 leading-tight">
              Contact <span className="text-[#EA5D19]">Us</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Have a question or need assistance? We're here to help 24/7. Reach out through any channel that works best for you.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-3 mb-10"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  className="group block rounded-xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-[#11110E] mb-1">{method.title}</h3>
                  <p className="text-base font-bold text-[#EA5D19] group-hover:underline">{method.value}</p>
                </a>
              );
            })}
          </motion.div>

          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-4 sm:grid-cols-2 mb-8"
          >
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-[#EA5D19]" />
              </div>
              <div>
                <p className="font-bold text-[#11110E]">Location</p>
                <p className="text-gray-600 text-sm">Redlands, CA 92373</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-[#EA5D19]" />
              </div>
              <div>
                <p className="font-bold text-[#11110E]">Hours</p>
                <p className="text-gray-600 text-sm">Available 24/7</p>
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
            <span className="text-sm font-semibold text-gray-600">Follow Us:</span>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#EA5D19] hover:text-white transition-all"
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
      <QuoteContent hideH1 />
    </>
  );
}
