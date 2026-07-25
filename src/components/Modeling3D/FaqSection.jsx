"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Are 3D Modeling Services?",
    answer: "3D modeling services cover the creation of digital three-dimensional assets, including products, characters, environments, and architectural structures for use in games, marketing, AR/VR, and visualization.",
  },
  {
    question: "How Much Does 3D Product Animation Cost?",
    answer: "A standard 30 to 60-second 3D product animation typically starts at $2,500 to $6,000, depending on complexity. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How Much Do Professional 3D Modeling Services Cost?",
    answer: "A standard product 3D model typically starts at $300 to $800. Character and environment models range from $800 to $5,000 or more, depending on complexity. Itemized quotes within 48 hours.",
  },
  {
    question: "How Long Does a 3D Modeling Project Take?",
    answer: "Most single-asset 3D modeling projects are completed in one to two weeks. Complex characters or environments take three to four weeks, depending on the detail requirements.",
  },
  {
    question: "What File Formats Do You Deliver?",
    answer: "We deliver FBX, OBJ, GLTF, and engine-specific formats, including Unreal Engine assets and Unity assets exactly as specified at kickoff.",
  },
  {
    question: "Can You Create Models for Games and AR/VR Applications?",
    answer: "Yes. We produce real-time optimized 3D game asset modeling and AR/VR modeling services built to each platform's specific performance constraints.",
  },
  {
    question: "Do You Provide Texturing and Rendering Services?",
    answer: "Yes. PBR texturing, UV mapping, and full 3D rendering are standard components of our 3D modeling production process at no additional sourcing step.",
  },
  {
    question: "Can You Convert CAD Drawings into 3D Models?",
    answer: "Yes. CAD to 3D modeling conversion is a core service for manufacturing, industrial, and engineering clients who need visualization-ready assets from technical drawings.",
  },
  {
    question: "Do You Offer Low-Poly and High-Poly Models?",
    answer: "Yes. We produce both low-poly modeling for real-time applications and high-poly modeling for photorealistic rendering, matched to your actual delivery requirements.",
  },
  {
    question: "How Many Revisions Are Included?",
    answer: "Two full revision rounds are standard. Additional rounds are available and priced transparently upfront before production begins.",
  },
  {
    question: "Who Owns the Final 3D Assets?",
    answer: "Full ownership of the final 3D modeling deliverables transfers to you upon final payment, without restriction or ongoing licensing fees.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About 3D Modeling Services"
      faqs={faqs}
    />
  );
}
