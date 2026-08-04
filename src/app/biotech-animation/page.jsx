import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/BiotechAnimation/CostSection";
import ServicesSection from "@/components/BiotechAnimation/ServicesSection";
import WhyChooseSection from "@/components/BiotechAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/BiotechAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/BiotechAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/BiotechAnimation/GreatVideosSection";
import FaqSection from "@/components/BiotechAnimation/FaqSection";

export const metadata = {
  title: "Biotech Animation Service | Pixels Studios",
  description: "Pixels Studios delivers biotech animation service with built-in scientific review. Gene therapy, MOA, and investor videos that explain and convert.",
};

export default function BiotechAnimationPage() {
  return (
    <main>
      <Banner
        title="Biotech Animation That Makes Complex Science Fundable"
        description="Pixels Studios Inc. builds every biotechnology animation around accuracy first and polish second, because in this category the order matters. A beautiful animation that misrepresents the science costs you more credibility than having no visual at all. Whether you are preparing a Series A pitch, an IRB submission, or a physician education campaign, the goal stays the same: give your audience a clear, correct picture of the science in the shortest possible time."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection />
      <WhyChooseSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
