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
    title: "Courses",
    description: "Full course modules built for schools, universities, and online learning platforms, designed to fit within existing curriculum structures.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Training",
    description: "Corporate and institutional training animation covering onboarding, compliance, and skills development for new and existing employees.",
    icon: "/industry/services-icon-02.png",
  },
  {
    id: 3,
    title: "Awareness",
    description: "Public awareness and educational campaigns built to inform broad audiences on important topics in an engaging, memorable format.",
    icon: "/industry/services-icon-03.png",
  },
];

const sliderItems = [
  {
    id: 1,
    title: "Whiteboard Animation",
    description: "Hand-drawn style whiteboard animation that builds a concept step by step, ideal for explaining processes and building sequential understanding one idea at a time.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Educational Videos",
    description: "Fully animated educational videos combining narration, visuals, and pacing designed for classroom, online, and self-paced learning environments.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Motion Graphics",
    description: "Data-driven and concept-driven motion graphics that make statistics, timelines, and abstract ideas easier to understand at a glance for students of any age.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "eLearning",
    description: "Animation built specifically for eLearning platforms, including interactive elements and SCORM-compliant packaging where required by your LMS.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your curriculum, audience, and learning goals to scope the right animation approach and format.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed around the specific learning outcome the video needs to support, in plain language for the target audience.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is planned and approved before animation begins, so pacing supports comprehension rather than working against it.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Visual assets and characters are built to match your brand and audience, from young learners to corporate teams.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until the content communicates clearly and holds attention.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your platform requires, including LMS-compatible packaging where needed.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "An education animation service with work across schools, edtech platforms, and corporate training teams of varying scale."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every video starts from your actual curriculum and audience, never a generic template repurposed for a different subject."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around semester schedules and training rollout dates, so content is ready when your term or program begins."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery, coordinating with your instructional designers."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Education Animation</span> Project
    </>
  );

const text =
    "If your lesson or training content deserves better retention than a slide deck delivers, talk to our team. We will scope the education animation your course, training program, or awareness campaign needs, built around how your audience actually learns and remembers. Whether you need a single lesson, a complete course series, or ongoing educational content, we create animation that improves understanding, supports long-term retention, and fits the platforms your learners already use. The first conversation is free, and it helps identify the best approach for your learning objectives, audience, and delivery format.";

const faqs = [
  {
    question: "How Much Does an Educational Animation Service Cost?",
    answer:
      "Educational animation cost depends on style, length, and complexity, particularly whether the project needs custom characters or data visualization. Most projects are scoped after an initial discovery call.",
  },
  {
    question: "What's the Ideal Length for an Educational Animation Video?",
    answer:
      "Most educational content performs best between two and five minutes, long enough to cover a concept fully but short enough to hold attention, especially for younger audiences.",
  },
  {
    question: "What's the Difference Between 2D, 3D, and Whiteboard Animation for Educational Content?",
    answer:
      "2D animation suits most concept explanations and is cost-effective, 3D adds depth for spatial or scientific topics, and whiteboard animation works well for sequential, step-by-step processes.",
  },
  {
    question: "How Long Does Animation Production Take?",
    answer:
      "Most educational animation projects take three to six weeks from discovery to delivery, depending on length and complexity.",
  },
  {
    question: "What Is the Meaning of Animator in Education?",
    answer:
      "In an educational context, an animator is the artist who builds the visual and motion elements that bring a lesson or concept to life on screen, working alongside instructional designers and subject matter experts.",
  },
  {
    question: "What Does an Animator Do for Kids' Content Specifically?",
    answer:
      "For children's educational content, animators focus on character appeal, simplified visual language, and pacing suited to shorter attention spans, while still keeping the underlying concept accurate.",
  },
  {
    question: "How Do You Optimize an Educational Animation Video for YouTube Specifically?",
    answer:
      "We consider thumbnail-friendly framing, a strong hook in the first few seconds, and pacing that supports watch time, all while keeping the educational content clear and accurate.",
  },
  {
    question: "Do You Provide Captions, Subtitles, or Multilingual Voiceovers for Accessibility?",
    answer:
      "Yes. Captions, subtitles, and multilingual voiceover options are available to support accessibility and reach broader audiences.",
  },
  {
    question: "Can Educational Animations Be Integrated Into an LMS or Made SCORM-Compliant?",
    answer:
      "Yes. We can package deliverables to be SCORM-compliant and compatible with most common learning management systems.",
  },
  {
    question: "How Many Revisions Are Included, and Who Owns the Final Video?",
    answer:
      "Most projects include two to three revision rounds, and you own the final deliverables once the project is complete.",
  },
  {
    question: "Can Educational Animation Include Assessment or Quiz Elements?",
    answer:
      "Yes. For interactive eLearning projects we can build embedded questions or checkpoints, depending on your LMS capabilities and instructional design requirements.",
  },
  {
    question: "Do You Work With Instructional Designers or Subject Matter Experts on Our Team?",
    answer:
      "Yes. Most projects involve close collaboration with your instructional designers or subject matter experts throughout script and storyboard development to keep content accurate and pedagogically sound.",
  },
  {
    question: "Can the Same Educational Animation Be Reused Across Multiple Courses or Cohorts?",
    answer:
      "Yes. Once produced, an educational animation can be reused across multiple course sections, semesters, or training cohorts without additional production cost.",
  },
  {
    question: "Can You Produce a Series of Related Educational Animations for a Full Curriculum?",
    answer:
      "Yes. Many schools and training teams commission a series covering multiple related topics under one consistent visual style, which is often more cost-effective than producing each video separately.",
  },
  {
    question: "What Age Groups Can Educational Animation Be Designed For?",
    answer:
      "We create educational animation for every age group, from early childhood through adult professional training, adjusting the visual style, pacing, and language to match the intended audience.",
  },
  {
    question: "Can You Adapt an Existing Curriculum Into Animated Content, or Do We Need a New Script?",
    answer:
      "We can adapt your existing curriculum into an animation script, saving time while keeping the content aligned with what your learners already study.",
  },
  {
    question: "Do You Offer Different Visual Styles for Different Subjects, Like Science Versus History?",
    answer:
      "Yes. We tailor the visual style to each subject, from technical diagram-driven science animations to character-led storytelling for history and social studies.",
  },
  {
    question: "Can Educational Animation Be Updated if Curriculum Standards Change?",
    answer:
      "Yes. Where possible, we update only the affected scenes rather than rebuilding the entire animation, making curriculum revisions faster and more cost-effective.",
  },
  {
    question: "Do You Offer Package Pricing for Schools or Districts Producing Multiple Videos?",
    answer:
      "Yes. Schools and districts producing multiple videos typically receive better per-video pricing, and we can provide a custom package during the discovery stage.",
  },
  {
    question: "Can Educational Animation Be Produced in a Series With a Consistent Host Character?",
    answer:
      "Yes. A recurring host or guide character is a popular approach for course series, creating familiarity and continuity across multiple lessons or training modules.",
  },
];

export const metadata = {
  title: "Education Animation Service | Pixel Studios",
  description: "Pixel Studios' education animation service turns lessons, training, and complex topics into engaging video that students and learners retain.",
};

export default function EducationAnimationPage() {
  return (
    <main>
      <Banner
        title="Education Animation That Actually Gets Retained"
        description="Why do so many students forget a lesson within a week of learning it? Because reading and lecture alone are not how most people retain complex information. Our education animation service turns lessons, training modules, and difficult concepts into video that learners actually remember, built for schools, edtech platforms, and training teams alike. Every project is built around your actual curriculum and learning objectives, not a generic template, so the finished video supports the specific outcome your course or program is measuring."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Education Animation"
        title="Why Animation Matters in the Education Industry?"
        description="What makes educational content so hard to deliver effectively?
                Attention spans are short, and abstract or highly technical
                concepts are difficult to explain through text or static slides
                alone. Educators and training teams need content that supports
                different learning styles, while LMS platforms and YouTube demand
                more engaging formats than written material can provide. Content
                also needs to remain accessible across languages and abilities,
                yet many organizations continue relying on outdated resources
                because producing new material takes too much time and budget."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What changes when a lesson becomes something learners watch rather
            than read? Animation improves comprehension and retention,
            particularly for spatial, sequential, and process-based concepts
            that are difficult to explain with text alone. Whiteboard animation
            for schools and educational animation videos consistently improve
            engagement, completion, and knowledge recall. Schools, universities,
            and training teams gain content that performs equally well in the
            classroom, inside an LMS, or on YouTube, extending the value of a
            single production across multiple courses and audiences."
      />
      <ServicesSection 
        title="Animation Solutions for Education"
        description="What does a complete education animation service offer beyond a single explainer? These four formats span quick concept videos through full eLearning modules, built to fit whatever platform your learners actually use."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Common Education <span>Animation</span> Projects</>}
        description="Across schools, edtech platforms, and corporate training teams, three project types account for most of the work we produce, each tied to a measurable learning outcome."
        features={whyChooseSectionFeatures}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Education <br />Animation Process</>}
        description="Retention is the real goal, not just visual polish, so our process keeps instructional design in view at every stage. Here is how a project runs from brief to delivery."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY PIXEL STUDIOS"
        title="Why Choose Pixel Studios"
        description="An educational video that looks nice but does not teach anything has failed at its one job. Here is how our approach keeps comprehension at the center of the work."
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
