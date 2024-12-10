import React from "react";

const Home = () => {
    return (
        <>
            {/* Header Section */}
            <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
                <div className="flex items-center space-x-3">
                    <img
                        src="img/logo.png" // Replace this with the path to your uploaded image
                        alt="Animals Need Attention Logo"
                        className="w-12 h-12 rounded-full"
                    />
                    <span className="text-xl font-semibold text-gray-800">
                        Animals Need Attention
                    </span>
                </div>
                <nav className="flex space-x-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                    <a href="#events" className="text-gray-600 hover:text-gray-900">Events</a>
                </nav>
                <button className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">
                    Donate
                </button>
            </header>

            {/* Hero Section */}
            <section className="relative w-full h-[80vh] flex items-center bg-gray-100">
                {/* Background Image */}
                <img
                    src="img/hero_img.svg" // Replace this with the path to your uploaded image
                    alt="Hero Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#3C88AA80] to-[#2B6179]"></div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col items-start justify-center max-w-4xl px-12 text-white ml-auto">
                    <h1 className="text-5xl font-bold mb-4">Animals Need Attention</h1>
                    <p className="text-lg max-w-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis metus
                        vulputate eu torquent. Convallis nisi molestie dis ornare arcu.
                    </p>
                </div>
            </section>

            <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="border border-[#CE8B59] rounded-lg shadow-lg overflow-hidden bg-white">
                        <img
                            src="img/card_img.svg" // Replace this with the path to your image
                            alt="Goat"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum odor amet, consectetur adipiscing elit. Cras lobortis
                                metus vulputate eu torquent. Convallis nisi molestie dis ornare
                                arcu.
                            </p>
                            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                                Read more
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-[#CE8B59] rounded-lg shadow-lg overflow-hidden bg-white">
                        <img
                            src="img/card_img.svg" // Replace this with the path to your image
                            alt="Goat"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum odor amet, consectetur adipiscing elit. Cras lobortis
                                metus vulputate eu torquent. Convallis nisi molestie dis ornare
                                arcu.
                            </p>
                            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                                Read more
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-[#CE8B59] rounded-lg shadow-lg overflow-hidden bg-white">
                        <img
                            src="img/card_img.svg" // Replace this with the path to your image
                            alt="Goat"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum odor amet, consectetur adipiscing elit. Cras lobortis
                                metus vulputate eu torquent. Convallis nisi molestie dis ornare
                                arcu.
                            </p>
                            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div>
                <img src="img/i am hungury.png" alt="Hero Background" />
            </div>
        </section>
        </>
    );
};

export default Home;
