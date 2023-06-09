"use client"

import { ProductCard } from "@/components"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import AliceCarousel from "react-alice-carousel"
import { HashLoader } from "react-spinners"

import { useHydrated } from "@/lib"
import { useMountEffect } from "@react-hookz/web"
import { useWindowSize } from "@react-hookz/web/esm/useWindowSize"
import { useRef, useState } from "react"

import "react-alice-carousel/lib/alice-carousel.css"
import "./Featured.css"

import type { Product as TProduct } from "@shopify/hydrogen-react/storefront-api-types"

type FeaturedProps = {
    featured: TProduct[]
    collectionHandle: string
}

export function FeaturedCollection({ featured, collectionHandle }: FeaturedProps) {
    const sliderRef = useRef<AliceCarousel>(null)
    const width = useWindowSize(undefined, true).width
    const autoplay: boolean = useHydrated()

    const [isLoading, setLoading] = useState<boolean>(true)
    const [items, setItems] = useState<JSX.Element[]>([
        <HashLoader
            loading={isLoading}
            color="#00aaff"
            size={96}
            className="mx-auto h-fit max-h-full"
            aria-label="Loading Spinner"
            data-testid="loader"
        />,
    ])

    useMountEffect(() => {
        const items = featured.map((product) => {
            const { featuredImage: image, title, handle } = product
            const href = `/collections/${collectionHandle}/${handle}`

            return (
                <ProductCard
                    title={title}
                    href={href}
                    image={image}
                    onDragStart={(e) => e.preventDefault()}
                />
            )
        })
        setItems(items)
        setLoading(false)
    })

    return (
        <>
            <AliceCarousel
                ref={sliderRef}
                items={items}
                infinite
                keyboardNavigation
                disableDotsControls
                disableButtonsControls
                paddingLeft={70}
                paddingRight={70}
                autoPlay={autoplay}
                autoPlayStrategy="all"
                autoPlayInterval={1250}
                innerWidth={width}
                responsive={{
                    0: {
                        items: 1,
                    },
                    640: {
                        items: 2,
                    },
                    1024: {
                        items: 3,
                    },
                    1280: {
                        items: 4,
                    },
                }}
            />

            <div className="flex items-center justify-evenly">
                <Link
                    href="collections/staff-picks"
                    className="btn-primary btn"
                >
                    See More
                </Link>

                <span className="flex gap-2">
                    <button
                        aria-controls="alice-carousel"
                        className="btn-secondary btn-square btn-sm btn rounded-lg"
                        onClick={() => sliderRef?.current?.slidePrev() ?? null}
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        aria-controls="alice-carousel"
                        className="btn-secondary btn-square btn-sm btn rounded-lg"
                        onClick={() => sliderRef?.current?.slideNext() ?? null}
                    >
                        <ChevronRight />
                    </button>
                </span>
            </div>
        </>
    )
}
