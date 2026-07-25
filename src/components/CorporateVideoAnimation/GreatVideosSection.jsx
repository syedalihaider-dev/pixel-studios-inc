"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Get Started with <span>Corporate Video Animation</span> Services Today
    </>
  );

  const text = "Book a discovery call, and we will scope your corporate video animation project, timeline, and investment within 48 hours.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
