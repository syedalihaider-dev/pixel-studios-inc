import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/ProductAnimation3D/CostSection"
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import WonderingSection from "@/components/Common/WonderingSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

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

const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Showcase Features with Clarity',
    content: "3D product motion graphics isolate features that are difficult to see or explain in static photography, giving each feature its own moment of focus."
  },
  {
    id: 2,
    title: '2 Increase Buyer Confidence',
    content: 'Photorealistic product animation reduces the uncertainty that causes shoppers to abandon a purchase decision at the final stage of consideration.'
  },
  {
    id: 3,
    title: '3 Drive Higher Conversion Rates',
    content: "Product pages with 3D product commercials convert at higher rates than pages relying on static images alone, particularly for considered purchases."
  },
  {
    id: 4,
    title: '4 Simplify Complex Products',
    content: 'Mechanical product animation makes complex assemblies understandable to non-technical buyers in seconds rather than paragraphs of specification text.'
  },
  {
    id: 5,
    title: '5 Reduce Traditional Production Costs',
    content: '3D product content creation eliminates the recurring cost of physical photoshoots for every new angle, color variant, or seasonal update.'
  },
  {
    id: 6,
    title: '6 Accelerate Product Launches',
    content: 'Animation production can begin from CAD data before physical samples exist, shortening the launch timeline by weeks in many categories.'
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Product Discovery and Research',
    content: 'We identify the buyer objection or question that the animation needs to resolve before any modeling begins, since that answer shapes every creative decision downstream.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Concept Development',
    content: 'Visual direction and narrative structure are developed around the discovery findings and approved upfront before any production resources are committed.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Visual Planning',
    content: "Every camera angle and reveal sequence is mapped before 3D product modeling and animation production begins, locking in the narrative before the build.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: '3D Modeling and Asset Creation',
    content: 'Precise 3D product modeling and animation assets are built from CAD data or reference imagery in-house, with no third-party asset libraries.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Materials, Lighting, and Texturing',
    content: 'PBR materials, lighting setups, and texturing establish the photorealistic quality of the final render and the emotional tone of the piece.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Camera movement and product motion are animated to the approved storyboard and narrative structure with deliberate pacing throughout.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Rendering and Post-Production',
    content: 'Final rendering, compositing, and color grading bring the animation to its finished visual quality, matched against the original brief.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery and Optimization',
    content: 'Files are delivered in every platform format specified at kickoff, optimized for each distribution channel without quality compromise.',
  }
];

const title = (
  <>
    Launch Your Next Product with Expert <span>3D Product Animation</span> Services
  </>
);

const text = "Book a discovery call, and we will scope your 3D product animation project, timeline, and investment within 48 hours, with no obligation to proceed. ";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Product-Focused Animation Expertise",
    text: "Our product animation experts specialize specifically in product communication, not general-purpose animation applied to a product brief."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Tailored Creative Solutions",
    text: "Every custom product animation starts from your specific buyer objection, not a template animation style applied regardless of category."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Industry-Specific Experience",
    text: "Our team has produced product animation across consumer, industrial, medical, and automotive categories, each with different accuracy and tone requirements."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Premium Visual Quality",
    text: "High-end product animation rendered to broadcast-quality standards regardless of the distribution platform, from a product page to a trade show screen."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Reliable Project Delivery",
    text: "Documented timelines and milestone schedules keep every 3D product animation process on track with dates communicated, not estimated."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Dedicated Communication",
    text: "One project manager owns every product animation project from discovery through final delivery as a single point of accountability."
  }
];

const wonderingIndustriesData = [
  {
    name: "Product Complexity",
    intro: "A single static product costs less to animate than a multi-component assembly with moving parts and internal mechanisms.",
    points: [
      "Single product vs multi-part assembly",
      "Simple product vs complex mechanism",
      "No animation vs high-detail animation",
      "2D illustration vs photorealistic 3D",
    ]
  },
  {
    name: "Animation Duration",
    intro: "A 15-second product loop costs less than a 90-second narrative-driven product explainer with multiple scenes and camera setups.",
    points: [
      "15-second product turntable/loop",
      "30-second feature highlight",
      "60-second product overview",
      "90-second comprehensive explainer"
    ]
  },
  {
    name: "Modeling Requirements",
    intro: "Existing CAD data reduces 3D product modeling and animation costs compared to building accurate geometry from scratch.",
    points: [
      "CAD model provided vs model built from reference photos",
      "2D line drawings vs 3D mesh modeling",
      "High-polygon detail vs optimized game-ready geometry"
    ]
  },
  {
    name: "Visual Effects Requirements",
    intro: "Particle effects, fluid simulation, or environmental effects add to the overall production scope beyond standard product rendering.",
    points: [
      "Particle effects (smoke, fire, water, sparks)",
      "Fluid and liquid simulation",
      "Environmental interaction (wind, rain, dust)",
      "Abstract data visualization overlays"
    ]
  },
  {
    name: "Output Resolution",
    intro: "4K and broadcast-spec delivery requires more rendering time than standard web resolution output, affecting both cost and timeline.",
    points: [
      "1080p (Full HD) web delivery",
      "2K resolution for professional presentations",
      "4K for high-end product showcases",
      "Broadcast 4K (UHD-1 / Rec. 709)",
    ]
  },
  {
    name: "Delivery Timeline",
    intro: "Rush 3D product animation pricing reflects compressed production schedules and the resource reallocation required to meet them.",
    points: [
      "Standard 10-15 business days for simple products",
      "Complex 3D animations: 3-6 weeks",
      "Custom builds and simulations: 6-12 weeks",
      "No rush fees for early-stage planning and asset preparation"
    ]
  }
];

const faqs = [
  {
    question: "What Are 3D Product Animation Services?",
    answer: "3D product animation services cover the creation of animated, photorealistic video content showing a product's features, function, and design for marketing, sales, and educational use.",
  },
  {
    question: "How Much Does 3D Product Animation Cost?",
    answer: "A standard 30 to 60-second 3D product animation typically starts at $2,500 to $6,000, depending on complexity. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How Long Does a Product Animation Project Take?",
    answer: "Most 3D product animation projects are completed in three to five weeks from brief sign-off, depending on modeling and rendering complexity.",
  },
  {
    question: "Can You Animate Existing CAD Models?",
    answer: "Yes. CAD to product animation conversion is a core part of our 3D product animation process for industrial and technical clients.",
  },
  {
    question: "Are Product Animations Effective for eCommerce?",
    answer: "Yes. eCommerce product animation consistently improves conversion rates and reduces return rates compared to relying on static imagery alone.",
  },
  {
    question: "Do You Provide Scriptwriting and Storyboarding?",
    answer: "Yes. Scriptwriting and storyboarding are standard stages in our 3D product animation workflow before any modeling begins.",
  },
  {
    question: "Can You Showcase Internal Product Components?",
    answer: "Yes. Product assembly animation and cutaway sequences clearly show internal components and mechanisms for technical and training audiences.",
  },
  {
    question: "What File Formats Will I Receive?",
    answer: "Standard delivery includes MP4 in multiple resolutions, with platform-specific exports for web, social, and broadcast use as specified at kickoff.",
  },
  {
    question: "Who Owns the Final Animation Assets?",
    answer: "Full ownership of the final 3D product animation assets transfers to you upon final payment, without restriction or ongoing licensing fees.",
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
      <StatsSection
        heading="A Trusted Animation Company for 3D Product Animation Services"
        statsData={statsData}
        variant="gradient"
      />
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
      <HowWeWorkSection
        heading="Business Benefits of 3D Product Animation"
        description="3D product animation helps brands communicate clearly, showcase complex products dynamically, and stand out in crowded digital spaces. When precision meets storytelling, 3D animation becomes one of your most versatile marketing assets."
        accordionData={howWeWorkAccordionData}
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <CooperationModelsSection
        subtitle="why choose us"
        title="Why Brands Trust Our 3D Product Animation Company?"
        description="From global brands to fast-scaling startups, our 3D product animation services consistently deliver measurable impact. Here is why teams partner with us for their most critical product content."
        cards={cooperationModelsCards}
      />
      <WhyInvestSection
        subtitle="THE PROCESS"
        title="Our Strategic 3D Product Animation Workflow"
        description="We approach every product animation as a marketing asset first and an animation project second. The workflow is designed to deliver clarity, alignment, and predictable milestones before any rendering begins."
        accordionData={whyInvestAccordionData}
      />
      <WonderingSection
        subtitle="Pricing Guide"
        title="3D Product Animation Pricing and Budget Considerations"
        description="3D product animation cost is driven by complexity, duration, and visual requirements, and we provide itemized quotes rather than flat-rate packages so you understand exactly what drives the investment."
        data={wonderingIndustriesData}
      />
      <IndustrySection
        heading="Specialized 3D Product Animation Solutions by Industry"
        description="Different product categories require different visual priorities, and our team brings specific experience to each of the following sectors."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions About 3D Product Animation Services"
        faqs={faqs}
      />
    </main>
  );
}
