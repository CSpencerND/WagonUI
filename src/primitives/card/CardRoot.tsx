import * as React from "react"

import { MotionCardDiv, MotionCardLink } from "@/motion"

import { cn } from "@/lib"
import { surfaces } from "@/styles/cva"
import { forwardRef } from "react"

import type { SurfaceVariants } from "@/styles/cva"
import type { HTMLMotionProps } from "framer-motion"
import type { ComponentPropsWithoutRef } from "react"

type CardRootProps = HTMLMotionProps<"div"> & SurfaceVariants & Partial<ComponentPropsWithoutRef<typeof MotionCardLink>>

const baseClasses = "relative overflow-hidden rounded-3xl shadow-lg"

const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(({ className, href, glass, blur, surface, ...props }, ref) => {
    if (!href) {
        return (
            <MotionCardDiv
                ref={ref}
                className={cn(baseClasses, surfaces({ className, glass, blur }))}
                {...props}
            />
        )
    }
    return (
        <MotionCardLink
            href={href}
            className={cn(baseClasses, "block [&_h3]:text-primary", surfaces({ className, glass, blur }))}
            {...props}
        />
    )
})
CardRoot.displayName = "CardRoot"

export { CardRoot }
