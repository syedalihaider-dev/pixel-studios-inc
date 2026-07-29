"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How Do You Protect Confidentiality for an Unreleased or Concept Vehicle Design?",
    answer:
      "We work under NDA on every confidential project, with restricted file access and secure handling of CAD data and design files throughout production, including limited internal access to source files.",
  },
  {
    question: "What's the Difference Between Vehicle Product Animation and Manufacturing Process Animation?",
    answer:
      "Vehicle product animation showcases the finished vehicle for marketing and sales, while manufacturing process animation visualizes production line sequences and assembly for training and internal communication rather than a customer-facing audience.",
  },
  {
    question: "What Are Crash and Safety Simulation Animations, and When Are They Used?",
    answer:
      "These animations visualize vehicle safety system behavior, often for technical marketing, investor presentations, or internal engineering communication, and are typically built from simulation or CAD data rather than filmed footage.",
  },
  {
    question: "What Are Exploded-View or Technical Animations Used For?",
    answer:
      "They break a vehicle or component down into its individual parts to show how systems fit together, commonly used for engineering documentation, technical sales, and after-sales training.",
  },
  {
    question: "Can Automotive Animation Be Built From CAD or Engineering Files, or Do You Need a Physical Vehicle?",
    answer:
      "We can build directly from CAD or engineering files, which means production can start well before a physical prototype exists.",
  },
  {
    question: "Can Automotive Animation Cover EV-Specific Technology Like Batteries and Charging?",
    answer:
      "Yes. EV battery animation and charging system visualization are increasingly common requests as manufacturers explain new technology to consumers unfamiliar with it.",
  },
  {
    question: "What's the Difference Between Real-Time Vehicle Visualization and a Pre-Rendered Animation?",
    answer:
      "Real-time visualization, such as a 3D car configurator, lets users interact with and customize the vehicle live. A pre-rendered animation is a fixed, finished video sequence with higher visual fidelity but no user interaction.",
  },
  {
    question: "Can You Build a 3D Car Configurator as Part of an Automotive Animation Project?",
    answer:
      "Yes. Interactive 3D car configurators are a common extension of a core vehicle animation asset library, letting customers explore colors, trims, and features in real time on a dealership site or showroom display.",
  },
  {
    question: "How Long Does an Automotive Animation Project Typically Take?",
    answer:
      "Most projects take four to eight weeks from discovery to delivery, depending on vehicle complexity and how many scenes or configurations are required.",
  },
  {
    question: "Can You Animate Multiple Trim Levels or Color Options From One Vehicle Model?",
    answer:
      "Yes. Once the core 3D model is built, additional trims, colors, and configurations can typically be produced faster and more affordably than the original animation.",
  },
  {
    question: "Do You Provide Both Marketing-Focused and Technically Accurate Engineering Animations?",
    answer:
      "Yes. We build both styles from the same underlying CAD data, adjusting the visual treatment and level of technical detail depending on whether the audience is a customer or an engineering team.",
  },
  {
    question: "Can Automotive Animation Be Used for Dealership and Point-of-Sale Displays?",
    answer:
      "Yes. Vehicle animations and configurator content are commonly adapted for dealership screens and point-of-sale displays, giving sales staff a consistent tool for walking customers through features.",
  },
  {
    question: "Can You Produce Automotive Animation for Aftermarket Parts and Accessories, Not Just Full Vehicles?",
    answer:
      "Yes. The same CAD-based production approach works for aftermarket parts, accessories, and component-level products, which is common for suppliers marketing to both consumers and OEM partners.",
  },
  {
    question: "What Happens if Our Vehicle Design Changes After Animation Production Has Started?",
    answer:
      "Because our models are built from your CAD data, design revisions can typically be reflected by updating the affected model rather than rebuilding the entire animation from scratch.",
  },
  {
    question: "Do You Provide Voiceover and Music Licensing for Automotive Commercial Animation?",
    answer:
      "Yes. Voiceover casting, licensed music, and sound design are all handled as part of production, so the final commercial arrives ready for broadcast or digital placement.",
  },
  {
    question: "Can Automotive Animation Support Global Launches With Multiple Language Versions?",
    answer:
      "Yes. Voiceover and on-screen text can be localized for multiple markets, which is common for global vehicle launches running simultaneously across several regions.",
  },
  {
    question: "How Detailed Does Our CAD Data Need to Be to Start a Project?",
    answer:
      "Production-level CAD detail produces the strongest result, but we can also work from earlier-stage design data and add detail as the vehicle design matures through development.",
  },
  {
    question: "Can You Deliver Both a Short Marketing Cut and a Longer Technical Version From One Project?",
    answer:
      "Yes. Once the vehicle model exists, shorter marketing cuts and longer technical walkthroughs can both be produced from the same underlying asset library, which is more efficient than treating them as separate projects.",
  },
  {
    question: "Do You Provide Both 2D Renderings and Full 3D Animation From the Same Vehicle Model?",
    answer:
      "Yes. Once a vehicle is modeled in 3D, we can produce still renderings for print and marketing alongside full video animation, without duplicating the modeling work.",
  },
  {
    question: "Can Automotive Animation Be Combined With Real Studio Photography for a Hybrid Campaign?",
    answer:
      "Yes. Combining CGI vehicle animation with real studio photography or location footage is a common approach for campaigns that need both photorealistic product shots and content the vehicle's confidentiality status would not otherwise allow.",
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