import { Hero as HeroMobile } from "@/components/home/Hero";
import { HeroFullBleed } from "@/components/home/HeroFullBleed";
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
      <div className="lg:hidden">
        <HeroMobile rating={rating} reviewCount={reviewCount} />
      </div>
      <div className="hidden lg:block">
        <HeroFullBleed rating={rating} reviewCount={reviewCount} />
      </div>
      <PlumbingServiceCards />
      <HvacServiceCards />
      <ServiceCards />
      <WhyChooseUs />
      <Reviews />
      <TrustedBrands />
      <FAQ />
    </>
  );
}
