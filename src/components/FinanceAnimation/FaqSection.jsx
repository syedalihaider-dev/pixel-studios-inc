"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What's the Difference Between a Finance Video and a Finance Animation?",
    answer:
      "A finance video typically refers to live-action or presenter-led content, while finance animation uses motion graphics, illustration, or 3D visuals to explain concepts, data, or products without filming a physical presenter.",
  },
  {
    question: "How Much Does a Finance Animation Cost?",
    answer:
      "Finance Animation Production cost depends on complexity, length, and how much data visualization or compliance review is involved. Most projects are scoped after an initial discovery call.",
  },
  {
    question: "Which Company Creates Animated Videos for Financial Services?",
    answer:
      "Pixel Studios produces finance animation for banks, investment firms, and fintech companies, working within the compliance and accuracy standards financial services content requires.",
  },
  {
    question: "How Long Does It Take to Produce a Financial Animation?",
    answer:
      "Most Financial Services Video Production projects take three to six weeks from discovery to delivery, depending on complexity and compliance review cycles.",
  },
  {
    question: "Who Offers Finance Animation Services for Banks and Fintech Startups?",
    answer:
      "We work with both established banks and early-stage fintech startups, adapting the production process to fit each client's compliance requirements and internal review structure.",
  },
  {
    question: "Why Should Financial Companies Use Animated Videos?",
    answer:
      "Animated video simplifies complex financial concepts, builds client trust through clarity, and gives advisor teams a consistent way to explain products across every client conversation, which written material alone struggles to achieve.",
  },
  {
    question: "Do You Work With Our Compliance Team Before a Finance Animation Goes Live?",
    answer:
      "Yes. For any content involving specific claims about returns, fees, or regulatory status, we build in a compliance review checkpoint at the script stage, well before animation production begins.",
  },
  {
    question: "Can Finance Animation Be Updated When Rates or Product Terms Change?",
    answer:
      "Yes. Most projects are structured so specific segments, like rates or fee structures, can be revised without rebuilding the entire animation, keeping ongoing updates fast and affordable.",
  },
  {
    question: "Can You Localize Finance Animation for Multiple Markets or Languages?",
    answer:
      "Yes. Voiceover, subtitles, and on-screen text can all be localized, which is common for financial institutions operating across multiple regions or serving multilingual client bases.",
  },
  {
    question: "Do You Provide Both Consumer-Facing and Advisor-Facing Versions of the Same Content?",
    answer:
      "Yes. We often build a simplified consumer-facing explainer alongside a more detailed advisor-facing version from the same underlying script, so both audiences get the right level of depth.",
  },
  {
    question: "Can Finance Animation Support Both Retail Banking and Wealth Management Products?",
    answer:
      "Yes. We work across retail banking, wealth management, and institutional financial products, adjusting tone and complexity for each specific audience and product type.",
  },
  {
    question: "How Do You Ensure Data and Performance Figures Shown in Animation Stay Accurate?",
    answer:
      "We source all figures and data directly from your team and confirm them against your source documentation during script and storyboard review, before any animation work begins.",
  },
  {
    question: "Can Finance Animation Include Real-Time or Frequently Updated Data?",
    answer:
      "Live data integration is outside the scope of a standard animated video, but we can design content so figures and charts are easy to update on a defined schedule, such as quarterly performance reporting.",
  },
  {
    question: "Do You Provide Both Video and Static Infographic Versions of the Same Content?",
    answer:
      "Yes. We can produce a static infographic alongside the animated video from the same underlying data visualization work, giving you assets for both digital and print use.",
  },
  {
    question: "Can You Produce Finance Animation for Internal Employee Financial Wellness Programs?",
    answer:
      "Yes. Internal financial literacy and wellness content follows a similar approach to client-facing explainer videos, adjusted in tone and depth for an employee audience.",
  },
  {
    question: "Do You Work With Both Traditional Banks and Newer Digital-Only Financial Brands?",
    answer:
      "Yes. We work across traditional financial institutions and newer digital-first brands, adapting visual style and tone to match each brand's positioning.",
  },
  {
    question: "Can You Produce Finance Animation That Explains Risk Alongside Potential Returns?",
    answer:
      "Yes. Balanced, accurate risk communication is a standard part of our script development for any content discussing investment products, reviewed carefully against your compliance requirements.",
  },
  {
    question: "Do You Provide Ongoing Support for Recurring Quarterly Reporting Videos?",
    answer:
      "Yes. Recurring reporting content, such as quarterly performance updates, can be structured as an ongoing engagement so each new version reuses the established visual template and process, saving time on every cycle.",
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