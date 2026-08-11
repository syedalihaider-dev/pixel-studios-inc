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
      "@id": "https://www.pixelstudiosinc.com/3d-animation-services#service",
      "name": "3D Animation Services",
      "serviceType": "3D Animation Services",
      "category": "Animation and Video Production Services",
      "description": "Professional 3D animation services for product visualization, architectural animation, technical communication, character animation, medical animation, and cinematic content.",
      "url": "https://www.pixelstudiosinc.com/3d-animation-services",
      "provider": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pixelstudiosinc.com/3d-animation-services",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-443-487-0213",
          "contactType": "sales"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pixelstudiosinc.com/3d-animation-services#webpage",
      "url": "https://www.pixelstudiosinc.com/3d-animation-services",
      "name": "3D Animation Services",
      "description": "Professional 3D animation services for product visualization, architectural animation, technical communication, character animation, medical animation, and cinematic content.",
      "isPartOf": {
        "@id": "https://www.pixelstudiosinc.com/#website"
      },
      "about": {
        "@id": "https://www.pixelstudiosinc.com/3d-animation-services#service"
      },
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://www.pixelstudiosinc.com/3d-animation-services#service"
      },
      "breadcrumb": {
        "@id": "https://www.pixelstudiosinc.com/3d-animation-services#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pixelstudiosinc.com/3d-animation-services#breadcrumb",
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
          "name": "3D Animation Services",
          "item": "https://www.pixelstudiosinc.com/3d-animation-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a custom 3D animation project cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 30 to 60-second 3D product animation starts in the $3,500 to $8,000 range. Complex character animation and cinematic productions range from $10,000 to $30,000 or more. Itemized quotes within 48 hours of a discovery call."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to create a 3D animated video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard 60-second 3D product animation runs four to six weeks from brief sign-off. Cinematic productions with character animation and VFX typically require six to twelve weeks. Rush timelines are available."
          }
        },
        {
          "@type": "Question",
          "name": "Is 3D animation worth it for startups and small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when the brief justifies it. If your product has physical form or structural complexity that 2D cannot communicate effectively, professional 3D animation services are one of the most efficient communication investments available."
          }
        },
        {
          "@type": "Question",
          "name": "Can 3D animation help increase customer engagement and conversions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consistently. Product pages with 3D animated content see higher dwell time and improved conversion versus static alternatives because 3D animation answers product questions visually before a prospect has to ask them."
          }
        },
        {
          "@type": "Question",
          "name": "How many revisions are included in a typical animation project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two full revision rounds in standard packages. Additional rounds available and priced clearly upfront. All revision terms are documented before production begins."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right 3D animation company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for a portfolio range across industries, a discovery process that precedes the quote, and verifiable client results. The right 3D animation agency asks what the video needs to accomplish before deciding what it should look like."
          }
        },
        {
          "@type": "Question",
          "name": "When should I use 3D animation for product demos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When the product has a physical form that benefits from dimensional rendering, when internal mechanisms cannot be shown through photography, or when brand positioning demands photorealistic quality."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer character design and animation for storytelling projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Full character animation, including modeling, rigging, facial animation, and performance direction across stylized and photorealistic aesthetics for brand storytelling, gaming, and educational content."
          }
        },
        {
          "@type": "Question",
          "name": "Can 3D animation explain complex products and technical concepts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is one of the most effective formats for exactly that problem. 3D animation shows internal components that cannot be photographed and demonstrates engineering precision with clarity that no other format matches."
          }
        },
        {
          "@type": "Question",
          "name": "Are 3D modeling and rendering included in your production process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Modeling, texturing, rigging, lighting, and rendering are all standard components of our 3D animation production services, managed entirely in-house."
          }
        },
        {
          "@type": "Question",
          "name": "What makes your 3D animation company different from other agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We start with the business objective, not the visual brief. That changes the quality of output in measurable ways: fewer revision cycles, higher client retention, and content that performs in the market."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with a custom 3D animation project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book a 30-minute discovery call. A detailed proposal with scope, timeline, and investment follows within 48 hours. No obligation."
          }
        }
      ]
    }
  ]
};

export default schema;
