import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/TechnologyAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/TechnologyAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/TechnologyAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/TechnologyAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/TechnologyAnimation/GreatVideosSection";
import FaqSection from "@/components/TechnologyAnimation/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "Product Demo Videos",
    description:
      "Screen-accurate demo videos walking through core product workflows, built for landing pages, sales decks, and app store listings alike.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Explainer Videos",
    description:
      "Concise technology explainer videos introducing a product's value proposition quickly, for audiences with limited attention or context on the category.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "UI Animation",
    description:
      "Animated recreations of your actual interface, easy to update as your product evolves, keeping marketing visuals current with every release cycle.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description:
      "Supporting motion graphics for feature launches, technical concepts, and investor presentations that need to communicate quickly and clearly.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Technology Animation Services | Pixel Studios",
  description: "Pixel Studios' technology animation services turn software, AI, and hardware products into clear video for product launches and marketing.",
};

export default function TechnologyAnimationPage() {
  return (
    <main>
      <Banner
        title="Technology Animation That Sells the Product"
        description="Tech products often work in ways users never see, and that invisibility is exactly what makes them hard to market. Our technology animation services translate software, AI systems, and hardware into video that a customer, investor, or new user can actually understand and act on. Every project is built from your actual product and roadmap, so the animation stays accurate even as your platform continues to evolve and ship new features."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Technology"
        description="What does a technology animation agency need to cover across a product's lifecycle?"
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
