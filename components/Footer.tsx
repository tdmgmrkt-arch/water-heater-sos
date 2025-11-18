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
      {/* Premium Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EA5D19]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EA5D19]/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Premium CTA Section */}
        <div className="border-b border-white/10 py-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] p-8 md:p-12 shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Ready for 5-Star Service?
                </h3>
                <p className="text-lg text-white/90 max-w-5xl">
                  Get same-day water heater installation or repair from licensed experts.
                  Available 24/7 for emergencies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href="tel:8006974014"
                  className="group flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#EA5D19] hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap hover-lift"
                >
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  (800) 697-4014
                </a>
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">

            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/wh-sos-logo.webp"
                  alt="Water Heater SOS Logo"
                  width={200}
                  height={66}
                  className="h-auto w-auto"
                />
              </Link>

              <p className="text-gray-400 leading-relaxed block">
                The Inland Empire's most trusted water heater experts since day one.
                Licensed, insured, and committed to 5-star service.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 border border-white/10">
                  <Shield className="h-4 w-4 text-[#EA5D19]" />
                  <span className="text-sm font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 border border-white/10">
                  <Star className="h-4 w-4 fill-[#EA5D19] text-[#EA5D19]" />
                  <span className="text-sm font-semibold">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
<div className="lg:col-span-2">
  <h3 className="!text-sm !font-semibold !text-white mb-6 relative inline-block">
    Quick Links
    <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#EA5D19] to-transparent rounded-full" />
  </h3>

  <ul className="space-y-3">
    {footerLinks.quickLinks.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="group flex items-center text-gray-400 hover:text-[#EA5D19] transition-colors"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


              {/* Our Services */}
              <div className="lg:col-span-3">
                <h3 className="!text-sm !font-semibold !text-white mb-6 relative inline-block">
                  Our Services
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#EA5D19] to-transparent rounded-full" />
                </h3>

                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-gray-400 hover:text-[#EA5D19] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Resources */}
              <div className="lg:col-span-3">
                <h3 className="!text-sm !font-semibold !text-white mb-6 relative inline-block">
                  Resources
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#EA5D19] to-transparent rounded-full" />
                </h3>

                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-gray-400 hover:text-[#EA5D19] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            {/* ⭐ Full-Width Contact Row */}
            <div className="lg:col-span-12 flex flex-wrap items-start gap-12 pt-10 border-t border-white/10 mt-6">

              <a
                href="tel:8006974014"
                className="group flex items-center gap-3 hover:text-[#EA5D19] transition-colors"
              >
                <div className="rounded-lg bg-[#EA5D19]/10 p-2 group-hover:bg-[#EA5D19]/20 transition-colors">
                  <Phone className="h-5 w-5 text-[#EA5D19]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Call Us</p>
                  <p className="font-bold">(800) 697-4014</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-white/5 p-2">
                  <MapPin className="h-5 w-5 text-[#EA5D19]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Location</p>
                  <p className="text-sm">Redlands, CA 92373</p>
                  <p className="text-xs text-gray-500 mt-1">CA LIC# 1140776</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-white/5 p-2">
                  <Clock className="h-5 w-5 text-[#EA5D19]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Hours</p>
                  <p className="text-sm">24/7 Emergency Service</p>
                  <p className="text-xs text-gray-500 mt-1">Available Every Day</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Water Heater SOS. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy-2" className="text-sm text-gray-400 hover:text-[#EA5D19] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">•</span>
              <p className="text-sm text-gray-400">
                Built with precision & care
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
