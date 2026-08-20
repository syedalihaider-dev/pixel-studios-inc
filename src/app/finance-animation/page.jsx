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
    title: "Explainer Videos",
    description: "Financial explainer videos that introduce a product, service, or concept clearly and accurately, built for client-facing use across digital and in-person channels, from a website to a branch office screen.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "Data visualization and motion graphics that make performance data, market trends, and portfolio information easier to understand at a glance, without oversimplifying the numbers behind them.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Videos",
    description: "Institutional video content for leadership communications, investor relations, and brand storytelling within financial services, built to reflect the stability and professionalism the sector demands.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Product Demos",
    description: "Walkthroughs of banking apps, trading platforms, and financial tools that reduce onboarding confusion and support customer adoption from the very first login.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your products, compliance requirements, and audience to scope the right animation approach for your specific goals.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed around your actual products and reviewed for accuracy before design begins in earnest.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is mapped and approved before animation begins, so pacing and messaging are locked in early.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Visual assets and data visualizations are built to match your brand and communicate clearly without oversimplifying key details.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback and compliance review rounds until every scene is accurate.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "A final compliance and creative review confirms accuracy before delivery in every format you need.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A finance animation production partner experienced with banks, investment firms, and fintech companies across different regulatory environments and jurisdictions."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every video starts from your actual products and brand, never a generic template that could belong to any financial institution."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built to match your marketing calendar and product launch schedule, even with compliance review built into every stage."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project end-to-end, coordinating with your compliance and marketing teams throughout production."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Finance Animation</span> Project
    </>
  );

const text =
    "Talk to our team about your products, your compliance requirements, and your audience, and we will build the finance animation that turns dense financial concepts into content your clients actually understand and trust, from a single explainer to a full library of client-facing video.";

const faqs = [
  {
    question: "What's the Difference Between a Finance Video and a Finance Animation?",
    answer:
      "A finance video typically refers to live-action or presenter-led content, while finance animation uses motion graphics, illustration, or 3D visuals to explain concepts, data, or products without filming a physical presenter.",
  },
  {
    question: "How Much Does a Finance Animation Cost?",
    answer:
      "Finance Animation Production cost depends on complexity, length, and how much data visualization or compliance review is involved. Most projects are scoped after an initial discovery call.",
  },
  {
    question: "Which Company Creates Animated Videos for Financial Services?",
    answer:
      "Pixel Studios produces finance animation for banks, investment firms, and fintech companies, working within the compliance and accuracy standards financial services content requires.",
  },
  {
    question: "How Long Does It Take to Produce a Financial Animation?",
    answer:
      "Most Financial Services Video Production projects take three to six weeks from discovery to delivery, depending on complexity and compliance review cycles.",
  },
  {
    question: "Who Offers Finance Animation Services for Banks and Fintech Startups?",
    answer:
      "We work with both established banks and early-stage fintech startups, adapting the production process to fit each client's compliance requirements and internal review structure.",
  },
  {
    question: "Why Should Financial Companies Use Animated Videos?",
    answer:
      "Animated video simplifies complex financial concepts, builds client trust through clarity, and gives advisor teams a consistent way to explain products across every client conversation, which written material alone struggles to achieve.",
  },
  {
    question: "Do You Work With Our Compliance Team Before a Finance Animation Goes Live?",
    answer:
      "Yes. For any content involving specific claims about returns, fees, or regulatory status, we build in a compliance review checkpoint at the script stage, well before animation production begins.",
  },
  {
    question: "Can Finance Animation Be Updated When Rates or Product Terms Change?",
    answer:
      "Yes. Most projects are structured so specific segments, like rates or fee structures, can be revised without rebuilding the entire animation, keeping ongoing updates fast and affordable.",
  },
  {
    question: "Can You Localize Finance Animation for Multiple Markets or Languages?",
    answer:
      "Yes. Voiceover, subtitles, and on-screen text can all be localized, which is common for financial institutions operating across multiple regions or serving multilingual client bases.",
  },
  {
    question: "Do You Provide Both Consumer-Facing and Advisor-Facing Versions of the Same Content?",
    answer:
      "Yes. We often build a simplified consumer-facing explainer alongside a more detailed advisor-facing version from the same underlying script, so both audiences get the right level of depth.",
  },
  {
    question: "Can Finance Animation Support Both Retail Banking and Wealth Management Products?",
    answer:
      "Yes. We work across retail banking, wealth management, and institutional financial products, adjusting tone and complexity for each specific audience and product type.",
  },
  {
    question: "How Do You Ensure Data and Performance Figures Shown in Animation Stay Accurate?",
    answer:
      "We source all figures and data directly from your team and confirm them against your source documentation during script and storyboard review, before any animation work begins.",
  },
  {
    question: "Can Finance Animation Include Real-Time or Frequently Updated Data?",
    answer:
      "Live data integration is outside the scope of a standard animated video, but we can design content so figures and charts are easy to update on a defined schedule, such as quarterly performance reporting.",
  },
  {
    question: "Do You Provide Both Video and Static Infographic Versions of the Same Content?",
    answer:
      "Yes. We can produce a static infographic alongside the animated video from the same underlying data visualization work, giving you assets for both digital and print use.",
  },
  {
    question: "Can You Produce Finance Animation for Internal Employee Financial Wellness Programs?",
    answer:
      "Yes. Internal financial literacy and wellness content follows a similar approach to client-facing explainer videos, adjusted in tone and depth for an employee audience.",
  },
  {
    question: "Do You Work With Both Traditional Banks and Newer Digital-Only Financial Brands?",
    answer:
      "Yes. We work across traditional financial institutions and newer digital-first brands, adapting visual style and tone to match each brand's positioning.",
  },
  {
    question: "Can You Produce Finance Animation That Explains Risk Alongside Potential Returns?",
    answer:
      "Yes. Balanced, accurate risk communication is a standard part of our script development for any content discussing investment products, reviewed carefully against your compliance requirements.",
  },
  {
    question: "Do You Provide Ongoing Support for Recurring Quarterly Reporting Videos?",
    answer:
      "Yes. Recurring reporting content, such as quarterly performance updates, can be structured as an ongoing engagement so each new version reuses the established visual template and process, saving time on every cycle.",
  },
];

export const metadata = {
  title: "Finance Animation Service | Pixel Studios",
  description: "Pixel Studios' finance animation service turns investments, banking products, and compliance content into clear video for clients and stakeholders.",
};

export default function FinanceAnimationPage() {
  return (
    <main>
      <Banner
        title="Finance Animation That Makes Numbers Clear"
        description="Numbers alone rarely convince anyone of anything. Our finance animation service turns investment products, banking services, and compliance content into video that clients, partners, and internal teams can actually follow, built for an industry where trust and clarity carry more weight than flashy visuals. Every project is reviewed for both clarity and compliance accuracy before it ever reaches a client, so the finished animation stays true to your product documentation while still being genuinely easy to follow."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Finance Animation"
        title="Why Animation Matters in the Finance Industry?"
        description="Financial products and services are often explained through dense
                documentation and jargon that clients are unlikely to read
                closely, which leaves them making decisions without fully
                understanding what they are agreeing to. Advisors and
                relationship managers spend a meaningful part of every client
                conversation simply explaining basic mechanics before they can
                discuss strategy; compliance requirements mean marketing claims
                need to be worded precisely, and content often needs updating as
                products, rates, or regulations change. Static brochures and PDFs
                do not scale well across a growing client base or a large advisor
                network that needs to explain the same products consistently,
                which leaves plenty of room for inconsistent messaging between
                advisors."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Finance animation videos translate dense financial concepts into
            something a client can follow in a few minutes, which builds the
            kind of confidence that written disclosures alone rarely achieve.
            A clear financial explainer video can walk a prospective client
            through an investment product or banking service before they ever
            meet with an advisor, reducing pressure on client-facing teams while
            improving informed decision-making. Financial institutions using
            animated finance video content report stronger client engagement,
            more consistent advisor conversations, and marketing that builds
            trust instead of simply meeting a compliance requirement, which over
            time strengthens the relationship between the institution and the
            client."
      />
      <ServicesSection 
        title="Animation Solutions for Finance"
        description="What does a finance animation production partner need to cover across a full client relationship? These four formats span client-facing explainers through internal reporting content, all built to stay accurate to your actual products."
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
        title={<>Our Finance <br />Animation Process</>}
        description="Compliance accuracy matters as much as clarity in this category, so our process builds review checkpoints into every stage rather than saving them for the end."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="Explaining financial products well means balancing simplicity with precision. Here is how our team handles that balance for every client."
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
