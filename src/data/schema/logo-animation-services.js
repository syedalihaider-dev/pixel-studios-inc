const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "Organization",
        "LocalBusiness",
        "ProfessionalService"
      ],
      "@id": "https://www.pixelstudiosinc.com/#organization",
      "name": "Pixel Studios Inc.",
      "alternateName": "Pixel Studios",
      "url": "https://www.pixelstudiosinc.com/",
      "description": "Pixel Studios Inc. is an animation and video production company specializing in 2D animation, 3D animation, motion graphics, explainer videos, whiteboard animation, logo animation, AI animation, legal animation, and video editing.",
      "telephone": "+1-443-487-0213",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "195 Cadman Plaza West, One Pierrepont Plaza, 12th Floor",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11201",
        "addressCountry": "US"
      },
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.pixelstudiosinc.com/#logo",
        "url": "https://www.pixelstudiosinc.com/logo.webp",
        "contentUrl": "https://www.pixelstudiosinc.com/logo.webp",
        "caption": "Pixel Studios Inc. logo"
      },
      "image": {
        "@id": "https://www.pixelstudiosinc.com/#logo"
      },
      "sameAs": [
        "https://www.linkedin.com/company/pixel-studios-global/",
        "https://www.facebook.com/pixelstudiosglobal",
        "https://www.instagram.com/pixelstudiosglobal/"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales and customer service",
        "telephone": "+1-443-487-0213",
        "url": "https://www.pixelstudiosinc.com/contact-us",
        "availableLanguage": [
          "English"
        ],
        "areaServed": "US"
      },
      "knowsAbout": [
        "2D animation",
        "3D animation",
        "motion graphics",
        "animated explainer videos",
        "whiteboard animation",
        "logo animation",
        "AI animation",
        "legal graphics animation",
        "video editing",
        "industry-specific animation"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.pixelstudiosinc.com/#website",
      "url": "https://www.pixelstudiosinc.com/",
      "name": "Pixel Studios Inc.",
      "alternateName": "Pixel Studios",
      "description": "Official website of Pixel Studios Inc.",
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Service",
      "@id": "https://www.pixelstudiosinc.com/logo-animation-services#service",
      "name": "Logo Animation Services",
      "serviceType": "Logo Animation Services",
      "category": "Animation and Video Production Services",
      "description": "Custom logo animation services for branded intros, outros, social media, presentations, advertisements, websites, and digital campaigns.",
      "url": "https://www.pixelstudiosinc.com/logo-animation-services",
      "provider": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pixelstudiosinc.com/logo-animation-services",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-443-487-0213",
          "contactType": "sales"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pixelstudiosinc.com/logo-animation-services#webpage",
      "url": "https://www.pixelstudiosinc.com/logo-animation-services",
      "name": "Logo Animation Services",
      "description": "Custom logo animation services for branded intros, outros, social media, presentations, advertisements, websites, and digital campaigns.",
      "isPartOf": {
        "@id": "https://www.pixelstudiosinc.com/#website"
      },
      "about": {
        "@id": "https://www.pixelstudiosinc.com/logo-animation-services#service"
      },
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://www.pixelstudiosinc.com/logo-animation-services#service"
      },
      "breadcrumb": {
        "@id": "https://www.pixelstudiosinc.com/logo-animation-services#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pixelstudiosinc.com/logo-animation-services#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.pixelstudiosinc.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Logo Animation Services",
          "item": "https://www.pixelstudiosinc.com/logo-animation-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are logo animation services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Logo animation services cover the production of animated versions of a brand's logo for video, social media, web, presentations, and broadcast. This includes 2D logo animation, 3D logo animation, logo reveal effects, and animated brand mark production in every format a brand needs."
          }
        },
        {
          "@type": "Question",
          "name": "How much does logo animation cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professionally produced 2D logo animation starts in the $400 to $1,200 range. 3D logo animation runs $1,500 to $4,000 or more depending on complexity. Cinematic logo reveals with VFX and custom sound design sit at the upper end. Itemized quotes within 48 hours of a discovery call."
          }
        },
        {
          "@type": "Question",
          "name": "How long does logo animation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most projects complete in one to two weeks. Complex 3D logo animations with custom environments take two to three weeks. Rush production is available for campaign launch windows."
          }
        },
        {
          "@type": "Question",
          "name": "Can you animate an existing logo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We animate existing logos from the vector files you provide. If the logo does not exist in vector format, we can redraw it in Adobe Illustrator as part of the project scope."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a vector logo file?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Vector format (AI, EPS, or SVG) is required for professional logo animation. It allows us to animate individual elements independently. If you only have a PNG or JPEG, we can discuss options in the discovery call."
          }
        },
        {
          "@type": "Question",
          "name": "What file formats will I receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard delivery includes MP4 in multiple resolutions, a transparent-background MOV for compositing, a GIF for web use, and source files in most project scopes. Platform-specific exports for social media and broadcast are included where specified."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my animated logo on social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We produce platform-optimized versions in the correct aspect ratios, file sizes, and formats for Instagram, TikTok, LinkedIn, YouTube, and X. Social media optimization is included for projects where social use is specified at kickoff."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create 2D and 3D logo animations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We are both a 2D logo animation company and a 3D logo animation company with full in-house capabilities in both formats. The choice is made based on brand positioning, distribution context, and the production budget established in the brief."
          }
        },
        {
          "@type": "Question",
          "name": "Can you add sound effects to my logo animation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Sound design is included in most logo animation packages. Custom sound effects, music stings, and audio branding are available. Sound is matched to the motion and the brand tone established in discovery."
          }
        },
        {
          "@type": "Question",
          "name": "Who owns the final animation files?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Full copyright ownership transfers to you upon final payment. You own the right to use, distribute, and publish the animation in any format, on any platform, for any purpose without restriction or ongoing licensing fees."
          }
        },
        {
          "@type": "Question",
          "name": "How many revisions are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two full revision rounds standard. Additional rounds available and priced upfront. All revision terms documented before production begins."
          }
        },
        {
          "@type": "Question",
          "name": "Can logo animation improve brand recognition?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Motion combined with sound creates stronger memory encoding than static visuals. A consistent animated logo used across all video content builds audience recognition faster than a static equivalent seen the same number of times."
          }
        }
      ]
    }
  ]
};

export default schema;
