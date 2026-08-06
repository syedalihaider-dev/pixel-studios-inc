import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Animation2D/StatsSection";
import MissionSection from "@/components/Home/MissionSection";
import FullCycleSection from "@/components/GameAnimation/FullCycleSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import WonderingSection from "@/components/LegalGraphics/WonderingSection";
import LocationAccordionSection from "@/components/Common/LocationAccordionSection";
import WhyInvestSection from "@/components/Animation2D/WhyInvestSection";
import CooperationModelsSection from "@/components/CorporateVideoAnimation/CooperationModelsSection";
import GreatVideosSection from "@/components/Animation2D/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Animation2D/FaqSection";
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

export const metadata = {
  title: "Animation Studio in Austin | Pixel Studios Inc",
  description: "Pixel Studios is a top-rated animation studio in Austin, TX.",
};

export default function AnimationStudioAustinPage() {
  return (
    <main>
      <Banner
        title="Animation Studio in Austin - Pixel Studios Inc"
        description="Looking for high-quality 2D animations services for your business? Pixel Studios offers comprehensive 2D animation production services at a competitive price."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <MissionSection />
      <FullCycleSection />
      <PortfolioShowcase />
      <WonderingSection />
      <LocationAccordionSection
        sectionTitle="Austin Animation & Interactive Development Services"
        items={austinServicesData}
      />
      <WhyInvestSection />
      <CooperationModelsSection />
      <GreatVideosSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
