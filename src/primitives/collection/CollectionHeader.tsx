"use client"

import * as React from "react"

import { cn } from "@/lib"
import { type HTMLMotionProps, motion } from "framer-motion"

type HeaderProps = {
    title: string
    description?: string
} & HTMLMotionProps<"header">

const CollectionHeader = React.forwardRef<HTMLElement, HeaderProps>(
    ({ title, description, className, ...props }, ref) => (
        <motion.header
            ref={ref}
            initial={{ opacity: 0, x: "-20%" }}
            animate={{ opacity: 1, x: 0 }}
            className={cn("prose mt-4 max-w-prose-narrow prose-headings:mb-4", className)}
            {...props}
        >
            <h1 className="text-accent max-sm:text-3xl">{title}</h1>

            {description && (
                <aside
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }}
                />
            )}
        </motion.header>
    )
)
CollectionHeader.displayName = "CollectionHeader"

export { CollectionHeader }
