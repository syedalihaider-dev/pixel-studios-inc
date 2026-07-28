"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Professional Game Animation Services for Engaging Gameplay Experiences.",
    description: "Pixels Studios produces game animation services built around the end state: animation that performs correctly in the engine, transitions cleanly between states, and communicates the character's weight and intention to the player every frame it is visible. We provide 2D game animation, 3D game animation, combat animation, cinematic animation, motion capture cleanup, and engine-ready deliverables for Unity, Unreal Engine, and custom pipelines. Every animation is produced to the technical specification of the build, not the visual preference of the animator."
  }
];

const actions = [
  { type: 'link', text: 'Learn More', href: '#' },
  { type: 'popup', text: "Let's Talk", variant: 'outline' }
];

const Banner = () => {
  return (
    <GlobalBanner
      slides={slides}
      bgVideo="/videos/home.webm"
      showPlayButton={true}
      actions={actions}
    />
  );
};

export default Banner;
