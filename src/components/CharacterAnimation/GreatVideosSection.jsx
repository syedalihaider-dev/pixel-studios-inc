"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Start Your <span>Character Animation</span> Project Today
    </>
  );

  const text = "Tell us the character, the context, and the output requirement. We will tell you the production approach and what it costs.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
