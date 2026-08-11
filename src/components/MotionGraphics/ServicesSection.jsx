"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Explainer Video Motion Graphics",
    description: "A motion graphics explainer video strips complexity out of a product and replaces it with a visual argument that the audience can follow in 90 seconds. We build explainer video animation around the cognitive gap between what your audience currently understands and what they need to understand to act. This is the format most brands ask for first, and the one where strategy matters most.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Product Demo and Launch Videos",
    description: "Launch content built around the first impression. We animate product features, interface walkthroughs, and launch announcements using motion graphics that make the product the hero without requiring prior category knowledge from the viewer. Product demo videos produced this way consistently outperform live-action demos in completion rate.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Motion Graphics",
    description: "Brand films, investor presentations, and internal communications brought to life through corporate motion graphics. Motion graphics video production services that belong in a premium brand environment, not pulled from a stock template library that your competitors are also using.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Social Media Motion Graphics",
    description: "Short-form motion content built natively for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts. Social media motion graphics with vertical formats, on-screen text that works without audio, and hooks engineered to stop the scroll in the first frame rather than building to one.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Advertising and Promotional Motion Graphics",
    description: "Paid social, display, pre-roll, and broadcast advertising motion graphics built around a conversion objective. Promotional motion graphics where the response mechanism is embedded in the creative structure, not bolted on as a final-frame logo card.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Animated Infographics",
    description: "Data and statistics that would otherwise sit in a spreadsheet or a dense report are animated into content that gets watched, shared, and remembered. We build animated infographics for investor decks, campaign support, social media series, and digital publications.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "UI and App Motion Graphics",
    description: "Interface walkthroughs, feature highlights, and app demo animations that make complex software feel intuitive to a first-time viewer. Produced at the pixel precision that UI communication requires, built directly from product design files.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Presentation and Corporate Communication Videos",
    description: "Animated presentation content for keynotes, board meetings, and investor presentations. Motion graphics that replace static slide decks with content that holds a room and earns the next meeting rather than filling time before it.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Professional Motion Graphics Services"
      description="Our motion graphics animation services cover every format a brand needs to communicate clearly across digital and broadcast environments."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
