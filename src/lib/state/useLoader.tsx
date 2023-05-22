"use client"

import React, { ComponentProps, useState } from "react"
import { HashLoader } from "react-spinners"
import { cn } from "@/lib"

type TLoadingSpinner = {
    LoadingSpinner: React.FC<Partial<ComponentProps<typeof HashLoader>>>
}

type LoaderState = TLoadingSpinner & {
    toggleLoading: () => void
    setLoadingTrue: () => void
    setLoadingFalse: () => void
    isLoading: boolean
}

export const useLoader = (CustomLoaderImport?: TLoadingSpinner): LoaderState => {
    const [isLoading, setLoading] = useState<boolean>(true)
    const toggleLoading = () => setLoading((state) => !state)
    const setLoadingTrue = () => setLoading(true)
    const setLoadingFalse = () => setLoading(false)

    const LoaderComponent: React.FC<Partial<ComponentProps<typeof HashLoader>>> =
        CustomLoaderImport?.LoadingSpinner ?? HashLoader

    const LoadingSpinner: React.FC<Partial<ComponentProps<typeof HashLoader>>> = ({
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

// import React, { ComponentProps, useState } from "react"
// import { HashLoader } from "react-spinners"
// import { cn } from "@/lib"

// type TLoadingSpinner = {
//     LoadingSpinner: ({ color, size, loading, className }: Partial<ComponentProps<typeof HashLoader>>) => JSX.Element
// }

// type LoaderState = TLoadingSpinner & {
//     toggleLoading: () => void
//     setLoadingTrue: () => void
//     setLoadingFalse: () => void
//     isLoading: boolean
// }

// export const useLoader = (CustomLoaderImport?: TLoadingSpinner): LoaderState => {
//     const [isLoading, setLoading] = useState<boolean>(true)
//     const toggleLoading = () => setLoading((state) => !state)
//     const setLoadingTrue = () => setLoading(true)
//     const setLoadingFalse = () => setLoading(false)

//     const LoadingSpinner = ({
//         className,
//         color = "#00aaff",
//         size = 96,
//     }: Partial<ComponentProps<typeof HashLoader>>) => {
//         const LoaderComponent = CustomLoaderImport ?? HashLoader

//         return (
//             <LoaderComponent
//                 color={color}
//                 size={size}
//                 loading={isLoading}
//                 className={cn("mx-auto h-fit max-h-full", className)}
//                 aria-label="Loading Spinner"
//                 data-testid="loader"
//             />
//         )
//     }

//     return { LoadingSpinner, toggleLoading, setLoadingTrue, setLoadingFalse, isLoading }
// }
