import * as React from "react"

import { CartButton } from "./CartButton"
import { ColorSwatch } from "./ColorSwatch"
import { ProductDescription } from "./ProductDescription"
import { ProductRoot } from "./ProductRoot"
import { SizeSelect } from "./SizeSelect"

const Product = ({ children }: { children: React.ReactNode }) => <>{children}</>

Product.CartButton = CartButton
Product.ColorSwatch = ColorSwatch
Product.Description = ProductDescription
Product.Root = ProductRoot
Product.SizeSelect = SizeSelect

export { Product }
