"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Animated Social Media Ads",
    description: "Paid social animated ads built for conversion. Our animated social media ads are designed around the first-frame hook, the value message, and the call to action in that order, with platform-specific aspect ratios and creative specifications built in from the start.",
    videoSrc: "https://player.vimeo.com/video/1201624785?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Instagram Animation Videos",
    description: "Instagram animation services for feed posts, stories, reels, and carousel content. Square or portrait aspect ratios, captions burned in for silent viewing, and a visual hook in the first frame that performs before the algorithm decides whether to extend reach.",
    videoSrc: "https://player.vimeo.com/video/1201624785?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Facebook Animation Videos",
    description: "Facebook video animation for organic posts, boosted content, and paid ad campaigns. Produced to meet the watch-time signals Facebook uses for organic distribution, across brand awareness, retargeting, and product launch campaign types.",
    videoSrc: "https://player.vimeo.com/video/1201624785?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "LinkedIn Animation Content",
    description: "LinkedIn animated video services for B2B brands, company announcements, and lead generation. LinkedIn video animation requires a different register: measured pacing, professional visual tone, and a hook that fits a professional context without talking down to the audience.",
    videoSrc: "https://player.vimeo.com/video/1201624785?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "TikTok Animation Videos",
    description: "TikTok animation video production built for a platform where the first frame determines reach. Native formats, on-screen text for silent viewing, and motion pacing calibrated to retain viewers who arrive mid-scroll with no prior brand awareness.",
    videoSrc: "https://player.vimeo.com/video/1201624785?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "YouTube Shorts Animation",
    description: "YouTube Shorts animation produced in the native vertical format with the watch-time signals YouTube uses for Shorts distribution. Built to perform in the Shorts feed and as traffic drivers to full-length channel content.",
    videoSrc: "https://player.vimeo.com/video/1201624785?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Animated Stories and Reels",
    description: "Short-form social media animation for stories and reels across Instagram and Facebook. Visual density, text overlay, and motion pacing calibrated for the 15-second window where most viewers decide whether to tap through or swipe.",
    videoSrc: "https://player.vimeo.com/video/1201624785?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Promotional Social Media Videos",
    description: "Promotional social media videos for product launches, seasonal campaigns, and limited-time offers. The offer, the urgency, and the response mechanism all visible within the first ten seconds for viewers who will not watch to the end. ",
    videoSrc: "https://player.vimeo.com/video/1201624785?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Our Social Media Animation Services"
      description="Our custom social media animation company covers every format, every platform, and every campaign objective."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
