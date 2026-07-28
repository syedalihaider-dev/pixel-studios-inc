"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does it actually cost to get a game trailer made?",
    answer:
      "A motion graphics-led 60-second gameplay trailer for a mobile or indie game starts at $3,000 to $6,000. A cinematic animated trailer with original character animation and VFX runs $8,000 to $25,000. AAA-quality cinematic productions with full score and complex visual effects are scoped individually. Itemized quotes within 48 hours of a brief.",
  },
  {
    question: "How long does it usually take to produce a finished game trailer from start to launch?",
    answer:
      "A standard gameplay trailer with motion graphics and editing can be completed in two to four weeks from a brief sign-off. Cinematic animated trailers run four to eight weeks. Launch windows with fixed dates drive the production schedule backward, and we have never missed one.",
  },
  {
    question: "I am a solo or small indie dev on a tight budget. Is a trailer really worth it for my game?",
    answer:
      "Yes, with the right brief. A $3,000 trailer that communicates the game's emotional proposition clearly converts meaningfully better in the Steam discovery algorithm and in press outreach than no trailer. The question is not whether a trailer is worth it. It is whether the brief is good enough to produce a trailer that works.",
  },
  {
    question: "I already have raw gameplay footage. Do I still need an animated or cinematic trailer?",
    answer:
      "It depends on the game and the moment in its marketing timeline. Gameplay footage edited well can be highly effective for games with visually compelling real-time output. Cinematic animation is necessary when the game's emotional appeal is not fully visible in gameplay capture at the production quality the current build supports.",
  },
  {
    question: 'How do you make sure the trailer is honest and not "fake" compared to the real gameplay?',
    answer:
      "We are briefed explicitly against the misleading trailer problem. Every visual element in a gameplay trailer is either actual game footage or clearly presented as cinematic content. We have never produced a trailer that overpromised what the game delivers, and we consider that a commercial quality standard, not an ethical position.",
  },
  {
    question: "What does your end-to-end game trailer production process look like?",
    answer:
      "Creative brief and emotional objective. Script and storyboard. Footage capture or animation production. Motion graphics and VFX. Sound design and score. Platform-specific exports. Delivery before the deadline. No step is skipped, and no step is rushed at the expense of the one that follows.",
  },
  {
    question: "How many revisions do I get, and what happens if I do not like the first version?",
    answer:
      "Two structured revision rounds are standard. Every note is documented and confirmed before changes are made. If the first version requires structural changes beyond the revision scope, we have a conversation about what changed in the brief rather than absorbing additional production cost without acknowledgment.",
  },
  {
    question: "Can you work with my existing art, 3D models, and game builds, or do you recreate everything from scratch?",
    answer:
      "Yes. We work from existing game assets, builds, and footage wherever available. Existing assets reduce the production scope and cost. Limitations in the existing asset quality are identified at a brief stage rather than discovered during production.",
  },
  {
    question: "Can I work with you remotely, and how does collaboration work if I hire professional game trailer animators online?",
    answer:
      "Yes. Remote collaboration is our standard operating model. Brief sessions by video call. Storyboard review through shared documents. Delivery through secure file transfer. We have worked with studios on every continent, and the timezone gap has never been the reason a trailer was late.",
  },
  {
    question: "What is different about mobile game trailers, and can you help with user acquisition-focused videos?",
    answer:
      "Mobile game trailers are creative direct response advertising, not entertainment marketing. The hook must land before the user has decided to watch. The conversion objective must be visible before they have decided to stay. Every second is a cost measured in acquisition economics. Yes, we produce UA-optimized mobile game trailers, and we brief them accordingly.",
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