import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/WhiteboardAnimation/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/WhiteboardAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/WhiteboardAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
;
import WonderingSection from "@/components/WhiteboardAnimation/WonderingSection";
import CooperationModelsSection from "@/components/WhiteboardAnimation/CooperationModelsSection";
import TestimonialsSlider from "@/components/WhiteboardAnimation/TestimonialsSlider";
import TechnologySection from "@/components/WhiteboardAnimation/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/WhiteboardAnimation/FaqSection";











const standoutFeatures = [
  {
    id: 1,
    title: 'Clear Visual Storytelling',
    description: "Amateur whiteboard animation looks like it was produced in a web browser. Professional whiteboard animation tells a visual story — where the sequence of drawings, the pacing of the voiceover, and the logical structure of the script work together as a unified communication system. That integration is the difference between content that informs and content that converts.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Higher Viewer Retention',
    description: "Professionally produced whiteboard animation holds more viewers for longer because every element of the production is optimized for sustained attention — script pacing, visual complexity calibration, voiceover energy, and transition rhythm. Viewer retention is not a metric that improves by accident.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Cost-Effective Video Production',
    description: "Whiteboard animation delivers a higher value-per-dollar than most other animated formats because it does not require complex character rigs, environment design, or 3D rendering. The production investment goes into the two things that actually drive results: a well-built script and professional illustration. That is where we focus.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Stronger Brand Communication',
    description: "A whiteboard animation video with a consistent visual identity — custom illustrations, brand color accents, a voiceover that matches your brand tone — does not just communicate information. It communicates professionalism. Every video we produce is a brand asset, not just a content deliverable.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Better Learning Outcomes',
    description: "Training programs that use whiteboard animation consistently report higher assessment scores, higher completion rates, and lower re-training frequency than programs built on traditional presentation formats. We build our educational whiteboard animations around the learning science, not around what is easiest to produce.",
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
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: "Product walkthroughs, onboarding sequences, and feature education for software platforms where users need to understand your product quickly — before they decide it is too complicated and leave.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "Patient education, clinical training, and compliance content are produced to the accuracy and regulatory standards healthcare audiences require. We understand the difference between simplifying complex information and misrepresenting it. ",
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: "Curriculum content, course modules, and institutional explainers are built around genuine learning outcomes. From K-12 to university-level and professional certification, we produce whiteboard animations that learners actually finish.",
    link: "#"
  },
  {
    id: 4,
    title: "Finance & Fintech",
    image: "/industry/04.png",
    text: "Complex financial products, regulatory disclosures, and investment concepts are explained in a format that builds understanding without sacrificing accuracy. Clear enough for a general audience, precise enough for a compliance review.",
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate",
    image: "/industry/05.png",
    text: "Property walkthroughs, investment explainers, mortgage process videos, and market education content for agencies, developers, and proptech platforms communicating with buyers who are making the largest purchase of their lives.",
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce",
    image: "/industry/06.png",
    text: "Product education, unboxing explainers, and post-purchase onboarding content that reduces returns, increases repeat purchases, and gives buyers the confidence to complete checkout on products that require some explanation.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups & Enterprises",
    image: "/industry/06.png",
    text: "Whether you are explaining a new category to early adopters or rolling out a process change across a global organization, whiteboard animation scales from a single launch video to a full content program. ",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Whiteboard Explainer Videos",
    description: "A whiteboard explainer video is the most efficient format for communicating a concept that your audience currently does not understand. We use this to your advantage. Every whiteboard explainer we produce is built on a script engineered for that specific audience, with a voiceover that matches their pace and a visual flow that mirrors how they actually process new information.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 2,
    title: "Educational Whiteboard Animation",
    description: "Training content that people click through to finish is not training. It is a compliance checkbox. Educational whiteboard animation works differently because learners follow the logic being drawn rather than watching a presenter read slides. We produce educational whiteboard animation for K-12 curriculum, university courses, corporate L&D programs, and professional certification content.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 3,
    title: "Corporate Whiteboard Videos",
    description: "Internal communication that goes unread and onboarding content that gets skipped costs organizations real money. Corporate whiteboard videos work for announcements, process documentation, policy explainers, change management communications, and executive messaging because the format commands attention without demanding a large production budget.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 4,
    title: "Marketing & Promotional Whiteboard Videos",
    description: "The attention economics of digital marketing have shifted. A well-built whiteboard animation video for marketing earns those five seconds because the visual construction draws the eye before the audience has decided whether to care. We produce whiteboard animation for product launches, lead generation campaigns, social media, and sales.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 5,
    title: "Product Explainer Videos",
    description: "Your product makes sense to you. It does not automatically make sense to someone encountering it for the first time. Product explainer videos translate features into outcomes, technical specifications into real-world benefits, and complex workflows into obvious logic. Our product explainer whiteboard animations are written for the buyer, not the builder.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 6,
    title: "Training & E-Learning Videos",
    description: "E-learning content has a retention problem. Slide decks narrated over screen recordings are not learning experiences — they are content endurance tests. Whiteboard animation is structurally better suited to learning because it sequences information the way the brain encodes it: one concept, then the next, visually connected. Our training and e-learning whiteboard videos are SCORM-compatible, LMS-ready, and aligned with the program's actual learning objectives.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 7,
    title: "Healthcare Whiteboard Animation",
    description: "Healthcare communication requires accuracy before anything else. Patient education, clinical training, public health awareness, and provider-facing content all carry compliance and standards that general-purpose animation studios do not understand. Our healthcare whiteboard animation team has produced content that meets the evidentiary and regulatory standards these audiences require, with terminology reviewed against clinical accuracy and visuals built to reinforce.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 8,
    title: "SaaS Whiteboard Animation",
    description: "SaaS onboarding is where user retention is won or lost. A new user who does not understand your product in the first session rarely returns. SaaS whiteboard animation for onboarding, feature education, and customer success content gives your users the conceptual scaffolding they need to get value from your product quickly. We have produced whiteboard animations for software platforms across project management, HR tech, fintech, cybersecurity, and marketing automation.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 9,
    title: "AI Animation Services",
    description: "AI-assisted 3D animation that reduces timelines without reducing quality. Used strategically to accelerate asset iteration and style exploration for high-volume or compressed-schedule productions.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 10,
    title: "Architectural Rendering",
    description: "Photorealistic architectural rendering, real estate visualization, and property walkthroughs for developers and architects presenting projects before completion.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 11,
    title: "Cartoon Animation",
    description: "Stylized 3D cartoon animation for brand storytelling, children's content, and educational series. Expressive, accessible, and distinct from the default digital-clean aesthetic.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 12,
    title: "Photorealistic Rendering",
    description: "Hyperrealistic rendering that makes digital assets indistinguishable from photography. Used in product marketing, architectural visualization, and any context where visual realism determines audience trust.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  }
];


export const metadata = {
  title: "Whiteboard Animation Services | Pixel Studios Inc.",
  description: "Professional whiteboard animation services for explainer videos, training, and marketing. Pixel Studios Inc. delivers clear, compelling whiteboard animation videos built to educate and convert.",
};

export default function WhiteboardAnimation() {
  return (
    <main>
      <Banner
        title="Whiteboard Animation Services for Branding, Training, & Marketing"
        description="Most animated videos are forgotten within 48 hours. Whiteboard animation videos are not, because the format does something other styles cannot: it removes every visual distraction and makes the viewer watch the idea being built in real time. That sustained attention is not an accident. It is the format working exactly as intended.  At Pixel Studios Inc., our professional whiteboard animation services are built around one objective: keeping your audience watching long enough to understand, believe, and act."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection 
        title="Professional Whiteboard Animation Services"
        description="Looking for Professional and Premium Whiteboard Animation Services? From product explainers and corporate training to healthcare education and SaaS onboarding, our professional whiteboard animation services are built for every use case where coherence, retention, and audience action are the goal. Here is what we bring to the table:"
        sliderItems={sliderItems}
      />
      <HowWeWorkSection />
      <PortfolioShowcase />
            <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<>Benefits of Professional <span>Whiteboard Animation</span></>}
        description="The gap between a whiteboard animation video that gets watched and one that gets results comes down to production quality. These are the advantages that professional production delivers over template-based or in-house alternatives."
        features={standoutFeatures}
        
      />
      <WonderingSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialsSlider />
      <TechnologySection />
      <TestimonialSection />
      <IndustrySection 
        heading="Whiteboard Animation Solutions for Every Industry"
        description="The same whiteboard animation video that works for a healthcare compliance program will not work for a SaaS product demo. We have built genuine expertise across the categories below, which means we understand those differences from the first briefing call."
        industries={industries}
        variant="gradient"
      />
      <FaqSection />
    </main>
  );
}
