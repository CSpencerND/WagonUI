import { cva, type VariantProps } from "class-variance-authority"

export const surfaces = cva("", {
    variants: {
        surface: {
            shell: "bg-base-300/60",
            main: "bg-base-200/60",
            detail: "bg-base-100/60",
        },
        blur: {
            true: "bg-blur",
        },
        glass: {
            true: "glass bg-blur",
        },
    },

    compoundVariants: [
        {
            surface: "shell",
            blur: true,
            class: "before:bg-base-300/[22.36%]",
        },
        {
            surface: "main",
            blur: true,
            class: "before:bg-base-200/[22.36%]",
        },
        {
            surface: "detail",
            blur: true,
            class: "before:bg-base-100/[22.36%]",
        },
    ],
})

export type SurfaceVariants = VariantProps<typeof surfaces>
