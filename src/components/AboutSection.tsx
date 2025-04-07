import React from "react";
import { Container, Title, Text } from "@mantine/core";

const AboutSection = () => {
    return (
        <Container id="about" size="lg" py="xl">
            <Title order={2}>About Me</Title>
            <div className="pl-2">
            <p className="pt-2 pb-3">
                Hey there! I&apos;m Ethan Bossenbroek — a soon-to-be Computer Science graduate wrapping up my final semester of college this May.
            </p>
            <p className="pb-3">
                Outside of coding, you’ll usually find me playing guitar, digging for hidden music gems, or hanging out with my cat Murphy. I love diving deep into new interests and tend to go all-in on the hobbies I&apos;m passionate about.
            </p>
            <p className="pb-3">
                Whether you want to chat about tech, geek out over music, or just say hey — don&apos;t hesitate to reach out!
            </p>
            </div>
        </Container>
    );
};

export default AboutSection;
