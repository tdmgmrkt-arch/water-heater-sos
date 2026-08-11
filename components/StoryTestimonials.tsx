"use client";

import { useState } from "react";
import {
  Star,
  MapPin,
  Calendar,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export type StoryTestimonial = {
  author: string;
  city: string;
  service: string;
  technician: string;
  date: string;
  isoDate: string;
  body: string;
};

// ─── Transparent Pricing themed — for /transparent-pricing ─────────────────
export const STORIES_TRANSPARENT_PRICING: StoryTestimonial[] = [
  {
    author: "Marcus T.",
    city: "Lake Elsinore, CA",
    service: "40-Gallon Water Heater Replacement",
    technician: "SOS Plumbing and Air Tech",
    date: "June 15, 2026",
    isoDate: "2026-06-15",
    body:
      "Our water heater went out on a Saturday morning — cold showers, panicking family. Called SOS and they gave me a price range right over the phone, then stuck to it exactly when they arrived. The technician walked me through everything before touching a single pipe: the new unit, the expansion tank, the seismic strapping, the permit. Invoice matched the quote dollar for dollar. That never happens. Couldn't be more relieved.",
  },
  {
    author: "Diana R.",
    city: "Murrieta, CA",
    service: "Tankless Water Heater Upgrade",
    technician: "SOS Plumbing and Air Tech",
    date: "May 3, 2026",
    isoDate: "2026-05-03",
    body:
      "We've been burned by contractors who lowball the estimate and then pile on 'unforeseen' charges. SOS was the opposite. Before they started on our tankless upgrade they laid out every line item — gas line modification, venting, permit fee as a pass-through. When it was done I compared the quote to the invoice side by side. Identical. The hot water is incredible and I actually trust these guys, which is rare to say.",
  },
  {
    author: "Kevin S.",
    city: "Rancho Cucamonga, CA",
    service: "AC Capacitor Replacement",
    technician: "SOS Plumbing and Air Tech",
    date: "July 8, 2026",
    isoDate: "2026-07-08",
    body:
      "AC went out in the middle of a heat wave. The tech diagnosed it fast — capacitor was shot. He showed me the failed part, explained what a capacitor does, told me the price before opening his toolbox. No upsell, no 'while I'm here' add-ons. Paid exactly what he quoted. He was out in under an hour and the house was cool again by afternoon. Simple, honest, fast.",
  },
  {
    author: "Patricia M.",
    city: "Riverside, CA",
    service: "Slab Leak Detection & Pipe Reroute",
    technician: "SOS Plumbing and Air Tech",
    date: "April 20, 2026",
    isoDate: "2026-04-20",
    body:
      "Slab leaks are a homeowner's nightmare — I'd heard horror stories about companies finding one leak and then 'discovering' three more. SOS was completely transparent. They used electronic detection equipment, showed me exactly where the leak was on a schematic, and gave me two options with prices for each. No surprise, no pressure. We went with the reroute and the final number was within $50 of the estimate. Exceptional professionalism.",
  },
  {
    author: "James O.",
    city: "Corona, CA",
    service: "Whole-Home PEX Repipe",
    technician: "SOS Plumbing and Air Tech",
    date: "March 12, 2026",
    isoDate: "2026-03-12",
    body:
      "A full repipe sounds terrifying but SOS made the pricing completely clear upfront. They explained why PEX made more sense for our house than copper, broke down labor vs. materials vs. permit cost, and gave us a firm number — not a range with asterisks. Our 1980s house had been having water pressure issues for years. Post-repipe, every faucet runs perfectly. The quote-to-invoice match gave me confidence the moment I signed. Would not hesitate to recommend.",
  },
];

const REVIEW_AGGREGATE_RATING = 5.0;

type StoryTestimonialsProps = {
  heading?: string;
  subheading?: string;
  stories?: StoryTestimonial[];
};

export function StoryTestimonials({
  heading = "Real Stories From Real Customers",
  subheading = "Specifics on how we communicate, follow up, and leave your home better than we found it.",
  stories: storiesProp,
}: StoryTestimonialsProps = {}) {
  const stories = storiesProp ?? STORIES_TRANSPARENT_PRICING;
  const [index, setIndex] = useState(0);
  const total = stories.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const reviewSchemas = stories.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: s.body,
    datePublished: s.isoDate,
    author: {
      "@type": "Person",
      name: s.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: REVIEW_AGGREGATE_RATING,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "SOS Plumbing and Air",
      address: {
        "@type": "PostalAddress",
        addressRegion: "CA",
        addressLocality: s.city.replace(", CA", ""),
      },
    },
    about: s.service,
  }));

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
      {reviewSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EA5D19]/10 border border-[#EA5D19]/20 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#EA5D19] mb-6">
            <Star className="h-4 w-4" aria-hidden="true" />
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110E] mb-4">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {stories.map((s, i) => (
                <article
                  key={`${s.author}-${s.isoDate}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                  aria-hidden={i !== index}
                  className="flex flex-col shrink-0 w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white"
                >
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
                    {/* Header: rating + service */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="h-4 w-4 fill-[#EA5D19] text-[#EA5D19]"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EA5D19]/10 border border-[#EA5D19]/20 rounded-full">
                        <Wrench className="h-3 w-3 text-[#EA5D19]" aria-hidden="true" />
                        <span className="text-xs font-semibold text-[#EA5D19] whitespace-nowrap">
                          {s.service}
                        </span>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-6 flex-1 italic">
                      &ldquo;{s.body}&rdquo;
                    </p>

                    {/* Attribution footer */}
                    <div className="pt-5 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <p className="text-[#11110E] font-semibold text-sm">{s.author}</p>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-0.5">
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                          <span>{s.city}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          <time dateTime={s.isoDate}>{s.date}</time>
                        </div>
                        <span className="text-gray-400">Verified: {s.service}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 lg:-translate-x-8 z-20 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md border border-gray-200 hover:border-[#EA5D19]/40 hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA5D19]"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA5D19]" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 lg:translate-x-8 z-20 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md border border-gray-200 hover:border-[#EA5D19]/40 hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA5D19]"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA5D19]" aria-hidden="true" />
          </button>
        </div>

        {/* Dot pagination */}
        <div
          className="flex justify-center items-center gap-2 mt-8"
          role="tablist"
          aria-label="Select testimonial"
        >
          {stories.map((s, i) => (
            <button
              key={`${s.author}-dot`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA5D19] ${
                i === index
                  ? "w-8 h-2 bg-[#EA5D19]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-xs text-gray-500 mt-4">
          {index + 1} of {total}
        </p>
      </div>
    </section>
  );
}
