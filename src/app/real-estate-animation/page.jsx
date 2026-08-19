import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/RealEstate/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/RealEstate/WhyChooseSection";
import WhyInvestSection from "@/components/RealEstate/WhyInvestSection";
import CooperationModelsSection from "@/components/RealEstate/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/RealEstate/GreatVideosSection";
import FaqSection from "@/components/RealEstate/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "3D Architectural Visualization / Rendering",
    description: "Photorealistic still renderings establishing the look, materials, and lighting of a development before it is built, used across marketing, permitting submissions, and investor materials from the earliest project stages.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Animation & Walkthroughs",
    description: "Full walkthrough animations moving buyers room by room and floor by floor, exactly as they would experience the property in person, with realistic finishes and furnishing that sell the lifestyle, not just the layout.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "2D/3D Floor Plan Animation",
    description: "Floor plans brought to life with animated camera movement and furnishing overlays, so buyers grasp scale and flow at a glance instead of decoding a flat technical drawing.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Interior & Exterior Rendering Animation",
    description: "Detailed interior finishes and exterior facades rendered and animated from every angle, building buyer confidence in final quality well before a sales gallery even opens.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Promotional & Marketing Animations",
    description: "Brand-forward video for sales launches, website hero content, and digital ad campaigns, designed to generate qualified leads from the day a project is announced.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Aerial/Drone Simulation Animations",
    description: "Simulated aerial flythroughs showing a property's setting, surroundings, and scale without waiting for construction to reach a filmable stage. Ideal for master-planned, waterfront, and resort developments.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Real Estate Animation Service | Pixel Studios",
  description: "Pixel Studios' real estate animation service brings unbuilt developments to life with 3D walkthroughs, renderings, and marketing video that sell.",
};

export default function RealEstatePage() {
  return (
    <main>
      <Banner
        title="Real Estate Animation That Sells Before Ground Breaks"
        description="How do you sell a home that does not exist yet? That is the problem every pre-construction campaign faces, and floor plans with static renderings only take a buyer so far. Our real estate animation service turns architectural drawings and CAD models into 3D walkthroughs, renderings, and marketing video that let buyers and investors experience a property long before completion. Pixel Studios Inc. builds these assets from your actual plans, working from the same underlying 3D models across every stage of the campaign, so nothing gets rebuilt from scratch as the project moves from investor pitch to sales gallery to sold out. From single-unit walkthroughs to master-planned communities, the visuals carry the development through its entire sales lifecycle. Buyers get confidence, investors get clarity, and your sales team gets materials that always match what is actually being built, even as the design evolves."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Real Estate"
        description="What does a full real estate animation service include? From still renderings to full aerial flythroughs, these six formats cover every stage of a development's marketing lifecycle."
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
