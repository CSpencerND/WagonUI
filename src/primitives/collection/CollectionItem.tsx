"use client"

import * as React from "react"

import { useAnimate, useInView } from "framer-motion"

type ItemProps = {
    index: number
} & React.ComponentProps<"li">

const CollectionItem = ({ className, index, ...props }: ItemProps) => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, { once: true })

    React.useEffect(() => {
        if (!isInView) return

        const enterAnimation = async () => {
            await animate(scope.current, { opacity: [0, 1], y: [-75, 0] }, { delay: index * 0.15 })
        }

        enterAnimation()
    }, [isInView])

    return (
        <li
            ref={scope}
            className={className}
            {...props}
        />
    )
}

export { CollectionItem }
