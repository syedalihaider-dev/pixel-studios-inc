"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Get Started With <span>Animated Explainer Video</span> Services
    </>
  );

  const text = "Book a discovery call, and we will show you the difference that makes.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
