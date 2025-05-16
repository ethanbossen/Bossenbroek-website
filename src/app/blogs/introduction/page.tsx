"use client";

import React from "react";
import { AppShell, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

export default function IntroductionBlogPage() {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 125,
                breakpoint: "sm",
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
            className="accent-blue-400"
        >
            <AppShell.Header>
                <div className="flex gap-4 pt-2 pl-3">
                    <div className="text-3xl font-bold">Ethan Bossenbroek</div>
                </div>
            </AppShell.Header>

            <AppShell.Navbar p="sm">
                <NavLink
                    label="Home"
                    component={Link}
                    href="/"
                    onClick={() => toggleMobile()}
                />
                <NavLink
                    label="About"
                    component={Link}
                    href="/#about"
                    onClick={() => toggleMobile()}
                />
                <NavLink
                    label="Projects"
                    component={Link}
                    href="/#projects"
                    onClick={() => toggleMobile()}
                />
                <NavLink
                    label="Blogs"
                    component={Link}
                    href="/blogs"
                    onClick={() => toggleMobile()}
                />
                <NavLink
                    label="Contact"
                    component={Link}
                    href="/#footer"
                    onClick={() => toggleMobile()}
                />
            </AppShell.Navbar>

            <AppShell.Main>
                <div className="prose max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-center">Introduction</h1>
                    <p>
                        Welcome to my first blog!
                    </p>
                    <p>
                        I do not have much to say right now, but keep checking and I will be adding more content soon!
                    </p>
                </div>
            </AppShell.Main>
        </AppShell>
    );
}