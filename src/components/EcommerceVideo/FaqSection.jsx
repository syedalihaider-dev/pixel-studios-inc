"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Is Ecommerce Video Production?",
    answer: "Ecommerce video production is the process of creating product, promotional, and ad video through live action, 3D product animation, or a mix of both, built specifically for online storefronts, marketplaces, and paid social campaigns.",
  },
  {
    question: "What Types of Ecommerce Videos Should I Produce for My Online Store?",
    answer: "Most brands need a product demo video for the listing page, a promotional video for launches, and a set of short ad cuts for paid social. The right mix depends on catalog size, price point, and which platforms drive most of your traffic.",
  },
  {
    question: "How Can 3D Product Animation Improve Customer Experience?",
    answer: "It shows details, angles, and functionality that static photos cannot, which reduces buyer uncertainty, sets accurate expectations before purchase, and lowers returns caused by the gap between what was shown and what arrived.",
  },
  {
    question: "How Much Does a Product Video Cost?",
    answer: "Ecommerce video production cost depends on animation style, video length, and how many product variants or platform cuts you need. Most projects are scoped after we review your catalog, brand assets, and goals together.",
  },
  {
    question: "Should I Use Live-Action or 3D/CGI Animation for My Ecommerce Product Videos?",
    answer: "The live-action vs animation product video decision usually comes down to what you need to show. Real-world use and texture favor live action. Internal mechanisms, color variants, and products that do not exist as samples yet favor 3D. Many brands use both at different funnel stages.",
  },
  {
    question: "How Long Does It Take to Produce an Ecommerce Video, and How Long Should It Be?",
    answer: "Most projects take two to five weeks depending on complexity. Product page videos typically run 15 to 30 seconds, while ad cuts are often trimmed to 6 to 15 seconds to match social platform norms.",
  },
  {
    question: "Do Ecommerce Product Videos Actually Increase Sales?",
    answer: "Yes. Video on product pages consistently improves ecommerce video conversion rate by giving shoppers the context and confidence photos alone cannot provide before they commit to a purchase.",
  },
  {
    question: "What Video Specs and Formats Do I Need for Shopify, Amazon, and Social Ads?",
    answer: "Requirements vary by platform, from aspect ratio to file size and duration caps, and getting them wrong can mean a rejected listing or a badly cropped ad. We deliver a full set of platform-ready exports so you never re-edit the same video per channel.",
  },
  {
    question: "Do I Own the Raw Footage, and Can I Get Revisions After Delivery?",
    answer: "Yes. You retain your project assets, and every package includes revision rounds so the final video matches your brand before it goes live. Future re-cuts can be scoped separately as your catalog evolves.",
  },
  {
    question: "Why Are Ecommerce Videos So Effective?",
    answer: "They replicate the in-store experience of seeing, understanding, and trusting a product before buying it, which static images and text descriptions cannot do for a shopper deciding from their phone.",
  },
  {
    question: "Do You Handle Voiceover, Music, and Sound Design?",
    answer: "Yes. Voiceover, licensed music, and sound design are handled in-house as part of production, so you receive a fully finished, ready-to-publish video rather than a silent visual that still needs editing.",
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
