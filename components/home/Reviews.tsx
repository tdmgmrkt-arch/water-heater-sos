"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const reviews = [
  {
    name: "Jean S.",
    location: "Highland, CA",
    image: "/jean-s-review.webp",
    text: "The technician Jason Simpson did an excellent job. He performed very good service taking the time to find the problem above and beyond what was expected . The system is now working perfectly.\nI highly recommend him and the company.",
  },
  {
    name: "Mario S.",
    location: "Moreno Valley, CA",
    image: "/mario-s-review.webp",
    text: "Jason was on time, very professional and very informative; he explained everything he was doing and ensured my questions were answered.\nI will definitely be doing more business with this company!",
  },
  {
    name: "Lisa B.",
    location: "Beaumont, CA",
    image: "/lisa-b-review.webp",
    text: "I woke up to no hot water one morning and discovered my water heater was leaking all over the place. I put a request in online and got several quotes theirs was considerably lower. When I called to schedule an appointment they fit me in the same day.",
  },
  {
    name: "Mark B.",
    location: "Jurupa Valley, CA",
    image: "/mark-b-review.webp",
    text: "My old water heater was leaking and needed to be replaced. Josh was there the same day and was courteous, came by on time, and was really skilled at what he did. Anyway, awesome job and pricing was on point so I'm happy! If you like timely service and done right these are the guys to ring.",
  },
  {
    name: "Linda C.",
    location: "Yucaipa, CA",
    image: "/linda-c-review.webp",
    text: "I needed to get my tankless water heater fixed because it was showing an error code. Josh came out and was very professional. He did a full inspection and was able to fix my unit by replacing a part that was under warranty. I would recommend them to anyone that needs their vent cleaned.",
  },
];

export function Reviews() {
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
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center mb-12 w-full text-collapse-fix"
        >
          <h2 className="text-5xl font-bold text-[#11110E] sm:text-4xl mb-6">
            Reviews from Homeowners
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-[#EA5D19] text-[#EA5D19]" />
            ))}
          </div>
        </motion.div>

        <div className="relative px-12">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="pl-4 flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full min-h-[400px] rounded-2xl border-0 shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full shrink-0">
                          <Image
                            src={review.image}
                            alt={`${review.name} review photo`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#11110E]">{review.name}</h3>
                          <p className="text-sm text-gray-600">{review.location}</p>
                        </div>
                      </div>

                      <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#EA5D19] text-[#EA5D19]" />
                        ))}
                      </div>

                      <p className="text-gray-700 leading-relaxed grow">
                        {review.text}
                      </p>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5 text-[#EA5D19]" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5 text-[#EA5D19]" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-8 bg-[#EA5D19]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
