"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What makes a character animation look believable?",
    answer:
      "Weight, anticipation, follow-through, and the micro-imperfections that distinguish organic motion from mechanical motion. A character that obeys physics while appearing to make decisions is a believable character.",
  },
  {
    question: "What is the difference between character animation and motion graphics?",
    answer:
      "Character animation expresses personality and intention through physical performance. Motion graphics communicate information and brand through designed motion. Both are valuable. Neither substitutes for the other.",
  },
  {
    question: "Do I need a rigged character before animation starts?",
    answer:
      "Yes. A production rig is required before animation can begin. If the character is not yet rigged, we can scope and price rigging as part of the engagement.",
  },
  {
    question: "Can you animate an existing character design?",
    answer:
      "Yes. We work from existing character designs, assess the rig for animation suitability, and begin production from that point.",
  },
  {
    question: "What is facial animation and lip sync?",
    answer:
      "Facial animation uses blend shapes to produce emotional expressions and mouth shapes. Lip sync matches the mouth animation to the recorded dialogue phoneme by phoneme. Both are required for characters with dialogue.",
  },
  {
    question: "Should I choose 2D or 3D character animation?",
    answer:
      "2D is more efficient for flat visual styles and high-volume content production. 3D is better for dimensional visual styles, realistic character performance, and content requiring multiple camera angles from the same animation.",
  },
  {
    question: "Can you animate characters for games and marketing campaigns?",
    answer:
      "Yes. Game character animation and marketing character animation are both active services with different technical requirements and delivery specifications.",
  },
  {
    question: "How many animation cycles should a game character have?",
    answer:
      "A basic playable character requires 15 to 25 cycles: locomotion, combat, interaction, and idle states. More complex characters with multiple move sets, ability systems, or emotional states require proportionally more.",
  },
  {
    question: "Can you work with our in-house creative team?",
    answer:
      "Yes. We integrate into existing creative teams rather than requiring clients to adapt their workflow to ours. Style guide, alignment, and communication structures are established at the start of every engagement.",
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