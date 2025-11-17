"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "../ui/card";

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
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center mb-8 w-full text-collapse-fix"
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-2xl border-0 shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
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

                  <p className="text-gray-700 leading-relaxed flex-grow">
                    {review.text}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
