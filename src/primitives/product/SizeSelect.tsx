"use client"

import * as React from "react"

import * as Radio from "@radix-ui/react-radio-group"

import { surfaces, type SurfaceVariants } from "@/styles/cva"

import { cn, useProductStore } from "@/lib"
import { useProduct } from "@shopify/hydrogen-react"

type SizeSelectProps = SurfaceVariants & {
    className?: string
}

const SizeSelect = ({ blur, glass, surface, className, ...props }: SizeSelectProps) => {
    const options = useProductStore((s) => s.product.options)
    const sizeOptions = options!.find((option) => option!.name === "Size")!.values as string[]
    const selectedSize = useProductStore((s) => s.selectedSize)

    const setSelectedSize = useProductStore((s) => s.setSelectedSize)
    const setSelectedOption = useProduct().setSelectedOption
    const handleChange = (size: string) => {
        if (!selectedSize) return
        setSelectedSize(size)
        setSelectedOption("Size", selectedSize)
    }

    return (
        <Radio.Root
            value={selectedSize}
            onValueChange={handleChange}
            className={cn(
                "relative flex w-full flex-wrap space-x-2 overflow-x-scroll rounded-3xl p-2",
                "focus-within:ring-2 focus-within:ring-offset-2",
                surfaces({ blur, surface, glass, className })
            )}
            aria-label="Select a size"
            {...props}
        >
            {sizeOptions &&
                sizeOptions.map((size) => (
                    <Radio.Item
                        key={size}
                        value={size}
                        className={cn(
                            `
                            grid h-7 w-7 flex-none cursor-pointer place-items-center
                            rounded-sq bg-base-100 text-sm shadow-lg
                            outline outline-2 outline-current
                            transition-all duration-200`,
                            "md:h-10 md:w-10",
                            "focus:z-10 focus-visible:bg-opacity-75",
                            "data-[state=checked]:outline-offset-2"
                        )}
                    >
                        {sizeText[size]}
                    </Radio.Item>
                ))}
        </Radio.Root>
    )
}

export { SizeSelect }

const sizeText: { [size: string]: string } = {
    XS: "XS",
    S: "S",
    M: "M",
    L: "L",
    XL: "XL",
    "2XL": "2X",
    "3XL": "3X",
    "4XL": "4X",
    "5XL": "5X",
}
