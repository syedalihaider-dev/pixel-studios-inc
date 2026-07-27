"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How does educational video production help my business?",
    answer:
      "Educational video production reduces training delivery cost, improves knowledge retention compared to text-based materials, and delivers consistent instruction quality across all learners regardless of location, shift, or manager availability.",
  },
  {
    question: "What does educational video production include?",
    answer:
      "Learning objective development, script writing with instructional design review, storyboarding, visual design, video production, professional voiceover, audio production, and final delivery in LMS-compatible formats.",
  },
  {
    question: "How much does educational video production cost?",
    answer:
      "A three to five-minute microlearning video with animation starts around $3,000 to $6,000. A full compliance training module with SCORM delivery and scenario-based content runs $8,000 to $20,000. Itemized quotes within 48 hours.",
  },
  {
    question: "How long does it take to produce an educational video?",
    answer:
      "Most four to eight-minute educational videos are completed in four to six weeks from a brief sign-off, including subject matter expert review cycles. Rush delivery available for fixed training launch dates.",
  },
  {
    question: "Can educational videos improve employee training results?",
    answer:
      "Yes, consistently. Completion rates improve when training is engaging. Retention improves when information is presented visually alongside audio narration. Behavior change improves when the training is built around the specific behavior the organization needs to change.",
  },
  {
    question: "What is the difference between e-learning videos and training videos?",
    answer:
      "E-learning videos are components of a digital course or LMS program, typically designed with assessment, branching, or progress tracking. Training videos are standalone instructional videos that may or may not be delivered through an LMS. Both are production formats we deliver.",
  },
  {
    question: "Can educational videos be integrated into an LMS?",
    answer:
      "Yes. SCORM-compatible delivery, metadata completion, and upload support for major LMS platforms are standard components of our educational video production services.",
  },
  {
    question: "What information is needed to start an educational video project?",
    answer:
      "The learning objective, the learner audience, any existing content or curriculum documentation, the delivery platform, and the production timeline. Subject matter expert access for accuracy review is required for technical or compliance content.",
  },
  {
    question: "Are animated educational videos better for complex topics?",
    answer:
      "Yes, for most complex topics. Animation allows visual representation of processes, mechanisms, and concepts that text and static images cannot communicate with the same clarity or precision.",
  },
  {
    question: "Can educational videos be used for customer education?",
    answer:
      "Yes. Customer education video production reduces support ticket volume, improves product adoption, and decreases churn by ensuring customers understand how to get the value they paid for.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About Educational Video Production Services"
      faqs={faqs}
    />
  );
}