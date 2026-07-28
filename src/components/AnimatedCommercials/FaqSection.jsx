"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What is an animated commercial?",
    answer:
      "An animated commercial is a paid advertising video produced using animation techniques, including 2D illustration, 3D rendering, or motion graphics rather than live-action footage. Animated commercials are used across digital platforms, social media, television, and streaming services.",
  },
  {
    question: "How much does an animated commercial cost?",
    answer:
      "A 15-second social media animated commercial starts in the $2,000 to $4,000 range. A 30-second broadcast commercial with custom characters and multi-format delivery runs $8,000 to $20,000. Itemized quotes within 48 hours of a brief.",
  },
  {
    question: "Who should use animated commercial services?",
    answer:
      "Any business running paid advertising that needs to communicate a product benefit, service value, or brand message faster than live-action footage can deliver it. Animation is particularly effective for product explanation, app promotion, and any category where the product itself is not visually compelling in its raw form.",
  },
  {
    question: "What are the different types of animated commercials?",
    answer:
      "Product commercials, brand story commercials, character-driven commercials, motion graphics commercials, 2D animated commercials, and 3D animated commercials. The right type is determined by the audience, the objective, and the platform where the commercial will run.",
  },
  {
    question: "Can I use the animated commercial across multiple platforms?",
    answer:
      "Yes. We produce multi-format delivery packages covering broadcast, digital, social media, and website use from a single production. The additional formats are more efficient to produce alongside the primary commercial than as separate commissions.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About Animated Commercial Services"
      faqs={faqs}
    />
  );
}