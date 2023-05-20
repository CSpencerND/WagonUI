import * as React from "react"

import { ProductCard, CollectionShowcase } from "../components"

import { fruits } from "../assets"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
        </main>
    )
}
