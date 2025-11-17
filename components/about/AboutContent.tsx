"use client";

import { motion } from "framer-motion";
import { Phone, Award, Users, Clock, Shield, Wrench } from "lucide-react";
import Image from "next/image";

export function AboutContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                About Water Heater SOS
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Water Heater SOS is a family-owned business based in Redlands, California, and we service nearly the entire Inland Empire area. We specialize in water heater installation, replacement, and repair. We also provide full service plumbing; including leak detection, sewer services, shower repair and replacement, toilet installation and repair, and faucet repair and replacement.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We pride ourselves on customer service and we work hard to earn your business!
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="tel:8006974014"
                  className="inline-flex items-center gap-3 rounded-full bg-[#EA5D19] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#d54d0f] hover:shadow-xl"
                >
                  <Phone className="h-6 w-6" />
                  (800) 697-4014
                </a>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-4">
              Our Specialties
            </h2>
            <div className="h-1 w-24 bg-[#EA5D19] mx-auto"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Wrench,
                title: "Water Heater Services",
                description: "Expert installation, replacement, and repair of all water heater types including tankless and traditional tank systems."
              },
              {
                icon: Shield,
                title: "Full Service Plumbing",
                description: "Comprehensive plumbing solutions including leak detection, sewer services, and fixture installations."
              },
              {
                icon: Clock,
                title: "24/7 Emergency Service",
                description: "Round-the-clock availability for urgent water heater and plumbing emergencies throughout the Inland Empire."
              },
              {
                icon: Award,
                title: "Licensed & Insured",
                description: "Fully licensed, bonded, and insured professionals committed to quality workmanship and safety."
              },
              {
                icon: Users,
                title: "Family-Owned",
                description: "A local family business that treats every customer like family with personalized service and care."
              },
              {
                icon: Phone,
                title: "Same-Day Service",
                description: "Fast response times with same-day installation and repair services available in most cases."
              }
            ].map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#EA5D19] rounded-xl">
                    <specialty.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#11110E]">
                    {specialty.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-7xl font-bold text-[#11110E] sm:text-4xl mb-4">
              Our History
            </h2>
            <div className="h-1 w-24 bg-[#EA5D19] mx-auto mb-8"></div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl font-bold text-[#EA5D19] mb-4">2019</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Water Heater SOS was established in 2019 with a simple mission: to provide the Inland Empire with reliable, professional water heater and plumbing services. Since our founding, we&apos;ve grown from a small family operation to a trusted name in water heater installation and repair throughout Southern California. Our commitment to quality service and customer satisfaction has remained unchanged since day one.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Business Owner Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-7xl font-bold text-[#11110E] sm:text-4xl mb-4">
              Meet the Business Owner
            </h2>
            <div className="h-1 w-24 bg-[#EA5D19] mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-[#11110E] mb-2">Anna M.</h3>
                <p className="text-xl text-[#EA5D19] font-semibold">Founder & Owner</p>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Anna M. founded Water Heater SOS in 2019 with a vision to bring honest, reliable water heater and plumbing services to the Inland Empire. As a local resident and business owner, Anna understands the importance of having a trustworthy plumber you can count on when water heater emergencies strike.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Under Anna&apos;s leadership, Water Heater SOS has built a reputation for exceptional customer service, transparent pricing, and quality workmanship. Her hands-on approach ensures that every customer receives the personalized attention and professional service they deserve.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  &quot;We treat every home like it&apos;s our own,&quot; Anna says. &quot;That&apos;s the foundation of our business, and it&apos;s what keeps our customers coming back and referring their friends and family.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#11110E] to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-7xl font-bold text-white sm:text-4xl mb-6">
              Ready to Experience the Water Heater SOS Difference?
            </h2>
            <p className="text-3xl text-gray-300 mb-8 mx-auto">
              Join thousands of satisfied customers throughout the Inland Empire who trust us for their water heater and plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8006974014"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#EA5D19] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#d54d0f] hover:shadow-xl"
              >
                <Phone className="h-6 w-6" />
                (800) 697-4014
              </a>
              <a
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#11110E] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Get Free Estimate
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
