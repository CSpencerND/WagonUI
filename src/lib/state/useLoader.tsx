"use client"

import * as React from "react"

import HashLoader from "react-spinners/HashLoader"

import { cn } from "@/lib"

type TLoadingSpinner = {
    LoadingSpinner: React.FC<Partial<React.ComponentProps<typeof HashLoader>>>
}

type LoaderState = TLoadingSpinner & {
    toggleLoading: () => void
    setLoadingTrue: () => void
    setLoadingFalse: () => void
    isLoading: boolean
}

export const useLoader = (CustomLoaderImport?: TLoadingSpinner): LoaderState => {
    const [isLoading, setLoading] = React.useState<boolean>(true)
    const toggleLoading = () => setLoading((state) => !state)
    const setLoadingTrue = () => setLoading(true)
    const setLoadingFalse = () => setLoading(false)

    const LoaderComponent: React.FC<Partial<React.ComponentProps<typeof HashLoader>>> =
        CustomLoaderImport?.LoadingSpinner ?? HashLoader

    const LoadingSpinner: React.FC<Partial<React.ComponentProps<typeof HashLoader>>> = ({
        className,
        color = "#00aaff",
        size = 96,
    }) => (
        <LoaderComponent
            color={color}
            size={size}
            loading={isLoading}
            className={cn("mx-auto h-fit max-h-full", className)}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )

    return { LoadingSpinner, toggleLoading, setLoadingTrue, setLoadingFalse, isLoading }
}
