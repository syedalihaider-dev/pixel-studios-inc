import Banner from "@/components/CaseStudy/Banner";
import TrustedClientsSection from "@/components/CaseStudy/TrustedClientsSection";
import IndustrySection from "@/components/CaseStudy/IndustrySection";
import TestimonialSection from "@/components/CaseStudy/TestimonialSection";
import FeaturedProjects from "@/components/CaseStudy/FeaturedProjects";
import { Metadata } from "next";

export const metadata = {
  title: "Pixel Studios Inc - Case Study",
  description: "We at Pixel Studios Inc. take immense pride in our comprehensive case studies that highlight our successful projects across diverse industries. Each case study is a testament to our team’s creativity, technical expertise, and dedication to delivering exceptional results for our clients.",
  keywords: "Best Animation Studio In India, 2D Animation Studio, 3D Animation Studio, Explainer Videos, Whiteboard Animation, Motion Graphics, Character Animation",
}

export default function CaseStudyPage() {
  return (
    <main>
      <Banner />
      <div style={{ background: "radial-gradient(60.57% 91.94% at 69.22% 43%, #19042D 0%, #19042D 100%)" }}>
        <FeaturedProjects />
        <TestimonialSection />
      </div>
      <TrustedClientsSection />
      <IndustrySection />
    </main>
  );
}
