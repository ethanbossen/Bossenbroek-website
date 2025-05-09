import React from 'react';
import Card from './Card';


interface CardProps {
    blogs: {
        title: string;
        desc: string;
        link?: string;
    }[];
}

const CardsContainer: React.FC<CardProps> = ({ blogs }) => {
    return (
        <div className="justify-center">
            <div className="flex flex-col items-center gap-8 justify-center max-w-5xl">
                {blogs.map((article, index) => (
                    <Card key={index} title={article.title} desc={article.desc} link={article.link} />
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;