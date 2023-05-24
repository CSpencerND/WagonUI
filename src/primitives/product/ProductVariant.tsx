"use client"

import * as React from "react"

import { cn } from "@/lib"
import { useProductStore } from "@/lib/state/ProductStore"
import { useIsomorphicLayoutEffect } from "@react-hookz/web"
import { useProduct } from "@shopify/hydrogen-react"

import type { ProductVariant } from "@shopify/hydrogen-react/storefront-api-types"

const ProductVariant = React.forwardRef<HTMLParagraphElement, React.ComponentProps<"p">>(
    ({ className, ...props }, ref) => {
        const variants = useProduct().variants as ProductVariant[]
        const color = useProductStore((s) => s.selectedColor) as string
        const size = useProductStore((s) => s.selectedSize) as string

        const variant = useVariant(variants, color, size)
        const variantName = variant?.title

        return (
            <p
                ref={ref}
                className={cn("text-sm text-info", className)}
                {...props}
            >
                Selected: {variantName}
            </p>
        )
    }
)
ProductVariant.displayName = "ProductVariant"

// TODO: Look at how next-shopify-storefront does this
function useVariant(variants: ProductVariant[], color: string, size: string) {
    const selectedOptions = useProduct().selectedOptions
    const setSelectedVariant = useProduct().setSelectedVariant
    const variant = useProduct().selectedVariant

    useIsomorphicLayoutEffect(() => {
        const variant = variants.find(
            (variant) =>
                variant.selectedOptions.some((option) => option.name === "Color" && option.value === color) &&
                variant.selectedOptions.some((option) => option.name === "Size" && option.value === size)
        )
        if (variant) setSelectedVariant(variant)
    }, [selectedOptions])

    return variant
}

export { ProductVariant }
