"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What's the Difference Between Advertising Animation and Social Media Animation?",
    answer:
      "Advertising animation is a broader category covering TV, streaming, and display placements, while social media animation refers specifically to content built for platform-native feeds, usually shorter and paced differently for scrolling behavior.",
  },
  {
    question: "How Long Should a Video Be for Advertising?",
    answer:
      "It depends on the platform. TV spots typically run 15 or 30 seconds, while social ads often perform best between 6 and 15 seconds, with longer versions reserved for retargeting or landing pages.",
  },
  {
    question: "What Is the Best Length for a Promotional Video?",
    answer:
      "Most promotional videos perform best between 30 and 90 seconds, long enough to build a story but short enough to hold attention through the message.",
  },
  {
    question: "What Formats and Aspect Ratios Do I Need Across TV, Social, and Digital Display?",
    answer:
      "Requirements vary by placement, from widescreen TV formats to vertical social cuts to square display ads. We deliver a full set of platform-ready exports so nothing needs re-editing later.",
  },
  {
    question: "Can Advertising Animation Include AR, VR, or Other Interactive Elements?",
    answer:
      "Yes. AR advertising animation and VR interactive ad animation are both options for brands looking to build more immersive, engagement-driven campaigns.",
  },
  {
    question: "How Do You Decide Between Character-Driven Animation and Motion Graphics for a Campaign?",
    answer:
      "It depends on the message. Character-driven animation tends to build emotional connection and brand personality, while motion graphics communicate data, features, or offers more directly and efficiently.",
  },
  {
    question: "Can One Advertising Animation Be Repurposed Into Multiple Cutdowns for Different Platforms?",
    answer:
      "Yes. Most campaigns are built from one core asset that gets recut into shorter and platform-specific versions, which is faster and more cost-effective than producing each version from scratch.",
  },
  {
    question: "What Makes an Animated Ad Perform Well Specifically on Social Media?",
    answer:
      "A strong hook in the first two seconds, clear messaging that works without sound, and pacing built for how people actually scroll rather than how they watch television.",
  },
  {
    question: "What's the Ideal Length for Different Types of Advertising Animation?",
    answer:
      "TV commercials typically run 15 or 30 seconds, pre-roll ads often work best around 6 to 15 seconds, and social content can range from 6-second bumpers to 60-second storytelling pieces depending on placement and objective.",
  },
  {
    question: "Do You Follow Our Existing Brand Guidelines When Creating Advertising Animation?",
    answer:
      "Yes. We work from your brand guidelines for color, typography, and tone from the discovery stage, so every piece of advertising animation stays consistent with your existing brand identity across every platform.",
  },
  {
    question: "Can Advertising Animation Be Tested Before Committing to a Full Media Buy?",
    answer:
      "Yes. Because animated concepts can be produced and revised faster than live-action footage, many clients test two or three creative directions with a smaller audience before committing full budget to one version.",
  },
  {
    question: "Do You Provide Both the Master File and Platform-Specific Cutdowns?",
    answer:
      "Yes. Every campaign includes a master version plus the specific cutdowns your media plan requires, delivered in the exact aspect ratios and durations each platform needs.",
  },
  {
    question: "Can You Work From an Existing Campaign Concept Developed by Our Agency?",
    answer:
      "Yes. We regularly work alongside agency creative teams, taking an approved concept and building the animated production around it rather than starting the creative process over.",
  },
  {
    question: "Do You Provide Storyboards We Can Review Before Committing to Full Production?",
    answer:
      "Yes. Every project includes a storyboard approval stage before animation begins, so you can review pacing and messaging while changes are still fast and inexpensive to make.",
  },
  {
    question: "How Far in Advance Should We Start Production Before a Campaign Launch Date?",
    answer:
      "We recommend starting four to six weeks before launch for most campaigns, though tighter timelines can sometimes be accommodated depending on scope and current production capacity.",
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