import * as React from "react"

import NextImage, { ImageProps } from "next/image"

import { forwardRef } from "react"

import type { Maybe, Image as TShopImage } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"

type NextImageProps = Omit<ImageProps, "src" | "alt">

type FigureProps = NextImageProps & {
    image: Maybe<TShopImage> | undefined
    title?: string
} & HTMLAttributes<HTMLElement>

const CardFigure = forwardRef<HTMLImageElement, FigureProps>(({ children, className, title, image, ...props }, ref) => {
    return (
        <figure className="max-h-full">
            {children}
            {image && (
                <NextImage
                    ref={ref}
                    src={image.url}
                    alt={image.altText ?? title ?? " "}
                    width={image.width ?? 1024}
                    height={image.height ?? 1024}
                    role="presentation"
                    className="h-full object-cover object-center"
                    {...props}
                />
            )}
        </figure>
    )
})
CardFigure.displayName = "CardFigure"

export { CardFigure }
