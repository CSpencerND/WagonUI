import * as React from "react"

import { cn } from "@/lib"

type DescriptionProps = React.ComponentProps<"aside"> & {
    text: string
}

const ProductDescription = React.forwardRef<HTMLDivElement, DescriptionProps>(({ text, className, ...props }, ref) => (
    <aside
        ref={ref}
        className={cn("prose [&_strong]:text-accent-content", className)}
        dangerouslySetInnerHTML={{ __html: text }}
        {...props}
    />
))
ProductDescription.displayName = "ProductDescription"

export { ProductDescription }
