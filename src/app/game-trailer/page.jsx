import Banner from "@/components/GameTrailer/Banner";
import CostSection from "@/components/GameTrailer/CostSection";
import StatsSection from "@/components/GameTrailer/StatsSection";
import ServicesSection from "@/components/GameTrailer/ServicesSection";
import WhyInvestSection from "@/components/GameTrailer/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/GameTrailer/GreatVideosSection";
import TeamStandoutSection from "@/components/GameTrailer/TeamStandoutSection";
import TestimonialsSlider from "@/components/GameTrailer/TestimonialsSlider";
import WhyPartnerSection from "@/components/GameTrailer/WhyPartnerSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/GameTrailer/FaqSection";


export const metadata = {
  title: "Top-Tier Gaming Trailer Services to Ignite Your Launch | Pixels Studios",
  description: "Need a game trailer that actually sells the game? Pixels Studios builds cinematic reveal trailers, gameplay trailers, launch trailers, and mobile UA videos. Get a quote.",
};

export default function GameTrailerPage() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <PortfolioShowcase />
      <GreatVideosSection />
      <CostSection />
      <TestimonialsSlider />
      <TeamStandoutSection />
      <WhyInvestSection />
      <WhyPartnerSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
