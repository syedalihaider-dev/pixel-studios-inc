import Banner from "@/components/Home/Banner";
import StatsSection from "@/components/Home/StatsSection";
import MissionSection from "@/components/Home/MissionSection";
import ServicesSection from "@/components/Home/ServicesSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import WhyInvestSection from "@/components/Home/WhyInvestSection";
import WhyPartnerSection from "@/components/Home/WhyPartnerSection";
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import ProcessSliderSection from "@/components/Home/ProcessSliderSection";
import IndustrySection from "@/components/Home/IndustrySection";
import TrustedClientsSection from "@/components/Home/TrustedClientsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
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
      <MissionSection />
      <ServicesSection />
      <WhyInvestSection />
      <PortfolioShowcase />
      <WhyPartnerSection />
      <GetQuoteSection />
      <ProcessSliderSection />
      <TrustedClientsSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
