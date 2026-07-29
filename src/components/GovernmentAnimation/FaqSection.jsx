"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Should an Agency Look for When Choosing a Government Animation Studio?",
    answer:
      "Look for experience with public sector procurement processes, a portfolio of accessible and accurate public communication work, and a studio comfortable working within multi-stakeholder approval structures.",
  },
  {
    question: "How Does the Procurement Process Typically Work for Government Animation Services?",
    answer:
      "Processes vary by agency and jurisdiction, but typically involve a request for proposal, a scoped project response, and a formal vendor selection step before production begins.",
  },
  {
    question: "How Is Sensitive or Pre-Decisional Content Handled During Production?",
    answer:
      "We follow agreed confidentiality protocols and restricted access practices for any sensitive or pre-decisional content, with formal NDAs available where required.",
  },
  {
    question: "What's the Difference Between an Explainer Video and a Full Training Production?",
    answer:
      "An explainer video is typically shorter and focused on introducing a single concept or program to the public, while a full training production is longer and more detailed, built for staff who need comprehensive procedural knowledge.",
  },
  {
    question: "How Are Multiple Stakeholder Reviews and Approvals Managed?",
    answer:
      "We build defined review checkpoints into the project timeline at script, storyboard, and final animation stages, so each stakeholder group reviews at the appropriate point in production.",
  },
  {
    question: "Do Government Animation Projects Need to Meet Accessibility Standards Beyond Captions?",
    answer:
      "Often, yes. Depending on the agency and jurisdiction, requirements may include specific color contrast standards, audio description, and formatting compatible with assistive technology, which we account for during design.",
  },
  {
    question: "Can Government Animation Content Be Repurposed Across Multiple Channels?",
    answer:
      "Yes. A single piece of content can typically be adapted for agency websites, social media, in-office displays, and public presentations without a full new production.",
  },
  {
    question: "What Levels of Government Use Animation and Video Production Services?",
    answer:
      "We work with agencies at the federal, state, and local level, adapting our process to each agency's specific procurement and approval requirements.",
  },
  {
    question: "Can You Work Within a Fixed Government Budget or Grant-Funded Project?",
    answer:
      "Yes. We regularly scope projects to fit fixed budgets, including grant-funded initiatives, and can work with your team to prioritize the content that matters most within available funding.",
  },
  {
    question: "Do You Provide Multilingual Versions for Diverse Community Outreach?",
    answer:
      "Yes. Multilingual voiceover and subtitles are common for public awareness campaigns aimed at diverse community populations, and we scope these as part of the initial project discussion.",
  },
  {
    question: "Can Government Training Animation Be Integrated Into an Existing LMS?",
    answer:
      "Yes. We can package training content to be compatible with most common learning management systems used by government agencies for staff training and certification tracking.",
  },
  {
    question: "Do You Have Experience Working With Agency Communications and Legal Review Teams?",
    answer:
      "Yes. We regularly coordinate with agency communications, legal, and subject matter expert reviewers, building their review checkpoints directly into the production timeline.",
  },
  {
    question: "Can Government Animation Be Produced Under a Purchase Order or Contract Vehicle We Already Have?",
    answer:
      "In many cases, yes. We can discuss existing contract vehicles or purchase order requirements during the initial scoping conversation to determine the best path forward.",
  },
  {
    question: "How Do You Handle Requests for Revisions After a Policy Change Post-Launch?",
    answer:
      "We can revise specific segments affected by a policy change rather than requiring a full new production, keeping updates fast and cost-effective for ongoing public communication needs.",
  },
  {
    question: "Can You Support Emergency or Time-Sensitive Public Safety Communications?",
    answer:
      "Yes. For urgent public safety needs, we can prioritize expedited production, though the specific timeline depends on content complexity and available review capacity at the time.",
  },
  {
    question: "Do You Provide Closed Captioning and Sign Language Interpretation Options?",
    answer:
      "Yes. Closed captioning is included as standard, and sign language interpretation can be added for content requiring that level of accessibility support.",
  },
  {
    question: "Can You Work Under a Master Services Agreement for Multiple Departments Within One Agency?",
    answer:
      "Yes. A master services agreement can streamline procurement for agencies that expect ongoing or recurring animation needs across multiple departments.",
  },
  {
    question: "How Do You Handle Public Records Requests Related to Government Animation Projects?",
    answer:
      "We follow whatever records retention and disclosure requirements your agency specifies under applicable public records law, and can discuss specific handling requirements during project scoping.",
  },
  {
    question: "Can You Support Agencies With Limited Internal Communications Staff?",
    answer:
      "Yes. We regularly work with smaller communications teams, taking on more of the production planning and coordination work when internal bandwidth is limited.",
  },
  {
    question: "Do You Provide Content in Formats Suitable for Public Kiosks or Waiting Room Displays?",
    answer:
      "Yes. We can deliver content formatted for kiosk displays, waiting room screens, and other public-facing installations in addition to standard web and social formats.",
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