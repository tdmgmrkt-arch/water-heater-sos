import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { HvacServiceCards } from "@/components/home/HvacServiceCards";
import { PlumbingServiceCards } from "@/components/home/PlumbingServiceCards";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Reviews } from "@/components/home/Reviews";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { FAQ } from "@/components/home/FAQ";
import { getLiveRating } from "@/lib/google-rating";

export default async function HomePage() {
  const { rating, reviewCount } = await getLiveRating();

  return (
    <>
      <Hero rating={rating} reviewCount={reviewCount} />
      <ServiceCards />
      <HvacServiceCards />
      <PlumbingServiceCards />
      <WhyChooseUs />
      <Reviews />
      <TrustedBrands />
      <FAQ />
    </>
  );
}
