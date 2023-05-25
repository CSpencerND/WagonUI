"use client"

import * as React from "react"

import { Card } from "@/primitives"

import { useProductStore } from "@/lib"

type ProductFigureProps = Omit<React.ComponentPropsWithRef<typeof Card.Figure>, "image">

export function ProductFigure(props: ProductFigureProps) {
    const image = useProductStore((s) => s.currentImage)

    return (
        <Card.Figure
            image={image}
            {...props}
        />
    )
}
