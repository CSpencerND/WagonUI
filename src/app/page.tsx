import * as React from "react"

import { CollectionShowcase, ProductShowcase } from "@/components"
import { Card, CollectionItem, Product } from "@/primitives"

// import { fruits } from "../assets"
import { products } from "@/data"

export default function Home() {
    return (
        // <ProductShowcase product={products[0].node} />
        <div>testing</div>
    )
}
 
// export default function Home() {
//     return (
//         <CollectionShowcase title="Fruits">
//             {products.map(({ node }, i) => (
//                 <Product.Root product={node}>
//                     <CollectionItem
//                         key={i}
//                         index={i}
//                         className="space-y-2"
//                     >
//                         <Card.Root
//                             title={node.title}
//                             href="/"
//                             glass
//                             blur
//                             surface="main"
//                         >
//                             <Product.Figure />
//                             <Card.Footer
//                                 overlay
//                                 center
//                                 surface="main"
//                             >
//                                 <Card.Title>{node.title}</Card.Title>
//                             </Card.Footer>
//                         </Card.Root>
//                         <Product.ColorSwatch
//                             surface="main"
//                             blur
//                         />
//                     </CollectionItem>
//                 </Product.Root>
//             ))}
//         </CollectionShowcase>
//     )
// }
