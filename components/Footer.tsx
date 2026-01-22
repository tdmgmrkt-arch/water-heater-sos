"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Star, Shield, ChevronDown } from "lucide-react";
import { Container } from "./Container";
import { useFooterCTA, defaultCTA } from "@/contexts/FooterCTAContext";
import { FooterDirectory } from "./FooterDirectory";

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
    { name: "Discounts & Specials", href: "/discount-water-heaters" },
  ],
};

// Accordion component for mobile
function FooterAccordion({
  title,
  links,
  isOpen,
  onToggle
}: {
  title: string;
  links: { name: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10 md:border-none">
      {/* Mobile: Clickable header */}
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 md:hidden"
      >
        <span className="text-sm font-semibold text-white">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Desktop: Static header */}
      <h3 className="hidden md:block text-sm font-semibold text-white mb-4 relative">
        {title}
        <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#EA5D19] to-transparent rounded-full" />
      </h3>

      {/* Links list - collapsible on mobile, always visible on desktop */}
      <ul className={`space-y-2 overflow-hidden transition-all duration-200 md:block ${isOpen ? 'max-h-40 pb-3' : 'max-h-0 md:max-h-none'}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block text-gray-400 hover:text-[#EA5D19] transition-colors text-sm py-0.5"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  let ctaData = defaultCTA;

  try {
    const context = useFooterCTA();
    ctaData = context.ctaData;
  } catch {
    // Context not available, use default
  }

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] text-white overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EA5D19]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EA5D19]/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Premium CTA Section */}
        <div className="border-b border-white/10 py-4 md:py-6">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] p-4 md:p-8 shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-3xl font-bold text-white mb-1">
                  {ctaData.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 max-w-5xl">
                  {ctaData.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href="tel:8006974014"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-bold text-[#EA5D19] hover:bg-gray-50 transition-all shadow-xl whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
                  (800) 697-4014
                </a>
                <Link
                  href={ctaData.quoteLink || "/quote"}
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-bold text-white hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-6 md:py-12">
          {/* Section 1: Brand, Links, and Contact Details */}
          <div className="grid gap-6 md:gap-10 md:grid-cols-12">

            {/* 1. Primary Column: Brand & Tagline */}
            <div className="md:col-span-4 lg:col-span-4">
              <Link href="/" className="inline-block mb-3 md:mb-4">
                <Image
                  src="/wh-sos-logo.webp"
                  alt="Water Heater SOS Logo"
                  width={200}
                  height={66}
                  className="h-14 md:h-20 w-auto"
                />
              </Link>

              <p className="text-xs md:text-sm text-gray-400 leading-relaxed hidden md:block">
                The Inland Empire&apos;s most trusted water heater experts since day one.
                Licensed, insured, and committed to 5-star service.
              </p>
            </div>

            {/* 2. Secondary Columns: Links - Accordions on Mobile */}
            <div className="md:col-span-8 lg:col-span-8 md:grid md:grid-cols-3 md:gap-8">
              <FooterAccordion
                title="Quick Links"
                links={footerLinks.quickLinks}
                isOpen={openAccordion === 'quickLinks'}
                onToggle={() => toggleAccordion('quickLinks')}
              />
              <FooterAccordion
                title="Our Services"
                links={footerLinks.services}
                isOpen={openAccordion === 'services'}
                onToggle={() => toggleAccordion('services')}
              />
              <FooterAccordion
                title="Resources"
                links={footerLinks.resources}
                isOpen={openAccordion === 'resources'}
                onToggle={() => toggleAccordion('resources')}
              />
            </div>
          </div>

          {/* Section 2: Contact Info */}
          {/* Mobile: Compact list | Desktop: 3 cards */}
          <div className="pt-6 md:pt-10 mt-6 md:mt-10 border-t border-white/10">

            {/* MOBILE: Compact contact list */}
            <div className="md:hidden space-y-3">
              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#EA5D19] shrink-0" />
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white font-semibold">Redlands, CA 92373</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-400 text-xs">LIC# 1140776</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#EA5D19] shrink-0" />
                <span className="text-sm text-white font-semibold">24/7 Emergency Service</span>
              </div>

              {/* Phone */}
              <a href="tel:8006974014" className="flex items-center gap-3 group">
                <Phone className="h-4 w-4 text-[#EA5D19] shrink-0" />
                <span className="text-sm text-white font-semibold group-hover:text-[#EA5D19] transition-colors">(800) 697-4014</span>
              </a>

              {/* Trust badges - single row */}
              <div className="flex flex-wrap gap-2 pt-3">
                <div className="flex items-center gap-1.5 rounded-full bg-[#EA5D19]/10 px-2.5 py-1 border border-[#EA5D19]/20">
                  <Shield className="h-3 w-3 text-[#EA5D19]" />
                  <span className="text-xs font-medium">Licensed</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-[#EA5D19]/10 px-2.5 py-1 border border-[#EA5D19]/20">
                  <Star className="h-3 w-3 fill-[#EA5D19] text-[#EA5D19]" />
                  <span className="text-xs font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 border border-white/10">
                  <span className="text-xs font-medium text-gray-300">Same-Day Service</span>
                </div>
              </div>
            </div>

            {/* DESKTOP: Full contact cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {/* Column 1: Location & Trust Badges */}
              <div className="flex flex-col gap-3 bg-white/5 rounded-xl p-4 md:p-5">
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

              {/* Column 2: Hours */}
              <div className="flex flex-col gap-3 bg-white/5 rounded-xl p-4 md:p-5">
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
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10 mt-3">
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 border border-white/10">
                    <span className="text-sm font-semibold text-gray-300">Same-Day Service</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 border border-white/10">
                    <span className="text-sm font-semibold text-gray-300">No OT Fees</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Phone */}
              <a
                href="tel:8006974014"
                className="group flex flex-col gap-3 hover:text-[#EA5D19] transition-colors bg-white/5 rounded-xl p-4 md:p-5"
              >
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
        </div>

        {/* Footer Directory - All Services & Service Areas */}
        <FooterDirectory />

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3 text-xs text-gray-400">
              <p>© 2025 Water Heater SOS. All Rights Reserved.</p>
              <span className="hidden sm:inline text-gray-700">•</span>
              <Link href="/privacy-policy-2" className="hover:text-[#EA5D19] transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-xs text-gray-500 hidden md:block">
              Built with precision & care
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
