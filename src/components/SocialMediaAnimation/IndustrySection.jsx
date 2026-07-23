"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "E-Commerce Brands",
    image: "/industry/01.png",
    text: "Product promotion animations and animated social media ads for e-commerce brands. Built to drive click-through to product pages and reduce paid acquisition cost.",
    link: "/industry/retail"
  },
  {
    id: 2,
    title: "SaaS Companies",
    image: "/industry/02.png",
    text: "Feature announcements and short-form explainer content for SaaS brands building social presence. LinkedIn animated video services and Instagram animation for B2B audiences.",
    link: "/industry/professional-services"
  },
  {
    id: 3,
    title: "Healthcare Organizations",
    image: "/industry/03.png",
    text: "Patient education content and health awareness campaigns produced to the accuracy and sensitivity standards the industry requires for public-facing social content.",
    link: "/industry/software-tech"
  },
  {
    id: 4,
    title: "Real Estate Businesses",
    image: "/industry/04.png",
    text: "Property launch content and development marketing for real estate brands. Animated social media videos that give buyers a compelling first look before they commit to a viewing.",
    link: "/industry/medical-biotech"
  },
  {
    id: 5,
    title: "Financial Services",
    image: "/industry/05.png",
    text: "Financial product explanation and brand animation for financial services companies producing social media video for professional audiences that expect accuracy and clarity.",
    link: "/industry/education"
  },
  {
    id: 6,
    title: "Education and E-Learning",
    image: "/industry/06.png",
    text: "Course launch content and short-form educational animation for education brands driving enrollment through social channels.",
    link: "/industry/real-estate"
  }
  ,
  {
    id: 7,
    title: "Startups and Technology Companies",
    image: "/industry/06.png",
    text: "Social media animation for startups building category awareness. First-impression content produced to communicate clearly before the brand reputation develops independently. ",
    link: "/industry/real-estate"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Social Media Animation Services for Industries"
      description="Our social media animation services for businesses are applied across every sector with production approaches specific to each platform context."
      industries={industries}
      variant="gradient"
    />
  );
}
