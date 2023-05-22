import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export { ProductProvider, RootProvider, useHydrated, useLoader, useProductStore } from "./state"
