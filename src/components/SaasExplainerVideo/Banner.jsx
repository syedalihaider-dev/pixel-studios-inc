"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "SaaS Explainer Videos That Turn Visitors into Signups",
    description: "Why do great products lose signups on the homepage? Because software sells itself only after someone understands what it does, and most visitors bounce before they get there. Our SaaS explainer video services close that gap, translating complex product logic, workflows, and interfaces into video a prospect can absorb in under two minutes. Pixels Studios Inc. builds every video as the sales asset it is, not a design exercise. We work directly from your actual UI, brand system, and buyer personas rather than a generic SaaS template, so the finished video moves people from confused to convinced without a live demo call, and keeps working across your homepage, onboarding flow, and sales deck at the same time. One production, three jobs, and a video library that grows with your product instead of going stale the moment you ship your next release."
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
