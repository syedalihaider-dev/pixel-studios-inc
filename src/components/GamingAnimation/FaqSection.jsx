"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Is Game Animation?",
    answer:
      "Game animation is the process of creating movement for characters, environments, and cinematic sequences within a video game, covering everything from character rigging to in-engine cutscenes.",
  },
  {
    question: "What Do Game Animation Outsourcing Services Actually Include?",
    answer:
      "Outsourcing can cover character design and animation, environment art, cinematics, or a combination of all three, scoped around whichever parts of production your internal team needs support with.",
  },
  {
    question: "How Do I Choose the Right Game Animation Studio for My Project?",
    answer:
      "Look for a studio with a portfolio matching your target art style, experience with your platform, and a production process that can integrate with your existing pipeline rather than working in isolation.",
  },
  {
    question: "What's the Difference Between Character Animation and Environment Animation?",
    answer:
      "Character animation focuses on rigging and movement for characters and creatures, while environment animation covers background elements, interactive props, and world-building assets that do not require character rigs.",
  },
  {
    question: "What Does 3D Game Animation Services Cost, and What Affects the Price?",
    answer:
      "Cost depends on asset complexity, rigging requirements, and volume of work needed. Most engagements are scoped after reviewing your art bible and production timeline.",
  },
  {
    question: "What Information Do I Need to Provide to Get an Accurate Quote?",
    answer:
      "Your art bible, reference assets, target platform, and a clear sense of scope all help us provide an accurate quote during the discovery stage.",
  },
  {
    question: "How Is Mobile Games Art Animation Different From PC or Console?",
    answer:
      "Mobile games art typically requires more optimized assets to manage file size and performance constraints, while PC and console animation can support higher polygon counts and more detailed rigging.",
  },
  {
    question: "Can 2D and 3D Game Animation Be Combined in the Same Game?",
    answer:
      "Yes. Many games mix 2D and 3D elements, such as 2D UI or cutscene art layered over a 3D game world, and we can support hybrid production approaches.",
  },
  {
    question: "Who Owns the Source Files and IP After Animation Outsourcing Is Complete?",
    answer:
      "You own the final delivered assets and associated intellectual property as outlined in your project agreement.",
  },
  {
    question: "Can You Work Within Our Existing Engine, Such as Unreal or Unity?",
    answer:
      "Yes. We deliver assets formatted for the most common game engines and can adapt our rigging and export process to fit your specific technical pipeline.",
  },
  {
    question: "Do You Sign NDAs for Unannounced Game Projects?",
    answer:
      "Yes. NDAs are standard for unannounced titles, and we follow secure file handling practices for any confidential game assets or story content.",
  },
  {
    question: "Can You Scale a Team Up Quickly for a Tight Milestone Deadline?",
    answer:
      "Yes. Flexible capacity is one of the main reasons studios use game animation outsourcing, and we can typically scale a team up for a defined crunch period with appropriate lead time.",
  },
  {
    question: "Do You Provide Rigging That Is Compatible With Our Existing Animation System?",
    answer:
      "Yes. We build rigs to match your technical requirements and existing character setup, so outsourced characters animate correctly within your established systems and tools.",
  },
  {
    question: "Can You Support Both Realistic and Stylized Art Directions?",
    answer:
      "Yes. Our team works across a range of art styles, from realistic to heavily stylized, matched to whatever direction your game's existing art bible establishes.",
  },
  {
    question: "How Do You Handle Feedback From Multiple Reviewers, Like Art Directors and Producers?",
    answer:
      "We consolidate feedback from multiple reviewers into a single, prioritized revision list before implementing changes, which keeps the process efficient even when several stakeholders are involved.",
  },
  {
    question: "Can You Produce Both Pre-Rendered Cinematics and In-Engine Cutscenes?",
    answer:
      "Yes. We can produce both, depending on your game's needs, with pre-rendered work suited to the highest visual fidelity and in-engine cutscenes suited to interactive or branching narrative sequences.",
  },
  {
    question: "Do You Provide Motion Capture Services for Character Animation?",
    answer:
      "Motion capture can be incorporated where appropriate for a project, either through our own pipeline or by working with existing mocap data your studio provides.",
  },
  {
    question: "Can You Support Live Service Games That Need Ongoing Content Updates?",
    answer:
      "Yes. Live service titles often need a steady cadence of new characters, cosmetics, or seasonal content, and we can structure an ongoing engagement around that release schedule.",
  },
  {
    question: "Do You Provide Storyboards or Animatics for Cinematic Sequences Before Full Production?",
    answer:
      "Yes. Cinematic sequences go through a storyboard and animatic stage for approval before full animation begins, giving your narrative team a checkpoint while changes are still inexpensive.",
  },
  {
    question: "Can You Support Cross-Platform Titles Releasing on Both Mobile and Console?",
    answer:
      "Yes. We can produce optimized asset variants for mobile alongside higher-fidelity versions for console or PC, from the same core character and environment models.",
  },
  {
    question: "Do You Work With Small Independent Studios as Well as Large Publishers?",
    answer:
      "Yes. We work with studios of every size, scoping engagements to fit the budget and production needs of an independent title as readily as a large publisher project.",
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