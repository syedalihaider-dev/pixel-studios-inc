import Banner from "@/components/Home/Banner";
import StatsSection from "@/components/Home/StatsSection";
import ServicesSection from "@/components/Home/ServicesSection";
import WhyInvestSection from "@/components/Home/WhyInvestSection";
import AnimationPortfolio from "@/components/Home/AnimationPortfolio";
import WhyPartnerSection from "@/components/Home/WhyPartnerSection";
import GetQuoteSection from "@/components/Home/GetQuoteSection";
import ProcessSliderSection from "@/components/Home/ProcessSliderSection";
import TrustedClientsSection from "@/components/Home/TrustedClientsSection";
import IndustrySection from "@/components/Home/IndustrySection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import FaqSection from "@/components/Home/FaqSection";

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
