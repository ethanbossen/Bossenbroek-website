import React, { useState } from "react";
import { Modal, Card, Title } from "@mantine/core";

type Photo = {
    title: string;
    src: string;
};

const Gallery = () => {
    const photos: Photo[] = [
        { title: "Murphy", src: "/photos/Murphy.jpeg" },
        { title: "Guitar with Amps", src: "/photos/Guitar_with_amps.jpeg" },
        { title: "Nat and Me", src: "/photos/Nat_and_me.jpeg" },
        { title: "Takanaka", src: "/photos/Takanaka.jpeg" },
    ];

    const [opened, setOpened] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    const openModal = (photo: Photo) => {
        setSelectedPhoto(photo);
        setOpened(true);
    };

    const closeModal = () => {
        setOpened(false);
        setSelectedPhoto(null);
    };

    return (
        <div id="gallery" className="flex flex-col gap-2 pt-2">
            <Title order={2}>Photo Gallery</Title>
            <div className="flex gap-4 pt-4 justify-center">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/3  lg:w-1/5 cursor-pointer"
                        onClick={() => openModal(photo)}
                    >
                        <Card
                            shadow="sm"
                            radius="md"
                            withBorder
                            className="aspect-square flex justify-center items-center"
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="object-cover w-full h-full rounded-md"
                            />
                        </Card>
                    </div>
                ))}
            </div>

    <Modal
        opened={opened}
        onClose={closeModal}
        size="auto"
        centered
    >
        {selectedPhoto && (
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    className="max-w-full max-h-[90vh] rounded-md"
                />
            </div>
        )}
    </Modal>
</div>
)
    ;
};

export default Gallery;