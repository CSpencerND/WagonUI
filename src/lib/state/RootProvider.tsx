"use client"

import * as React from "react"

import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react"
import { Info } from "lucide-react"

import { Id, ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import "./Toast.css"

type Children = {
    children?: React.ReactNode
}

type RootProviderProps = Children & {
    env: {
        NEXT_PUBLIC_STOREFRONT_TOKEN: string
        NEXT_PUBLIC_STOREFRONT_DOMAIN: string
        NEXT_PUBLIC_STOREFRONT_VERSION: string
        NEXT_PUBLIC_STOREFRONT_ID?: string | undefined
    }
}

export function RootProvider({ children, env }: RootProviderProps) {
    return (
        <ShopifyProvider
            storefrontId={env.NEXT_PUBLIC_STOREFRONT_ID}
            storefrontToken={env.NEXT_PUBLIC_STOREFRONT_TOKEN}
            storeDomain={`https://${env.NEXT_PUBLIC_STOREFRONT_DOMAIN}`}
            storefrontApiVersion={env.NEXT_PUBLIC_STOREFRONT_VERSION}
            countryIsoCode="US"
            languageIsoCode="EN"
        >
            <ExtendedCartProvider>{children}</ExtendedCartProvider>
        </ShopifyProvider>
    )
}

export function ExtendedCartProvider({ children }: Children) {
    const toastId = React.useRef<null | Id>(null)

    const onStart = () => {
        toastId.current = toast.loading("Updating Cart", {})
    }

    const onComplete = (message: string) => {
        if (toastId.current === null) return

        toast.update(toastId.current, {
            render: message,
            type: toast.TYPE.INFO,
            isLoading: false,
            closeOnClick: true,
            draggable: true,
            closeButton: false,
            autoClose: 2000,
            className: "animate-in zoom-in fade-in duration-300",
            icon: <Info className="stroke-info" />,
        })
    }

    return (
        <CartProvider
            onCreate={onStart}
            onLineAdd={onStart}
            onLineRemove={onStart}
            onLineUpdate={onStart}
            onCreateComplete={() => onComplete("Item added to cart")}
            onLineAddComplete={() => onComplete("Item added to cart")}
            onLineRemoveComplete={() => onComplete("Item removed from cart")}
            onLineUpdateComplete={() => onComplete("Item updated in cart")}
        >
            <ToastContainer
                position="top-right"
                autoClose={2000}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeButton={false}
                theme="dark"
            />
            {children}
        </CartProvider>
    )
}
