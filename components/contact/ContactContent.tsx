"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Text Us",
    value: "(909) 406-6503",
    href: "sms:9094066503",
    description: "Send us a text message anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "(800) 697-4014",
    href: "tel:8006974014",
    description: "Speak with our team 24/7",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "help@waterheatersos.com",
    href: "mailto:help@waterheatersos.com",
    description: "Send us an email anytime",
  },
];

const businessInfo = [
  {
    icon: MapPin,
    title: "Location",
    value: "Water Heater SOS\nRedlands, CA 92373",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Call or text us 24/7.",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/waterheatersos",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/waterheatersos",
  },
  {
    name: "TikTok",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    href: "https://www.tiktok.com/@waterheatersos",
  },
];

export function ContactContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
              Get In Touch
            </span>
            <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mx-auto">
              Have a question or need assistance? We're here to help 24/7. Reach out to us anytime!
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={method.href} className="block group">
                    <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all h-full text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-md">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#11110E] mb-2">
                        {method.title}
                      </h3>
                      <p className="text-2xl font-bold text-[#EA5D19] mb-2 group-hover:underline">
                        {method.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {method.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 mx-auto">
            {businessInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-gray-50 p-8 border border-gray-200 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#EA5D19] flex items-center justify-center mx-auto mb-4 shadow-md">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#11110E] mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {info.value}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-block rounded-2xl bg-[#FFF5F0] border border-[#EA5D19]/20 px-6 py-4">
              <p className="text-gray-700 text-sm">
                <strong className="text-[#EA5D19]">*Note:</strong> Our office staff answers phones and book appointments 24/7. Call anytime!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11110E] mb-6">
              Follow Us on Social Media
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-10" />

            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      aria-label={social.name}
                    >
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-md hover:shadow-xl hover:border-[#EA5D19] hover:scale-110 transition-all">
                        <IconComponent className="h-6 w-6 text-gray-700 group-hover:text-[#EA5D19] transition-colors" />
                      </div>
                      <p className="text-sm text-gray-600 mt-2 group-hover:text-[#EA5D19] transition-colors">
                        {social.name}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Get Started?
            </h2>

            <div className="h-1 w-20 bg-[#FFFF] mx-auto rounded-full mb-8" />

            <p className="text-xl text-white/90 mb-8 max-w-7xl mx-auto">
              Contact us today for fast, reliable water heater and plumbing services in the Inland Empire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:8006974014"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call (800) 697-4014
              </Link>
              <Link
                href="sms:9094066503"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border-2 border-white px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl hover:bg-white/20 transition-all hover:scale-105"
              >
                <MessageSquare className="h-5 w-5" />
                Text Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
