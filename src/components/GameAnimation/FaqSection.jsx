"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does game animation cost?",
    answer:
      "A single 2D character cycle for mobile starts at around $150 to $400. A 3D character animation cycle for PC or console runs $400 to $1,200, depending on complexity. Full character animation packages with 20-plus cycles range from $5,000 to $20,000. Itemized quotes within 48 hours.",
  },
  {
    question: "Do you create animations for Unity and Unreal Engine?",
    answer:
      "Yes. Unity and Unreal Engine are our primary integration targets. Animations are tested in the target engine before delivery. Import settings, bone naming conventions, and state machine structure are confirmed at discovery.",
  },
  {
    question: "Can you animate existing character models?",
    answer:
      "Yes. We assess the existing rig for animation suitability before production begins. If the rig requires corrections, we scope and price that work before production starts.",
  },
  {
    question: "Do you provide motion capture animation?",
    answer:
      "Yes. Motion capture cleanup, retargeting, and supplementary keyframe animation for mocap sessions that require polishing before engine integration.",
  },
  {
    question: "Why high-quality animation matters in game development",
    answer:
      "Animation quality is the primary variable that determines whether a player believes in the character they are controlling. Players do not consciously evaluate animation quality. They feel the result of it in their engagement with the game.",
  },
  {
    question: "How game animations enhance player experience",
    answer:
      "Animation communicates physical feedback, emotional state, and narrative information to the player faster and more reliably than UI or dialogue. It is the invisible layer of game design that makes everything else feel intentional.",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "FBX for 3D animation, PNG sprite sheets for 2D animation, and engine-native formats for Unity and Unreal Engine, where integration is in scope. Format specifications confirmed at discovery.",
  },
  {
    question: "How long does a game animation project take?",
    answer:
      "Single-cycle animations: three to seven business days from approved rig. Full character animation packages: two to six weeks. Cinematic animation: four to eight weeks, depending on complexity.",
  },
  {
    question: "Can you create cinematic animations for game trailers?",
    answer:
      "Yes. Game trailer animation and in-game cinematic animation are both services. The brief defines whether the animation is produced for real-time engine delivery or cinematic render output.",
  },
  {
    question: "Do you support indie game developers?",
    answer:
      "Yes. Indie game animation production at the quality level of commercial release, scoped to the budgets of indie development. Flexible engagement models available.",
  },
  {
    question: "Can you integrate animations into our game engine?",
    answer:
      "Yes. Unity Animator Controller setup, Unreal Anim Blueprint integration, and state machine configuration are available as scope items alongside animation production.",
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