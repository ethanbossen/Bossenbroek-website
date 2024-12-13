import React from "react";
import { Container, Title, Text } from "@mantine/core";

const HomeSection = () => {
    return (
        <Container id="home" size="lg" py="xl">
            <Title order={1}>Hi, I&apos;m Ethan</Title>
            <div>
            <p className="pt-4 pl-2">Welcome to my website, where you can find examples of my work
                and learn more about me. Thanks for checking it out!</p>

            </div>
        </Container>
    );
};

export default HomeSection;
