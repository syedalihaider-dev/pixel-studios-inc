"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Corporate Video Editing",
    description: "Brand films, company overviews, executive interviews, and investor presentations edited to the visual and audio standard that enterprise brand environments demand. Our corporate video editing team applies the pacing, grade, and treatment that makes corporate content feel polished rather than assembled.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Marketing and Promotional Video Editing",
    description: "Promotional video editing built around the campaign objective. Every cut, transition, and graphic overlay is placed with the conversion goal in mind, from product launches and brand campaigns to lead generation content that is sequenced to hold attention and drive response.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Social Media Video Editing",
    description: "Short form video editing for TikTok video editing, Instagram reel editing, YouTube Shorts editing, and LinkedIn video with correct aspect ratios, pacing, and caption treatment built in from the start, not adapted after the fact.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "YouTube Video Editing",
    description: "YouTube video editing services for brands and creators covering long-form content, series production, chapter structuring, thumbnail frame selection, and end-screen setup that YouTube's algorithm and audience both respond to.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Podcast Video Editing",
    description: "Multi-camera sync, guest isolation cuts, b-roll integration, lower third graphics, and audio cleanup for podcast content published to YouTube and social platforms. Watchable and listenable in equal measure.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Explainer Video Editing",
    description: "Final assembly, audio mixing, motion graphics integration, caption placement, and platform export for animated and live-action explainer video content produced in-house or brought to us for finishing.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Product Video Editing",
    description: "Product video editing for e-commerce listings, product launches, and sales enablement assets. We grade, sequence, and mix product footage to the visual standard that converts browsers into buyers.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Event and Conference Video Editing",
    description: "Multi-camera event video editing for conferences, webinars, and corporate events. Highlight reels, session recordings, and recap videos that turn hours of event footage into content assets that earn views after the event ends.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Training and Educational Video Editing",
    description: "Educational video editing for corporate training, e-learning platforms, and onboarding content. Edited for comprehension and retention using pacing, chapter markers, and visual reinforcement to maximize the learning value of every minute.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Video Editing Services We Offer"
      description="Our video editing studio covers every post production format a brand, creator, or marketing team needs. Delivered by in-house editors with clear timelines and structured revision rounds."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
