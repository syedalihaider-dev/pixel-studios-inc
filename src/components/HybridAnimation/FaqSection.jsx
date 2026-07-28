"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What are animation cels?",
    answer:
      "Animation cels are the transparent sheets traditionally used to hand-draw individual animation frames, allowing static backgrounds to be reused while characters were drawn on overlaying transparent layers. The term now broadly refers to frame-by-frame drawn animation regardless of production medium.",
  },
  {
    question: "How can cel animation videos improve my marketing campaigns?",
    answer:
      "Cel animation's distinctive visual texture stands out in a content environment saturated with templated motion graphics and rigged puppet animation, producing stronger brand recall and content differentiation.",
  },
  {
    question: "What is the difference between cel animation and digital animation?",
    answer:
      "Cel animation refers specifically to frame-by-frame drawn technique, traditional or digital. Digital animation is a broader category that includes rigged puppet animation, motion graphics, and 3D production alongside digital cel work.",
  },
  {
    question: "How much do hybrid animation services cost?",
    answer:
      "A 60-second hybrid 2D/3D production typically starts at $6,000 to $12,000 depending on frame density and technique complexity. Full frame-by-frame cel animation of equivalent length runs $8,000 to $18,000 given the higher labor intensity.",
  },
  {
    question: "How long does frame-by-frame animation take?",
    answer:
      "A 30-second sequence of fully hand-drawn frame-by-frame animation typically requires three to five weeks of production time given the per-frame labor investment.",
  },
  {
    question: "Can hybrid animation combine 2D and 3D elements?",
    answer:
      "Yes, this is the defining characteristic of hybrid production. The specific combination approach is determined by the creative brief and selected based on which technique best serves each visual element.",
  },
  {
    question: "Is cel animation still used in modern productions?",
    answer:
      "Yes. Cel-style animation remains in active commercial and entertainment production specifically because its visual distinctiveness has become more valuable as templated animation has become more common.",
  },
  {
    question: "What types of projects work best with hybrid animation?",
    answer:
      "Brand content seeking visual distinctiveness, entertainment content with a specific stylistic identity, and any project where the creative concept genuinely requires combining dimensional and flat visual elements are ideal applications for hybrid animation.",
  },
  {
    question: "How is traditional cel animation created?",
    answer:
      "Each frame is individually drawn, traditionally on transparent celluloid over a static background, historically photographed in sequence. Digital cel animation replicates this process in software while preserving the frame-by-frame drawing discipline.",
  },
  {
    question: "Why choose hybrid animation over other animation styles?",
    answer:
      "Hybrid animation is selected when the creative concept requires visual elements that neither pure 2D nor pure 3D can deliver alone, or when a brand needs visual distinctiveness that standard rigged animation does not provide.",
  },
  {
    question: "What should I consider when choosing a cel animation studio?",
    answer:
      "Ask to see actual frame-by-frame work, not rigged animation marketed as hand-drawn. Ask about the studio's traditional animation training because the craft discipline is specific and not every animation studio has the required experience.",
  },
  {
    question: "How can a cel animation video production company benefit my brand?",
    answer:
      "Genuine visual distinctiveness in a content environment where most competitors are using templated production helps create stronger brand recall and makes the content stand out from standard animated campaigns.",
  },
  {
    question: "Why are cel animated videos effective for advertising?",
    answer:
      "The handcrafted visual quality signals production investment and creative intention to viewers, which helps build brand trust and recall more effectively than content that appears templated or automated.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About Hybrid and Cel Animation Services"
      faqs={faqs}
    />
  );
}