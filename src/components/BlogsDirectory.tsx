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
        <div className="flex flex-wrap justify-start text-align-left">
            <h1 className="text-left text-4xl font-bold mb-8">Blogs</h1>
            <div className="flex flex-col gap-8 justify-start max-w-5xl w-full px-4 md:px-0 text-left">
                {blogs && blogs.length > 0 ? (
                    blogs.map((article, index) => (
                        <Card key={index} title={article.title} desc={article.desc} link={article.link} />
                    ))
                ) : (
                    <Card title="Coming Soon" desc="More blog posts will be added shortly. Stay tuned!" />
                )}
            </div>
        </div>
    );
};

export default CardsContainer;