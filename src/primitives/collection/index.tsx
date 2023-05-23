import * as React from "react"

import { CollectionGrid } from "./CollectionGrid"
import { CollectionHeader } from "./CollectionHeader"
import { CollectionItem } from "./CollectionItem"
import { CollectionRoot } from "./CollectionRoot"

const Collection = ({ children }: { children: React.ReactNode }) => <>{children}</>

Collection.Root = CollectionRoot
Collection.Header = CollectionHeader
Collection.Grid = CollectionGrid
Collection.Item = CollectionItem

export { Collection, CollectionItem }
