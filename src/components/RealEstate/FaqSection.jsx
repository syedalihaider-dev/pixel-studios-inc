"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What's the Difference Between Real Estate 3D Animation and a 360° Virtual Tour?",
    answer: "3D animation is a directed, cinematic sequence built to highlight a property's best features with camera movement and storytelling. A 360° virtual tour is an interactive, self-guided format buyers navigate on their own, without a directed narrative.",
  },
  {
    question: "When Should I Commission a Real Estate Animation?",
    answer: "As soon as architectural plans are far enough along to model accurately, typically during design development, so the animation is ready for pre-sales well ahead of construction completion and any sales gallery opening.",
  },
  {
    question: "2D vs 3D Real Estate Animation, Which Is Better?",
    answer: "3D gives buyers a realistic, immersive sense of scale and finishes and performs better for high-value and luxury sales. 2D floor plan animation suits quick, budget-friendly overviews of layout and flow earlier in a campaign.",
  },
  {
    question: "Do I Own the Finished Animation, and Can I Reuse It?",
    answer: "Yes. You retain your deliverables and can reuse the animation across future marketing, investor, and sales campaigns for as long as the development and its sales phases remain active.",
  },
  {
    question: "Can You Create an Animation From Our Existing Floor Plans or Renderings?",
    answer: "Yes. We regularly build animations from existing architectural drawings, CAD files, or static renderings rather than restarting the design process, which meaningfully reduces both cost and production timeline.",
  },
  {
    question: "Will Our Unreleased Project Details Stay Confidential During Production?",
    answer: "Yes. Confidentiality is standard practice on every development we work on, and we are glad to formalize it with an NDA before any plans, renderings, or sales materials are shared with our team.",
  },
  {
    question: "What Happens if the Building Design Changes After Production Starts?",
    answer: "Design changes are common during development. Our 3D models can be updated to reflect revisions without rebuilding the project from the ground up, keeping the cost and timeline impact small.",
  },
  {
    question: "What Determines How Long a Real Estate Animation Takes to Produce?",
    answer: "Timeline depends on the scale of the development, the level of architectural detail required, and how many buildings, units, or amenity spaces need to be modeled and animated in full detail.",
  },
  {
    question: "What Is the Pricing Structure for Your Real Estate 3D Animation Services?",
    answer: "Real estate 3D animation cost is scoped around project scale, animation length, and level of detail. Most quotes follow an initial review of your architectural plans, delivery date, and intended use across channels.",
  },
  {
    question: "How Do Your 3D Animation Services Help Attract Investors for Large Developments?",
    answer: "A realistic walkthrough or investor presentation animation lets capital partners see a project's potential clearly and emotionally, which builds confidence and accelerates fundraising conversations for large-scale developments.",
  },
  {
    question: "Can Real Estate Animation Be Used for International Marketing Campaigns?",
    answer: "Yes. Animation travels well across markets since it does not depend on an in-person site visit, and voiceover or subtitles can be localized for international buyers and overseas roadshows.",
  },
  {
    question: "Can the Animation Include Neighborhood and Amenity Context, Not Just the Building?",
    answer: "Yes. Many projects include surrounding streetscape, nearby amenities, and lifestyle context alongside the building itself, so buyers understand not just the unit but the neighborhood they would be living in.",
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