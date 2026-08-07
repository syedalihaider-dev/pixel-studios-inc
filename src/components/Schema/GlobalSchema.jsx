"use client";

import { usePathname } from "next/navigation";
import { schemaRoutes } from "@/data/schema/routes";

export default function GlobalSchema() {
    const pathname = usePathname();

    const schema = schemaRoutes[pathname];

    if (!schema) return null;

    return (
        <script
            id={`schema-${pathname}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
        />
    );
}
