import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { PlumbingServiceCards } from "@/components/home/PlumbingServiceCards";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Reviews } from "@/components/home/Reviews";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <PlumbingServiceCards />
      <WhyChooseUs />
      <Reviews />
      <TrustedBrands />
      <FAQ />
    </>
  );
}