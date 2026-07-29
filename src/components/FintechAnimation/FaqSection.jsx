"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What's the Difference Between Fintech Motion Graphics and a Full Fintech Explainer Video?",
    answer:
      "Fintech motion graphics are typically short, focused visual elements used to support a message, such as an animated chart or icon sequence. A fintech explainer video is a complete narrative piece that introduces your product's value proposition from start to finish.",
  },
  {
    question: "What Does a Fintech Logo Animation Service Typically Include?",
    answer:
      "It usually includes an animated version of your logo for intros and outros, plus a broader motion system defining how your brand moves across app interactions, ads, and video content.",
  },
  {
    question: "What Factors Affect the Cost of a Fintech Animation Project?",
    answer:
      "Cost depends on animation style, length, and complexity, particularly how much data visualization or UI detail is involved. Most projects are scoped after an initial discovery call.",
  },
  {
    question: "Should a Fintech Company Choose 2D or 3D Animation?",
    answer:
      "2D animation suits most explainer and UI-focused content and tends to be more cost-effective. 3D can add impact for hardware products or more conceptual brand storytelling, though it is less common in this category.",
  },
  {
    question: "Can Fintech Animated Videos Be Localized for Multiple Languages and Markets?",
    answer:
      "Yes. Voiceover, subtitles, and on-screen text can all be localized, which is common for fintech companies expanding into new regulatory regions.",
  },
  {
    question: "What Happens After My Fintech Animation Project Is Delivered? Do I Own the Files?",
    answer:
      "Yes, you own your final deliverables and can reuse them across future campaigns, app updates, or investor materials.",
  },
  {
    question: "How Long Does It Take to Produce a Fintech Animation Video?",
    answer:
      "Most projects take three to six weeks from discovery to delivery, depending on complexity and revision rounds.",
  },
  {
    question: "How Can We Explain Complex Financial Concepts Simply in an Explainer Video?",
    answer:
      "The key is choosing one core mechanism to explain well rather than covering every feature. We work with your team to identify that mechanism, then build the visual metaphor and pacing around it so it stays accurate without becoming dense.",
  },
  {
    question: "Can Fintech Animation Support Both Consumer and B2B Audiences From the Same Company?",
    answer:
      "Yes. We typically build a shared visual system and adapt tone and depth for each audience, so a consumer-facing app explainer and a B2B investor pitch can share a consistent brand look while speaking to very different viewers.",
  },
  {
    question: "Do You Work With Our Legal and Compliance Team Before a Fintech Video Goes Live?",
    answer:
      "Yes. For any project involving specific claims about returns, security, or regulatory status, we build in a compliance review checkpoint at the script stage, well before animation production begins.",
  },
  {
    question: "Can Fintech Animation Help Reduce Onboarding Drop-Off in a Mobile App?",
    answer:
      "Yes. A short product demo animation placed early in the onboarding flow can answer the exact questions that cause users to abandon signup, which is one of the most measurable uses of fintech animation for existing products.",
  },
  {
    question: "Do You Provide Voiceover and Sound Design as Part of Fintech Animation Production?",
    answer:
      "Yes. Voiceover, licensed music, and sound design are included as part of the standard production process, so you receive a fully finished, publish-ready video rather than a silent visual.",
  },
  {
    question: "Can You Update an Existing Fintech Animation When Our Product or Pricing Changes?",
    answer:
      "Yes. Most projects are built so specific segments, like pricing tiers or feature callouts, can be revised without rebuilding the entire animation, which keeps ongoing updates fast and affordable.",
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