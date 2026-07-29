"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Education Animation</span> Project
    </>
  );

  const text =
    "If your lesson or training content deserves better retention than a slide deck delivers, talk to our team. We will scope the education animation your course, training program, or awareness campaign needs, built around how your audience actually learns and remembers. Whether you need a single lesson, a complete course series, or ongoing educational content, we create animation that improves understanding, supports long-term retention, and fits the platforms your learners already use. The first conversation is free, and it helps identify the best approach for your learning objectives, audience, and delivery format.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;