# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Ethan Bossenbroek. Warm analog aesthetic (cream/amber palette, Instrument Serif + Space Grotesk typography). Three.js vibrating guitar strings in the hero. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, React Three Fiber. Deployed on Vercel.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint (extends `next/core-web-vitals`)

## Architecture

- **Single-page site**: `src/app/page.tsx` composes Navbar, Hero, Work, About, Footer
- **Components**: Each section in `src/components/` — client components where needed
- **Three.js**: `StringsScene.tsx` renders 6 vibrating guitar strings using TubeGeometry with standing-wave harmonics, vertex positions updated per frame. Loaded via `next/dynamic` with `ssr: false`
- **Styling**: Tailwind CSS with warm color tokens (`cream`, `warm-*`, `surface`) defined in `tailwind.config.ts`. CSS custom properties in `globals.css`
- **Typography**: Instrument Serif (headings, `font-serif`) + Space Grotesk (body, `font-sans`) via `next/font/google`
- **Animations**: Framer Motion used sparingly — clip-path reveal on Work section title only. No generic fade-up-on-scroll pattern
- **Path alias**: `@/*` maps to `./src/*`

## Design Principles

- Warm analog palette, NOT dark mode
- No gradient text, no identical fade-up animations on every section
- Serif headings, editorial layout with visual variation between sections
- Guitar/music personality throughout (strings scene, photo of amps, copy tone)
