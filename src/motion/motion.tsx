"use client"

import * as React from "react"

import NextLink from "next/link"

import { LazyMotion, domAnimation, m } from "framer-motion"
import { forwardRef } from "react"

import type { ComponentPropsWithoutRef } from "react"
import type { HTMLMotionProps } from "framer-motion"
import type { Variants } from "framer-motion"

const staggerChildren = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.1,
        },
    },
}

const MotionGridMenu = forwardRef<HTMLMenuElement, HTMLMotionProps<"menu">>(({ children, className, ...props }, ref) => (
    <LazyMotion
        strict
        features={domAnimation}
    >
        <m.menu
            ref={ref}
            className={className}
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            {...props}
        >
            {children}
        </m.menu>
    </LazyMotion>
))
MotionGridMenu.displayName = "MotionGridMenu"

const fadeInUp: Variants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

const MotionCardDiv = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(({ children, className, ...props }, ref) => (
    <LazyMotion
        strict
        features={domAnimation}
    >
        <m.div
            ref={ref}
            className={className}
            variants={fadeInUp}
            {...props}
        >
            {children}
        </m.div>
    </LazyMotion>
))
MotionCardDiv.displayName = "MotionCardDiv"

const MotionLink = m(NextLink)

const MotionCardLink = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<typeof MotionLink>>(
    ({ children, className, ...props }, ref) => (
        <LazyMotion
            strict
            features={domAnimation}
        >
            <MotionLink
                ref={ref}
                className={className}
                variants={fadeInUp}
                {...props}
            >
                {children}
            </MotionLink>
        </LazyMotion>
    )
)
MotionCardLink.displayName = "MotionCardLink"

const MotionPageHeader = forwardRef<HTMLElement, HTMLMotionProps<"article">>(({ children, className, ...props }, ref) => (
    <LazyMotion
        strict
        features={domAnimation}
    >
        <m.header
            ref={ref}
            initial={{ opacity: 0, x: "-20%" }}
            animate={{ opacity: 1, x: 0 }}
            className={className}
            {...props}
        >
            {children}
        </m.header>
    </LazyMotion>
))
MotionPageHeader.displayName = "MotionPageHeader"

export { MotionPageHeader, MotionGridMenu, MotionCardLink, MotionCardDiv }
