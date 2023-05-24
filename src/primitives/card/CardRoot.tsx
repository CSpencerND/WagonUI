import * as React from "react"

import Link from "next/link"

import { cn } from "@/lib"
import { surfaces } from "@/styles/cva"
import { forwardRef } from "react"

import type { SurfaceVariants } from "@/styles/cva"

type CardRootProps = React.ComponentProps<"div"> & React.ComponentProps<typeof Link> & SurfaceVariants

const CardRoot = forwardRef<HTMLDivElement | HTMLAnchorElement, CardRootProps>(
    ({ className, href, glass, blur, surface, ...props }, ref) => {
        const baseClasses = "relative overflow-hidden rounded-3xl shadow-lg"

        if (!href) {
            return (
                <div
                    ref={ref as React.Ref<HTMLDivElement>}
                    className={cn(baseClasses, surfaces({ className, glass, blur }))}
                    {...props}
                />
            )
        }
        return (
            <Link
                ref={ref as React.Ref<HTMLAnchorElement>}
                href={href}
                className={cn(baseClasses, "block [&_h3]:text-primary", surfaces({ className, glass, blur }))}
                {...props}
            />
        )
    }
)
CardRoot.displayName = "CardRoot"

export { CardRoot }
