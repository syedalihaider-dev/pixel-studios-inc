import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TestimonialsSlider from "@/components/MotionGraphics/TestimonialsSlider";
import TechnologySection from "@/components/MotionGraphics/TechnologySection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";
import Link from "next/link";

const softwareSectionFeatures = [
  {
    id: 1,
    title: "Factors Affecting Project Cost",
    description:
      "Reconstruction complexity, number of expert review cycles, animation length, and production timeline.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Complexity of the Case",
    description:
      "A single-vehicle accident reconstruction costs less than a multi-party commercial vehicle collision with conflicting expert opinions.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Level of Detail Required",
    description:
      "A demonstrative showing general event sequence costs less than forensic animation with frame-accurate vehicle dynamics and sight line analysis precisely matched to engineering survey data.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Animation Length",
    description:
      "A 90-second reconstruction costs less than a five-minute medical malpractice animation covering surgical procedure, injury mechanism, and long-term consequence.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Expert Witness Collaboration",
    description:
      "Multi-expert review cycles with revision requirements at each review add to the production timeline and cost.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Delivery Timeline",
    description:
      "Standard production runs four to eight weeks. Expedited production for cases approaching trial is available.",
    icon: "/icons/experienced.png"
  }
];

const standoutFeatures = [
  {
    id: 1,
    title: 'Simplify Complex Messages',
    description: "Animation sequences, timing, and visual emphasis guide the viewer through a complex idea in the order it needs to land, without requiring prior knowledge of the subject. Text cannot do that. Static images cannot do that. Motion graphics can.Amateur motion graphic looks like it was produced in a web browser. Professional motion graphic tells a visual story — where the sequence of drawings, the pacing of the voiceover, and the logical structure of the script work together as a unified communication system. That integration is the difference between content that informs and content that converts.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Increase Audience Engagement',
    description: "Animated content holds attention at significantly higher rates than static formats on every digital platform. That extra dwell time is the difference between a message received and one scrolled past without registering.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Improve Brand Recall',
    description: "Motion combined with audio creates memory encoding that text alone cannot produce. Consistent motion graphic design builds a visual identity that the audience recognizes across platforms without needing to see the logo first.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Boost Marketing Campaign Performance',
    description: "Motion graphics video production services consistently outperform static ad formats in click-through rate, engagement, and cost per acquisition. The performance differential compounds when the creative quality is high, and the strategy behind it is sound.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Drive Higher Conversion Rates',
    description: "Landing pages with a motion graphics explainer video convert at higher rates than static pages. Motion answers the objections a prospect has before they go looking elsewhere, which keeps them moving toward the conversion point.",
    icon: '/icons/experienced.png'
  }
];

const industries = [
  {
    id: 1,
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: <>Product walkthroughs, feature announcements, and onboarding <Link href="/saas-explainer-videos">animations for software companies</Link> at every stage of growth. We know which motion graphics assets move which metrics at which funnel stage.</>,
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: <>Patient education, device explanation, and <Link href="/healthcare-animation">healthcare marketing content</Link> built to the accuracy and sensitivity standards the industry demands for public-facing motion graphics.</>,
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: <><Link href="/education-animation">Education animation</Link> and instructional motion graphics are designed around learning outcomes rather than visual novelty. Built for LMS platforms and standalone distribution alike.</>,
    link: "#"
  },
  {
    id: 4,
    title: "Finance & Fintech",
    image: "/industry/04.png",
    text: <>Investment product explanation, regulatory communication, and financial literacy content for audiences that do not accept ambiguity in either the message or the visual presentation that’s where <Link href="/finance-animation">fintech animation services</Link> come in.</>,
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate and Construction",
    image: "/industry/05.png",
    text: <><Link href="/real-estate-animation">Real Estate animation</Link> helps in architectural walkthroughs and property launch motion graphics that give investors and buyers something compelling to respond to before the building exists. </>,
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce and Retail",
    image: "/industry/06.png",
    text: <><Link href="/ecommerce-video-production">Ecommerce Product launch animations</Link> and brand awareness motion graphics for consumer brands competing in high-noise retail environments where the first frame determines whether the ad gets skipped. </>,
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups and Emerging Brands",
    image: "/industry/06.png",
    text: <>First-impression content for brands that need to communicate clearly and confidently before their reputation does it for them. Motion graphics <Link href="/enterprise-animation">Enterprise animation</Link> that position early-stage companies credibly within their category from the first campaign.</>,
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Explainer Video Motion Graphics",
    description: <>A motion graphics <Link href="/animated-explainer-video">explainer video services</Link> strips complexity out of a product and replaces it with a visual argument that the audience can follow in 90 seconds. We build explainer video animation around the cognitive gap between what your audience currently understands and what they need to understand to act. This is the format most brands ask for first, and the one where strategy matters most.</>,
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Product Demo and Launch Videos",
    description: <>Launch content built around the first impression. We <Link href="/3d-product-animation">animate product</Link> features, interface walkthroughs, and launch announcements using motion graphics that make the product the hero without requiring prior category knowledge from the viewer. Product demo videos produced this way consistently outperform live-action demos in completion rate.</>,
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Motion Graphics",
    description: <>Brand films, investor presentations, and internal communications brought to life through corporate motion graphics. Motion Graphics <Link href="/corporate-video-animation">corporate video production services</Link> that belong in a premium brand environment, not pulled from a stock template library that your competitors are also using.</>,
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Social Media Motion Graphics",
    description: <>Short-form motion content built natively for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts. <Link href="/social-media-animation">Social media motion graphics</Link> with vertical formats, on-screen text that works without audio, and hooks engineered to stop the scroll in the first frame rather than building to one.</>,
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Advertising and Promotional Motion Graphics",
    description: "Paid social, display, pre-roll, and broadcast advertising motion graphics built around a conversion objective. Promotional motion graphics where the response mechanism is embedded in the creative structure, not bolted on as a final-frame logo card.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Animated Infographics",
    description: "Data and statistics that would otherwise sit in a spreadsheet or a dense report are animated into content that gets watched, shared, and remembered. We build animated infographics for investor decks, campaign support, social media series, and digital publications.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "UI and App Motion Graphics",
    description: "Interface walkthroughs, feature highlights, and app demo animations that make complex software feel intuitive to a first-time viewer. Produced at the pixel precision that UI communication requires, built directly from product design files.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Presentation and Corporate Communication Videos",
    description: "Animated presentation content for keynotes, board meetings, and investor presentations. Motion graphics that replace static slide decks with content that holds a room and earns the next meeting rather than filling time before it.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
    title: '1 Stronger Visual Storytelling',
    content: 'Professional motion graphic design gives brands full control over the sequence and emphasis of every piece of information they present. No static format offers that level of control.'
  },
  {
    id: 2,
    title: '2 Consistent Brand Communication',
    content: 'Motion graphics built within a defined brand system create a consistent visual language across every campaign, channel, and platform a brand publishes to.'
  },
  {
    id: 3,
    title: '3 Better Social Media Performance',
    content: 'Animated content outperforms static posts on every platform that measures watch time and engagement as ranking signals for organic distribution.'
  },
  {
    id: 4,
    title: '4 Increased Viewer Retention',
    content: 'Viewers complete motion graphics videos at higher rates than most other content formats. High completion rates improve organic reach and multiply the return on each production investment.'
  },
  {
    id: 5,
    title: '5 Greater Marketing ROI',
    content: 'One well-produced motion graphics asset can be repurposed across landing pages, email, social, and advertising. The per-impression cost drops with every additional use across the campaign lifecycle.'
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Creative Strategy',
    content: 'We establish what the motion graphic needs to accomplish, who watches it, and what they do next before a single keyframe exists. Strategy is the first production decision, not an afterthought.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Development',
    content: 'The script is the argument the animation makes, written in the sequence the audience needs to receive it, not in the order the client prefers to present their product..',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Visual Planning',
    content: "Every scene is mapped before motion begins. Visual hierarchy, typography, animation style, and scene transitions are all approved before production starts.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Motion Design and Animation',
    content: 'Our motion designers build every animation to the approved storyboard. Every timing and easing decision is traceable to the brief, not applied by default because it looked fine in the preview.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Voiceover and Sound Design',
    content: 'Professional voiceover matched to brand tone, music selected for emotional register, and sound design that adds production depth without competing with the visual narrative.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Quality Assurance and Revisions',
    content: 'Every production goes through a structured internal review before the client sees it. Audio-visual sync, brand accuracy, and export specs are all checked against the brief.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Final Delivery and Distribution Support',
    content: 'Final files in every format specified at kickoff, source files were scoped, and post-delivery support for platform adaptation and multi-channel distribution.',
  }
];

const title = (
    <>
      Ready to Create Engaging <span>Motion Graphics?</span>
    </>
  );

const text = "Tell us what you are trying to accomplish. We will tell you whether motion graphics is the right format, what approach we would take, and what a realistic budget and timeline look like.";

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Motion Graphics vs 2D Animation",
      text: "Motion graphics is the better choice when the objective is explanation, data presentation, or brand consistency across multiple short-form assets. 2D animation is better when character-driven storytelling and emotional narrative are central to the brief. Many of our productions combine both within a single campaign."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Motion Graphics vs 3D Animation",
      text: "3D motion graphics services are right when the subject has physical depth or requires photorealistic rendering. For conceptual explanation, brand content, and data visualization, 2D motion graphics deliver equal or stronger results at a lower cost and a faster timeline."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "When Motion Graphics Are the Right Choice",
      text: "When the goal is clarity at speed, consistency across multiple formats, and a production timeline measured in weeks rather than months. Motion graphics are the most versatile format in the category because they are designed to be distributed everywhere, not watched once and forgotten."
    }
  ];

const faqs = [
  {
    question: "How much does a motion graphics video cost?",
    answer: "A professionally produced 30 to 60-second motion graphics video typically starts in the $1,500 to $4,000 range for standard 2D motion work. Productions with 3D motion graphics services, custom illustration, or broadcast-spec delivery run higher. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does it take to create a motion graphics video?",
    answer: "Most 30 to 60-second productions are completed in two to four weeks from a brief sign-off. Multi-format campaign packages and longer productions take proportionally longer. Rush timelines are available and priced transparently.",
  },
  {
    question: "Do you provide scripts and storyboards?",
    answer: "Yes. Scriptwriting and storyboarding are standard stages in our motion graphics video production services. We do not begin animation until both are approved by the client.",
  },
  {
    question: "Can you create motion graphics for social media marketing?",
    answer: "Yes. Social media motion graphics are among our most requested formats. We produce platform-native content for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts, built to each platform's technical and engagement requirements from the start.",
  },
  {
    question: "What industries benefit most from motion graphics?",
    answer: "Every industry requires complex ideas to be communicated clearly. SaaS, healthcare, finance, education, and e-commerce are our highest-volume sectors because all of them have products and services that text and photography cannot explain as efficiently as motion graphics can.",
  },
  {
    question: "Do you offer voiceover and sound design services?",
    answer: "Yes. Professional voiceover, music selection, and sound design are included in our standard motion graphics design services packages, matched to the brand tone established in the brief.",
  },
  {
    question: "What software do you use for motion graphics production?",
    answer: "Adobe After Effects is our primary tool. We also use Cinema 4D for 3D motion graphics services, Adobe Illustrator and Premiere Pro for asset creation and delivery, and Figma for UI-accurate interface animation.",
  },
  {
    question: "How many revisions are included in a project?",
    answer: "Two full revision rounds in standard packages. Additional rounds available and priced upfront. All revision terms are in writing before production begins.",
  },
  {
    question: "Can motion graphics improve conversion rates?",
    answer: "Consistently. Pages with motion graphics content convert at higher rates than static alternatives because motion graphics reduce the cognitive friction between a visitor and a purchase decision.",
  },
  {
    question: "Do you provide source files after project completion?",
    answer: "Yes. Source files are included in most project scopes. Exactly what is delivered is documented in the project proposal before production begins.",
  }
];

export const metadata = {
  title: "Motion Graphics Services for Brands & Campaigns | Pixel Studios",
  description: "Need professional motion graphics services in the USA? Pixel Studios delivers brand, product, and campaign motion graphics that convert. Get your free quote today.",
};

export default function MotionGraphics() {
  return (
    <main>
      <Banner
        title="Motion Graphics Services for Brands, Products, and Marketing Campaigns."
        description="At Pixel Studios Inc., our motion graphics services start with a business objective and build backward from there. What does the viewer need to understand? What do they do next? Every keyframe, transition, and piece of animated typography we produce answers those two questions first. We deliver motion graphics design services for brands, product teams, and marketing campaigns across the USA, and our motion graphics animation services in the United States markets are built to convert attention into action from day one."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for Motion Graphics Services"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Professional Motion Graphics Services"
        description="Our motion graphics animation services cover every format a brand needs to communicate clearly across digital and broadcast environments."
        sliderItems={sliderItems}
      />
      <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<>Why Businesses Invest in <span>Motion Graphics?</span></>}
        description="The gap between a motion graphic video that gets watched and one that gets results comes down to production quality. These are the advantages that professional production delivers over template-based or in-house alternatives."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201856158?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <HowWeWorkSection
        heading="Benefits of Professional Motion Graphic Design"
        description="Motion graphics services help brands capture attention, communicate complex ideas quickly, and drive measurable business results. Done right, motion design is one of the highest-performing assets a brand can own."
        accordionData={howWeWorkAccordionData}
      />
      <CooperationModelsSection
        subtitle="Why Choose Our"
        title="Motion Graphics vs Traditional Animation"
        description="The distinction matters because the wrong format choice wastes budget and underserves the audience it was meant to reach."
        cards={cooperationModelsCards}
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Motion Graphics <br />Production Process</>}
        description="Every motion graphic video we produce follows the same disciplined production process. There are no shortcuts, no freelance handoffs, and no phases where your project loses its strategic thread."
        accordionData={whyInvestAccordionData}
      />
      <TechnologySection />
      <TeamStandoutSection
        subtitle="PRICING"
        title={<>Cost of <span>Legal Graphics Animation Services</span></>}
        description="Every legal graphics and animation project is quoted based on the evidence,
 complexity, and production requirements of the case. The following factors
 have the greatest impact on project scope, timeline, and overall cost."
        features={softwareSectionFeatures}

      />
      <TestimonialsSlider />
      <IndustrySection
        heading="Motion Graphics Solutions for Every Industry"
        description="Motion graphics work differently in every vertical. The pacing, language, and visual register that perform for a FinTech product launch are not what works for healthcare compliance training. We have built production experience across all of the following."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions About Motion Graphics Services"
        faqs={faqs}
      />
    </main>
  );
}
