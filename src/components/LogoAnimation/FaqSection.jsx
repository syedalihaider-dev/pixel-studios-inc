"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What are logo animation services?",
    answer: "Logo animation services cover the production of animated versions of a brand's logo for video, social media, web, presentations, and broadcast. This includes 2D logo animation, 3D logo animation, logo reveal effects, and animated brand mark production in every format a brand needs.",
  },
  {
    question: "How much does logo animation cost?",
    answer: "A professionally produced 2D logo animation starts in the $400 to $1,200 range. 3D logo animation runs $1,500 to $4,000 or more depending on complexity. Cinematic logo reveals with VFX and custom sound design sit at the upper end. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does logo animation take?",
    answer: "Most projects complete in one to two weeks. Complex 3D logo animations with custom environments take two to three weeks. Rush production is available for campaign launch windows.",
  },
  {
    question: "Can you animate an existing logo?",
    answer: "Yes. We animate existing logos from the vector files you provide. If the logo does not exist in vector format, we can redraw it in Adobe Illustrator as part of the project scope.",
  },
  {
    question: "Do I need a vector logo file?",
    answer: "Yes. Vector format (AI, EPS, or SVG) is required for professional logo animation. It allows us to animate individual elements independently. If you only have a PNG or JPEG, we can discuss options in the discovery call.",
  },
  {
    question: "What file formats will I receive?",
    answer: "Standard delivery includes MP4 in multiple resolutions, a transparent-background MOV for compositing, a GIF for web use, and source files in most project scopes. Platform-specific exports for social media and broadcast are included where specified.",
  },
  {
    question: "Can I use my animated logo on social media?",
    answer: "Yes. We produce platform-optimized versions in the correct aspect ratios, file sizes, and formats for Instagram, TikTok, LinkedIn, YouTube, and X. Social media optimization is included for projects where social use is specified at kickoff.",
  },
  {
    question: "Do you create 2D and 3D logo animations?",
    answer: "Yes. We are both a 2D logo animation company and a 3D logo animation company with full in-house capabilities in both formats. The choice is made based on brand positioning, distribution context, and the production budget established in the brief.",
  },
  {
    question: "Can you add sound effects to my logo animation?",
    answer: "Yes. Sound design is included in most logo animation packages. Custom sound effects, music stings, and audio branding are available. Sound is matched to the motion and the brand tone established in discovery.",
  },
  {
    question: "Who owns the final animation files?",
    answer: "Full copyright ownership transfers to you upon final payment. You own the right to use, distribute, and publish the animation in any format, on any platform, for any purpose without restriction or ongoing licensing fees.",
  },
  {
    question: "How many revisions are included?",
    answer: "Two full revision rounds standard. Additional rounds available and priced upfront. All revision terms documented before production begins.",
  },
  {
    question: "Can logo animation improve brand recognition?",
    answer: "Yes. Motion combined with sound creates stronger memory encoding than static visuals. A consistent animated logo used across all video content builds audience recognition faster than a static equivalent seen the same number of times.",
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
