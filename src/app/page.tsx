import * as React from "react"

import { Card } from "@/primitives"

import { fruits } from "../assets"

export default function Home() {
    return (
        <Card.Root
            surface="main"
            glass
            blur
        >
            <Card.Figure
                image={fruits[0]}
                title="Fruit"
            />
            <Card.Footer
                overlay
                center
            >
                <Card.Title>Fruit</Card.Title>
            </Card.Footer>
        </Card.Root>
    )
}
