import * as React from "react"

import { ProductCard, CollectionShowcase } from "../components"

import { fruits } from "../assets"

export default function Home() {
    return (
        <CollectionShowcase collectionTitle="Fruits">
            {fruits.map((f, i) => (
                <ProductCard
                    image={f}
                    title={f.title}
                    href="/"
                    className="h-48"
                    key={i}
                />
            ))}
        </CollectionShowcase>
    )
}
