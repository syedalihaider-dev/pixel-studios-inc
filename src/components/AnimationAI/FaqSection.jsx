"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How does AI animation work, and why is it effective for businesses?",
    answer:
      "AI animation uses generative AI tools to accelerate visual creation, then applies expert creative direction and post-production to bring the output to a finished quality level. For businesses, it means faster content production at lower cost without the quality compromise that unmanaged AI tools produce.",
  },
  {
    question: "How long does it typically take to produce an AI animation video?",
    answer:
      "AI-assisted production is typically 30 to 50 percent faster than equivalent traditional production. A 60-second explainer video that would traditionally take four weeks can be completed in two to three weeks with AI-assisted production. Complex productions with high brand specificity take longer because the expert review and refinement stages are unchanged.",
  },
  {
    question: "Which businesses or organizations find AI animation most useful?",
    answer:
      "Brands with high-volume content requirements, organizations that need faster production cycles for campaign testing, companies whose production budget cannot support traditional animation at their required volume, and businesses that want to test animation at a lower cost before committing to a larger production.",
  },
  {
    question: "Do AI animation projects come with voiceovers and soundtracks?",
    answer:
      "Yes. Professional voiceover, music selection, and sound design are standard in every AI animation production. The audio production is not AI-generated. It is produced by our audio team to the same standard as our traditional animation projects.",
  },
  {
    question: "Are revisions included in AI animation projects?",
    answer:
      "Yes. Two structured revision rounds are standard. Revision scope is defined in the brief before production begins. AI-assisted production does not change the revision process.",
  },
  {
    question: "Will Just Animations allow changes to AI animation videos after delivery?",
    answer:
      "Source files are delivered with every project, and changes to delivered animations are available as a separate engagement. Most revisions requested after final delivery are handled efficiently because the source files are structured for it.",
  },
  {
    question: "Are there discounts available for bulk AI animation video orders?",
    answer:
      "Yes. Multi-video packages and ongoing retainer arrangements are priced with volume efficiencies applied. The AI pipeline is particularly suited to high-volume content production, and the pricing reflects that.",
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