import React from "react";

interface CardProps {
    title: string;
    desc: string;
    link?: string;
}

const Card: React.FC<CardProps> = ({ title, desc, link }) => {
    return (
        <div className="max-w-auto flex flex-col gap-4 bg-green-50 border-2 border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
            <a href={link}>
                <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-700">{desc}</p>
            </a>
        </div>
    );
};

export default Card;