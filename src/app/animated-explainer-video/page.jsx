import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import WhyChooseSection from "@/components/AnimatedExplainerVideo/WhyChooseSection";
import PricingSection from "@/components/AnimatedExplainerVideo/PricingSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";
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



const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Simplify Complex Concepts',
    content: 'Animated explainer videos control the information sequence, the pacing, and the visual emphasis simultaneously. No other format does all three at once. That combination is why complex products become understandable in 90 seconds when they remain opaque after 10 minutes of reading.'
  },
  {
    id: 2,
    title: '2 Increase Audience Engagement',
    content: 'Viewers complete well-produced business explainer videos at significantly higher rates than they read product pages or sit through demo calls. Higher completion rates mean more prospects who fully understand your product before the first sales conversation.'
  },
  {
    id: 3,
    title: '3 Improve Conversion Rates',
    content: 'Landing pages with animated explainer videos convert at measurably higher rates than those without. The mechanism is simple: video reduces the cognitive friction between a visitor and a purchase decision by answering objections before they form.'
  },
  {
    id: 4,
    title: '4 Strengthen Brand Awareness',
    content: 'A strong custom explainer video becomes a brand asset used across landing pages, email campaigns, social media, and sales presentations. Each deployment compounds recognition without additional production cost.'
  },
  {
    id: 5,
    title: '5 Boost Social Media Performance',
    content: 'Promotional explainer videos shared on social generate higher engagement, more saves, and stronger organic reach than static content. Short-form cuts of explainer content are among the highest-performing organic assets in social media marketing.'
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery & Strategy',
    content: 'We establish the audience, the objective, the competitive context, and the distribution channel before the script begins. Strategy is the first deliverable, not the last consideration.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Writing',
    content: "The script is the argument the animated explainer video makes, written in the sequence the audience needs to receive it. We write for the viewer's comprehension, not the client's preferred feature order.",
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding',
    content: "Every scene is mapped before animation begins. Visual hierarchy, scene transitions, and animation timing all approved here. Changes to the storyboard cost 30 minutes. Changes after animation cost two days.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Illustration and Design',
    content: 'Character design, background style, color palette, and typographic treatment are developed and approved before production starts. You see the visual direction before a single frame is animated.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Full 2D explainer animation or motion graphics explainer video production begins with the storyboard and approved assets as the foundation. In-house production with the same team that handled discovery.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Voiceover & Sound Design',
    content: 'Professional voiceover matched to brand tone, music selected for emotional register, and sound design that adds depth without competing with the visual narrative.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files in every format and resolution specified at kickoff, plus source files in most project scopes. Post-delivery support for platform adaptation and short-form version cuts.',
  },
];

const title = (
    <>
      Get Started With <span>Animated Explainer Video</span> Services
    </>
  );

const text = "Book a discovery call, and we will show you the difference that makes.";

const faqs = [
  {
    question: "How much does an animated explainer video cost?",
    answer: "A professionally produced 60-second animated explainer video from a reputable animated explainer video company in the USA typically starts in the $2,500 to $5,000 range. Complex productions with custom character libraries and photorealistic styles run higher. We provide itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does it take to create an explainer video?",
    answer: "Most 60 to 90-second animated explainer video productions are completed in three to five weeks from a brief sign-off. Rush timelines are available. Every project receives a milestone schedule with specific dates at kickoff.",
  },
  {
    question: "Can you help write the script?",
    answer: "Yes. Scriptwriting is a standard stage in our animated explainer video creation service. We write every script from scratch around your audience brief. You review and approve the script before any design or animation begins.",
  },
  {
    question: "What is the ideal length for an explainer video?",
    answer: "60 to 90 seconds for most business explainer videos. Long enough to build the argument and the call to action. Short enough to hold attention through the final frame. We determine the right length for your specific content during the discovery session.",
  },
  {
    question: "Do you provide voiceover services?",
    answer: "Yes. Professional voiceover is included in standard animated explainer video production packages. We match voice talent to the brand tone established in the brief. Multilingual versions and custom casting are available.",
  },
  {
    question: "Which animation style is best for my business?",
    answer: "The style that matches your audience, your brand identity, and your distribution context. 2D explainer animation works for most B2B and B2C use cases. Motion graphics explainer videos suit data-heavy or brand-consistency-driven briefs. We help every client make the right choice in discovery.",
  },
  {
    question: "Can explainer videos improve conversions?",
    answer: "Consistently. Landing pages with custom explainer videos convert at higher rates than pages without them. The mechanism is that explainer videos reduce cognitive friction: they answer objections before the viewer forms them, which keeps prospects moving toward the conversion point.",
  },
  {
    question: "How many revisions are included?",
    answer: "Two full revision rounds in standard packages. Additional rounds available and priced upfront. All revision terms are documented before production begins, so there are no surprises at the end.",
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
      <StatsSection
        heading="A Trusted Animation Company For Animated Explainer Videos"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Our Animated Explainer Video Services"
        description="Our animated explainer video production covers every format and industry context. Here is the full range of business explainer videos we build."
        sliderItems={sliderItems}
      />
      <HowWeWorkSection
        heading="Why Do Businesses Invest in Animated Explainer Videos?"
        description="The data behind animated explainer video investment is not soft or aspirational. Here is why the best animated explainer video companies keep growing."
        accordionData={howWeWorkAccordionData}
      />
      <PortfolioShowcase />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Animated Explainer Video <br /> Production Process</>}
        description="Our animated explainer video creation service follows a structured, milestone-driven process where nothing moves forward without approval at each stage."
        accordionData={whyInvestAccordionData}
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
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
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
