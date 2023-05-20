import * as React from "react"

import { NavbarCenter, NavbarContent, NavbarEnd, NavbarLogo, NavbarRoot, NavbarStart } from "./Navbar"

const Navbar = ({ children }: { children: React.ReactNode }) => <>{children}</>

Navbar.Root = NavbarRoot
Navbar.Content = NavbarContent
Navbar.Start = NavbarStart
Navbar.Center = NavbarCenter
Navbar.End = NavbarEnd
Navbar.Logo = NavbarLogo

export { Navbar }
