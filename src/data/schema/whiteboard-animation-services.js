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
      "@id": "https://www.pixelstudiosinc.com/whiteboard-animation-services#service",
      "name": "Whiteboard Animation Services",
      "serviceType": "Whiteboard Animation Services",
      "category": "Animation and Video Production Services",
      "description": "Whiteboard animation services for training, education, sales enablement, compliance communication, product explanation, and brand storytelling.",
      "url": "https://www.pixelstudiosinc.com/whiteboard-animation-services",
      "provider": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pixelstudiosinc.com/whiteboard-animation-services",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-443-487-0213",
          "contactType": "sales"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pixelstudiosinc.com/whiteboard-animation-services#webpage",
      "url": "https://www.pixelstudiosinc.com/whiteboard-animation-services",
      "name": "Whiteboard Animation Services",
      "description": "Whiteboard animation services for training, education, sales enablement, compliance communication, product explanation, and brand storytelling.",
      "isPartOf": {
        "@id": "https://www.pixelstudiosinc.com/#website"
      },
      "about": {
        "@id": "https://www.pixelstudiosinc.com/whiteboard-animation-services#service"
      },
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://www.pixelstudiosinc.com/whiteboard-animation-services#service"
      },
      "breadcrumb": {
        "@id": "https://www.pixelstudiosinc.com/whiteboard-animation-services#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pixelstudiosinc.com/whiteboard-animation-services#breadcrumb",
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
          "name": "Whiteboard Animation Services",
          "item": "https://www.pixelstudiosinc.com/whiteboard-animation-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are whiteboard animation services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whiteboard animation services cover the full production of videos in which content is drawn on screen as a voiceover narrates. The format is used for explainer videos, training programs, marketing content, and customer education. A complete whiteboard animation service includes scriptwriting, storyboarding, illustration, animation, voiceover recording, sound design, and final delivery."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a whiteboard animation video cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whiteboard animation video pricing varies based on video length, illustration complexity, number of revision rounds, and whether voiceover talent and music licensing are included. Most professional whiteboard animation projects fall between $2,000 and $8,000 for a 60-90 second video. We provide custom quotes based on your specific scope â€” contact us to discuss your project."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a whiteboard animation project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard 60-90 second whiteboard animation video runs three to five weeks from brief sign-off to final delivery. Discovery and scripting: 5-7 days. Storyboard and illustration: 5-7 days. Animation and voiceover: 7-10 days. Review and final delivery: 3-5 days. Expedited timelines are available for qualifying projects."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide script writing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Professional scriptwriting is included in every Pixels Studios whiteboard animation project. We do not produce animation from client-provided scripts unless the client specifically requests it and the script has been reviewed and approved by our team. The script is too important to the outcome to be treated as a pre-production formality."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide professional voiceovers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Voiceover is included in our standard whiteboard animation service. We work with professional voice talent across a range of styles, accents, and delivery registers. You will have the opportunity to review talent options before recording begins."
          }
        },
        {
          "@type": "Question",
          "name": "What industries benefit from whiteboard animation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whiteboard animation performs across industries where complex information needs to be communicated clearly. Healthcare, SaaS and technology, financial services, education, legal, real estate, e-commerce, and non-profit organizations all use whiteboard animation regularly for training, marketing, and customer education purposes."
          }
        },
        {
          "@type": "Question",
          "name": "Can whiteboard videos improve learning retention?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The whiteboard format is one of the most retention-efficient video formats available because it sequences information progressively and creates an active cognitive engagement loop. Learners follow the construction of an idea rather than watching a completed visual, which produces measurably higher retention."
          }
        },
        {
          "@type": "Question",
          "name": "Can you animate existing content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We regularly work with clients who have existing scripts, slide decks, or e-learning modules that need to be rebuilt as whiteboard animation videos. We review the existing content, identify what should be preserved, what should be restructured, and what should be cut, and produce the animation accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "What file formats do you deliver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Final whiteboard animation videos are delivered in MP4 (H.264) as standard, with additional formats available on request â€” including MOV, WebM, and platform-specific exports for YouTube, LinkedIn, LMS platforms, and internal portals. Resolution options include 1080p and 4K. Source files are included in most project scopes."
          }
        },
        {
          "@type": "Question",
          "name": "How many revisions are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our standard whiteboard animation projects include structured revision rounds at the script stage, the storyboard stage, and the final animation stage. The number of revision rounds is confirmed in your project scope. We do not cap the number of notes per round â€” a revision round means all of your feedback for that stage, addressed together."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create custom illustrations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every illustration in a Pixels Studios whiteboard animation is created custom for your project. We do not use pre-built illustration libraries or template packs."
          }
        },
        {
          "@type": "Question",
          "name": "Who owns the final video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You do. Upon final delivery and payment, full ownership of the final rendered video transfers to you. Source file ownership terms are detailed in your project agreement."
          }
        }
      ]
    }
  ]
};

export default schema;
