import orange from "./fruit-1.jpeg"
import tangerine from "./fruit-2.jpeg"
import cherry from "./fruit-3.jpeg"
import lemon from "./fruit-4.jpeg"
import avocado from "./fruit-5.jpeg"
import lemon2 from "./fruit-6.jpeg"
import banana from "./fruit-7.jpeg"
import watermelon from "./fruit-8.jpeg"

import type { Image as TImage } from "@shopify/hydrogen-react/storefront-api-types"

type Fruit = TImage & {
    title: string
}

export const fruits: Fruit[] = [
    {
        url: orange.src,
        title: "orange",
        altText: "orange",
        height: orange.height,
        width: orange.width,
        originalSrc: "",
        src: "",
        transformedSrc: ""
    },
    {
        url: tangerine.src,
        title: "tangerine",
        altText: "tangerine",
        height: tangerine.height,
        width: tangerine.width,
        originalSrc: "",
        src: "",
        transformedSrc: ""
    },
    {
        url: cherry.src,
        title: "cherry",
        altText: "cherry",
        height: cherry.height,
        width: cherry.width,
        originalSrc: "",
        src: "",
        transformedSrc: ""
    },
    {
        url: lemon.src,
        title: "lemon",
        altText: "lemon",
        height: lemon.height,
        width: lemon.width,
        originalSrc: "",
        src: "",
        transformedSrc: ""
    },
    {
        url: avocado.src,
        title: "avocado",
        altText: "avocado",
        height: avocado.height,
        width: avocado.width,
        originalSrc: "",
        src: "",
        transformedSrc: ""
    },
    {
        url: lemon2.src,
        title: "lemon2",
        altText: "lemon2",
        height: lemon2.height,
        width: lemon2.width,
        originalSrc: "",
        src: "",
        transformedSrc: ""
    },
    {
        url: banana.src,
        title: "banana",
        altText: "banana",
        height: banana.height,
        width: banana.width,
        originalSrc: "",
        src: "",
        transformedSrc: ""
    },
    {
        url: watermelon.src,
        title: "watermelon",
        altText: "watermelon",
        height: watermelon.height,
        width: watermelon.width,
        originalSrc: "",
        src: "",
        transformedSrc: ""
    },
]
