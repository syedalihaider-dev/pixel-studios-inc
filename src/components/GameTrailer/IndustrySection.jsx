"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "YouTube Video Ads",
    image: "/industry/01.png",
    text: "Skippable and non-skippable YouTube commercial animation built to the platform's creative requirements. The first five seconds of a skippable ad are a different brief from seconds six through thirty.",
    points: [
      "Skippable & non-skippable YouTube ads",
      "Optimized for YouTube creative requirements",
      "Strong hooks in the first five seconds"
    ],
    link: "/industry/youtube-video-ads"
  },
  {
    id: 2,
    title: "Social Media Video Ads",
    image: "/industry/02.png",
    text: "Instagram, TikTok, Facebook, and LinkedIn commercial animation in the aspect ratios and technical specifications each platform requires for paid distribution.",
    points: [
      "Instagram, TikTok, Facebook & LinkedIn",
      "Platform-specific aspect ratios",
      "Optimized for paid social campaigns"
    ],
    link: "/industry/social-media-video-ads"
  },
  {
    id: 3,
    title: "TV Commercials",
    image: "/industry/03.png",
    text: "Broadcast television commercial animation to network delivery specifications. 15-second, 30-second, and 60-second formats with the master and cut-down versions media plans typically require.",
    points: [
      "15, 30 & 60-second TV commercials",
      "Broadcast-ready delivery specifications",
      "Master and cut-down versions included"
    ],
    link: "/industry/tv-commercials"
  },
  {
    id: 4,
    title: "OTT and Streaming Ads",
    image: "/industry/04.png",
    text: "Connected TV and OTT commercial animation for streaming platform placements where the audience is engaged, but the skip option changes the creative requirement.",
    points: [
      "Connected TV & OTT advertising",
      "Streaming platform optimization",
      "Creative built for viewer engagement"
    ],
    link: "/industry/ott-streaming-ads"
  },
  {
    id: 5,
    title: "Website Commercial Videos",
    image: "/industry/05.png",
    text: "Homepage and landing page commercial animation that reduces bounce rate and increases the time on page, which signals audience intent to conversion tracking systems.",
    points: [
      "Homepage & landing page videos",
      "Reduce bounce rate",
      "Increase visitor engagement & conversions"
    ],
    link: "/industry/website-commercial-videos"
  },
  {
    id: 6,
    title: "E-Commerce Product Ads",
    image: "/industry/06.png",
    text: "Product commercial animation for e-commerce environments where the visual quality of the product presentation determines whether the browser becomes a buyer.",
    points: [
      "High-quality product presentations",
      "Built for e-commerce platforms",
      "Designed to increase purchase intent"
    ],
    link: "/industry/ecommerce-product-ads"
  },
  {
    id: 7,
    title: "Paid Advertising Creatives",
    image: "/industry/06.png",
    text: "Animated ad creative for search, display, and programmatic placements at the production quality that premium ad inventory requires.",
    points: [
      "Search, display & programmatic ads",
      "Premium-quality animated creatives",
      "Optimized for paid advertising campaigns"
    ],
    link: "/industry/paid-advertising-creatives"
  },
  {
    id: 8,
    title: "Promotional Campaign Videos",
    image: "/industry/06.png",
    text: "Seasonal, event-based, and limited-time promotional animated commercial content that creates urgency without undermining brand positioning.",
    points: [
      "Seasonal & event-based campaigns",
      "Limited-time promotional videos",
      "Creates urgency while protecting brand value"
    ],
    link: "/industry/promotional-campaign-videos"
  }
];


export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Animated Commercial Formats We Create"
      description="Our animated commercial production services cover every major advertising format, from social media campaigns and YouTube ads to television commercials, streaming platforms, websites, and e-commerce promotions. Every commercial is created to meet the technical specifications and marketing objectives of its intended platform."
      industries={industries}
      variant="gradient"
    />
  );
}
