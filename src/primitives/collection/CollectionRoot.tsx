import * as React from "react"

import { cn } from "@/lib"

const CollectionRoot = React.forwardRef<HTMLDivElement, React.ComponentProps<"section">>(
    ({ className, ...props }, ref) => (
        <section
            ref={ref}
            className={cn("mx-auto max-w-2xl space-y-8", className)}
            {...props}
        />
    )
)
CollectionRoot.displayName = "CollectionRoot"

export { CollectionRoot }
