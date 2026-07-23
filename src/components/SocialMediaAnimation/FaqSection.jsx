"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much do social media animation services cost?",
    answer: "A single 15 to 30-second social media motion graphics animation typically starts in the $500 to $1,500 range. More complex 2D animated social media content runs $1,500 to $4,000 per piece. Multi-platform campaign packages are priced by scope. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "Which social media platforms support animated videos?",
    answer: "All major platforms support animated video: Instagram, TikTok, Facebook, LinkedIn, YouTube, and X. Each has specific technical requirements for format, aspect ratio, duration, and file size. We build to each platform's actual specifications rather than adapting a single master file.",
  },
  {
    question: "What is the ideal length for a social media animation?",
    answer: "Platform-dependent. TikTok and Instagram Reels perform best at 15 to 30 seconds for awareness content. LinkedIn can sustain 30 to 90 seconds for B2B audiences. YouTube Shorts cap at 60 seconds. Duration is set based on the platform and the brief objective.",
  },
  {
    question: "Can animated videos improve social media engagement?",
    answer: "Consistently. Animated social media videos generate higher engagement rates than static posts across every platform that uses engagement as an organic distribution signal. Motion catches attention, and a well-built hook keeps the viewer watching long enough for the message to land.",
  },
  {
    question: "Do you create animations for paid advertising campaigns?",
    answer: "Yes. Animated social media ads are among our most requested formats. We produce paid advertising animation for Meta, TikTok, LinkedIn, and YouTube with creative structures built around click-through rate and conversion objectives.",
  },
  {
    question: "Can you repurpose one animation for multiple platforms?",
    answer: "Yes. We produce a master animation and adapt it into platform-specific versions with correct aspect ratios, durations, and technical specifications. Multi-platform packages are priced more efficiently than individual productions per platform.",
  },
  {
    question: "How long does it take to create a social media animation?",
    answer: "Most social media animations complete in one to three weeks from brief sign-off. Single 15 to 30-second animations with complete brand assets can complete in five to seven business days. Rush timelines are available.",
  },
  {
    question: "Do you provide scripts and creative concepts?",
    answer: "Yes. Script development and creative concepting are standard stages in our social media animation production process. Hook, message structure, and call-to-action sequence developed based on the platform and the campaign objective. Approved before any design or animation begins.",
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
