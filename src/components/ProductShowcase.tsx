"use client"

import * as React from "react"

import { Product, Card } from "@/primitives"

import { cn } from "@/lib"

type ProductShowcaseProps = React.ComponentProps<typeof Product.Root> & React.ComponentProps<"section">

export function ProductShowcase({ product, className, ...props }: ProductShowcaseProps) {
    return (
        <Card.Root
            surface="main"
            blur
        >
            <Product.Root
                product={product}
                {...props}
            >
                <Card.Content className="space-y-6">
                    <Product.Figure title={product.title} />
                    <Card.Title className="text-accent-content md:text-lg" />
                </Card.Content>
                <Card.Content>
                    <Product.ColorSwatch className="md:h-10 md:w-10" />
                    <Product.SizeSelect />
                    <div className="flex w-full items-center justify-between">
                        <Product.Variant />
                        <Product.Price className="text-right" />
                    </div>
                    <Product.CartButton />
                    <Product.Description text={product.descriptionHtml} />
                </Card.Content>
            </Product.Root>
        </Card.Root>
    )
}

// return (
//     <section
//         className={cn(
//             `
//             card bg-blur mx-auto max-w-lg gap-6 rounded-3xl bg-base-200/60 p-6
//             lg:card-side md:gap-9 md:p-9 lg:max-w-7xl lg:gap-12 lg:p-12 [&>*]:basis-1/2
//         `,
//             className
//         )}
//         {...props}
//     >
//         <Card.Root
//             surface="main"
//             blur
//         >
//             <Product.Root product={product}>
//                 <div className="space-y-6">
//                     <Card.Figure
//                         image={image}
//                         title={product.title}
//                     />
//                     <Card.Title className="text-accent-content md:text-lg" />
//                 </div>
//             </Product.Root>
//         </Card.Root>
//     </section>
// )
