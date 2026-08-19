import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/BiotechAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/BiotechAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/BiotechAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/BiotechAnimation/GreatVideosSection";
import FaqSection from "@/components/BiotechAnimation/FaqSection";

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
      <CostSection />
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
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
