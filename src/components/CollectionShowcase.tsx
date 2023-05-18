import * as React from "react"

import { Collection } from "@/primitives"

import type { ComponentProps } from "react"

type CollectionProps = ComponentProps<typeof Collection.Header> & ComponentProps<typeof Collection.Grid>

export function CollectionShowcase({ collectionTitle, collectionDescription, children, className }: CollectionProps) {
    return (
        <Collection.Root>
            <Collection.Header {...{ collectionTitle, collectionDescription }} />
            <Collection.Grid className={className}>{children}</Collection.Grid>
        </Collection.Root>
    )
}
