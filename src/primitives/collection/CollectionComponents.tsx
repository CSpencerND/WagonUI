import * as React from "react"

import { MotionGridMenu, MotionPageHeader } from "@/motion"

import { cn } from "@/lib"
import { forwardRef } from "react"

import type { ComponentPropsWithoutRef, HTMLAttributes } from "react"

const CollectionRoot = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <section
        ref={ref}
        className={cn("mx-auto max-w-2xl space-y-8", className)}
        {...props}
    />
))
CollectionRoot.displayName = "CollectionRoot"

type CollectionGridProps = HTMLAttributes<HTMLMenuElement> & Partial<ComponentPropsWithoutRef<typeof MotionGridMenu>>

const CollectionGrid = forwardRef<HTMLMenuElement, CollectionGridProps>(({ className, ...props }, ref) => (
    <MotionGridMenu
        ref={ref}
        className={cn("relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3", className)}
        {...props}
    />
))
CollectionGrid.displayName = "CollectionGrid"

type CollectionHeaderProps = HTMLAttributes<HTMLDivElement> &
    ComponentPropsWithoutRef<typeof MotionPageHeader> & {
        collectionTitle: string
        collectionDescription?: string
    }

const CollectionHeader = forwardRef<HTMLDivElement, CollectionHeaderProps>(
    ({ collectionTitle, collectionDescription, className, ...props }, ref) => (
        <MotionPageHeader
            ref={ref}
            className={cn("prose mt-4 max-w-prose-narrow prose-headings:mb-4", className)}
            {...props}
        >
            <h1 className="text-accent max-sm:text-3xl">{collectionTitle}</h1>

            {collectionDescription && (
                <aside
                    dangerouslySetInnerHTML={{
                        __html: collectionDescription,
                    }}
                />
            )}
        </MotionPageHeader>
    )
)
CollectionHeader.displayName = "CollectionHeader"

export { CollectionGrid, CollectionHeader, CollectionRoot }
