import Banner from "@/components/Animation2D/Banner";
import StatsSection from "@/components/Animation2D/StatsSection";
import ServicesSection from "@/components/Animation2D/ServicesSection";
import WhyPartnerSection from "@/components/Animation2D/WhyPartnerSection";
import WhyInvestSection from "@/components/Animation2D/WhyInvestSection";
import AnimationPortfolio from "@/components/Animation2D/AnimationPortfolio";
import CostSection from "@/components/Animation2D/CostSection";
import GetQuoteSection from "@/components/Animation2D/GetQuoteSection";
import TestimonialsSlider from "@/components/Animation2D/TestimonialsSlider";
import TrustedClientsSection from "@/components/Animation2D/TrustedClientsSection";
import IndustrySection from "@/components/Animation2D/IndustrySection";
import GreatVideosSection from "@/components/Animation2D/GreatVideosSection";
import TestimonialSection from "@/components/Animation2D/TestimonialSection";
import FaqSection from "@/components/Animation2D/FaqSection";

export default function TwoDAnimation() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <WhyPartnerSection />
      <WhyInvestSection />
      <AnimationPortfolio />
      <div style={{ backgroundImage: "radial-gradient(60.57% 91.94% at 69.22% 43%, #C53ADD 0%, #19042D 100%)" }}>
        <CostSection />
        <GetQuoteSection />
      </div>
      <TestimonialsSlider />
      <GreatVideosSection />
      <TestimonialSection />
      <TrustedClientsSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
