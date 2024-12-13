import React from "react";
import { Container, Title, Text } from "@mantine/core";

const AboutSection = () => {
    return (
        <Container id="about" size="lg" py="xl">
            <Title order={2}>About Me</Title>
            <p className="pt-2 pb-3">
                Hello! I'm Ethan Bossenbroek, a software developer for
                <a href='https://whitepine.digital'> White Pine Digital</a> I'm wrapping up college this semester and wil
                be done this May. I will graduate with a B.S. in Computer Science. I spend a lot of my time working with Go
            Next.js and have been trying to get a better understanding of some ML stuff on Huggingface. </p>
            <p className="pb-3">
                When I'm not tinkering on the computer odds are I'm riffing on my guitars, hunting down new music or
                hanging out with Murphy (pictured bellow). I'm always up for learning something new, and tend to spend
                most
                of my time learning everything I can about the hobbies I'm passionate about.
            </p>
            <p className="pb-3">
                If you want to chat about tech, share a cool album or are just interested in learning more, feel free to
                reach out!
            </p>
        </Container>
    );
};

export default AboutSection;

