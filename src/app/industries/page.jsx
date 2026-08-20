import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WonderingSection from "@/components/Common/WonderingSection";
import WhyPartnerSection from "@/components/Industries/WhyPartnerSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import CostSection from "@/components/Common/CostSection";
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import TestimonialsSlider from "@/components/Industries/TestimonialsSlider";
import TrustedClientsSection from "@/components/Industries/TrustedClientsSection";
import IndustrySection from "@/components/Common/IndustrySection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const whyChooseSectionFeatures = [
  {
    id: 1,
    title: 'Experienced Motion Designers',
    description: "Our motion design team has produced logo animation for brands across consumer, corporate, entertainment, technology, and healthcare sectors with genuinely cross-industry experience.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Custom Animation Concepts',
    description: "Every project begins with original concept development. No stock motion paths or template effects. Custom logo animation built specifically for each brand.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Fast Turnaround Times',
    description: "Most logo animation projects complete in one to two weeks from brief sign-off. Rush production available for campaign launch windows.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Dedicated Project Management',
    description: "One project manager from brief to delivery. Every milestone is dated. Every update is proactive.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'High-Quality Motion Design',
    description: "Professional logo animation produced to broadcast-quality standards regardless of the distribution platform. Quality is the baseline, not a premium tier.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Multiple Export Formats',
    description: "Delivery in MP4, transparent-background MOV, GIF, and source files. Platform-specific exports for social, web, and broadcast included in standard packages.",
    icon: '/icons/experienced.png'
  },
  {
    id: 7,
    title: 'Flexible Cooperation Models',
    description: "Project-based, retainer, or dedicated team models. We adapt to your needs, timelines, and budget with transparent terms and no surprises.",
    icon: '/icons/experienced.png'
  },
  {
    id: 8,
    title: 'Brand-Centric Animation Strategy',
    description: "Every animation starts with your brand goals. We define the objective first, then select the right animation style to match your message and audience.",
    icon: '/icons/experienced.png'
  }
];

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


const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const wonderingIndustriesData = [
  {
    name: "Banking",
    intro: "We work with a diverse set of banking institutions, including universal banks, national banks, commercial banks and retail neo-banks. Our work encompasses operation enhancements and crafting innovative digital products.",
    points: [
      "Partnering with a leading fintech and payments company's ex-VP to develop an API-first, cloud-based digital banking platform (PaaS) for smaller North American financial institutions.",
      "Crafting a crypto-friendly private banking ecosystem tailored for ultra high-net-worth individuals, offering exclusive lifestyle preferences alongside transaction services.",
      "Developing a self-service BI report system for a prominent commercial bank in Vietnam, equipping staff with BI skills for data-driven decision-making.",
      "Building a resilient data management system for a leading universal bank in Vietnam."
    ]
  },
  {
    name: "Insurance",
    intro: "Empowering insurance companies with digital tools to streamline operations, enhance customer experience, and accelerate claim processing through modern technology solutions.",
    points: [
      "Revolutionizing claims processing with AI-driven document analysis and automated workflows for a top-tier European insurance provider.",
      "Building a scalable policy management system that reduced time-to-market for new insurance products by 40%.",
      "Implementing a comprehensive telematics solution for auto insurance, enabling usage-based pricing and risk assessment."
    ]
  },
  {
    name: "Market infrastructure",
    intro: "Building resilient and scalable market infrastructure solutions that ensure secure, high-speed, and reliable financial transactions across global markets.",
    points: [
      "Developing a high-throughput trading engine capable of processing millions of transactions per second with microsecond latency.",
      "Creating a robust clearing and settlement system for a major stock exchange, ensuring regulatory compliance and risk mitigation.",
      "Designing a real-time market data distribution platform for institutional investors and algorithmic traders."
    ]
  },
  {
    name: "Asset management",
    intro: "Transforming asset management with data-driven platforms that provide deep insights, automate portfolio management, and enhance client engagement.",
    points: [
      "Building a comprehensive portfolio management platform with real-time risk analytics and performance attribution.",
      "Developing an automated robo-advisory solution for retail investors, featuring personalized investment strategies and goal-based planning.",
      "Creating a secure client portal for high-net-worth individuals, offering transparent reporting and seamless communication."
    ]
  },
  {
    name: "Fintech",
    intro: "Partnering with innovative fintech startups to build scalable, secure, and user-centric financial products that disrupt traditional banking and financial services.",
    points: [
      "Engineering a scalable peer-to-peer lending platform with automated credit scoring and risk assessment algorithms.",
      "Developing a cross-border remittance solution that significantly reduced transaction costs and settlement times.",
      "Building a comprehensive digital wallet with integrated payment gateways and loyalty programs for a rising fintech startup."
    ]
  },
  {
    name: "RWA tokenization",
    intro: "Pioneering the tokenization of real-world assets, creating secure and compliant blockchain infrastructure to unlock liquidity and fractionalize ownership.",
    points: [
      "Creating a secure platform for tokenizing real estate assets, enabling fractional ownership and secondary market liquidity.",
      "Developing a smart contract-based system for tokenizing and trading fine art and collectibles on the blockchain.",
      "Building an enterprise-grade infrastructure for issuing and managing tokenized securities compliant with global regulations."
    ]
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png', // Using existing icon name or place holder
    title: 'Discovery and Conceptualization',
    content: 'We establish the audience, the objective, the brand voice, the competitive context, and the distribution channels before any creative work begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png', // Using existing icon name or place holder
    title: 'Storyboarding and Design',
    content: 'Our team crafts a comprehensive storyboard and custom style frames to visualize the narrative and ensure it aligns with your brand identity before animation starts.',
  },
  {
    id: 3,
    icon: '/animation.png', // Using existing icon name or place holder
    title: 'Animation Development',
    content: 'We bring the designs to life using advanced 2D animation techniques, adding motion, sound design, and effects to create a compelling final product.',
  }
];

const title = (<>
We make <span>great<br />videos</span>, just for you.
</>);

const text = "In a world of remixes, custom created videos are a breath of fresh air. You know that video is the future of marketing. What you might not know is that Pixel Studios helps make the video production process easier than ever before. If you have an idea for a video, we can do it.";

const faqs = [
  {
    question: "How much does an animation company cost?",
    answer:
      "The cost to hire an animation company can vary upon quality of animation, timeline of project, and expertise or brand name of the company. For a usual 30-second animated explainer video, the cost for production can be anywhere between $2500 and $5000. Whereas, if you opt for more detailed animation with custom characters, and professional artwork, the cost can easily go up to $7000 per minute of animation.",
  },
  {
    question: "What types of video content do you produce?",
    answer: "We produce various types of video content including explainer videos, promotional videos, corporate videos, training videos, and social media videos.",
  },
  {
    question: "What is your video production process like?",
    answer: "Our process typically includes discovery, scriptwriting, storyboarding, animation/production, voiceover, and final review with client revisions.",
  },
  {
    question: "What type of video is right for our business?",
    answer: "The right type of video depends on your specific goals. Explainer videos are great for products, while corporate videos are better for brand building.",
  },
  {
    question: "What makes a good video marketing strategy?",
    answer: "A good strategy focuses on your target audience, clear messaging, high-quality production, and effective distribution channels.",
  },
  {
    question: "What briefing materials do I need to provide?",
    answer: "We usually ask for your brand guidelines, key messaging, target audience details, and any specific ideas or references you have in mind.",
  },
  {
    question: "Does Video Animation focus on corporate video production?",
    answer: "Yes, we have extensive experience in creating professional corporate videos tailored to your company's identity and communication goals.",
  },
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
      <StatsSection
        heading={<>A Trusted Animation<br />
                Company for 2D & 3D<br />
                Animation Services.</>}
        statsData={statsData}
      />
      <ServicesSection
        title="Our Services"
        description={null}
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WonderingSection
        title="We know your vertical?"
        data={wonderingIndustriesData}
      />
      <WhyPartnerSection />
      <WhyInvestSection
        title={<>Our Proven 2D<br />Animation Workflow</>}
        description="Our 2D animation production follows a structured, milestone-driven process. Here is exactly what happens between the brief and the final file."
        accordionData={whyInvestAccordionData}
      />
      <PortfolioShowcase />
      <div style={{ backgroundImage: "radial-gradient(60.57% 91.94% at 69.22% 43%, #C53ADD 0%, #19042D 100%)" }}>
        <CostSection
        title={<>How Much Does 2D<br />Animation Cost?</>}
        description="A professionally produced 60-second 2D animated video from a reputable 2D animation studio in the USA typically starts in the $2,500 to $4,500 range. This covers discovery, scripting, character design, storyboarding, animation, professional voiceover, sound design, and final delivery in the formats you need. More complex productions with custom character libraries and multiple unique environments fall in the $5,000 to $12,000 range."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="For multi-video content campaigns and ongoing retainers, we structure scaled pricing that reduces the per-video cost substantially. When character libraries and style systems are built once and deployed across multiple videos, the per-asset production cost drops considerably. We provide itemized, transparent quotes based on your actual brief within 48 hours of a discovery call."
      />
        <GetQuoteSection />
      </div>
      <TestimonialsSlider />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TestimonialSection />
      <TrustedClientsSection />
      <IndustrySection 
        heading="We've delivered results for companies in every industry."
        industries={industries}
        variant="gradient"
      />
      <FaqSection
        heading="FREQUENTLY ASKED QUESTION?"
        faqs={faqs}
      />
    </main>
  );
}
