import * as React from "react"

import NextImage, { ImageProps } from "next/image"

import { forwardRef } from "react"
import { cn } from "@/lib"

import type { Image as TShopImage } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"

type NextImageProps = Omit<ImageProps, "src" | "alt">

type FigureProps = NextImageProps & {
    image: Partial<TShopImage>
    title?: string
} & HTMLAttributes<HTMLElement>

const CardFigure = forwardRef<HTMLImageElement, FigureProps>(({ children, className, title, image, ...props }, ref) => {
    return (
        <figure className="max-h-full">
            {children}
            {image.url ? (
                <NextImage
                    ref={ref}
                    src={image.url}
                    alt={image.altText ?? title ?? " "}
                    width={image.width ?? 1024}
                    height={image.height ?? 1024}
                    role="presentation"
                    className={cn("object-cover object-center", className)}
                    {...props}
                />
            ) : (
                <span>"Loading Image ..."</span>
            )}
        </figure>
    )
})
CardFigure.displayName = "CardFigure"

export { CardFigure }
