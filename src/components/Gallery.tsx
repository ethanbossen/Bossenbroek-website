import React from "react";
import { Container, Title, Text, Card } from "@mantine/core";

const Gallery = () => {
    const photos = [
        { title: "Murphy", src: "../photos/Murphy.jpeg" },
        { title: "Photo 2", src: "/path/to/photo2.jpg" },
        { title: "Photo 3", src: "/path/to/photo3.jpg" },
        { title: "Photo 4", src: "/path/to/photo4.jpg" },
        { title: "Photo 5", src: "/path/to/photo5.jpg" },
        { title: "Photo 6", src: "/path/to/photo6.jpg" },
        { title: "Photo 7", src: "/path/to/photo7.jpg" },
        { title: "Photo 8", src: "/path/to/photo8.jpg" },
    ];

    return (
        <div id="gallery" className="flex flex-col gap-2 pt-2">
            <Title order={2}>Photo Gallery</Title>
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
                {photos.map((photo, index) => (
                    <div key={index} className="w-1/5">
                        <Card shadow="sm" radius="md" withBorder>
                            <img src={photo.src} alt={photo.title} className="w-full h-auto rounded-md" />
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;