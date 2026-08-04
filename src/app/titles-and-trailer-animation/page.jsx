import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/TrailerAnimation/StatsSection";
import ServicesSection from "@/components/TrailerAnimation/ServicesSection";
import CostSection from "@/components/TrailerAnimation/CostSection"
import HowWeWorkSection from "@/components/TrailerAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/TrailerAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/TrailerAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/TrailerAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/TrailerAnimation/CooperationModelsSection";
import SoftwareSection from "@/components/TrailerAnimation/SoftwareSection";
import IndustrySection from "@/components/TrailerAnimation/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/TrailerAnimation/FaqSection";


export const metadata = {
  title: "Professional Trailer Animation Services | Pixels Studios Inc.",
  description: "Need professional trailer animation services for your brand, game, or film? Pixels Studios creates custom trailer videos and title sequences. Get a free quote today.",
};

export default function TitlesAndTrailerAnimation() {
  return (
    <main>
      <Banner
        title="Professional Trailer Animation Services Games and Films"
        description="At Pixels Studios Inc., our professional trailer animation services are built around that argument-first approach. We are a dedicated trailer animation company producing movie trailer production, game trailer production, and brand trailer content for clients across the USA, and every trailer video production we deliver is structured to build anticipation, not just summarize what already exists."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection />
      <TeamStandoutSection />
      <CostSection />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <SoftwareSection />
      <WhyInvestSection />
      <GreatVideosSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
