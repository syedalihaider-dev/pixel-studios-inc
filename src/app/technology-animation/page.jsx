import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/Common/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/Common/WhyInvestSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
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

const sliderItems = [
  {
    id: 1,
    title: "Product Demo Videos",
    description:
      "Screen-accurate demo videos walking through core product workflows, built for landing pages, sales decks, and app store listings alike.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Explainer Videos",
    description:
      "Concise technology explainer videos introducing a product's value proposition quickly, for audiences with limited attention or context on the category.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "UI Animation",
    description:
      "Animated recreations of your actual interface, easy to update as your product evolves, keeping marketing visuals current with every release cycle.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description:
      "Supporting motion graphics for feature launches, technical concepts, and investor presentations that need to communicate quickly and clearly.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your product, audience, and goals, including a walkthrough of your platform, to scope the right approach for your funnel.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are built around the specific outcome the video needs to drive for your business.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is planned and approved before animation begins, so pacing and messaging are locked in early.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "UI elements and brand assets are built to match your actual product and design system precisely.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until every scene communicates clearly and quickly.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your website, sales team, and campaigns require to launch.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A technology animation agency with work across software, AI, and hardware companies at every stage of growth and funding."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every video starts from your actual product and brand, never a generic template that could belong to any tech company."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around launch dates and product release cycles your team is already committed to."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery, keeping stakeholders aligned."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Technology Animation</span> Project
    </>
  );

const text =
    "Talk to our team about your product, your audience, and your growth goals, and we will build the technology animation that turns a complex product into something people understand at a glance and want to try, from your homepage to your next investor deck.";

const faqs = [
  {
    question:
      "What Is a Technology Animation Video, and When Should a Tech Company Use One?",
    answer:
      "A technology animation video is a produced piece of motion content that explains a tech product, feature, or concept visually. Companies typically use one for homepage explainers, product launches, investor decks, or sales enablement.",
  },
  {
    question: "How Much Do Technology Animation Services Typically Cost?",
    answer:
      "Technology animation video cost depends on style, length, and complexity, particularly how much UI or data visualization is involved. Most projects are scoped after an initial discovery call.",
  },
  {
    question:
      "What's the Difference Between a Technology Explainer Video and Full Technology Animation Services?",
    answer:
      "A technology explainer video is a single, focused deliverable, while full technology animation services can include explainers, UI animation, motion graphics, and ongoing production support across a product's lifecycle.",
  },
  {
    question:
      "How Long Does It Take to Produce a Technology Animation Video?",
    answer:
      "Most projects take three to six weeks from discovery to delivery, depending on complexity and revision rounds.",
  },
  {
    question:
      "Should I Use 2D Animation, 3D Animation, or Motion Graphics for My Technology Product?",
    answer:
      "2D and motion graphics suit most software and UI-focused content, while 3D can add impact for hardware products or more conceptual technology storytelling that benefits from added depth.",
  },
  {
    question:
      "What Information Should I Prepare Before Starting a Technology Animation Project?",
    answer:
      "Access to your product or a working demo, brand guidelines, and a clear sense of your target audience all help us scope an accurate project from the first discovery call.",
  },
  {
    question:
      "How Many Revisions Are Typically Included in Technology Animation Services?",
    answer:
      "Most projects include two to three revision rounds, though this can be adjusted based on project scope during the initial scoping conversation.",
  },
  {
    question:
      "How Much Do Technology Explainer Videos Actually Impact Conversions and Sales?",
    answer:
      "Landing pages featuring a clear explainer video commonly see stronger engagement and conversion than text alone, since video reduces the effort required for a visitor to understand what your product actually does.",
  },
  {
    question:
      "Can You Update UI Animation When Our Product Interface Changes?",
    answer:
      "Yes. UI animation is built to be updated efficiently, so most interface changes can be reflected with a partial revision rather than a full new production.",
  },
  {
    question:
      "Do You Provide Both Consumer-Facing and Investor-Facing Versions of the Same Content?",
    answer:
      "Yes. We often build a simplified consumer explainer alongside a more technical, investor-facing version from the same underlying script and asset library.",
  },
  {
    question:
      "Can You Work With Early-Stage Startups That Do Not Yet Have a Finished Product?",
    answer:
      "Yes. We can work from wireframes, prototypes, or a clear product vision for early-stage companies, adjusting the level of UI detail to match what actually exists at the time of production.",
  },
  {
    question:
      "Do You Provide Different Video Lengths for Different Marketing Channels?",
    answer:
      "Yes. Most tech clients need a short version for the homepage and paid ads, plus a longer version for gated content, sales decks, and deeper product education.",
  },
  {
    question:
      "Can Technology Animation Explain a Complex Backend or API Without Losing a Non-Technical Audience?",
    answer:
      "Yes. We build a visual metaphor around the core mechanism rather than a literal, jargon-heavy explanation, which keeps complex backend systems understandable for a broader audience.",
  },
  {
    question: "Do You Offer Localization for Global Product Launches?",
    answer:
      "Yes. Voiceover, subtitles, and on-screen UI text can all be localized, which is common for technology companies launching in multiple international markets simultaneously.",
  },
  {
    question:
      "Can You Produce Both a Full Explainer and Shorter Social Cutdowns From One Project?",
    answer:
      "Yes. Most technology animation projects are built to produce a full-length explainer alongside shorter social and ad cutdowns from the same core production.",
  },
  {
    question:
      "Do You Provide Ongoing Support as Our Product Continues to Evolve?",
    answer:
      "Yes. A retainer arrangement works well for technology companies with a fast release cadence, keeping UI animation and messaging current as the product evolves.",
  },
  {
    question:
      "Can You Match Our Existing Brand and Design System Exactly?",
    answer:
      "Yes. We work directly from your brand guidelines and design system, so every animation looks like a natural extension of your existing product and marketing.",
  },
  {
    question:
      "Do You Offer a Discovery Call Before We Commit to a Full Project Scope?",
    answer:
      "Yes. Every project starts with a discovery call to review your product and goals before we propose a scope and timeline.",
  },
  {
    question:
      "Can Technology Animation Be Reused Across Sales, Marketing, and Investor Materials?",
    answer:
      "Yes. A single core production can typically be adapted across your website, sales decks, and investor materials without any additional modeling or animation work.",
  },
];

export const metadata = {
  title: "Technology Animation Services | Pixel Studios",
  description: "Pixel Studios' technology animation services turn software, AI, and hardware products into clear video for product launches and marketing.",
};

export default function TechnologyAnimationPage() {
  return (
    <main>
      <Banner
        title="Technology Animation That Sells the Product"
        description="Tech products often work in ways users never see, and that invisibility is exactly what makes them hard to market. Our technology animation services translate software, AI systems, and hardware into video that a customer, investor, or new user can actually understand and act on. Every project is built from your actual product and roadmap, so the animation stays accurate even as your platform continues to evolve and ship new features."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Technology Animation"
        title="Why Animation Matters in the Technology Industry?"
        description="Technology products, especially software and AI, rarely have a
                physical form that can be photographed or demoed in a
                traditional sense, which leaves marketing and sales teams
                describing value in the abstract. Product cycles move fast, so
                marketing materials need to be produced and updated quickly to
                keep pace with new releases; technical concepts like machine
                learning models or backend architecture are genuinely difficult
                to explain in plain language, and different audiences, from
                developers to executives to consumers, all need different levels
                of depth from the same underlying product story. Static
                screenshots and feature lists rarely convey what a product
                actually feels like to use, which leaves a real gap between
                engineering effort and market perception."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="A technology animation video makes abstract systems and interfaces
            visible in a way that builds understanding before a user ever opens
            the product. A strong technology explainer video can condense a
            complex value proposition into a couple of focused minutes, UI
            animation can showcase a product experience without a live screen
            recording, and the same core assets can be adapted for different
            audiences from a homepage visitor to an enterprise buyer.
            Technology companies using custom technology animation video content
            report stronger conversion on landing pages, clearer investor
            conversations, and marketing that keeps pace with a fast product
            roadmap instead of lagging months behind the actual release."
      />
      <ServicesSection 
        title="Animation Solutions for Technology"
        description="What does a technology animation agency need to cover across a product's lifecycle?"
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Technology <br />Animation Process</>}
        description="Product velocity is high in this category, so our process is
                built for speed without sacrificing accuracy to your actual UI
                and roadmap."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="A great product deserves an explanation as clear as the engineering behind it. Here is how our studio delivers that."
        cards={cooperationModelsCards}
      />
      <TestimonialSection />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
