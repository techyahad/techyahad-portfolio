import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import image from "../../assets/images/Mockuo.jpg"

const BlogSection: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold">Latest</h2>
                <p className="text-2xl text-gray-600">blog post</p>
                <p className="mt-4 text-gray-500">Fresh Insights, Dive into My Latest Blog Post for Innovative Ideas and Inspirations.</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    See More <FaArrowRight className="ml-2" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative">
                    <img src={image} alt="Blog 1" className="rounded-lg shadow-lg w-full" />
                    <div className="absolute bottom-4 right-4 bg-blue-500 p-2 rounded-full">
                        <FaArrowRight className="text-white" />
                    </div>
                </div>
                <div className="relative">
                    <img src={image} alt="Blog 2" className="rounded-lg shadow-lg w-full" />
                    <div className="absolute bottom-4 right-4 bg-blue-500 p-2 rounded-full">
                        <FaArrowRight className="text-white" />
                    </div>
                </div>
                <div className="relative">
                    <img src={image} alt="Blog 3" className="rounded-lg shadow-lg w-full" />
                    <div className="absolute bottom-4 right-4 bg-blue-500 p-2 rounded-full">
                        <FaArrowRight className="text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
