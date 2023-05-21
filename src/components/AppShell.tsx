import * as React from "react"

import { Dropdown, MobileNavigation } from "@/components"
import { Navbar } from "@/primitives"

const links: { title: string; href: string }[] = [
    {
        title: "Alert Dialog",
        href: "/",
    },
    {
        title: "Hover Card",
        href: "/",
    },
    {
        title: "Progress",
        href: "/",
    },
    {
        title: "Scroll-area",
        href: "/",
    },
    {
        title: "Tabs",
        href: "/",
    },
    {
        title: "Tooltip",
        href: "/",
    },
]

export function AppShell() {
    return (
        <Navbar.Root
            surface="shell"
            blur
        >
            <Navbar.Content>
                <Navbar.Start>
                    <Navbar.Logo>WagonUI</Navbar.Logo>
                </Navbar.Start>
                <Navbar.End>
                    <Dropdown
                        linkData={links}
                        title="Collections"
                        surface="shell"
                        blur
                    />
                    {/* <button className="btn-ghost btn">account</button> */}
                    <button className="btn-ghost btn">cart</button>
                </Navbar.End>
            </Navbar.Content>
            <MobileNavigation linkData={links} />
        </Navbar.Root>
    )
}
