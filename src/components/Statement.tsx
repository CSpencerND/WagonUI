import * as React from "react"

import { cn } from "@/lib"

import type { HTMLAttributes, PropsWithChildren } from "react"

type StatementProps = PropsWithChildren & {
    heading?: string
} & HTMLAttributes<HTMLElement>

export function Statement({ heading, children, className, ...props }: StatementProps) {
    return (
        <article
            className={cn("prose relative max-w-prose-wide space-y-6", className)}
            {...props}
        >
            <h3 className="text-accent-content md:text-lg">{heading}</h3>
            {children}
        </article>
    )
}
