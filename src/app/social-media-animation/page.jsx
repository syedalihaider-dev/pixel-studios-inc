import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import WonderingSection from "@/components/Common/WonderingSection";
import CostSection from "@/components/Common/CostSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";
import Link from "next/link";

const standoutFeatures = [
  {
    id: 1,
    title: 'Motion Graphics Animation',
    description: <><Link href="/motion-graphics-animation">Custom Motion graphics services</Link> for social media’s branded content, data visualization, and campaign announcements. Clean, brand-consistent motion design that performs across platforms without per-platform adaptation.</>,
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: '2D Animated Videos',
    description: <><Link href="/2d-animation-services">2D Animated services</Link> is by far the most illustrated and character-driven content social media campaign from brand storytelling, product promotion and audience education. The most versatile format in social media video animation.</>,
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Product Promotion Animations',
    description: <><Link href="/3d-product-animation">3D Animated product promotion</Link> videos that showcase features, benefits, and offers in the format and duration each platform performs best with.</>,
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
    description: <>Short-form <Link href="/animated-explainer-video">animated explainer content</Link> adapted for 30 to 60-second social media distribution. The explainer video logic applied to the social media format constraint.</>,
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
    text: <>Product promotion animations and animated social media ads for <Link href="/ecommerce-video-production">e-commerce video production</Link>. Built to drive click-through to product pages and reduce paid acquisition cost.</>,
    link: "#"
  },
  {
    id: 2,
    title: "SaaS Companies",
    image: "/industry/02.png",
    text: <>Feature announcements and short-form <Link href="/saas-explainer-videos">animated explainer content for SaaS brands</Link> building social presence. LinkedIn animated video services and Instagram animation for B2B audiences.</>,
    link: "#"
  },
  {
    id: 3,
    title: "Healthcare Organizations",
    image: "/industry/03.png",
    text: <><Link href="/healthcare-animation">Patient education content</Link> and health awareness campaigns produced to the accuracy and sensitivity standards the industry requires for public-facing social content. </>,
    link: "#"
  },
  {
    id: 4,
    title: "Real Estate Businesses",
    image: "/industry/04.png",
    text: <><Link href="/real-estate-animation">Real Estate Property launch animation</Link> or constructional progress can be shown on social media with 2D and 3D Animation. Animated social media videos give buyers a compelling first look before they commit to a viewing. </>,
    link: "#"
  },
  {
    id: 5,
    title: "Financial Services",
    image: "/industry/05.png",
    text: <>Financial product explanation and brand <Link href="/finance-animation">animation for financial services</Link> companies producing social media video for professional audiences that expect accuracy and clarity. </>,
    link: "#"
  },
  {
    id: 6,
    title: "Education and E-Learning",
    image: "/industry/06.png",
    text: <>Course launch content and <Link href="/education-animation">short-form educational animation</Link> for education brands driving enrollment through social channels. </>,
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups and Technology Companies",
    image: "/industry/06.png",
    text: <>Social media <Link href="/technology-animation">animation for startups</Link> building category awareness. First-impression content produced to communicate clearly before the brand reputation develops independently.</>,
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


const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Instagram Animations',
    content: "Feed posts, reels, and stories in every Instagram format. Captions, aspect ratios, and hook timing calibrated for the platform's visual environment and engagement signals."
  },
  {
    id: 2,
    title: '2 Facebook Animations',
    content: "Organic and paid Facebook video animation optimized for the watch-time and engagement metrics that drive Facebook's distribution algorithm."
  },
  {
    id: 3,
    title: '3 TikTok Animations',
    content: 'TikTok animation video production built from the first frame for a platform where the hook determines everything. Native vertical format with on-screen text for silent-viewing audiences.'
  },
  {
    id: 4,
    title: '4 LinkedIn Video Animations',
    content: "LinkedIn animated video services for B2B brands. Professional register, measured pacing, and visual tone matched to the platform's audience expectations."
  },
  {
    id: 5,
    title: '5 YouTube Animations',
    content: 'Full-length YouTube animated content and YouTube Shorts animation for brands building channel presence, product education, and search-optimized video content.'
  },
  {
    id: 6,
    title: '6 X (Twitter) Video Content',
    content: "Short-form animated content for X with the compression and visual clarity the platform's feed requires.Motion graphics and kinetic typography for the format."
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Content Strategy and Planning',
    content: 'Platform, objective, audience, and campaign context established before concept development. Algorithm signals and platform-specific requirements built into the brief at this stage.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script and Concept Development',
    content: 'Script written for the duration and the platform. A 15-second TikTok animation and a 60-second LinkedIn explainer are different communication problems and are treated as such.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding',
    content: "Every scene mapped before animation. Visual structure, text placement, hook timing, and call-to-action positioning planned and approved at storyboard stage.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Design and Illustration',
    content: 'Visual style, brand color application, and typographic treatment established and approved before production. Platform-specific visual density requirements addressed at design stage.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Full social media animation production in-house. Platform-specific aspect ratios, motion pacing, and on-screen text timing built into production from the start.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Sound Design and Music',
    content: 'Sound design and music mixed for both with-audio and without-audio viewing. Visual communication structured to work for the majority of social video watched without sound.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Delivery and Optimization',
    content: 'Final files in every platform format specified at kickoff. File size, codec, aspect ratio, and caption requirements confirmed before delivery.',
  }
];

const title = (
    <>
      Get Started With Professional <span>Social Media Animation Services</span>
    </>
  );

const text = "Most brands are publishing social media content that performs at a fraction of what well-produced animated content achieves. Book a discovery call and we will show you what is possible for your platforms, your audience, and your campaign objectives.";

const wonderingIndustriesData = [
  {
    name: "Increase Audience Engagement",
    intro: "Animated social media videos generate higher engagement rates than static posts across every major platform. Higher engagement feeds algorithmic distribution and multiplies organic reach without increasing ad spend.",
    points: [
      "Grabbing attention within the first 3 seconds with scroll-stopping animation.",
      "Explaining complex concepts with visual clarity that static text cannot match.",
      "Reinforcing brand identity through consistent visual language and motion patterns."
    ]
  },
  {
    name: "Improve Ad Performance",
    intro: "Animated social media ads consistently outperform static ad creative in click-through rate and cost per acquisition. Brands switching from static to animated ad creative routinely see CPAs drop without changing targeting or budget.",
    points: [
      "Cutting CPM by stopping scroll and lowering cost per thousand impressions.",
      "Increasing ad-to-landing-page conversion rates with better-qualified traffic.",
      "Reducing wasted ad spend from low-performing static assets."
    ]
  },
  {
    name: "Boost Brand Awareness",
    intro: "Consistent social media animation production builds visual brand recognition. When animation style, color system, and motion language are consistent across every post, the brand becomes recognizable before the viewer reads a word.",
    points: [
      "Establishing a consistent visual identity across all social platforms.",
      "Differentiating the brand from competitors who rely on generic stock visuals.",
      "Building long-term brand recall through memorable animation patterns and characters."
    ]
  },
  {
    name: "Communicate Messages Faster",
    intro: "A well-produced 15-second animated social media video communicates what a 300-word caption cannot: the offer, the brand, and the call to action simultaneously. Speed of communication is a competitive advantage in a feed where alternatives are one scroll away.",
    points: [
      "Delivering the full message in the first 3–5 seconds before the user scrolls.",
      "Using visuals to convey complex narratives that would require long captions and explanation.",
      "Ensuring brand and value proposition are recognized even with the sound off."
    ]
  },
  {
    name: "Increase Social Shares",
    intro: "Animated content generates more shares and saves than static content across every platform that tracks these signals as distribution drivers. Shares extend organic reach without additional spend.",
    points: [
      "Increasing the velocity of content distribution through user sharing and reshares.",
      "Reducing per-impression costs by leveraging organic amplification.",
      "Building an owned audience that amplifies brand messaging at scale."
    ]
  }
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Platform-Specific Video Creation",
      text: "We do not produce one animation and resize it. Every production is built for the platform it will live on: native formats, platform-calibrated pacing, and technical specifications confirmed before production begins."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Animation Solutions",
      text: "Every social media animation production starts from your brief, your brand, and your campaign objective. No template libraries. Custom animated social media videos built specifically for your audience."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Experienced Creative Team",
      text: "Our social media animation agency has produced content for brands across e-commerce, SaaS, healthcare, financial services, and consumer retail. Experience that reduces the learning curve on every new brief."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround Times",
      text: "Most social media animations complete in one to three weeks from brief sign-off. Rush production available. We protect quality within compressed timelines rather than sacrificing it."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Multiple Revision Rounds",
      text: "Two full revision rounds standard in every production. Additional rounds available and priced upfront. All revision terms documented before production begins."
    }
  ];

const faqs = [
  {
    question: "How much do social media animation services cost?",
    answer: "A single 15 to 30-second social media motion graphics animation typically starts in the $500 to $1,500 range. More complex 2D animated social media content runs $1,500 to $4,000 per piece. Multi-platform campaign packages are priced by scope. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "Which social media platforms support animated videos?",
    answer: "All major platforms support animated video: Instagram, TikTok, Facebook, LinkedIn, YouTube, and X. Each has specific technical requirements for format, aspect ratio, duration, and file size. We build to each platform's actual specifications rather than adapting a single master file.",
  },
  {
    question: "What is the ideal length for a social media animation?",
    answer: "Platform-dependent. TikTok and Instagram Reels perform best at 15 to 30 seconds for awareness content. LinkedIn can sustain 30 to 90 seconds for B2B audiences. YouTube Shorts cap at 60 seconds. Duration is set based on the platform and the brief objective.",
  },
  {
    question: "Can animated videos improve social media engagement?",
    answer: "Consistently. Animated social media videos generate higher engagement rates than static posts across every platform that uses engagement as an organic distribution signal. Motion catches attention, and a well-built hook keeps the viewer watching long enough for the message to land.",
  },
  {
    question: "Do you create animations for paid advertising campaigns?",
    answer: "Yes. Animated social media ads are among our most requested formats. We produce paid advertising animation for Meta, TikTok, LinkedIn, and YouTube with creative structures built around click-through rate and conversion objectives.",
  },
  {
    question: "Can you repurpose one animation for multiple platforms?",
    answer: "Yes. We produce a master animation and adapt it into platform-specific versions with correct aspect ratios, durations, and technical specifications. Multi-platform packages are priced more efficiently than individual productions per platform.",
  },
  {
    question: "How long does it take to create a social media animation?",
    answer: "Most social media animations complete in one to three weeks from brief sign-off. Single 15 to 30-second animations with complete brand assets can complete in five to seven business days. Rush timelines are available.",
  },
  {
    question: "Do you provide scripts and creative concepts?",
    answer: "Yes. Script development and creative concepting are standard stages in our social media animation production process. Hook, message structure, and call-to-action sequence developed based on the platform and the campaign objective. Approved before any design or animation begins.",
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
      <StatsSection
        heading="A Trusted Animation Company For Social Media Animation"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Our Social Media Animation Services"
        description="Our custom social media animation company covers every format, every platform, and every campaign objective."
        sliderItems={sliderItems}
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <PortfolioShowcase />
      <HowWeWorkSection
        heading="Social Media Animation Solutions for Every Platform"
        description="Every platform has its own algorithm, audience behavior, and technical requirements. We build natively for all of them."
        accordionData={howWeWorkAccordionData}
      />
      <TeamStandoutSection
        subtitle="Social Media Animation Services"
        title={<>Types of <span>Social Media Animations</span> We Create</>}
        description="Our social media animation production covers every animated content type a brand needs for a complete social content calendar."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201856415?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WonderingSection
        subtitle="Benefits of Social Media Animations"
        title="Why Do Brands Use Social Media Animation?"
        description="The case for social media animation services is built on specific, measurable platform performance outcomes."
        data={wonderingIndustriesData}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title="Our Social Media Animation Production Process"
        description="Every social media animation production follows a structured process from platform brief to optimized final delivery."
        accordionData={whyInvestAccordionData}
      />
      <CostSection
        subtitle="THE STRATEGIC DIFFERENCE"
        title="Create Scroll-Stopping Social Media Animations That Drive Engagement"
        description="The problem with most social media video content is not the quality of the animation. It is the absence of strategy behind it. A brand publishes a well-produced animated post, and it performs no better than the static graphic it replaced, because the video was not built around the audience's scroll behavior or the specific response the brand needed from the viewer."
        videoSrc="https://player.vimeo.com/video/1201624785?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Our social media animation production starts with the platform, the audience, and the objective before a storyboard is sketched. We build animated social media videos designed to stop the scroll in the first frame, communicate the core message in the first ten seconds, and drive a specific action before the video ends."
      />
      <CooperationModelsSection
        subtitle="Quality. Speed. Reliability"
        title="Why Choose Our Social Media Animation Company?"
        description="What specifically distinguishes our professional social media animation agency from the alternatives."
        cards={cooperationModelsCards}
      />
      <IndustrySection
        heading="Social Media Animation Services for Industries"
        description="Our social media animation services for businesses are applied across every sector with production approaches specific to each platform context."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
