"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "Does an Architectural Animation Need to Exactly Match the Finished Building?",
    answer:
      "We build every animation from your actual plans, so it reflects the design as closely as possible at the time of production. Minor construction-phase adjustments after that point are common and do not require rebuilding the entire animation.",
  },
  {
    question: "What's the Difference Between an Architectural Walkthrough Animation and a 360° Virtual Tour?",
    answer:
      "A walkthrough animation is a directed, cinematic sequence built to highlight specific design features with intentional camera movement. A 360° virtual tour is interactive and self-guided, letting viewers explore the space at their own pace.",
  },
  {
    question: "Can Architectural Animation Be Combined With Real Drone or Site Footage?",
    answer:
      "Yes. Combining animated visualization with real site or drone footage is common, especially for projects where the surrounding context is already built and only the new structure needs to be visualized.",
  },
  {
    question: "Can Architectural Animation Be Used for Zoning Approvals or Community Presentations?",
    answer:
      "Yes. Clear visualization is particularly effective at planning commission meetings and community presentations, where stakeholders need to understand scale and impact without an architectural background.",
  },
  {
    question: "What Resolution and File Formats Will I Receive?",
    answer:
      "We typically deliver in 4K resolution, with standard video formats for presentations and higher-resolution stills available for print materials.",
  },
  {
    question: "How Many Rounds of Revisions Are Typically Included?",
    answer:
      "Most architectural animation projects include two to three revision rounds, though this can be adjusted based on project scope and complexity.",
  },
  {
    question: "Can Architectural Animation Start From Early Concept Sketches?",
    answer:
      "Yes. We can work from early concept sketches, though the level of detail in the final animation will reflect how developed the design is at that stage.",
  },
  {
    question: "Can an Architectural Animation Be Updated Later if the Design Changes?",
    answer:
      "Yes. Because we build from your source files, revisions to reflect design changes are typically faster and more affordable than starting over.",
  },
  {
    question: "How Long Does It Take to Render 3D Architectural Animation?",
    answer:
      "Rendering time depends on scene complexity and length, but most projects complete rendering within the final one to two weeks of the production timeline.",
  },
  {
    question: "How Much Does 3D Rendering Cost per Hour of Production Time?",
    answer:
      "Cost is typically scoped per project rather than per hour, based on scene complexity, animation length, and level of detail required, and confirmed after an initial discovery call.",
  },
  {
    question: "What Is the Difference Between Animation and Rendering?",
    answer:
      "Rendering produces a still, photorealistic image of a 3D scene, while animation adds movement, whether through a moving camera or dynamic elements, to create a video sequence.",
  },
  {
    question: "Do You Provide Both Interior and Exterior Views in the Same Project?",
    answer:
      "Yes. Most architectural animation projects combine exterior establishing shots with detailed interior walkthroughs, giving a complete picture of the building from arrival to interior finishes.",
  },
  {
    question: "Can Architectural Animation Include Landscaping and Site Context?",
    answer:
      "Yes. Surrounding landscaping, streetscape, and neighboring context can be included alongside the building itself, which helps viewers understand how the project fits into its actual setting.",
  },
  {
    question: "How Far in Advance Should We Commission an Architectural Animation for a Presentation Deadline?",
    answer:
      "We recommend starting four to six weeks before a hard presentation deadline, though shorter timelines can sometimes be accommodated depending on scene complexity and current production schedule.",
  },
  {
    question: "Can Architectural Animation Show Different Times of Day or Seasonal Lighting?",
    answer:
      "Yes. Lighting conditions can be adjusted to show a design at different times of day or across seasons, which is often useful for demonstrating how natural light moves through a space.",
  },
  {
    question: "Do You Provide Both High-Resolution Stills and Full Video From the Same Project?",
    answer:
      "Yes. Most projects produce both high-resolution still renderings for print and marketing use and full video animation from the same underlying 3D model, at no extra modeling cost.",
  },
  {
    question: "Can You Work Directly From Revit or SketchUp Files Instead of Requiring a Separate Model?",
    answer:
      "Yes. We can work directly from Revit, SketchUp, and most common architectural software files, which typically speeds up production compared to starting the modeling process from scratch.",
  },
  {
    question: "Is Furniture and Interior Styling Included, or Do We Need to Provide That Separately?",
    answer:
      "Furniture and interior styling can be included as part of the production, and we are happy to follow specific interior design direction if your project already has one.",
  },
  {
    question: "Can You Produce Animation for Interior Spaces Only, Without a Full Exterior Building?",
    answer:
      "Yes. Interior-only projects are common for renovation, retail, and hospitality work where the exterior is either existing or not the focus of the presentation.",
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