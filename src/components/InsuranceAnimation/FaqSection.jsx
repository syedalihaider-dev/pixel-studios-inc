"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Happens to Our Insurance Animation Video When Policy Terms or Coverage Change?",
    answer:
      "We design videos with updatable segments where possible, so when terms, pricing, or coverage change, we revise the affected sections rather than rebuilding the whole video, saving both time and cost.",
  },
  {
    question: "Should We Use a Character-Led or Corporate Animation Style for Our Insurance Video?",
    answer:
      "It depends on brand and audience. A character-led style feels warmer for consumer-facing explainers, while a clean corporate style suits B2B insurance products and formal compliance-focused content.",
  },
  {
    question: "Can Insurance Animation Be Used for Agent or Broker Training as Well as Marketing?",
    answer:
      "Yes. The same core assets can be adapted into both customer-facing explainers and internal training content for agents and brokers, giving the whole organization one consistent way of explaining coverage.",
  },
  {
    question: "Is an Animated Insurance Video Legally Binding, or Just an Educational Summary?",
    answer:
      "It is an educational summary, not a legal document. Actual terms remain governed by your written policy documentation, and we recommend stating that disclaimer clearly in any customer-facing video we produce.",
  },
  {
    question: "How Do We Measure Whether an Insurance Explainer Video Is Reducing Support Calls or Improving Conversion?",
    answer:
      "Common measures include support ticket volume on covered topics before and after launch, video completion rates, and conversion lift on pages where the video sits beside a quote or application flow. Track a baseline first so improvement is provable, not assumed.",
  },
  {
    question: "What's the Difference Between a Standard 2D Explainer and a Scenario-Based 3D Insurance Animation?",
    answer:
      "A standard 2D explainer covers general coverage concepts efficiently. A scenario-based 3D animation walks through a specific real situation, like a car accident or home claim, in more visual detail, which builds stronger emotional understanding and trust.",
  },
  {
    question: "Can One Insurance Explainer Video Work Across Multiple States With Different Regulations?",
    answer:
      "Often, yes. Where regulatory variation exists, we build a core video structure with state-specific segments or disclaimers that can be swapped in, rather than producing entirely separate videos for every region.",
  },
  {
    question: "Can Insurance Animation Help With Policy Renewal Communications?",
    answer:
      "Yes. Short renewal-focused videos remind customers what they are covered for and highlight any policy changes, which can improve renewal rates compared to a plain renewal notice letter.",
  },
  {
    question: "How Quickly Can We Update an Insurance Explainer Video After Policy Changes?",
    answer:
      "For videos built with our updatable segment structure, most insurance policy changes video revisions turn around in one to two weeks, depending on how many scenes are affected and how quickly your compliance team can review the revised sections.",
  },
  {
    question: "Do You Work With Our Legal and Compliance Team During Production?",
    answer:
      "Yes. Compliance review is built into every stage of our process for insurance projects, with your legal and compliance stakeholders approving the script and storyboard before animation production ever begins.",
  },
  {
    question: "Can You Produce Videos for Multiple Insurance Lines Under One Brand?",
    answer:
      "Yes. Many carriers commission a series covering auto, home, health, and life products from one consistent visual system, which keeps the brand coherent while each line gets its own dedicated explainer.",
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