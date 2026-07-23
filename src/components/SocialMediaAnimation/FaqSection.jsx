"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What are video editing services?",
    answer: "Video editing services cover all post production work required to turn raw footage into finished content: cutting, sequencing, color grading, audio mixing, motion graphics, caption creation, and platform export. Professional video editing services apply editorial judgment and technical expertise to produce content that performs in its distribution environment.",
  },
  {
    question: "How much does video editing cost?",
    answer: "A professionally edited 60 to 90-second marketing video typically starts in the $300 to $800 range. Corporate video editing with motion graphics, color grading, and multi-camera assembly runs $800 to $2,500 or more. Ongoing retainer-based video editing services are priced by volume and frequency. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does professional video editing take?",
    answer: "Most standard video editing projects complete in three to seven business days from footage delivery and brief sign-off. Complex multi-camera productions and projects requiring extensive motion graphics take longer. Every project receives a specific delivery date at kickoff, not a range.",
  },
  {
    question: "Can you edit videos for YouTube?",
    answer: "Yes. YouTube video editing services are among our most requested formats. We handle long-form content, YouTube Shorts editing, chapter marker setup, thumbnail frame selection, and export to YouTube's technical specifications, as well as short-form cuts for social media distribution.",
  },
  {
    question: "Do you provide subtitles and captions?",
    answer: "Yes. Accurate, frame-timed subtitle creation and caption services are included in standard packages. We produce properly formatted captions rather than auto-generated transcripts, available in multiple languages for multilingual distribution.",
  },
  {
    question: "Can you add motion graphics to videos?",
    answer: "Yes. Motion graphics integration is a standard component of our professional video editing services. Branded lower thirds, title sequences, call-to-action overlays, and animated graphic elements produced in After Effects and integrated into the edit.",
  },
  {
    question: "What file formats do you deliver?",
    answer: "Standard delivery includes MP4 in multiple resolutions, MOV for broadcast and post production handoffs, and platform-specific exports for YouTube, Instagram, TikTok, LinkedIn, and Facebook. All formats confirmed at project kickoff.",
  },
  {
    question: "Do you edit short-form videos for social media?",
    answer: "Yes. Short form video editing is one of our most active service areas: TikTok video editing, Instagram reel editing, YouTube Shorts editing, and LinkedIn video. Platform-native formats, aspect ratios, and caption treatment built in from the start.",
  },
  {
    question: "Can you improve audio quality?",
    answer: "Yes. Audio enhancement is included in our video post production services: dialogue cleanup, noise reduction, level normalization, and final mixing to broadcast and platform loudness standards without losing the natural quality of the original recording.",
  },
  {
    question: "How many revisions are included?",
    answer: "Two full revision rounds standard in every video editing project. Additional rounds available and priced upfront. All revision terms documented before production begins.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. We sign NDAs for clients requiring confidentiality before sharing footage, brand assets, or proprietary content. Standard for corporate video editing clients, enterprise brands, and projects involving pre-release footage or internal communications.",
  },
  {
    question: "Can you handle ongoing video editing projects?",
    answer: "Yes. Our online video editing services are available on a retainer basis for brands and creators with ongoing needs. Retainer agreements cover weekly or monthly editing volumes with agreed turnaround times, dedicated editors, and priority scheduling. ",
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
