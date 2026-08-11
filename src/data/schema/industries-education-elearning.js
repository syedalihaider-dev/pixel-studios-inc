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
      "@type": "BusinessAudience",
      "@id": "https://www.pixelstudiosinc.com/industries/education-elearning#audience",
      "audienceType": "Schools, universities, e-learning platforms, training providers, course creators, educators, and corporate learning teams",
      "geographicArea": {
        "@type": "Country",
        "name": "United States"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.pixelstudiosinc.com/industries/education-elearning#service",
      "name": "Animation Services for Education & E-Learning",
      "serviceType": "Education & E-Learning Animation and Video Production Services",
      "category": "Industry-Specific Animation and Video Production",
      "description": "Education and e-learning animation services for online courses, academic concepts, training modules, instructional content, onboarding, knowledge retention, and learner engagement.",
      "url": "https://www.pixelstudiosinc.com/industries/education-elearning",
      "provider": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "audience": {
        "@id": "https://www.pixelstudiosinc.com/industries/education-elearning#audience"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pixelstudiosinc.com/industries/education-elearning",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-443-487-0213",
          "contactType": "sales"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pixelstudiosinc.com/industries/education-elearning#webpage",
      "url": "https://www.pixelstudiosinc.com/industries/education-elearning",
      "name": "Education & E-Learning Animation Services | Pixel Studios Inc.",
      "description": "Education and e-learning animation services for online courses, academic concepts, training modules, instructional content, onboarding, knowledge retention, and learner engagement.",
      "isPartOf": {
        "@id": "https://www.pixelstudiosinc.com/#website"
      },
      "about": {
        "@id": "https://www.pixelstudiosinc.com/industries/education-elearning#service"
      },
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://www.pixelstudiosinc.com/industries/education-elearning#service"
      },
      "breadcrumb": {
        "@id": "https://www.pixelstudiosinc.com/industries/education-elearning#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pixelstudiosinc.com/industries/education-elearning#breadcrumb",
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
          "name": "Industries",
          "item": "https://www.pixelstudiosinc.com/industries"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Education & E-Learning",
          "item": "https://www.pixelstudiosinc.com/industries/education-elearning"
        }
      ]
    }
  ]
};

export default schema;
