"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does a custom 3D animation project cost?",
    answer: "A 30 to 60-second 3D product animation starts in the $3,500 to $8,000 range. Complex character animation and cinematic productions range from $10,000 to $30,000 or more. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does it take to create a 3D animated video?",
    answer: "A standard 60-second 3D product animation runs four to six weeks from brief sign-off. Cinematic productions with character animation and VFX typically require six to twelve weeks. Rush timelines are available.",
  },
  {
    question: "Is 3D animation worth it for startups and small businesses?",
    answer: "Yes, when the brief justifies it. If your product has physical form or structural complexity that 2D cannot communicate effectively, professional 3D animation services are one of the most efficient communication investments available.",
  },
  {
    question: "Can 3D animation help increase customer engagement and conversions?",
    answer: "Consistently. Product pages with 3D animated content see higher dwell time and improved conversion versus static alternatives because 3D animation answers product questions visually before a prospect has to ask them.",
  },
  {
    question: "How many revisions are included in a typical animation project?",
    answer: "Two full revision rounds in standard packages. Additional rounds available and priced clearly upfront. All revision terms are documented before production begins.",
  },
  {
    question: "How do I choose the right 3D animation company?",
    answer: "Look for a portfolio range across industries, a discovery process that precedes the quote, and verifiable client results. The right 3D animation agency asks what the video needs to accomplish before deciding what it should look like.",
  },
  {
    question: "When should I use 3D animation for product demos?",
    answer: "When the product has a physical form that benefits from dimensional rendering, when internal mechanisms cannot be shown through photography, or when brand positioning demands photorealistic quality.",
  },
  {
    question: "Do you offer character design and animation for storytelling projects?",
    answer: "Yes. Full character animation, including modeling, rigging, facial animation, and performance direction across stylized and photorealistic aesthetics for brand storytelling, gaming, and educational content.",
  },
  {
    question: "Can 3D animation explain complex products and technical concepts?",
    answer: "It is one of the most effective formats for exactly that problem. 3D animation shows internal components that cannot be photographed and demonstrates engineering precision with clarity that no other format matches.",
  },
  {
    question: "Are 3D modeling and rendering included in your production process?",
    answer: "Yes. Modeling, texturing, rigging, lighting, and rendering are all standard components of our 3D animation production services, managed entirely in-house.",
  },
  {
    question: "What makes your 3D animation company different from other agencies?",
    answer: "We start with the business objective, not the visual brief. That changes the quality of output in measurable ways: fewer revision cycles, higher client retention, and content that performs in the market.",
  },
  {
    question: "How do I get started with a custom 3D animation project?",
    answer: "Book a 30-minute discovery call. A detailed proposal with scope, timeline, and investment follows within 48 hours. No obligation.",
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
