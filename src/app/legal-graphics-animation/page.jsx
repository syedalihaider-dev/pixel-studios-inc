import Banner from "@/components/LegalGraphics/Banner";
import CostSection from "@/components/LegalGraphics/CostSection";
import StatsSection from "@/components/LegalGraphics/StatsSection";
import ServicesSection from "@/components/LegalGraphics/ServicesSection";
import SupportSection from "@/components/LegalGraphics/SupportSection";
import WhyInvestSection from "@/components/LegalGraphics/WhyInvestSection";
import AnimationPortfolio from "@/components/LegalGraphics/AnimationPortfolio";
import GreatVideosSection from "@/components/LegalGraphics/GreatVideosSection";
import TeamStandoutSection from "@/components/LegalGraphics/TeamStandoutSection";
import CooperationModelsSection from "@/components/LegalGraphics/CooperationModelsSection";
import WonderingSection from "@/components/LegalGraphics/WonderingSection";
import TechnologySection from "@/components/LegalGraphics/TechnologySection";
import SoftwareSection from "@/components/LegalGraphics/SoftwareSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/LegalGraphics/FaqSection";


export const metadata = {
  title: "Legal Graphics Animation Services for Litigation, Trial & Courtroom | Pixels Studios",
  description: "Need courtroom animation that holds up to judicial scrutiny? Pixels Studios builds accident reconstruction, medical legal animation, and trial demonstratives. Get a quote.",
};

export default function LegalGraphicsPage() {
  return (
    <main>
      <Banner />
      <CostSection />
      <StatsSection />
      <ServicesSection />
      <AnimationPortfolio />
      <GreatVideosSection />
      <SupportSection />
      <TeamStandoutSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <WonderingSection />
      <TechnologySection />
      <SoftwareSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
