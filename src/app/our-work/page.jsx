import Banner from "@/components/OurWork/Banner";
import StatsSection from "@/components/OurWork/StatsSection";
import GetQuoteSection from "@/components/OurWork/GetQuoteSection";
import TestimonialsSlider from "@/components/OurWork/TestimonialsSlider";
import TrustedClientsSection from "@/components/OurWork/TrustedClientsSection";
import IndustrySection from "@/components/OurWork/IndustrySection";
import GreatVideosSection from "@/components/OurWork/GreatVideosSection";
import TestimonialSection from "@/components/OurWork/TestimonialSection";
import PortfolioShowcase from "@/components/OurWork/PortfolioShowcase";
import FaqSection from "@/components/OurWork/FaqSection";

export default function OurWork() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <div style={{ backgroundImage: "radial-gradient(63.46% 96.32% at 50% 50%, #FFFFFF 0%, #FFDEFD 100%)" }}>
        <PortfolioShowcase />
        <TestimonialSection />
      </div>
      <GetQuoteSection />
      <TestimonialsSlider />
      <GreatVideosSection />
      <TrustedClientsSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
