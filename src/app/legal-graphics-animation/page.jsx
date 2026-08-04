import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/LegalGraphics/CostSection";
import StatsSection from "@/components/LegalGraphics/StatsSection";
import ServicesSection from "@/components/LegalGraphics/ServicesSection";
import SupportSection from "@/components/LegalGraphics/SupportSection";
import WhyInvestSection from "@/components/LegalGraphics/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
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
      <Banner
        title="Legal Graphics Animation Services for Courtroom Demonstratives"
        description="How do legal animations help judges and juries understand evidence? By showing rather than describing. An accident reconstruction animation places the viewer at the intersection. A medical legal animation shows exactly how the injury occurred at the anatomical level the clinical record documents. A forensic animation demonstrates the event timeline with the precision witness testimony cannot reliably provide. Pixels Studios Inc. provides legal graphics animation services for litigation firms, personal injury attorneys, insurance defense teams, and corporate legal departments across the USA."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioShowcase />
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
