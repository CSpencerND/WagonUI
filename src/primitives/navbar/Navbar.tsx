import * as React from "react"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib"
import { surfaces } from "@/styles/cva"
import { forwardRef } from "react"

import type { SurfaceVariants } from "@/styles/cva"
import type { ImageProps } from "next/image"
import type { HTMLAttributes } from "react"

type NavbarProps = HTMLAttributes<HTMLDivElement> & SurfaceVariants

const NavbarRoot = forwardRef<HTMLDivElement, NavbarProps>(({ className, surface, blur, ...props }, ref) => (
    <header
        ref={ref}
        className={cn(
            "sticky top-0 z-40 max-h-[72px] w-full border-b shadow-sm",
            surfaces({ className, surface, blur })
        )}
        {...props}
    />
))
NavbarRoot.displayName = "NavbarRoot"

const NavbarContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <nav
        ref={ref}
        className={cn("navbar mx-auto max-w-7xl", className)}
        {...props}
    />
))
NavbarContent.displayName = "NavbarContent"

const NavbarStart = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("navbar-start", className)}
        {...props}
    />
))
NavbarStart.displayName = "NavbarStart"

const NavbarCenter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("navbar-end", className)}
        {...props}
    />
))
NavbarCenter.displayName = "NavbarCenter"

const NavbarEnd = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("navbar-end", className)}
        {...props}
    />
))
NavbarEnd.displayName = "NavbarEnd"

const NavbarLogo = ({ className, src, alt, children, ...props }: Partial<ImageProps>) => (
    <Link
        href="/"
        className={cn("", className)}
    >
        {src ? (
            <Image
                src={src}
                alt={alt ?? " "}
                className="h-full w-auto hover:opacity-80"
                placeholder="blur"
                {...props}
            />
        ) : (
            <h1 className="btn-ghost btn text-lg normal-case rounded-xl">{children}</h1>
        )}
    </Link>
)
NavbarLogo.displayName = "NavbarLogo"

export { NavbarCenter, NavbarContent, NavbarEnd, NavbarLogo, NavbarRoot, NavbarStart }
