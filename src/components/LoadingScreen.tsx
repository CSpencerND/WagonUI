import * as React from "react"

import { cn } from "@/lib"

import Loader from "react-spinners/HashLoader"

type LoaderProps = Partial<React.ComponentPropsWithRef<typeof Loader>> & {
    CustomLoaderImport: React.FC<Partial<React.ComponentPropsWithRef<typeof Loader>>>
}

export const LoadingScreen = React.forwardRef<HTMLDivElement, LoaderProps>(
    ({ CustomLoaderImport, className, ...props }, ref) => {
        const LoaderComponent = CustomLoaderImport ?? Loader

        return (
            <section
                ref={ref}
                className="grid h-[100svh] place-items-center"
            >
                <LoaderComponent
                    loading={true}
                    color="#3abff8"
                    size={96}
                    className={cn("mx-auto", className)}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    {...props}
                />
            </section>
        )
    }
)
