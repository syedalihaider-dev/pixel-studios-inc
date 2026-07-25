"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Are 3D Industrial Animation Services?",
    answer: "3D industrial animation services cover the visualization of manufacturing processes, machinery, and engineering systems using technically accurate 3D animation for training, marketing, and stakeholder communication.",
  },
  {
    question: "How Much Does Industrial Animation Cost?",
    answer: "A standard equipment demonstration animation typically starts at $3,000 to $7,000. Full process or facility animations range from $8,000 to $25,000, depending on complexity. Itemized quotes within 48 hours.",
  },
  {
    question: "How Long Does an Industrial Animation Project Take?",
    answer: "Most industrial animation projects are completed in four to eight weeks, depending on engineering data availability and the technical complexity of the system involved.",
  },
  {
    question: "Can You Animate Existing CAD Models?",
    answer: "Yes. CAD to animation services using SolidWorks, AutoCAD, Autodesk Inventor, or Revit files are a core part of our industrial animation process.",
  },
  {
    question: "What Industries Benefit Most from Industrial Animation?",
    answer: "Manufacturing, oil and gas, renewable energy, construction, automotive, and aerospace industries consistently benefit most from technically accurate industrial animation.",
  },
  {
    question: "Can Industrial Animations Be Used for Safety Training?",
    answer: "Yes. Industrial safety training animation is one of our most requested applications, allowing repeatable, controlled hazard training without exposing employees to operational risk.",
  },
  {
    question: "How Accurate Are Technical and Engineering Animations?",
    answer: "Every industrial animation is built directly from engineering data and reviewed by your engineering teams for technical accuracy before final delivery is approved.",
  },
  {
    question: "What File Formats Do You Deliver?",
    answer: "Standard delivery includes MP4 in multiple resolutions, with additional formats available for integration into Product Lifecycle Management systems and internal platforms.",
  },
  {
    question: "How Many Revisions Are Included?",
    answer: "Two full revision rounds are standard. Additional rounds are available and priced transparently upfront before production begins on the project.",
  },
  {
    question: "Who Owns the Final Animation Assets?",
    answer: "Full ownership of the final industrial animation assets transfers to you upon final payment, without restriction or ongoing licensing fees of any kind.",
  }
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About 3D Industrial Animation Services"
      faqs={faqs}
    />
  );
}
