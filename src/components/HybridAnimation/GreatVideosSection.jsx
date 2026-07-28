"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Start Your <span>Hybrid and Cel Animation</span> Project
    </>
  );

  const text = "Tell us the creative concept and the visual reference. We will tell you the right technique and what it costs.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
