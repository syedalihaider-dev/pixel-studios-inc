import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import IndustrySection from "@/components/Common/IndustrySection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import WonderingSection from "@/components/Common/WonderingSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const standoutFeatures = [
  {
    id: 1,
    title: "Employee Onboarding",
    description:
      "Video onboarding content that delivers the same quality of first-week experience to every new hire, regardless of their manager's communication style or availability.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Workforce Training",
    description:
      "Ongoing workforce training content for skills development, role transitions, and the continuous learning that organizations competing in fast-moving markets actually require.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Compliance and Safety Training",
    description:
      "Compliance and safety training video production that regulators accept and employees actually watch. The two requirements are not automatically in conflict.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Customer Education",
    description:
      "Customer education video content that reduces churn by ensuring customers understand the product deeply enough to get the value they paid for.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Product Knowledge Training",
    description:
      "Product knowledge training for sales teams, customer service teams, and channel partners who represent the product without having built it.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Academic Learning",
    description:
      "Curriculum-aligned academic video content that supplements instruction, supports learners who missed a concept in class, and provides the alternative explanation that a different learning style requires.",
    icon: "/icons/experienced.png"
  },
  {
    id: 7,
    title: "Online Course Development",
    description:
      "Online course video production for content creators, consultants, and educators building digital course libraries on platforms including Teachable, Thinkific, and proprietary LMS environments.",
    icon: "/icons/experienced.png"
  },
  {
    id: 8,
    title: "Internal Knowledge Sharing",
    description:
      "Internal knowledge transfer video content that captures institutional knowledge from subject matter experts and makes it accessible across the organization without requiring the expert to be present.",
    icon: "/icons/experienced.png"
  }
];

const industries = [
  {
    id: 1,
    title: "Animated Educational Videos",
    image: "/industry/01.png",
    text: "Animation for concepts, processes, and mechanisms that physical demonstration cannot show.",
    link: "#"
  },
  {
    id: 2,
    title: "Whiteboard Educational Videos",
    image: "/industry/02.png",
    text: "Progressive visual explanation for complex sequential content and conceptual frameworks.",
    link: "#"
  },
  {
    id: 3,
    title: "Motion Graphics Learning Videos",
    image: "/industry/03.png",
    text: "Data visualization and process diagrams in motion for training content that requires quantitative clarity.",
    link: "#"
  },
  {
    id: 4,
    title: "Instructor-Led Training Videos",
    image: "/industry/04.png",
    text: "On-camera presenter content for training programs that benefit from direct human instruction delivery.",
    link: "#"
  },
  {
    id: 5,
    title: "Interactive Learning Videos",
    image: "/industry/05.png",
    text: "Branching scenario and decision-point video for training contexts where the learner needs to practice judgment, not just receive information.",
    link: "#"
  },
  {
    id: 6,
    title: "Screen Recording Tutorials",
    image: "/industry/06.png",
    text: "Software and platform training videos with annotated screen capture for technology onboarding and digital skills development.",
    link: "#"
  },
  {
    id: 7,
    title: "Scenario-Based Training Videos",
    image: "/industry/06.png",
    text: "Realistic scenario videos for customer service training, sales training, and compliance training where the skill is demonstrated in a real-world context rather than described in the abstract.",
    link: "#"
  },
  {
    id: 8,
    title: "Blended Learning Content",
    image: "/industry/06.png",
    text: "Video components designed to integrate with live instruction, workbooks, and assessment tools in a complete blended learning program.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Employee Training Videos",
    description:
      "Employee training video production for onboarding, skills development, and process training. Built around the behavior the training is designed to change, not the information the department needs to have communicated.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "E-Learning Videos",
    description:
      "E-learning video production for digital learning platforms, LMS integration, and self-paced course content. SCORM-compatible deliverables for organizations managing learning completion and assessment data.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Learning Videos",
    description:
      "Corporate learning video production for organizations building internal knowledge bases, leadership development programs, and cross-functional training libraries.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Educational Animation Videos",
    description:
      "Educational animation services for concepts that text and static diagrams cannot communicate effectively. Abstract processes made concrete. Complex sequences made followable. Invisible mechanisms made visible.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Academic and Classroom Videos",
    description:
      "Academic video content for curriculum supplementation, flipped classroom delivery, and distance learning programs at K-12 and higher education levels.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Compliance Training Videos",
    description:
      "Compliance training video production that employees engage with rather than click through. The regulatory requirement is not the creative brief. The behavior change the regulation is designed to produce.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Product Training Videos",
    description:
      "Product training video production for customer education, sales enablement, and technical training content that reduces support burden by answering questions before they are asked.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Instructional Videos",
    description:
      "Instructional video production for step-by-step process guidance, procedural training, and how-to content that replaces the manual nobody reads.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Microlearning Videos",
    description:
      "Short-form microlearning video content targeting single concepts or skills in under five minutes. Built for the attention profile of working adults who do not have a training day. They have a training gap between meetings.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "LMS Training Content",
    description:
      "LMS-ready video production for platforms including TalentLMS, Docebo, Cornerstone, and custom LMS environments. File format, metadata, and SCORM packaging handled according to the platform's specifications.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
    title: '1 Improve Knowledge Retention',
    content: 'Learners retain information presented through video at significantly higher rates than information delivered through text-only materials. The combination of audio narration and synchronized visual explanation creates a dual-channel encoding that text cannot produce.'
  },
  {
    id: 2,
    title: '2 Simplify Complex Topics',
    content: 'Animation and visual explanation translate abstract concepts into concrete visual representations. A concept that requires three paragraphs of text to describe imprecisely can be demonstrated in thirty seconds of animation precisely.'
  },
  {
    id: 3,
    title: '3 Increase Learner Engagement',
    content: 'Video engagement rates are higher than document completion rates across every learning context measured. Learners who engage completely. Learners who complete have the opportunity to learn.'
  },
  {
    id: 4,
    title: '4 Support Self-Paced Learning',
    content: 'Video allows learners to pause, rewind, and rewatch the section that did not land the first time. A live trainer cannot be paused. A document does not know which paragraph the reader skipped.'
  },
  {
    id: 5,
    title: '5 Deliver Consistent Training',
    content: 'A well-produced training video delivers the same quality of instruction to every learner in every location at any time. Live delivery varies with the trainer. Video does not.'
  },
  {
    id: 6,
    title: '6 Reduce Training Costs',
    content: 'A training video produced once can be used indefinitely across an unlimited number of learners. The per-learner cost of video-based training drops with every additional person who watches it.'
  },
  {
    id: 7,
    title: '7 Improve Learning Accessibility',
    content: 'Video content with captions and audio description is accessible to learners with hearing and visual impairments, and to learners engaging with content in their second language.'
  },
  {
    id: 8,
    title: '8 Scale Training Across Teams',
    content: 'A global organization cannot put every employee in the same training room. Video-based corporate training videos scale to any organization size without proportionally increasing delivery cost.'
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Learning Goals and Discovery',
    content:
      'What does the learner need to be able to do after watching? That question is a brief one. Every production decision follows from a specific, measurable learning objective.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Curriculum and Content Review',
    content:
      'Subject matter expert consultation, existing content audit, and accuracy review before scripting begins. The script is built on a verified content foundation.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Scriptwriting and Instructional Design',
    content:
      'Scripts written by people who understand how people learn, not just how to write. Information sequenced for the learner’s cognitive pathway rather than the subject matter expert’s organizational preference.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Storyboarding',
    content:
      'Visual sequence mapped to the learning objective. Every visual element is justified by a specific instructional purpose.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Visual Design and Asset Creation',
    content:
      'Visual style established to serve the learning audience. Educational visual design is a different discipline from commercial visual design.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Video Production and Animation',
    content:
      'Production by the same team that developed the instructional design. No handoffs between creative and production that cause the learning logic to get lost in the translation.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Voiceover and Audio Production',
    content:
      'Voiceover pacing and tone calibrated to the learning context. Educational narration moves at a different tempo from commercial narration, and the difference matters for comprehension.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Quality Assurance and Learning Review',
    content:
      'Subject matter expert accuracy review alongside visual quality review. Both are required. A visually polished training video with a factual error is worse than an imperfect video that is correct.',
  },
  {
    id: 9,
    icon: '/animation.png',
    title: 'Final Delivery and LMS Integration',
    content:
      'Deliverables in every format the LMS requires. SCORM packaging, metadata completion, and upload testing, where the client needs integration support.',
  }
];

const title = (
  <>
    Start Your <span>Educational Video Production</span> Project Today
  </>
);

const text = "Most training programs that are not working have the same problem: the video was built around what the organization needed to say rather than what the learner needed to understand. Tell us the learning objective and the audience. We will build the rest.";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Instructional Design Expertise",
    text: "We approach educational video production as an instructional design problem first and a production problem second. The structure of the learning experience is as important as the quality of the video that delivers it."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Learning-Focused Storytelling",
    text: "Narrative and story structure are applied to educational content in a way that serves comprehension rather than entertainment. The two can coexist. Most educational video production does not attempt it."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Custom Educational Content",
    text: "Every educational video is produced for the specific learning objective, the specific audience, and the specific context in which it will be used. Template training videos applied regardless of fit are the reason most training programs report high completion and low behavior change."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "High-Quality Production Standards",
    text: "Broadcast-quality production on educational content. The learner's willingness to engage with training is partly determined by the signal the production quality sends about whether the organization values their time."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Scalable Learning Solutions",
    text: "From a single compliance training video to a full corporate learning library, we scale production capacity to the organization's content development needs."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Collaborative Development Process",
    text: "Subject matter expert collaboration is built into every stage of the production. The content accuracy review is not a final-stage checkbox. It is a production stage."
  },
  {
    id: 7,
    icon: "/game-development/managed-outsourcing.png",
    title: "Reliable Delivery Timelines",
    text: "Educational video production deadlines are real deadlines. Course launches, onboarding cycles, and compliance training windows do not move because the video is late."
  },
  {
    id: 8,
    icon: "/game-development/managed-outsourcing.png",
    title: "Dedicated Project Support",
    text: "One project manager from brief to LMS integration. One point of contact is responsible for every stage of the production."
  }
];

const wonderingIndustriesData = [
  {
    name: "Learning Content Complexity",
    intro:
      "A single-concept microlearning video costs less than a multi-module compliance training series. The instructional design investment scales with the complexity of the learning objective.",
    points: [
      "Instructional design requirements increase as learning objectives become more complex.",
      "Multi-module training programs require greater planning and production effort.",
      "Production scope is determined by educational outcomes rather than video length alone."
    ]
  },
  {
    name: "Video Length",
    intro:
      "Longer training videos require more scripting, more animation production, and more voiceover time. Most effective microlearning videos run three to five minutes. Module-level e-learning videos run eight to fifteen minutes.",
    points: [
      "Short microlearning videos typically run between three and five minutes.",
      "E-learning modules generally range from eight to fifteen minutes.",
      "Longer videos require additional scripting, editing, narration, and production resources."
    ]
  },
  {
    name: "Animation and Visual Style",
    intro:
      "Animated educational videos cost more than screen recording tutorials. The appropriate format is determined by the learning objective, not the production budget.",
    points: [
      "Animation requires additional design and production time.",
      "Screen recording tutorials provide a more cost-effective option for software training.",
      "Visual style should always support the intended learning outcome."
    ]
  },
  {
    name: "Instructional Design Requirements",
    intro:
      "Projects requiring learning needs analysis, curriculum design, and assessment development alongside video production cost more than projects where the learning structure already exists.",
    points: [
      "Learning needs analysis adds strategic planning to the project.",
      "Curriculum and assessment development increase instructional scope.",
      "Existing course structures reduce overall production complexity."
    ]
  },
  {
    name: "Voiceover and Localization",
    intro:
      "Professional voiceover, music, and translation for multilingual training content are standard service components priced transparently at the quote stage.",
    points: [
      "Professional narration improves learning effectiveness.",
      "Localization supports multilingual learners.",
      "Voiceover, music, and translation costs are included transparently in project quotes."
    ]
  },
  {
    name: "Interactive Learning Features",
    intro:
      "SCORM-compatible branching scenarios and decision-point video add production scope beyond standard linear video delivery.",
    points: [
      "Interactive scenarios increase learner engagement.",
      "SCORM compatibility supports LMS integration.",
      "Branching content requires additional scripting and development."
    ]
  },
  {
    name: "Production Timeline",
    intro:
      "Standard educational video productions are complete in four to six weeks. Rush delivery is available for training programs with fixed launch dates.",
    points: [
      "Typical production schedules range from four to six weeks.",
      "Rush delivery is available for urgent training launches.",
      "Timelines vary depending on project complexity and review cycles."
    ]
  }
];

const faqs = [
  {
    question: "How does educational video production help my business?",
    answer:
      "Educational video production reduces training delivery cost, improves knowledge retention compared to text-based materials, and delivers consistent instruction quality across all learners regardless of location, shift, or manager availability.",
  },
  {
    question: "What does educational video production include?",
    answer:
      "Learning objective development, script writing with instructional design review, storyboarding, visual design, video production, professional voiceover, audio production, and final delivery in LMS-compatible formats.",
  },
  {
    question: "How much does educational video production cost?",
    answer:
      "A three to five-minute microlearning video with animation starts around $3,000 to $6,000. A full compliance training module with SCORM delivery and scenario-based content runs $8,000 to $20,000. Itemized quotes within 48 hours.",
  },
  {
    question: "How long does it take to produce an educational video?",
    answer:
      "Most four to eight-minute educational videos are completed in four to six weeks from a brief sign-off, including subject matter expert review cycles. Rush delivery available for fixed training launch dates.",
  },
  {
    question: "Can educational videos improve employee training results?",
    answer:
      "Yes, consistently. Completion rates improve when training is engaging. Retention improves when information is presented visually alongside audio narration. Behavior change improves when the training is built around the specific behavior the organization needs to change.",
  },
  {
    question: "What is the difference between e-learning videos and training videos?",
    answer:
      "E-learning videos are components of a digital course or LMS program, typically designed with assessment, branching, or progress tracking. Training videos are standalone instructional videos that may or may not be delivered through an LMS. Both are production formats we deliver.",
  },
  {
    question: "Can educational videos be integrated into an LMS?",
    answer:
      "Yes. SCORM-compatible delivery, metadata completion, and upload support for major LMS platforms are standard components of our educational video production services.",
  },
  {
    question: "What information is needed to start an educational video project?",
    answer:
      "The learning objective, the learner audience, any existing content or curriculum documentation, the delivery platform, and the production timeline. Subject matter expert access for accuracy review is required for technical or compliance content.",
  },
  {
    question: "Are animated educational videos better for complex topics?",
    answer:
      "Yes, for most complex topics. Animation allows visual representation of processes, mechanisms, and concepts that text and static images cannot communicate with the same clarity or precision.",
  },
  {
    question: "Can educational videos be used for customer education?",
    answer:
      "Yes. Customer education video production reduces support ticket volume, improves product adoption, and decreases churn by ensuring customers understand how to get the value they paid for.",
  }
];

export const metadata = {
  title: "Educational Video Production Services | Improve Learning and Knowledge Retention | Pixel Studios",
  description: "Need educational video production services that learners actually finish? Pixel Studios builds e-learning, training, and corporate learning videos that improve outcomes. Get a quote.",
};

export default function EducationalVideoProductionPage() {
  return (
    <main>
      <Banner
        title="Educational Video Production Services | Improve Learning and Knowledge Retention"
        description="Why do most training programs report high completion rates and low behavior change? Because completion and comprehension are different metrics, most educational video production optimizes for the one that is easier to measure. A learner who clicked through a ten-module compliance training course and retained nothing has a 100% completion rate. The organization that measured that number and called it a success has a training problem masquerading as a training solution. Pixel Studios Inc. builds educational video production services around the second metric. What does the learner need to be able to do, understand, or apply after watching? That answer drives every creative and structural decision in the production."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for Education Video Production Services"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Educational Video Production Services for Every Learning Objective"
        description="Our educational video production covers every format a training and learning program requires."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TeamStandoutSection
        subtitle="HOW ORGANIZATIONS USE"
        title={<>How Organizations Use <span>Educational Video Production Services?</span></>}
        description="Educational video production supports onboarding, workforce training, compliance, customer education, academic learning, and knowledge sharing by delivering engaging content tailored to every learning objective."
        features={standoutFeatures}

      />
      <HowWeWorkSection
        heading="Why Educational Videos Are More Effective Than Traditional Learning Materials?"
        description="Educational videos improve retention, simplify complex topics, increase learner engagement, support self-paced learning, deliver consistent training, reduce costs, improve accessibility, and make learning easier to scale across organizations."
        accordionData={howWeWorkAccordionData}
      />
      <IndustrySection
        heading="Educational Video Formats We Produce"
        description="Our educational video production covers every major learning format, from animated explainers and whiteboard videos to interactive training, instructor-led sessions, software tutorials, and blended learning content."
        industries={industries}
        variant="gradient"
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Educational Video <br />Production Process</>}
        description="Every educational video follows a structured production process built around learning outcomes, instructional design, subject matter accuracy, and effective content delivery. From discovery through LMS integration, each stage is designed to help learners understand, retain, and apply information successfully."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY CHOOSE US"
        title="Why Choose Our Educational Video Production Company?"
        description="We combine instructional design, educational storytelling, subject matter collaboration, and broadcast-quality production to create learning videos that improve understanding, engagement, and measurable training outcomes."
        cards={cooperationModelsCards}
      />
      <WonderingSection
        subtitle="PRICING"
        title="Educational Video Production Pricing and Cost Factors"
        description="Educational video production cost is determined by content complexity, production format, and delivery requirements."
        data={wonderingIndustriesData}
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions About Educational Video Production Services"
        faqs={faqs}
      />
    </main>
  );
}
