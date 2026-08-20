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
    title: "Corporate Videos",
    description: "Polished corporate video content for leadership communications, company milestones, and external-facing brand storytelling, produced to a consistent standard across every business unit and region.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Training Videos",
    description: "Scalable training video content for onboarding, compliance, and skills development, built to be deployed across large, distributed teams without losing quality between locations.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Videos",
    description: "Enterprise explainer video animations that clarify complex products, processes, or organizational changes for internal or external audiences, built to reduce repeated questions and confusion.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Data-driven motion graphics for reporting, internal dashboards, and executive presentations that need to communicate quickly and clearly to a busy leadership audience.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your organizational structure, stakeholders, and goals to scope a process that fits how your teams actually approve work.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed and routed through your review structure before design begins, so approvals happen at the right stage.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is planned and approved before animation begins, with sign-off built in at the right stakeholder level for each department involved.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Visual assets are built to match your brand guidelines precisely, with governance in mind for reuse across departments and future projects.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds and coordinated across every reviewing stakeholder without slowing the schedule.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format and language your organization requires, ready for immediate deployment.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "An enterprise animation company experienced with large organizations, multi-stakeholder approval chains, and multilingual production requirements across industries."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every project starts from your actual brand and organizational structure, never a generic template applied regardless of client."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built to match enterprise deadlines, even with multiple review cycles and departments involved."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the relationship, coordinating across your departments and stakeholders so nothing falls through the cracks."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Enterprise Animation</span> Project
    </>
  );

const text =
    "Talk to our team about your organization, your stakeholders, and your production needs, and we will build the enterprise animation partnership that keeps every department consistent, on brand, and moving at the pace your business actually requires, from the first internal update to your next global campaign.";

const faqs = [
  {
    question: "How Does the Production Process Work When Multiple Stakeholders Need to Review and Approve?",
    answer:
      "We build a review structure into the project plan from the start, with defined checkpoints at script, storyboard, and final animation stages, so every stakeholder group reviews at the right time rather than all at once.",
  },
  {
    question: "Can an Enterprise Animation Studio Work Within Our Existing Brand Guidelines?",
    answer:
      "Yes. We work directly from your brand guidelines and style guide, and can also help formalize a motion design system if one does not already exist for video content.",
  },
  {
    question: "Do Animation Studios Sign NDAs and Handle Project Data Securely?",
    answer:
      "Yes. NDAs are standard on enterprise projects, and we follow secure file handling practices for any confidential product, financial, or organizational information shared during production.",
  },
  {
    question: "What Pricing Models Are Available for Enterprise Clients Needing Multiple Videos?",
    answer:
      "Retainer and volume-based pricing are both available for enterprise clients with ongoing or recurring animation needs, typically offering better per-video value than one-off projects.",
  },
  {
    question: "Can You Produce Animated Content in Multiple Languages for Global Teams?",
    answer:
      "Yes. Multilingual animated video production is common for enterprise clients, with voiceover, subtitles, and on-screen text localized for each target market.",
  },
  {
    question: "Should an Enterprise Team Hire an Outside Studio or Build In-House Capability?",
    answer:
      "It depends on volume and cadence. Teams with occasional or highly variable needs typically get more value from an outside partner, while teams producing very high volumes of similar content may benefit from a hybrid model.",
  },
  {
    question: "What Does the RFP or Vendor Selection Process Typically Look Like?",
    answer:
      "Most enterprise clients request a portfolio review, a scoped proposal against specific project requirements, and a reference check before moving forward, and we are glad to support each of those steps directly.",
  },
  {
    question: "Who Owns the Animation Assets After a Campaign Runs Across Multiple Channels?",
    answer:
      "You own your final deliverables and can reuse them across internal and external channels for as long as they remain relevant to your organization.",
  },
  {
    question: "Can You Build a Reusable Brand Motion System for Our Organization?",
    answer:
      "Yes. For clients producing recurring content, we can develop a broader brand motion system covering colors, typography, and animation style, so future videos stay consistent even across different project teams.",
  },
  {
    question: "How Do You Handle Projects That Span Multiple Business Units With Different Sub-Brands?",
    answer:
      "We build a shared visual framework that flexes for each sub-brand's specific identity while staying recognizably part of the parent organization, which keeps everything coherent without forcing every unit into an identical look.",
  },
  {
    question: "Can Enterprise Animation Support Both Internal Training and External Marketing From One Engagement?",
    answer:
      "Yes. Many enterprise clients use the same production partnership for both internal and external content, since the underlying process for stakeholder review and brand governance applies equally to each.",
  },
  {
    question: "Do You Provide a Dedicated Account Manager for Ongoing Enterprise Relationships?",
    answer:
      "Yes. Ongoing enterprise engagements are supported by a dedicated account manager who understands your organization's structure, brand guidelines, and review process, rather than starting fresh with every new request.",
  },
  {
    question: "Can You Support a Global Rollout Across Multiple Regional Offices Simultaneously?",
    answer:
      "Yes. We regularly coordinate multilingual, multi-region rollouts, delivering localized versions of the same core content to different offices on a synchronized timeline.",
  },
  {
    question: "What Happens if Our Organization Restructures Mid-Project?",
    answer:
      "We stay flexible around organizational change, adjusting the review structure and stakeholder list as needed without restarting the entire project from scratch.",
  },
  {
    question: "Can You Support Recurring Quarterly or Annual Content Needs on a Retainer?",
    answer:
      "Yes. A retainer arrangement works well for organizations with predictable, recurring content needs, giving you priority scheduling and typically better per-project pricing than one-off engagements.",
  },
  {
    question: "Do You Provide Templates or Motion Graphics Kits Our Internal Team Can Reuse?",
    answer:
      "Yes. For clients with internal editing capability, we can provide motion graphics templates and brand kits that your team can adapt for smaller, lower-stakes internal updates between full productions.",
  },
  {
    question: "How Do You Handle Confidential Financial or Strategic Information During a Project?",
    answer:
      "We work under an NDA whenever confidential financial, strategic, or organizational information is shared, with secure file handling practices in place throughout production.",
  },
  {
    question: "Can You Support a Rebrand That Requires Updating Existing Video Assets?",
    answer:
      "Yes. Where existing animation assets can be updated to reflect a new brand identity rather than rebuilt from scratch, we assess that option first to save time and budget.",
  },
];

export const metadata = {
  title: "Enterprise Animation Services | Pixel Studios",
  description: "Pixel Studios' enterprise animation services deliver corporate video, training, and explainer content at scale, built for large, multi-stakeholder teams.",
};

export default function EducationAnimationPage() {
  return (
    <main>
      <Banner
        title="Enterprise Animation Built for Scale"
        description="Large organizations do not need one video. They need a system that produces consistent, on-brand video across dozens of teams, markets, and stakeholders without losing quality along the way. Our enterprise animation services are built for exactly that kind of scale, from internal communications to global training rollouts. Every engagement is built around your actual approval structure and brand governance, not a one-off creative project, so the same standard holds whether a video comes from HR, marketing, or the executive team."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Enterprise Animation"
        title="Why Animation Matters in the Enterprise Industry?"
        description="Large organizations run video projects across multiple
                departments, regions, and brand sub-lines at once, and keeping
                all of that visually consistent is a real operational challenge.
                Stakeholder approval chains are longer, legal and compliance
                review adds time to every project, and content often needs to be
                localized for multiple markets and languages. Internal teams
                frequently lack the production bandwidth to keep up with demand
                from HR, marketing, product, and leadership simultaneously, and
                a patchwork of vendors used across departments tends to produce
                inconsistent quality and messaging that undercuts a unified
                brand. Over time, that inconsistency becomes visible to
                employees and customers alike, making the organization feel less
                coordinated than it actually is."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Enterprise animation services solve that by giving large
            organizations a single, reliable production partner who understands
            how to work within complex approval structures. A corporate
            animation studio that has built processes for multi-stakeholder
            review, brand governance, and multilingual delivery can produce
            content faster and more consistently than juggling multiple smaller
            vendors. Companies using enterprise animation studio partnerships
            report stronger brand consistency across departments, faster
            turnaround on recurring content needs, and a single point of
            accountability instead of managing several disconnected production
            relationships. That consolidation also tends to reduce total
            production cost once every department's spend is considered
            together."
      />
      <ServicesSection 
        title="Animation Solutions for Enterprise"
        description="What does an enterprise animation company actually need to deliver across a large organization? These four formats cover the range most enterprise teams need, from internal leadership updates to external brand storytelling, all built to the same governed brand standard."
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
        title={<>Our Enterprise <br />Animation Process</>}
        description="Enterprise work moves through more approval layers than a typical
                project, so our process is built to keep that structure
                predictable rather than a source of delay."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY PIXEL STUDIOS"
        title="Why Choose Pixel Studios"
        description="Plenty of studios can make one good video. Fewer can do it consistently across dozens of stakeholders and departments. Here is how we handle that difference."
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
