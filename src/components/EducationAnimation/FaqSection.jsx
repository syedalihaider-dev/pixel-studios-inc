"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How Does the Production Process Work When Multiple Stakeholders Need to Review and Approve?",
    answer:
      "We build a review structure into the project plan from the start, with defined checkpoints at script, storyboard, and final animation stages, so every stakeholder group reviews at the right time rather than all at once.",
  },
  {
    question: "Can an Enterprise Animation Studio Work Within Our Existing Brand Guidelines?",
    answer:
      "Yes. We work directly from your brand guidelines and style guide, and can also help formalize a motion design system if one does not already exist for video content.",
  },
  {
    question: "Do Animation Studios Sign NDAs and Handle Project Data Securely?",
    answer:
      "Yes. NDAs are standard on enterprise projects, and we follow secure file handling practices for any confidential product, financial, or organizational information shared during production.",
  },
  {
    question: "What Pricing Models Are Available for Enterprise Clients Needing Multiple Videos?",
    answer:
      "Retainer and volume-based pricing are both available for enterprise clients with ongoing or recurring animation needs, typically offering better per-video value than one-off projects.",
  },
  {
    question: "Can You Produce Animated Content in Multiple Languages for Global Teams?",
    answer:
      "Yes. Multilingual animated video production is common for enterprise clients, with voiceover, subtitles, and on-screen text localized for each target market.",
  },
  {
    question: "Should an Enterprise Team Hire an Outside Studio or Build In-House Capability?",
    answer:
      "It depends on volume and cadence. Teams with occasional or highly variable needs typically get more value from an outside partner, while teams producing very high volumes of similar content may benefit from a hybrid model.",
  },
  {
    question: "What Does the RFP or Vendor Selection Process Typically Look Like?",
    answer:
      "Most enterprise clients request a portfolio review, a scoped proposal against specific project requirements, and a reference check before moving forward, and we are glad to support each of those steps directly.",
  },
  {
    question: "Who Owns the Animation Assets After a Campaign Runs Across Multiple Channels?",
    answer:
      "You own your final deliverables and can reuse them across internal and external channels for as long as they remain relevant to your organization.",
  },
  {
    question: "Can You Build a Reusable Brand Motion System for Our Organization?",
    answer:
      "Yes. For clients producing recurring content, we can develop a broader brand motion system covering colors, typography, and animation style, so future videos stay consistent even across different project teams.",
  },
  {
    question: "How Do You Handle Projects That Span Multiple Business Units With Different Sub-Brands?",
    answer:
      "We build a shared visual framework that flexes for each sub-brand's specific identity while staying recognizably part of the parent organization, which keeps everything coherent without forcing every unit into an identical look.",
  },
  {
    question: "Can Enterprise Animation Support Both Internal Training and External Marketing From One Engagement?",
    answer:
      "Yes. Many enterprise clients use the same production partnership for both internal and external content, since the underlying process for stakeholder review and brand governance applies equally to each.",
  },
  {
    question: "Do You Provide a Dedicated Account Manager for Ongoing Enterprise Relationships?",
    answer:
      "Yes. Ongoing enterprise engagements are supported by a dedicated account manager who understands your organization's structure, brand guidelines, and review process, rather than starting fresh with every new request.",
  },
  {
    question: "Can You Support a Global Rollout Across Multiple Regional Offices Simultaneously?",
    answer:
      "Yes. We regularly coordinate multilingual, multi-region rollouts, delivering localized versions of the same core content to different offices on a synchronized timeline.",
  },
  {
    question: "What Happens if Our Organization Restructures Mid-Project?",
    answer:
      "We stay flexible around organizational change, adjusting the review structure and stakeholder list as needed without restarting the entire project from scratch.",
  },
  {
    question: "Can You Support Recurring Quarterly or Annual Content Needs on a Retainer?",
    answer:
      "Yes. A retainer arrangement works well for organizations with predictable, recurring content needs, giving you priority scheduling and typically better per-project pricing than one-off engagements.",
  },
  {
    question: "Do You Provide Templates or Motion Graphics Kits Our Internal Team Can Reuse?",
    answer:
      "Yes. For clients with internal editing capability, we can provide motion graphics templates and brand kits that your team can adapt for smaller, lower-stakes internal updates between full productions.",
  },
  {
    question: "How Do You Handle Confidential Financial or Strategic Information During a Project?",
    answer:
      "We work under an NDA whenever confidential financial, strategic, or organizational information is shared, with secure file handling practices in place throughout production.",
  },
  {
    question: "Can You Support a Rebrand That Requires Updating Existing Video Assets?",
    answer:
      "Yes. Where existing animation assets can be updated to reflect a new brand identity rather than rebuilt from scratch, we assess that option first to save time and budget.",
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