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
      "@id": "https://www.pixelstudiosinc.com/motion-graphics#service",
      "name": "Motion Graphics Services",
      "serviceType": "Motion Graphics Services",
      "category": "Animation and Video Production Services",
      "description": "Professional motion graphics services for brand campaigns, advertisements, product videos, social media, presentations, and digital content.",
      "url": "https://www.pixelstudiosinc.com/motion-graphics",
      "provider": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pixelstudiosinc.com/motion-graphics",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-443-487-0213",
          "contactType": "sales"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pixelstudiosinc.com/motion-graphics#webpage",
      "url": "https://www.pixelstudiosinc.com/motion-graphics",
      "name": "Motion Graphics Services",
      "description": "Professional motion graphics services for brand campaigns, advertisements, product videos, social media, presentations, and digital content.",
      "isPartOf": {
        "@id": "https://www.pixelstudiosinc.com/#website"
      },
      "about": {
        "@id": "https://www.pixelstudiosinc.com/motion-graphics#service"
      },
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://www.pixelstudiosinc.com/motion-graphics#service"
      },
      "breadcrumb": {
        "@id": "https://www.pixelstudiosinc.com/motion-graphics#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pixelstudiosinc.com/motion-graphics#breadcrumb",
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
          "name": "Motion Graphics Services",
          "item": "https://www.pixelstudiosinc.com/motion-graphics"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a motion graphics video cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professionally produced 30 to 60-second motion graphics video typically starts in the $1,500 to $4,000 range for standard 2D motion work. Productions with 3D motion graphics services, custom illustration, or broadcast-spec delivery run higher. Itemized quotes within 48 hours of a discovery call."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to create a motion graphics video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most 30 to 60-second productions complete in two to four weeks from brief sign-off. Multi-format campaign packages and longer productions take proportionally longer. Rush timelines are available and priced transparently."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide scripts and storyboards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Scriptwriting and storyboarding are standard stages in our motion graphics video production services. We do not begin animation until both are approved by the client."
          }
        },
        {
          "@type": "Question",
          "name": "Can you create motion graphics for social media marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Social media motion graphics are among our most requested formats. We produce platform-native content for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts built to each platform's technical and engagement requirements from the start."
          }
        },
        {
          "@type": "Question",
          "name": "What industries benefit most from motion graphics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every industry with complex ideas to communicate clearly. SaaS, healthcare, finance, education, and e-commerce are our highest-volume sectors because all of them have products and services that text and photography cannot explain as efficiently as motion graphics can."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer voiceover and sound design services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Professional voiceover, music selection, and sound design are included in our standard motion graphics design services packages, matched to the brand tone established in the brief."
          }
        },
        {
          "@type": "Question",
          "name": "What software do you use for motion graphics production?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adobe After Effects is our primary tool. We also use Cinema 4D for 3D motion graphics services, Adobe Illustrator and Premiere Pro for asset creation and delivery, and Figma for UI-accurate interface animation."
          }
        },
        {
          "@type": "Question",
          "name": "How many revisions are included in a project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two full revision rounds in standard packages. Additional rounds available and priced upfront. All revision terms are in writing before production begins."
          }
        },
        {
          "@type": "Question",
          "name": "Can motion graphics improve conversion rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consistently. Pages with motion graphics content convert at higher rates than static alternatives because motion graphics reduce the cognitive friction between a visitor and a purchase decision."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide source files after project completion?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Source files are included in most project scopes. Exactly what is delivered is documented in the project proposal before production begins."
          }
        }
      ]
    }
  ]
};

export default schema;
