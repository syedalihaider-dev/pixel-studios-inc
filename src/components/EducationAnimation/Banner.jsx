"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Education Animation That Actually Gets Retained",
    description: "Why do so many students forget a lesson within a week of learning it? Because reading and lecture alone are not how most people retain complex information. Our education animation service turns lessons, training modules, and difficult concepts into video that learners actually remember, built for schools, edtech platforms, and training teams alike. Every project is built around your actual curriculum and learning objectives, not a generic template, so the finished video supports the specific outcome your course or program is measuring."
  }
];

const actions = [
  { type: 'link', text: 'Learn More', href: '#' },
  { type: 'popup', text: "Let's Talk", variant: 'outline' }
];

const Banner = () => {
  return (
    <GlobalBanner
      slides={slides}
      bgVideo="/videos/home.webm"
      showPlayButton={true}
      actions={actions}
    />
  );
};

export default Banner;