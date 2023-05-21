import { cva, type VariantProps } from "class-variance-authority"

export const surfaces = cva("", {
    variants: {
        surface: {
            shell: "bg-base-300",
            main: "bg-base-200",
            detail: "bg-base-100",
            frosted: "before:bg-zinc-100/60 bg-blur",
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
            class: "before:bg-base-300/60",
        },
        {
            surface: "main",
            blur: true,
            class: "before:bg-base-200/60",
        },
        {
            surface: "detail",
            blur: true,
            class: "before:bg-base-100/60",
        },
    ],
})

export type SurfaceVariants = VariantProps<typeof surfaces>
