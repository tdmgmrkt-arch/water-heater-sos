"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Expanded Menu */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute bottom-20 right-0 space-y-3"
                >
                  {/* Call Button */}
                  <motion.a
                    href="tel:8006974014"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all pl-5 pr-6 py-3 border-2 border-[#EA5D19]/20 hover-lift"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] flex items-center justify-center shadow-md">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-500 uppercase">Call Now</p>
                      <p className="text-sm font-bold text-[#11110E] whitespace-nowrap">
                        (800) 697-4014
                      </p>
                    </div>
                  </motion.a>

                  {/* Quote Button */}
                  <motion.a
                    href="/quote"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all pl-5 pr-6 py-3 border-2 border-[#EA5D19]/20 hover-lift"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] flex items-center justify-center shadow-md">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-500 uppercase">Get Quote</p>
                      <p className="text-sm font-bold text-[#11110E] whitespace-nowrap">
                        Free Estimate
                      </p>
                    </div>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-16 h-16 rounded-full shadow-2xl transition-all duration-300 ${
                isExpanded
                  ? "bg-gray-900"
                  : "bg-gradient-to-br from-[#EA5D19] to-[#FF6E2E] animate-pulse-glow"
              }`}
            >
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="h-6 w-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="phone"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Phone className="h-6 w-6 text-white animate-pulse" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Ripple Effect */}
              {!isExpanded && (
                <span className="absolute inset-0 rounded-full bg-[#EA5D19] animate-ping opacity-20" />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
