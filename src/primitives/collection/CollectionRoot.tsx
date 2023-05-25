import * as React from "react"

import { cn } from "@/lib"

const CollectionRoot = React.forwardRef<HTMLDivElement, React.ComponentProps<"section">>(
    ({ className, ...props }, ref) => (
        <section
            ref={ref}
            className={cn("container mx-auto max-w-prose-narrow md:max-w-prose-wide space-y-8", className)}
            {...props}
        />
    )
)
CollectionRoot.displayName = "CollectionRoot"

export { CollectionRoot }
