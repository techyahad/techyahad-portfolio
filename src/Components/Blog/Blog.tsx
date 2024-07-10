import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import image from "../../assets/images/Mockuo.jpg"
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Card from './Card';

const BlogSection: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20 ">
            <header className="w-full flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-4">
                    Take a Look at tha  <span className='text-gray-500'>Latest Articles</span><span className="text-xl pl-2">■</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-4xl">
                    Stay updated with the latest trends and expert insights in web development, UI/UX design, and more.
                </p>
            </header>
            <div className=' w-full gap-8 mt-12 flex justify-between cursor-pointer '>
                <div className="w-1/2 rounded-xl overflow-hidden border bg-white">
                    <img className="w-full h-96 object-cover" src={image} />
                    <div className="px-10 pt-10 py-6 ">
                        <div className=" text-2xl font-semibold mb-2"> The Rapid Rise of Serverless Architecture in Modern Development</div>
                        <p className="text-gray-700 text-xl">
                            Explore how serverless architecture is transforming the way we build and deploy applications, its key advantages, and the challenges developers face when adopting this paradigm.
                        </p>
                    </div>
                    <div className="px-10 gap-6 flex  items-center mb-6">
                        <div className="flex items-center text-gray-600 text-xl gap-2">
                            <FaCalendarAlt size={20} />
                            October 8, 2022
                        </div>
                        <div className="flex items-center justify-center text-gray-600 text-xl gap-2 ">
                            <FaClock size={20} />
                            9 min read
                        </div>
                    </div>
                </div>
                <div className='w-1/2 space-y-6'>
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
        </div>
    );
};

export default BlogSection;
