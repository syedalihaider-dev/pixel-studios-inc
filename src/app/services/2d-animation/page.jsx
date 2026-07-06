import Banner from "@/components/2d-animation/Banner";
import StatsSection from "@/components/2d-animation/StatsSection";
import ServicesSection from "@/components/2d-animation/ServicesSection";
import WhyPartnerSection from "@/components/2d-animation/WhyPartnerSection";
import WhyInvestSection from "@/components/2d-animation/WhyInvestSection";
import AnimationPortfolio from "@/components/2d-animation/AnimationPortfolio";
import CostSection from "@/components/2d-animation/CostSection";
import GetQuoteSection from "@/components/2d-animation/GetQuoteSection";
import TestimonialsSlider from "@/components/2d-animation/TestimonialsSlider";
import TrustedClientsSection from "@/components/2d-animation/TrustedClientsSection";
import IndustrySection from "@/components/2d-animation/IndustrySection";
import GreatVideosSection from "@/components/2d-animation/GreatVideosSection";
import TestimonialSection from "@/components/2d-animation/TestimonialSection";
import FaqSection from "@/components/2d-animation/FaqSection";

export default function Home() {
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
