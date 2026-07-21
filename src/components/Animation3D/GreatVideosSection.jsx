"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Discuss Your <span>3D Animation</span> Project.
    </>
  );

  const text = "Tell us your product, your audience, and what you need them to do after watching. We will tell you whether 3D animation is the right format and what approach we would take.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
