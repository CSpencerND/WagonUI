"use client"

import * as React from "react"

import { AddToCartButton } from "@shopify/hydrogen-react"

import { cn } from "@/lib"
import { useShopifyProduct } from "@/lib/state/ProductStore"

type CartButtonProps = React.ComponentPropsWithRef<typeof AddToCartButton>

const CartButton = React.forwardRef<HTMLButtonElement, CartButtonProps>(({ className, ...props }, ref) => {
    const variant = useShopifyProduct().selectedVariant
    const variantID = variant?.id

    return (
        <AddToCartButton
            buttonRef={ref}
            variantId={variantID ?? " "}
            className={cn("btn-primary btn shadow-box shadow-primary-content", className)}
            accessibleAddingToCartLabel="Item is being added to cart with selected color and size"
            {...props}
        >
            Add To Cart
        </AddToCartButton>
    )
})
CartButton.displayName = "CartButton"

export { CartButton }
