import LocationPageTemplate from "@/components/Common/LocationPageTemplate";
import Link from "next/link";

const austinServicesData = [
  {
    title: "Game Development",
    subItems: [
      {
        image: "/game-development/game-concept.png",
        title: "Transform Reality Into Digital",
        description: (
          <>
            Convert physical reality into detailed, high-fidelity digital models. From standard assets to full-scale environment designs, our expert team utilizes advanced <Link href="/game-animation">game animation</Link> and modeling workflows to deliver outstanding results.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/game-01.png",
        title: "Capture Exact Assets and Locations",
        description: (
          <>
            Generate perfect digital twins of any person, object, or scene. Integrate them seamlessly into interactive platforms using our tailored <Link href="/3d-animation-services">3D animation services</Link> and assets designed for modern engines.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/game-02.png",
        title: "Immersive Interactive Environments",
        description: (
          <>
            Build virtual worlds and simulation-ready gaming spaces. Reach new milestones in production by partnering with us for cutting-edge <Link href="/game-development">game development services</Link> in Austin.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      }
    ]
  },
  {
    title: "Geospatial and simulation",
    subItems: [
      {
        image: "/game-development/project-01-bg.png",
        title: "High-Fidelity Terrain Mapping",
        description: (
          <>
            Render detailed geographical features and topographic details. Our technical artists build immersive geospatial grids ideal for simulators, combining real-world data with custom <Link href="/3d-industrial-animation">3D industrial animation</Link> layouts.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/game-concept.png",
        title: "Real-time Simulation Graphics",
        description: (
          <>
            Create training environments with real-time feedback and dynamic animations. Specially crafted for defense, aviation, and urban planning using next-generation <Link href="/technology-animation">technology animation</Link> models.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/game-01.png",
        title: "Interactive Virtual Training",
        description: (
          <>
            Train your team inside virtual layouts with complex scenarios. Utilize our specialized interactive models built for high reliability and engagement.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      }
    ]
  },
  {
    title: "Architecture, engineering, and construction",
    subItems: [
      {
        image: "/game-development/project-02-bg.png",
        title: "Interactive BIM & Layouts",
        description: (
          <>
            Translate complex blue-prints and BIM files into interactive visual models. Enable real-time walk-throughs for stakeholders using advanced <Link href="/architecture-animation">architecture animation</Link> techniques.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/game-02.png",
        title: "Photorealistic 3D Flythroughs",
        description: (
          <>
            Present structures before breaking ground. Deliver stunning photorealistic visualizations, standard renders, and interactive promotional videos for real estate campaigns.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/game-concept.png",
        title: "Industrial & Structural Animation",
        description: (
          <>
            Demonstrate mechanical systems, architectural assembly, and structural stress tests with high-precision <Link href="/3d-product-animation">3D product animation</Link> models.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      }
    ]
  },
  {
    title: "Education, research, and heritage preservation",
    subItems: [
      {
        image: "/game-development/game-01.png",
        title: "Digital Archiving & Restoration",
        description: (
          <>
            Preserve historical sites and artifacts digitally. Create detailed replicas for educational tours and digital exhibitions, keeping heritage alive with specialized <Link href="/educational-video-production">educational video production</Link>.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/project-01-bg.png",
        title: "Scientific Visualization & Research",
        description: (
          <>
            Animate micro-scale chemical processes, astrophysics simulations, or geological changes to convey complex research clearly.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/game-02.png",
        title: "Interactive E-Learning Media",
        description: (
          <>
            Boost student retention and active participation using modular learning tools and animated modules tailored for educational institutions.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      }
    ]
  },
  {
    title: "E-commerce",
    subItems: [
      {
        image: "/game-development/game-concept.png",
        title: "Interactive Product Configurator",
        description: (
          <>
            Empower online shoppers to customize, rotate, and interact with products in real time. Boost sales conversions using immersive e-commerce engines.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/game-01.png",
        title: "High-converting Explainer Video Assets",
        description: (
          <>
            Promote catalog highlights with visually stunning <Link href="/ecommerce-video-production">e-commerce video production</Link> assets that increase click-through rates.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      },
      {
        image: "/game-development/game-02.png",
        title: "3D Product Demos & Ads",
        description: (
          <>
            Create premium commercials showcasing engineering details and aesthetic excellence.
          </>
        ),
        buttonText: "Request a Proposal",
        buttonLink: "/contact-us"
      }
    ]
  }
];

// Copy this object for another city page and replace only its copy/assets.
const austinPageContent = {
  banner: {
    title: "Animation Studio in Austin - Pixel Studios Inc",
    description: "Looking for high-quality 2D animations services for your business? Pixel Studios offers comprehensive 2D animation production services at a competitive price.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },
  stats: {
    heading: "A Trusted Animation Company for 2D & 3D Animation Services.",
    statsData: [
      { end: 500, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },
  // Add city-specific copy, images and cards to these objects when duplicating this page.
  mission: {},
  fullCycle: {},
  industries: {},
  services: {
    sectionTitle: "Austin Animation & Interactive Development Services",
    items: austinServicesData,
  },
  workflow: {},
  benefits: {},
  greatVideos: {
    title: <>Bring Your <span>Ideas</span> to Life with Professional <span>2D Animation Services</span></>,
    text: "Whether you're launching a product, explaining a service, or strengthening your brand, our 2D animation studio creates visually compelling videos tailored to your goals. We combine strategic storytelling, creative design, and smooth animation to deliver content that captures attention and leaves a lasting impression.",
  },
  testimonials: {},
  faq: {
    heading: "Frequently Asked Questions",
    faqs: [
      { question: "How do I choose the best 2D animation company?", answer: "Look at portfolio range: genuine visual variety shows they adapt to briefs rather than applying one aesthetic to every client. Then, examine the process: do they describe their discovery approach specifically before the quote? Finally, look for verifiable client results with specific outcomes, not just testimonials describing a pleasant experience." },
      { question: "What should I avoid when hiring a 2D animation studio?", answer: "Avoid studios that quote a price before understanding your project. Any 2D animation agency that gives you a rate before asking detailed questions about your audience and your business objective is pricing a generic production, not your specific one. Avoid studios that cannot show you named clients with verifiable outcomes. Avoid portfolios that show only one visual style regardless of industry." },
      { question: "Can you follow my brand guidelines and visual identity?", answer: "Yes, and we treat your brand guidelines as the creative starting point. Your color palette, typography, illustration references, and tone of voice are all incorporated into the style frames before any animation begins. We produce branded 2D animated videos that fit your visual ecosystem rather than looking like they came from a different team." },
      { question: "How do I choose the right animation style for my audience?", answer: "The right style depends on the audience, the objective, and the distribution context. Consumer audiences on social respond to expressive character animation and high visual energy. B2B and technical audiences respond to clean motion graphics and measured pacing. Healthcare audiences need accuracy above all. We work through these variables in discovery rather than leaving the style decision to trend or default." },
      { question: "Is 2D animation enough for tech or B2B products, or do I need 3D to look premium?", answer: "2D animation is more than sufficient for the vast majority of tech and B2B use cases. What signals premium quality is the clarity of thinking and the craft of execution, neither of which is format-dependent. SaaS companies and enterprise brands producing the most effective animated content predominantly use 2D formats because the format excels at clear, efficient explanation. 3D is right when the product has a physical structure requiring dimensional rendering. Otherwise, a well-produced 2D video outperforms a mediocre 3D production in every metric that matters." },
      { question: "How much does it cost for a 60 to 90-second 2D business animation?", answer: "A professionally produced 60 to 90-second 2D business animation from a reputable studio in the USA falls between $2,500 and $8,000, depending on creative complexity, number of characters, voiceover requirements, and production timeline. We provide an itemized, transparent quote based on your actual brief within 48 hours of a discovery call." },
      { question: "How long does our production cycle typically take?", answer: "Most 60 to 90-second 2D animated videos are completed in three to five weeks from a brief sign-off. Discovery and scripting: five to seven days. Storyboard and design: five to seven days. Animation production: seven to ten days. Sound and final review: three to five days. Every project receives a milestone schedule with specific dates at kickoff, not a range with a disclaimer." },
      { question: "What about the copyright of my animations once I pay for them?", answer: "Full copyright ownership transfers to you upon final payment. You own the right to use, distribute, modify, and publish the video in any format, on any platform, for any purpose without restriction. Our standard agreements confirm this in writing at project kickoff. Licensed music and stock sound assets are documented separately, so you have a complete picture of what you own outright and what is covered by a commercial license." },
    ],
  },
};

export const metadata = {
  title: "Animation Studio in Austin | Pixel Studios Inc",
  description: "Pixel Studios is a top-rated animation studio in Austin, TX.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AnimationStudioAustinPage() {
  return <LocationPageTemplate content={austinPageContent} />;
}
