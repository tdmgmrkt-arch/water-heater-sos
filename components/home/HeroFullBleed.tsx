"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Star, Shield, TrendingUp, Zap } from "lucide-react";
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

export function HeroFullBleed({ rating, reviewCount }: HeroProps) {
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
    <section className="relative overflow-hidden bg-[#11110E]">
      {/* Background image — bounded to the right side on desktop so the van's front isn't buried under the gradient */}
      <div className="absolute inset-0">
        {/* Mobile: full-bleed centered */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/sos-service-van-residential-hero.jpeg"
            alt="SOS Plumbing and Air service van at an Inland Empire home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11110E]/85 via-[#11110E]/40 to-[#11110E]/60" />
        </div>

        {/* Desktop: image lives in the right ~72% of the hero, van sits right and rides high, soft blend into the dark column */}
        <div className="hidden lg:block absolute inset-y-0 left-[28%] right-0">
          <Image
            src="/sos-service-van-residential-hero.jpeg"
            alt="SOS Plumbing and Air service van at an Inland Empire home"
            fill
            priority
            sizes="72vw"
            className="object-cover object-[35%_70%]"
          />
          {/* Subtle dark wash across the whole image for cohesion + slight text safety */}
          <div className="absolute inset-0 bg-[#11110E]/30" />
          {/* Very wide feathered left edge — long, gradual blend so the seam disappears */}
          <div
            className="absolute inset-y-0 -left-1 w-[52rem]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #11110E 0%, rgba(17,17,14,0.92) 20%, rgba(17,17,14,0.65) 45%, rgba(17,17,14,0.3) 75%, transparent 100%)",
            }}
          />
        </div>

        {/* Desktop solid dark left column */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[28%] bg-[#11110E]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
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
              className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border-2 border-[#EA5D19]/30 bg-gradient-to-r from-[#FFF5F0] via-white to-[#FFF5F0] px-3 py-1.5 sm:px-5 sm:py-2.5 shadow-lg hover:shadow-xl transition-shadow"
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
              className="mt-4 sm:mt-6 text-[1.75rem] leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg"
            >
              The Inland Empire&apos;s{" "}
              <span className="relative inline-block">
                <span className="text-white">Water Heater, HVAC & Plumbing Experts</span>
                <motion.span
                  className="absolute -bottom-0.5 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              <span className="text-base sm:text-3xl lg:text-4xl font-bold mt-1 sm:mt-2 block">
                <span className="text-gradient">Same-Day Installation & Repair</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-3 sm:mt-6 text-sm sm:text-lg leading-relaxed text-gray-200 max-w-xl drop-shadow"
            >
              Licensed experts. Fast service. Competitive prices.
              <span className="hidden sm:inline"> Whether you need AC repair, furnace service, water heater replacement, or full-service plumbing — our fully stocked vans are ready to finish the job on the first visit.</span>
            </motion.p>

            {/* CTA Buttons */}
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

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-5 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg"
            >
              <div className="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1 p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-[#FBBC05] text-[#FBBC05]" />
                  <span className="text-base sm:text-lg font-bold text-white tabular-nums">{rating.toFixed(1)}</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 font-medium">Google Rating</span>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1 p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <GoogleG className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                    {animatedCount}+
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 font-medium">Reviews</span>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1 p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#EA5D19]" />
                  <span className="text-base sm:text-lg font-bold text-white">100%</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 font-medium">Licensed</span>
              </div>
            </motion.div>

            {/* Same-Day Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-4 sm:mt-5 max-w-lg"
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

          {/* Right column intentionally empty — the background image fills it */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
