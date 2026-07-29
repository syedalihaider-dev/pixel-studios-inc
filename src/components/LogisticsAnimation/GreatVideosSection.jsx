"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Logistics Animation</span> Project
    </>
  );

  const text =
    "If your operation is more sophisticated than your current sales deck or training materials show, it is time to fix that. Talk to our team about your network, fleet, or facilities, and we will build the logistics animation that finally shows it clearly. Accurate to your real operation, ready for sales, training, and investor conversations alike.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;