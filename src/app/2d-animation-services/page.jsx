import Banner from "@/components/Common/Banner/Banner";
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
      <Banner
        title="Professional 2D Animation Services in the USA"
        description="Most brands invest in 2D animation and get a video their marketing team likes but sales never uses. That is because most 2D animation studios focus on visuals, not results. The brands that win use 2D animated videos built around a clear audience, problem, and decision. At Pixels Studios Inc., our professional 2D animation services start with your business goal. As a dedicated 2D animation studio, we create custom 2D animated videos for brands across the USA built to perform."
        video="/videos/home.webm"
        showPlayButton={true}
      />
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
