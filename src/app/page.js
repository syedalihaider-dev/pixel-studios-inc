import Banner from "@/components/Home/Banner";
import StatsSection from "@/components/Home/StatsSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TrustedClientsSection from "@/components/Home/TrustedClientsSection";
import AnimationPortfolio from "@/components/Home/AnimationPortfolio";
import WhyInvestSection from "@/components/Home/WhyInvestSection";
import WhyPartnerSection from "@/components/Home/WhyPartnerSection";
import GetQuoteSection from "@/components/Home/GetQuoteSection";
import ProcessSliderSection from "@/components/Home/ProcessSliderSection";
import IndustrySection from "@/components/Home/IndustrySection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import FaqSection from "@/components/Home/FaqSection";

export const metadata = {
  title: "Award-Winning Professional Video Animation Company",
  description: "Need video animation services that convert browsers into buyers? Pixels Studios Inc builds custom 2D & 3D animation for brands across the USA. Get a free quote",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <TrustedClientsSection />
      <AnimationPortfolio />
      <WhyInvestSection />
      <WhyPartnerSection />
      <GetQuoteSection />
      <ProcessSliderSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
