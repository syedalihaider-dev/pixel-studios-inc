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
      "@id": "https://www.pixelstudiosinc.com/video-editing-services#service",
      "name": "Video Editing Services",
      "serviceType": "Video Editing Services",
      "category": "Animation and Video Production Services",
      "description": "Professional video editing services including color grading, sound mixing, motion graphics, pacing, b-roll integration, captions, and platform-specific delivery.",
      "url": "https://www.pixelstudiosinc.com/video-editing-services",
      "provider": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pixelstudiosinc.com/video-editing-services",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-443-487-0213",
          "contactType": "sales"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pixelstudiosinc.com/video-editing-services#webpage",
      "url": "https://www.pixelstudiosinc.com/video-editing-services",
      "name": "Video Editing Services",
      "description": "Professional video editing services including color grading, sound mixing, motion graphics, pacing, b-roll integration, captions, and platform-specific delivery.",
      "isPartOf": {
        "@id": "https://www.pixelstudiosinc.com/#website"
      },
      "about": {
        "@id": "https://www.pixelstudiosinc.com/video-editing-services#service"
      },
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://www.pixelstudiosinc.com/video-editing-services#service"
      },
      "breadcrumb": {
        "@id": "https://www.pixelstudiosinc.com/video-editing-services#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pixelstudiosinc.com/video-editing-services#breadcrumb",
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
          "name": "Video Editing Services",
          "item": "https://www.pixelstudiosinc.com/video-editing-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are video editing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Video editing services cover all post production work required to turn raw footage into finished content: cutting, sequencing, color grading, audio mixing, motion graphics, caption creation, and platform export. Professional video editing services apply editorial judgment and technical expertise to produce content that performs in its distribution environment."
          }
        },
        {
          "@type": "Question",
          "name": "How much does video editing cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professionally edited 60 to 90-second marketing video typically starts in the $300 to $800 range. Corporate video editing with motion graphics, color grading, and multi-camera assembly runs $800 to $2,500 or more. Ongoing retainer-based video editing services are priced by volume and frequency. Itemized quotes within 48 hours of a discovery call."
          }
        },
        {
          "@type": "Question",
          "name": "How long does professional video editing take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most standard video editing projects complete in three to seven business days from footage delivery and brief sign-off. Complex multi-camera productions and projects requiring extensive motion graphics take longer. Every project receives a specific delivery date at kickoff, not a range."
          }
        },
        {
          "@type": "Question",
          "name": "Can you edit videos for YouTube?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. YouTube video editing services are among our most requested formats. We handle long-form content, YouTube Shorts editing, chapter marker setup, thumbnail frame selection, and export to YouTube's technical specifications, as well as short-form cuts for social media distribution."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide subtitles and captions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Accurate, frame-timed subtitle creation and caption services are included in standard packages. We produce properly formatted captions rather than auto-generated transcripts, available in multiple languages for multilingual distribution."
          }
        },
        {
          "@type": "Question",
          "name": "Can you add motion graphics to videos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Motion graphics integration is a standard component of our professional video editing services. Branded lower thirds, title sequences, call-to-action overlays, and animated graphic elements produced in After Effects and integrated into the edit."
          }
        },
        {
          "@type": "Question",
          "name": "What file formats do you deliver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard delivery includes MP4 in multiple resolutions, MOV for broadcast and post production handoffs, and platform-specific exports for YouTube, Instagram, TikTok, LinkedIn, and Facebook. All formats confirmed at project kickoff."
          }
        },
        {
          "@type": "Question",
          "name": "Do you edit short-form videos for social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Short form video editing is one of our most active service areas: TikTok video editing, Instagram reel editing, YouTube Shorts editing, and LinkedIn video. Platform-native formats, aspect ratios, and caption treatment built in from the start."
          }
        },
        {
          "@type": "Question",
          "name": "Can you improve audio quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Audio enhancement is included in our video post production services: dialogue cleanup, noise reduction, level normalization, and final mixing to broadcast and platform loudness standards without losing the natural quality of the original recording."
          }
        },
        {
          "@type": "Question",
          "name": "How many revisions are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two full revision rounds standard in every video editing project. Additional rounds available and priced upfront. All revision terms documented before production begins."
          }
        },
        {
          "@type": "Question",
          "name": "Do you sign NDAs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We sign NDAs for clients requiring confidentiality before sharing footage, brand assets, or proprietary content. Standard for corporate video editing clients, enterprise brands, and projects involving pre-release footage or internal communications."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle ongoing video editing projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our online video editing services are available on a retainer basis for brands and creators with ongoing needs. Retainer agreements cover weekly or monthly editing volumes with agreed turnaround times, dedicated editors, and priority scheduling."
          }
        }
      ]
    }
  ]
};

export default schema;
