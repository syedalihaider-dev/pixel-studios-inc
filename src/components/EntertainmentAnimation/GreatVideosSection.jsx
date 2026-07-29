"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Entertainment Animation</span> Project
    </>
  );

  const text =
    "Talk to our team about your trailer, music video, or animated short, and we will build the entertainment animation that fits your creative vision and your release date, without compromising on either one, backed by a process built for exactly this kind of pressure.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;