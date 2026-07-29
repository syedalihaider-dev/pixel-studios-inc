"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How Much Does an Entertainment Animation Project Cost?",
    answer:
      "Entertainment animation cost varies widely based on style, length, and complexity, whether the project is a simple title sequence or a fully animated music video with custom characters. Most projects are scoped after an initial discovery call.",
  },
  {
    question: "What's the Difference Between 2D, 3D, and Stylized Animation for Entertainment Content?",
    answer:
      "2D animation suits a more illustrative, hand-crafted look and tends to be more cost-effective; 3D adds depth and cinematic realism; and stylized approaches blend techniques to create a distinctive visual identity for a specific project.",
  },
  {
    question: "Do You Handle Music Licensing and Sync Rights for Animated Music Videos?",
    answer:
      "We can coordinate with your existing rights holders and licensing arrangements, but securing music licensing and sync rights is typically the responsibility of the artist or label commissioning the project.",
  },
  {
    question: "How Long Does It Take to Produce a Show Intro, Title Sequence, or Trailer?",
    answer:
      "Most projects take three to eight weeks depending on length, complexity, and the number of creative revision rounds involved.",
  },
  {
    question: "What Video Specs and Formats Do I Need for Broadcast vs. Streaming?",
    answer:
      "Broadcast delivery typically requires specific technical specs that differ from YouTube or streaming platform requirements. We deliver a full set of platform-ready exports so nothing needs re-editing later.",
  },
  {
    question: "Can You Animate Based on Existing Characters or IP We Already Own?",
    answer:
      "Yes, as long as you hold the rights to that intellectual property, we can animate existing characters or extend an established visual style.",
  },
  {
    question: "How Much Creative Input Do We Get During the Animation Process?",
    answer:
      "Entertainment content is often subjective, so we build in more structured review rounds at script and storyboard stages specifically to give you meaningful creative input before full animation production begins.",
  },
  {
    question: "Do You Provide Voice Casting or Voice-Over Talent for Animated Content?",
    answer:
      "Yes. We can help source voice casting and voice-over talent for animated entertainment content as part of the production process.",
  },
  {
    question: "Can You Match an Existing Show or Franchise's Established Visual Style?",
    answer:
      "Yes. When working within an existing franchise, we study the established style guide and prior content closely to keep new animation visually consistent with what audiences already recognize.",
  },
  {
    question: "Do You Offer Package Pricing for Series or Multi-Episode Content?",
    answer:
      "Yes. Series and multi-episode projects typically receive more favorable per-episode pricing than a single standalone piece, since character models and environments can be reused across episodes.",
  },
  {
    question: "Can You Deliver Both a Full-Length Trailer and Shorter Social Cutdowns From One Project?",
    answer:
      "Yes. Most trailer projects are built to produce a full-length version alongside shorter social and teaser cutdowns from the same core animation assets.",
  },
  {
    question: "Do You Provide Concept Art Before Committing to Full Animation Production?",
    answer:
      "Yes. Concept art and character or environment design come before animation begins, giving you an approval checkpoint while changes are still fast and inexpensive to make.",
  },
  {
    question: "Can You Animate a Music Video Around a Track That Is Not Yet Finalized?",
    answer:
      "It is possible but not ideal, since pacing and timing depend heavily on the final mix. We generally recommend working from a locked or near-final track for the strongest result.",
  },
  {
    question: "Do You Handle International Distribution Format Requirements for Trailers?",
    answer:
      "Yes. We can deliver trailers formatted for different regional broadcast and streaming platform requirements as part of a global release.",
  },
  {
    question: "Can We Request Multiple Concept Directions Before Choosing One to Move Forward With?",
    answer:
      "Yes. For projects where creative direction is still being decided, we can present a small number of concept directions during early development before committing to full production on one.",
  },
  {
    question: "Do You Offer Post-Production Sound Mixing and Mastering for Animated Content?",
    answer:
      "Yes. Sound mixing and mastering are included as part of final production, ensuring the audio meets broadcast or streaming platform delivery standards.",
  },
  {
    question: "Can You Produce Companion Content Like Behind-the-Scenes or Making-Of Videos?",
    answer:
      "Yes. Behind-the-scenes and making-of content can be scoped alongside a primary animation project, often reusing early concept art and process footage from the main production.",
  },
  {
    question: "What Happens if Test Audiences React Differently Than Expected to a Concept?",
    answer:
      "If early feedback suggests a creative direction is not landing, we can pivot to an alternate concept during the storyboard stage, before full animation production makes changes more costly.",
  },
  {
    question: "Can You Produce a Consistent Visual Style Across a Multi-Episode Series or Franchise?",
    answer:
      "Yes. We document a visual style guide during the first project in a series, which keeps character models, environments, and tone consistent across every subsequent episode or installment.",
  },
  {
    question: "Do You Offer Expedited Production for Urgent Release Date Changes?",
    answer:
      "In many cases, yes, depending on how much the timeline compresses and current studio capacity. We recommend flagging any date changes as early as possible so we can adjust the production plan.",
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