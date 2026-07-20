"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Retail & E-commerce",
    image: "/industry/01.png",
    text: "Boost sales and engage shoppers with stunning product animations and explainer videos tailored for e-commerce platforms.",
    link: "/industry/retail"
  },
  {
    id: 2,
    title: "Professional Services",
    image: "/industry/02.png",
    text: "Establish trust and clearly communicate complex value propositions with corporate animations designed for B2B success.",
    link: "/industry/professional-services"
  },
  {
    id: 3,
    title: "Software & Tech",
    image: "/industry/03.png",
    text: "Simplify software demos and highlight features effectively with dynamic SaaS animation and UI/UX motion graphics.",
    link: "/industry/software-tech"
  },
  {
    id: 4,
    title: "Medical & Biotech",
    image: "/industry/04.png",
    text: "Visualize complex biological processes and medical devices accurately with specialized 3D scientific animations.",
    link: "/industry/medical-biotech"
  },
  {
    id: 5,
    title: "Education",
    image: "/industry/05.png",
    text: "Enhance learning experiences and increase student retention with engaging educational animations and e-learning courses.",
    link: "/industry/education"
  },
  {
    id: 6,
    title: "Real Estate",
    image: "/industry/06.png",
    text: "Showcase properties and architectural designs with immersive 3D walkthroughs and real estate visualization.",
    link: "/industry/real-estate"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="We’ve delivered results for companies in every industry."
      description=""
      industries={industries}
      variant="gradient"
    />
  );
}
