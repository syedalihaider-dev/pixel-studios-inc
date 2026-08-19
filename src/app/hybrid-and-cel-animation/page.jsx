import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/HybridAnimation/StatsSection";
import CostSection from "@/components/HybridAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/HybridAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/HybridAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/HybridAnimation/CooperationModelsSection";
import HowWeWorkSection from "@/components/HybridAnimation/HowWeWorkSection";
import WonderingSection from "@/components/HybridAnimation/WonderingSection";
import WhyInvestSection from "@/components/HybridAnimation/WhyInvestSection";
import AnimationServicesSection from "@/components/HybridAnimation/AnimationServicesSection";
import ProjectCostSection from "@/components/HybridAnimation/ProjectCostSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/HybridAnimation/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "Traditional Cel Animation",
    description:
      "Hand-drawn cel-style animation with the specific visual character that traditional frame-by-frame production produces: subtle line variation, organic timing, and the texture that no rigged puppet approximates convincingly.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Digital Cel Animation",
    description:
      "The visual aesthetic of traditional cel animation produced with digital tools for production efficiency without sacrificing the frame-by-frame craftsmanship that gives cel animation its specific character.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Hybrid 2D and 3D Animation",
    description:
      "Combined 2D and 3D production where each technique is applied where it serves the visual concept: 3D for dimensional environments or objects, 2D for character work with the expressive hand-crafted quality 3D rigging cannot fully replicate.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Frame-by-Frame Animation",
    description:
      "Full frame-by-frame production for content where every frame is a hand-produced drawing rather than an interpolated tween. The most labor-intensive animation technique and the one that produces the most distinctive, organic motion quality.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Character Animation",
    description:
      "Character performance built through cel or hybrid technique for productions where the character's expressive range and visual specificity are central to the content's identity.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Effects Animation",
    description:
      "Hand-animated effects work: fire, water, magic, impact, and the visual effects vocabulary that cel-style production renders with a texture and energy that procedural effects systems do not replicate.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Animated Short Films",
    description:
      "Full short film production in cel or hybrid technique for creators, brands, and studios producing standalone narrative content with festival, streaming, or brand storytelling objectives.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Custom Hybrid Animation Projects",
    description:
      "Bespoke technique combinations built for a specific creative vision that does not fit a standard production category. Brief us on the visual concept and we will determine the right technical approach.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Hybrid & Cel Animation Services for Unique and Expressive Visual Storytelling | Pixel Studios",
  description: "Need cel animation or hybrid 2D/3D production with genuine craft behind it? Pixel Studios delivers traditional cel, digital cel, and hybrid animation for brands and creators who want a distinctive visual identity.",
};

export default function HybridAnimationPage() {
  return (
    <main>
      <Banner
        title="Hybrid and Cel Animation Services for Unique and Expressive Visual Storytelling"
        description="Cel animation and hybrid 2D/3D production are slower and more labor-intensive than puppet rigging, and that additional labor is exactly what produces the handcrafted visual texture that makes content look like it was made by artists rather than assembled from a template library. Pixel Studios Inc. produces hybrid and cel animation for brands and creators who understand that distinctiveness is a competitive advantage worth the additional production investment."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection 
        title="Our Hybrid and Cel Animation Services"
        description="We create traditional cel, digital cel, and hybrid animation experiences that combine handcrafted visual quality with modern production techniques. From frame-by-frame character animation to animated short films and custom hybrid projects, every approach is selected based on the creative vision, storytelling requirements, and unique visual identity of the project."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection />
      <TeamStandoutSection />
      <CooperationModelsSection />
      <HowWeWorkSection />
      <WonderingSection />
      <WhyInvestSection />
      <AnimationServicesSection />
      <ProjectCostSection />
      <TestimonialSection />
      <FaqSection />





      {/* <ProjectsSection />
      <WhyChooseSection />
      <EnginesSection />
      <DistinguishesSection />
      <FullCycleSection />
      <GameArtSection />
      <RiggingSection />
      <BenefitsSection />
      <CharacterWhyChooseSection />
      <AnimationPricingSection /> */}
    </main>
  );
}
