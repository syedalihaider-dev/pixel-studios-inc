import Banner from "@/components/TrailerAnimation/Banner";
import StatsSection from "@/components/TrailerAnimation/StatsSection";
import ServicesSection from "@/components/TrailerAnimation/ServicesSection";
import CostSection from "@/components/TrailerAnimation/CostSection"
import HowWeWorkSection from "@/components/TrailerAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/TrailerAnimation/WhyInvestSection";
import AnimationPortfolio from "@/components/TrailerAnimation/AnimationPortfolio";
import GreatVideosSection from "@/components/TrailerAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/TrailerAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/TrailerAnimation/CooperationModelsSection";
import SoftwareSection from "@/components/TrailerAnimation/SoftwareSection";
import IndustrySection from "@/components/TrailerAnimation/IndustrySection";
import TestimonialSection from "@/components/TrailerAnimation/TestimonialSection";
import FaqSection from "@/components/TrailerAnimation/FaqSection";


export const metadata = {
  title: "Professional Trailer Animation Services | Pixels Studios Inc.",
  description: "Need professional trailer animation services for your brand, game, or film? Pixels Studios creates custom trailer videos and title sequences. Get a free quote today.",
};

export default function TitlesAndTrailerAnimation() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <TeamStandoutSection />
      <CostSection />
      <AnimationPortfolio />
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
