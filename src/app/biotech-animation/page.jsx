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
    title: "Animation for Gene Therapy, Cell Biology and Molecular Processes",
    description: "This is the science that is hardest to visualize: vector delivery, CRISPR-based editing, receptor binding, and protein-level interactions. As a 3D medical animation company, we work directly from your research data, molecular models, and published literature, so the animation reads as evidence rather than illustration. Every structure reflects current understanding of the biology, not a simplified stand-in that trades accuracy for visual polish.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Biotech Explainer Videos for Investors and Partners",
    description: "Fundraising moves faster when the science is easy to follow. Our biotech explainer work is built for pitch decks, data rooms, and partnering meetings, condensing a complex therapeutic platform into a few focused minutes. We work with your leadership team to find the parts of the science that actually move a funding decision, then build the biotechnology animation video around those moments so investors leave with a mental model they can repeat to their own partners.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Life Science Animation for Product Launches",
    description: "When a platform or therapy goes to market, medical product animation gives sales, marketing, and medical affairs one consistent asset that works everywhere: conference booths, physician education, digital campaigns, and internal training. In a regulated industry, that consistency matters. Every team touching the material needs confidence it says exactly what the science supports.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your research, data, and goals with your scientific and business stakeholders to understand the science, the audience, and what success looks like for this project.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A scientifically grounded script and visual concept are developed and checked against your source data before design work begins, so narrative and biology align from day one.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is mapped and approved, giving you full visibility into pacing, sequencing, and scientific framing before animation starts.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Molecular structures and cellular environments are built to match your research, with color and lighting choices that support comprehension rather than distract from it.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Approved storyboards move into full production, refined continuously against your team's scientific and creative feedback.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "A final scientific and creative review confirms accuracy before delivery in every format and resolution your team needs, from pitch decks to conference screens.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A medical animation studio with a track record across pharma, biotech, and med-tech, fluent in both the science and the stakeholders at every stage of your pipeline."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "No templates and no recycled assets. Every biotech animation starts from your specific research, mechanism, and messaging goals."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Structured production timelines keep your fundraising round, submission, or launch on schedule without cutting corners on scientific review."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project end to end, keeping scientific reviewers, regulatory advisors, and creative teams aligned throughout."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>BioTech Animation</span> Project
    </>
  );

const text = "Talk to our team about your gene therapy platform, molecular mechanism, or product launch, and we will show you how a scientifically accurate 3D medical animation moves your next investor conversation, submission, or launch forward with far less friction than a slide deck ever could. Bring us your data and your deadline. We will bring the scientific rigor and the visual craft to match.";

const faqs = [
  {
    question: "What Is Biotech Animation?",
    answer: "Biotech animation is 3D or 2D visual storytelling used to explain scientific concepts such as gene therapy mechanisms, cell biology, molecular processes, and product function in a way that stays accurate to the research and clear to non-scientific audiences, including investors, regulators, and patients.",
  },
  {
    question: "What Should 3D Medical Animation Cost?",
    answer: "3D Medical Animation Production Cost depends on scientific complexity, animation length, and the level of molecular or cellular detail required. Most biotech projects are scoped after a discovery call, once we understand the science, the audience, and how the finished video will be used.",
  },
  {
    question: "How Long Does It Take to Create a Biotech Explainer Video?",
    answer: "Most biotech explainer projects run four to eight weeks from discovery to delivery, depending on scientific complexity and how many review cycles your research or regulatory team requires along the way.",
  },
  {
    question: "How Can Biotech Animation Be Used?",
    answer: "It supports investor pitches, regulatory submissions, conference presentations, physician and patient education, sales enablement, and internal training. Any setting where a scientific concept needs to be explained clearly, consistently, and repeatedly benefits from one accurate animated reference.",
  },
  {
    question: "How Long Does Biotech Animation Production Take?",
    answer: "Production typically runs four to eight weeks from kickoff to final delivery. Highly technical mechanism of action animations with multiple rounds of scientific review can take somewhat longer to complete properly.",
  },
  {
    question: "What Are Animated Products of Biotechnology?",
    answer: "Common deliverables include mechanism of action videos, gene therapy explainers, cell and molecular process animations, product demonstration videos, and investor-facing biotechnology animation summaries built for fundraising and partnership conversations.",
  },
  {
    question: "Do You Work With Our Scientific Team During Production?",
    answer: "Yes. Scientific collaboration is built into every stage rather than treated as a one-time sign-off. Your researchers, medical writers, or regulatory advisors review the script, storyboard, and animation at each milestone, so accuracy is confirmed continuously instead of caught late.",
  },
  {
    question: "Can Biotech Animation Support a Regulatory Submission?",
    answer: "Yes. Biotechnology animation can support FDA, IRB, and other regulatory materials by giving reviewers a precise visual reference for a mechanism or process. It is typically used alongside written documentation, built to sit comfortably next to your regulatory language rather than contradict it.",
  },
];

export const metadata = {
  title: "Biotech Animation Service | Pixel Studios",
  description: "Pixel Studios delivers biotech animation service with built-in scientific review. Gene therapy, MOA, and investor videos that explain and convert.",
};

export default function BiotechAnimationPage() {
  return (
    <main>
      <Banner
        title="Biotech Animation That Makes Complex Science Fundable"
        description="Pixel Studios Inc. builds every biotechnology animation around accuracy first and polish second, because in this category the order matters. A beautiful animation that misrepresents the science costs you more credibility than having no visual at all. Whether you are preparing a Series A pitch, an IRB submission, or a physician education campaign, the goal stays the same: give your audience a clear, correct picture of the science in the shortest possible time."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Biotech Animation"
        title="Why Animation Matters in the BioTech Industry?"
        description="What makes biotech uniquely hard to market? You are selling ideas before you sell products. A vector delivery mechanism or a signaling cascade cannot be filmed, demoed, or displayed at a trade show booth. Static diagrams flatten that complexity into text and arrows, so pitch meetings get stuck explaining fundamentals instead of building conviction, and scientific advisory boards burn review cycles clarifying mechanisms instead of evaluating outcomes. Under tight funding windows and regulatory deadlines, unclear communication does not just slow a program down. It can stall it at the exact moment it needs momentum, sometimes costing a company a round or a partnership the science genuinely deserved to win."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What changes when the science becomes something people can watch? 3D medical animation lets an investor follow exactly how a therapy engages its target, frame by frame, without a single slide of dense text in the way. That clarity shortens due diligence, strengthens FDA and IRB submissions by giving reviewers an unambiguous visual reference, and turns technical content into a genuine fundraising asset. Teams that invest in biotech animation production services report faster stakeholder buy-in, fewer clarifying meetings, and a shared visual reference that keeps science, regulatory, marketing, and sales teams aligned on one accurate story."
      />
      <ServicesSection 
        title="Animation Solutions for BioTech"
        description="What does a biotech animation service actually need to cover? In our experience, four things: the science itself, the investors funding it, the market receiving it, and the review process that keeps all three honest. Our biotech animation production services are structured around exactly those four jobs."
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
        title={<>Our BioTech Animation <br />Process</>}
        description="How do we keep scientific accuracy and production speed from working against each other? By building review into every stage instead of saving it for the end. Here is how a typical project moves from first call to final delivery."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY PIXEL STUDIOS"
        title="Why Choose Pixel Studios?"
        description="Plenty of studios can animate a cell. Far fewer can defend that animation in front of your scientific advisory board. Here is what sets our work apart."
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
