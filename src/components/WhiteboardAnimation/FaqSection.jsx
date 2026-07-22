"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What are whiteboard animation services?",
    answer: "Whiteboard animation services cover the full production of videos in which content is drawn on screen as a voiceover narrates. The format is used for explainer videos, training programs, marketing content, and customer education. A complete whiteboard animation service includes scriptwriting, storyboarding, illustration, animation, voiceover recording, sound design, and final delivery.",
  },
  {
    question: "How much does a whiteboard animation video cost?",
    answer: "Whiteboard animation video pricing varies based on video length, illustration complexity, number of revision rounds, and whether voiceover talent and music licensing are included. Most professional whiteboard animation projects fall between $2,000 and $8,000 for a 60-90 second video. We provide custom quotes based on your specific scope — contact us to discuss your project.",
  },
  {
    question: "How long does a whiteboard animation project take?",
    answer: "A standard 60-90 second whiteboard animation video runs three to five weeks from brief sign-off to final delivery. Discovery and scripting: 5-7 days. Storyboard and illustration: 5-7 days. Animation and voiceover: 7-10 days. Review and final delivery: 3-5 days. Expedited timelines are available for qualifying projects.",
  },
  {
    question: "Do you provide script writing?",
    answer: "Yes. Professional scriptwriting is included in every Pixels Studios whiteboard animation project. We do not produce animation from client-provided scripts unless the client specifically requests it and the script has been reviewed and approved by our team. The script is too important to the outcome to be treated as a pre-production formality.",
  },
  {
    question: "Do you provide professional voiceovers?",
    answer: "Yes. Voiceover is included in our standard whiteboard animation service. We work with professional voice talent across a range of styles, accents, and delivery registers. You will have the opportunity to review talent options before recording begins.",
  },
  {
    question: "What industries benefit from whiteboard animation?",
    answer: "Whiteboard animation performs across industries where complex information needs to be communicated clearly. Healthcare, SaaS and technology, financial servicWhiteboard animation performs across industries where complex information needs to be communicated clearly. Healthcare, SaaS and technology, financial services, education, legal, real estate, e-commerce, and non-profit organizations all use whiteboard animation regularly for training, marketing, and customer education purposes.es, education, legal, real estate, e-commerce, and non-profit organizations all use whiteboard animation regularly for training, marketing, and customer education purposes.",
  },
  {
    question: "Can whiteboard videos improve learning retention?",
    answer: "Yes. The whiteboard format is one of the most retention-efficient video formats available because it sequences information progressively and creates an active cognitive engagement loop. Learners follow the construction of an idea rather than watching a completed visual, which produces measurably higher retention.",
  },
  {
    question: "Can you animate existing content?",
    answer: "Yes. We regularly work with clients who have existing scripts, slide decks, or e-learning modules that need to be rebuilt as whiteboard animation videos. We review the existing content, identify what should be preserved, what should be restructured, and what should be cut, and produce the animation accordingly.",
  },
  {
    question: "What file formats do you deliver?",
    answer: "Final whiteboard animation videos are delivered in MP4 (H.264) as standard, with additional formats available on request — including MOV, WebM, and platform-specific exports for YouTube, LinkedIn, LMS platforms, and internal portals. Resolution options include 1080p and 4K. Source files are included in most project scopes.",
  },
  {
    question: "How many revisions are included?",
    answer: "Our standard whiteboard animation projects include structured revision rounds at the script stage, the storyboard stage, and the final animation stage. The number of revision rounds is confirmed in your project scope. We do not cap the number of notes per round — a revision round means all of your feedback for that stage, addressed together.",
  },
  {
    question: "Do you create custom illustrations?",
    answer: "Yes. Every illustration in a Pixels Studios whiteboard animation is created custom for your project. We do not use pre-built illustration libraries or template packs.",
  },
  {
    question: "Who owns the final video?",
    answer: "You do. Upon final delivery and payment, full ownership of the final rendered video transfers to you. Source file ownership terms are detailed in your project agreement.",
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
