"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Ready to Create Engaging <span>Motion Graphics?</span>
    </>
  );

  const text = "Tell us what you are trying to accomplish. We will tell you whether motion graphics is the right format, what approach we would take, and what a realistic budget and timeline look like.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
