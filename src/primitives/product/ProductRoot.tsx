"use client"

import * as React from "react"
import { ProductProvider } from "@/lib"

export function ProductRoot({ product, children }: React.ComponentProps<typeof ProductProvider>) {
    return <ProductProvider product={product}>{children}</ProductProvider>
}
