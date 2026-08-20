import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/CorporateVideoAnimation/CostSection"
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TechnologySection from "@/components/CorporateVideoAnimation/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const standoutFeatures = [
  {
    id: 1,
    title: 'Experienced Corporate Video Specialists',
    description: "Our team has produced corporate video animations across technology, finance, healthcare, and industrial sectors with cross-industry experience that reduces the briefing overhead.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Custom Animation Solutions',
    description: "Every animated corporate video starts from your brief, your brand, and your business objective. No templates applied regardless of fit.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Industry-Specific Expertise',
    description: "We understand the communication norms, audience psychology, and accuracy standards of every sector we serve.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Dedicated Project Management',
    description: "One project manager from brief to delivery. Every milestone is dated. Every revision round is documented before production begins.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Fast Turnaround Times',
    description: "Most corporate video animation productions are completed in three to five weeks from a brief sign-off, with rush options available.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Transparent Communication',
    description: "Documented scope, milestone schedules, and proactive updates throughout every corporate animation video production.",
    icon: '/icons/experienced.png'
  }
];

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

const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Marketing and Advertising Campaigns',
    content: "Animation videos for B2B marketing consistently outperform static creative in click-through rate, completion rate, and cost per acquisition across digital advertising environments."
  },
  {
    id: 2,
    title: '2 Employee Training and Onboarding',
    content: "Corporate training videos reduce onboarding time and improve compliance completion rates, particularly for distributed workforces who cannot attend facilitated sessions."
  },
  {
    id: 3,
    title: '3 Product and Service Promotion',
    content: "Animated business videos communicate product value faster than a sales pitch and with more consistency than relying on individual rep delivery quality."
  },
  {
    id: 4,
    title: '4 Corporate Branding',
    content: "Animated corporate video builds brand identity through motion and visual storytelling in ways that static brand guidelines applied to documents cannot achieve."
  },
  {
    id: 5,
    title: '5 Investor and Stakeholder Communication',
    content: "Investor presentation videos give funding audiences a structured, compelling narrative around a business that a slide deck alone rarely delivers."
  },
  {
    id: 6,
    title: '6 Internal Business Communications',
    content: "Internal communication animation reaches large, distributed teams with consistent messaging around leadership priorities, culture, and organizational change."
  }
];

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Simplify Complex Information",
    text: "Animated corporate video controls the sequence and pacing of information delivery, making it the most effective format for communicating complex services, systems, or processes clearly."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Increase Audience Engagement",
    text: "Video animation for business consistently generates higher engagement and completion rates than static content, keeping audiences in contact with the brand message longer."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Improve Brand Awareness",
    text: "Consistent animated business videos across touchpoints build brand recognition and recall more effectively than text-and-image content at equivalent distribution levels."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Generate More Leads",
    text: "Landing pages with corporate explainer videos convert at meaningfully higher rates than static pages by reducing the cognitive friction between a visitor and a conversion decision."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Boost Marketing ROI",
    text: "A single well-produced animated corporate video can be deployed across paid social, email, website, and sales enablement simultaneously, multiplying the return on a single production investment."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Improve Employee Learning and Retention",
    text: "Corporate training videos improve knowledge retention compared to text-only training materials, particularly for procedural, compliance, and technical content."
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Strategy',
    content: 'We establish the audience, the business objective, and the distribution context before the script begins. This means understanding who will watch the video, what they need to think or do afterward, and what platform and format the final content will live on.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Development',
    content: "Scripts written around the audience's decision-making process, not the client's preferred feature order. Every line is structured to move the viewer from where they are to where the video needs them to be — in the shortest path that does not sacrifice clarity.",
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding',
    content: 'Every scene is mapped and approved before animation begins. Changes to the storyboard cost nothing. Changes after the animation begins cost time. This phase exists precisely to surface and resolve every structural and visual decision before production makes them expensive to fix.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Design and Illustration',
    content: 'Visual style, character design, and brand color application are established and approved before any animation production starts. Every design element is reviewed against your brand standards and signed off by your team before a single frame enters the animation pipeline.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Full corporate animation video production in-house, on the same team that handled discovery and storyboarding. There are no handoffs to external animators, no loss of brief context mid-production, and no version of your project that gets managed by someone who was not in the room at kickoff.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Voiceover and Sound Design',
    content: 'Professional voiceover matched to brand tone, music selected for register, and sound design that completes the production. We work with a vetted roster of voice talent selected based on your audience profile, and every audio element is mixed in-house to broadcast specification before delivery.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Quality Assurance',
    content: 'Structured internal review of audio-visual sync, brand accuracy, and platform export specifications before client presentation. Every video passes through a documented QA checklist that covers timing accuracy, color accuracy, caption accuracy, and format compliance — so the version you review is already production-ready.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files in every format specified at kickoff. Source files are included in most project scopes. Delivery is not considered complete until every format has been tested against the platform it will live on and confirmed against the technical specifications agreed at project start.',
  }
];

const title = (
  <>
    Get Started with <span>Corporate Video Animation</span> Services Today
  </>
);

const text = "Book a discovery call, and we will scope your corporate video animation project, timeline, and investment within 48 hours.";

const faqs = [
  {
    question: "What is corporate video animation?",
    answer: "Corporate video animation is the production of animated video content for B2B/business purposes, including marketing, training, investor communication, and internal messaging.",
  },
  {
    question: "How much does a corporate animation video cost?",
    answer: "A professionally produced 60-second corporate video animation typically starts at $2,000 to $5,000. Complex productions with custom characters or multiple scenes run higher. Itemized quotes within 48 hours.",
  },
  {
    question: "How long does corporate video production take?",
    answer: "Most corporate video animation productions are completed in three to five weeks from a brief sign-off. Rush timelines are available for fixed launch dates.",
  },
  {
    question: "Why should businesses use animated videos?",
    answer: "Animated business videos communicate complex ideas faster, hold attention longer, and perform measurably better than static content across marketing, training, and sales enablement contexts.",
  },
  {
    question: "Are animated videos effective for B2B marketing?",
    answer: "Yes. B2B animated videos consistently outperform static creative in awareness and lead generation campaigns, particularly when the product or service requires explanation before it can be evaluated.",
  },
  {
    question: "What is the ideal length for a corporate video?",
    answer: "60 to 90 seconds for marketing and explainer use. Two to three minutes for investor presentations and detailed product demonstrations. The right length is the one that delivers the argument without losing the audience.",
  },
  {
    question: "Can you help with script writing?",
    answer: "Yes. Scriptwriting is a standard stage in every corporate animation video production we deliver. Scripts are written around the audience brief and approved before any design or animation begins.",
  },
  {
    question: "Do you provide voiceover services?",
    answer: "Yes. Professional voiceover, music selection, and sound design are included in standard corporate video animation packages.",
  },
  {
    question: "How many revisions are included?",
    answer: "Two full revision rounds are standard. Additional rounds available and priced upfront. All revision terms documented before production begins.",
  },
  {
    question: "What files will I receive after project completion?",
    answer: "Standard delivery includes MP4 in multiple resolutions for web, social, and broadcast use. Source files are included in most project scopes.",
  },
  {
    question: "Request a Free Consultation",
    answer: "30 minutes. No obligation. Detailed proposal within 48 hours of the call.",
  },
  {
    question: "Get a Custom Quote",
    answer: "Submit your brief and receive an itemized estimate within 48 hours.",
  },
  {
    question: "Speak with a Corporate Video Animation Expert",
    answer: "Talk through your project with a specialist before committing to a direction or a budget.",
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
      <StatsSection
        heading="A Trusted Animation Company for Corporate Video Animation"
        statsData={statsData}
        variant="gradient"
      />
      <CostSection />
      <ServicesSection
        title="Our Corporate Animation Video Production Services"
        description="Our corporate animation video production covers every format a business needs across the customer journey, from first-touch marketing through internal training and investor communication."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <HowWeWorkSection
        heading="How Businesses Use Animated Corporate Videos?"
        description="We create professional corporate video animations to engage audiences, simplify communication, and deliver measurable business outcomes across marketing, training, and stakeholder relations."
        accordionData={howWeWorkAccordionData}
      />
      <CooperationModelsSection
        subtitle="Business Benefits"
        title="Benefits of Corporate Video Animation for Businesses"
        description=""
        cards={cooperationModelsCards}
      />
      <WhyInvestSection
        subtitle="THE PROCESS"
        title="Our Corporate Video Animation Production Process"
        description="Most corporate animation projects fail in pre-production — not in the animation phase. The script is wrong, the brief is incomplete, or the visual direction is approved without being tested against the audience. Our production process is designed to resolve every one of those risks before production begins, not after."
        accordionData={whyInvestAccordionData}
      />
      <TeamStandoutSection
        subtitle="HOW WE WORK"
        title={<>Why Choose Our Corporate <span>Animation</span> Company?</>}
        description="Most corporate animation companies deliver a video. We deliver a communication outcome. Every project at Pixel Studios begins with what the video needs to accomplish — not with what it should look like. That distinction is why our clients come back, and why the videos we produce continue performing long after delivery."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201854810?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TechnologySection />
      <IndustrySection
        heading="Corporate Video Animation Solutions for Every Industry"
        description="A corporate animation video for a financial services firm and one for a SaaS onboarding flow are not the same project. Audience psychology, regulatory language, and visual norms differ by industry. We have built genuine production experience across the sectors below, and we understand those differences from the first discovery call."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions About Corporate Video Animation"
        faqs={faqs}
      />
    </main>
  );
}
