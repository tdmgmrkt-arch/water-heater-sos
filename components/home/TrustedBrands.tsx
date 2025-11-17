"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Rheem", image: "/Rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/Bradford-White-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
];

export function TrustedBrands() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto text-center relative z-20"
        >
          <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-8">
            Trusted Brands
          </h2>

          {/* FIXED GRID (z-20 + min height) */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 items-center relative z-20 min-h-[120px]">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                {/* FIXED IMAGE WRAPPER (height + z-index) */}
                <div className="relative h-20 w-28 mx-auto z-20">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} logo - trusted water heater brand`}
                    fill
                    sizes="100px"
                    className="object-contain z-20"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
