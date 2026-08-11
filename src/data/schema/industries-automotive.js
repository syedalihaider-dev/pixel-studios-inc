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
      "@id": "https://www.pixelstudiosinc.com/industries/automotive#audience",
      "audienceType": "Automotive manufacturers, dealerships, mobility companies, parts suppliers, engineering teams, and automotive marketing organizations",
      "geographicArea": {
        "@type": "Country",
        "name": "United States"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.pixelstudiosinc.com/industries/automotive#service",
      "name": "Animation Services for Automotive",
      "serviceType": "Automotive Animation and Video Production Services",
      "category": "Industry-Specific Animation and Video Production",
      "description": "Automotive animation and video production services for vehicle features, product launches, engineering visualization, component demonstrations, safety systems, training, and marketing campaigns.",
      "url": "https://www.pixelstudiosinc.com/industries/automotive",
      "provider": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "audience": {
        "@id": "https://www.pixelstudiosinc.com/industries/automotive#audience"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.pixelstudiosinc.com/industries/automotive",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+1-443-487-0213",
          "contactType": "sales"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pixelstudiosinc.com/industries/automotive#webpage",
      "url": "https://www.pixelstudiosinc.com/industries/automotive",
      "name": "Automotive Animation Services | Pixel Studios Inc.",
      "description": "Automotive animation and video production services for vehicle features, product launches, engineering visualization, component demonstrations, safety systems, training, and marketing campaigns.",
      "isPartOf": {
        "@id": "https://www.pixelstudiosinc.com/#website"
      },
      "about": {
        "@id": "https://www.pixelstudiosinc.com/industries/automotive#service"
      },
      "publisher": {
        "@id": "https://www.pixelstudiosinc.com/#organization"
      },
      "inLanguage": "en-US",
      "mainEntity": {
        "@id": "https://www.pixelstudiosinc.com/industries/automotive#service"
      },
      "breadcrumb": {
        "@id": "https://www.pixelstudiosinc.com/industries/automotive#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pixelstudiosinc.com/industries/automotive#breadcrumb",
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
          "name": "Automotive",
          "item": "https://www.pixelstudiosinc.com/industries/automotive"
        }
      ]
    }
  ]
};

export default schema;
