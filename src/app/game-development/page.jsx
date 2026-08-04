import Banner from "@/components/Common/Banner/Banner";
import FullCycleSection from "@/components/GameDevelopment/FullCycleSection";
import GameArtSection from "@/components/GameDevelopment/GameArtSection";
import DistinguishesSection from "@/components/GameDevelopment/DistinguishesSection";
import LetCreateAmazingSection from "@/components/GameDevelopment/LetCreateAmazingSection";
import EnginesSection from "@/components/GameDevelopment/EnginesSection";
import TopRatedProjectsSection from "@/components/GameDevelopment/TopRatedProjectsSection";
import CooperationModelsSection from "@/components/GameDevelopment/CooperationModelsSection";
import TrustedClientsSection from "@/components/GameDevelopment/TrustedClientsSection";
import GreatVideosSection from "@/components/GameDevelopment/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/GameDevelopment/FaqSection";


const bannerSlides = [
  {
    title: "Professional 2D Animation Services in the USA",
    description: "Why do most brands walk away from their 2D animation investment with a video their marketing team likes and their sales team never uses? Because most 2D animation studios are hired to produce something visually competent, and visual competence is not the same as commercial usefulness."
  },
  {
    title: "Award-Winning Digital Agency For Global Brands",
    description: "We craft digital experiences that engage audiences, elevate brands, and drive meaningful growth through innovative design and strategy."
  },
  {
    title: "Transform Your Vision Into Stunning Reality",
    description: "Partner with industry experts to bring your ideas to life. From concept to launch, we deliver excellence at every step of the journey."
  }
];

export const metadata = {
  title: "Game Development - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc Game Development page. We are an award-winning digital agency.",
};

export default function GameDevelopment() {
  return (
    <main>
      <Banner
        slides={bannerSlides}
      />
      <FullCycleSection />
      <GameArtSection />
      <DistinguishesSection />
      <LetCreateAmazingSection />
      <EnginesSection />
      <TopRatedProjectsSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <TrustedClientsSection />
      <FaqSection />
      <GreatVideosSection />
    </main>
  );
}
