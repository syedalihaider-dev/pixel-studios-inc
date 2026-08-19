import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/AnimatedExplainerVideo/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/AnimatedExplainerVideo/HowWeWorkSection";
import WhyInvestSection from "@/components/AnimatedExplainerVideo/WhyInvestSection";
import GreatVideosSection from "@/components/AnimatedExplainerVideo/GreatVideosSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import TeamStandoutSection from "@/components/AnimatedExplainerVideo/TeamStandoutSection";
import WhyChooseSection from "@/components/AnimatedExplainerVideo/WhyChooseSection";
import PricingSection from "@/components/AnimatedExplainerVideo/PricingSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/AnimatedExplainerVideo/FaqSection";

const industries = [
  {
    id: 1,
    title: "Technology and SaaS",
    image: "/industry/01.png",
    text: "SaaS explainer videos, product walkthroughs, and feature announcements for software companies at every stage of growth.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "Patient education, medical device explanation, and pharmaceutical brand communication to clinical accuracy standards.",
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: "Curriculum explainer videos and instructional animated content built around learning outcomes for LMS and standalone platforms.",
    link: "#"
  },
  {
    id: 4,
    title: "Finance & Fintech",
    image: "/industry/04.png",
    text: "Investment product explanation and financial literacy content for audiences who need clarity, not simplification.",
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate",
    image: "/industry/05.png",
    text: "Property explainer videos, development marketing, and investment communication for real estate brands and developers.",
    link: "#"
  },
  {
    id: 6,
    title: "Manufacturing and Industrial",
    image: "/industry/06.png",
    text: "Technical process explanation, equipment walkthroughs, and safety communication for industrial and engineering audiences.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "E-Commerce and Retail",
    image: "/industry/06.png",
    text: "Product explainer videos and promotional animated video services for consumer brands competing in high-attention retail environments.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Product Explainer Videos",
    description: "Custom explainer videos built around a single product with a specific audience and a specific conversion objective. We write the script around the decision the viewer needs to make, not around every feature the product has.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "SaaS Explainer Videos",
    description: "SaaS explainer videos that close the gap between product capability and prospect comprehension. Built to reduce trial drop-off, improve demo-to-close ratios, and give sales teams a link they use in every introductory email.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Explainer Videos",
    description: "Business explainer videos for investor communication, internal alignment, and corporate brand positioning. We produce animated video services that make complex organizational messages clear without requiring a 20-slide deck.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Educational Explainer Videos",
    description: "Animated explainer video production for educational institutions, e-learning platforms, and knowledge-heavy brands that need content audiences can learn from and return to rather than watch once and forget.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Healthcare Explainer Videos",
    description: "Patient education, device explanation, and healthcare brand communication are built to the accuracy and sensitivity standards the industry requires. Clinical comprehension, not just visual clarity.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Financial Services Explainer Videos",
    description: "Investment product explanation, regulatory communication, and financial literacy content. Custom explainer videos for finance audiences that do not accept ambiguity or appreciate being talked down to.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Startup Explainer Videos",
    description: "First-impression animated video services for early-stage brands that need to communicate clearly and credibly before their reputation does it for them. Built to perform in investor pitches, landing pages, and first sales conversations.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Marketing and Promotional Explainer Videos",
    description: "Promotional explainer videos and campaign content built with conversion objectives embedded from the first script draft. Animated video services designed to produce a response, not just an impression.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Animated Explainer Video Services | Pixel Studios Inc.",
  description: "Looking for animated explainer video services that convert? Pixel Studios builds custom explainer videos for businesses across the USA.",
};

export default function AnimatedExplainerVideo() {
  return (
    <main>
      <Banner
        title="Animated Explainer Video Services"
        description="At Pixel Studios Inc., our animated explainer video services are built from the audience"
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection 
        title="Our Animated Explainer Video Services"
        description="Our animated explainer video production covers every format and industry context. Here is the full range of business explainer videos we build."
        sliderItems={sliderItems}
      />
      <HowWeWorkSection />
      <PortfolioShowcase />
      <WhyInvestSection />
      <GreatVideosSection />
      <TeamStandoutSection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialSection />
      <IndustrySection 
        heading="Industries We Serve"
        description="Animated explainer video services work differently in every sector. We have built production experience specific to each of the following industries."
        industries={industries}
        variant="gradient"
      />
      <FaqSection />
    </main>
  );
}
