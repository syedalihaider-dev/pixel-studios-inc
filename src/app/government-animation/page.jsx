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
    title: "Public Awareness Videos",
    description: "Campaign-ready animation for public health, safety, and civic awareness initiatives, built to reach a broad and varied audience across every literacy level.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Training Videos",
    description: "Standardized training video content for agency staff, covering procedures, compliance, and internal policy, deployable consistently across departments and locations.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Videos",
    description: "Clear explainer videos for government programs, benefits, and processes that citizens need to understand and navigate without confusion or repeated calls to a help line.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Data-driven motion graphics for reports, public dashboards, and presentations that need to communicate clearly to a general audience unfamiliar with the underlying subject.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your program, audience, and any procurement or approval requirements to scope the right approach for your agency.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed in plain language and reviewed through your approval process before design begins.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is planned and approved before animation begins, with sensitivity to any pre-decisional content involved.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Visual assets are built to meet accessibility standards and communicate clearly to a broad, varied audience.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback and any required stakeholder review rounds along the way.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your public communication and internal channels require.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A government animation studio experienced with public sector communication and multi-stakeholder approval processes across multiple agency types."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every project starts from your actual program and audience, never a generic template repurposed from another agency."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built to match public communication deadlines and procurement schedules, even with multiple stakeholder reviews involved."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project end-to-end, coordinating with your agency's review process from start to finish."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Government Animation</span> Project
    </>
  );

const text =
    "Talk to our team about your program, your audience, and your procurement requirements, and we will scope the government animation that communicates clearly, meets your accessibility standards, and moves through your approval process smoothly from start to finish.";

const faqs = [
  {
    question: "What Should an Agency Look for When Choosing a Government Animation Studio?",
    answer:
      "Look for experience with public sector procurement processes, a portfolio of accessible and accurate public communication work, and a studio comfortable working within multi-stakeholder approval structures.",
  },
  {
    question: "How Does the Procurement Process Typically Work for Government Animation Services?",
    answer:
      "Processes vary by agency and jurisdiction, but typically involve a request for proposal, a scoped project response, and a formal vendor selection step before production begins.",
  },
  {
    question: "How Is Sensitive or Pre-Decisional Content Handled During Production?",
    answer:
      "We follow agreed confidentiality protocols and restricted access practices for any sensitive or pre-decisional content, with formal NDAs available where required.",
  },
  {
    question: "What's the Difference Between an Explainer Video and a Full Training Production?",
    answer:
      "An explainer video is typically shorter and focused on introducing a single concept or program to the public, while a full training production is longer and more detailed, built for staff who need comprehensive procedural knowledge.",
  },
  {
    question: "How Are Multiple Stakeholder Reviews and Approvals Managed?",
    answer:
      "We build defined review checkpoints into the project timeline at script, storyboard, and final animation stages, so each stakeholder group reviews at the appropriate point in production.",
  },
  {
    question: "Do Government Animation Projects Need to Meet Accessibility Standards Beyond Captions?",
    answer:
      "Often, yes. Depending on the agency and jurisdiction, requirements may include specific color contrast standards, audio description, and formatting compatible with assistive technology, which we account for during design.",
  },
  {
    question: "Can Government Animation Content Be Repurposed Across Multiple Channels?",
    answer:
      "Yes. A single piece of content can typically be adapted for agency websites, social media, in-office displays, and public presentations without a full new production.",
  },
  {
    question: "What Levels of Government Use Animation and Video Production Services?",
    answer:
      "We work with agencies at the federal, state, and local level, adapting our process to each agency's specific procurement and approval requirements.",
  },
  {
    question: "Can You Work Within a Fixed Government Budget or Grant-Funded Project?",
    answer:
      "Yes. We regularly scope projects to fit fixed budgets, including grant-funded initiatives, and can work with your team to prioritize the content that matters most within available funding.",
  },
  {
    question: "Do You Provide Multilingual Versions for Diverse Community Outreach?",
    answer:
      "Yes. Multilingual voiceover and subtitles are common for public awareness campaigns aimed at diverse community populations, and we scope these as part of the initial project discussion.",
  },
  {
    question: "Can Government Training Animation Be Integrated Into an Existing LMS?",
    answer:
      "Yes. We can package training content to be compatible with most common learning management systems used by government agencies for staff training and certification tracking.",
  },
  {
    question: "Do You Have Experience Working With Agency Communications and Legal Review Teams?",
    answer:
      "Yes. We regularly coordinate with agency communications, legal, and subject matter expert reviewers, building their review checkpoints directly into the production timeline.",
  },
  {
    question: "Can Government Animation Be Produced Under a Purchase Order or Contract Vehicle We Already Have?",
    answer:
      "In many cases, yes. We can discuss existing contract vehicles or purchase order requirements during the initial scoping conversation to determine the best path forward.",
  },
  {
    question: "How Do You Handle Requests for Revisions After a Policy Change Post-Launch?",
    answer:
      "We can revise specific segments affected by a policy change rather than requiring a full new production, keeping updates fast and cost-effective for ongoing public communication needs.",
  },
  {
    question: "Can You Support Emergency or Time-Sensitive Public Safety Communications?",
    answer:
      "Yes. For urgent public safety needs, we can prioritize expedited production, though the specific timeline depends on content complexity and available review capacity at the time.",
  },
  {
    question: "Do You Provide Closed Captioning and Sign Language Interpretation Options?",
    answer:
      "Yes. Closed captioning is included as standard, and sign language interpretation can be added for content requiring that level of accessibility support.",
  },
  {
    question: "Can You Work Under a Master Services Agreement for Multiple Departments Within One Agency?",
    answer:
      "Yes. A master services agreement can streamline procurement for agencies that expect ongoing or recurring animation needs across multiple departments.",
  },
  {
    question: "How Do You Handle Public Records Requests Related to Government Animation Projects?",
    answer:
      "We follow whatever records retention and disclosure requirements your agency specifies under applicable public records law, and can discuss specific handling requirements during project scoping.",
  },
  {
    question: "Can You Support Agencies With Limited Internal Communications Staff?",
    answer:
      "Yes. We regularly work with smaller communications teams, taking on more of the production planning and coordination work when internal bandwidth is limited.",
  },
  {
    question: "Do You Provide Content in Formats Suitable for Public Kiosks or Waiting Room Displays?",
    answer:
      "Yes. We can deliver content formatted for kiosk displays, waiting room screens, and other public-facing installations in addition to standard web and social formats.",
  },
];

export const metadata = {
  title: "Government Animation Services | Pixel Studios",
  description: "Pixel Studios' government animation services deliver public awareness, training, and explainer videos built for agencies at every level.",
};

export default function GovernmentAnimationPage() {
  return (
    <main>
      <Banner
        title="Government Animation Citizens Actually Understand"
        description="Public communication only works if the public actually understands it. Our government animation services turn policy, procedure, and public safety information into video that citizens and staff can follow, built for agencies that need accuracy, accessibility, and a defensible production process. Every project is built to move through your agency"
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Government Animation"
        title="Why Animation Matters in the Government Industry?"
        description="Government agencies communicate to an unusually broad audience,
                spanning different languages, literacy levels, and levels of
                familiarity with the subject matter, all while working within
                procurement processes and approval structures that add real time
                to any project. Public information often needs to meet specific
                accessibility standards, sensitive or pre-decisional content
                requires careful handling before release, and internal training
                materials frequently need updating as policies and regulations
                change. Written notices and static materials struggle to reach
                citizens who do not seek out government information proactively,
                which limits the actual impact of even well-written
                communication, no matter how accurate the underlying policy is."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Government animation services turn dense policy and procedure into
            video that a broader public actually watches and understands,
            extending the reach of public awareness campaigns beyond people who
            would seek out a written notice. Explainer videos for government
            programs can walk citizens through eligibility, procedures, or
            safety information in a format that works across literacy levels,
            and animation makes training content easier to standardize across
            large, distributed workforces. Agencies using government animation
            vendor partnerships report stronger public engagement, more
            consistent staff training outcomes, and content that supports
            transparency and accessibility goals at the same time, without
            adding significant burden to already stretched communications
            teams."
      />
      <ServicesSection 
        title="Animation Solutions for Government"
        description="What does a government animation vendor need to be able to deliver across an agency's communication channels?"
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
        title={<>Our Government <br />Animation Process</>}
        description="Public sector work carries its own approval and procurement structure, so our process is built to work within that structure rather than against it."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="Public communication has to be both accurate and accessible to succeed. Here is how our studio approaches that dual requirement."
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
