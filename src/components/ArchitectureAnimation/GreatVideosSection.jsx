"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Architecture Animation</span> Project
    </>
  );

  const text =
    "If your design is stronger than your current presentation materials show, that is an easy fix. Talk to our team about your plans and your timeline, and we will build the architecture animation that helps clients and boards see the vision clearly, before a single wall goes up. Bring us your drawings, and we will bring the visualization your design deserves.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;