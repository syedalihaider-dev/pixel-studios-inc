import Banner from "@/components/Industries/Banner";
import StatsSection from "@/components/Industries/StatsSection";
import ServicesSection from "@/components/Industries/ServicesSection";
import WhyChooseSection from "@/components/Industries/WhyChooseSection";
import WonderingSection from "@/components/Industries/WonderingSection";
import WhyPartnerSection from "@/components/Industries/WhyPartnerSection";
import WhyInvestSection from "@/components/Industries/WhyInvestSection";
import AnimationPortfolio from "@/components/Industries/AnimationPortfolio";
import CostSection from "@/components/Industries/CostSection";
import GetQuoteSection from "@/components/Industries/GetQuoteSection";
import TestimonialsSlider from "@/components/Industries/TestimonialsSlider";
import TrustedClientsSection from "@/components/Industries/TrustedClientsSection";
import IndustrySection from "@/components/Industries/IndustrySection";
import GreatVideosSection from "@/components/Industries/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Industries/FaqSection";

export const metadata = {
  title: "Industries - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc Industries page. We are an award-winning digital agency.",
};

export default function Industries() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <WonderingSection />
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
