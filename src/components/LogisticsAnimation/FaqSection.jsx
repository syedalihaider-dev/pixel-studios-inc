"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Are the Benefits of Logistics Animation for My Company?",
    answer:
      "It makes complex operations easy to understand for clients, investors, and new employees, which shortens sales cycles, improves training consistency across facilities, and strengthens how your company is perceived against larger competitors.",
  },
  {
    question: "Why Use Animation for Supply Chain Marketing Instead of Traditional Visuals?",
    answer:
      "Animation shows a full network end to end, which photography and site tours cannot replicate in one asset, and it can be updated as your operation changes without the cost and scheduling of a reshoot.",
  },
  {
    question: "How Do Logistics Animations Improve Customer Communication?",
    answer:
      "They give clients a visual reference for exactly how their shipments, inventory, or contracts will be handled, reducing miscommunication and building confidence before the first shipment ever moves through your network.",
  },
  {
    question: "What Is Logistics Animation and How Is It Different From a Regular Explainer Video?",
    answer:
      "Logistics animation is built around real operational systems: fleets, facilities, and workflows. Accuracy to your actual operation matters far more here than in a typical marketing explainer built on a generic concept.",
  },
  {
    question: "Should I Choose 2D or 3D Animation for My Logistics or Supply Chain Video?",
    answer:
      "3D works best for facilities, fleets, and physical processes where depth and scale matter to the viewer. 2D suits simpler conceptual overviews of a workflow or network structure and typically costs less.",
  },
  {
    question: "How Much Does a Custom Logistics or Supply Chain Animation Cost?",
    answer:
      "Cost depends on the complexity of your operation, video length, and the level of 3D detail required for facilities and fleet. Most projects are scoped after an initial discovery conversation about your goals.",
  },
  {
    question: "How Long Does It Take to Produce a Warehouse or Supply Chain Management Animation?",
    answer:
      "Most projects run four to six weeks from discovery to final delivery, depending on scope, the number of facilities involved, and revision rounds.",
  },
  {
    question: "Can a Logistics Company Animation Reflect Our Actual Fleet, Equipment, or Facilities?",
    answer:
      "Yes. We build every animation from your real assets and operations rather than stock visuals, so the final video accurately represents your company and does not look interchangeable with a competitor.",
  },
  {
    question: "How Does Logistics Animation Help Beyond Marketing?",
    answer:
      "The same animations support internal training, safety onboarding, and process standardization across facilities and regional teams that may not otherwise share one consistent way of explaining how things work.",
  },
  {
    question: "Can Logistics Animation Be Localized for Global Operations?",
    answer:
      "Yes. Voiceover, on-screen text, and subtitles can all be localized by region, which is especially useful for safety training animations deployed across facilities in multiple countries.",
  },
  {
    question: "What Information Should I Provide to Start a Logistics Process Animation Project?",
    answer:
      "Facility layouts, fleet details, process documentation, and a clear sense of your target audience all help us scope an accurate animation from the first discovery call. Where materials are limited, we fill gaps through interviews with your operations team.",
  },
  {
    question: "Can Logistics Animation Show Tracking and Technology Systems, Not Just Physical Assets?",
    answer:
      "Yes. Many projects combine physical fleet and facility visuals with animated overlays of tracking dashboards and software systems, giving prospects a complete picture of both the physical and digital sides of your operation.",
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