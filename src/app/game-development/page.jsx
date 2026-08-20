import Banner from "@/components/Common/Banner/Banner";
import FullCycleSection from "@/components/GameDevelopment/FullCycleSection";
import GameArtSection from "@/components/GameDevelopment/GameArtSection";
import DistinguishesSection from "@/components/GameDevelopment/DistinguishesSection";
import LetCreateAmazingSection from "@/components/GameDevelopment/LetCreateAmazingSection";
import EnginesSection from "@/components/GameDevelopment/EnginesSection";
import TopRatedProjectsSection from "@/components/GameDevelopment/TopRatedProjectsSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TrustedClientsSection from "@/components/GameDevelopment/TrustedClientsSection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";


const bannerSlides = [
  {
    title: "Professional 2D Animation Services in the USA",
    description: "Why do most brands walk away from their 2D animation investment with a video their marketing team likes and their sales team never uses? Because most 2D animation studios are hired to produce something visually competent, and visual competence is not the same as commercial usefulness."
  },
  {
    title: "Award-Winning Digital Agency For Global Brands",
    description: "We craft digital experiences that engage audiences, elevate brands, and drive meaningful growth through innovative design and strategy."
  },
  {
    title: "Transform Your Vision Into Stunning Reality",
    description: "Partner with industry experts to bring your ideas to life. From concept to launch, we deliver excellence at every step of the journey."
  }
];


const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Outstaffing",
      text: "Outstaffing gives you direct access to individual specialists, developers, artists, and animators who integrate into your existing team and work under your technical and creative direction. You get the capability without the overhead of permanent hiring, and you retain full control over production priorities and workflow. This model works best for studios with strong project management in place that need to extend specific skills for a defined period."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Dedicated Team",
      text: "A dedicated team is a self-managed, cross-functional group of developers, artists, QA engineers, and project managers that operates as an extension of your organization with consistent personnel and established velocity. The dedicated team model suits clients running ongoing game development or multiple titles simultaneously, where production continuity and team cohesion directly affect output quality."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Managed Outsourcing",
      text: "Managed outsourcing places full delivery accountability on our side. You brief us on scope, quality bar, and milestone dates. We staff the project, manage the production, and deliver to spec. This model is right for clients without internal game development capacity who need a game built to a professional standard without building a production management function from scratch."
    }
  ];

const title = (<>
We make <span>great<br />videos</span>, just for you.
</>);

const text = "In a world of remixes, custom created videos are a breath of fresh air. You know that video is the future of marketing. What you might not know is that Pixel Studios helps make the video production process easier than ever before. If you have an idea for a video, we can do it.";

const faqs = [
  {
    question: "How much does an animation company cost?",
    answer:
      "The cost to hire an animation company can vary upon quality of animation, timeline of project, and expertise or brand name of the company. For a usual 30-second animated explainer video, the cost for production can be anywhere between $2500 and $5000. Whereas, if you opt for more detailed animation with custom characters, and professional artwork, the cost can easily go up to $7000 per minute of animation.",
  },
  {
    question: "What types of video content do you produce?",
    answer: "We produce various types of video content including explainer videos, promotional videos, corporate videos, training videos, and social media videos.",
  },
  {
    question: "What is your video production process like?",
    answer: "Our process typically includes discovery, scriptwriting, storyboarding, animation/production, voiceover, and final review with client revisions.",
  },
  {
    question: "What type of video is right for our business?",
    answer: "The right type of video depends on your specific goals. Explainer videos are great for products, while corporate videos are better for brand building.",
  },
  {
    question: "What makes a good video marketing strategy?",
    answer: "A good strategy focuses on your target audience, clear messaging, high-quality production, and effective distribution channels.",
  },
  {
    question: "What briefing materials do I need to provide?",
    answer: "We usually ask for your brand guidelines, key messaging, target audience details, and any specific ideas or references you have in mind.",
  },
  {
    question: "Does Video Animation focus on corporate video production?",
    answer: "Yes, we have extensive experience in creating professional corporate videos tailored to your company's identity and communication goals.",
  },
];

export const metadata = {
  title: "Game Development - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc Game Development page. We are an award-winning digital agency.",
};

export default function GameDevelopment() {
  return (
    <main>
      <Banner
        slides={bannerSlides}
      />
      <FullCycleSection />
      <GameArtSection />
      <DistinguishesSection />
      <LetCreateAmazingSection />
      <EnginesSection />
      <TopRatedProjectsSection />
      <CooperationModelsSection
        title="COOPERATION MODELS"
        description="Game development partnerships look different depending on what a client needs. We offer three engagement models designed to fit different project situations, team structures, and budget approaches. Every model operates with the same production discipline and quality standards."
        cards={cooperationModelsCards}
      />
      <TestimonialSection />
      <TrustedClientsSection />
      <FaqSection
        heading="FREQUENTLY ASKED QUESTION?"
        faqs={faqs}
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
    </main>
  );
}
