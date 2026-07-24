"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does a motion graphics video cost?",
    answer: "A professionally produced 30 to 60-second motion graphics video typically starts in the $1,500 to $4,000 range for standard 2D motion work. Productions with 3D motion graphics services, custom illustration, or broadcast-spec delivery run higher. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does it take to create a motion graphics video?",
    answer: "Most 30 to 60-second productions are completed in two to four weeks from a brief sign-off. Multi-format campaign packages and longer productions take proportionally longer. Rush timelines are available and priced transparently.",
  },
  {
    question: "Do you provide scripts and storyboards?",
    answer: "Yes. Scriptwriting and storyboarding are standard stages in our motion graphics video production services. We do not begin animation until both are approved by the client.",
  },
  {
    question: "Can you create motion graphics for social media marketing?",
    answer: "Yes. Social media motion graphics are among our most requested formats. We produce platform-native content for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts, built to each platform's technical and engagement requirements from the start.",
  },
  {
    question: "What industries benefit most from motion graphics?",
    answer: "Every industry requires complex ideas to be communicated clearly. SaaS, healthcare, finance, education, and e-commerce are our highest-volume sectors because all of them have products and services that text and photography cannot explain as efficiently as motion graphics can.",
  },
  {
    question: "Do you offer voiceover and sound design services?",
    answer: "Yes. Professional voiceover, music selection, and sound design are included in our standard motion graphics design services packages, matched to the brand tone established in the brief.",
  },
  {
    question: "What software do you use for motion graphics production?",
    answer: "Adobe After Effects is our primary tool. We also use Cinema 4D for 3D motion graphics services, Adobe Illustrator and Premiere Pro for asset creation and delivery, and Figma for UI-accurate interface animation.",
  },
  {
    question: "How many revisions are included in a project?",
    answer: "Two full revision rounds in standard packages. Additional rounds available and priced upfront. All revision terms are in writing before production begins.",
  },
  {
    question: "Can motion graphics improve conversion rates?",
    answer: "Consistently. Pages with motion graphics content convert at higher rates than static alternatives because motion graphics reduce the cognitive friction between a visitor and a purchase decision.",
  },
  {
    question: "Do you provide source files after project completion?",
    answer: "Yes. Source files are included in most project scopes. Exactly what is delivered is documented in the project proposal before production begins.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About Motion Graphics Services"
      faqs={faqs}
    />
  );
}
