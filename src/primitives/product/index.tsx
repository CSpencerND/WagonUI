import * as React from "react"

import { CartButton } from "./CartButton"
import { ColorSwatch } from "./ColorSwatch"
import { ProductDescription } from "./ProductDescription"
import { ProductFigure } from "./ProductFigure"
import { ProductPrice } from "./ProductPrice"
import { ProductRoot } from "./ProductRoot"
import { ProductVariant } from "./ProductVariant"
import { SizeSelect } from "./SizeSelect"

const Product = ({ children }: { children: React.ReactNode }) => <>{children}</>

Product.CartButton = CartButton
Product.ColorSwatch = ColorSwatch
Product.Description = ProductDescription
Product.Figure = ProductFigure
Product.Price = ProductPrice
Product.Root = ProductRoot
Product.Variant = ProductVariant
Product.SizeSelect = SizeSelect

export { Product }
