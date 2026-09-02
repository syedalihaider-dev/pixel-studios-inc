/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'i.vimeocdn.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'vumbnail.com' }
    ],
  },

  async redirects() {
    return [
      // =========================
      // Blog Subdomain Redirects (301)
      // =========================
      {
        source: "/animation-service",
        has: [
          {
            type: "host",
            value: "blog.pixelstudiosinc.com",
          },
        ],
        destination: "https://www.pixelstudiosinc.com/",
        permanent: true,
      },

      // =========================
      // Home (301)
      // =========================
      {
        source: "/animation-service",
        destination: "/",
        permanent: true,
      },
      {
        source: "/animation-services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/website-design-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/b2b-portal-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/b2c-portal-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cms-website-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ecommerce-website-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/social-media-marketing-services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/react-native-app-development",
        destination: "/",
        permanent: true,
      },

      // =========================
      // Logo Animation (301)
      // =========================
      {
        source: "/logo-design-services",
        destination: "/logo-animation-services",
        permanent: true,
      },

      // =========================
      // Logo Animation (302)
      // =========================
      {
        source: "/3d-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },
      {
        source: "/abstract-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },
      {
        source: "/emblem-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },
      {
        source: "/mascot-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },
      {
        source: "/wordmark-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },

      // =========================
      // Animation Studio Pages (302)
      // =========================
      {
        source: "/animation-studio-dover",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-nyc",
        destination: "/",
        permanent: false,
      },

      // =========================
      // New Service & Industry Redirects (301)
      // =========================
      {
        source: "/services/explainer",
        destination: "/animated-explainer-video",
        permanent: true,
      },
      {
        source: "/services/ai-animation",
        destination: "/ai-animation",
        permanent: true,
      },
      {
        source: "/industry/real-estate",
        destination: "/real-estate-animation",
        permanent: true,
      },
      {
        source: "/industry/stylized-cinematic-animation",
        destination: "/entertainment-animation",
        permanent: true,
      },
      {
        source: "/industry/medical-biotech",
        destination: "/biotech-animation",
        permanent: true,
      },
      {
        source: "/services/2d-animation",
        destination: "/2d-animation-services",
        permanent: true,
      },
      {
        source: "/services/hybrid-cel",
        destination: "/hybrid-and-cel-animation",
        permanent: true,
      },
      {
        source: "/industry/software-tech",
        destination: "/saas-explainer-videos",
        permanent: true,
      },
      {
        source: "/industry/motion-graphics-design",
        destination: "/motion-graphics",
        permanent: true,
      },
      {
        source: "/industry/3d-ai-animation",
        destination: "/ai-animation",
        permanent: true,
      },
      {
        source: "/services/logo-animation",
        destination: "/logo-animation-services",
        permanent: true,
      },
      {
        source: "/industry/education",
        destination: "/education-animation",
        permanent: true,
      },
      {
        source: "/services/whiteboard",
        destination: "/whiteboard-animation-services",
        permanent: true,
      },
      {
        source: "/industry/realistic-ai-animation",
        destination: "/ai-animation",
        permanent: true,
      },
      {
        source: "/services/legal-animation",
        destination: "/legal-graphics-animation",
        permanent: true,
      },
      {
        source: "/services/video-editing",
        destination: "/video-editing-services",
        permanent: true,
      },
      {
        source: "/industry/retail",
        destination: "/ecommerce-video-production",
        permanent: true,
      },
      {
        source: "/industry/2d-ai-animation",
        destination: "/ai-animation",
        permanent: true,
      },
      {
        source: "/services/3d-animation",
        destination: "/3d-animation-services",
        permanent: true,
      },
      {
        source: "/services/motion-graphics",
        destination: "/motion-graphics",
        permanent: true,
      },
      {
        source: "/services/architectural",
        destination: "/architecture-animation",
        permanent: true,
      },
      {
        source: "/services/cgi-vfx",
        destination: "/3d-animation-services",
        permanent: true,
      },
      {
        source: "/services/infographics",
        destination: "/motion-graphics",
        permanent: true,
      },

      // =========================
      // Contact (301)
      // =========================
      {
        source: "/get-started",
        destination: "/contact-us",
        permanent: true,
      },

      // =========================
      // Contact (302)
      // =========================
      {
        source: "/refund-form",
        destination: "/contact-us",
        permanent: false,
      },
      {
        source: "/refund-form/",
        destination: "/contact-us",
        permanent: false,
      },

      // =========================
      // Hire & Process Pages (302)
      // =========================
      {
        source: "/process",
        destination: "/",
        permanent: false,
      },
      {
        source: "/hire-vfx-artist",
        destination: "/",
        permanent: false,
      },
      {
        source: "/hire-game-designer",
        destination: "/",
        permanent: false,
      },
      {
        source: "/hire-2d-animator",
        destination: "/2d-animation-services",
        permanent: false,
      },

      // =========================
      // LP Page Redirects (301)
      // =========================
      {
        source: "/explainer-animated-videos/index",
        destination: "/lp/animated-explainer-video-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
