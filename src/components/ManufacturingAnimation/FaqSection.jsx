"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Types of Manufacturing Processes Can You Animate?",
    answer:
      "We can animate nearly any production process, from assembly lines and injection molding to chemical processing and packaging, as long as we have access to process documentation or CAD data to work from.",
  },
  {
    question:
      "What's the Difference Between Product Manufacturing Animation and Process Animation?",
    answer:
      "Product manufacturing animation typically showcases a finished piece of equipment or product for sales and marketing, while process animation focuses on the sequence of steps involved in producing something, often for training or technical documentation.",
  },
  {
    question:
      "How Much Do Manufacturing Animation Services Typically Cost?",
    answer:
      "Cost depends on process complexity, animation length, and the level of mechanical detail required. Most projects are scoped after reviewing your process documentation and goals.",
  },
  {
    question: "What CAD Files or Engineering Data Do I Need to Provide?",
    answer:
      "Standard CAD formats from most major software packages work well, along with any process documentation, technical drawings, or reference photos that help us understand how your equipment or process actually functions.",
  },
  {
    question:
      "How Is Confidential or Proprietary Manufacturing Information Protected?",
    answer:
      "We work under NDA on any confidential project, with restricted file access and secure handling of CAD data and process documentation throughout production.",
  },
  {
    question:
      "What Measurable Results Can Manufacturing Animation Deliver for a Business?",
    answer:
      "Common outcomes include shorter sales cycles for complex equipment, fewer repetitive training questions, and stronger trade show engagement when prospects can finally see how a process or machine actually works.",
  },
  {
    question:
      "What's the Difference Between Manufacturing Animation and a Digital Twin or Plant Walkthrough?",
    answer:
      "Manufacturing animation is a produced, directed video asset built for a specific communication goal, while a digital twin is typically an interactive, ongoing simulation tool used for operational monitoring rather than marketing or training content.",
  },
  {
    question:
      "What Should I Look for When Choosing a Manufacturing Animation Company?",
    answer:
      "Look for experience working from CAD or engineering data, a portfolio showing technical accuracy alongside visual polish, and a studio comfortable handling confidentiality requirements around proprietary processes.",
  },
  {
    question:
      "What Is Manufacturing Animation Turnaround Time for a Typical Project?",
    answer:
      "Most manufacturing animation projects take four to eight weeks from discovery to final delivery, depending on process complexity and the number of revision rounds involved.",
  },
  {
    question:
      "Can You Produce Mechanical Animation Showing Internal Component Interactions?",
    answer:
      "Yes. Mechanical animation services are one of our most common manufacturing requests, showing how internal components interact within a piece of equipment or assembly.",
  },
  {
    question:
      "Do You Provide Both Marketing-Focused and Technical Training Versions of the Same Content?",
    answer:
      "Yes. We often build a shorter marketing version alongside a longer, more detailed technical training version from the same underlying 3D model and process data.",
  },
  {
    question:
      "Can Manufacturing Animation Be Used for Trade Show and Conference Presentations?",
    answer:
      "Yes. Trade show and conference-ready content is a common deliverable, often produced alongside a longer-form version for website or sales use.",
  },
  {
    question:
      "Do You Provide Voiceover and Sound Design as Part of Production?",
    answer:
      "Yes. Voiceover and sound design are included as part of standard production, so you receive a fully finished, publish-ready video rather than a silent visual.",
  },
  {
    question:
      "Can You Animate Equipment That Is Still in Development or Not Yet Built?",
    answer:
      "Yes. As long as CAD data exists, we can build animation for equipment that has not been physically manufactured yet, which is common for pre-launch marketing.",
  },
  {
    question:
      "How Do You Handle Revisions if Our Equipment Design Changes Mid-Project?",
    answer:
      "Because our models are built from your CAD data, design revisions can typically be reflected by updating the affected model rather than starting the animation over.",
  },
  {
    question:
      "Can You Support Multilingual Safety Training for International Facilities?",
    answer:
      "Yes. Voiceover and on-screen text can be localized for multiple languages, which is common for manufacturers with facilities in more than one country and workforce.",
  },
  {
    question:
      "Do You Provide Package Pricing for Manufacturers Producing Multiple Training Modules?",
    answer:
      "Yes. Volume pricing is available for manufacturers commissioning a series of related training or process videos, typically offering better per-video value than one-off projects.",
  },
  {
    question:
      "Can Manufacturing Animation Include Real Facility Footage Alongside Animated Sequences?",
    answer:
      "Yes. Combining real facility footage with animated internal mechanism sequences is a common hybrid approach when parts of a process are filmable and others are not.",
  },
  {
    question:
      "Do You Offer a Discovery Call Before We Commit to a Full Project Scope?",
    answer:
      "Yes. Every engagement starts with a discovery call to review your process, goals, and confidentiality needs before we propose a scope or timeline that fits your production schedule.",
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