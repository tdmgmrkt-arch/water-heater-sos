"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Star, Shield, TrendingUp, Zap, Truck, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  rating: number;
  reviewCount: number;
}

function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

export function Hero({ rating, reviewCount }: HeroProps) {
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    const target = reviewCount;
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedCount(target);
        clearInterval(timer);
      } else {
        setAnimatedCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [reviewCount]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-8 sm:py-16 lg:py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#EA5D19]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#EA5D19]/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#EA5D19]/5 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* MOBILE LAYOUT: Single column with optimized order */}
        {/* DESKTOP LAYOUT: Two columns side by side */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* LEFT COLUMN - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="w-full min-w-0"
          >
            {/* Google Reviews Badge */}
            <motion.a
              href="https://g.page/r/CUVYr3DJoTqZEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border-2 border-[#EA5D19]/20 bg-gradient-to-r from-[#FFF5F0] via-white to-[#FFF5F0] px-3 py-1.5 sm:px-5 sm:py-2.5 shadow-md hover:shadow-lg transition-shadow"
              aria-label={`Rated ${rating.toFixed(1)} out of 5 stars from ${reviewCount} Google Reviews — leave a review`}
            >
              <GoogleG className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              <span className="text-sm sm:text-base font-extrabold text-[#11110E] tabular-nums leading-none">
                {rating.toFixed(1)}
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#11110E]/70 leading-none">
                <span className="tabular-nums">{reviewCount}</span>
                <span className="hidden xs:inline"> </span>
                <span className="hidden sm:inline"> Google Reviews</span>
                <span className="sm:hidden"> Reviews</span>
              </span>
            </motion.a>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 sm:mt-6 text-[1.75rem] leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              The Inland Empire&apos;s{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Water Heater, HVAC & Plumbing Experts</span>
                <motion.span
                  className="absolute -bottom-0.5 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              <span className="text-base sm:text-3xl lg:text-4xl font-bold text-gray-300 mt-1 sm:mt-2 block">
                Same-Day Installation & Repair
              </span>
            </motion.h1>

            {/* Description - Shorter on mobile */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-3 sm:mt-6 text-sm sm:text-lg leading-relaxed text-gray-300"
            >
              Licensed experts. Fast service. Competitive prices.
              <span className="hidden sm:inline"> Whether you need AC repair, furnace service, water heater replacement, or full-service plumbing — our fully stocked vans are ready to finish the job on the first visit.</span>
            </motion.p>

            {/* CTA Buttons - Prominent and tap-friendly */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="/quote"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-6 py-3.5 sm:px-8 sm:py-4 text-base font-bold text-white shadow-xl hover:shadow-2xl transition-all"
              >
                <span className="relative z-10">Get Free Quote</span>
                <TrendingUp className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:8006974014"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#EA5D19] bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-base font-bold text-[#EA5D19] shadow-lg hover:shadow-xl hover:bg-[#FFF5F0] transition-all"
              >
                <Phone className="h-5 w-5 shrink-0 group-hover:rotate-12 transition-transform" />
                Call (800) 697-4014
              </a>
            </motion.div>

            {/* MOBILE: Image appears here, right after CTAs */}
            <div className="lg:hidden mt-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Image with caption overlay */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/sos-plumbing-and-air-service-van.webp"
                    alt="SOS Plumbing and Air service van ready for dispatch"
                    width={700}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Mobile Caption Badge - Conversion-focused */}
                <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Truck className="h-3.5 w-3.5 text-[#EA5D19]" />
                    Fully Stocked Vans
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#EA5D19]" />
                    Same-Day Service
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Trust Badges - After image on mobile, inline on desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-5 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4"
            >
              <div className="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1 p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-[#FBBC05] text-[#FBBC05]" />
                  <span className="text-base sm:text-lg font-bold text-white tabular-nums">{rating.toFixed(1)}</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Google Rating</span>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1 p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <GoogleG className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                    {animatedCount}+
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Reviews</span>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1 p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#EA5D19]" />
                  <span className="text-base sm:text-lg font-bold text-white">100%</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Licensed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Desktop Image (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:flex relative h-full flex-col justify-between"
          >
            {/* TOP BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4, type: "spring" }}
              className="self-end mb-4"
            >
              <div className="rounded-full bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] px-4 py-2 shadow-lg border-2 border-white">
                <p className="text-xs font-bold text-white whitespace-nowrap">
                  24/7 Emergency
                </p>
              </div>
            </motion.div>

            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl card-elevated group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <Image
                src="/sos-plumbing-and-air-service-van.webp"
                alt="SOS Plumbing and Air service van ready for dispatch"
                width={700}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* BOTTOM BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6"
            >
              <div className="relative rounded-xl p-4 shadow-lg border border-white/20 bg-white/80 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] flex items-center justify-center shadow-md">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#11110E] flex items-center gap-1.5">
                      Same-Day Service Available
                      <span className="inline-flex items-center rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm ring-2 ring-green-300/30">
                        LIVE
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Fully stocked vans ready to go
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
