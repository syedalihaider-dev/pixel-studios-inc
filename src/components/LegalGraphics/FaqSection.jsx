"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Information Is Needed to Create Legal Graphics Animation?",
    answer: "Police reports, medical records, witness statements, expert reports, surveillance footage, site photographs and measurements, and engineering documents. The completeness of the discovery materials determines the accuracy of the reconstruction.",
  },
  {
    question: "Common mistakes in legal demonstrative evidence?",
    answer: "Depicting events as established when they are actually disputed. Every element produced at Pixel Studios is traceable to a specific evidence basis, and we document that basis as part of every delivery.",
  },
  {
    question: "Are legal animations admissible in court?",
    answer: "Generally yes, when they accurately represent established facts and expert opinions, are disclosed to opposing counsel, and are not presented as fact where they represent opinion. Admissibility is the attorney's responsibility. We produce to the accuracy standards that support it.",
  },
  {
    question: "How accurate must a legal animation be?",
    answer: "Sufficient to survive Daubert or Frye challenge. Every speed, distance, anatomical structure, and timeline must be consistent with the expert report and the underlying evidence.",
  },
  {
    question: "How long does it take to create a trial animation?",
    answer: "Four to eight weeks from complete discovery materials through attorney-approved final delivery. Expedited production available for matters approaching trial.",
  },
  {
    question: "What materials do you need to start?",
    answer: "Police reports, medical records, expert reports, photographs, and site measurements at minimum. The completeness of the materials determines the accuracy of the reconstruction.",
  },
  {
    question: "Can legal animations support expert witness testimony?",
    answer: "Yes. The expert explains the analysis. The animation provides the visual reference the jury can understand. The expert validates the animation as an accurate depiction of the opinion they have formed.",
  },
  {
    question: "What is the difference between accident reconstruction and legal animation?",
    answer: "Accident reconstruction is the forensic analysis performed by a qualified expert. Legal animation is the visual representation of that reconstruction for courtroom presentation. The reconstruction precedes the animation.",
  },
  {
    question: "How much does legal graphics animation cost?",
    answer: "Standard accident reconstruction animation: $3,000 to $8,000. Complex reconstructions or detailed medical legal animations: $8,000 to $25,000. Itemized quotes within 48 hours of a case brief.",
  },
  {
    question: "Can you update an existing courtroom animation?",
    answer: "Yes. New evidence, expert revisions, or attorney changes can be incorporated into existing animations where source files permit.",
  },
  {
    question: "Do you sign NDAs for confidential cases?",
    answer: "Yes. Every engagement begins with a mutual NDA. Case information and discovery materials are never referenced or discussed outside the specific engagement.",
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
