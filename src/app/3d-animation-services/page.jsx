import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Animation3D/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/Animation3D/HowWeWorkSection";
import WhyInvestSection from "@/components/Animation3D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import TeamStandoutSection from "@/components/Animation3D/TeamStandoutSection";
import CostSection from "@/components/Animation3D/CostSection";
import TestimonialsSlider from "@/components/Animation3D/TestimonialsSlider";
import TrustedClientsSection from "@/components/Animation3D/TrustedClientsSection";
import IndustrySection from "@/components/Common/IndustrySection";
import GreatVideosSection from "@/components/Animation3D/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Animation3D/FaqSection";
import Link from 'next/link';

const industries = [
  {
    id: 1,
    title: "Healthcare and Life Sciences",
    image: "/industry/01.png",
    text: <>Medical animation, pharmaceutical explainer videos, surgical animation, and <Link href="/healthcare-animation">healthcare animation</Link> for patient education, clinical training, and pharmaceutical product marketing are built to regulatory accuracy standards.</>,
    link: "#"
  },
  {
    id: 2,
    title: "Manufacturing and Industrial",
    image: "/industry/02.png",
    text: <>Industrial safety training, machinery visualization, and assembly process <Link href="/manufacturing-animation">Manufacturing animation</Link> for environments where clarity and accuracy affect safety outcomes directly.</>,
    link: "#"
  },
  {
    id: 3,
    title: "Engineering and Technology",
    image: "/industry/03.png",
    text: <>Technical animation, software visualization, and platform demonstrations for technology companies through <Link href="/technology-animation">Technology Animation</Link> to communicate product capability to non-technical buyers without losing technical credibility.</>,
    link: "#"
  },
  {
    id: 4,
    title: "Architecture and Real Estate",
    image: "/industry/04.png",
    text: <><Link href="/real-estate-animation">Real Estate Animation</Link> and architectural rendering, architectural visualization, and property walkthroughs for developers and investors presenting projects ahead of completion.</>,
    link: "#"
  },
  {
    id: 5,
    title: "Consumer Products",
    image: "/industry/05.png",
    text: <>Our <Link href="/ecommerce-video-production">Ecommerce Video Animation</Link> can help you with 3D commercial animation, product launch visuals, and animated product demo videos for consumer brands where visual quality determines first-impression trust.</>,
    link: "#"
  },
  {
    id: 6,
    title: "Education and Training",
    image: "/industry/06.png",
    text: <>Student educations and <Link href="/education-animation">corporate learning animations</Link>, instructional videos and employee onboarding content for corporate training programs that need to hold attention and improve retention rates.</>,
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Entertainment and Media",
    image: "/industry/06.png",
    text: <><Link href="/entertainment-animation">Entertainment animation</Link> is not just for cartoons but it is a prominent factor in cinematic trailers, gaming animations, and in-game cutscenes for entertainment brands producing content for PC games, console games, and mobile games.</>,
    link: "#"
  },
  {
    id: 8,
    title: "Automotive and Transportation",
    image: "/industry/06.png",
    text: <> <Link href="/automotive-animation">Photorealistic rendering of vehicles</Link> and components for automotive marketing and engineering review, where visual realism is the primary trust signal.</>,
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "3D Product Animation",
    description: <>Showcase features and mechanisms with photorealistic clarity that photography cannot match. <Link href="/3d-product-animation">3D Product Animation Services</Link> used in product launches e-commerce, trade shows, and enterprise sales, where animated product demo videos close the visualization gap.</>,
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Product Modeling",
    description: <>Precision digital models built from CAD files or reference <Link href="/3d-modeling-services">3D Product Modeling</Link> commercial animation, product showcase video, and CGI product animation we produce.</>,
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Industrial Animation",
    description: <><Link href="/3d-industrial-animation">3D industrial animation services</Link> complex machinery, manufacturing processes, and industrial safety training are explained through technically accurate animation. Reduces training costs and supports high-stakes sales presentations for industrial brands.</>,
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Character Animation",
    description: <>Full <Link href="/character-animation">3D character animation services</Link> including character design, rigging, facial animation, and performance direction for brand storytelling, gaming animations, and educational content.</>,
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Medical Animation",
    description: <><Link href="/medical-animation">Medical animation services</Link> is best for pharmaceutical animation, surgical animation, medical device walkthroughs, and healthcare animation built to clinical accuracy. Used in patient education, clinical training, and pharmaceutical product marketing globally.</>,
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Legal Graphics Animation",
    description: <>Demonstrative animation, accident reconstruction, and procedural explainers for litigation support. Accuracy is the entry requirement, and every <Link href="/legal-graphics-animation">legal animation</Link> we produce is reviewed for technical precision.</>,
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Game Animation",
    description: <>Our <Link href="/game-animation">Game Animation services</Link> offer in-game cutscenes, character animations, and assets for PC games, console games, and mobile games are produced to the visual fidelity that modern gaming audiences expect.</>,
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Game Trailer",
    description: <><Link href="/game-trailer">High-impact cinematic game trailers</Link> and promotional trailer production combining motion design, VFX, and cinematic animation for maximum first-impression impact.</>,
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "AI Animation Services",
    description: <><Link href="/ai-animation">AI-assisted 3D animation services</Link> reduce timelines without reducing quality. Used strategically to accelerate asset iteration and style exploration for high-volume or compressed-schedule productions.</>,
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "Architectural Rendering",
    description: "Photorealistic architectural rendering, real estate visualization, and property walkthroughs for developers and architects presenting projects before completion.",
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 11,
    title: "Cartoon Animation",
    description: "Stylized 3D cartoon animation for brand storytelling, children's content, and educational series. Expressive, accessible, and distinct from the default digital-clean aesthetic.",
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 12,
    title: "Photorealistic Rendering",
    description: "Hyperrealistic rendering that makes digital assets indistinguishable from photography. Used in product marketing, architectural visualization, and any context where visual realism determines audience trust.",
    videoSrc: "https://player.vimeo.com/video/1065200259?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Premium 3D Animation Services Studio in USA | Pixel Studios",
  description: "Premium 3D Animation Services in USA. Get high-quality, affordable 3D animations that engage audiences, boost conversions, and grow your brand.",
};

export default function ThreeDAnimation() {
  return (
    <main>
      <Banner
        title="Premium 3D Animation Services in the USA"
        description="At Pixel Studios Inc., our professional 3D animation services remove that uncertainty.  We translate products, concepts, and processes into photorealistic, high-definition 3D video animation services that show audiences exactly what they need to see to act. As a full-service 3D animation studio working with brands across the USA, every production starts with your business objective. Whether you need 3D product animation for a launch, cinematic visuals for an investor pitch, or medical animation for a clinical audience, our 3D animators build every frame with purpose."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection
        title="From Idea to Delivery: Our Best 3D Animation Services"
        description="Our custom 3D animation services cover every format a brand, product team, or marketing department needs to communicate with precision."
        sliderItems={sliderItems}
      />
      <HowWeWorkSection />
      <PortfolioShowcase />
      <TeamStandoutSection />
      <CostSection />
      <WhyInvestSection />
      <TestimonialsSlider />
      <GreatVideosSection />
      <TestimonialSection />
      <TrustedClientsSection />
      <IndustrySection
        heading="Industries We Have Served with 3D Animation"
        description="Our 3D animation services for businesses have been applied across every sector below, with production approaches specific to each industry."
        industries={industries}
        variant="gradient"
      />
      <FaqSection />
    </main>
  );
}
