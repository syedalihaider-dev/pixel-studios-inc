"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How Much Does an Educational Animation Service Cost?",
    answer:
      "Educational animation cost depends on style, length, and complexity, particularly whether the project needs custom characters or data visualization. Most projects are scoped after an initial discovery call.",
  },
  {
    question: "What's the Ideal Length for an Educational Animation Video?",
    answer:
      "Most educational content performs best between two and five minutes, long enough to cover a concept fully but short enough to hold attention, especially for younger audiences.",
  },
  {
    question: "What's the Difference Between 2D, 3D, and Whiteboard Animation for Educational Content?",
    answer:
      "2D animation suits most concept explanations and is cost-effective, 3D adds depth for spatial or scientific topics, and whiteboard animation works well for sequential, step-by-step processes.",
  },
  {
    question: "How Long Does Animation Production Take?",
    answer:
      "Most educational animation projects take three to six weeks from discovery to delivery, depending on length and complexity.",
  },
  {
    question: "What Is the Meaning of Animator in Education?",
    answer:
      "In an educational context, an animator is the artist who builds the visual and motion elements that bring a lesson or concept to life on screen, working alongside instructional designers and subject matter experts.",
  },
  {
    question: "What Does an Animator Do for Kids' Content Specifically?",
    answer:
      "For children's educational content, animators focus on character appeal, simplified visual language, and pacing suited to shorter attention spans, while still keeping the underlying concept accurate.",
  },
  {
    question: "How Do You Optimize an Educational Animation Video for YouTube Specifically?",
    answer:
      "We consider thumbnail-friendly framing, a strong hook in the first few seconds, and pacing that supports watch time, all while keeping the educational content clear and accurate.",
  },
  {
    question: "Do You Provide Captions, Subtitles, or Multilingual Voiceovers for Accessibility?",
    answer:
      "Yes. Captions, subtitles, and multilingual voiceover options are available to support accessibility and reach broader audiences.",
  },
  {
    question: "Can Educational Animations Be Integrated Into an LMS or Made SCORM-Compliant?",
    answer:
      "Yes. We can package deliverables to be SCORM-compliant and compatible with most common learning management systems.",
  },
  {
    question: "How Many Revisions Are Included, and Who Owns the Final Video?",
    answer:
      "Most projects include two to three revision rounds, and you own the final deliverables once the project is complete.",
  },
  {
    question: "Can Educational Animation Include Assessment or Quiz Elements?",
    answer:
      "Yes. For interactive eLearning projects we can build embedded questions or checkpoints, depending on your LMS capabilities and instructional design requirements.",
  },
  {
    question: "Do You Work With Instructional Designers or Subject Matter Experts on Our Team?",
    answer:
      "Yes. Most projects involve close collaboration with your instructional designers or subject matter experts throughout script and storyboard development to keep content accurate and pedagogically sound.",
  },
  {
    question: "Can the Same Educational Animation Be Reused Across Multiple Courses or Cohorts?",
    answer:
      "Yes. Once produced, an educational animation can be reused across multiple course sections, semesters, or training cohorts without additional production cost.",
  },
  {
    question: "Can You Produce a Series of Related Educational Animations for a Full Curriculum?",
    answer:
      "Yes. Many schools and training teams commission a series covering multiple related topics under one consistent visual style, which is often more cost-effective than producing each video separately.",
  },
  {
    question: "What Age Groups Can Educational Animation Be Designed For?",
    answer:
      "We create educational animation for every age group, from early childhood through adult professional training, adjusting the visual style, pacing, and language to match the intended audience.",
  },
  {
    question: "Can You Adapt an Existing Curriculum Into Animated Content, or Do We Need a New Script?",
    answer:
      "We can adapt your existing curriculum into an animation script, saving time while keeping the content aligned with what your learners already study.",
  },
  {
    question: "Do You Offer Different Visual Styles for Different Subjects, Like Science Versus History?",
    answer:
      "Yes. We tailor the visual style to each subject, from technical diagram-driven science animations to character-led storytelling for history and social studies.",
  },
  {
    question: "Can Educational Animation Be Updated if Curriculum Standards Change?",
    answer:
      "Yes. Where possible, we update only the affected scenes rather than rebuilding the entire animation, making curriculum revisions faster and more cost-effective.",
  },
  {
    question: "Do You Offer Package Pricing for Schools or Districts Producing Multiple Videos?",
    answer:
      "Yes. Schools and districts producing multiple videos typically receive better per-video pricing, and we can provide a custom package during the discovery stage.",
  },
  {
    question: "Can Educational Animation Be Produced in a Series With a Consistent Host Character?",
    answer:
      "Yes. A recurring host or guide character is a popular approach for course series, creating familiarity and continuity across multiple lessons or training modules.",
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