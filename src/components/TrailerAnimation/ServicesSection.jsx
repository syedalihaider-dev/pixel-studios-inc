"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Movie Trailer Production",
    description: "Movie trailer production for independent films, branded short films, and entertainment content. Our movie trailer animation combines pacing, music, and visual rhythm to create the anticipation that drives audiences to the full release.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Game Trailer Production",
    description: "Game trailer production and game trailer animation for PC, console, and mobile titles. We build cinematic sequences, gameplay reveal cuts, and announcement trailers that communicate the experience of the game, not just its feature list.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Promotional Trailer Videos",
    description: "Promotional trailer videos for product launches, campaigns, and brand announcements. Built with the same anticipation-first structure as entertainment trailers, applied to commercial objectives.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Product Launch Trailer Videos",
    description: "Product launch trailer videos that create a moment around a release rather than simply announcing it. Used for SaaS feature launches, consumer product reveals, and major brand campaign kickoffs.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Event Trailer Animation",
    description: "Event trailer animation for conferences, festivals, and major brand events. Built to drive registrations and attendance by making the event feel like something the audience cannot afford to miss.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Corporate Trailer Videos",
    description: "Corporate trailer videos for company announcements, brand relaunches, and major organizational milestones. Brand trailer production that communicates significance without relying on generic corporate visual language.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Brand Launch Trailers",
    description: "Brand launch trailers for companies entering new markets or launching new identities. A trailer-style brand announcement signals confidence and creates a moment around the launch that a standard announcement video cannot replicate.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Cinematic Trailer Production",
    description: "High-end cinematic trailer production combining motion graphics, sound design, and visual effects for trailers that need to feel like premium entertainment content, regardless of the underlying subject matter.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Our Trailer Animation Services"
      description="Our trailer production company covers every trailer format across entertainment, gaming, and brand marketing."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
