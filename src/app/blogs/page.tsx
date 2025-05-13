"use client";

import React from "react";
import { AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import BlogsDirectory from "@/components/BlogsDirectory";

export default function BlogsPage() {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    const blogsProp = [
        {
            title: "Coming Soon",
            desc: "Blog posts will be added shortly. Stay tuned!",
        },
    ];
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
                <BlogsDirectory blogs={blogsProp} />
            </AppShell.Main>
        </AppShell>
    );
}