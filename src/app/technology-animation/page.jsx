import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/TechnologyAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/TechnologyAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/TechnologyAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/TechnologyAnimation/GreatVideosSection";
import FaqSection from "@/components/TechnologyAnimation/FaqSection";

const whyChooseSectionFeatures = [
  {
    id: 1,
    title: 'Experienced Motion Designers',
    description: "Our motion design team has produced logo animation for brands across consumer, corporate, entertainment, technology, and healthcare sectors with genuinely cross-industry experience.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Custom Animation Concepts',
    description: "Every project begins with original concept development. No stock motion paths or template effects. Custom logo animation built specifically for each brand.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Fast Turnaround Times',
    description: "Most logo animation projects complete in one to two weeks from brief sign-off. Rush production available for campaign launch windows.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Dedicated Project Management',
    description: "One project manager from brief to delivery. Every milestone is dated. Every update is proactive.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'High-Quality Motion Design',
    description: "Professional logo animation produced to broadcast-quality standards regardless of the distribution platform. Quality is the baseline, not a premium tier.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Multiple Export Formats',
    description: "Delivery in MP4, transparent-background MOV, GIF, and source files. Platform-specific exports for social, web, and broadcast included in standard packages.",
    icon: '/icons/experienced.png'
  },
  {
    id: 7,
    title: 'Flexible Cooperation Models',
    description: "Project-based, retainer, or dedicated team models. We adapt to your needs, timelines, and budget with transparent terms and no surprises.",
    icon: '/icons/experienced.png'
  },
  {
    id: 8,
    title: 'Brand-Centric Animation Strategy',
    description: "Every animation starts with your brand goals. We define the objective first, then select the right animation style to match your message and audience.",
    icon: '/icons/experienced.png'
  }
];

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
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
