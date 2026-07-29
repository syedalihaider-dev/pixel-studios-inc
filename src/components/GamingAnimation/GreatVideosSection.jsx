"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Gaming Animation</span> Project
    </>
  );

  const text =
    "Talk to our team about your game, your timeline, and your art direction, and we will scope the character, environment, or cinematic animation support your production actually needs to hit its next milestone, whatever the size of your studio.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;