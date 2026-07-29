"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Finance Animation That Makes Numbers Clear",
    description: "Numbers alone rarely convince anyone of anything. Our finance animation service turns investment products, banking services, and compliance content into video that clients, partners, and internal teams can actually follow, built for an industry where trust and clarity carry more weight than flashy visuals. Every project is reviewed for both clarity and compliance accuracy before it ever reaches a client, so the finished animation stays true to your product documentation while still being genuinely easy to follow."
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