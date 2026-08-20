import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CostSection from "@/components/Common/CostSection";
import TestimonialsSlider from "@/components/Animation3D/TestimonialsSlider";
import TrustedClientsSection from "@/components/Animation3D/TrustedClientsSection";
import IndustrySection from "@/components/Common/IndustrySection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";
import Link from 'next/link';

const standoutFeatures = [
  {
    id: 1,
    title: 'Visualize Products Before Production',
    description: "Show investors and buyers exactly how a product looks and works before manufacturing begins. 3D product visualization removes risk from early-stage sales conversations.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Simplify Complex Concepts',
    description: "Scientific visualization, technical animation, and machinery visualization make the invisible visible. If text cannot explain it, 3D animation usually can.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Improve Marketing Performance',
    description: "3D marketing videos and CGI animation services consistently outperform static creative in click-through rate, engagement, and conversion across paid and organic channels.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Strengthen Sales Presentations',
    description: "Platform demonstrations built in 3D give sales teams a shared visual reference that reduces ambiguity and objection volume in technical conversations.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Support Technical Communication',
    description: "Engineering teams and technical buyers respond to accuracy. Our 3D animation production services produce technically precise content that survives expert review.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Create Engaging Customer Experiences',
    description: "Real estate visualization and consumer product showcases give buyers a richer product experience than static pages allow, directly feeding purchase confidence.",
    icon: '/icons/experienced.png'
  }
];

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

const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Experienced 3D Artists and Animators',
    content: 'Senior 3D animators and artists with cross-industry production experience across healthcare, industrial, consumer, gaming, and architectural sectors.'
  },
  {
    id: 2,
    title: '2 Specialized Industry Knowledge',
    content: 'Production expertise specific to industries where technical accuracy is non-negotiable: medical, engineering, legal, and industrial.'
  },
  {
    id: 3,
    title: '3 Custom Animation Solutions',
    content: 'Every brief starts from scratch. Your product, your audience, and your business objective determine the direction. No recycled templates.'
  },
  {
    id: 4,
    title: '4 Advanced Production Pipeline',
    content: 'Full in-house 3D animation production pipeline: modeling, texturing, rigging, animation, lighting, rendering, and compositing with no outsourcing at critical stages.'
  },
  {
    id: 5,
    title: '5 High-End Visual Quality',
    content: 'Photorealistic rendering and broadcast-standard compositing on every production. Visual quality is not a premium tier. It is the baseline.'
  },
  {
    id: 6,
    title: '6 Transparent Communication',
    content: 'Documented scope, milestone schedule, and proactive project updates on every production. No black-box periods where clients wait without information.'
  },
  {
    id: 7,
    title: '7 Reliable Turnaround Times',
    content: 'Timelines are commitments, not estimates. Project managers flag risks before they affect delivery.'
  },
  {
    id: 8,
    title: '8 Dedicated Project Management',
    content: 'One project manager from brief to delivery. One point of contact. One person is accountable for every stage.'
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Project Planning',
    content: 'Business objective, audience, visual direction, and production scope are established before any creative work begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Concept Development',
    content: 'Visual direction, mood boards, and style frames are developed and approved before production resources are committed.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Scriptwriting and Storyboarding',
    content: 'Script and storyboard were developed together, so the narrative and visual sequence are designed as a single piece.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Asset Creation and Modeling',
    content: 'All 3D models, environments, and props are built in-house to the detail level the scene and distribution context require.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Characters, products, and cameras animated to the approved storyboard. Rigging, facial animation, and motion design were governed by the brief throughout.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Rendering and Visual Enhancement',
    content: 'Lighting, shading, texturing, compositing, and VFX bring the scene to its final visual quality.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Review and Refinement',
    content: 'Full draft submitted for structured client review. Every note is documented and confirmed before changes are made.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files in every format specified at kickoff. Source files are included in most scopes. Post-delivery support available for platform adaptation.',
  },
];

const title = (
  <>
    Discuss Your <span>3D Animation</span> Project.
  </>
);

const text = "Tell us your product, your audience, and what you need them to do after watching. We will tell you whether 3D animation is the right format and what approach we would take.";

const faqs = [
  {
    question: "How much does a custom 3D animation project cost?",
    answer: "A 30 to 60-second 3D product animation starts in the $3,500 to $8,000 range. Complex character animation and cinematic productions range from $10,000 to $30,000 or more. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does it take to create a 3D animated video?",
    answer: "A standard 60-second 3D product animation runs four to six weeks from brief sign-off. Cinematic productions with character animation and VFX typically require six to twelve weeks. Rush timelines are available.",
  },
  {
    question: "Is 3D animation worth it for startups and small businesses?",
    answer: "Yes, when the brief justifies it. If your product has physical form or structural complexity that 2D cannot communicate effectively, professional 3D animation services are one of the most efficient communication investments available.",
  },
  {
    question: "Can 3D animation help increase customer engagement and conversions?",
    answer: "Consistently. Product pages with 3D animated content see higher dwell time and improved conversion versus static alternatives because 3D animation answers product questions visually before a prospect has to ask them.",
  },
  {
    question: "How many revisions are included in a typical animation project?",
    answer: "Two full revision rounds in standard packages. Additional rounds available and priced clearly upfront. All revision terms are documented before production begins.",
  },
  {
    question: "How do I choose the right 3D animation company?",
    answer: "Look for a portfolio range across industries, a discovery process that precedes the quote, and verifiable client results. The right 3D animation agency asks what the video needs to accomplish before deciding what it should look like.",
  },
  {
    question: "When should I use 3D animation for product demos?",
    answer: "When the product has a physical form that benefits from dimensional rendering, when internal mechanisms cannot be shown through photography, or when brand positioning demands photorealistic quality.",
  },
  {
    question: "Do you offer character design and animation for storytelling projects?",
    answer: "Yes. Full character animation, including modeling, rigging, facial animation, and performance direction across stylized and photorealistic aesthetics for brand storytelling, gaming, and educational content.",
  },
  {
    question: "Can 3D animation explain complex products and technical concepts?",
    answer: "It is one of the most effective formats for exactly that problem. 3D animation shows internal components that cannot be photographed and demonstrates engineering precision with clarity that no other format matches.",
  },
  {
    question: "Are 3D modeling and rendering included in your production process?",
    answer: "Yes. Modeling, texturing, rigging, lighting, and rendering are all standard components of our 3D animation production services, managed entirely in-house.",
  },
  {
    question: "What makes your 3D animation company different from other agencies?",
    answer: "We start with the business objective, not the visual brief. That changes the quality of output in measurable ways: fewer revision cycles, higher client retention, and content that performs in the market.",
  },
  {
    question: "How do I get started with a custom 3D animation project?",
    answer: "Book a 30-minute discovery call. A detailed proposal with scope, timeline, and investment follows within 48 hours. No obligation.",
  },
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
      <StatsSection
        heading="A Trusted Animation Company for 2D & 3D Animation Services."
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="From Idea to Delivery: Our Best 3D Animation Services"
        description="Our custom 3D animation services cover every format a brand, product team, or marketing department needs to communicate with precision."
        sliderItems={sliderItems}
      />
      <HowWeWorkSection
        heading="Why Pixel Studios Is a Top 3D Animation Company?"
        description="Our 97% client retention rate is built on eight specific commitments that every project is held to."
        accordionData={howWeWorkAccordionData}
      />
      <PortfolioShowcase />
      <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<>What <span>3D Animation</span> Can Help You Achieve?</>}
        description="The right 3D animation services for businesses close the gap between what your audience understands and what they need to understand to act."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1065180132?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <CostSection
        subtitle="COLLABORATIVE APPROACH"
        title={<>What Drives the Cost <br />of 3D Production?</>}
        description="The cost of 3D production depends on the scope, complexity, and level of execution required to bring your vision to life. A simple rotating product model requires far fewer production hours than a fully animated cinematic sequence with characters and detailed environments. Duration also plays a major role, as a short 30-second showcase differs significantly from a multi-minute brand film, with each stage of production clearly itemized for full transparency."
        videoSrc="https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="The level of detail further impacts cost, with photorealistic rendering and physically accurate lighting demanding more time than stylized visuals. Additional elements like visual effects and professional sound design enhance depth and audience impact, and are quoted separately so you only invest in what the brief truly needs. Turnaround time is another key factor, with standard 60-second productions typically completed within four to six weeks, while expedited timelines are available with transparent pricing to maintain quality without compromise."
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our 3D Animation <br />Production Process</>}
        description="Every production follows a structured, milestone-driven process from brief to final file."
        accordionData={whyInvestAccordionData}
      />
      <TestimonialsSlider />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TestimonialSection />
      <TrustedClientsSection />
      <IndustrySection
        heading="Industries We Have Served with 3D Animation"
        description="Our 3D animation services for businesses have been applied across every sector below, with production approaches specific to each industry."
        industries={industries}
        variant="gradient"
      />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
