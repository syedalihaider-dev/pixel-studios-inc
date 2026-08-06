"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Technology and SaaS",
    image: "/industry/01.png",
    text: "SaaS explainer videos, product walkthroughs, and feature announcements for software companies at every stage of growth.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "Patient education, medical device explanation, and pharmaceutical brand communication to clinical accuracy standards.",
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: "Curriculum explainer videos and instructional animated content built around learning outcomes for LMS and standalone platforms.",
    link: "#"
  },
  {
    id: 4,
    title: "Finance & Fintech",
    image: "/industry/04.png",
    text: "Investment product explanation and financial literacy content for audiences who need clarity, not simplification.",
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate",
    image: "/industry/05.png",
    text: "Property explainer videos, development marketing, and investment communication for real estate brands and developers.",
    link: "#"
  },
  {
    id: 6,
    title: "Manufacturing and Industrial",
    image: "/industry/06.png",
    text: "Technical process explanation, equipment walkthroughs, and safety communication for industrial and engineering audiences.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "E-Commerce and Retail",
    image: "/industry/06.png",
    text: "Product explainer videos and promotional animated video services for consumer brands competing in high-attention retail environments.",
    link: "#"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Industries We Serve"
      description="Animated explainer video services work differently in every sector. We have built production experience specific to each of the following industries."
      industries={industries}
      variant="gradient"
    />
  );
}
