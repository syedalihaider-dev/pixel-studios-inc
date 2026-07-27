"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Start Your <span>Medical Animation</span> Project with a Free Consultation
    </>
  );

  const text = "Book a discovery call, and we will scope your medical animation project, clinical review requirements, timeline, and investment within 48 hours.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
