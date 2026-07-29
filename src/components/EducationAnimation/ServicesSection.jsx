"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Whiteboard Animation",
    description: "Hand-drawn style whiteboard animation that builds a concept step by step, ideal for explaining processes and building sequential understanding one idea at a time.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Educational Videos",
    description: "Fully animated educational videos combining narration, visuals, and pacing designed for classroom, online, and self-paced learning environments.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Motion Graphics",
    description: "Data-driven and concept-driven motion graphics that make statistics, timelines, and abstract ideas easier to understand at a glance for students of any age.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "eLearning",
    description: "Animation built specifically for eLearning platforms, including interactive elements and SCORM-compliant packaging where required by your LMS.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Education"
      description="What does a complete education animation service offer beyond a single explainer? These four formats span quick concept videos through full eLearning modules, built to fit whatever platform your learners actually use."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;