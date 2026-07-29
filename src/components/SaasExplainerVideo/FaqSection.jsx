"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Is a SaaS Explainer Video?",
    answer:
      "A SaaS explainer video is a short animated or motion graphics video that explains what your software does, who it is for, and why it is worth trying. It typically lives on a homepage, landing page, or in early sales conversations to build quick understanding.",
  },
  {
    question: "What's the Difference Between a SaaS Explainer Video and a Product Demo Video?",
    answer:
      "A saas explainer video prioritizes clarity and hook, condensing your value proposition into under two minutes for a cold audience. A product demo video runs longer and walks through specific features and use cases for a warmer audience that needs depth before deciding.",
  },
  {
    question: "Will My SaaS Explainer Video Become Outdated When We Update Our UI or Features?",
    answer:
      "It can, which is why we design UI animation sequences to be updated efficiently rather than rebuilt. Most UI or minor feature updates can be reflected with a partial revision instead of a full new production.",
  },
  {
    question: "How Many SaaS Explainer Videos Does a Growing Company Actually Need?",
    answer:
      "Most companies start with one core explainer for the homepage, then add feature-specific or use-case-specific videos as the product and customer segments expand over time.",
  },
  {
    question: "Should Our SaaS Explainer Video Show Our Real Product Interface or Use Abstract Animation?",
    answer:
      "It depends on maturity and audience. Showing the real interface builds credibility and sets accurate expectations. Abstract animation works well for earlier-stage products or conceptual value propositions that are harder to demo directly.",
  },
  {
    question: "Where Should a SaaS Explainer Video Live: Homepage, Gated Landing Page, or Both?",
    answer:
      "Most SaaS companies benefit from a short version on the homepage for immediate clarity and a longer, more detailed version on a gated landing page or sales deck for prospects further down the funnel.",
  },
  {
    question: "How Do We Measure Whether a SaaS Explainer Video Is Actually Working?",
    answer:
      "Common metrics include video completion rate, homepage-to-signup conversion lift, and reduced sales call length, since a good explainer means less needs to be explained live on every call. Set a baseline before launch so the comparison is clean.",
  },
  {
    question: "Can an Existing SaaS Explainer Video Be Updated Instead of Remade From Scratch?",
    answer:
      "Yes, in most cases. If the core structure and assets are still usable, we can update messaging, UI screens, or branding without a full rebuild, which saves both time and budget.",
  },
  {
    question: "Do You Provide Different Video Lengths for Different Funnel Stages?",
    answer:
      "Yes. Most SaaS clients need a 30 to 60 second version for the homepage and paid ads, plus a 90 to 120 second version for gated content, sales decks, and deeper product education.",
  },
  {
    question: "Can You Localize a SaaS Explainer Video for Multiple Markets or Languages?",
    answer:
      "Yes. Voiceover, subtitles, and on-screen UI text can all be localized, which is common for SaaS companies expanding into new international markets without producing a new video per region.",
  },
  {
    question: "What Makes the Best Explainer Videos for SaaS Different From Average Ones?",
    answer:
      "The best explainer videos for SaaS earn attention in the first five seconds, show the actual product rather than vague metaphors, and end with one clear next step. Average ones try to say everything and end up saying nothing memorable.",
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