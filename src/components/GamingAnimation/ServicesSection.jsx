"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Character Design",
    description: "Character concept art, modeling, and rigging for player characters, NPCs, and enemies, built to match your game's art direction from the earliest concept stage.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Environment Design",
    description: "Environment art and animation covering level backgrounds, props, and interactive world elements, built to feel cohesive with your existing world design.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Game Level Design",
    description: "Level layout and environmental animation support that works alongside your internal design team, integrating cleanly with existing level architecture.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Cinematics",
    description: "In-game cutscenes and cinematic sequences that advance story and elevate production value at key narrative moments, whether pre-rendered or built in-engine.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Gaming"
      description="What does a full-service game animation studio need to cover across a production cycle? These four disciplines span everything from early character concepts through finished cinematics, built to integrate with your existing pipeline."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;