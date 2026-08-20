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
    title: "Patient Education",
    description: "Animation that helps patients understand a diagnosis, procedure, or treatment plan before and after a clinical visit, reducing anxiety and repeated questions.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Devices",
    description: "Medical device animation explaining function, benefits, and use for both clinical training and marketing, built from CAD or engineering data.",
    icon: "/industry/services-icon-02.png",
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Medical Animation",
    description:
      "Anatomically accurate medical animation explaining conditions, procedures, and treatment mechanisms for patient and provider audiences, verified against clinical source material.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Animation",
    description:
      "Detailed 3D surgical animations and device visualization built from medical imaging, CAD, or engineering data for precision at every stage of the procedure.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Videos",
    description:
      "Clear explainer videos that introduce a condition, treatment, or device in language patients and non-specialist audiences can follow without a medical background.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Training Videos",
    description:
      "Clinical and sales training video content that gives providers and reps a consistent, accurate way to explain a device or procedure to every patient or prospect.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your clinical content, medical data, and audience to scope the right animation approach for your goals.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed and checked against your clinical source material before design begins in earnest.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is mapped and approved before animation begins, so anatomical accuracy is confirmed early in the process.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Anatomical structures and device models are built to match your reference data with clinical precision throughout.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback and medical review rounds until every scene is accurate.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "A final medical accuracy review confirms the content before delivery in every format you need.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A healthcare animation company experienced with medical devices, pharma, and provider organizations across multiple clinical specialties."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every animation is built from your actual clinical content and data, never a generic anatomical stand-in reused across clients."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around product launches, conference dates, and clinical training rollouts, without compromising the review process."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project end-to-end, coordinating with your clinical and regulatory reviewers throughout."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Healthcare Animation</span> Project
    </>
  );

const text =
    "Talk to our team about your clinical content, your audience, and your accuracy requirements, and we will build the healthcare animation that helps patients, providers, and sales teams understand exactly what your medicine or device actually does, verified at every step of production.";

const faqs = [
  {
    question: "What's the Difference Between General Healthcare Animation and 3D Surgical Animation?",
    answer:
      "General healthcare animation covers a broad range of patient and provider content, while 3D surgical animation specifically visualizes a procedure in detailed, step-by-step anatomical accuracy, often used for clinical training or informed consent support.",
  },
  {
    question: "How Much Do Medical Animation Services Typically Cost?",
    answer:
      "Cost depends on anatomical complexity, animation length, and the level of medical review required. Most healthcare animation projects are scoped after an initial discovery call.",
  },
  {
    question: "How Is Medical and Anatomical Accuracy Verified During Production?",
    answer:
      "We build clinical review checkpoints into the production process at script, storyboard, and animation stages, so your medical team or a qualified reviewer confirms accuracy before the project moves forward at each step.",
  },
  {
    question: "What Information Do I Need to Provide to Start a Healthcare Animation Project?",
    answer:
      "Clinical reference materials, medical imaging or CAD data where relevant, and a clear sense of your target audience all help us scope an accurate project from the first discovery call.",
  },
  {
    question: "Should I Choose 2D or 3D Animation for My Healthcare Project?",
    answer:
      "3D tends to work best for anatomy and procedures where depth and spatial relationships matter, while 2D can work well for simpler conceptual explanations of a condition or process.",
  },
  {
    question: "How Are Healthcare Animations Used in Patient Consent and Education?",
    answer:
      "Animation can support informed consent conversations by giving patients a clearer visual understanding of a procedure before signing, though it typically supplements rather than replaces the formal consent discussion with a clinician.",
  },
  {
    question: "Do You Work Directly With Our Medical Reviewers During Production?",
    answer:
      "Yes. Clinical review is built into the process at script, storyboard, and animation stages, so your medical team confirms accuracy continuously rather than at one final sign-off.",
  },
  {
    question: "Can Healthcare Animation Be Used for Both Patients and Sales Teams From the Same Project?",
    answer:
      "Often, yes. We can produce a patient-facing version and a more technical sales or clinical version from the same underlying 3D assets, adjusting language and depth for each audience.",
  },
  {
    question: "Do You Provide Multilingual Voiceover for Patient Education Content?",
    answer:
      "Yes. Multilingual voiceover and subtitles are common for patient education materials, particularly for healthcare organizations serving diverse patient populations.",
  },
  {
    question: "Can Healthcare Animation Support Both Regulatory Submissions and Marketing Use?",
    answer:
      "Yes, though the two typically require different levels of detail and different review processes. We can scope both from the same underlying clinical content where appropriate.",
  },
  {
    question: "Do You Work With Medical Device Companies on Product Launch Timelines?",
    answer:
      "Yes. We regularly coordinate healthcare animation production around product launch and conference timelines, which often means working with confidential device data ahead of a public release.",
  },
  {
    question: "Can You Build Animation From Medical Imaging or Scan Data Directly?",
    answer:
      "Yes, where available, medical imaging or scan data can inform the accuracy of an animation, particularly for patient-specific or highly technical anatomical visualization.",
  },
  {
    question: "Do You Provide Both Short Patient-Facing Clips and Longer Clinical Training Videos?",
    answer:
      "Yes. We commonly produce a short, accessible patient version alongside a longer, more technical clinical training version from the same core research and review process.",
  },
  {
    question: "Can Healthcare Animation Be Reviewed by an Independent Medical Advisory Board?",
    answer:
      "Yes. If your organization requires sign-off from an independent medical advisory board, we can accommodate that as an additional review stage in the production timeline.",
  },
  {
    question: "Do You Produce Healthcare Animation for Conference and Trade Show Presentations?",
    answer:
      "Yes. Conference-ready animation is a common deliverable, often produced alongside a longer-form version of the same content for website or sales use.",
  },
  {
    question: "Can You Work With Both Pharmaceutical Companies and Medical Device Manufacturers?",
    answer:
      "Yes. We work across pharma, medical device, and provider organizations, adjusting our review process to match each sector's specific regulatory and accuracy requirements.",
  },
  {
    question: "Do You Provide Animation Support for Clinical Trial Recruitment Materials?",
    answer:
      "Yes. Clear, accurate animation explaining a trial's purpose and process can help potential participants understand what enrollment actually involves, supporting broader recruitment education efforts.",
  },
  {
    question: "Can Healthcare Animation Be Adapted for Different Specialties Within One Health System?",
    answer:
      "Yes. Once a base visual style and review process are established, adapting content for different specialties or departments within the same health system is typically faster than starting from scratch.",
  },
];

export const metadata = {
  title: "Healthcare Animation Services | Pixel Studios",
  description: "Pixel Studios' healthcare animation services deliver medically accurate 3D animation, patient education, and device training videos.",
};

export default function HealthcareAnimationPage() {
  return (
    <main>
      <Banner
        title="Healthcare Animation Built on Medical Accuracy"
        description="Patients understand a diagnosis better when they can see it. Our healthcare animation services translate anatomy, procedures, and medical devices into video that patients, providers, and sales teams can follow, verified for accuracy at every stage of production. Every animation is checked against your clinical source material by qualified reviewers before delivery, so the finished video stays medically accurate as well as genuinely easy to understand."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Healthcare Animation"
        title="Why Animation Matters in the Healthcare Industry?"
        description="Healthcare communication asks patients to understand anatomy,
                procedures, and treatment options that most people have never
                had reason to visualize before, and a rushed verbal explanation
                during a short appointment rarely sticks. Medical devices often
                work through mechanisms that are impossible to observe directly;
                sales and training teams need consistent, accurate ways to
                explain complex products, and any content produced needs
                verification from clinical or regulatory reviewers before it can
                be used with patients. Written materials and static diagrams
                struggle to convey movement, sequence, and spatial relationships
                that are often central to understanding a procedure or
                condition, leaving patients to fill in the gaps with guesswork
                or anxiety."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Healthcare animation makes anatomy, procedures, and device function
            visible in a way that improves patient comprehension and reduces
            anxiety before a procedure. 3D surgical animations can walk a
            patient through exactly what a procedure involves, medical animation
            for device companies can train sales teams and clinicians
            consistently, and a verified medical animation company builds
            accuracy checks into every stage rather than treating them as an
            afterthought. Healthcare organizations using healthcare animation
            report stronger patient understanding, more efficient clinician
            conversations, and training materials that stay consistent across
            every team member who uses them, regardless of how many times the
            material gets reused."
      />
      <ServicesSection 
        title="Animation Solutions for Healthcare"
        description="What does a complete healthcare animation offering need to cover, from the clinic to the sales floor? These four formats span patient-facing education through internal clinical training, all verified for medical accuracy before delivery."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Common Healthcare <span>Animation</span> Projects</>}
        description="Across providers, device companies, and pharma, two project types account for most of the healthcare animation work we produce."
        features={whyChooseSectionFeatures}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Healthcare <br />Animation Process</>}
        description="Medical accuracy is non-negotiable in this category, so our
                process builds clinical review into every stage rather than
                treating it as a final sign-off."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="An animation that looks polished but gets the anatomy wrong has failed at its one job. Here is how our studio keeps accuracy at the center of the work."
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
