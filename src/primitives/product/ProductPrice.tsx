"use client"

import * as React from "react"

import { ProductPrice as Price } from "@shopify/hydrogen-react"

import { cn, useProductStore } from "@/lib"

type PriceProps = Omit<React.ComponentProps<typeof Price>, "data">

const ProductPrice = React.forwardRef<HTMLParagraphElement, PriceProps>(({ className, ...props }, ref) => {
    const product = useProductStore((s) => s.product)

    return (
        <Price
            as="p"
            ref={ref}
            className={cn("text-xs md:text-sm", className)}
            data={product}
            priceType="regular"
            valueType="max"
            withoutTrailingZeros
            {...props}
        />
    )
})
ProductPrice.displayName = "ProductPrice"

export { ProductPrice }
