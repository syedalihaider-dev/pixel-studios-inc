"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Custom Logo Animation",
    description: "Bespoke logo animation built from your brand assets, your visual identity, and the context where the animation will be used. No template motion paths, no stock reveal effects. Custom logo animation designed to match your brand personality and perform across every platform it appears on.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "2D Logo Animation",
    description: "Clean, versatile 2D logo animation for brands that need a professional platform-ready intro across video, web, and presentation environments. Our 2D logo animation services produce smooth, brand-consistent motion that works at every size and in every context.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Logo Animation",
    description: "Photorealistic 3D logo animation with depth, lighting, materials, and camera choreography. Our 3D logo animation company delivers cinematic quality that makes a static brand mark unforgettable in motion, built for broadcast, film, and premium digital content.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Logo Intro Animation",
    description: "Opening sequences that establish brand identity before the content begins. Produced in multiple duration cuts for long-form branded films, short-form social content, and every format in between.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Logo Reveal Animation",
    description: "Animated logo reveals that make the moment the logo appears feel intentional. Motion, timing, and sound design used together to build anticipation and reinforce brand impact. Available in 2D, 3D, and mixed-media styles.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Animated Logo for Social Media",
    description: "Animated logo content optimized for Instagram, TikTok, LinkedIn, and YouTube specifications. File formats and durations produced natively for each platform rather than adapted from a single master file.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Broadcast and Video Logo Animation",
    description: "Broadcast-spec logo animation for television, streaming, and high-production digital content. Produced to the frame rate, resolution, and color space requirements of broadcast delivery.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Professional Logo Animation Services in the USA"
      description="Our logo animation company provides every type of animated logo production a brand needs, from simple 2D logo animation for social media to full cinematic 3D logo reveals for broadcast. All produced in-house by our professional logo animation studio."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
