"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "3D Architectural Visualization / Rendering",
    description: "Photorealistic still renderings establishing the look, materials, and lighting of a development before it is built, used across marketing, permitting submissions, and investor materials from the earliest project stages.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Animation & Walkthroughs",
    description: "Full walkthrough animations moving buyers room by room and floor by floor, exactly as they would experience the property in person, with realistic finishes and furnishing that sell the lifestyle, not just the layout.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "2D/3D Floor Plan Animation",
    description: "Floor plans brought to life with animated camera movement and furnishing overlays, so buyers grasp scale and flow at a glance instead of decoding a flat technical drawing.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Interior & Exterior Rendering Animation",
    description: "Detailed interior finishes and exterior facades rendered and animated from every angle, building buyer confidence in final quality well before a sales gallery even opens.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Promotional & Marketing Animations",
    description: "Brand-forward video for sales launches, website hero content, and digital ad campaigns, designed to generate qualified leads from the day a project is announced.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Aerial/Drone Simulation Animations",
    description: "Simulated aerial flythroughs showing a property's setting, surroundings, and scale without waiting for construction to reach a filmable stage. Ideal for master-planned, waterfront, and resort developments.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Real Estate"
      description="What does a full real estate animation service include? From still renderings to full aerial flythroughs, these six formats cover every stage of a development's marketing lifecycle, and most projects combine several of them from one shared 3D model."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;