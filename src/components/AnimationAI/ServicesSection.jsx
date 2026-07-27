"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "AI Anime Opening Animation",
    description:
      "Anime-style opening sequences and title animations produced with AI-assisted visual generation and expert motion design. The aesthetic quality of anime opening animation is without the multi-month production timeline of traditional hand-drawn production.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "AI Explainer Videos",
    description:
      "AI-powered explainer video production that compresses the visual development timeline without compressing the strategic clarity that makes an explainer video actually explain something. The script is still the argument. The AI accelerates how fast the visual case is assembled around it.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "AI Motion Graphics Animation",
    description:
      "AI motion graphics animation for brand content, social media, and marketing campaigns where the visual quality needs to compete with traditional production at a fraction of the timeline and cost.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "AI Commercial Animation",
    description:
      "AI commercial animation for paid advertising campaigns that need multiple creative variations tested at a pace that traditional production cannot support. Generate, test, optimize, repeat. AI makes the loop faster without making the creative decisions for you.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "AI Product Animation",
    description:
      "AI-assisted product animation for e-commerce, marketing, and sales content. Faster than traditional 3D production. Better than what an AI tool produces without an animator in the room.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "AI Character Animation",
    description:
      "AI character animation for brand characters, mascots, and narrative content. The character stays on-brand between frames because a human with brand standards is reviewing every one of them.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "AI Music Video Production",
    description:
      "AI-powered music video production for artists, labels, and brands, building audio-visual content at a scale that traditional production cannot make economically viable. Visual storytelling that matches the track's emotional register rather than illustrating the lyrics literally.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "AI Social Media Animation",
    description:
      "AI animated videos for social media content calendars that require more volume than traditional animation production can sustain. Platform-native formats, on-brand visual style, and the creative direction that makes each piece feel intentional rather than generated.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "AI Cinematic Trailer Animation",
    description:
      "AI cinematic trailer animation for films, games, events, and product launches where the production quality of the trailer needs to match the ambition of the thing it is announcing.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "AI Logo Animation",
    description:
      "AI-assisted logo animation for brands that need a polished motion identity faster than traditional motion design timelines allow. The logo moves like it was designed to move, not like a tool decided it should.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Our AI Animation Services"
      description="Every AI animation service we offer is produced with AI tools under expert creative direction. The speed is real. The creative control is too."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;