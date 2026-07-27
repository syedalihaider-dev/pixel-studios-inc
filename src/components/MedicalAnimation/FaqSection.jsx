"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How Do I Choose the Right Medical Animation Services for Healthcare, Medical Device, or Pharma Projects?",
    answer: "Look for a medical animation studio with documented scientific review processes, a portfolio showing work in your specific clinical category, and a production team that involves clinical advisors rather than animating from a brief alone.",
  },
  {
    question: "Can Startups Afford Professional Medical Animation Services?",
    answer: "Yes. Early-stage medical and biotech companies regularly invest in 3D medical animation for investor presentations and pipeline communication, where visual clarity directly affects funding outcomes.",
  },
  {
    question: "What Should I Look for When Hiring a Medical Animation Company?",
    answer: "Clinical accuracy track record, documented medical review process, portfolio in your therapeutic area, and a production workflow that builds review into the schedule rather than treating it as a final-stage obstacle.",
  },
  {
    question: "What Information Is Needed to Create a Custom 3D Medical Animation?",
    answer: "A clear scientific brief, primary literature references or proprietary data, approved anatomical or structural references, and access to your internal medical or scientific team for accuracy review during production.",
  },
  {
    question: "How Can Medical Animation Services Improve Healthcare Marketing Results?",
    answer: "Medical animation services translate complex mechanisms into clear visual arguments that physicians engage with and remember better than written clinical summaries, improving both HCP recall and product differentiation in competitive markets.",
  },
  {
    question: "Why Is Medical Animation Effective for Patient Education and Awareness?",
    answer: "Patients comprehend visual process explanations significantly faster than written equivalents, particularly for abstract biological mechanisms or procedural steps with which they have no prior reference.",
  },
  {
    question: "What Should Be Included in a Pharmaceutical Animation Project Brief?",
    answer: "The therapeutic mechanism to be depicted, the target audience, the scientific references or data the animation must represent accurately, the regulatory context if applicable, and the distribution channels the animation will be used in.",
  },
  {
    question: "How Detailed Should a Surgical Procedure Medical Animation Be?",
    answer: "The detail level should match the audience and purpose. Patient education animations require procedural clarity without clinical granularity. Surgical training animations require anatomical precision and step-by-step accuracy sufficient for a clinical audience.",
  },
  {
    question: "How Are 3D Medical Animations for Healthcare Professionals Different from Patient Education Videos?",
    answer: "HCP animations can use clinical terminology, show anatomical detail at the level a physician expects, and assume prior scientific knowledge. Patient education animation uses plain language, simplified visual metaphors, and focuses on experience rather than mechanism.",
  },
  {
    question: "What Is the Ideal Length for a Medical Explainer Animation Video?",
    answer: "60 to 90 seconds for patient education and HCP marketing. Two to four minutes for detailed MOA, surgical procedure, and device mechanism animations where clinical completeness matters more than brevity.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About Medical Animation Services"
      faqs={faqs}
    />
  );
}
