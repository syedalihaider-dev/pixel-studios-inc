"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Employee Training Videos",
    description:
      "Employee training video production for onboarding, skills development, and process training. Built around the behavior the training is designed to change, not the information the department needs to have communicated.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "E-Learning Videos",
    description:
      "E-learning video production for digital learning platforms, LMS integration, and self-paced course content. SCORM-compatible deliverables for organizations managing learning completion and assessment data.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Learning Videos",
    description:
      "Corporate learning video production for organizations building internal knowledge bases, leadership development programs, and cross-functional training libraries.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Educational Animation Videos",
    description:
      "Educational animation services for concepts that text and static diagrams cannot communicate effectively. Abstract processes made concrete. Complex sequences made followable. Invisible mechanisms made visible.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Academic and Classroom Videos",
    description:
      "Academic video content for curriculum supplementation, flipped classroom delivery, and distance learning programs at K-12 and higher education levels.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Compliance Training Videos",
    description:
      "Compliance training video production that employees engage with rather than click through. The regulatory requirement is not the creative brief. The behavior change the regulation is designed to produce.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Product Training Videos",
    description:
      "Product training video production for customer education, sales enablement, and technical training content that reduces support burden by answering questions before they are asked.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Instructional Videos",
    description:
      "Instructional video production for step-by-step process guidance, procedural training, and how-to content that replaces the manual nobody reads.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Microlearning Videos",
    description:
      "Short-form microlearning video content targeting single concepts or skills in under five minutes. Built for the attention profile of working adults who do not have a training day. They have a training gap between meetings.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "LMS Training Content",
    description:
      "LMS-ready video production for platforms including TalentLMS, Docebo, Cornerstone, and custom LMS environments. File format, metadata, and SCORM packaging handled according to the platform's specifications.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Educational Video Production Services for Every Learning Objective"
      description="Our educational video production covers every format a training and learning program requires."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;