import Banner from "@/components/OurWork/Banner";
import StatsSection from "@/components/OurWork/StatsSection";
import GetQuoteSection from "@/components/OurWork/GetQuoteSection";
import TestimonialsSlider from "@/components/OurWork/TestimonialsSlider";
import TrustedClientsSection from "@/components/OurWork/TrustedClientsSection";
import IndustrySection from "@/components/OurWork/IndustrySection";
import GreatVideosSection from "@/components/OurWork/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import PortfolioShowcase from "@/components/OurWork/PortfolioShowcase";
import FaqSection from "@/components/OurWork/FaqSection";


export const metadata = {
  title: "Our Work - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc Our Work page. We are an award-winning digital agency.",
};

export default function OurWork() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <PortfolioShowcase />
      <TestimonialSection />
      <GetQuoteSection />
      <TestimonialsSlider />
      <GreatVideosSection />
      <TrustedClientsSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
