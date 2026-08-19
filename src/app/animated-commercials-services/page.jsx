import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/AnimatedCommercials/CostSection";
import StatsSection from "@/components/AnimatedCommercials/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyInvestSection from "@/components/AnimatedCommercials/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/AnimatedCommercials/GreatVideosSection";
import TeamStandoutSection from "@/components/AnimatedCommercials/TeamStandoutSection";
import HowWeWorkSection from "@/components/AnimatedCommercials/HowWeWorkSection";
import CooperationModelsSection from "@/components/AnimatedCommercials/CooperationModelsSection";
import WonderingSection from "@/components/AnimatedCommercials/WonderingSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/AnimatedCommercials/FaqSection";

const industries = [
  {
    id: 1,
    title: "YouTube Video Ads",
    image: "/industry/01.png",
    text: "Skippable and non-skippable YouTube commercial animation built to the platform's creative requirements. The first five seconds of a skippable ad are a different brief from seconds six through thirty.",
    points: [
      "Skippable & non-skippable YouTube ads",
      "Optimized for YouTube creative requirements",
      "Strong hooks in the first five seconds"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Social Media Video Ads",
    image: "/industry/02.png",
    text: "Instagram, TikTok, Facebook, and LinkedIn commercial animation in the aspect ratios and technical specifications each platform requires for paid distribution.",
    points: [
      "Instagram, TikTok, Facebook & LinkedIn",
      "Platform-specific aspect ratios",
      "Optimized for paid social campaigns"
    ],
    link: "#"
  },
  {
    id: 3,
    title: "TV Commercials",
    image: "/industry/03.png",
    text: "Broadcast television commercial animation to network delivery specifications. 15-second, 30-second, and 60-second formats with the master and cut-down versions media plans typically require.",
    points: [
      "15, 30 & 60-second TV commercials",
      "Broadcast-ready delivery specifications",
      "Master and cut-down versions included"
    ],
    link: "#"
  },
  {
    id: 4,
    title: "OTT and Streaming Ads",
    image: "/industry/04.png",
    text: "Connected TV and OTT commercial animation for streaming platform placements where the audience is engaged, but the skip option changes the creative requirement.",
    points: [
      "Connected TV & OTT advertising",
      "Streaming platform optimization",
      "Creative built for viewer engagement"
    ],
    link: "#"
  },
  {
    id: 5,
    title: "Website Commercial Videos",
    image: "/industry/05.png",
    text: "Homepage and landing page commercial animation that reduces bounce rate and increases the time on page, which signals audience intent to conversion tracking systems.",
    points: [
      "Homepage & landing page videos",
      "Reduce bounce rate",
      "Increase visitor engagement & conversions"
    ],
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce Product Ads",
    image: "/industry/06.png",
    text: "Product commercial animation for e-commerce environments where the visual quality of the product presentation determines whether the browser becomes a buyer.",
    points: [
      "High-quality product presentations",
      "Built for e-commerce platforms",
      "Designed to increase purchase intent"
    ],
    link: "#"
  },
  {
    id: 7,
    title: "Paid Advertising Creatives",
    image: "/industry/06.png",
    text: "Animated ad creative for search, display, and programmatic placements at the production quality that premium ad inventory requires.",
    points: [
      "Search, display & programmatic ads",
      "Premium-quality animated creatives",
      "Optimized for paid advertising campaigns"
    ],
    link: "#"
  },
  {
    id: 8,
    title: "Promotional Campaign Videos",
    image: "/industry/06.png",
    text: "Seasonal, event-based, and limited-time promotional animated commercial content that creates urgency without undermining brand positioning.",
    points: [
      "Seasonal & event-based campaigns",
      "Limited-time promotional videos",
      "Creates urgency while protecting brand value"
    ],
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Product Commercial Animation",
    description:
      "Product commercial animation is built around the specific audience decision that the product needs to influence. Not a feature tour. A visual argument for why this product solves a problem the viewer already has.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Brand Story Commercials",
    description:
      "Brand commercials that communicate values and positioning to audiences who have never heard of the company. The story is not about the brand. It is about the viewer and what the brand means for them.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Commercial Videos",
    description:
      "Commercial animation that explains what a product does clearly enough that the viewer arrives at the landing page already understanding the value proposition. Less work for the landing page. More qualified traffic at the click.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Character Animation Commercials",
    description:
      "Character-driven commercials for brands whose audience responds to emotional narrative. The character is not a decoration. It is the device through which the commercial earns the viewer's attention long enough to deliver the message.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "2D Animated Commercials",
    description:
      "2D animated commercials across every visual style from clean motion graphics to fully illustrated character animation. Produced at the frame rate and resolution the distribution platform requires.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "3D Animated Commercials",
    description:
      "3D animated commercials for products with physical form, technical complexity, or the kind of visual quality requirement that 2D cannot match for the specific brief.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Motion Graphics Commercials",
    description:
      "Motion graphics commercial animation for data-driven messages, product feature communication, and brand campaigns where the argument is the visual rather than the story.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Social Media Commercials",
    description:
      "Social media commercial videos are built for the platform rather than adapted to it. Vertical formats, hooks in the first frame, and captions for the majority watching without sound. Produced to each platform's specific creative requirements.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Television Commercial Animation",
    description:
      "TV commercial animation to broadcast delivery specifications. Frame rate, loudness normalization, color space, and codec requirements were handled correctly the first time, not corrected after the network rejected the initial submission.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Animated Commercial Services That Capture Attention & Drive Results | Pixel Studios ",
  description: "Need animated commercial services that convert, not just impress? Pixel Studios builds strategy-driven animated commercials for brands across the USA. Get a quote today.",
};

export default function AnimatedCommercialsPage() {
  return (
    <main>
      <Banner
        title="Animated Commercial Services That Capture Attention and Drive Results."
        description="Why do so many animated commercials look impressive and generate almost no measurable return on the media spend behind them? Most animated commercial production companies start the conversation with creative direction. Visual style. Animation quality. The things that make a commercial look good. And looking good is not a business outcome. The brands generating real results from animated advertising are the ones whose creative was built around a conversion objective before anyone selected a color palette. Pixel Studios Inc. is a commercial animation company that starts with what you need the viewer to do and works backward from there. The animation is the delivery mechanism. The strategy is what determines whether it works."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <StatsSection />
      <ServicesSection 
        title="Animated Commercial Services for Every Marketing Goal"
        description="Our animated commercial production covers every format and objective a brand runs advertising toward."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <WonderingSection />
      <TestimonialSection />
      <IndustrySection 
        heading="Animated Commercial Formats We Create"
        description="Our animated commercial production services cover every major advertising format, from social media campaigns and YouTube ads to television commercials, streaming platforms, websites, and e-commerce promotions. Every commercial is created to meet the technical specifications and marketing objectives of its intended platform."
        industries={industries}
        variant="gradient"
      />
      <FaqSection />
    </main>
  );
}
