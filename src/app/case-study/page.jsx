import Banner from "@/components/Common/Banner/Banner";
import TrustedClientsSection from "@/components/CaseStudy/TrustedClientsSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FeaturedProjects from "@/components/CaseStudy/FeaturedProjects";
import { Metadata } from "next";

const industries = [
  {
    id: 1,
    title: "Retail & E-commerce",
    image: "/industry/01.png",
    text: "Boost sales and engage shoppers with stunning product animations and explainer videos tailored for e-commerce platforms.",
    link: "#"
  },
  {
    id: 2,
    title: "Professional Services",
    image: "/industry/02.png",
    text: "Establish trust and clearly communicate complex value propositions with corporate animations designed for B2B success.",
    link: "#"
  },
  {
    id: 3,
    title: "Software & Tech",
    image: "/industry/03.png",
    text: "Simplify software demos and highlight features effectively with dynamic SaaS animation and UI/UX motion graphics.",
    link: "#"
  },
  {
    id: 4,
    title: "Medical & Biotech",
    image: "/industry/04.png",
    text: "Visualize complex biological processes and medical devices accurately with specialized 3D scientific animations.",
    link: "#"
  },
  {
    id: 5,
    title: "Education",
    image: "/industry/05.png",
    text: "Enhance learning experiences and increase student retention with engaging educational animations and e-learning courses.",
    link: "#"
  },
  {
    id: 6,
    title: "Real Estate",
    image: "/industry/06.png",
    text: "Showcase properties and architectural designs with immersive 3D walkthroughs and real estate visualization.",
    link: "#"
  }
];

export const metadata = {
  title: "Pixel Studios Inc - Case Study",
  description: "We at Pixel Studios Inc. take immense pride in our comprehensive case studies that highlight our successful projects across diverse industries. Each case study is a testament to our team’s creativity, technical expertise, and dedication to delivering exceptional results for our clients.",
  keywords: "Best Animation Studio In India, 2D Animation Studio, 3D Animation Studio, Explainer Videos, Whiteboard Animation, Motion Graphics, Character Animation",
}

export default function CaseStudyPage() {
  return (
    <main>
      <Banner
        title="Professional 2D Animation Services in the USA"
        description="Why do most brands walk away from their 2D animation investment with a video their marketing team likes and their sales team never uses? Because most 2D animation studios are hired to produce something visually competent, and visual competence is not the same as commercial usefulness."
        showPlayButton={true}
      />
      <div style={{ background: "radial-gradient(60.57% 91.94% at 69.22% 43%, #19042D 0%, #19042D 100%)" }}>
        <FeaturedProjects />
        <TestimonialSection />
      </div>
      <TrustedClientsSection />
      <IndustrySection 
        heading="We've delivered results for companies in every industry."
        industries={industries}
        variant="gradient"
      />
    </main>
  );
}
