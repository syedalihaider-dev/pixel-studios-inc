"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Healthcare and Life Sciences",
    image: "/industry/01.png",
    text: "Medical animation, pharmaceutical explainer videos, surgical animation, and healthcare animation for patient education, clinical training, and pharmaceutical product marketing are built to regulatory accuracy standards.",
    link: "#"
  },
  {
    id: 2,
    title: "Manufacturing and Industrial",
    image: "/industry/02.png",
    text: "Industrial safety training, machinery visualization, and assembly process animation for environments where clarity and accuracy affect safety outcomes directly.",
    link: "#"
  },
  {
    id: 3,
    title: "Engineering and Technology",
    image: "/industry/03.png",
    text: "Technical animation, software visualization, and platform demonstrations for technology companies communicating product capability to non-technical buyers without losing technical credibility.",
    link: "#"
  },
  {
    id: 4,
    title: "Architecture and Real Estate",
    image: "/industry/04.png",
    text: "Architectural rendering, architectural visualization, and property walkthroughs for developers and investors presenting projects ahead of completion.",
    link: "#"
  },
  {
    id: 5,
    title: "Consumer Products",
    image: "/industry/05.png",
    text: "3D commercial animation, product launch visuals, and animated product demo videos for consumer brands where visual quality determines first-impression trust.",
    link: "#"
  },
  {
    id: 6,
    title: "Education and Training",
    image: "/industry/06.png",
    text: "Learning animations, instructional videos, and employee onboarding content for corporate training programs that need to hold attention and improve retention rates.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Entertainment and Media",
    image: "/industry/06.png",
    text: "Cinematic trailers, gaming animations, and in-game cutscenes for entertainment brands producing content for PC games, console games, and mobile games.",
    link: "#"
  },
  {
    id: 8,
    title: "Automotive and Transportation",
    image: "/industry/06.png",
    text: "Photorealistic rendering of vehicles and components for automotive marketing and engineering review, where visual realism is the primary trust signal.",
    link: "#"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Industries We Have Served with 3D Animation"
      description="Our 3D animation services for businesses have been applied across every sector below, with production approaches specific to each industry's standards."
      industries={industries}
      variant="gradient"
    />
  );
}
