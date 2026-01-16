"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const brands = [
  { name: "Rheem", image: "/Rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/Bradford-White-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
];

interface TrustedBrandsProps {
  className?: string;
}

export function TrustedBrands({ className = "" }: TrustedBrandsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className={`py-10 sm:py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto text-center relative z-20"
        >
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#11110E] mb-5 sm:mb-8">
            Trusted Brands
          </h2>

          <div className="h-1 w-16 sm:w-20 bg-[#EA5D19] mx-auto rounded-full mb-6 sm:mb-8" />

          {/* Mobile Carousel */}
          <div className="sm:hidden relative px-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-3">
                {brands.map((brand, index) => (
                  <div
                    key={brand.name}
                    className="pl-3 flex-[0_0_50%] min-w-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 py-4"
                    >
                      <div className="relative h-14 w-24 mx-auto z-20">
                        <Image
                          src={brand.image}
                          alt={`${brand.name} logo - trusted water heater brand`}
                          fill
                          sizes="100px"
                          className="object-contain z-20"
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous brands"
            >
              <ChevronLeft className="h-4 w-4 text-[#EA5D19]" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next brands"
            >
              <ChevronRight className="h-4 w-4 text-[#EA5D19]" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-1.5 mt-4">
              {brands.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === selectedIndex
                      ? "w-6 bg-[#EA5D19]"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to brand ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-3 gap-6 lg:grid-cols-5 items-center relative z-20 min-h-[120px]">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="relative h-16 w-24 lg:h-20 lg:w-28 mx-auto z-20">
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
