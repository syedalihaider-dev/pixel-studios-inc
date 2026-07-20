"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does an animation company cost?",
    answer: "The cost to hire an animation company can vary upon quality of animation, timeline of project, and expertise or brand name of the company. For a usual 30-second animated explainer video, the cost for production can be anywhere between $2500 and $5000. Whereas, if you opt for more detailed animation with custom characters, and professional artwork, the cost can easily go up to $7000 per minute of animation.",
  },
  {
    question: "What types of video content do you produce?",
    answer: "We produce various types of video content including explainer videos, promotional videos, corporate videos, training videos, and social media videos.",
  },
  {
    question: "What is your video production process like?",
    answer: "Our process typically includes discovery, scriptwriting, storyboarding, animation/production, voiceover, and final review with client revisions.",
  },
  {
    question: "What type of video is right for our business?",
    answer: "The right type of video depends on your specific goals. Explainer videos are great for products, while corporate videos are better for brand building.",
  },
  {
    question: "What makes a good video marketing strategy?",
    answer: "A good strategy focuses on your target audience, clear messaging, high-quality production, and effective distribution channels.",
  },
  {
    question: "What briefing materials do I need to provide?",
    answer: "We usually ask for your brand guidelines, key messaging, target audience details, and any specific ideas or references you have in mind.",
  },
  {
    question: "Does Video Animation focus on corporate video production?",
    answer: "Yes, we have extensive experience in creating professional corporate videos tailored to your company's identity and communication goals.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="FREQUENTLY ASKED QUESTION?"
      faqs={faqs}
    />
  );
}
