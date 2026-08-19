import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/CorporateVideoAnimation/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/CorporateVideoAnimation/CostSection"
import HowWeWorkSection from "@/components/CorporateVideoAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/CorporateVideoAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/CorporateVideoAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/CorporateVideoAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/CorporateVideoAnimation/CooperationModelsSection";
import TechnologySection from "@/components/CorporateVideoAnimation/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/CorporateVideoAnimation/FaqSection";

const industries = [
  {
    id: 1,
    title: "Technology and SaaS",
    image: "/industry/01.png",
    text: "Product explainers, feature announcements, and onboarding animation for technology companies where visual clarity drives trial conversion.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare and Medical",
    image: "/industry/02.png",
    text: "Patient education, device marketing, and healthcare brand communication are built to the accuracy and sensitivity standards the industry requires.",
    link: "#"
  },
  {
    id: 3,
    title: "Finance and FinTech",
    image: "/industry/03.png",
    text: "Investment product explanation and financial literacy content for finance audiences that require precision in both message and production presentation.",
    link: "#"
  },
  {
    id: 4,
    title: "Manufacturing and Industrial",
    image: "/industry/04.png",
    text: "Equipment demonstration, process visualization, and safety training animation for industrial businesses communicating across technical and non-technical audiences.",
    link: "#"
  },
  {
    id: 5,
    title: "Education and E-Learning",
    image: "/industry/05.png",
    text: "Curriculum animation and instructional video content for educational platforms and corporate learning programs at scale.",
    link: "#"
  },
  {
    id: 6,
    title: "Real Estate",
    image: "/industry/06.png",
    text: "Property marketing, development overview, and investment presentation animation for real estate brands and developers.",
    link: "#"
  },
  {
    id: 7,
    title: "Retail and E-Commerce",
    image: "/industry/07.png",
    text: "Product launch animation, promotional campaign content, and brand storytelling for retail and e-commerce brands competing in high-attention markets.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Corporate Explainer Videos",
    description: "Corporate explainer videos that distill complex services, platforms, or business models into a clear 60 to 90-second argument that a new prospect can follow without prior context.",
    videoSrc: "https://player.vimeo.com/video/1201856130?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Animated Promotional Videos",
    description: "Animated promotional videos for product launches, campaigns, and brand awareness pushes, built with a conversion objective embedded in the creative structure rather than added at the end.",
    videoSrc: "https://player.vimeo.com/video/1201856130?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Training Videos",
    description: "Corporate training videos for onboarding, compliance, and skills development that improve retention and reduce per-learner delivery costs compared to live or static alternatives.",
    videoSrc: "https://player.vimeo.com/video/1201856130?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Company Overview Videos",
    description: "Company overview videos that introduce a brand, its values, and its capabilities to new audiences in a format that holds attention, where a static website page cannot.",
    videoSrc: "https://player.vimeo.com/video/1201856130?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Business Presentation Videos",
    description: "Animated business presentation videos for pitches, proposals, and client meetings that give sales teams a consistent, polished asset for every high-stakes conversation.",
    videoSrc: "https://player.vimeo.com/video/1201856130?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Internal Communication Videos",
    description: "Internal communication videos for company announcements, culture messaging, and organizational changes that reach distributed teams consistently and memorably.",
    videoSrc: "https://player.vimeo.com/video/1201856130?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Animated Product Videos",
    description: "Animated product videos that demonstrate features, benefits, and use cases clearly for both marketing audiences and sales conversations requiring visual support.",
    videoSrc: "https://player.vimeo.com/video/1201856130?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Corporate Motion Graphics Videos",
    description: "Corporate motion graphics videos for data presentation, brand storytelling, and campaign content, built within a consistent visual brand system across all productions.",
    videoSrc: "https://player.vimeo.com/video/1201856130?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Investor Presentation Videos",
    description: "Investor presentation videos that explain business models, market opportunity, and traction to funding audiences who need the story clearly before they engage with the numbers.",
    videoSrc: "https://player.vimeo.com/video/1201856130?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Corporate Video Animation Services for Businesses | Pixel Studios",
  description: "Need corporate video animation services that actually drive business results? Pixel Studios builds custom animated corporate videos for brands across the USA. Get a quote.",
};

export default function CorporateVideoAnimationPage() {
  return (
    <main>
      <Banner
        title="Corporate Video Animation Services for Businesses"
        description="At Pixel Studios Inc., our corporate video animation services are built around that second question first. We produce video animation for business that is designed to move a specific audience toward a specific action, whether that is a lead submission, a training module completion, an investment decision, or a purchase. Every animated corporate video we deliver starts from the business objective, not from the storyboard."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection 
        title="Our Corporate Animation Video Production Services"
        description="Our corporate animation video production covers every format a business needs across the customer journey, from first-touch marketing through internal training and investor communication."
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
        heading="Corporate Video Animation Solutions for Every Industry"
        description="A corporate animation video for a financial services firm and one for a SaaS onboarding flow are not the same project. Audience psychology, regulatory language, and visual norms differ by industry. We have built genuine production experience across the sectors below, and we understand those differences from the first discovery call."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
