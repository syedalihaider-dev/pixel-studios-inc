import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/AnimationAI/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/AnimationAI/CostSection"
import HowWeWorkSection from "@/components/AnimationAI/HowWeWorkSection";
import WhyInvestSection from "@/components/AnimationAI/WhyInvestSection";
import StepProcessSection from "@/components/AnimationAI/StepProcessSection";
import TestimonialsSlider from "@/components/AnimationAI/TestimonialsSlider";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/AnimationAI/GreatVideosSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/AnimationAI/FaqSection";

const industries = [
  {
    id: 1,
    title: "Anime-Style Animation",
    image: "/industry/01.png",
    text: "The aesthetic codes of anime are applied to brand content, character animation, and commercial video at a timeline that traditional anime production cannot match.",
    link: "#"
  },
  {
    id: 2,
    title: "2D AI Animation",
    image: "/industry/02.png",
    text: "2D AI animated videos with the flat illustration aesthetic that works across social media, explainers, and brand campaigns. Clean, intentional, and on-brand between every frame.",
    link: "#"
  },
  {
    id: 3,
    title: "3D AI Animation",
    image: "/industry/03.png",
    text: "3D AI animation for product content, architectural visualization, and cinematic brand sequences where dimensional quality matters and the timeline does not allow traditional 3D production.",
    link: "#"
  },
  {
    id: 4,
    title: "Stylized Cinematic Animation",
    image: "/industry/04.png",
    text: "High-production-value cinematic animation with AI-assisted visual generation and expert compositing. The cinematic quality of traditional production at a meaningfully faster pace.",
    link: "#"
  },
  {
    id: 5,
    title: "Realistic AI Animation",
    image: "/industry/05.png",
    text: "Photorealistic AI animation for product and brand content where the visual standard is photorealistic rendering, but the timeline and budget of traditional CGI are not viable.",
    link: "#"
  },
  {
    id: 6,
    title: "Cartoon Animation",
    image: "/industry/06.png",
    text: "AI-accelerated cartoon animation that retains the expressive character performance that makes cartoon content emotionally engaging. The AI speeds up the frames. The animator ensures they tell the story.",
    link: "#"
  },
  {
    id: 7,
    title: "Motion Graphics Design",
    image: "/industry/06.png",
    text: "AI-assisted motion graphics for brand content, data visualization, and marketing campaigns where the design language needs to be consistent across a high volume of assets.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "AI Anime Opening Animation",
    description:
      "Anime-style opening sequences and title animations produced with AI-assisted visual generation and expert motion design. The aesthetic quality of anime opening animation is without the multi-month production timeline of traditional hand-drawn production.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "AI Explainer Videos",
    description:
      "AI-powered explainer video production that compresses the visual development timeline without compressing the strategic clarity that makes an explainer video actually explain something. The script is still the argument. The AI accelerates how fast the visual case is assembled around it.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "AI Motion Graphics Animation",
    description:
      "AI motion graphics animation for brand content, social media, and marketing campaigns where the visual quality needs to compete with traditional production at a fraction of the timeline and cost.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "AI Commercial Animation",
    description:
      "AI commercial animation for paid advertising campaigns that need multiple creative variations tested at a pace that traditional production cannot support. Generate, test, optimize, repeat. AI makes the loop faster without making the creative decisions for you.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "AI Product Animation",
    description:
      "AI-assisted product animation for e-commerce, marketing, and sales content. Faster than traditional 3D production. Better than what an AI tool produces without an animator in the room.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "AI Character Animation",
    description:
      "AI character animation for brand characters, mascots, and narrative content. The character stays on-brand between frames because a human with brand standards is reviewing every one of them.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "AI Music Video Production",
    description:
      "AI-powered music video production for artists, labels, and brands, building audio-visual content at a scale that traditional production cannot make economically viable. Visual storytelling that matches the track's emotional register rather than illustrating the lyrics literally.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "AI Social Media Animation",
    description:
      "AI animated videos for social media content calendars that require more volume than traditional animation production can sustain. Platform-native formats, on-brand visual style, and the creative direction that makes each piece feel intentional rather than generated.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "AI Cinematic Trailer Animation",
    description:
      "AI cinematic trailer animation for films, games, events, and product launches where the production quality of the trailer needs to match the ambition of the thing it is announcing.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "AI Logo Animation",
    description:
      "AI-assisted logo animation for brands that need a polished motion identity faster than traditional motion design timelines allow. The logo moves like it was designed to move, not like a tool decided it should.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "AI Animation Services for Smart, Scalable Storytelling | Pixel Studios",
  description: "AI animation services that combine the speed of AI with the creative control your brand actually needs. Pixel Studios delivers AI-powered animation without the uncanny valley. Get a quote.",
};

export default function AnimationAIPage() {
  return (
    <main>
      <Banner
        title="AI Animation Services for Smart, Scalable Storytelling"
        description="At Pixel Studios Inc., our AI animation services combine the production velocity that AI tools now make possible with the creative direction, quality control, and strategic thinking that AI cannot replace. The result is an animation that is faster than traditional production and better than unmanaged AI output. Both things at once."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection 
        title="Our AI Animation Services"
        description="Every AI animation service we offer is produced with AI tools under expert creative direction. The speed is real. The creative control is too."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection />
      <HowWeWorkSection />
      <WhyInvestSection />
      <StepProcessSection />
      <TestimonialsSlider />
      <IndustrySection 
        heading="AI Animation Styles We Create"
        description="Our AI animation studio produces a wide range of animation styles, combining AI-powered production with professional creative direction to deliver visually consistent, high-quality content for every platform and campaign."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
