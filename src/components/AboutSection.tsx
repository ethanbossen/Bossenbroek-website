import React from "react";
import { Container, Title, Text } from "@mantine/core";

const AboutSection = () => {
    return (
        <Container id="about" size="lg" py="xl">
            <Title order={2}>About Me</Title>
            <div className="pl-2">
            <p className="pt-2 pb-3">
                Hey there! I&apos;m Ethan Bossenbroek, I have a degree in computer science from <a href="https://www.gvsu.edu">Grand Valley</a>
                and am currently working a summer job before I begin an internship this fall.
            </p>
            <p className="pb-3">
                I have many hobbies that you can learn more about through my blogs page that I will be adding to the site soon.
                I play guitar, collect guitar pedals and love listening to music. I also enjoy video games and collect comic books and
                physical music media. For music, some of my favorite generes are Heavy Metal, Rock, and more. I&apos;ll talk more about that in
                my blog posts when I get the motivation to write them.
            </p>
            <p className="pb-3">
                Whether you want to chat about tech, geek out over music, or just say hey, don&apos;t hesitate to reach out and connect!
            </p>
            </div>
        </Container>
    );
};

export default AboutSection;
