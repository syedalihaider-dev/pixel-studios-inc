"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Advertising Animation Built to Stop the Scroll",
    description: "Why do so many ads get skipped in the first two seconds? Because most creative is competing for attention it never earns. Our advertising animation services build commercials, motion graphics, and social content designed to hook fast and hold attention long enough to land your message and move a viewer to act. Every campaign is built from one core creative concept, then adapted across every format and platform your media plan requires, so your brand looks consistent whether someone sees it on television or in a six-second social bumper."
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