import * as React from "react"

import { CollectionShowcase, ProductCard } from "@/components"
import { CollectionItem } from "@/primitives"

import { fruits } from "../assets"

export default function Home() {
    return (
        <CollectionShowcase title="Fruits">
            {fruits.map((f, i) => (
                <CollectionItem
                    key={i}
                    index={i}
                    className="space-y-2"
                >
                    <ProductCard
                        image={f}
                        title={f.title}
                        href="/"
                        className="h-48"
                    />
                    {/* <ColorSwatch surface="detail" blur /> */}
                </CollectionItem>
            ))}
        </CollectionShowcase>
    )
}
