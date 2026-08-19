import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/GamingAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/GamingAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/GamingAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/GamingAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/GamingAnimation/GreatVideosSection";
import FaqSection from "@/components/GamingAnimation/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "Character Design",
    description: "Character concept art, modeling, and rigging for player characters, NPCs, and enemies, built to match your game's art direction from the earliest concept stage.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Environment Design",
    description: "Environment art and animation covering level backgrounds, props, and interactive world elements, built to feel cohesive with your existing world design.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Game Level Design",
    description: "Level layout and environmental animation support that works alongside your internal design team, integrating cleanly with existing level architecture.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Cinematics",
    description: "In-game cutscenes and cinematic sequences that advance story and elevate production value at key narrative moments, whether pre-rendered or built in-engine.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Game Animation Services | Pixel Studios",
  description: "Pixel Studios' game animation services deliver character, environment, and cinematic animation for developers and publishers of every scale.",
};

export default function GamingAnimationPage() {
  return (
    <main>
      <Banner
        title="Game Animation Built to Ship On Time"
        description="Development timelines rarely leave room for animation bottlenecks. Our game animation services provide character, environment, and cinematic work as a flexible extension of your studio, scaling up during crunch and down between production cycles without the overhead of a full internal team. Every engagement is built around your existing art bible and pipeline, so outsourced work integrates cleanly rather than looking like it came from a different game entirely."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Gaming"
        description="What does a full-service game animation studio need to cover across a production cycle? These four disciplines span everything from early character concepts through finished cinematics, built to integrate with your existing pipeline."
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
