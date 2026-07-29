"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Insurance Animation That Turns Fine Print into Trust",
    description: "Why do insurance customers call support with questions the policy document already answers? Because insurance is built on fine print, and fine print rarely convinces or clarifies anything. Our insurance animation services translate policies, claims processes, and coverage details into video that customers actually understand, reducing confusion before it becomes a support ticket or a lost sale. Pixels Studios Inc. builds every insurance explainer to stay accurate to your actual policy language while remaining genuinely easy to follow, with your compliance team reviewing each stage before anything reaches a customer. From product explainers to claims walkthroughs, the goal is a brand that feels human and transparent in an industry that often feels the opposite."
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