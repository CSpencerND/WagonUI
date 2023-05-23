import * as React from "react"

import { cn } from "@/lib"

const CollectionGrid = React.forwardRef<HTMLMenuElement, React.ComponentProps<"menu">>(
    ({ className, ...props }, ref) => (
        <menu
            ref={ref}
            className={cn("relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3", className)}
            {...props}
        />
    )
)

export { CollectionGrid }
