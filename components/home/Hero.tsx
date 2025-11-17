"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Star, Award, Shield, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    const target = 500;
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCustomerCount(target);
        clearInterval(timer);
      } else {
        setCustomerCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#11110E] via-[#1a1917] to-[#11110E] py-16 lg:py-24">
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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center h-full">
          
          {/* LEFT COLUMN — UNTOUCHED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6 w-full min-w-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#EA5D19]/20 bg-gradient-to-r from-[#FFF5F0] via-white to-[#FFF5F0] px-5 py-2.5 shadow-md hover-lift"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="h-4 w-4 fill-[#EA5D19] text-[#EA5D19]" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm font-bold text-gradient">
                #1 Rated Water Heater Experts
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl leading-[1.15] font-extrabold tracking-tight text-white! sm:text-5xl lg:text-6xl"
            >
              Expert Water Heater{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Services</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mt-2 block">
                Same-Day Installation & Repair
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg leading-relaxed text-gray-300"
            >
              Whether you need to replace or repair your water heater, our expert plumbers can do it quickly and at some of the most competitive prices. Our vans are stocked and ready to complete your job on the same visit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="/quote"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-base font-bold text-white shadow-xl hover:shadow-2xl transition-all btn-ripple shine-effect overflow-hidden"
              >
                <span className="relative z-10 whitespace-nowrap">Get Free Quote</span>
                <TrendingUp className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:8006974014"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#EA5D19] bg-white px-8 py-4 text-base font-bold text-[#EA5D19] shadow-lg hover:shadow-xl hover:bg-[#FFF5F0] transition-all whitespace-nowrap hover-lift"
              >
                <Phone className="h-5 w-5 shrink-0 group-hover:rotate-12 transition-transform" />
                Call Us Now!
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="flex flex-col items-start gap-1 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-[#EA5D19] text-[#EA5D19]" />
                  <span className="text-lg font-bold text-white">5.0</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Rating</span>
              </div>

              <div className="flex flex-col items-start gap-1 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-[#EA5D19]" />
                  <span className="text-lg font-bold text-white tabular-nums animate-counting">
                    {customerCount}+
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Customers</span>
              </div>

              <div className="flex flex-col items-start gap-1 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-[#EA5D19]" />
                  <span className="text-lg font-bold text-white">100%</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Licensed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — FIXED LAYOUT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative h-full flex flex-col justify-between"
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
              <div className="absolute inset-0 rounded-3xl  transition-all duration-500" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              <div className="relative image">
                <Image
                  src="/wh-sos-service-van.webp"
                  alt="Water Heater SOS service van ready for dispatch"
                  width={700}
                  height={500}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* BOTTOM BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6"
            >
              <div className="glass-card rounded-xl p-4 shadow-xl border-2 border-white/40 bg-white/95 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] flex items-center justify-center animate-pulse-glow">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#11110E] flex items-center gap-2">
                      Same-Day Service Available
                      <span className="inline-flex items-center rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold text-white animate-pulse">
                        LIVE
                      </span>
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
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
