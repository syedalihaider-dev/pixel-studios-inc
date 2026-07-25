"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What is corporate video animation?",
    answer: "Corporate video animation is the production of animated video content for B2B/business purposes, including marketing, training, investor communication, and internal messaging.",
  },
  {
    question: "How much does a corporate animation video cost?",
    answer: "A professionally produced 60-second corporate video animation typically starts at $2,000 to $5,000. Complex productions with custom characters or multiple scenes run higher. Itemized quotes within 48 hours.",
  },
  {
    question: "How long does corporate video production take?",
    answer: "Most corporate video animation productions are completed in three to five weeks from a brief sign-off. Rush timelines are available for fixed launch dates.",
  },
  {
    question: "Why should businesses use animated videos?",
    answer: "Animated business videos communicate complex ideas faster, hold attention longer, and perform measurably better than static content across marketing, training, and sales enablement contexts.",
  },
  {
    question: "Are animated videos effective for B2B marketing?",
    answer: "Yes. B2B animated videos consistently outperform static creative in awareness and lead generation campaigns, particularly when the product or service requires explanation before it can be evaluated.",
  },
  {
    question: "What is the ideal length for a corporate video?",
    answer: "60 to 90 seconds for marketing and explainer use. Two to three minutes for investor presentations and detailed product demonstrations. The right length is the one that delivers the argument without losing the audience.",
  },
  {
    question: "Can you help with script writing?",
    answer: "Yes. Scriptwriting is a standard stage in every corporate animation video production we deliver. Scripts are written around the audience brief and approved before any design or animation begins.",
  },
  {
    question: "Do you provide voiceover services?",
    answer: "Yes. Professional voiceover, music selection, and sound design are included in standard corporate video animation packages.",
  },
  {
    question: "How many revisions are included?",
    answer: "Two full revision rounds are standard. Additional rounds available and priced upfront. All revision terms documented before production begins.",
  },
  {
    question: "What files will I receive after project completion?",
    answer: "Standard delivery includes MP4 in multiple resolutions for web, social, and broadcast use. Source files are included in most project scopes.",
  },
  {
    question: "Request a Free Consultation",
    answer: "30 minutes. No obligation. Detailed proposal within 48 hours of the call.",
  },
  {
    question: "Get a Custom Quote",
    answer: "Submit your brief and receive an itemized estimate within 48 hours.",
  },
  {
    question: "Speak with a Corporate Video Animation Expert",
    answer: "Talk through your project with a specialist before committing to a direction or a budget.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About Corporate Video Animation"
      faqs={faqs}
    />
  );
}
