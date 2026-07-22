import Banner from "@/components/Animation3D/Banner";
import StatsSection from "@/components/Animation3D/StatsSection";
import ServicesSection from "@/components/Animation3D/ServicesSection";
import HowWeWorkSection from "@/components/Animation3D/HowWeWorkSection";
import WhyInvestSection from "@/components/Animation3D/WhyInvestSection";
import AnimationPortfolio from "@/components/Animation3D/AnimationPortfolio";
import TeamStandoutSection from "@/components/Animation3D/TeamStandoutSection";
import CostSection from "@/components/Animation3D/CostSection";
import TestimonialsSlider from "@/components/Animation3D/TestimonialsSlider";
import TrustedClientsSection from "@/components/Animation3D/TrustedClientsSection";
import IndustrySection from "@/components/Animation3D/IndustrySection";
import GreatVideosSection from "@/components/Animation3D/GreatVideosSection";
import TestimonialSection from "@/components/Animation3D/TestimonialSection";
import FaqSection from "@/components/Animation3D/FaqSection";


export const metadata = {
  title: "Premium 3D Animation Services Studio in USA | Pixels Studios",
  description: "Premium 3D Animation Services in USA. Get high-quality, affordable 3D animations that engage audiences, boost conversions, and grow your brand.",
};

export default function ThreeDAnimation() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <AnimationPortfolio />
      <TeamStandoutSection />
      <CostSection />
      <WhyInvestSection />
      <TestimonialsSlider />
      <GreatVideosSection />
      <TestimonialSection />
      <TrustedClientsSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
