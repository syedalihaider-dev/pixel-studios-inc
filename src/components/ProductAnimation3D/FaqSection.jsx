"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does trailer animation cost?",
    answer: "A professionally produced 30 to 60-second trailer typically starts in the $2,000 to $5,000 range for motion graphics-based production. Trailers with custom 3D elements, character animation, or extensive visual effects range from $6,000 to $15,000 or more. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does movie trailer production take?",
    answer: "Most movie trailer production completes in two to four weeks from brief sign-off. Trailers requiring custom animated sequences or extensive visual effects take longer. Rush timelines are available for release-date-critical projects.",
  },
  {
    question: "Can you create a trailer for my game?",
    answer: "Yes. Game trailer production and game trailer animation are core services. We produce cinematic reveal trailers, gameplay announcement trailers, and launch trailers for PC, console, and mobile titles.",
  },
  {
    question: "What is included in trailer production services?",
    answer: "Our trailer production services include creative brief development, concept development, scriptwriting, storyboarding, motion graphics and animation production, sound design and music integration, and final delivery in every format specified at kickoff.",
  },
  {
    question: "Do you provide scriptwriting and storyboarding?",
    answer: "Yes. Scriptwriting and storyboarding are standard stages in our trailer production process. Both are developed around the hook identified in discovery and approved before animation production begins.",
  },
  {
    question: "What makes a successful promotional trailer?",
    answer: "A successful promotional trailer identifies a single compelling hook and structures the entire sequence to deliver that hook at the right moment. The most common mistake in trailer production is trying to communicate everything rather than building toward one moment that makes the audience want more.",
  },
  {
    question: "Can trailer videos be used for social media marketing?",
    answer: "Yes. Trailer-style content performs strongly on social media because the structure is built for engagement and completion. We produce platform-specific cuts of trailer content for social distribution alongside the primary deliverable.",
  },
  {
    question: "What is the difference between a teaser trailer and a full trailer?",
    answer: "A teaser trailer is short, typically 15 to 30 seconds, and designed to create awareness and curiosity without revealing significant content. A full trailer, typically 60 to 120 seconds, develops a more complete narrative arc and reveals more of the content while still withholding the resolution. Both serve different stages of a campaign timeline.",
  },
  {
    question: "Do you provide voiceovers and sound design?",
    answer: "Yes. Professional voiceover casting and full sound design, including score selection or composition, are included in our trailer production services. Sound design is where much of a trailer's emotional impact is built.",
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
