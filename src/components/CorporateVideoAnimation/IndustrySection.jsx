"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Technology and SaaS",
    image: "/industry/01.png",
    text: "Product explainers, feature announcements, and onboarding animation for technology companies where visual clarity drives trial conversion.",
    link: "/industry/retail"
  },
  {
    id: 2,
    title: "Healthcare and Medical",
    image: "/industry/02.png",
    text: "Patient education, device marketing, and healthcare brand communication are built to the accuracy and sensitivity standards the industry requires.",
    link: "/industry/professional-services"
  },
  {
    id: 3,
    title: "Finance and FinTech",
    image: "/industry/03.png",
    text: "Investment product explanation and financial literacy content for finance audiences that require precision in both message and production presentation.",
    link: "/industry/software-tech"
  },
  {
    id: 4,
    title: "Manufacturing and Industrial",
    image: "/industry/04.png",
    text: "Equipment demonstration, process visualization, and safety training animation for industrial businesses communicating across technical and non-technical audiences.",
    link: "/industry/medical-biotech"
  },
  {
    id: 5,
    title: "Education and E-Learning",
    image: "/industry/05.png",
    text: "Curriculum animation and instructional video content for educational platforms and corporate learning programs at scale.",
    link: "/industry/education"
  },
  {
    id: 6,
    title: "Real Estate",
    image: "/industry/06.png",
    text: "Property marketing, development overview, and investment presentation animation for real estate brands and developers.",
    link: "/industry/real-estate"
  },
  {
    id: 7,
    title: "Retail and E-Commerce",
    image: "/industry/07.png",
    text: "Product launch animation, promotional campaign content, and brand storytelling for retail and e-commerce brands competing in high-attention markets.",
    link: "/industry/packaging"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Corporate Video Animation Solutions for Every Industry"
      description="A corporate animation video for a financial services firm and one for a SaaS onboarding flow are not the same project. Audience psychology, regulatory language, and visual norms differ by industry. We have built genuine production experience across the sectors below, and we understand those differences from the first discovery call."
      industries={industries}
      variant="gradient"
    />
  );
}
