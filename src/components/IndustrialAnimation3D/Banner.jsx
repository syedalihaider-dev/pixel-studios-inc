"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Advanced 3D Industrial Animation Services for Modern Industries",
    description: "We are a dedicated industrial animation studio working directly from CAD models, engineering drawings, and SolidWorks, AutoCAD, or Autodesk Inventor files to produce industrial process animation that production teams, engineering teams, and safety officers all sign off on without hesitation. Whether you need manufacturing animation services for a plant walkthrough or industrial equipment animation for a sales presentation, the technical accuracy is never negotiable, and neither is the production quality that makes the final asset usable in front of investors and customers alike."
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
