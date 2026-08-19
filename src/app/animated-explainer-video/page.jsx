import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/AnimatedExplainerVideo/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/AnimatedExplainerVideo/HowWeWorkSection";
import WhyInvestSection from "@/components/AnimatedExplainerVideo/WhyInvestSection";
import GreatVideosSection from "@/components/AnimatedExplainerVideo/GreatVideosSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import WhyChooseSection from "@/components/AnimatedExplainerVideo/WhyChooseSection";
import PricingSection from "@/components/AnimatedExplainerVideo/PricingSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/AnimatedExplainerVideo/FaqSection";
import Link from "next/link";

const standoutFeatures = [
  {
    id: 1,
    title: '2D Explainer Animation',
    description: <><Link href="/2d-animation-services">Custom 2D Animation</Link> is the most widely used format in animated explainer video production. Clean character animation, flat design storytelling, and illustrated explainers that communicate clearly across every screen size and platform.</>,
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Motion Graphics Explainer Videos',
    description: <>Text-driven, data-driven, and brand-system-driven animated content for brands that need visual consistency across a content library. Kinetic typography, animated infographics, and branded <Link href="/motion-graphics">custom motion design</Link>.</>,
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Whiteboard Explainer Videos',
    description: <>The illustrated hand-drawn format strips visual distraction and focuses the viewer entirely on the concept. Still <Link href="/whiteboard-animation-services">whiteboard animation</Link> is one of the highest-completion-rate formats available for training and educational explainer content.</>,
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Character Animation Videos',
    description: <><Link href="/character-animation">Character animation</Link> explainer is used for expressive character-driven animated explainer videos for consumer brands, B2C campaigns, and educational content where the emotional connection between the character and viewer strengthens the message.</>,
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Infographic Animation',
    description: "Data and statistics are animated into content that people finish watching. Used in investor communications, annual reports, social media campaigns, and educational series where numbers need to be compelling, not just accurate.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Kinetic Typography Videos',
    description: "Text-led animated video services where the words themselves carry the motion and emphasis. Highly effective for quote-driven content, brand statement videos, and short-form social media animation.",
    icon: '/icons/experienced.png'
  }
];

const industries = [
  {
    id: 1,
    title: "Technology and SaaS",
    image: "/industry/01.png",
    text: <><Link href="/saas-explainer-videos">SaaS explainer videos</Link>, product walkthroughs, and feature announcements for software companies at every stage of growth.</>,
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: <><Link href="/healthcare-animation">Healthcare animation </Link>is used mainly for Patient education, medical device explanation, and pharmaceutical brand communication to clinical accuracy standards.</>,
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: <>Curriculum explainer videos and instructional <Link href="/education-animation">educational animated content</Link> built around learning outcomes for LMS and standalone platforms.</>,
    link: "#"
  },
  {
    id: 4,
    title: "Finance & Fintech",
    image: "/industry/04.png",
    text: <><Link href="/finance-animation">Investment product explanation animation</Link> and financial literacy content for audiences who need clarity, not simplification.</>,
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate",
    image: "/industry/05.png",
    text: <><Link href="/real-estate-animation">Real Estate Property explainer videos</Link>, development marketing, and investment communication for real estate brands and developers. </>,
    link: "#"
  },
  {
    id: 6,
    title: "Manufacturing and Industrial",
    image: "/industry/06.png",
    text: <>Our <Link href="/manufacturing-animation">manufacturing animation service</Link> is best fit for the manufacturing sector that has a lot of technical process explanation, equipment walkthroughs, and safety communication for industrial and engineering audiences. </>,
    link: "#"
  }
  ,
  {
    id: 7,
    title: "E-Commerce and Retail",
    image: "/industry/06.png",
    text: <>Product explainer videos and <Link href="/ecommerce-video-production">promotional animated video services for consumer brands</Link> competing in high-attention retail environments.</>,
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
    description: <>Business explainer videos for investor communication, internal alignment, and corporate brand positioning. We produce <Link href="/corporate-video-animation">corporate video animation service</Link> that make complex organizational messages clear without requiring a 20-slide deck.</>,
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
    description: <>Patient education with <Link href="/medical-animation">medical animation</Link>, device explanation, and healthcare brand communication are built to the accuracy and sensitivity standards the industry requires. Clinical comprehension, not just visual clarity.</>,
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
        description="At Pixels Studios Inc our animated explainer video services are built from the audience's decision-making process outward. We combine strategic storytelling, professional scripting, engaging visuals, voiceover, sound design, and polished animation to simplify complex products, services, and ideas. We are a dedicated animated explainer video company producing custom explainer videos for businesses across the USA that not only communicate what a product does but also make the viewer feel the problem it solves before they see the solution."
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
      <TeamStandoutSection
        subtitle="TYPES OF"
        title={<><span>Animated Explainer Video</span> Styles We Offer</>}
        description="The right animation style is determined by the audience, the content, and the distribution context. Here is every style our animated explainer video production team works in."
        features={standoutFeatures}
      />
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
