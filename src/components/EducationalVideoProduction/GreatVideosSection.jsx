"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Start Your <span>Legal Animation</span> Project
    </>
  );

  const text = "Tell us the case type, the stage of litigation, and what the animation needs to establish. We will review the brief and respond with a scope and timeline within 48 hours.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
