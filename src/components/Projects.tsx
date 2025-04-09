import React from "react";
import { Container, SimpleGrid, Card, Text, Title, Anchor } from "@mantine/core";

const Projects = () => {
  const repos = [
    {
      title: "SMD-Docx",
      description: "A GoLang daemon utilizing LibreOffice to convert .docx and .pptx files into PDFs upon detection",
      link: "https://github.com/ethanbossen/SMD-docx",
    },
    {
      title: "Font Picker",
      description: "A fast, attractive ReactJS component integrated with Google Font API for selecting fonts",
      link: "https://github.com/ethanbossen/Font-Picker",
    },
    {
      title: "This Site",
      description: "This website built with NextJS, Mantine, Tailwind & hosted on Vercel",
      link: "https://github.com/ethanbossen/Bossenbroek-website",
    },
    {
      title: "GvZork",
      description: "A class project where my friend and I created a text based adventure game",
      link: "https://github.com/ethanbossen/GVZork",
    },
  ];

  return (
    <Container id="projects" size="lg" py="xl">
      <Title order={2} mb="md">Projects</Title>
      <SimpleGrid cols={2} spacing="lg">
        {repos.map((repo) => (
          <div key={repo.title} style={{ height: '100%' }}>
            <Anchor
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", height: "100%", display: "block" }}
            >
              <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Title order={4} mb="xs">{repo.title}</Title>
                <Text mb="sm" style={{ flexGrow: 1 }}>{repo.description}</Text>
              </Card>
            </Anchor>
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
