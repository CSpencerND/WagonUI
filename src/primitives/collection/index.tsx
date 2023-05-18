import * as React from "react"

import { CollectionGrid, CollectionRoot, CollectionHeader } from "./CollectionComponents"

const Collection = ({ children }: { children: React.ReactNode }) => <>{children}</>

Collection.Root = CollectionRoot
Collection.Grid = CollectionGrid
Collection.Header = CollectionHeader

export { Collection }
