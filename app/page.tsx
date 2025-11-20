import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Reviews } from "@/components/home/Reviews";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <WhyChooseUs />
      <Reviews />
      <TrustedBrands />
      <FAQ />
    </>
  );
}