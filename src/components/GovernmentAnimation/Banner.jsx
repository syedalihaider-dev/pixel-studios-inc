"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Government Animation Citizens Actually Understand",
    description: "Public communication only works if the public actually understands it. Our government animation services turn policy, procedure, and public safety information into video that citizens and staff can follow, built for agencies that need accuracy, accessibility, and a defensible production process. Every project is built to move through your agency's specific review and procurement structure, so accuracy and accessibility standards are met before content ever reaches the public."
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