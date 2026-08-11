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
      "@id": "https://www.pixelstudiosinc.com/animated-explainer-video#service",
      "name": "Animated Explainer Video Services",
      "serviceType": "Animated Explainer Video Services",
      "category": "Animation and Video Production Services",
      "description": "Animated explainer video services that simplify products, services, processes, and complex ideas through strategic scripting, design, animation, voiceover, and sound.",
      "url": "https://www.pixelstudiosinc.com/animated-explainer-video",
      "provider": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pixelstudiosinc.com/animated-explainer-video",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-443-487-0213",
          "contactType": "sales"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pixelstudiosinc.com/animated-explainer-video#webpage",
      "url": "https://www.pixelstudiosinc.com/animated-explainer-video",
      "name": "Animated Explainer Video Services",
      "description": "Animated explainer video services that simplify products, services, processes, and complex ideas through strategic scripting, design, animation, voiceover, and sound.",
      "isPartOf": {
        "@id": "https://www.pixelstudiosinc.com/#website"
      },
      "about": {
        "@id": "https://www.pixelstudiosinc.com/animated-explainer-video#service"
      },
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://www.pixelstudiosinc.com/animated-explainer-video#service"
      },
      "breadcrumb": {
        "@id": "https://www.pixelstudiosinc.com/animated-explainer-video#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pixelstudiosinc.com/animated-explainer-video#breadcrumb",
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
          "name": "Animated Explainer Video Services",
          "item": "https://www.pixelstudiosinc.com/animated-explainer-video"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does an animated explainer video cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professionally produced 60-second animated explainer video from a reputable animated explainer video company in the USA typically starts in the $2,500 to $5,000 range. Complex productions with custom character libraries and photorealistic styles run higher. We provide itemized quotes within 48 hours of a discovery call."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to create an explainer video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most 60 to 90-second animated explainer video productions are completed in three to five weeks from a brief sign-off. Rush timelines are available. Every project receives a milestone schedule with specific dates at kickoff."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help write the script?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Scriptwriting is a standard stage in our animated explainer video creation service. We write every script from scratch around your audience brief. You review and approve the script before any design or animation begins."
          }
        },
        {
          "@type": "Question",
          "name": "What is the ideal length for an explainer video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "60 to 90 seconds for most business explainer videos. Long enough to build the argument and the call to action. Short enough to hold attention through the final frame. We determine the right length for your specific content during the discovery session."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide voiceover services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Professional voiceover is included in standard animated explainer video production packages. We match voice talent to the brand tone established in the brief. Multilingual versions and custom casting are available."
          }
        },
        {
          "@type": "Question",
          "name": "Which animation style is best for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The style that matches your audience, your brand identity, and your distribution context. 2D explainer animation works for most B2B and B2C use cases. Motion graphics explainer videos suit data-heavy or brand-consistency-driven briefs. We help every client make the right choice in discovery."
          }
        },
        {
          "@type": "Question",
          "name": "Can explainer videos improve conversions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consistently. Landing pages with custom explainer videos convert at higher rates than pages without them. The mechanism is that explainer videos reduce cognitive friction: they answer objections before the viewer forms them, which keeps prospects moving toward the conversion point."
          }
        },
        {
          "@type": "Question",
          "name": "How many revisions are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two full revision rounds in standard packages. Additional rounds available and priced upfront. All revision terms are documented before production begins, so there are no surprises at the end."
          }
        }
      ]
    }
  ]
};

export default schema;
