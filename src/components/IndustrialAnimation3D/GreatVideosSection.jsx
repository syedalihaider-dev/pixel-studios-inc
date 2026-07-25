"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Start Your <span>Industrial Animation</span> Project with a Free Consultation
    </>
  );

  const text = "Book a discovery call, and we will scope your industrial animation project, timeline, and investment within 48 hours, with no obligation to proceed.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
