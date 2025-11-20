"use client";

import { motion } from "framer-motion";
import { Phone, Award, Users, Clock, Shield, Wrench, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA5D19] text-sm text-white font-semibold mb-4 tracking-wide">
                Family-Owned & Inland Empire Trusted
              </span>
              <h1 className="text-5xl font-extrabold text-[#11110E] sm:text-6xl lg:text-7xl mb-4 leading-tight">
                <span className="text-[#EA5D19]">About </span>Water Heater SOS
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Water Heater SOS is a family-owned business based in Redlands, California, serving nearly the entire Inland Empire area.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We specialize in water heater installation, replacement, and repair. We also provide full-service plumbing including leak detection, sewer services, shower repair and replacement, toilet installation and repair, and faucet repair and replacement. We pride ourselves on customer service and work hard to earn your business!
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/wh-sos-service-rep.webp"
                  alt="Water Heater SOS Service Representative"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialties Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Choose Water Heater SOS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted water heater and plumbing experts serving the Inland Empire
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Wrench,
                title: "Water Heater Specialists",
                description: "Expert installation, replacement, and repair of all water heater types including tankless and traditional tank systems. We're dedicated to restoring your hot water quickly with the highest quality standards."
              },
              {
                icon: Shield,
                title: "Full Service Plumbing",
                description: "Comprehensive plumbing solutions including leak detection, sewer services, drain cleaning, and all fixture installations. One trusted company for all your plumbing needs."
              },
              {
                icon: Clock,
                title: "Same-Day Service",
                description: "Fast response times with same-day installation and repair services available throughout the Inland Empire. We understand water heater emergencies can't wait."
              },
              {
                icon: Award,
                title: "Licensed & Insured",
                description: "Fully licensed (CA LIC# 1140776), bonded, and insured professionals committed to quality workmanship, safety, and code compliance on every job."
              },
              {
                icon: Users,
                title: "Family-Owned Business",
                description: "A local family business that treats every customer like family. Personalized service, honest pricing, and a commitment to earning your trust with every visit."
              },
              {
                icon: Phone,
                title: "Exceptional Customer Service",
                description: "Transparent pricing, clear communication, and respect for your home and time. We work hard to earn your business and exceed your expectations."
              }
            ].map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#EA5D19] p-3">
                  <specialty.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {specialty.title}
                </h3>
                <p className="text-gray-600">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600">
              Serving the Inland Empire since 2019
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl font-extrabold text-[#EA5D19]">2019</div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
              Water Heater SOS was established in 2019 with a simple mission: to provide the Inland Empire with reliable, professional water heater and plumbing services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Since our founding, we've grown from a small family operation to a trusted name in water heater installation and repair throughout Southern California. Our commitment to quality service and customer satisfaction has remained unchanged since day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Business Owner Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Meet the Business Owner
            </h2>
            <p className="text-xl text-gray-600">
              Local leadership committed to excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-[#11110E] mb-2">Anna M.</h3>
                <p className="text-xl text-[#EA5D19] font-semibold">Founder & Owner</p>
              </div>
              <div className="space-y-6 text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Anna M. founded Water Heater SOS in 2019 with a vision to bring honest, reliable water heater and plumbing services to the Inland Empire. As a local resident and business owner, Anna understands the importance of having a trustworthy plumber you can count on when water heater emergencies strike.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Under Anna's leadership, Water Heater SOS has built a reputation for exceptional customer service, transparent pricing, and quality workmanship. Her hands-on approach ensures that every customer receives the personalized attention and professional service they deserve.
                </p>
                <div className="pt-4">
                  <blockquote className="text-xl italic text-gray-900 font-medium">
                    "We treat every home like it's our own. That's the foundation of our business, and it's what keeps our customers coming back and referring their friends and family."
                  </blockquote>
                  <p className="mt-2 text-gray-600">— Anna M., Founder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact Water Heater SOS today for reliable, professional water heater and plumbing services you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+18006974014"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#EA5D19] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                (800) 697-4014
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11110E] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
