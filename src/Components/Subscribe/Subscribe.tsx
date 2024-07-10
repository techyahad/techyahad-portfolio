import React from 'react';
import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";


const Subscribe: React.FC = () => {
    return (
        <div className="w-full my-16 p-12 bg-gray-900  text-white">
            <div className='container mx-auto'>
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Turn Your Brand into Great One!</h2>
                <p className="mb-4">Get the latest updates and offers in your inbox.</p>
                <form className="flex  items-center gap-8 ">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 border w-1/4 border-gray-700 rounded-md focus:outline-none bg-gray-900 text-white"
                    />
                    <div className="">
                        <Link to="/contact" className="relative group flex items-center">
                            <div className="relative flex items-center">
                                <span className="text-gray-300 text-xl group-hover:text-gray-200">Submit</span>
                                <GoArrowUpRight size={25} className="mt-1 ml-2 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent transition-all duration-300 group-hover:bg-gray-600"></div>
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
