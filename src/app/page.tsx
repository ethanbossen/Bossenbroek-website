"use client";

import React from "react";
import { AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
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
                <div className="flex items-center gap-4 pt-2 pl-3 h-full">
                    <Burger
                        opened={mobileOpened}
                        onClick={toggleMobile}
                        hiddenFrom="sm"
                        size="sm"
                        className="ml-3"
                    />
                <div className="text-3xl font-bold">Ethan Bossenbroek</div>
                </div>
            </AppShell.Header>

            <AppShell.Navbar p="sm">
                <NavLink
                    label="Home"
                    component={Link}
                    href="#home"
                    onClick={() => toggleMobile()}
                />
                <NavLink
                    label="About"
                    component={Link}
                    href="#about"
                    onClick={() => toggleMobile()}
                />
                <NavLink
                    label="Projects"
                    component={Link}
                    href="#projects"
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
                    href="#footer"
                    onClick={() => toggleMobile()}
                />
            </AppShell.Navbar>

            <AppShell.Main>
                <HomeSection />
                <AboutSection />
                <Projects />
                <ContactSection />
            </AppShell.Main>
        </AppShell>
    );
}
