"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Animated Logistics Services",
    description: "A complete overview of your service offering, from freight modes to warehousing, fulfillment, and customs support, built as one clear animated asset for sales decks, your website, and trade show screens that need to work without a live presenter.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Supply Chain Animation",
    description: "End-to-end visualizations tracing a shipment from origin to delivery, showing every handoff, facility, and system your operation manages, so clients understand exactly what they are paying for and why it is worth it.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Freight Animation Video",
    description: "Mode-specific content covering trucking, rail, air, or ocean freight, tailored to the routes and capacity you actually run rather than generic stock footage that could belong to any carrier.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Transport Animation",
    description: "Fleet-focused animation demonstrating routing efficiency, real-time tracking, and delivery capability in a way that is far more memorable than a capabilities PDF.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Operational Workflow Animations",
    description: "Step-by-step breakdowns of warehouse, sorting, and fulfillment workflows, used both for training new hires quickly and for documenting process across compliance, quality, and safety audits.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Promotional Logistics Videos",
    description: "Brand-forward video for trade shows, websites, and sales decks that positions your company as a modern, technology-driven operator instead of a commoditized freight provider competing purely on price.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Logistics"
      description="What should a logistics animation service actually be able to produce? Everything from a full network overview to a single warehouse workflow. These six formats cover the range our logistics clients use most."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;