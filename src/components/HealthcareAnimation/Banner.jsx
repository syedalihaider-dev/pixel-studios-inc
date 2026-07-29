"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Healthcare Animation Built on Medical Accuracy",
    description: "Patients understand a diagnosis better when they can see it. Our healthcare animation services translate anatomy, procedures, and medical devices into video that patients, providers, and sales teams can follow, verified for accuracy at every stage of production. Every animation is checked against your clinical source material by qualified reviewers before delivery, so the finished video stays medically accurate as well as genuinely easy to understand."
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