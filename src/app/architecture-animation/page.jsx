import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/ArchitectureAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/ArchitectureAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/ArchitectureAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/ArchitectureAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/ArchitectureAnimation/GreatVideosSection";
import FaqSection from "@/components/ArchitectureAnimation/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "Architectural Rendering",
    description: "Photorealistic still renderings that establish materials, lighting, and mood for a design before construction begins, used for client presentations, marketing, and permitting submissions.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Walkthroughs",
    description: "Full walkthrough animations that move through a building room by room, showing flow, scale, and finishes exactly as they would be experienced in person by a future occupant.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Visualization",
    description: "Detailed 3D models built directly from architectural plans, used for design review, client presentations, and construction coordination across the whole project team.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "CGI",
    description: "High-end CGI production combining architectural accuracy with cinematic lighting and camera work for standout marketing and portfolio pieces that set a firm apart from competitors.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Architecture Animation Service | Pixel Studios",
  description: "Pixel Studios' architecture animation service turns architectural drawings into photorealistic renderings, walkthroughs, and CGI presentations.",
};

export default function ArchitectureAnimationPage() {
  return (
    <main>
      <Banner
        title="Architecture Animation That Sells the Vision"
        description="Why do so many strong architectural designs fail to win approval or investment? Because a 2D drawing asks clients, boards, and committees to imagine a building rather than see it. Our architecture animation service turns your plans into photorealistic renderings and walkthroughs that make the design decision easy. Every project is built directly from your architectural drawings and CAD files, so what a client sees on screen matches what your team actually designed, down to the materials and lighting."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Architecture"
        description="What does a complete architecture animation service include? From early concept visuals to full cinematic CGI, these four formats cover a project from first client meeting to final marketing push, all built from the same underlying model."
        sliderItems={sliderItems}
      />
      <WhyChooseSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
