import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Industries/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/Industries/WhyChooseSection";
import WonderingSection from "@/components/Industries/WonderingSection";
import WhyPartnerSection from "@/components/Industries/WhyPartnerSection";
import WhyInvestSection from "@/components/Industries/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import CostSection from "@/components/Industries/CostSection";
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import TestimonialsSlider from "@/components/Industries/TestimonialsSlider";
import TrustedClientsSection from "@/components/Industries/TrustedClientsSection";
import IndustrySection from "@/components/Common/IndustrySection";
import GreatVideosSection from "@/components/Industries/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Industries/FaqSection";

const industries = [
  {
    id: 1,
    title: "Retail & E-commerce",
    image: "/industry/01.png",
    text: "Boost sales and engage shoppers with stunning product animations and explainer videos tailored for e-commerce platforms.",
    link: "#"
  },
  {
    id: 2,
    title: "Professional Services",
    image: "/industry/02.png",
    text: "Establish trust and clearly communicate complex value propositions with corporate animations designed for B2B success.",
    link: "#"
  },
  {
    id: 3,
    title: "Software & Tech",
    image: "/industry/03.png",
    text: "Simplify software demos and highlight features effectively with dynamic SaaS animation and UI/UX motion graphics.",
    link: "#"
  },
  {
    id: 4,
    title: "Medical & Biotech",
    image: "/industry/04.png",
    text: "Visualize complex biological processes and medical devices accurately with specialized 3D scientific animations.",
    link: "#"
  },
  {
    id: 5,
    title: "Education",
    image: "/industry/05.png",
    text: "Enhance learning experiences and increase student retention with engaging educational animations and e-learning courses.",
    link: "#"
  },
  {
    id: 6,
    title: "Real Estate",
    image: "/industry/06.png",
    text: "Showcase properties and architectural designs with immersive 3D walkthroughs and real estate visualization.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "2D Animated Explainer Videos",
    description: "How long does it take your sales team to explain what your product does in a first call? A well-built 2D explainer video animation solves that permanently. We write scripts around the viewer's decision-making process, not your product feature list.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "2D Commercials",
    description: "Capture attention and drive conversions with high-quality 2D animated commercials tailored for TV, social media, and web campaigns. We blend compelling storytelling with vibrant visuals.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 3,
    title: "Educational 2D Animation",
    description: "Simplify complex concepts into easy-to-understand educational videos. Perfect for e-learning platforms, training modules, and classroom materials that keep learners engaged.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 4,
    title: "2D Character Animation",
    description: "Bring unique characters to life with our expert 2D character animation services. From mascots to narrative-driven protagonists, we ensure smooth and expressive movements.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 5,
    title: "2D Motion Graphics",
    description: "Enhance your digital presence with sleek 2D motion graphics. Ideal for corporate presentations, UI/UX animations, and visually striking promotional content.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  }
];

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
  title: "Industries - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc Industries page. We are an award-winning digital agency.",
};

export default function Industries() {
  return (
    <main>
      <Banner
        slides={bannerSlides}
      />
      <StatsSection />
      <ServicesSection
        title="Our Services"
        description={null}
        sliderItems={sliderItems}
      />
      <WhyChooseSection />
      <WonderingSection />
      <WhyPartnerSection />
      <WhyInvestSection />
      <PortfolioShowcase />
      <div style={{ backgroundImage: "radial-gradient(60.57% 91.94% at 69.22% 43%, #C53ADD 0%, #19042D 100%)" }}>
        <CostSection />
        <GetQuoteSection />
      </div>
      <TestimonialsSlider />
      <GreatVideosSection />
      <TestimonialSection />
      <TrustedClientsSection />
      <IndustrySection 
        heading="We've delivered results for companies in every industry."
        industries={industries}
        variant="gradient"
      />
      <FaqSection />
    </main>
  );
}
