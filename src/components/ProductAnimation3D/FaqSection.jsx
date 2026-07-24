"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Are 3D Product Animation Services?",
    answer: "3D product animation services cover the creation of animated, photorealistic video content showing a product's features, function, and design for marketing, sales, and educational use.",
  },
  {
    question: "How Much Does 3D Product Animation Cost?",
    answer: "A standard 30 to 60-second 3D product animation typically starts at $2,500 to $6,000, depending on complexity. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How Long Does a Product Animation Project Take?",
    answer: "Most 3D product animation projects are completed in three to five weeks from brief sign-off, depending on modeling and rendering complexity.",
  },
  {
    question: "Can You Animate Existing CAD Models?",
    answer: "Yes. CAD to product animation conversion is a core part of our 3D product animation process for industrial and technical clients.",
  },
  {
    question: "Are Product Animations Effective for eCommerce?",
    answer: "Yes. eCommerce product animation consistently improves conversion rates and reduces return rates compared to relying on static imagery alone.",
  },
  {
    question: "Do You Provide Scriptwriting and Storyboarding?",
    answer: "Yes. Scriptwriting and storyboarding are standard stages in our 3D product animation workflow before any modeling begins.",
  },
  {
    question: "Can You Showcase Internal Product Components?",
    answer: "Yes. Product assembly animation and cutaway sequences clearly show internal components and mechanisms for technical and training audiences.",
  },
  {
    question: "What File Formats Will I Receive?",
    answer: "Standard delivery includes MP4 in multiple resolutions, with platform-specific exports for web, social, and broadcast use as specified at kickoff.",
  },
  {
    question: "Who Owns the Final Animation Assets?",
    answer: "Full ownership of the final 3D product animation assets transfers to you upon final payment, without restriction or ongoing licensing fees.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About 3D Product Animation Services"
      faqs={faqs}
    />
  );
}
