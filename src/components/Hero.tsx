import * as React from "react"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib"

import type { Brand } from "@shopify/hydrogen-react/storefront-api-types"
import type { NextFont } from "next/dist/compiled/@next/font"
import type { StaticImageData } from "next/image"

type HeroProps = {
    font?: NextFont
    rounded?: boolean
    buttonText?: string
    image?: StaticImageData
    brand: Brand
    aspect?: "portrait" | "landscape"
}

export function Hero({ font, image, brand, ...props }: HeroProps) {
    const { rounded = true, aspect = "landscape", buttonText = "Go Shopping!" } = props

    return (
        <section
            className="aspect-h-9 aspect-w-16 max-h-[calc(100vh-192px)]"
            {...props}
        >
            <div
                className={cn(
                    "hero overflow-hidden shadow-lg",
                    aspect === "portrait" ? "min-h-screen" : "",
                    rounded ? "rounded-3xl" : ""
                )}
            >
                {image ? (
                    <Image
                        className="h-auto w-full object-cover object-center"
                        src={image}
                        alt={brand?.slogan ?? brand?.coverImage?.alt ?? ""}
                        placeholder="blur"
                        priority
                    />
                ) : (
                    brand?.coverImage?.image?.url && (
                        <Image
                            className="h-auto w-full object-cover object-center"
                            src={brand?.coverImage?.image?.url}
                            alt={brand?.slogan ?? brand?.coverImage?.alt ?? ""}
                            width={brand?.coverImage?.image?.width ?? 1024}
                            height={brand?.coverImage?.image?.width ?? 1024}
                            priority
                        />
                    )
                )}
                <div
                    className="hero-overlay"
                    aria-hidden={true}
                />
                <div className="relative grid h-5/6 grid-rows-3 text-center text-neutral-content">
                    <div aria-hidden={true} />
                    <h1
                        className={cn(font?.className ?? "", "text-3xl")}
                        style={{
                            textShadow: "1px 2px 2px black, -1px -2px 2px black",
                        }}
                    >
                        {brand?.slogan ?? brand?.coverImage?.alt}
                    </h1>
                    <Link
                        href="/collections"
                        className={`
                            btn-primary btn mx-auto w-fit bg-opacity-60 text-primary-content
                            shadow-box shadow-primary-content backdrop-blur-sm backdrop-saturate-150
                        `}
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    )
}
