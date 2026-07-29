"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Ecommerce Animation</span> Project
    </>
  );

  const text = "If your product pages rely on photos alone, you are leaving conversions on the table. Talk to our team about your catalog, your platforms, and your launch timeline, and we will build the ecommerce video production plan that turns browsers into buyers, one platform-ready video at a time. From a single hero video to a full catalog rollout, we scope the work around your actual sales calendar.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
