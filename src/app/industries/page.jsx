import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Industries/StatsSection";
import ServicesSection from "@/components/Industries/ServicesSection";
import WhyChooseSection from "@/components/Industries/WhyChooseSection";
import WonderingSection from "@/components/Industries/WonderingSection";
import WhyPartnerSection from "@/components/Industries/WhyPartnerSection";
import WhyInvestSection from "@/components/Industries/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import CostSection from "@/components/Industries/CostSection";
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import TestimonialsSlider from "@/components/Industries/TestimonialsSlider";
import TrustedClientsSection from "@/components/Industries/TrustedClientsSection";
import IndustrySection from "@/components/Industries/IndustrySection";
import GreatVideosSection from "@/components/Industries/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Industries/FaqSection";

const bannerSlides = [
  {
    title: "Professional 2D Animation Services in the USA",
    description: "Why do most brands walk away from their 2D animation investment with a video their marketing team likes and their sales team never uses? Because most 2D animation studios are hired to produce something visually competent, and visual competence is not the same as commercial usefulness."
  },
  {
    title: "Award-Winning Digital Agency For Global Brands",
    description: "We craft digital experiences that engage audiences, elevate brands, and drive meaningful growth through innovative design and strategy."
  },
  {
    title: "Transform Your Vision Into Stunning Reality",
    description: "Partner with industry experts to bring your ideas to life. From concept to launch, we deliver excellence at every step of the journey."
  }
];

export const metadata = {
  title: "Industries - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc Industries page. We are an award-winning digital agency.",
};

export default function Industries() {
  return (
    <main>
      <Banner
        slides={bannerSlides}
      />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <WonderingSection />
      <WhyPartnerSection />
      <WhyInvestSection />
      <PortfolioShowcase />
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
