"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const brands = [
  { name: "Rheem", image: "/rheem_logo-1.webp" },
  { name: "Hajoca", image: "/hajoca-1.webp" },
  { name: "Rinnai", image: "/rinnai-1.webp" },
  { name: "Bradford White", image: "/bradford-white-logo-1.webp" },
  { name: "Navien", image: "/navien-1.webp" },
];

const faqs = [
  {
    question: "What brand of water heaters do you install or replace?",
    answer: `We prioritize the installation of Bradford White Tank Water Heaters (40 Gallon & 50 Gallon) due to their exceptional quality and durability. These units are proudly manufactured in the USA, ensuring they meet high standards of reliability and longevity. This choice reflects our commitment to providing our customers with products that offer long-term value.

Regarding tankless water heaters, we highly recommend Rinnai for their advanced technology and superior quality. Rinnai systems are known for their efficiency, providing endless hot water on demand, which makes them an excellent choice for modern households looking to reduce energy costs and waste.

However, our expertise extends beyond these brands. We offer a comprehensive service for various other leading manufacturers:

A. O. Smith – Known for their innovation in water heating technology.
Rheem – Offers a wide range of options from traditional to high-efficiency models.
Kenmore – Popular for its reliable performance and customer support.
Navien – Specializes in condensing tankless water heaters, enhancing energy efficiency.
Stiebel Eltron – Provides eco-friendly solutions with a focus on heat pump technology.
EcoSmart – Ideal for smaller installations with their compact tankless models.
Bosch – Recognized for their engineering excellence in heating solutions.
Whirlpool – Offers robust and versatile water heating options for different needs.

Our installation process ensures that each unit operates efficiently and is tailored to each homeowner's needs. Whether you're looking for a traditional tank water heater or a modern tankless system, we ensure that the product meets and exceeds your expectations in terms of performance and durability.`,
  },
  {
    question: "How long does it take to get my free water heater estimate?",
    answer: "We work seven days a week, and in most cases, we can provide you with a quote for a new water heater the same day. Additionally, if you'd like to move forward with having a water heater installed, we can usually schedule you for same-day service.",
  },
  {
    question: "If I approve your estimate how fast can you get the work done?",
    answer: "It depends on the time of day you approve the estimate. If you approve the estimate early enough, we can install your new hot water heater the same day. In almost all cases, we can install your new water heater within 24 hours.",
  },
  {
    question: "Do you offer free quotes on tankless water heaters?",
    answer: "Yes, we offer free online estimates on tankless water heaters. However, due to the complexity of the installation, the price may be subject to change. Each installation is unique, and the cost is based on the logistics of your situation. For instance, when a homeowner upgrades from a tank water heater to a tankless one, differences in electrical and venting can affect the cost.\n\nWhile we can provide a free tankless water heater quote, it is often best to have one of our technicians perform a thorough site visit at your home. This ensures the proper measurements and calculations for the installation, giving you peace of mind about the accuracy of our service.\n\nIf you currently have a tankless water heater and need a new unit, the quote process is easier because most of the components required for the tankless water heater are already installed, which makes our quotes more accurate compared to switching from a tank water heater to a tankless model.",
  },
  {
    question: "What cities does your service area cover?",
    answer: "We provide professional installation services by experienced plumbers who guarantee the quality of all water heater repair and installation services. Our service area encompasses a wide range of cities within the Inland Empire, ensuring that residents and businesses have access to our expert services. Here are the cities we proudly serve:\n\nRedlands, Yucaipa, San Bernardino, Highland, Mentone, Loma Linda, Rialto, Bloomington, Colton, Ontario, Rancho Cucamonga, Upland, Fontana, Riverside, Jurupa Valley, Corona, Banning, Beaumont, Calimesa, Moreno Valley\n\nIf you're uncertain whether your city is included in our service area, we encourage you to reach out to us. You can contact us via text or phone at (800) 697-4014. Our team is ready to assist you in determining if we can provide our services to your location, ensuring you receive the support you need.",
  },
];

export function QuoteContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    heaterType: "",
    currentSize: "",
    serviceType: "",
    issue: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData, selectedFile);
  };

  return (
    <>
      {/* Hero Section with Two Columns */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-[#11110E] sm:text-5xl lg:text-6xl mb-6">
                Free Online Water Heater Estimate
              </h1>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#11110E] mb-4">Lisa B.</h3>
                <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                  I woke up to no hot water one morning and discovered my water heater was leaking all over the place. I put a request in online and got several quotes theirs was considerably lower. When I called to schedule an appointment they fit me in the same day.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  They showed up a few hours later had everything they needed to replace my water heater, and it only took a few hours. I would totally recommend them if anyone needs a new hot water heater. -Lisa B.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[#11110E] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[#11110E] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#11110E] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all"
                    placeholder="phone"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#11110E] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all"
                    placeholder="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-[#11110E] mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all"
                    placeholder="address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="heaterType" className="block text-sm font-semibold text-[#11110E] mb-2">
                    Are you looking for a tankless water heater or a traditional tank water heater?
                  </label>
                  <select
                    id="heaterType"
                    name="heaterType"
                    value={formData.heaterType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="tankless">Tankless</option>
                    <option value="tank">Traditional Tank</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentSize" className="block text-sm font-semibold text-[#11110E] mb-2">
                    What size water heater do you currently have?
                  </label>
                  <select
                    id="currentSize"
                    name="currentSize"
                    value={formData.currentSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="30">30 Gallon</option>
                    <option value="40">40 Gallon</option>
                    <option value="50">50 Gallon</option>
                    <option value="75">75 Gallon</option>
                    <option value="tankless">Tankless</option>
                    <option value="unknown">Don't Know</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-[#11110E] mb-2">
                    Are you looking for repairs or replacement?
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="repairs">Repairs</option>
                    <option value="replacement">Replacement</option>
                    <option value="unsure">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="issue" className="block text-sm font-semibold text-[#11110E] mb-2">
                    What is currently wrong with your water heater?
                  </label>
                  <textarea
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe the issue..."
                  />
                </div>

                <div>
                  <label htmlFor="photo" className="block text-sm font-semibold text-[#11110E] mb-2">
                    Please upload a picture of your current water heater from a view point that allows us to see the entire set up.
                  </label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EA5D19] focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#EA5D19] file:text-white hover:file:bg-[#FF6E2E] file:cursor-pointer"
                  />
                  <p className="mt-2 text-sm text-gray-600">
                    {selectedFile ? selectedFile.name : "No file chosen"}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#EA5D19] to-[#FF6E2E] text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all hover:scale-105"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-7xl text-center relative z-20"
          >
            <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-8">
              Trusted Brands
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />

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

      {/* Expert Solutions Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
              Expert Water Heater Solutions in Southern California
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

            <p className="text-lg text-gray-700 leading-relaxed">
              When it's time to upgrade your water heater in Southern California, Water Heater SOS is here to guide you through the process. We'll evaluate your household's water usage and assist in choosing the ideal water heater—be it tankless, electric, or gas—to perfectly match your requirements. We even provided discounts for water heater installations that change from month to month.
            </p>
          </motion.div>
        </div>
      </section>

      {/* When to Replace or Repair Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
              When to Replace or Repair
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

            <p className="text-lg text-gray-700 leading-relaxed">
              When deciding whether to repair or replace your water heater, consider that while a plumber can fix many issues, it might be time for a replacement if the warranty on your unit has expired, if the cost of repairs is more than half the price of a new water heater, or if your current unit is leaking. Our team will provide a detailed analysis of your situation, offering facts to aid your decision-making process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Installation Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
              Water Heater Installation Services
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

            <p className="text-lg text-gray-700 leading-relaxed">
              We provide comprehensive water heater installation services, carefully considering factors such as the size of your household—how many people live in your home—and your usage patterns. This involves understanding your specific hot water requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Determining Needs Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#11110E] mb-6">
              Determining Your Water Heater Needs
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] rounded-full mb-8" />

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When selecting the right water heater, our approach varies slightly between tankless and traditional tank models. For tankless water heaters, our experts begin by thoroughly assessing your household's hot water consumption. They then evaluate the flow rate of your fixtures and appliances, ensuring the system can efficiently meet your demands. Additionally, we consider the average groundwater temperatures in your area to recommend the most suitable unit for your home.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              On the other hand, the process for traditional tank water heaters is more straightforward. Here, we focus on calculating the volume of water necessary to meet your household's peak demand, ensuring that you have enough hot water when needed most.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With Water Heater SOS, you're not just getting a service; you're gaining a partner to ensure your home has a reliable, efficient water heating solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <h2 className="text-3xl font-bold text-[#11110E] sm:text-4xl mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="h-1 w-20 bg-[#EA5D19] mx-auto rounded-full mb-8" />
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-2xl bg-gray-50 px-6 shadow-md border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[#11110E] hover:text-[#EA5D19] py-6 flex items-start justify-between gap-2">
                      <span className="flex-shrink-0 mr-2 text-[#EA5D19] font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-grow text-collapse-fix">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-6 whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
}
