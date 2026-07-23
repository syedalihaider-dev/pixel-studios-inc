"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does an animated explainer video cost?",
    answer: "A professionally produced 60-second animated explainer video from a reputable animated explainer video company in the USA typically starts in the $2,500 to $5,000 range. Complex productions with custom character libraries and photorealistic styles run higher. We provide itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does it take to create an explainer video?",
    answer: "Most 60 to 90-second animated explainer video productions are completed in three to five weeks from a brief sign-off. Rush timelines are available. Every project receives a milestone schedule with specific dates at kickoff.",
  },
  {
    question: "Can you help write the script?",
    answer: "Yes. Scriptwriting is a standard stage in our animated explainer video creation service. We write every script from scratch around your audience brief. You review and approve the script before any design or animation begins.",
  },
  {
    question: "What is the ideal length for an explainer video?",
    answer: "60 to 90 seconds for most business explainer videos. Long enough to build the argument and the call to action. Short enough to hold attention through the final frame. We determine the right length for your specific content during the discovery session.",
  },
  {
    question: "Do you provide voiceover services?",
    answer: "Yes. Professional voiceover is included in standard animated explainer video production packages. We match voice talent to the brand tone established in the brief. Multilingual versions and custom casting are available.",
  },
  {
    question: "Which animation style is best for my business?",
    answer: "The style that matches your audience, your brand identity, and your distribution context. 2D explainer animation works for most B2B and B2C use cases. Motion graphics explainer videos suit data-heavy or brand-consistency-driven briefs. We help every client make the right choice in discovery.",
  },
  {
    question: "Can explainer videos improve conversions?",
    answer: "Consistently. Landing pages with custom explainer videos convert at higher rates than pages without them. The mechanism is that explainer videos reduce cognitive friction: they answer objections before the viewer forms them, which keeps prospects moving toward the conversion point.",
  },
  {
    question: "How many revisions are included?",
    answer: "Two full revision rounds in standard packages. Additional rounds available and priced upfront. All revision terms are documented before production begins, so there are no surprises at the end.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions"
      faqs={faqs}
    />
  );
}
