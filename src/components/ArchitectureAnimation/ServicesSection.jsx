"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Architectural Rendering",
    description: "Photorealistic still renderings that establish materials, lighting, and mood for a design before construction begins, used for client presentations, marketing, and permitting submissions.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Walkthroughs",
    description: "Full walkthrough animations that move through a building room by room, showing flow, scale, and finishes exactly as they would be experienced in person by a future occupant.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Visualization",
    description: "Detailed 3D models built directly from architectural plans, used for design review, client presentations, and construction coordination across the whole project team.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "CGI",
    description: "High-end CGI production combining architectural accuracy with cinematic lighting and camera work for standout marketing and portfolio pieces that set a firm apart from competitors.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Architecture"
      description="What does a complete architecture animation service include? From early concept visuals to full cinematic CGI, these four formats cover a project from first client meeting to final marketing push, all built from the same underlying model."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;