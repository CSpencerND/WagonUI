import * as React from "react"

import { CollectionItem } from "@/primitives"
import { CollectionShowcase, ProductCard } from "@/components"

import { fruits } from "../assets"

export default function Home() {
    return (
        <CollectionShowcase title="Fruits">
            {fruits.map((f, i) => (
                <CollectionItem key={i} index={i}>
                    <ProductCard
                        image={f}
                        title={f.title}
                        href="/"
                        className="h-48"
                    />
                </CollectionItem>
            ))}
        </CollectionShowcase>
    )
}
