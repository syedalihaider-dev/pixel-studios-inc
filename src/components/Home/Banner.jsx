"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Professional Video Animation Company - High Impact Animation Services",
    description: "Why do so many brands invest in animation and see almost no return? Because most animation studios are hired to make something that looks good, and looking good is not a business outcome. Your competitors have slick videos too. The ones winning with video are the ones whose content was built around what their audience actually needed to understand to take the next step. That is the gap Pixels Studios Inc. was built to close. Our premium animation services include 2D explainers, 3D immersive visualizations, whiteboard animations, and motion graphics designed to convert attention into action."
  },
  {
    title: "Your Go-To Animation Studio for Animation Services",
    description: "At Pixels Studios Inc., we operate differently. We ask what the video is supposed to accomplish before we touch the timeline. We build around your funnel, your audience's psychology, and the specific moment in the customer journey where the video will live. Our animation services run the full creative and production spectrum. Concept development, scriptwriting, character design, storyboarding, full animation, voiceover direction, sound design, and final delivery."
  },
  {
    title: "A Trusted Animation Company for 2D & 3D Animation Services That Fit Your Brand & Your Goals",
    description: "Don’t worry, Our team 2D & 3D animation services in the USA always begin with a genuine discovery process. We learn about your product, your audience, your brand voice, your market positioning, and precisely what you want a viewer to think, feel, or do after watching the video."
  }
];

const actions = [
  { type: 'link', text: 'Learn More', href: '/services' },
  { type: 'popup', text: "Let's Talk", variant: 'outline' }
];

const Banner = () => {
  return (
    <GlobalBanner
      slides={slides}
      bgVideo="/videos/home.webm"
      showTrustBadges={true}
      showPlayButton={true}
      actions={actions}
    />
  );
};

export default Banner;
