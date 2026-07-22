"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Whiteboard Animation Services for Branding, Training, & Marketing",
    description: "Most animated videos are forgotten within 48 hours. Whiteboard animation videos are not, because the format does something other styles cannot: it removes every visual distraction and makes the viewer watch the idea being built in real time. That sustained attention is not an accident. It is the format working exactly as intended.  At Pixels Studios Inc., our professional whiteboard animation services are built around one objective: keeping your audience watching long enough to understand, believe, and act."
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
