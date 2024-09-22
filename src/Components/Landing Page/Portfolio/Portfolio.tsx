import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Thumb from "../../../assets/Portfolio/Thumb.jpg";
import Image from "../../../assets/Portfolio/First Image.jpg";


import './Portfolio.css';
import { Link } from "react-router-dom"



const Portfolio: React.FC = () => {

    return (
        <div className="container font-serif mx-auto h-auto flex flex-col my-24 md:p-0 p-6">
            <div className="container mx-auto flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl text-gray-800 font-medium mb-6">Discover my <span className='text-gray-500'>Creative Projects..</span> </h1>
                    <p className="text-gray-600 text-lg max-w-4xl">Journey through our diverse projects, unveiling innovation, creativity, and excellence.</p>
                </div>
            </div>
            <div className='my-16'>
                <div className="relative cursor-pointer">
                    <img src={Thumb} className='rounded-xl w-full h-[800px] object-cover' alt="" />
                    <div className="absolute inset-0 flex flex-col justify-end p-24 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-700 bg-opacity-60 rounded-xl">
                        <div className="text-left">
                            <h2 className="text-8xl text-gray-300 w-1/2 opacity-90  font-medium">Virtual Reality Platform</h2>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="text-2xl text-gray-300 border rounded-full px-6 py-2">UI/UX</span>
                                <span className="text-2xl text-gray-300 border rounded-full px-2 py-2">Web Development</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center mt-12 gap-10'>
                    <div className="relative w-1/2 h-[800px] cursor-pointer">
                        <img src={Image} className='rounded-xl w-full h-full object-fill' alt="" />
                        <div className="absolute inset-0 flex flex-col justify-end p-12 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-60 rounded-xl">
                            <div className="text-left">
                                <h2 className=" text-gray-300 text-5xl font-semibold">Crypto Token Website </h2>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="text-lg text-gray-300 rounded-full border px-3 py-2">UI/UX</span>
                                    <span className="text-lg text-gray-300 rounded-full border px-3 py-2">Web Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-1/2 h-[800px] cursor-pointer">
                        <img src={Thumb} className='rounded-xl w-full h-full object-cover' alt="" />
                        <div className="absolute inset-0 flex flex-col justify-end p-12 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-700 bg-opacity-60 rounded-xl">
                            <div className="text-left">
                                <h2 className=" text-gray-300 text-5xl font-semibold">Legal AI Website</h2>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="text-lg text-gray-300 rounded-full border px-3 py-2">UI/UX</span>
                                    <span className="text-lg text-gray-300 rounded-full border px-3 py-2">Web Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center mt-16'>
                    <div className="hidden md:flex cursor-pointer">
                        <Link to="/contact" className="flex items-center justify-center text-gray-800 py-3 rounded-full hover:bg-gray-800 px-6 border-2 font-normal text-xl group relative">
                            <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                <span className="">View All</span>
                                <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div >

    );
};

export default Portfolio;
