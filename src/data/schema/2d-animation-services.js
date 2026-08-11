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
      "@id": "https://www.pixelstudiosinc.com/2d-animation-services#service",
      "name": "2D Animation Services",
      "serviceType": "2D Animation Services",
      "category": "Animation and Video Production Services",
      "description": "Custom 2D animation services for explainer videos, marketing campaigns, training, education, product communication, and branded storytelling.",
      "url": "https://www.pixelstudiosinc.com/2d-animation-services",
      "provider": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pixelstudiosinc.com/2d-animation-services",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-443-487-0213",
          "contactType": "sales"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pixelstudiosinc.com/2d-animation-services#webpage",
      "url": "https://www.pixelstudiosinc.com/2d-animation-services",
      "name": "2D Animation Services",
      "description": "Custom 2D animation services for explainer videos, marketing campaigns, training, education, product communication, and branded storytelling.",
      "isPartOf": {
        "@id": "https://www.pixelstudiosinc.com/#website"
      },
      "about": {
        "@id": "https://www.pixelstudiosinc.com/2d-animation-services#service"
      },
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://www.pixelstudiosinc.com/2d-animation-services#service"
      },
      "breadcrumb": {
        "@id": "https://www.pixelstudiosinc.com/2d-animation-services#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pixelstudiosinc.com/2d-animation-services#breadcrumb",
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
          "name": "2D Animation Services",
          "item": "https://www.pixelstudiosinc.com/2d-animation-services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I choose the best 2D animation company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look at portfolio range: genuine visual variety shows they adapt to briefs rather than applying one aesthetic to every client. Then, examine the process: do they describe their discovery approach specifically before the quote? Finally, look for verifiable client results with specific outcomes, not just testimonials describing a pleasant experience."
          }
        },
        {
          "@type": "Question",
          "name": "What should I avoid when hiring a 2D animation studio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Avoid studios that quote a price before understanding your project. Any 2D animation agency that gives you a rate before asking detailed questions about your audience and your business objective is pricing a generic production, not your specific one. Avoid studios that cannot show you named clients with verifiable outcomes. Avoid portfolios that show only one visual style regardless of industry."
          }
        },
        {
          "@type": "Question",
          "name": "Can you follow my brand guidelines and visual identity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and we treat your brand guidelines as the creative starting point. Your color palette, typography, illustration references, and tone of voice are all incorporated into the style frames before any animation begins. We produce branded 2D animated videos that fit your visual ecosystem rather than looking like they came from a different team."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right animation style for my audience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The right style depends on the audience, the objective, and the distribution context. Consumer audiences on social respond to expressive character animation and high visual energy. B2B and technical audiences respond to clean motion graphics and measured pacing. Healthcare audiences need accuracy above all. We work through these variables in discovery rather than leaving the style decision to trend or default."
          }
        },
        {
          "@type": "Question",
          "name": "Is 2D animation enough for tech or B2B products, or do I need 3D to look premium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2D animation is more than sufficient for the vast majority of tech and B2B use cases. What signals premium quality is the clarity of thinking and the craft of execution, neither of which is format-dependent. SaaS companies and enterprise brands producing the most effective animated content predominantly use 2D formats because the format excels at clear, efficient explanation. 3D is right when the product has a physical structure requiring dimensional rendering. Otherwise, a well-produced 2D video outperforms a mediocre 3D production in every metric that matters."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost for a 60 to 90-second 2D business animation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professionally produced 60 to 90-second 2D business animation from a reputable studio in the USA falls between $2,500 and $8,000, depending on creative complexity, number of characters, voiceover requirements, and production timeline. We provide an itemized, transparent quote based on your actual brief within 48 hours of a discovery call."
          }
        },
        {
          "@type": "Question",
          "name": "How long does our production cycle typically take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most 60 to 90-second 2D animated videos are completed in three to five weeks from a brief sign-off. Discovery and scripting: five to seven days. Storyboard and design: five to seven days. Animation production: seven to ten days. Sound and final review: three to five days. Every project receives a milestone schedule with specific dates at kickoff, not a range with a disclaimer."
          }
        },
        {
          "@type": "Question",
          "name": "What about the copyright of my animations once I pay for them?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Full copyright ownership transfers to you upon final payment. You own the right to use, distribute, modify, and publish the video in any format, on any platform, for any purpose without restriction. Our standard agreements confirm this in writing at project kickoff. Licensed music and stock sound assets are documented separately, so you have a complete picture of what you own outright and what is covered by a commercial license."
          }
        }
      ]
    }
  ]
};

export default schema;
