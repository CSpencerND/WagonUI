import * as React from "react"

import { Card } from "@/primitives"
import type { ComponentProps } from "react"

type CardProps = ComponentProps<typeof Card.Figure> & ComponentProps<typeof Card.Root>

export function ProductCard({ image, title, href }: CardProps) {
    return (
        <Card.Root
            surface="main"
            glass
            blur
            href={href}
        >
            <Card.Figure
                image={image}
                title={title}
            />
            <Card.Footer
                overlay
                center
            >
                <Card.Title>{title}</Card.Title>
            </Card.Footer>
        </Card.Root>
    )
}