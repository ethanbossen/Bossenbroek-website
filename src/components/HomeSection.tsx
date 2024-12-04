import React from "react";

const HomeSection: React.FC = () => {
    return (
        <div
            id="home"
            className="m-auto w-full min-h-[89vh] flex flex-col items-center justify-center text-white px-4"
        >
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Hi, I'm Ethan!
                </h1>
                <div className="flex items-center justify-center max-w-3xl">
                    <p className="text-lg md:text-2xl mb-8">
                        Welcome to my website! Here I display my collections, what I currently care about, stuff I find cool and some of my past work. Oh and keep an eye out for easter eggs!
                    </p>
                </div>
                <a
                    href="#projects"
                    className="bg-green-500 text-purple-900 hover:bg-green-600 font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                >
                    Button
                </a>
            </div>
        </div>
    );
};

export default HomeSection;