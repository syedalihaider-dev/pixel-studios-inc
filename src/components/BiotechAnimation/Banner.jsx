"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Biotech Animation That Makes Complex Science Fundable",
    description: "Pixels Studios Inc. builds every biotechnology animation around accuracy first and polish second, because in this category the order matters. A beautiful animation that misrepresents the science costs you more credibility than having no visual at all. Whether you are preparing a Series A pitch, an IRB submission, or a physician education campaign, the goal stays the same: give your audience a clear, correct picture of the science in the shortest possible time."
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
