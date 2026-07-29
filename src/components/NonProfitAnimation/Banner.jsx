"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Non-Profit Animation That Moves People to Act",
    description: "A mission statement rarely moves a donor to give. A story does. Our non-profit animation services turn campaigns, missions, and impact stories into video built to reach donors, volunteers, and communities, scoped to fit the budget realities most non-profits actually work within. Every project is scoped around your actual funding, not a corporate production budget, so professional storytelling stays within reach regardless of your organization's size."
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