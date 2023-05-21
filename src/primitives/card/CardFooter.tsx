import * as React from "react"

import { cn } from "@/lib"
import { cva } from "class-variance-authority"
import { forwardRef } from "react"

import type { VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "react"

const footerVariants = cva("p-2 rounded-b-3xl flex items-center", {
    variants: {
        overlay: {
            true: "bg-blur absolute bottom-0 isolate w-full p-3 before:bg-zinc-100/60",
        },
        center: {
            true: "justify-center",
        },
        // surface: {
        //     shell: "before:bg-base-300/60 bg-blur",
        //     main: "before:bg-base-200/60 bg-blur",
        //     detail: "before:bg-base-100/60 bg-blur",
        //     frosted: "before:bg-zinc-100/60 bg-blur",
        // },
    },
})

type CardFooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof footerVariants>

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ overlay, center, className, ...props }, ref) => (
    <footer
        ref={ref}
        className={cn(footerVariants({ overlay, center, className }))}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { CardFooter }
