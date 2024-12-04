"use client";

import React from "react";
import "./globals.css";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import HomeSection from "@/components/HomeSection";

export default function Home() {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <div className="flex items-end mt-4 w-auto justify-between">
                    <div className="flex items-center pl-5">
                        <Burger
                            opened={mobileOpened}
                            onClick={toggleMobile}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Burger
                            opened={desktopOpened}
                            onClick={toggleDesktop}
                            visibleFrom="sm"
                            size="sm"
                        />
                        <Link href="/" className="font-bold text-3xl pl-5 text-purple-800">
                            Ethan Bossenbroek
                        </Link>
                    </div>
                </div>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Link href="/">Hello</Link>
                <Link href="/">Hello</Link>
                <Link href="/">Hello</Link>

            </AppShell.Navbar>
            <AppShell.Main>
               <div className="flex items-center justify-center w-full bg-gradient-to-b from-purple-900 via-purple-800 to-purple-600">
                  <HomeSection/>
               </div>

            </AppShell.Main>
        </AppShell>
    );
}
