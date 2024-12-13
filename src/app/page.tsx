"use client";

import React from "react";
import { AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/Gallery";
import ContactSection from "@/components/Footer";

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
            className="accent-blue-400"
        >
            <AppShell.Header>
                <div className="flex gap-4 pt-2 pl-3">
                <Burger
                    opened={mobileOpened}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                    size="md"
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
                    label="Photos"
                    component={Link}
                    href="#gallery"
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
                <ServicesSection />
                <ContactSection />
            </AppShell.Main>
        </AppShell>
    );
}

