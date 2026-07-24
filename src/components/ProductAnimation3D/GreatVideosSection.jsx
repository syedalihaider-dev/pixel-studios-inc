"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Launch Your Next Product with Expert <span>3D Product Animation</span> Services
    </>
  );

  const text = "Book a discovery call, and we will scope your 3D product animation project, timeline, and investment within 48 hours, with no obligation to proceed. ";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
