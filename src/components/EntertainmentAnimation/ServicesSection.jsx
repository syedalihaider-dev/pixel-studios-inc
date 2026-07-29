"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "2D Animation",
    description: "Stylized 2D animation for shorts, title sequences, and music videos where a hand-crafted, illustrative look fits the content best.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Animation",
    description: "Dimensional 3D animation for trailers, cinematics, and content that calls for depth, realism, or a more cinematic camera language.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Character Animation",
    description: "Custom character design and animation, whether building original characters or animating existing intellectual property under proper rights.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Title sequences, kinetic typography, and promotional motion graphics built to match a project's tone and genre.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Entertainment"
      description="What should an entertainment animation studio be able to deliver across a release cycle? These four formats span illustrative 2D work through cinematic 3D production, each suited to a different kind of project and budget."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;