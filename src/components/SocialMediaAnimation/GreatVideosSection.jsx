"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Get Started With Professional <span>Social Media Animation Services</span>
    </>
  );

  const text = "Most brands are publishing social media content that performs at a fraction of what well-produced animated content achieves. Book a discovery call and we will show you what is possible for your platforms, your audience, and your campaign objectives.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
