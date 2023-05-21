"use client"

import * as React from "react"
import Link from "next/link"

import { Popover } from "@headlessui/react"
import { CartCheckoutButton, CartCost, CartLineProvider, useCart } from "@shopify/hydrogen-react"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { Fragment } from "react"
import { CartLine } from "./CartLine"

import { cn } from "@/lib"

import type { Transition } from "framer-motion"

const transition: Transition = {
    type: "spring",
    stiffness: 1000,
    damping: 42.5,
} as const

export function Cart() {
    const { lines, totalQuantity } = useCart()

    return (
        <Popover>
            {({ open }) => (
                <>
                    <div className="indicator">
                        {totalQuantity > 0 && (
                            <span className="badge-accent badge badge-sm indicator-item right-2.5 top-2.5">
                                {totalQuantity}
                            </span>
                        )}
                        <Popover.Button className="btn-ghost btn-square btn grid place-items-center">
                            <ShoppingCart />
                        </Popover.Button>
                    </div>

                    <AnimatePresence>
                        {open && (
                            <MotionConfig transition={{ ...transition }}>
                                <motion.div
                                    className={`
                                        fixed inset-0 z-50 h-screen w-screen border-l
                                        bg-base-300/60 backdrop-blur-xl backdrop-saturate-[1.8] sm:ml-auto sm:max-w-3xl
                                    `}
                                    key="navMenuSidebar"
                                    variants={{
                                        close: {
                                            x: "100%",
                                            transition: {
                                                when: "afterChildren",
                                            },
                                        },
                                        open: {
                                            x: 0,
                                            transition: {
                                                when: "beforeChildren",
                                                ...transition,
                                            },
                                        },
                                    }}
                                    initial="close"
                                    animate={open ? "open" : "close"}
                                    exit="close"
                                >
                                    <Popover.Panel className="flex h-screen flex-col">
                                        <header className="flex items-center justify-between border-b p-4">
                                            <h1 className="text-2xl font-medium">In Your Cart</h1>
                                            <Popover.Button className="btn-primary btn-square btn rounded-sq">
                                                <ArrowRight />
                                            </Popover.Button>
                                        </header>

                                        <motion.ul
                                            variants={{
                                                open: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                    },
                                                },
                                            }}
                                            className="h-full divide-y divide-base-100 overflow-y-scroll px-6 py-4"
                                        >
                                            {lines?.length === 0 ? (
                                                <div className="grid h-full place-items-center">
                                                    <div className="space-y-6">
                                                        <h2 className="text-xl font-bold">Your Cart Is Empty</h2>
                                                        <Popover.Button as={Fragment}>
                                                            <Link
                                                                href="/collections"
                                                                className="btn-primary btn-block btn shadow-box shadow-primary-content"
                                                            >
                                                                Go Shopping!
                                                            </Link>
                                                        </Popover.Button>
                                                    </div>
                                                </div>
                                            ) : (
                                                lines?.map((line) => {
                                                    if (!line) return null
                                                    return (
                                                        <CartLineProvider
                                                            line={line}
                                                            key={line.id}
                                                        >
                                                            <CartLine />
                                                        </CartLineProvider>
                                                    )
                                                })
                                            )}
                                        </motion.ul>

                                        <footer className="border-t px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-sm font-medium">
                                                <p className="flex w-full justify-between">
                                                    Subtotal
                                                    <CartCost
                                                        as="span"
                                                        amountType="subtotal"
                                                    />
                                                </p>
                                            </div>
                                            <p className="mt-2 text-xs">Shipping and taxes calculated at checkout.</p>

                                            <CartCheckoutButton
                                                className={cn(
                                                    "btn-secondary btn-block btn mt-6 shadow-box shadow-secondary-content",
                                                    lines?.length === 0 ? "btn-disabled" : ""
                                                )}
                                            >
                                                Checkout
                                            </CartCheckoutButton>

                                            <div className="mt-6 flex justify-center text-center text-sm">
                                                <p>
                                                    or
                                                    <Popover.Button className="pl-2 font-medium text-primary-content hover:text-opacity-80">
                                                        Continue Shopping
                                                    </Popover.Button>
                                                </p>
                                            </div>
                                        </footer>
                                    </Popover.Panel>
                                </motion.div>
                            </MotionConfig>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="bg-blur fixed inset-0 z-30 cursor-pointer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </Popover>
    )
}
