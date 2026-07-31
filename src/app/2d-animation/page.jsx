import Banner from "@/components/Animation2D/Banner";
import StatsSection from "@/components/Animation2D/StatsSection";
import ServicesSection from "@/components/Animation2D/ServicesSection";
import WhyPartnerSection from "@/components/Animation2D/WhyPartnerSection";
import WhyInvestSection from "@/components/Animation2D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import CostSection from "@/components/Animation2D/CostSection";
import TestimonialsSlider from "@/components/Animation2D/TestimonialsSlider";
import TrustedClientsSection from "@/components/Animation2D/TrustedClientsSection";
import IndustrySection from "@/components/Animation2D/IndustrySection";
import GreatVideosSection from "@/components/Animation2D/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Animation2D/FaqSection";


export const metadata = {
  title: "2d Animation - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc 2d Animation page. We are an award-winning digital agency.",
};

export default function TwoDAnimation() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <WhyPartnerSection />
      <WhyInvestSection />
      <PortfolioShowcase />
      <CostSection />
      <TestimonialsSlider />
      <GreatVideosSection />
      <TestimonialSection />
      <TrustedClientsSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
