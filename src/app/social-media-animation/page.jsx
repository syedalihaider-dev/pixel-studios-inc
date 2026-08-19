import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/SocialMediaAnimation/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/SocialMediaAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/SocialMediaAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/SocialMediaAnimation/GreatVideosSection";
;
import WonderingSection from "@/components/SocialMediaAnimation/WonderingSection";
import CostSection from "@/components/SocialMediaAnimation/CostSection";
import CooperationModelsSection from "@/components/SocialMediaAnimation/CooperationModelsSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/SocialMediaAnimation/FaqSection";











const standoutFeatures = [
  {
    id: 1,
    title: 'Motion Graphics Animation',
    description: "Social media motion graphics for branded content, data visualization, and campaign announcements. Clean, brand-consistent motion design that performs across platforms without per-platform adaptation.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: '2D Animated Videos',
    description: "Character-driven and illustrated 2D animated social media content for brand storytelling, product promotion, and audience education. The most versatile format in social media video animation.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Product Promotion Animations',
    description: "Animated product promotion videos that showcase features, benefits, and offers in the format and duration each platform performs best with.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Brand Awareness Videos',
    description: "Brand animation services that build recognition and visual consistency across a brand's social presence. Animated brand content where the identity is recognizable before the logo appears.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Event Promotion Videos',
    description: "Animated social media videos for event announcements, countdowns, and post-event recaps built to generate registrations and attendance.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Explainer Animations for Social Media',
    description: "Short-form animated explainer content adapted for 30 to 60-second social media distribution. The explainer video logic applied to the social media format constraint.",
    icon: '/icons/flexible.png'
  },
  {
    id: 7,
    title: 'Animated Infographics',
    description: "Data and statistics animated into shareable social content. Animated infographics outperform static data graphics in shares and saves because motion holds attention long enough for the information to register.",
    icon: '/icons/flexible.png'
  },
  {
    id: 8,
    title: 'Kinetic Typography Videos',
    description: "Text-led animated social content where the words carry the motion and emphasis. Effective for quote content, brand statements, and animations that communicate without a voiceover.",
    icon: '/icons/flexible.png'
  },
];

const industries = [
  {
    id: 1,
    title: "E-Commerce Brands",
    image: "/industry/01.png",
    text: "Product promotion animations and animated social media ads for e-commerce brands. Built to drive click-through to product pages and reduce paid acquisition cost.",
    link: "#"
  },
  {
    id: 2,
    title: "SaaS Companies",
    image: "/industry/02.png",
    text: "Feature announcements and short-form explainer content for SaaS brands building social presence. LinkedIn animated video services and Instagram animation for B2B audiences.",
    link: "#"
  },
  {
    id: 3,
    title: "Healthcare Organizations",
    image: "/industry/03.png",
    text: "Patient education content and health awareness campaigns produced to the accuracy and sensitivity standards the industry requires for public-facing social content.",
    link: "#"
  },
  {
    id: 4,
    title: "Real Estate Businesses",
    image: "/industry/04.png",
    text: "Property launch content and development marketing for real estate brands. Animated social media videos that give buyers a compelling first look before they commit to a viewing.",
    link: "#"
  },
  {
    id: 5,
    title: "Financial Services",
    image: "/industry/05.png",
    text: "Financial product explanation and brand animation for financial services companies producing social media video for professional audiences that expect accuracy and clarity.",
    link: "#"
  },
  {
    id: 6,
    title: "Education and E-Learning",
    image: "/industry/06.png",
    text: "Course launch content and short-form educational animation for education brands driving enrollment through social channels.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups and Technology Companies",
    image: "/industry/06.png",
    text: "Social media animation for startups building category awareness. First-impression content produced to communicate clearly before the brand reputation develops independently. ",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Animated Social Media Ads",
    description: "Paid social animated ads built for conversion. Our animated social media ads are designed around the first-frame hook, the value message, and the call to action in that order, with platform-specific aspect ratios and creative specifications built in from the start.",
    videoSrc: "https://player.vimeo.com/video/1201624785?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Instagram Animation Videos",
    description: "Instagram animation services for feed posts, stories, reels, and carousel content. Square or portrait aspect ratios, captions burned in for silent viewing, and a visual hook in the first frame that performs before the algorithm decides whether to extend reach.",
    videoSrc: "https://player.vimeo.com/video/1201624785?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Facebook Animation Videos",
    description: "Facebook video animation for organic posts, boosted content, and paid ad campaigns. Produced to meet the watch-time signals Facebook uses for organic distribution, across brand awareness, retargeting, and product launch campaign types.",
    videoSrc: "https://player.vimeo.com/video/1201624785?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "LinkedIn Animation Content",
    description: "LinkedIn animated video services for B2B brands, company announcements, and lead generation. LinkedIn video animation requires a different register: measured pacing, professional visual tone, and a hook that fits a professional context without talking down to the audience.",
    videoSrc: "https://player.vimeo.com/video/1201624785?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "TikTok Animation Videos",
    description: "TikTok animation video production built for a platform where the first frame determines reach. Native formats, on-screen text for silent viewing, and motion pacing calibrated to retain viewers who arrive mid-scroll with no prior brand awareness.",
    videoSrc: "https://player.vimeo.com/video/1201624785?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "YouTube Shorts Animation",
    description: "YouTube Shorts animation produced in the native vertical format with the watch-time signals YouTube uses for Shorts distribution. Built to perform in the Shorts feed and as traffic drivers to full-length channel content.",
    videoSrc: "https://player.vimeo.com/video/1201624785?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Animated Stories and Reels",
    description: "Short-form social media animation for stories and reels across Instagram and Facebook. Visual density, text overlay, and motion pacing calibrated for the 15-second window where most viewers decide whether to tap through or swipe.",
    videoSrc: "https://player.vimeo.com/video/1201624785?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Promotional Social Media Videos",
    description: "Promotional social media videos for product launches, seasonal campaigns, and limited-time offers. The offer, the urgency, and the response mechanism all visible within the first ten seconds for viewers who will not watch to the end. ",
    videoSrc: "https://player.vimeo.com/video/1201624785?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Social Media Animation Services | Pixel Studios Inc.",
  description: "Need social media animation services that stop the scroll? Pixel Studios creates custom animated social media videos for every platform. Get a free quote today.",
};

export default function SocialMediaAnimationPage() {
  return (
    <main>
      <Banner
        title="Social Media Animation Services"
        description="At Pixel Studios Inc., our social media animation services are built around one reality: your audience owes your content nothing. Every second of watch time has to be earned. We produce animation for social media that is engineered for the environment it actually lives in: the right format, the right hook, the right pacing, and a message clear enough to land even with the sound off. Our social media animation production covers every major platform for brands, e-commerce stores, SaaS companies, and agencies across the USA."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection 
        title="Our Social Media Animation Services"
        description="Our custom social media animation company covers every format, every platform, and every campaign objective."
        sliderItems={sliderItems}
      />
      <GreatVideosSection />
      <PortfolioShowcase />
      <HowWeWorkSection />
            <TeamStandoutSection
        subtitle="Social Media Animation Services"
        title={<>Types of <span>Social Media Animations</span> We Create</>}
        description="Our social media animation production covers every animated content type a brand needs for a complete social content calendar."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201856415?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WonderingSection />
      <WhyInvestSection />
      <CostSection />
      <CooperationModelsSection />
      <IndustrySection 
        heading="Social Media Animation Services for Industries"
        description="Our social media animation services for businesses are applied across every sector with production approaches specific to each platform context."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
