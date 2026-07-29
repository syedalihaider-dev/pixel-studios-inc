"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Is Biotech Animation?",
    answer: "Biotech animation is 3D or 2D visual storytelling used to explain scientific concepts such as gene therapy mechanisms, cell biology, molecular processes, and product function in a way that stays accurate to the research and clear to non-scientific audiences, including investors, regulators, and patients.",
  },
  {
    question: "What Should 3D Medical Animation Cost?",
    answer: "3D Medical Animation Production Cost depends on scientific complexity, animation length, and the level of molecular or cellular detail required. Most biotech projects are scoped after a discovery call, once we understand the science, the audience, and how the finished video will be used.",
  },
  {
    question: "How Long Does It Take to Create a Biotech Explainer Video?",
    answer: "Most biotech explainer projects run four to eight weeks from discovery to delivery, depending on scientific complexity and how many review cycles your research or regulatory team requires along the way.",
  },
  {
    question: "How Can Biotech Animation Be Used?",
    answer: "It supports investor pitches, regulatory submissions, conference presentations, physician and patient education, sales enablement, and internal training. Any setting where a scientific concept needs to be explained clearly, consistently, and repeatedly benefits from one accurate animated reference.",
  },
  {
    question: "How Long Does Biotech Animation Production Take?",
    answer: "Production typically runs four to eight weeks from kickoff to final delivery. Highly technical mechanism of action animations with multiple rounds of scientific review can take somewhat longer to complete properly.",
  },
  {
    question: "What Are Animated Products of Biotechnology?",
    answer: "Common deliverables include mechanism of action videos, gene therapy explainers, cell and molecular process animations, product demonstration videos, and investor-facing biotechnology animation summaries built for fundraising and partnership conversations.",
  },
  {
    question: "Do You Work With Our Scientific Team During Production?",
    answer: "Yes. Scientific collaboration is built into every stage rather than treated as a one-time sign-off. Your researchers, medical writers, or regulatory advisors review the script, storyboard, and animation at each milestone, so accuracy is confirmed continuously instead of caught late.",
  },
  {
    question: "Can Biotech Animation Support a Regulatory Submission?",
    answer: "Yes. Biotechnology animation can support FDA, IRB, and other regulatory materials by giving reviewers a precise visual reference for a mechanism or process. It is typically used alongside written documentation, built to sit comfortably next to your regulatory language rather than contradict it.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions"
      faqs={faqs}
    />
  );
}
