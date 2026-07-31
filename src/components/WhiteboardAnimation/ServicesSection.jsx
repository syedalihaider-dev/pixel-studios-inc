"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Whiteboard Explainer Videos",
    description: "A whiteboard explainer video is the most efficient format for communicating a concept that your audience currently does not understand. We use this to your advantage. Every whiteboard explainer we produce is built on a script engineered for that specific audience, with a voiceover that matches their pace and a visual flow that mirrors how they actually process new information.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 2,
    title: "Educational Whiteboard Animation",
    description: "Training content that people click through to finish is not training. It is a compliance checkbox. Educational whiteboard animation works differently because learners follow the logic being drawn rather than watching a presenter read slides. We produce educational whiteboard animation for K-12 curriculum, university courses, corporate L&D programs, and professional certification content.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 3,
    title: "Corporate Whiteboard Videos",
    description: "Internal communication that goes unread and onboarding content that gets skipped costs organizations real money. Corporate whiteboard videos work for announcements, process documentation, policy explainers, change management communications, and executive messaging because the format commands attention without demanding a large production budget.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 4,
    title: "Marketing & Promotional Whiteboard Videos",
    description: "The attention economics of digital marketing have shifted. A well-built whiteboard animation video for marketing earns those five seconds because the visual construction draws the eye before the audience has decided whether to care. We produce whiteboard animation for product launches, lead generation campaigns, social media, and sales.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 5,
    title: "Product Explainer Videos",
    description: "Your product makes sense to you. It does not automatically make sense to someone encountering it for the first time. Product explainer videos translate features into outcomes, technical specifications into real-world benefits, and complex workflows into obvious logic. Our product explainer whiteboard animations are written for the buyer, not the builder.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 6,
    title: "Training & E-Learning Videos",
    description: "E-learning content has a retention problem. Slide decks narrated over screen recordings are not learning experiences — they are content endurance tests. Whiteboard animation is structurally better suited to learning because it sequences information the way the brain encodes it: one concept, then the next, visually connected. Our training and e-learning whiteboard videos are SCORM-compatible, LMS-ready, and aligned with the program's actual learning objectives.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 7,
    title: "Healthcare Whiteboard Animation",
    description: "Healthcare communication requires accuracy before anything else. Patient education, clinical training, public health awareness, and provider-facing content all carry compliance and standards that general-purpose animation studios do not understand. Our healthcare whiteboard animation team has produced content that meets the evidentiary and regulatory standards these audiences require, with terminology reviewed against clinical accuracy and visuals built to reinforce.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 8,
    title: "SaaS Whiteboard Animation",
    description: "SaaS onboarding is where user retention is won or lost. A new user who does not understand your product in the first session rarely returns. SaaS whiteboard animation for onboarding, feature education, and customer success content gives your users the conceptual scaffolding they need to get value from your product quickly. We have produced whiteboard animations for software platforms across project management, HR tech, fintech, cybersecurity, and marketing automation.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 9,
    title: "AI Animation Services",
    description: "AI-assisted 3D animation that reduces timelines without reducing quality. Used strategically to accelerate asset iteration and style exploration for high-volume or compressed-schedule productions.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 10,
    title: "Architectural Rendering",
    description: "Photorealistic architectural rendering, real estate visualization, and property walkthroughs for developers and architects presenting projects before completion.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 11,
    title: "Cartoon Animation",
    description: "Stylized 3D cartoon animation for brand storytelling, children's content, and educational series. Expressive, accessible, and distinct from the default digital-clean aesthetic.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 12,
    title: "Photorealistic Rendering",
    description: "Hyperrealistic rendering that makes digital assets indistinguishable from photography. Used in product marketing, architectural visualization, and any context where visual realism determines audience trust.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Professional Whiteboard Animation Services"
      description="Looking for Professional and Premium Whiteboard Animation Services? From product explainers and corporate training to healthcare education and SaaS onboarding, our professional whiteboard animation services are built for every use case where coherence, retention, and audience action are the goal. Here is what we bring to the table:"
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
