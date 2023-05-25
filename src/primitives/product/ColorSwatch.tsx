"use client"

import * as React from "react"

import * as Radio from "@radix-ui/react-radio-group"

import { surfaces, type SurfaceVariants } from "@/styles/cva"

import { cn, useProductStore } from "@/lib"
import { useProduct } from "@shopify/hydrogen-react"

type ColorsSwatchprops = SurfaceVariants & {
    className?: string
}

const ColorSwatch = ({ blur, glass, surface, className, ...props }: ColorsSwatchprops) => {
    const selectedColor = useProductStore((s) => s.selectedColor)
    const hexCodes = useProductStore((s) => s.hexCodes)
    const colorOptions = useProductStore((s) => s.colorOptions)
    const setCurrentImage = useProductStore((s) => s.setCurrentImage)

    const setSelectedColor = useProductStore((s) => s.setSelectedColor)
    const setSelectedOption = useProduct().setSelectedOption

    const handleChange = (color: string) => {
        if (!selectedColor) return
        setSelectedColor(color)
        setSelectedOption("Color", selectedColor)
    }

    return (
        <Radio.Root
            value={selectedColor}
            onValueChange={handleChange}
            className={cn(
                "relative flex w-full space-x-2 overflow-x-scroll rounded-3xl p-3",
                surfaces({ blur, surface, glass, className })
            )}
            aria-label="Select a color"
            {...props}
        >
            {hexCodes &&
                hexCodes.map((hexCode, i) => (
                    <Radio.Item
                        key={colorOptions![i]}
                        value={colorOptions![i]}
                        className={cn(
                            `
                            h-7 w-7 flex-none cursor-pointer rounded-full
                            outline outline-1 outline-current
                            transition-[outline-offset]`,
                            "md:h-10 md:w-10",
                            "focus:z-10 focus-visible:outline-2",
                            "data-[state=checked]:outline-offset-2"
                        )}
                        style={{
                            backgroundColor: hexCode === "#212226" || hexCode === "0D0D0D" ? "#070707" : hexCode,
                        }}
                        aria-label={colorOptions ? colorOptions[i] : `Color ${i}`}
                        onFocus={() => setCurrentImage(i)}
                    />
                ))}
        </Radio.Root>
    )
}

export { ColorSwatch }
