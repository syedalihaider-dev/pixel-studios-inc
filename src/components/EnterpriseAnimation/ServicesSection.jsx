"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Fintech Explainer Videos",
    description: "Clear, concise fintech explainer videos that introduce your product's value proposition and core mechanism in under two minutes, built for a homepage or app store listing where attention is short and trust has to be earned fast.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Financial Data Visualization Animation",
    description: "Animated charts, dashboards, and data flows that make complex financial data digestible for users, analysts, and investors who need to grasp trends at a glance rather than parse a spreadsheet.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Product Demo Animations for Fintech Apps",
    description: "Screen-accurate walkthroughs of your app's core flows, from account setup to transaction confirmation, built to reduce onboarding drop-off and answer user questions before they reach support.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Cryptocurrency and Blockchain Animations",
    description: "Animations that make decentralized ledgers, wallets, and token mechanics understandable to an audience that may have never interacted with crypto before, without oversimplifying the mechanics that matter.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Investor Pitch Animations",
    description: "Investor pitch animation built for fundraising decks, condensing your business model and technical differentiation into a few focused minutes that build conviction quickly.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Financial Education and Training Animations",
    description: "Educational content that teaches financial literacy or internal compliance procedures in a format that is easier to retain than a written manual or a slide-based training deck.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Corporate Branding and Logo Animation for Fintech Companies",
    description: "Fintech logo animation and brand motion systems that give your company a consistent, professional identity across every touchpoint, from your app to your pitch deck.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Marketing and Social Media Animation",
    description: "Short, platform-native fintech animation videos built for paid social, app store previews, and organic content that need to earn attention quickly.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "RegTech and Compliance Animations",
    description: "Animations explaining regulatory processes and compliance workflows clearly to internal teams, auditors, and partners who need a shared reference for how a process actually works.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "Custom 2D and 3D Fintech Animation Services",
    description: "Whether your product calls for clean 2D motion graphics or more dimensional 3D visualization, every project is built around what actually communicates your mechanism best, not a default style.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Fintech"
      description="What does a full-service fintech animation company actually need to cover? Everything from a homepage explainer to a compliance training module. These ten formats reflect the range of work most fintech companies need across their product, marketing, and investor relationships."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;