"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: "Product walkthroughs, feature announcements, and onboarding animations for software companies at every stage of growth. We know which motion graphics assets move which metrics at which funnel stage.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "Patient education, device explanation, and healthcare marketing content built to the accuracy and sensitivity standards the industry demands for public-facing motion graphics.",
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: "Curriculum animation and instructional motion graphics are designed around learning outcomes rather than visual novelty. Built for LMS platforms and standalone distribution alike.",
    link: "#"
  },
  {
    id: 4,
    title: "Finance & Fintech",
    image: "/industry/04.png",
    text: "Investment product explanation, regulatory communication, and financial literacy content for audiences that do not accept ambiguity in either the message or the visual presentation.",
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate and Construction",
    image: "/industry/05.png",
    text: "Architectural walkthroughs and property launch motion graphics that give investors and buyers something compelling to respond to before the building exists.",
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce and Retail",
    image: "/industry/06.png",
    text: "Product launch animations and brand awareness motion graphics for consumer brands competing in high-noise retail environments where the first frame determines whether the ad gets skipped.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups and Emerging Brands",
    image: "/industry/06.png",
    text: "First-impression content for brands that need to communicate clearly and confidently before their reputation does it for them. Motion graphics that position early-stage companies credibly within their category from the first campaign.",
    link: "#"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Motion Graphics Solutions for Every Industry"
      description="Motion graphics work differently in every vertical. The pacing, language, and visual register that perform for a FinTech product launch are not what works for healthcare compliance training. We have built production experience across all of the following."
      industries={industries}
      variant="gradient"
    />
  );
}
