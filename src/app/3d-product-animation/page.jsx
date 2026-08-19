import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/ProductAnimation3D/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/ProductAnimation3D/CostSection"
import HowWeWorkSection from "@/components/ProductAnimation3D/HowWeWorkSection";
import WhyInvestSection from "@/components/ProductAnimation3D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/ProductAnimation3D/GreatVideosSection";
;
import CooperationModelsSection from "@/components/ProductAnimation3D/CooperationModelsSection";
import WonderingSection from "@/components/ProductAnimation3D/WonderingSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/ProductAnimation3D/FaqSection";











const standoutFeatures = [
  {
    id: 1,
    title: 'Product Marketing Campaigns',
    description: "3D marketing animation gives campaigns a visual asset that performs across every channel simultaneously, from paid social to email to the product page itself.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Product Launch Presentations',
    description: "Product animation for sales presentations gives launch teams a consistent, polished asset for every pitch instead of relying on a slide deck and a verbal description.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'eCommerce Product Showcases',
    description: "Product animation for eCommerce increases buyer confidence and reduces the ambiguity that drives returns, particularly for products with moving parts or assembly steps.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Trade Show and Exhibition Displays',
    description: "Product animation for trade shows gives booth visitors a compelling reason to stop and engage rather than walking past another static display.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Sales Presentations',
    description: "Product animation for sales teams replaces static decks with content that actually holds a prospect's attention through a full demo conversation.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Customer Education and Training',
    description: "Product training animation reduces support burden by answering common usage questions visually before a customer ever opens a support ticket.",
    icon: '/icons/experienced.png'
  }
];

const industries = [
  {
    id: 1,
    title: "Consumer Electronics",
    image: "/industry/01.png",
    text: "3D product animation for consumer electronics brands launching new devices into competitive retail markets where differentiation matters most.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare and Medical Devices",
    image: "/industry/02.png",
    text: "Product animation for medical devices built to the accuracy standards clinical and regulatory audiences require for both marketing and training use.",
    link: "#"
  },
  {
    id: 3,
    title: "Automotive",
    image: "/industry/03.png",
    text: "Product animation for automotive brands showcasing vehicles, components, and systems with cinematic quality across digital and showroom contexts.",
    link: "#"
  },
  {
    id: 4,
    title: "Manufacturing and Industrial",
    image: "/industry/04.png",
    text: "Product animation for manufacturers explaining equipment function and assembly to technical buyers who need precision over polish.",
    link: "#"
  },
  {
    id: 5,
    title: "Retail and eCommerce",
    image: "/industry/05.png",
    text: "Product animation for eCommerce and Shopify stores designed to convert browsing into purchasing through clearer feature communication.",
    link: "#"
  },
  {
    id: 6,
    title: "Beauty and Cosmetics",
    image: "/industry/06.png",
    text: "Photorealistic product rendering for beauty brands, highlighting texture, packaging, and application detail that photography often struggles to capture.",
    link: "#"
  },
  {
    id: 7,
    title: "Furniture and Home Products",
    image: "/industry/07.png",
    text: "3D product walkthrough animation for furniture brands showing scale and material quality accurately within real room contexts.",
    link: "#"
  },
  {
    id: 8,
    title: "Technology and SaaS",
    image: "/industry/08.png",
    text: "Product animation for SaaS products visualizing hardware components, devices, or physical product lines that complement a digital offering.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Product Explainer Animations",
    description: "3D product explainer videos that simplify how a product works for audiences encountering it for the first time, sequencing the explanation in the order a new buyer actually needs it.",
    videoSrc: "https://player.vimeo.com/video/1201624709?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Product Demonstration Videos",
    description: "Detailed product demonstration videos showing function, scale, and use case with photorealistic accuracy, giving buyers the confidence that comes from seeing a product in genuine use.",
    videoSrc: "https://player.vimeo.com/video/1201624709?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Product Launch Animations",
    description: "High-impact product launch animation built to create a moment around a release rather than a quiet announcement that gets lost in a crowded feed.",
    videoSrc: "https://player.vimeo.com/video/1201624709?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "eCommerce Product Animations",
    description: "eCommerce product animation optimized for product pages, Amazon listings, and Shopify stores to reduce return rates by setting accurate expectations before purchase.",
    videoSrc: "https://player.vimeo.com/video/1201624709?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Industrial Product Animations",
    description: "Industrial product animation for machinery and equipment that cannot be easily filmed or photographed due to scale, location, or operational constraints.",
    videoSrc: "https://player.vimeo.com/video/1201624709?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Medical Product Animations",
    description: "Medical product animation built to clinical accuracy standards for device marketing and provider education, where precision is non-negotiable.",
    videoSrc: "https://player.vimeo.com/video/1201624709?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Consumer Electronics Animations",
    description: "Technology product animation for consumer electronics launches across web, social, and retail environments, where first impressions are decided in seconds.",
    videoSrc: "https://player.vimeo.com/video/1201624709?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Product Assembly Animations",
    description: "Product assembly animation showing internal components and construction sequences clearly and accurately for technical buyers and training contexts.",
    videoSrc: "https://player.vimeo.com/video/1201624709?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Product Feature Highlight Videos",
    description: "Product feature animation isolating and explaining specific differentiators that drive the purchase decision, without burying them in a full product overview.",
    videoSrc: "https://player.vimeo.com/video/1201624709?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Conversion-Focused 3D Product Animation Services | Pixel Studios",
  description: "Need 3D product animation services that drive conversions? Pixel Studios builds custom product animations for eCommerce, industrial, and consumer brands.",
};

export default function TitlesAndProductAnimation3D() {
  return (
    <main>
      <Banner
        title="Conversion-Focused 3D Product Animation Services"
        description="Pixel Studios Inc. builds 3D product animation services around the specific objection or question your audience needs resolved before they buy. We are a dedicated 3D product animation company producing product launch animation, eCommerce product animation, and industrial product animation for brands across the USA, and every animation is built to move a buyer closer to a decision, not just look good in a portfolio reel. Whether you need to hire product animators for a single hero asset or outsource product animation services across a full catalog, the strategy comes before the render."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection 
        title="End-to-End 3D Product Animation Services for Modern Brands"
        description="Our product animation services cover every format a brand needs across the customer journey, from first awareness through post-purchase education, all produced in-house by a team that specializes specifically in product communication."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="HOW WE WORK"
        title={<>How Businesses Leverage <span>3D Product Animation</span> Services?</>}
        description="3D product animation is used across the entire product lifecycle — from early R&D concepts and marketing mockups to launch campaigns and post-sale support. Businesses that invest in 3D animation typically see faster comprehension, clearer communication, and stronger engagement than they achieve through static imagery or text-only specifications."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201624680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <GreatVideosSection />
      <CooperationModelsSection />
      <WhyInvestSection />
      <WonderingSection />
      <IndustrySection 
        heading="Specialized 3D Product Animation Solutions by Industry"
        description="Different product categories require different visual priorities, and our team brings specific experience to each of the following sectors."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
