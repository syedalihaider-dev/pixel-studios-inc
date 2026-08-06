"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Animated Educational Videos",
    image: "/industry/01.png",
    text: "Animation for concepts, processes, and mechanisms that physical demonstration cannot show.",
    link: "#"
  },
  {
    id: 2,
    title: "Whiteboard Educational Videos",
    image: "/industry/02.png",
    text: "Progressive visual explanation for complex sequential content and conceptual frameworks.",
    link: "#"
  },
  {
    id: 3,
    title: "Motion Graphics Learning Videos",
    image: "/industry/03.png",
    text: "Data visualization and process diagrams in motion for training content that requires quantitative clarity.",
    link: "#"
  },
  {
    id: 4,
    title: "Instructor-Led Training Videos",
    image: "/industry/04.png",
    text: "On-camera presenter content for training programs that benefit from direct human instruction delivery.",
    link: "#"
  },
  {
    id: 5,
    title: "Interactive Learning Videos",
    image: "/industry/05.png",
    text: "Branching scenario and decision-point video for training contexts where the learner needs to practice judgment, not just receive information.",
    link: "#"
  },
  {
    id: 6,
    title: "Screen Recording Tutorials",
    image: "/industry/06.png",
    text: "Software and platform training videos with annotated screen capture for technology onboarding and digital skills development.",
    link: "#"
  },
  {
    id: 7,
    title: "Scenario-Based Training Videos",
    image: "/industry/06.png",
    text: "Realistic scenario videos for customer service training, sales training, and compliance training where the skill is demonstrated in a real-world context rather than described in the abstract.",
    link: "#"
  },
  {
    id: 8,
    title: "Blended Learning Content",
    image: "/industry/06.png",
    text: "Video components designed to integrate with live instruction, workbooks, and assessment tools in a complete blended learning program.",
    link: "#"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Educational Video Formats We Produce"
      description="Our educational video production covers every major learning format, from animated explainers and whiteboard videos to interactive training, instructor-led sessions, software tutorials, and blended learning content."
      industries={industries}
      variant="gradient"
    />
  );
}