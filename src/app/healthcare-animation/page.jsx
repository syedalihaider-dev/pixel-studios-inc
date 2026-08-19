import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/HealthcareAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/HealthcareAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/HealthcareAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/HealthcareAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/HealthcareAnimation/GreatVideosSection";
import FaqSection from "@/components/HealthcareAnimation/FaqSection";

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
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Healthcare"
        description="What does a complete healthcare animation offering need to cover, from the clinic to the sales floor? These four formats span patient-facing education through internal clinical training, all verified for medical accuracy before delivery."
        sliderItems={sliderItems}
      />
      <WhyChooseSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
