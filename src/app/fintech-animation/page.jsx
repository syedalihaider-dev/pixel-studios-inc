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
    title: "Payments",
    description: "Payment flow animations that show how transactions move securely from initiation to settlement.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Security",
    description: "Security and fraud protection animations that build user confidence in how their data and funds are protected.",
    icon: "/industry/services-icon-02.png",
  },
  {
    id: 3,
    title: "Investor Pitches",
    description: "Fundraising-focused animation that explains the business model and technical edge to potential investors.",
    icon: "/industry/services-icon-03.png",
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Fintech Explainer Videos",
    description: "Clear, concise fintech explainer videos that introduce your product's value proposition and core mechanism in under two minutes, built for a homepage or app store listing where attention is short and trust has to be earned fast.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Financial Data Visualization Animation",
    description: "Animated charts, dashboards, and data flows that make complex financial data digestible for users, analysts, and investors who need to grasp trends at a glance rather than parse a spreadsheet.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Product Demo Animations for Fintech Apps",
    description: "Screen-accurate walkthroughs of your app's core flows, from account setup to transaction confirmation, built to reduce onboarding drop-off and answer user questions before they reach support.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Cryptocurrency and Blockchain Animations",
    description: "Animations that make decentralized ledgers, wallets, and token mechanics understandable to an audience that may have never interacted with crypto before, without oversimplifying the mechanics that matter.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Investor Pitch Animations",
    description: "Investor pitch animation built for fundraising decks, condensing your business model and technical differentiation into a few focused minutes that build conviction quickly.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Financial Education and Training Animations",
    description: "Educational content that teaches financial literacy or internal compliance procedures in a format that is easier to retain than a written manual or a slide-based training deck.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Corporate Branding and Logo Animation for Fintech Companies",
    description: "Fintech logo animation and brand motion systems that give your company a consistent, professional identity across every touchpoint, from your app to your pitch deck.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Marketing and Social Media Animation",
    description: "Short, platform-native fintech animation videos built for paid social, app store previews, and organic content that need to earn attention quickly.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "RegTech and Compliance Animations",
    description: "Animations explaining regulatory processes and compliance workflows clearly to internal teams, auditors, and partners who need a shared reference for how a process actually works.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "Custom 2D and 3D Fintech Animation Services",
    description: "Whether your product calls for clean 2D motion graphics or more dimensional 3D visualization, every project is built around what actually communicates your mechanism best, not a default style.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your product, compliance requirements, and audience to scope the right animation approach.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed around your core mechanism and reviewed for accuracy before design begins.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is planned and approved before animation starts, so pacing and messaging are locked in early.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "UI, data visuals, and brand elements are built to match your actual product and design system.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until every scene communicates clearly.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your website, app stores, and investor materials require.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A fintech animation company with experience across payments, lending, crypto, and RegTech, fluent in both the technology and the compliance environment around it."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every video starts from your actual product and brand, never a generic template."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around your launch dates and fundraising deadlines."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Fintech Animation</span> Project
    </>
  );

const text =
    "If your product is more sophisticated than your onboarding flow currently explains, that is fixable. Talk to our team about your platform, your compliance requirements, and your audience, and we will build the fintech animation that turns confusion into confidence and confidence into signups. Bring us your product and your compliance checklist, and we will handle the rest.";

const faqs = [
  {
    question: "What's the Difference Between Fintech Motion Graphics and a Full Fintech Explainer Video?",
    answer:
      "Fintech motion graphics are typically short, focused visual elements used to support a message, such as an animated chart or icon sequence. A fintech explainer video is a complete narrative piece that introduces your product's value proposition from start to finish.",
  },
  {
    question: "What Does a Fintech Logo Animation Service Typically Include?",
    answer:
      "It usually includes an animated version of your logo for intros and outros, plus a broader motion system defining how your brand moves across app interactions, ads, and video content.",
  },
  {
    question: "What Factors Affect the Cost of a Fintech Animation Project?",
    answer:
      "Cost depends on animation style, length, and complexity, particularly how much data visualization or UI detail is involved. Most projects are scoped after an initial discovery call.",
  },
  {
    question: "Should a Fintech Company Choose 2D or 3D Animation?",
    answer:
      "2D animation suits most explainer and UI-focused content and tends to be more cost-effective. 3D can add impact for hardware products or more conceptual brand storytelling, though it is less common in this category.",
  },
  {
    question: "Can Fintech Animated Videos Be Localized for Multiple Languages and Markets?",
    answer:
      "Yes. Voiceover, subtitles, and on-screen text can all be localized, which is common for fintech companies expanding into new regulatory regions.",
  },
  {
    question: "What Happens After My Fintech Animation Project Is Delivered? Do I Own the Files?",
    answer:
      "Yes, you own your final deliverables and can reuse them across future campaigns, app updates, or investor materials.",
  },
  {
    question: "How Long Does It Take to Produce a Fintech Animation Video?",
    answer:
      "Most projects take three to six weeks from discovery to delivery, depending on complexity and revision rounds.",
  },
  {
    question: "How Can We Explain Complex Financial Concepts Simply in an Explainer Video?",
    answer:
      "The key is choosing one core mechanism to explain well rather than covering every feature. We work with your team to identify that mechanism, then build the visual metaphor and pacing around it so it stays accurate without becoming dense.",
  },
  {
    question: "Can Fintech Animation Support Both Consumer and B2B Audiences From the Same Company?",
    answer:
      "Yes. We typically build a shared visual system and adapt tone and depth for each audience, so a consumer-facing app explainer and a B2B investor pitch can share a consistent brand look while speaking to very different viewers.",
  },
  {
    question: "Do You Work With Our Legal and Compliance Team Before a Fintech Video Goes Live?",
    answer:
      "Yes. For any project involving specific claims about returns, security, or regulatory status, we build in a compliance review checkpoint at the script stage, well before animation production begins.",
  },
  {
    question: "Can Fintech Animation Help Reduce Onboarding Drop-Off in a Mobile App?",
    answer:
      "Yes. A short product demo animation placed early in the onboarding flow can answer the exact questions that cause users to abandon signup, which is one of the most measurable uses of fintech animation for existing products.",
  },
  {
    question: "Do You Provide Voiceover and Sound Design as Part of Fintech Animation Production?",
    answer:
      "Yes. Voiceover, licensed music, and sound design are included as part of the standard production process, so you receive a fully finished, publish-ready video rather than a silent visual.",
  },
  {
    question: "Can You Update an Existing Fintech Animation When Our Product or Pricing Changes?",
    answer:
      "Yes. Most projects are built so specific segments, like pricing tiers or feature callouts, can be revised without rebuilding the entire animation, which keeps ongoing updates fast and affordable.",
  },
];

export const metadata = {
  title: "Fintech Animation Service | Pixel Studios",
  description: "Pixel Studios' fintech animation service turns complex financial products, data, and compliance into clear video for users, investors, and regulators.",
};

export default function FintechAnimationPage() {
  return (
    <main>
      <Banner
        title="Fintech Animation That Builds Financial Trust"
        description="Why do so many fintech products get built brilliantly and explained badly? Because financial concepts are abstract, regulated, and often invisible on screen. Our fintech animation service turns payments, data, and compliance into video that users, investors, and regulators actually understand, without losing the accuracy your industry demands."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Fintech Animation"
        title="Why Animation Matters in the Fintech Industry?"
        description="What makes fintech uniquely difficult to market? Money movement
                is invisible, and the systems behind it are dense with
                terminology that means little to a first-time user. A payment
                API, a lending algorithm, or a blockchain settlement process
                cannot be photographed or demoed on a store shelf. Compliance
                requirements add another layer, since claims about security or
                returns need to be accurate down to the wording, and legal teams
                often slow down marketing timelines reviewing copy that still
                fails to explain the actual mechanism. Onboarding drop-off is
                high across the category, support teams field the same basic
                questions about how a product actually works, and investor decks
                packed with charts often fail to explain the mechanism that
                makes the business defensible in the first place, leaving even
                strong fundamentals underappreciated in a room full of competing
                pitches."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What changes when the mechanism becomes visible? Fintech motion
            graphics let a user see exactly how a payment routes, how a
            security layer protects their data, or how a lending decision gets
            made, which builds the trust financial products depend on before a
            customer will ever hand over their money. Companies using fintech
            explainer videos report smoother onboarding, fewer support tickets,
            and investor pitches that land faster because the mechanism behind
            the numbers is finally visible instead of implied. Compliance teams
            also benefit, since a well-reviewed animated explanation can be
            reused consistently across marketing, app onboarding, and investor
            materials without redrafting the same explanation in five different
            formats."
      />
      <ServicesSection 
        title="Animation Solutions for Fintech"
        description="What does a full-service fintech animation company actually need to cover? Everything from a homepage explainer to a compliance training module. These ten formats reflect the range of work most fintech companies need across their product, marketing, and investor relationships."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Common Fintech <span>Animation</span> Projects</>}
        description="Across payments platforms, lenders, and crypto products, three project types come up most often, each tied to a specific point of friction in the user or investor journey."
        features={whyChooseSectionFeatures}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Fintech <br />Animation Process</>}
        description="Financial products carry real compliance weight, so our process builds accuracy checks into every stage rather than treating them as a final review. Here is how a typical project runs."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="Explaining fintech well means understanding both the technology and the regulation around it. Here is what our fintech animation company brings to that balance."
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
