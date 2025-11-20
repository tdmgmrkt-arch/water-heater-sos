import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock, Star, Shield } from "lucide-react";
import { Container } from "./Container";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Service Area", href: "/service-area" },
  ],
  services: [
    { name: "Gas Water Heaters", href: "/gas-water-heaters" },
    { name: "Tankless Water Heaters", href: "/tankless-water-heaters" },
    { name: "Water Filtration", href: "/water-filtration" },
    { name: "Drain Cleaning", href: "/drain-cleaning" },
  ],
  resources: [
    { name: "Free Online Quote", href: "/quote" },
    { name: "Air Duct Cleaning", href: "/air-duct-cleaning" },
    { name: "Blog & Tips", href: "/service" },
    { name: "Privacy Policy", href: "/privacy-policy-2" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] text-white overflow-hidden">
      {/* Premium Background Effects (No Change) */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EA5D19]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EA5D19]/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Premium CTA Section (ADJUSTMENTS MADE HERE) */}
        <div className="border-b border-white/10 py-6"> {/* py-10 -> py-6 (Reduced spacing above/below the CTA box) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] p-6 md:p-8 shadow-2xl"> {/* p-8 md:p-12 -> p-6 md:p-8 (Reduced internal padding) */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5"> {/* gap-6 -> gap-5 (Reduced gap between text and buttons) */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1"> {/* text-3xl md:text-4xl -> text-2xl md:text-3xl (Reduced headline size) mb-2 -> mb-1 */}
                  Ready for 5-Star Service?
                </h3>
                <p className="text-base text-white/90 max-w-5xl"> {/* text-lg -> text-base (Reduced description size) */}
                  Get same-day water heater installation or repair from licensed experts.
                  Available 24/7 for emergencies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:8006974014"
                  className="group flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 text-base font-bold text-[#EA5D19] hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap hover-lift" // px-7 py-3 text-lg -> px-6 py-3 text-base (Reduced button size/font)
                >
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  (800) 697-4014
                </a>
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3 text-base font-bold text-white hover:bg-white/10 transition-all whitespace-nowrap" // px-7 py-3 text-lg -> px-6 py-3 text-base (Reduced button size/font)
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content (No other changes) */}
        <div className="py-12">
          {/* Section 1: Brand, Links, and Contact Details */}
          <div className="grid gap-10 md:grid-cols-12">
            
            {/* 1. Primary Column: Brand & Tagline */}
            <div className="lg:col-span-4 space-y-5">
              <Link href="/" className="inline-block mb-2">
                <Image
                  src="/wh-sos-logo.webp"
                  alt="Water Heater SOS Logo"
                  width={200}
                  height={66}
                  className="h-20 w-auto"
                />
              </Link>

              <p className="text-sm text-gray-400 leading-relaxed block">
                The Inland Empire's most trusted water heater experts since day one.
                Licensed, insured, and committed to 5-star service.
              </p>
            </div>
            
            {/* 2. Secondary Columns: Links (Made link lists symmetrical) */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                
                {/* Quick Links */}
                <div>
                    <h3 className="!text-sm !font-semibold !text-white mb-4 relative inline-block">
                        Quick Links
                        <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#EA5D19] to-transparent rounded-full" />
                    </h3>
                    <ul className="space-y-2">
                        {footerLinks.quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="group flex items-center text-gray-400 hover:text-[#EA5D19] transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h3 className="!text-sm !font-semibold !text-white mb-4 relative inline-block">
                        Our Services
                        <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#EA5D19] to-transparent rounded-full" />
                    </h3>
                    <ul className="space-y-2">
                        {footerLinks.services.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="group flex items-center text-gray-400 hover:text-[#EA5D19] transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="!text-sm !font-semibold !text-white mb-4 relative inline-block">
                        Resources
                        <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#EA5D19] to-transparent rounded-full" />
                    </h3>
                    <ul className="space-y-2">
                        {footerLinks.resources.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="group flex items-center text-gray-400 hover:text-[#EA5D19] transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
          </div>

          {/* Section 2: Contact Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10">

          {/* Column 1: Location & Trust Badges (No structural change needed, it sets the height) */}
            <div className="flex flex-col gap-3 bg-white/5 rounded-xl p-4 md:p-5">
                
                {/* Location Header */}
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white/10 p-2 shrink-0">
                        <MapPin className="h-5 w-5 text-[#EA5D19]" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Our Location</p>
                        <p className="text-lg font-extrabold text-white">Redlands, CA 92373</p>
                        <p className="text-xs text-gray-500 mt-0.5">CA LIC# 1140776</p>
                    </div>
                </div>

                {/* TRUST BADGES (Sets the vertical break point and height) */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10 mt-3">
                    <div className="flex items-center gap-2 rounded-lg bg-[#EA5D19]/10 px-3 py-1 border border-[#EA5D19]/20">
                        <Shield className="h-4 w-4 text-[#EA5D19]" />
                        <span className="text-sm font-semibold">Licensed</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-[#EA5D19]/10 px-3 py-1 border border-[#EA5D19]/20">
                        <Star className="h-4 w-4 fill-[#EA5D19] text-[#EA5D19]" />
                        <span className="text-sm font-semibold">5.0 Rating</span>
                    </div>
                </div>
            </div>

            {/* Column 2: Hours (ADDED BOTTOM SECTION) */}
            <div className="flex flex-col gap-3 bg-white/5 rounded-xl p-4 md:p-5">
              {/* Hours Header */}
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/10 p-2 shrink-0">
                  <Clock className="h-5 w-5 text-[#EA5D19]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Service Hours</p>
                  <p className="text-lg font-extrabold text-white">24/7 Emergency Service</p>
                  <p className="text-xs text-gray-500 mt-0.5">Available Every Day</p>
                </div>
              </div>
              
              {/* 🛑 NEW: Service Promises (Mimics Trust Badge Height) 🛑 */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10 mt-3">
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 border border-white/10">
                      <span className="text-sm font-semibold text-gray-300">Same-Day Service</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 border border-white/10">
                      <span className="text-sm font-semibold text-gray-300">No OT Fees</span>
                  </div>
              </div>
            </div>

            {/* Column 3: Phone (ADDED BOTTOM SECTION) */}
            <a
              href="tel:8006974014"
              className="group flex flex-col gap-3 hover:text-[#EA5D19] transition-colors bg-white/5 rounded-xl p-4 md:p-5"
              // Changed: Must use flex-col here to stack the inner content, matching the structure of Column 1 & 2
            >
              {/* Phone Header */}
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#EA5D19]/15 p-2 group-hover:bg-[#EA5D19]/25 transition-colors shrink-0">
                  <Phone className="h-5 w-5 text-[#EA5D19]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Need Service Now?</p>
                  <p className="text-lg font-extrabold text-white group-hover:text-[#EA5D19] transition-colors">(800) 697-4014</p>
                  <p className="text-xs text-gray-500 mt-0.5">Call Anytime for Fast Service</p>
                </div>
              </div>
              
              {/* 🛑 NEW: Call Promises (Mimics Trust Badge Height) 🛑 */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10 mt-3">
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 border border-white/10">
                      <span className="text-sm font-semibold text-gray-300">Free Estimate</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 border border-white/10">
                      <span className="text-sm font-semibold text-gray-300">Satisfaction Guarantee</span>
                  </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar (REDUCED PADDING) */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            
            {/* Copyright & Privacy - Consolidated */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-gray-400">
                <p className="text-xs">
                  © 2025 Water Heater SOS. All Rights Reserved.
                </p>
                <span className="hidden sm:inline text-gray-700">•</span>
                <Link href="/privacy-policy-2" className="text-xs hover:text-[#EA5D19] transition-colors">
                    Privacy Policy
                </Link>
            </div>
            
            {/* Built with... */}
            <p className="text-xs text-gray-400">
              Built with precision & care
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}