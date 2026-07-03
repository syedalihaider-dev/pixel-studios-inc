import Banner from "../components/home/Banner";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyInvestSection from "../components/home/WhyInvestSection";
import AnimationPortfolio from "../components/home/AnimationPortfolio";
import WhyPartnerSection from "../components/home/WhyPartnerSection";
import GetQuoteSection from "../components/home/GetQuoteSection";
import ProcessSliderSection from "../components/home/ProcessSliderSection";
import TrustedClientsSection from "../components/home/TrustedClientsSection";
import IndustrySection from "../components/home/IndustrySection";
import TestimonialSection from "../components/home/TestimonialSection";
import FaqSection from "../components/home/FaqSection";

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
