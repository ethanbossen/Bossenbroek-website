import React from "react";
import { Container, Title, Group, ActionIcon, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandInstagram, IconBrandDiscord, IconMail } from "@tabler/icons-react";

const Footer = () => {
    return (
        <Container id="footer" size="lg" py="xl" style={{ textAlign: "center" }}>
            <Title order={3} mb="sm">
                Connect with Me
            </Title>
            <div className="flex gap-2 pt-2 justify-center">
                {/* GitHub */}
                <ActionIcon
                    component="a"
                    href="https://github.com/ethanbossen"
                    target="_blank"
                    size="lg"
                    variant="outline"
                    aria-label="GitHub"
                >
                    <IconBrandGithub size={24} />
                </ActionIcon>

                {/* Instagram */}
                <ActionIcon
                    component="a"
                    href="https://instagram.com/ethan.bossenbroek"
                    target="_blank"
                    size="lg"
                    variant="outline"
                    aria-label="Instagram"
                >
                    <IconBrandInstagram size={24} />
                </ActionIcon>

                {/* Discord */}
                <ActionIcon
                    component="a"
                    href="https://discord.com/users/frath.42"
                    target="_blank"
                    size="lg"
                    variant="outline"
                    aria-label="Discord"
                >
                    <IconBrandDiscord size={24} />
                </ActionIcon>

                {/* Gmail */}
                <ActionIcon
                    component="a"
                    href="mailto:ethan.bossenbroek@gmail.com"
                    size="lg"
                    variant="outline"
                    aria-label="Email"
                >
                    <IconMail size={24} />
                </ActionIcon>
            </div>
            <Text mt="md" color="dimmed" size="sm">
                © {new Date().getFullYear()} Ethan Bossenbroek. All rights reserved.
            </Text>
        </Container>
    );
};

export default Footer;