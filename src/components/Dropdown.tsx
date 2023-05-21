"use client"

import * as React from "react"

import { Menu } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib"
import { surfaces } from "@/styles/cva"

import type { SurfaceVariants } from "@/styles/cva"

type DropdownProps = {
    linkData: {
        title: string
        href: string
    }[]
    className?: string
    title: string
} & SurfaceVariants

const MenuItems = motion(Menu.Items)

export function Dropdown({ linkData, title, surface, blur, className }: DropdownProps) {
    return (
        <Menu
            as="div"
            className="relative inline-block text-left max-lg:hidden"
        >
            {({ open }) => (
                <>
                    <Menu.Button className="btn-ghost btn flex-nowrap gap-2">
                        {title}
                        <ChevronDown
                            aria-hidden="true"
                            className="ui-open:-rotate-180 ui-open:duration-300 ui-not-open:duration-150"
                        />
                    </Menu.Button>
                    <AnimatePresence>
                        {open && (
                            <MenuItems
                                variants={{
                                    close: {
                                        y: "-5%",
                                        scale: 0.65,
                                    },
                                    open: {
                                        y: 0,
                                        scale: 1,
                                    },
                                }}
                                initial="close"
                                animate={open ? "open" : "close"}
                                exit="close"
                                as="menu"
                                className={cn(
                                    "absolute right-0 w-56 origin-top-right rounded-2xl border p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                    surfaces({ surface, blur, className })
                                )}
                            >
                                {linkData &&
                                    linkData.map((l, i) => (
                                        <Menu.Item
                                            key={i}
                                            as="li"
                                        >
                                            <Link
                                                href={l.href}
                                                className={cn(
                                                    "group flex w-full items-center rounded-xl p-3 text-sm",
                                                    "ui-active:bg-primary/30 ui-active:text-primary"
                                                )}
                                            >
                                                {l.title}
                                            </Link>
                                        </Menu.Item>
                                    ))}
                            </MenuItems>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Menu>
    )
}
