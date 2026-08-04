import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Animation3D/StatsSection";
import ServicesSection from "@/components/Animation3D/ServicesSection";
import HowWeWorkSection from "@/components/Animation3D/HowWeWorkSection";
import WhyInvestSection from "@/components/Animation3D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import TeamStandoutSection from "@/components/Animation3D/TeamStandoutSection";
import CostSection from "@/components/Animation3D/CostSection";
import TestimonialsSlider from "@/components/Animation3D/TestimonialsSlider";
import TrustedClientsSection from "@/components/Animation3D/TrustedClientsSection";
import IndustrySection from "@/components/Animation3D/IndustrySection";
import GreatVideosSection from "@/components/Animation3D/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Animation3D/FaqSection";


export const metadata = {
  title: "Premium 3D Animation Services Studio in USA | Pixel Studios",
  description: "Premium 3D Animation Services in USA. Get high-quality, affordable 3D animations that engage audiences, boost conversions, and grow your brand.",
};

export default function ThreeDAnimation() {
  return (
    <main>
      <Banner
        title="Premium 3D Animation Services in the USA"
        description="At Pixel Studios Inc., our professional 3D animation services remove that uncertainty.  We translate products, concepts, and processes into photorealistic, high-definition 3D video animation services that show audiences exactly what they need to see to act. As a full-service 3D animation studio working with brands across the USA, every production starts with your business objective. Whether you need 3D product animation for a launch, cinematic visuals for an investor pitch, or medical animation for a clinical audience, our 3D animators build every frame with purpose."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <PortfolioShowcase />
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
