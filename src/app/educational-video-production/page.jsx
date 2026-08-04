import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/EducationalVideoProduction/CostSection";
import StatsSection from "@/components/EducationalVideoProduction/StatsSection";
import ServicesSection from "@/components/EducationalVideoProduction/ServicesSection";
import HowWeWorkSection from "@/components/EducationalVideoProduction/HowWeWorkSection";
import SupportSection from "@/components/EducationalVideoProduction/SupportSection";
import WhyInvestSection from "@/components/EducationalVideoProduction/WhyInvestSection";
import IndustrySection from "@/components/EducationalVideoProduction/IndustrySection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/EducationalVideoProduction/GreatVideosSection";
import TeamStandoutSection from "@/components/EducationalVideoProduction/TeamStandoutSection";
import CooperationModelsSection from "@/components/EducationalVideoProduction/CooperationModelsSection";
import WonderingSection from "@/components/EducationalVideoProduction/WonderingSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/EducationalVideoProduction/FaqSection";


export const metadata = {
  title: "Educational Video Production Services | Improve Learning and Knowledge Retention | Pixel Studios",
  description: "Need educational video production services that learners actually finish? Pixel Studios builds e-learning, training, and corporate learning videos that improve outcomes. Get a quote.",
};

export default function EducationalVideoProductionPage() {
  return (
    <main>
      <Banner
        title="Educational Video Production Services | Improve Learning and Knowledge Retention"
        description="Why do most training programs report high completion rates and low behavior change? Because completion and comprehension are different metrics, most educational video production optimizes for the one that is easier to measure. A learner who clicked through a ten-module compliance training course and retained nothing has a 100% completion rate. The organization that measured that number and called it a success has a training problem masquerading as a training solution. Pixel Studios Inc. builds educational video production services around the second metric. What does the learner need to be able to do, understand, or apply after watching? That answer drives every creative and structural decision in the production."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection />
      <PortfolioShowcase />
      <GreatVideosSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <IndustrySection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <WonderingSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
