"use client";

import { usePathname } from "next/navigation";
import { schemaRoutes } from "@/data/schema/routes";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pixel Studios Inc",
  "alternateName": "Pixel Studios Global",
  "url": "https://www.pixelstudiosinc.com/",
  "logo": "https://www.pixelstudiosinc.com/_next/image?url=%2Flogo.webp&w=1080&q=75&dpl=dpl_8zwgdivefeBzm6E1ZxAXRJBxZXMi",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-443-487-0213",
    "contactType": "sales",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/pixelstudiosglobal",
    "https://www.instagram.com/pixelstudiosglobal/",
    "https://www.linkedin.com/company/pixel-studios-global/",
    "https://www.youtube.com/@pixelstudiosinc8447"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pixel Studios Inc",
  "image": "https://www.pixelstudiosinc.com/_next/image?url=%2Flogo.webp&w=1080&q=75&dpl=dpl_8zwgdivefeBzm6E1ZxAXRJBxZXMi",
  "@id": "https://www.pixelstudiosinc.com/#organization",
  "url": "https://www.pixelstudiosinc.com/",
  "telephone": "+1-443-487-0213",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "195 Cadman Plaza West, One Pierrepont Plaza, 12th Floor,",
    "addressLocality": "Brooklyn, NY",
    "addressRegion": "NY",
    "postalCode": "11201",
    "addressCountry": "US"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "23:00"
  },
  "sameAs": [
    "https://www.facebook.com/pixelstudiosglobal",
    "https://www.instagram.com/pixelstudiosglobal/",
    "https://www.youtube.com/@pixelstudiosinc8447",
    "https://www.linkedin.com/company/pixel-studios-global/"
  ]
};

export default function GlobalSchema() {
    const pathname = usePathname();

    const pageSchema = schemaRoutes[pathname];

    return (
        <>
            <script
                id="schema-global-organization"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
                }}
            />
            <script
                id="schema-global-localbusiness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
                }}
            />
            {pageSchema && (
                <script
                    id={`schema-${pathname}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
                    }}
                />
            )}
        </>
    );
}
