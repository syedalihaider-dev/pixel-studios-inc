"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Anime-Style Animation",
    image: "/industry/01.png",
    text: "The aesthetic codes of anime are applied to brand content, character animation, and commercial video at a timeline that traditional anime production cannot match.",
    link: "#"
  },
  {
    id: 2,
    title: "2D AI Animation",
    image: "/industry/02.png",
    text: "2D AI animated videos with the flat illustration aesthetic that works across social media, explainers, and brand campaigns. Clean, intentional, and on-brand between every frame.",
    link: "#"
  },
  {
    id: 3,
    title: "3D AI Animation",
    image: "/industry/03.png",
    text: "3D AI animation for product content, architectural visualization, and cinematic brand sequences where dimensional quality matters and the timeline does not allow traditional 3D production.",
    link: "#"
  },
  {
    id: 4,
    title: "Stylized Cinematic Animation",
    image: "/industry/04.png",
    text: "High-production-value cinematic animation with AI-assisted visual generation and expert compositing. The cinematic quality of traditional production at a meaningfully faster pace.",
    link: "#"
  },
  {
    id: 5,
    title: "Realistic AI Animation",
    image: "/industry/05.png",
    text: "Photorealistic AI animation for product and brand content where the visual standard is photorealistic rendering, but the timeline and budget of traditional CGI are not viable.",
    link: "#"
  },
  {
    id: 6,
    title: "Cartoon Animation",
    image: "/industry/06.png",
    text: "AI-accelerated cartoon animation that retains the expressive character performance that makes cartoon content emotionally engaging. The AI speeds up the frames. The animator ensures they tell the story.",
    link: "#"
  },
  {
    id: 7,
    title: "Motion Graphics Design",
    image: "/industry/06.png",
    text: "AI-assisted motion graphics for brand content, data visualization, and marketing campaigns where the design language needs to be consistent across a high volume of assets.",
    link: "#"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="AI Animation Styles We Create"
      description="Our AI animation studio produces a wide range of animation styles, combining AI-powered production with professional creative direction to deliver visually consistent, high-quality content for every platform and campaign."
      industries={industries}
      variant="gradient"
    />
  );
}