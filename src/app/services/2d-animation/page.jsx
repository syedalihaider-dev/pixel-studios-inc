import Banner from "@/components/2d-animation/Banner";
import StatsSection from "@/components/2d-animation/StatsSection";
import ServicesSection from "@/components/2d-animation/ServicesSection";
import WhyInvestSection from "@/components/2d-animation/WhyInvestSection";
import AnimationPortfolio from "@/components/2d-animation/AnimationPortfolio";
import WhyPartnerSection from "@/components/2d-animation/WhyPartnerSection";
import GetQuoteSection from "@/components/2d-animation/GetQuoteSection";
import ProcessSliderSection from "@/components/2d-animation/ProcessSliderSection";
import TrustedClientsSection from "@/components/2d-animation/TrustedClientsSection";
import IndustrySection from "@/components/2d-animation/IndustrySection";
import TestimonialSection from "@/components/2d-animation/TestimonialSection";
import FaqSection from "@/components/2d-animation/FaqSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <WhyInvestSection />
      <AnimationPortfolio />
      <div style={{ backgroundImage: "radial-gradient(60.57% 91.94% at 69.22% 43%, #C53ADD 0%, #19042D 100%)" }}>
        <WhyPartnerSection />
        <GetQuoteSection />
        <ProcessSliderSection />
      </div>
      <TrustedClientsSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
