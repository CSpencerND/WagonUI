import * as React from "react"

import { ProductCard } from "@/components/ProductCard"
import { CollectionItem } from "@/primitives"

import type { Product } from "@shopify/hydrogen-react/storefront-api-types"

export function Recommended({ products }: { products: Product[] }) {
    return (
        <section>
            <h3 className="mb-4 text-lg font-bold text-info">You may also like</h3>
            <ul className="mx-auto grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                {products.map((p, i) => {
                    const { id, title, featuredImage: image, handle } = p
                    const href = `/collections/full-catalog/${handle}`

                    return (
                        <CollectionItem
                            key={id}
                            index={i}
                            className="space-y-2"
                        >
                            <ProductCard
                                image={image}
                                title={title}
                                href={href}
                            />
                        </CollectionItem>
                    )
                })}
            </ul>
        </section>
    )
}
