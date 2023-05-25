"use client"

import * as React from "react"

import { Product, Card } from "@/primitives"

import { cn } from "@/lib"

type ProductShowcaseProps = React.ComponentProps<typeof Product.Root> & React.ComponentProps<"section">

export function ProductShowcase({ product, className, ...props }: ProductShowcaseProps) {
    return (
        <section className="container mx-auto max-w-prose-wide">
            <Card.Root
                surface="main"
                blur
                className="flex flex-col md:flex-row md:-space-x-6"
            >
                <Product.Root
                    product={product}
                    {...props}
                >
                    <Card.Content className="space-y-6 md:max-w-prose-narrow -mb-6">
                        <Product.Figure
                            title={product.title}
                            className="glass rounded-3xl"
                        />
                        <Card.Title className="text-accent max-md:text-left md:text-lg">
                            {product.title}
                        </Card.Title>
                    </Card.Content>
                    <Card.Content className="space-y-6">
                        <Product.ColorSwatch className="p-2 -mx-2" />
                        <Product.SizeSelect className="p-2 -mx-2" />
                        <div className="flex w-full items-center justify-between">
                            <Product.Variant />
                            <Product.Price className="text-right" />
                        </div>
                        {/* <Product.CartButton /> */}
                        <Product.Description
                            text={product.descriptionHtml}
                        />
                    </Card.Content>
                </Product.Root>
            </Card.Root>
        </section>
    )
}
