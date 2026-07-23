"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: "Product demo editing, feature announcements, and thought leadership series with pacing and graphic treatment calibrated for technical B2B audiences.",
    link: "/industry/retail"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "Patient education videos, medical device content, and clinical training material edited to the accuracy and sensitivity standards healthcare audiences and regulatory environments require.",
    link: "/industry/professional-services"
  },
  {
    id: 3,
    title: "Finance and FinTech",
    image: "/industry/03.png",
    text: "Financial product videos, brand communications, and regulatory explainer content for finance audiences that do not accept imprecision in production or message.",
    link: "/industry/software-tech"
  },
  {
    id: 4,
    title: "E-Commerce and Retail",
    image: "/industry/04.png",
    text: "Product video editing, promotional campaign content, and brand storytelling where visual quality at the first frame determines whether a product page converts.",
    link: "/industry/medical-biotech"
  },
  {
    id: 5,
    title: "Education and E-Learning",
    image: "/industry/05.png",
    text: "Course content editing, instructional video post production, and educational series finishing for platforms producing video-based learning at scale.",
    link: "/industry/education"
  },
  {
    id: 6,
    title: "Real Estate",
    image: "/industry/06.png",
    text: "Property video editing, virtual tour post production, and development marketing content that performs before a buyer sets foot through the door.",
    link: "/industry/real-estate"
  }
  ,
  {
    id: 7,
    title: "Startups & Enterprises",
    image: "/industry/06.png",
    text: "Pitch video editing for investor confidence and full video post production services for enterprises managing high-volume branded content across multiple departments.",
    link: "/industry/real-estate"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Video Editing Solutions for Every Industry"
      description="Our professional video editing services apply specific post production approaches to each industry's audience, content standards, and platform context."
      industries={industries}
      variant="gradient"
    />
  );
}
