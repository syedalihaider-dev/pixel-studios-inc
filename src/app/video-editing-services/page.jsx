import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/VideoEditingServices/StatsSection";
import ServicesSection from "@/components/VideoEditingServices/ServicesSection";
import HowWeWorkSection from "@/components/VideoEditingServices/HowWeWorkSection";
import WhyInvestSection from "@/components/VideoEditingServices/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/VideoEditingServices/GreatVideosSection";
import TeamStandoutSection from "@/components/VideoEditingServices/TeamStandoutSection";
import CooperationModelsSection from "@/components/VideoEditingServices/CooperationModelsSection";
import TestimonialsSlider from "@/components/VideoEditingServices/TestimonialsSlider";
import TechnologySection from "@/components/VideoEditingServices/TechnologySection";
import IndustrySection from "@/components/VideoEditingServices/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/VideoEditingServices/FaqSection";


export const metadata = {
  title: "Professional Video Editing Services for Brands & Businesses | Pixels Studios",
  description: "Need professional video editing services that make your footage perform? Pixels Studios delivers custom video post production for brands and creators. Get a quote today.",
};

export default function VideoEditingServices() {
  return (
    <main>
      <Banner
        title="Professional Video Editing Services for Brands, Creators, and Businesses"
        description="At Pixels Studios Inc., our professional video editing services exist to close the gap between footage that was captured and content that performs. We are a dedicated video editing studio serving brands, content creators, marketing teams, and agencies across the USA with video post production services that treat the edit as a creative and strategic discipline, not a technical formality."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <PortfolioShowcase />
      <GreatVideosSection />
      <TeamStandoutSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialsSlider />
      <IndustrySection />
      <TechnologySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}