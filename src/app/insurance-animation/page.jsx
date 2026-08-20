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
    title: "Insurance Explainer Videos",
    description: "Clear, jargon-free explainer videos for insurance that show what a policy covers, what it does not, and how claims actually work, built to stop confusion before it turns into a support ticket or an abandoned quote.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Insurance Product Videos",
    description: "Product-specific videos across auto insurance animation, health insurance explainer video content, life insurance animation, and property lines, walking customers through coverage tiers so they choose with confidence instead of guessing by price.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Insurance Sales & Pitch Videos",
    description: "Sales enablement video for agents and brokers, giving them one consistent, professional asset that explains complex coverage the same way in every conversation, whatever the rep's experience level.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Customer Testimonial & Trust Videos",
    description: "Animated storytelling that reinforces reliability and support, built to complement real testimonials and strengthen brand trust across marketing channels and renewal campaigns.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Educational Insurance Videos",
    description: "Broader educational content covering how insurance works, common terms, and the claims process, used to build long-term brand authority and ease first-time buyer anxiety about an unfamiliar purchase.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your policies, compliance requirements, and audience in detail, with input from your legal and compliance teams, to scope the right approach.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "Script and visual concept are developed around your actual coverage terms and reviewed for both clarity and compliance accuracy before design begins.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is mapped and approved before animation begins, so nothing overstates or understates coverage at any point in the video.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Visual assets and brand elements are built to match your identity and communicate clearly without oversimplifying terms customers genuinely need to understand.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback and compliance review rounds until every scene is accurate and clear.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "A final compliance and creative review confirms accuracy before delivery in every format your marketing and agent teams need.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "An insurance animation studio that understands the balance between simplifying complex terms and staying accurate to policy language across different lines of business."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every video starts from your actual policies and brand, never a generic template that could apply to any insurer in the market."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built to match your marketing calendar and regulatory update schedule, so materials are never out of date at launch."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project end to end, coordinating with your compliance and marketing teams throughout production."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Insurance Animation</span> Project
    </>
  );

const text =
    "If your policies are solid but your explanations are not landing, that is exactly what we fix. Talk to our team about your coverage, your compliance requirements, and your audience, and we will build the insurance animation that turns confused prospects into confident, informed policyholders who trust your brand from the first interaction. Bring us one policy or a full product line, and we will show you how much clearer your coverage story can be. The first conversation costs nothing, and it usually surfaces the exact confusion points your support logs have been flagging for months.";

const faqs = [
  {
    question: "What Happens to Our Insurance Animation Video When Policy Terms or Coverage Change?",
    answer:
      "We design videos with updatable segments where possible, so when terms, pricing, or coverage change, we revise the affected sections rather than rebuilding the whole video, saving both time and cost.",
  },
  {
    question: "Should We Use a Character-Led or Corporate Animation Style for Our Insurance Video?",
    answer:
      "It depends on brand and audience. A character-led style feels warmer for consumer-facing explainers, while a clean corporate style suits B2B insurance products and formal compliance-focused content.",
  },
  {
    question: "Can Insurance Animation Be Used for Agent or Broker Training as Well as Marketing?",
    answer:
      "Yes. The same core assets can be adapted into both customer-facing explainers and internal training content for agents and brokers, giving the whole organization one consistent way of explaining coverage.",
  },
  {
    question: "Is an Animated Insurance Video Legally Binding, or Just an Educational Summary?",
    answer:
      "It is an educational summary, not a legal document. Actual terms remain governed by your written policy documentation, and we recommend stating that disclaimer clearly in any customer-facing video we produce.",
  },
  {
    question: "How Do We Measure Whether an Insurance Explainer Video Is Reducing Support Calls or Improving Conversion?",
    answer:
      "Common measures include support ticket volume on covered topics before and after launch, video completion rates, and conversion lift on pages where the video sits beside a quote or application flow. Track a baseline first so improvement is provable, not assumed.",
  },
  {
    question: "What's the Difference Between a Standard 2D Explainer and a Scenario-Based 3D Insurance Animation?",
    answer:
      "A standard 2D explainer covers general coverage concepts efficiently. A scenario-based 3D animation walks through a specific real situation, like a car accident or home claim, in more visual detail, which builds stronger emotional understanding and trust.",
  },
  {
    question: "Can One Insurance Explainer Video Work Across Multiple States With Different Regulations?",
    answer:
      "Often, yes. Where regulatory variation exists, we build a core video structure with state-specific segments or disclaimers that can be swapped in, rather than producing entirely separate videos for every region.",
  },
  {
    question: "Can Insurance Animation Help With Policy Renewal Communications?",
    answer:
      "Yes. Short renewal-focused videos remind customers what they are covered for and highlight any policy changes, which can improve renewal rates compared to a plain renewal notice letter.",
  },
  {
    question: "How Quickly Can We Update an Insurance Explainer Video After Policy Changes?",
    answer:
      "For videos built with our updatable segment structure, most insurance policy changes video revisions turn around in one to two weeks, depending on how many scenes are affected and how quickly your compliance team can review the revised sections.",
  },
  {
    question: "Do You Work With Our Legal and Compliance Team During Production?",
    answer:
      "Yes. Compliance review is built into every stage of our process for insurance projects, with your legal and compliance stakeholders approving the script and storyboard before animation production ever begins.",
  },
  {
    question: "Can You Produce Videos for Multiple Insurance Lines Under One Brand?",
    answer:
      "Yes. Many carriers commission a series covering auto, home, health, and life products from one consistent visual system, which keeps the brand coherent while each line gets its own dedicated explainer.",
  },
];

export const metadata = {
  title: "Insurance Animation Services | Pixel Studios",
  description: "Pixel Studios' insurance animation services turn complex policies, claims, and coverage into clear video for customers, agents, and marketing.",
};

export default function InsuranceAnimationPage() {
  return (
    <main>
      <Banner
        title="Insurance Animation That Turns Fine Print into Trust"
        description="Why do insurance customers call support with questions the policy document already answers? Because insurance is built on fine print, and fine print rarely convinces or clarifies anything. Our insurance animation services translate policies, claims processes, and coverage details into video that customers actually understand, reducing confusion before it becomes a support ticket or a lost sale. Pixel Studios Inc. builds every insurance explainer to stay accurate to your actual policy language while remaining genuinely easy to follow, with your compliance team reviewing each stage before anything reaches a customer. From product explainers to claims walkthroughs, the goal is a brand that feels human and transparent in an industry that often feels the opposite."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Insurance Animation"
        title="Why Animation Matters in the Insurance Industry?"
        description="What actually stops insurance customers from understanding their own
                coverage? Policy documents are long, legally precise, and written
                for compliance first, so many customers only understand their
                coverage when they need to file a claim. Agents spend valuable
                time explaining policy terms before discussing products, while
                support teams answer the same questions because written documents
                are difficult to follow. Regulations and policy updates also
                change regularly, making communication even more challenging. The
                result is lower trust, higher support costs, and missed sales
                opportunities caused by poor communication rather than poor
                products."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What changes when policy language becomes something customers can
            watch? Insurance animation videos explain coverage, claims, and
            benefits in a clear visual format that improves understanding before
            customers contact an agent. They help reduce repetitive support
            calls, strengthen digital sales, and build trust through transparent
            communication. The same videos also help agents and brokers explain
            policies faster, creating smoother conversations and improving
            efficiency across the entire customer journey."
      />
      <ServicesSection 
        title="Animation Solutions for Insurance"
        description="What does a complete insurance animation video services offering look like? Five formats covering the entire customer relationship, from the first quote to the renewal notice, each built to reduce a specific point of confusion."
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
        title={<>Our Insurance <br />Animation Process</>}
        description="Insurance video compliance is not a final checkbox in our workflow. It is a review layer that runs through every stage, so nothing reaches animation that your legal team has not already approved on paper."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY PIXEL STUDIOS"
        title="Why Choose Pixel Studios?"
        description="Simplifying coverage without misstating it is the hardest part of insurance marketing video style. Here is how our insurance video animation company handles that balance."
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
