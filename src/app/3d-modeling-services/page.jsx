import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Modeling3D/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/Modeling3D/CostSection"
import HowWeWorkSection from "@/components/Modeling3D/HowWeWorkSection";
import WhyInvestSection from "@/components/Modeling3D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Modeling3D/GreatVideosSection";
import TeamStandoutSection from "@/components/Modeling3D/TeamStandoutSection";
import CooperationModelsSection from "@/components/Modeling3D/CooperationModelsSection";
import TechnologySection from "@/components/Modeling3D/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Modeling3D/FaqSection";

const industries = [
  {
    id: 1,
    title: "Gaming",
    image: "/industry/01.png",
    text: "3D modeling for gaming covers characters, environments, and props optimized for real-time engines and the specific performance budget of each platform.",
    link: "#"
  },
  {
    id: 2,
    title: "eCommerce and Retail",
    image: "/industry/02.png",
    text: "3D modeling for eCommerce produces interactive product views that reduce returns and improve buyer confidence across online marketplaces and brand websites alike.",
    link: "#"
  },
  {
    id: 3,
    title: "Manufacturing",
    image: "/industry/03.png",
    text: "3D modeling for manufacturing supports CAD conversion, training visualization, and marketing content from a single accurate source asset.",
    link: "#"
  },
  {
    id: 4,
    title: "Architecture and Real Estate",
    image: "/industry/04.png",
    text: "3D modeling for real estate produces accurate property and interior models for pre-sale marketing and development pitch presentations.",
    link: "#"
  },
  {
    id: 5,
    title: "Healthcare and Medical",
    image: "/industry/05.png",
    text: "3D modeling for healthcare supports device visualization and training content built to clinical accuracy standards that regulatory and provider audiences expect.",
    link: "#"
  },
  {
    id: 6,
    title: "Automotive",
    image: "/industry/06.png",
    text: "3D modeling for automotive covers vehicles, components, and configurators for both marketing campaigns and internal engineering review.",
    link: "#"
  },
  {
    id: 7,
    title: "Consumer Electronics",
    image: "/industry/07.png",
    text: "3D modeling for consumer electronics produces precise, market-ready models for launch campaigns and retail platform listings.",
    link: "#"
  },
  {
    id: 8,
    title: "Fashion and Apparel",
    image: "/industry/08.png",
    text: "3D modeling for fashion brands enables digital sampling, virtual try-on, and catalog content production without a physical photoshoot for every SKU. ",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "3D Character Modeling",
    description: "Custom 3D character modeling for games, animation, and brand mascots, built with clean topology ready for rigging and animation. Every character model is constructed with deformation in mind so that downstream animators are not fighting the geometry.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Product Modeling",
    description: "Precision 3D product modeling from CAD files or reference images for marketing, eCommerce, and engineering visualization. We match dimensions and proportions exactly so the final render is indistinguishable from the physical product.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Game Asset Modeling",
    description: "Game-ready 3D game asset modeling optimized for Unreal Engine assets and Unity assets with real-time performance in mind. Polycount and texture budgets are managed against your engine's actual performance targets, not a generic standard.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "3D Environment Modeling",
    description: "Full 3D environment modeling for games, architectural visualization, and virtual production built to scale and lighting accuracy. Environments are modeled with modularity in mind so assets can be reused and recombined efficiently.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "AR and VR Modeling",
    description: "AR/VR modeling services produce lightweight, real-time-ready virtual reality assets and augmented reality models for interactive platforms. Every asset is optimized for the frame rate and tracking stability that immersive applications demand.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Digital Twin Modeling",
    description: "Digital twin modeling that mirrors real-world equipment and facilities for simulation, monitoring, and predictive maintenance applications. The accuracy of source data is treated as non-negotiable since the model feeds operational decisions.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Metaverse Asset Modeling",
    description: "Metaverse 3D modeling for wearables, environments, and interactive objects built to platform-specific technical constraints. We work within the polygon, texture, and file size limits that each platform enforces.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Architectural 3D Modeling",
    description: "Architectural 3D modeling services for developers and architects producing accurate, presentation-ready building and interior models. Built directly from blueprints and architectural plans for dimensional accuracy.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Industrial and Manufacturing Modeling",
    description: "Industrial 3D modeling services converting CAD to 3D modeling output for training, marketing, and engineering review. We preserve engineering tolerances while optimizing the model for visualization use cases.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "3D Modeling Services for Businesses | Pixel Studios",
  description: "Need professional 3D modeling services? Pixel Studios builds custom 3D models for products, characters, games, and more. Get a free quote today.",
};

export default function Modeling3DPage() {
  return (
    <main>
      <Banner
        title="High-Impact 3D Modeling Services for Businesses"
        description="Why do so many 3D projects stall at the modeling stage before the animation even starts? Most 3D modeling companies treat the model as a technical checkbox instead of the foundation on which the entire project depends. A flawed model means every downstream stage, texturing, rigging, and rendering, inherits the flaw, and fixing geometry problems after a project is already in production costs far more than getting the topology right the first time. Pixel Studios Inc. provides professional 3D modeling services built to be production-ready from the first export: accurate topology, clean UVs, and a level of detail calibrated to exactly how the asset will be used."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection 
        title="Comprehensive 3D Modeling Services Tailored to Your Needs"
        description="Our 3D modeling solutions cover every asset type a business needs across product, character, and environment work, all produced in-house by professional 3D artists who specialize in the specific category of asset your project requires."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <WhyInvestSection />
      <TeamStandoutSection />
      <GreatVideosSection />
      <TechnologySection />
      <IndustrySection 
        heading="Industry-Leading 3D Modeling Solutions"
        description="Our 3D modeling services for businesses are applied across the following sectors, each with its own technical standards and production priorities that our team has built specific expertise in."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
