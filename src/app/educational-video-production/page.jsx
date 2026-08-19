import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/EducationalVideoProduction/CostSection";
import StatsSection from "@/components/EducationalVideoProduction/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/EducationalVideoProduction/HowWeWorkSection";
import SupportSection from "@/components/EducationalVideoProduction/SupportSection";
import WhyInvestSection from "@/components/EducationalVideoProduction/WhyInvestSection";
import IndustrySection from "@/components/Common/IndustrySection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/EducationalVideoProduction/GreatVideosSection";
;
import CooperationModelsSection from "@/components/EducationalVideoProduction/CooperationModelsSection";
import WonderingSection from "@/components/EducationalVideoProduction/WonderingSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/EducationalVideoProduction/FaqSection";











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
      <StatsSection />
      <ServicesSection 
        title="Educational Video Production Services for Every Learning Objective"
        description="Our educational video production covers every format a training and learning program requires."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection />
            <TeamStandoutSection
        subtitle="HOW ORGANIZATIONS USE"
        title={<>How Organizations Use <span>Educational Video Production Services?</span></>}
        description="Educational video production supports onboarding, workforce training, compliance, customer education, academic learning, and knowledge sharing by delivering engaging content tailored to every learning objective."
        features={standoutFeatures}
        
      />
      <HowWeWorkSection />
      <IndustrySection 
        heading="Educational Video Formats We Produce"
        description="Our educational video production covers every major learning format, from animated explainers and whiteboard videos to interactive training, instructor-led sessions, software tutorials, and blended learning content."
        industries={industries}
        variant="gradient"
      />
      <WhyInvestSection />
      <CooperationModelsSection />
      <WonderingSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
