"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Industrial Animation",
    description:
      "Full process animation showing how a production line, facility, or system operates from raw material to finished product, built for sales, training, and internal documentation across every department.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Technical Animation",
    description:
      "Exploded-view and mechanical animation revealing how machinery and equipment function internally, used for technical sales and engineering communication with prospects and partners.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Training Videos",
    description:
      "Manufacturing safety training animation and procedural content that standardizes instruction across shifts, facilities, and new hires, regardless of location.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "3D Product Animation",
    description:
      "Photorealistic product manufacturing animation showing equipment and machinery from every angle, built directly from CAD data for precision down to the smallest component.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Manufacturing"
      description="What does a manufacturing animation company need to cover across a plant's full communication needs? These four formats span sales-facing process animation through internal safety training, all built from your actual engineering data."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;