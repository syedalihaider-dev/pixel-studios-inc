"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Educational Video Production Services | Improve Learning and Knowledge Retention",
    description: "Why do most training programs report high completion rates and low behavior change? Because completion and comprehension are different metrics, most educational video production optimizes for the one that is easier to measure. A learner who clicked through a ten-module compliance training course and retained nothing has a 100% completion rate. The organization that measured that number and called it a success has a training problem masquerading as a training solution. Pixels Studios Inc. builds educational video production services around the second metric. What does the learner need to be able to do, understand, or apply after watching? That answer drives every creative and structural decision in the production."
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
