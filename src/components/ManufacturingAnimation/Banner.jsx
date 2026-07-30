"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Manufacturing Animation That Shows the Process",
    description: "Manufacturing floors are hard to film and even harder to explain in a sales deck. Our manufacturing animation services turn production processes, machinery, and safety procedures into clear video, built directly from your engineering data for accuracy on every frame. Every project starts with your CAD files or process documentation, so what appears on screen matches what actually happens on your production line, not a generic stand-in. From assembly lines to safety training, the same production process supports every part of your communication needs."
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