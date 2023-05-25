import * as React from "react"

import { cn } from "@/lib"
import { cva } from "class-variance-authority"
import { forwardRef } from "react"

import type { VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "react"

const footerVariants = cva("p-3 sm:py-5 rounded-b-3xl flex items-center", {
    variants: {
        overlay: {
            true: "bg-blur absolute bottom-0 isolate w-full",
        },
        center: {
            true: "justify-center",
        },
        surface: {
            shell: "before:bg-base-300/60",
            main: "before:bg-base-200/60",
            detail: "before:bg-base-100/60",
            frosted: "before:bg-zinc-100/60",
        },
    },
})

type CardFooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof footerVariants>

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ overlay, center, surface, className, ...props }, ref) => (
    <footer
        ref={ref}
        className={cn(footerVariants({ overlay, center, surface, className }))}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { CardFooter }
