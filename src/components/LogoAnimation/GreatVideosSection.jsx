"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Ready to Animate <br /> <span>Your Logo?</span>
    </>
  );

  const text = "Every video your brand publishes is an opportunity to make the first impression count. Book a discovery call and we will show you what professional logo animation services can do for your brand identity across every platform you publish on.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
