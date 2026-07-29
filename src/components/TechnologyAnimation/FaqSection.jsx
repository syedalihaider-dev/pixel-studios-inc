"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question:
      "What Is a Technology Animation Video, and When Should a Tech Company Use One?",
    answer:
      "A technology animation video is a produced piece of motion content that explains a tech product, feature, or concept visually. Companies typically use one for homepage explainers, product launches, investor decks, or sales enablement.",
  },
  {
    question: "How Much Do Technology Animation Services Typically Cost?",
    answer:
      "Technology animation video cost depends on style, length, and complexity, particularly how much UI or data visualization is involved. Most projects are scoped after an initial discovery call.",
  },
  {
    question:
      "What's the Difference Between a Technology Explainer Video and Full Technology Animation Services?",
    answer:
      "A technology explainer video is a single, focused deliverable, while full technology animation services can include explainers, UI animation, motion graphics, and ongoing production support across a product's lifecycle.",
  },
  {
    question:
      "How Long Does It Take to Produce a Technology Animation Video?",
    answer:
      "Most projects take three to six weeks from discovery to delivery, depending on complexity and revision rounds.",
  },
  {
    question:
      "Should I Use 2D Animation, 3D Animation, or Motion Graphics for My Technology Product?",
    answer:
      "2D and motion graphics suit most software and UI-focused content, while 3D can add impact for hardware products or more conceptual technology storytelling that benefits from added depth.",
  },
  {
    question:
      "What Information Should I Prepare Before Starting a Technology Animation Project?",
    answer:
      "Access to your product or a working demo, brand guidelines, and a clear sense of your target audience all help us scope an accurate project from the first discovery call.",
  },
  {
    question:
      "How Many Revisions Are Typically Included in Technology Animation Services?",
    answer:
      "Most projects include two to three revision rounds, though this can be adjusted based on project scope during the initial scoping conversation.",
  },
  {
    question:
      "How Much Do Technology Explainer Videos Actually Impact Conversions and Sales?",
    answer:
      "Landing pages featuring a clear explainer video commonly see stronger engagement and conversion than text alone, since video reduces the effort required for a visitor to understand what your product actually does.",
  },
  {
    question:
      "Can You Update UI Animation When Our Product Interface Changes?",
    answer:
      "Yes. UI animation is built to be updated efficiently, so most interface changes can be reflected with a partial revision rather than a full new production.",
  },
  {
    question:
      "Do You Provide Both Consumer-Facing and Investor-Facing Versions of the Same Content?",
    answer:
      "Yes. We often build a simplified consumer explainer alongside a more technical, investor-facing version from the same underlying script and asset library.",
  },
  {
    question:
      "Can You Work With Early-Stage Startups That Do Not Yet Have a Finished Product?",
    answer:
      "Yes. We can work from wireframes, prototypes, or a clear product vision for early-stage companies, adjusting the level of UI detail to match what actually exists at the time of production.",
  },
  {
    question:
      "Do You Provide Different Video Lengths for Different Marketing Channels?",
    answer:
      "Yes. Most tech clients need a short version for the homepage and paid ads, plus a longer version for gated content, sales decks, and deeper product education.",
  },
  {
    question:
      "Can Technology Animation Explain a Complex Backend or API Without Losing a Non-Technical Audience?",
    answer:
      "Yes. We build a visual metaphor around the core mechanism rather than a literal, jargon-heavy explanation, which keeps complex backend systems understandable for a broader audience.",
  },
  {
    question: "Do You Offer Localization for Global Product Launches?",
    answer:
      "Yes. Voiceover, subtitles, and on-screen UI text can all be localized, which is common for technology companies launching in multiple international markets simultaneously.",
  },
  {
    question:
      "Can You Produce Both a Full Explainer and Shorter Social Cutdowns From One Project?",
    answer:
      "Yes. Most technology animation projects are built to produce a full-length explainer alongside shorter social and ad cutdowns from the same core production.",
  },
  {
    question:
      "Do You Provide Ongoing Support as Our Product Continues to Evolve?",
    answer:
      "Yes. A retainer arrangement works well for technology companies with a fast release cadence, keeping UI animation and messaging current as the product evolves.",
  },
  {
    question:
      "Can You Match Our Existing Brand and Design System Exactly?",
    answer:
      "Yes. We work directly from your brand guidelines and design system, so every animation looks like a natural extension of your existing product and marketing.",
  },
  {
    question:
      "Do You Offer a Discovery Call Before We Commit to a Full Project Scope?",
    answer:
      "Yes. Every project starts with a discovery call to review your product and goals before we propose a scope and timeline.",
  },
  {
    question:
      "Can Technology Animation Be Reused Across Sales, Marketing, and Investor Materials?",
    answer:
      "Yes. A single core production can typically be adapted across your website, sales decks, and investor materials without any additional modeling or animation work.",
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