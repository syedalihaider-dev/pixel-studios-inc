"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Film and Entertainment",
    image: "/industry/01.png",
    text: "Movie trailer production and film title sequence design for independent films, branded entertainment, and content studios building audience anticipation for theatrical or streaming releases.",
    link: "/industry/retail"
  },
  {
    id: 2,
    title: "Gaming and Esports",
    image: "/industry/02.png",
    text: "Game trailer production and game trailer animation for PC games, console games, mobile games, and esports events. Cinematic reveal trailers and gameplay announcement content.",
    link: "/industry/professional-services"
  },
  {
    id: 3,
    title: "Technology and SaaS",
    image: "/industry/03.png",
    text: "Product launch trailer videos for SaaS feature releases and technology product announcements. Trailer-style content that creates a moment around what would otherwise be a standard release note.",
    link: "/industry/software-tech"
  },
  {
    id: 4,
    title: "E-Commerce Brands",
    image: "/industry/04.png",
    text: "Promotional trailer videos for product launches and seasonal campaigns. Built to create urgency and anticipation for e-commerce brands competing for attention during high-volume shopping periods.",
    link: "/industry/medical-biotech"
  },
  {
    id: 5,
    title: "Corporate Organizations",
    image: "/industry/05.png",
    text: "Corporate trailer videos for major announcements, brand relaunches, and organizational milestones that warrant more than a standard corporate communication format.",
    link: "/industry/education"
  },
  {
    id: 6,
    title: "Events and Conferences",
    image: "/industry/06.png",
    text: "Event trailer animation for conferences, festivals, and brand events designed to drive registration and build anticipation in the lead-up to the event date.",
    link: "/industry/real-estate"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Industries We Create Trailer Videos For"
      description="We have developed animation frameworks for each of the industries below. The result is a production process that is faster, more predictable, and more closely aligned with the business goals that drive trailer production."
      industries={industries}
      variant="gradient"
    />
  );
}
