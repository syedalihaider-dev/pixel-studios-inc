import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/RealEstate/CostSection";
import ServicesSection from "@/components/RealEstate/ServicesSection";
import WhyChooseSection from "@/components/RealEstate/WhyChooseSection";
import WhyInvestSection from "@/components/RealEstate/WhyInvestSection";
import CooperationModelsSection from "@/components/RealEstate/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/RealEstate/GreatVideosSection";
import FaqSection from "@/components/RealEstate/FaqSection";

export const metadata = {
  title: "Real Estate Animation Service | Pixels Studios",
  description: "Pixels Studios' real estate animation service brings unbuilt developments to life with 3D walkthroughs, renderings, and marketing video that sell.",
};

export default function RealEstatePage() {
  return (
    <main>
      <Banner
        title="Real Estate Animation That Sells Before Ground Breaks"
        description="How do you sell a home that does not exist yet? That is the problem every pre-construction campaign faces, and floor plans with static renderings only take a buyer so far. Our real estate animation service turns architectural drawings and CAD models into 3D walkthroughs, renderings, and marketing video that let buyers and investors experience a property long before completion. Pixels Studios Inc. builds these assets from your actual plans, working from the same underlying 3D models across every stage of the campaign, so nothing gets rebuilt from scratch as the project moves from investor pitch to sales gallery to sold out. From single-unit walkthroughs to master-planned communities, the visuals carry the development through its entire sales lifecycle. Buyers get confidence, investors get clarity, and your sales team gets materials that always match what is actually being built, even as the design evolves."
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
