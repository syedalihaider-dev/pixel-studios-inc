"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { schemaRoutes } from "@/data/schema/routes";

export default function GlobalSchema() {
    const pathname = usePathname();

    const schema = schemaRoutes[pathname];

    if (!schema) return null;

    return (
        <Script
            id={`schema-${pathname}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}