"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "2D Character Animation",
    description:
      "2D character animation for games, marketing, and entertainment content. Frame-by-frame, rigged puppet, and hybrid animation approaches were selected based on the visual style and production requirements of each brief.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Character Animation",
    description:
      "3D character animation for games, film, advertising, and interactive content. Keyframe and motion capture approaches delivered to the visual quality and technical specification that the brief defines.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Game Character Animation",
    description:
      "Real-time game character animation with the state machine awareness and engine integration testing that game animation production requires, beyond standard character performance.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Creature Animation",
    description:
      "Non-human character animation for creatures, animals, and entities whose movement logic is derived from anatomy rather than borrowing human movement conventions and hoping it reads correctly.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Facial Animation",
    description:
      "Blend shape-driven facial animation for emotional performance, dialogue scenes, and the micro-expressions that distinguish a character that feels present from one that appears rendered.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Lip Sync Animation",
    description:
      "Phoneme-accurate lip sync animation against recorded dialogue. Automated lip sync is reviewed and corrected by animators because automated processes produce technically compliant results that do not look correct.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Motion Capture Animation",
    description:
      "Motion capture data processed, cleaned, and retargeted to production rigs. Mocap is a data capture method, not a finished animation product. We treat the gap between those two things as production work.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Cinematic Character Animation",
    description:
      "Character performance animation for film, game cinematics, and promotional content at the quality level that cinematic output demands.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Cartoon Character Animation",
    description:
      "Exaggerated, expressive cartoon character animation with the timing and secondary motion that makes cartoon characters feel alive rather than illustrated.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "Realistic Character Animation",
    description:
      "Photorealistic character performance animation with the subtle weight and secondary motion that distinguishes convincing realistic animation from accurate realistic animation.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Bring Characters to Life with Expert Character Animation Services"
      description="Character animation is the technical discipline that produces emotional results. The technical work is necessary. The emotional result is the only measure that matters to the audience consuming it."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;